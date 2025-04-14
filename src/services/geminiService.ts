// This file contains service functions to interact with Google's Gemini AI API

// Use this function to get completion from Gemini
export const getGeminiCompletion = async (prompt: string) => {
  try {
    // Make a call to our edge function to keep the API key secure
    const response = await fetch('/api/gemini', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prompt }),
    });
    
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Failed to get response from Gemini API');
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error in getGeminiCompletion:', error);
    throw error;
  }
};
