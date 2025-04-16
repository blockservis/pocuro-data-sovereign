
import React from "react";
import { cn } from "@/lib/utils";

export interface TestimonialAuthor {
  name: string;
  handle?: string;
  title?: string;
  avatar?: string;
}

interface TestimonialCardProps {
  author: TestimonialAuthor;
  text: string;
  href?: string;
}

export function TestimonialCard({ author, text, href }: TestimonialCardProps) {
  // Default avatar images if author.avatar is missing or invalid
  const defaultAvatars = [
    "/lovable-uploads/9a81b6c0-9f3e-4b3d-a296-b2567cf70566.png",
    "/lovable-uploads/8e0cccd7-1ee2-40b4-ab2b-872ad9ab82dd.png",
    "/lovable-uploads/6f486a44-1594-48bb-9d19-82f268cafe20.png"
  ];
  
  // Get a consistent avatar based on the author's name
  const getDefaultAvatar = (name: string) => {
    const index = name.charCodeAt(0) % defaultAvatars.length;
    return defaultAvatars[index];
  };

  return (
    <a
      href={href}
      target={href ? "_blank" : undefined}
      rel={href ? "noopener noreferrer" : undefined}
      className={cn(
        "group relative flex shrink-0 flex-col justify-between rounded-xl border border-border bg-card p-6 shadow-sm transition-all",
        "w-[300px] sm:w-[330px] md:w-[350px]",
        href ? "cursor-pointer hover:border-muted-foreground" : "cursor-default"
      )}
    >
      <blockquote>
        <p className="text-foreground">"{text}"</p>
        <div className="mt-6 flex items-center">
          {author.avatar || getDefaultAvatar(author.name) ? (
            <div className="mr-3 h-10 w-10 overflow-hidden rounded-full border">
              <img
                src={author.avatar || getDefaultAvatar(author.name)}
                alt={author.name}
                width={40}
                height={40}
                className="h-full w-full object-cover"
              />
            </div>
          ) : (
            <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-muted text-muted-foreground">
              {author.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </div>
          )}
          <div>
            <cite className="not-italic text-muted-foreground">
              <div className="font-semibold text-foreground">{author.name}</div>
              {author.title && <div>{author.title}</div>}
              {author.handle && <div>{author.handle}</div>}
            </cite>
          </div>
        </div>
      </blockquote>
    </a>
  );
}
