/**
 * POST /api/subscribe
 * Handles newsletter subscription form submissions
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

    // For now, we'll just return success
    // In the future, you can add:
    // - Cloudflare KV storage
    // - Email service integration
    // - Database storage
    
    console.log(`New subscription: ${email}`);

    // Redirect back to home page with success message
    return new Response(null, {
      status: 302,
      headers: {
        'Location': '/?subscribed=true',
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
