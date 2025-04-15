
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';

export interface TestimonialAuthor {
  name: string;
  handle?: string;
  avatar?: string;
}

export interface TestimonialCardProps {
  author: TestimonialAuthor;
  text: string;
  href?: string;
  className?: string;
}

export function TestimonialCard({ 
  author, 
  text, 
  href, 
  className 
}: TestimonialCardProps) {
  return (
    <div className={cn(
      "flex w-[300px] shrink-0 flex-col gap-4 rounded-xl bg-card p-6 shadow-md",
      className
    )}>
      <div className="flex items-center gap-4">
        <Avatar className="h-10 w-10">
          <AvatarImage src={author.avatar} alt={author.name} />
          <AvatarFallback>{author.name[0]}</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <p className="text-sm font-medium">{author.name}</p>
          {author.handle && (
            <p className="text-xs text-muted-foreground">{author.handle}</p>
          )}
        </div>
      </div>
      
      <p className="text-sm text-muted-foreground">"{text}"</p>
      
      {href && (
        <a 
          href={href} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-xs text-blue-500 hover:underline"
        >
          View on Twitter
        </a>
      )}
    </div>
  );
}
