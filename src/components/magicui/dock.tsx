import { cn } from "@/lib/utils";
import { motion, type MotionValue, useMotionValue, useSpring, useTransform } from "motion/react";
import { createContext, useContext, useRef, type ReactNode } from "react";

interface DockProps {
  className?: string;
  children: ReactNode;
  magnification?: number;
  distance?: number;
  static?: boolean;
}

interface DockIconProps {
  className?: string;
  children?: ReactNode;
  size?: number;
}

const DEFAULT_MAGNIFICATION = 48;
const DEFAULT_DISTANCE = 80;
const BASE_SIZE = 40;
const BASE_ICON_SIZE = 20;
const ICON_SIZE_RATIO = 0.5;
const SPRING = { mass: 0.1, stiffness: 150, damping: 12 };

interface DockContextValue {
  mouseX: MotionValue<number>;
  magnification: number;
  distance: number;
  static: boolean;
  iconSize: number;
}

const DockContext = createContext<DockContextValue | null>(null);

const Dock = ({
  className,
  children,
  magnification = DEFAULT_MAGNIFICATION,
  distance = DEFAULT_DISTANCE,
  static: isStatic = false,
}: DockProps) => {
  const mouseX = useMotionValue(Infinity);
  const iconSize = isStatic ? 32 : BASE_SIZE;

  return (
    <DockContext.Provider value={{ mouseX, magnification, distance, static: isStatic, iconSize }}>
      <motion.div
        onMouseMove={isStatic ? undefined : (e) => mouseX.set(e.pageX)}
        onMouseLeave={isStatic ? undefined : () => mouseX.set(Infinity)}
        className={cn(
          "mx-auto flex items-center justify-center overflow-visible border",
          isStatic ? "h-12 rounded-2xl" : "min-h-14 h-auto rounded-full",
          className
        )}
      >
        {children}
      </motion.div>
    </DockContext.Provider>
  );
};

const DockIcon = ({ className, children, size }: DockIconProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const context = useContext(DockContext);

  if (!context) {
    throw new Error("DockIcon must be used within a Dock component");
  }

  const { mouseX, magnification, distance, static: isStatic, iconSize } = context;
  const containerSize = size ?? iconSize;
  const innerSize = Math.round(containerSize * ICON_SIZE_RATIO);

  if (isStatic) {
    return (
      <div
        className={cn(
          "relative flex aspect-square shrink-0 items-center justify-center rounded-xl",
          className
        )}
        style={{ width: containerSize, height: containerSize }}
      >
        <div
          className="flex items-center justify-center"
          style={{ width: innerSize, height: innerSize }}
        >
          {children}
        </div>
      </div>
    );
  }

  const distanceCalc = useTransform(mouseX, (val: number) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const animatedContainerSize = useSpring(
    useTransform(distanceCalc, [-distance, 0, distance], [BASE_SIZE, magnification, BASE_SIZE]),
    SPRING
  );
  const animatedIconSize = useSpring(
    useTransform(
      distanceCalc,
      [-distance, 0, distance],
      [BASE_ICON_SIZE, magnification * ICON_SIZE_RATIO, BASE_ICON_SIZE]
    ),
    SPRING
  );

  return (
    <motion.div
      ref={ref}
      style={{ width: animatedContainerSize, height: animatedContainerSize }}
      className={cn("relative flex aspect-square shrink-0 items-center justify-center rounded-full", className)}
    >
      <motion.div
        style={{ width: animatedIconSize, height: animatedIconSize }}
        className="flex items-center justify-center"
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export { Dock, DockIcon };
export type { DockProps, DockIconProps };
