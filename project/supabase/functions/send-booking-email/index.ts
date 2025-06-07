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
    const { firstName, lastName, email, phone, eventDate, message, packageName, packagePrice } = await req.json();

    if (!firstName || !lastName || !email || !phone || !eventDate || !packageName) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields' }),
        { 
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      );
    }

    const emailContent = `
      Nouvelle réservation de service :
      
      Service : ${packageName}
      Prix : ${packagePrice}
      
      Informations client :
      Nom : ${firstName} ${lastName}
      Email : ${email}
      Téléphone : ${phone}
      Date souhaitée : ${eventDate}
      
      Message : ${message || 'Aucun message'}
    `;

    console.log('Sending booking email with content:', emailContent);

    const data = await resend.emails.send({
      from: 'Resend <onboarding@resend.dev>',
      to: 'bkr.studio77@gmail.com',
      subject: `Nouvelle réservation : ${packageName}`,
      text: emailContent,
    });

    console.log('Booking email sent successfully:', data);

    return new Response(
      JSON.stringify({ message: 'Email sent successfully', data }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    console.error('Error in send-booking-email function:', error);

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