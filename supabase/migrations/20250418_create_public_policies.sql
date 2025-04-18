
-- Function to create a public policy for the blogs table
CREATE OR REPLACE FUNCTION public.create_blogs_public_policy()
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  -- Check if the policy already exists and drop it if it does
  BEGIN
    DROP POLICY IF EXISTS "Allow public read access" ON public.blogs;
  EXCEPTION
    WHEN others THEN
      -- Policy doesn't exist, continue
      NULL;
  END;

  -- Create the public policy
  CREATE POLICY "Allow public read access" ON public.blogs
    FOR SELECT
    USING (true);
END;
$$;

-- Execute the function to create the policy
SELECT public.create_blogs_public_policy();
