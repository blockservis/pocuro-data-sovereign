
// Follow the steps below to enable OAuth providers in your Supabase project:

// 1. Go to the Supabase dashboard (https://supabase.com/dashboard/project/getjbnslnwglazujjgxc/auth/providers)
// 2. For each provider (Google, Facebook, Apple):
//    a. Toggle the provider to "Enabled"
//    b. Enter the required credentials (Client ID and Client Secret)
//    c. Configure the redirect URL to your application URL
// 3. For Google:
//    - Create a Google Cloud project
//    - Set up OAuth 2.0 credentials in Google Cloud Console
//    - Add authorized JavaScript origins (your app URL)
//    - Add authorized redirect URI (from Supabase dashboard)
// 4. For Facebook:
//    - Create a Facebook App in Facebook Developers
//    - Set up Facebook Login
//    - Add your app domain and privacy policy URL
//    - Configure the OAuth redirect URI
// 5. For Apple:
//    - Register your app in Apple Developer account
//    - Create a Services ID
//    - Configure the domains and redirect URLs
//    - Generate client secret

export const info = {
  message: "Please follow the instructions in this file to set up OAuth providers."
};
