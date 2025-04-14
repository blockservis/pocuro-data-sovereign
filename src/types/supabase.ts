
export interface Blog {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featured_image: string;
  author: string;
  author_image?: string;
  category: string;
  read_time: string;
  published_at: string;
  updated_at: string;
  is_published: boolean;
}

export interface FAQCategory {
  id: string;
  name: string;
  slug: string;
  display_order: number;
}

export interface FAQItem {
  id: string;
  category_id: string;
  question: string;
  answer: string;
  display_order: number;
}

export interface HelpCenterTopic {
  id: string;
  topic: string;
  content: string;
  created_at: string;
  updated_at: string;
}

export interface EarlyAccessSignup {
  id: string;
  email: string;
  name?: string;
  created_at: string;
}
