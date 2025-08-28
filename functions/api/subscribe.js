/**
 * POST /api/subscribe
 * Handles newsletter subscription form submissions and saves to Google Sheets
 */
export async function onRequestPost(context) {
  try {
    // Parse the form data
    const formData = await context.request.formData();
    const email = formData.get('email');

    // Basic validation
    if (!email || !email.includes('@')) {
      return new Response(JSON.stringify({ 
        success: false, 
        message: 'Please provide a valid email address' 
      }), {
        status: 400,
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
      });
    }

    // Save to Google Sheets via Apps Script
    const sheetsResult = await saveToGoogleSheets(email, context);
    
    if (!sheetsResult.success) {
      console.error('Failed to save to Google Sheets:', sheetsResult.error);
      // Still log the subscription locally even if Sheets fails
      console.log(`New subscription (local only): ${email}`);
    } else {
      console.log(`New subscription saved to Sheets: ${email}`);
    }

    // Redirect back to home page with success message
    return new Response(null, {
      status: 302,
      headers: {
        'Location': `/?subscribed=true&email=${encodeURIComponent(email)}`,
      },
    });

  } catch (err) {
    console.error('Error processing subscription:', err);
    
    return new Response(JSON.stringify({ 
      success: false, 
      message: 'An error occurred while processing your subscription' 
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
    });
  }
}

/**
 * Saves email subscription to Google Sheets via Apps Script
 */
async function saveToGoogleSheets(email, context) {
  try {
    // Get the Apps Script web app URL from environment variables
    // You'll need to set this in your Cloudflare Pages environment variables
    const APPS_SCRIPT_URL = context.env.GOOGLE_APPS_SCRIPT_URL;
    
    if (!APPS_SCRIPT_URL) {
      return { success: false, error: 'Missing Google Apps Script URL configuration' };
    }

    // Prepare form data to send to Apps Script
    const formData = new FormData();
    formData.append('email', email);
    
    // Call the Google Apps Script web app
    const response = await fetch(APPS_SCRIPT_URL, {
      method: 'POST',
      body: formData
    });

    if (!response.ok) {
      const errorData = await response.text();
      throw new Error(`Apps Script error: ${response.status} - ${errorData}`);
    }

    const result = await response.json();
    
    if (!result.success) {
      throw new Error(result.error || 'Unknown error from Apps Script');
    }

    return { success: true };
    
  } catch (error) {
    console.error('Google Apps Script error:', error);
    return { success: false, error: error.message };
  }
}
