import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, phone, address, message } = req.body;

  if (!name || !email || !phone || !address || !message) {
    return res.status(400).json({ error: 'Champs manquants' });
  }

  try {
    const response = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'api-key': process.env.BREVO_API_KEY!,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        sender: { name: 'Studio Renov', email: 'studiorenovfr@gmail.com' },
        to: [{ email: 'emy@emy-com.fr' }],
        replyTo: { email, name },
        subject: `Nouvelle demande de devis — ${name}`,
        htmlContent: `
          <h2>Nouvelle demande de devis</h2>
          <table style="border-collapse:collapse;width:100%">
            <tr><td style="padding:8px;font-weight:bold">Nom</td><td style="padding:8px">${name}</td></tr>
            <tr><td style="padding:8px;font-weight:bold">Email</td><td style="padding:8px">${email}</td></tr>
            <tr><td style="padding:8px;font-weight:bold">Téléphone</td><td style="padding:8px">${phone}</td></tr>
            <tr><td style="padding:8px;font-weight:bold">Adresse du projet</td><td style="padding:8px">${address}</td></tr>
            <tr><td style="padding:8px;font-weight:bold">Message</td><td style="padding:8px">${message}</td></tr>
          </table>
        `,
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      console.error('Brevo error:', error);
      return res.status(500).json({ error: 'Erreur lors de l\'envoi' });
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Handler error:', error);
    return res.status(500).json({ error: 'Erreur serveur' });
  }
}
