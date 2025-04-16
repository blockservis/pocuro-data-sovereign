
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
    const { data, error } = await supabase
      .from('testimonials')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (error) {
      throw error;
    }
    
    return data as Testimonial[];
  } catch (error) {
    console.error('Error fetching testimonials:', error);
    return [];
  }
}
