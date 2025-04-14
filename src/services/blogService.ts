
import { supabase } from '@/integrations/supabase/client';

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featured_image: string;
  author: string;
  category: string;
  read_time: string;
  published_at: string;
}

export async function fetchBlogPosts() {
  try {
    const { data, error } = await supabase
      .from('blogs')
      .select('*')
      .order('published_at', { ascending: false });
    
    if (error) {
      throw error;
    }
    
    return { success: true, data: data as BlogPost[] };
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return { 
      success: false, 
      message: 'Failed to fetch blog posts', 
      data: [] as BlogPost[] 
    };
  }
}

export async function fetchBlogPost(slug: string) {
  try {
    const { data, error } = await supabase
      .from('blogs')
      .select('*')
      .eq('slug', slug)
      .single();
    
    if (error) {
      throw error;
    }
    
    return { success: true, data: data as BlogPost };
  } catch (error) {
    console.error(`Error fetching blog post with slug ${slug}:`, error);
    return { 
      success: false, 
      message: 'Failed to fetch blog post',
      data: null
    };
  }
}

export async function fetchBlogCategories() {
  try {
    const { data, error } = await supabase
      .from('blogs')
      .select('category');
    
    if (error) {
      throw error;
    }
    
    // Extract unique categories
    const categories = ['All', ...new Set(data.map(item => item.category))];
    
    return { success: true, data: categories };
  } catch (error) {
    console.error('Error fetching blog categories:', error);
    return { 
      success: false, 
      message: 'Failed to fetch blog categories',
      data: ['All']
    };
  }
}
