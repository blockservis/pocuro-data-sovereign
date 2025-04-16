
import React from "react";
import { cn } from "@/lib/utils";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

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
  // Get author initials for fallback
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("");
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
          <Avatar className="mr-3 h-10 w-10">
            {author.avatar ? (
              <AvatarImage 
                src={author.avatar} 
                alt={author.name} 
                className="h-full w-full object-cover"
              />
            ) : null}
            <AvatarFallback>
              {getInitials(author.name)}
            </AvatarFallback>
          </Avatar>
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
