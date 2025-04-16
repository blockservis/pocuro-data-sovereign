
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
  return (
    <a
      href={href}
      target={href ? "_blank" : undefined}
      rel={href ? "noopener noreferrer" : undefined}
      className={cn(
        "group relative flex shrink-0 flex-col justify-between rounded-xl border border-border bg-card p-6 shadow-sm transition-all",
        "sm:max-w-[350px] md:max-w-[400px]",
        href ? "cursor-pointer hover:border-muted-foreground" : "cursor-default"
      )}
    >
      <blockquote>
        <p className="text-foreground">"{text}"</p>
        <div className="mt-6 flex items-center">
          {author.avatar ? (
            <div className="mr-3 h-10 w-10 overflow-hidden rounded-full border">
              <img
                src={author.avatar}
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
