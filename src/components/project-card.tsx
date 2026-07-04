/* eslint-disable @next/next/no-img-element */

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { assetUrl } from "@/lib/assets";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import Markdown from "react-markdown";

function ProjectImage({ src, alt }: { src: string; alt: string }) {
  const [imageError, setImageError] = useState(false);
  const resolvedSrc = assetUrl(src);

  if (!src || imageError) {
    return <div className="w-full h-48 bg-muted" />;
  }

  return (
    <img
      src={resolvedSrc}
      alt={alt}
      className="w-full h-48 object-cover"
      loading="lazy"
      referrerPolicy="no-referrer"
      onError={() => setImageError(true)}
    />
  );
}

interface Props {
  title: string;
  href?: string;
  demo?: string;
  description: string;
  dates: string;
  tags: readonly string[];
  image?: string;
  video?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  className?: string;
}

export function ProjectCard({
  title,
  href,
  demo,
  description,
  dates,
  tags,
  image,
  video,
  links,
  className,
}: Props) {
  const projectUrl = demo || href || "#";

  return (
    <div
      className={cn(
        "group relative flex flex-col h-full border border-border rounded-xl overflow-hidden hover:ring-2 hover:ring-muted transition-all duration-200",
        className
      )}
    >
      {href && (
        <a
          href={projectUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 z-0"
          aria-label={`Open ${title} on GitHub`}
        />
      )}

      <div className="relative shrink-0 z-10 pointer-events-none">
        <div className="block">
          {video ? (
            <video
              src={video}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-48 object-cover"
            />
          ) : image ? (
            <ProjectImage src={image} alt={title} />
          ) : (
            <div className="w-full h-48 bg-muted" />
          )}
        </div>
        {links && links.length > 0 && (
          <div className="absolute top-2 right-2 flex flex-wrap gap-2 pointer-events-auto">
            {links.map((link, idx) => (
              <a
                href={link.href}
                key={idx}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Badge
                  className="flex items-center gap-1.5 text-xs bg-black text-white hover:bg-black/90"
                  variant="default"
                >
                  {link.icon}
                  {link.type}
                </Badge>
              </a>
            ))}
          </div>
        )}
      </div>

      <div className="relative z-10 p-6 flex flex-col gap-3 flex-1 pointer-events-none">
        <div className="flex items-start justify-between gap-2">
          <div className="flex flex-col gap-1">
            <h3 className="font-semibold group-hover:text-primary transition-colors">
              {title}
            </h3>
            <time className="text-xs text-muted-foreground">{dates}</time>
          </div>
          <ArrowUpRight
            className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors shrink-0"
            aria-hidden
          />
        </div>
        <div className="text-xs flex-1 prose max-w-full text-pretty font-sans leading-relaxed text-muted-foreground dark:prose-invert">
          <Markdown>{description}</Markdown>
        </div>
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-auto">
            {tags.map((tag) => (
              <Badge
                key={tag}
                className="text-[11px] font-medium border border-border h-6 w-fit px-2"
                variant="outline"
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
