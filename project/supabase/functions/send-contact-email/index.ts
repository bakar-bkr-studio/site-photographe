import { Resend } from 'npm:resend@1.0.0';

const resend = new Resend('re_97Frx2Fm_GQ14pdD9B2Ykzmre6YVyXjXF');

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !subject || !message) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields' }),
        { 
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      );
    }

    const emailContent = `
      Nouveau message de contact :
      
      De : ${name}
      Email : ${email}
      Sujet : ${subject}
      
      Message :
      ${message}
      
      Date : ${new Date().toLocaleString('fr-FR')}
    `;

    console.log('Sending email with content:', emailContent);

    const data = await resend.emails.send({
      from: 'Resend <onboarding@resend.dev>',
      to: 'bkr.studio77@gmail.com',
      subject: `Nouveau message : ${subject}`,
      text: emailContent,
    });

    console.log('Email sent successfully:', data);

    return new Response(
      JSON.stringify({ message: 'Email sent successfully', data }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    console.error('Error in send-contact-email function:', error);

    return new Response(
      JSON.stringify({ 
        error: error instanceof Error ? error.message : 'An unexpected error occurred',
        details: error instanceof Error ? error.stack : undefined
      }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});