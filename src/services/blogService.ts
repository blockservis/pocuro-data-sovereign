
import { supabase } from '@/integrations/supabase/client';
import { Blog } from '@/types/supabase';

export type BlogPost = Blog;

export async function fetchBlogPosts() {
  try {
    // Use 'any' to override TypeScript's types for now
    const { data, error } = await (supabase as any)
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
    const { data, error } = await (supabase as any)
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
    const { data, error } = await (supabase as any)
      .from('blogs')
      .select('category');
    
    if (error) {
      throw error;
    }
    
    // Extract unique categories
    const categories = ['All', ...new Set(data.map((item: any) => item.category))];
    
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
