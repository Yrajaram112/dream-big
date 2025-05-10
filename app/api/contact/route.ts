import { client } from '@/lib/sanity';
import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, phone, message } = body;

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), { status: 400 });
    }

    // 1. Save to Sanity
    await client.create({
      _type: 'contact',
      name,
      email,
      phone,
      message,
      createdAt: new Date().toISOString(),
    });

    // 2. Send Email
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,        
        pass: process.env.EMAIL_PASS,         // App password (not your regular password)
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'We have received your message!',
      text: `Hi ${name},\n\nThanks for reaching out to us. We've received your message and will get back to you shortly.\n\n- Dream Big Team`,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    console.error('Error in contact API:', err);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
  }
}
