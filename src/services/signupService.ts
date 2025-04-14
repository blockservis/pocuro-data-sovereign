
import { supabase } from '@/integrations/supabase/client';

export async function submitEarlyAccess(email: string, name?: string) {
  try {
    const { data, error } = await supabase
      .from('early_access_signups')
      .insert([
        { email, name }
      ])
      .select();
    
    if (error) {
      if (error.code === '23505') {
        return { success: false, message: 'This email has already signed up for early access.' };
      }
      throw error;
    }
    
    return { success: true, data };
  } catch (error) {
    console.error('Error submitting early access signup:', error);
    return { 
      success: false, 
      message: 'There was an error submitting your request. Please try again later.' 
    };
  }
}
