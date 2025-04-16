
import { supabase } from '@/integrations/supabase/client';

export interface Testimonial {
  id: string;
  author_name: string;
  author_title?: string;
  author_handle?: string;
  author_avatar?: string;
  content: string;
  rating?: number;
  href?: string;
  created_at: string;
}

export async function getTestimonials() {
  try {
    // Using a type assertion to handle the Supabase type mismatch
    // This is safe because we know our table structure matches the Testimonial interface
    const { data, error } = await supabase
      .from('testimonials')
      .select('*')
      .order('created_at', { ascending: false }) as { 
        data: Testimonial[] | null; 
        error: any;
      };
    
    if (error) {
      throw error;
    }
    
    return data || [];
  } catch (error) {
    console.error('Error fetching testimonials:', error);
    return [];
  }
}
