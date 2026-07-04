import { Dock, DockIcon } from "@/components/magicui/dock";
import { useCopyEmail } from "@/components/copy-email";
import { useIsMobile } from "@/hooks/use-is-mobile";
import { ModeToggle } from "@/components/mode-toggle";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipArrow,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { DATA } from "@/data/resume";
import { Check, Mail } from "lucide-react";

export default function Navbar() {
  const base = import.meta.env.BASE_URL;
  const isMobile = useIsMobile();
  const { copied, handleCopy } = useCopyEmail();

  const resolveHref = (href: string) => {
    if (href.startsWith("#")) return `${base.replace(/\/$/, "")}/${href}`;
    if (href === "/") return base;
    return href;
  };

  const socialLinks = Object.entries(DATA.contact.social).filter(
    ([name, social]) => social.navbar && !(isMobile && name === "Portfolio")
  );

  const dockIconClass = cn(
    "cursor-pointer bg-background p-0 text-foreground hover:text-foreground hover:bg-muted backdrop-blur-3xl border border-border transition-colors",
    isMobile ? "rounded-xl" : "rounded-2xl"
  );

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-30 overflow-visible px-2 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-8">
      <Dock
        static={isMobile}
        className={cn(
          "z-50 pointer-events-auto relative mx-auto border bg-card/90 backdrop-blur-3xl shadow-[0_0_10px_3px] shadow-primary/5",
          isMobile
            ? "w-full max-w-[calc(100vw-1rem)] gap-0.5 overflow-x-auto overflow-y-visible px-1.5 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            : "w-fit max-w-[calc(100vw-1.5rem)] gap-1.5 py-1.5 sm:gap-2"
        )}
      >
        {DATA.navbar.map((item) => {
          const isExternal = item.href.startsWith("http");
          const href = isExternal ? item.href : resolveHref(item.href);
          return (
            <Tooltip key={item.href}>
              <TooltipTrigger asChild>
                <a
                  href={href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  className="shrink-0"
                >
                  <DockIcon className={cn(dockIconClass, "size-full")}>
                    <item.icon className="size-full rounded-sm overflow-hidden object-contain" />
                  </DockIcon>
                </a>
              </TooltipTrigger>
              <TooltipContent
                side="top"
                sideOffset={8}
                className="rounded-xl bg-primary text-primary-foreground px-4 py-2 text-sm shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3)] dark:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]"
              >
                <p>{item.label}</p>
                <TooltipArrow className="fill-primary" />
              </TooltipContent>
            </Tooltip>
          );
        })}

        {!isMobile && (
          <Separator orientation="vertical" className="h-2/3 m-auto w-px bg-border shrink-0" />
        )}

        {socialLinks.map(([name, social], index) => {
          const isExternal = social.url.startsWith("http");
          const IconComponent = social.icon;
          return (
            <Tooltip key={`social-${name}-${index}`}>
              <TooltipTrigger asChild>
                <a
                  href={social.url}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  className="shrink-0"
                >
                  <DockIcon className={cn(dockIconClass, "size-full")}>
                    <IconComponent className="size-full rounded-sm overflow-hidden object-contain" />
                  </DockIcon>
                </a>
              </TooltipTrigger>
              <TooltipContent
                side="top"
                sideOffset={8}
                className="rounded-xl bg-primary text-primary-foreground px-4 py-2 text-sm shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3)] dark:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]"
              >
                <p>{name}</p>
                <TooltipArrow className="fill-primary" />
              </TooltipContent>
            </Tooltip>
          );
        })}

        <Tooltip>
          <TooltipTrigger asChild>
            <button type="button" onClick={handleCopy} className="shrink-0">
              <DockIcon className={cn(dockIconClass, "size-full")}>
                {copied ? (
                  <Check className="size-full rounded-sm" />
                ) : (
                  <Mail className="size-full rounded-sm" />
                )}
              </DockIcon>
            </button>
          </TooltipTrigger>
          <TooltipContent
            side="top"
            sideOffset={8}
            className="rounded-xl bg-primary text-primary-foreground px-4 py-2 text-sm shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3)] dark:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]"
          >
            <p>{copied ? "Copied!" : "Copy email"}</p>
            <TooltipArrow className="fill-primary" />
          </TooltipContent>
        </Tooltip>

        {!isMobile && (
          <Separator orientation="vertical" className="h-2/3 m-auto w-px bg-border shrink-0" />
        )}

        <Tooltip>
          <TooltipTrigger asChild>
            <div className="shrink-0">
              <DockIcon
                className={cn(
                  dockIconClass,
                  "size-full text-muted-foreground"
                )}
              >
                <ModeToggle className="size-full cursor-pointer" />
              </DockIcon>
            </div>
          </TooltipTrigger>
          <TooltipContent
            side="top"
            sideOffset={8}
            className="rounded-xl bg-primary text-primary-foreground px-4 py-2 text-sm shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3)] dark:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]"
          >
            <p>Theme</p>
            <TooltipArrow className="fill-primary" />
          </TooltipContent>
        </Tooltip>
      </Dock>
    </div>
  );
}
