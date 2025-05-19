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
      _type: 'contactForm',
      name,
      email,
      phone,
      message,
      createdAt: new Date().toISOString(),
    });

    // 2. Send Email
    const transporter = nodemailer.createTransport({
      // service: 'gmail',
      host: 'smtp.hostinger.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.NEXT_PUBLIC_EMAIL_USER,        
        pass: process.env.NEXT_PUBLIC_EMAIL_PASS,  
      },
    });

   await transporter.sendMail({
  from: process.env.EMAIL_USER,
  to: email,
  subject: `Thanks for reaching out, ${name}! 🎓 Your journey with DreamBig starts now.`,
  html: `
    <span style="display:none;">
      Thank you for connecting with DreamBig Educational Consultancy. We'll guide you every step of the way!
    </span>
    
      <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Thank You - DreamBig</title>
</head>
<body style="font-family: Arial, sans-serif; background-color: #f9f9f9; padding: 0; margin: 0;">
  <table align="center" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; margin: auto; background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); overflow: hidden;">
    <tr style="background-color: #003366;">
      <td style="padding: 20px; text-align: center;">
        <img src="https://www.dreambig.com.np/_next/image?url=%2Fimages%2Flogo%2Flogodream.jpg&w=384&q=75" alt="DreamBig Logo" style="max-width: 180px;">
      </td>
    </tr>
    <tr>
      <td style="padding: 30px;">
        <h2 style="color: #003366;">Thank You for Connecting With Us!</h2>
        <p style="font-size: 16px; color: #333;">
          Dear Student,<br><br>
          Thank you for reaching out to <strong>DreamBig Educational Consultancy</strong>. We're thrilled to help you on your journey toward higher education and global opportunities.
        </p>
        <blockquote style="font-style: italic; color: #555; border-left: 4px solid #003366; padding-left: 15px; margin: 20px 0;">
          "Education is the passport to the future, for tomorrow belongs to those who prepare for it today." ' Malcolm X
        </blockquote>
        <p style="font-size: 16px; color: #333;">
          We have a lot of exciting resources, guidance, and events coming your way. To stay in the loop and connect with other aspiring students, please join our exclusive WhatsApp group!
        </p>
        <div style="text-align: center; margin: 30px 0;">
          <a href="https://chat.whatsapp.com/JZGF7xH8tWcHZiVeihF7Op" style="background-color: #25D366; color: white; text-decoration: none; padding: 12px 24px; border-radius: 25px; font-weight: bold; font-size: 16px;">Join WhatsApp Group</a>
        </div>
        <p style="font-size: 14px; color: #666;">
          If you have any questions or need personalized assistance, don't hesitate to reply to this email or contact our team directly.
        </p>
        <p style="font-size: 14px; color: #666; margin-top: 40px;">
          With warm regards,<br>
          <strong>The DreamBig Team</strong><br>
          <em>Your future, our guidance.</em>
        </p>
      </td>
    </tr>
    <tr style="background-color: #f0f0f0; text-align: center;">
      <td style="padding: 20px; font-size: 12px; color: #888;">
        © 2025 DreamBig Educational Consultancy, Nepal.<br>
        All rights reserved.
      </td>
    </tr>
  </table>
</body>
</html>

  `,
});


const adminMessage = `
  <p>Dear Mentor,</p>

  <p>A new student has submitted their details. Please review and reach out to them at your earliest convenience.</p>

  <ul>
    <li><strong>Name:</strong> ${name}</li>
    <li><strong>Email:</strong> ${email}</li>
    <li><strong>Phone:</strong> ${phone}</li>
    <li><strong>Message:</strong> ${message}</li>
  </ul>

  <p>Let's guide them toward a brighter future! 🌟</p>

  <p>- DreamBig Team</p>
`;
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: "prakashsah5555@gmail.com",
      subject: "New Student Inquiry - Please Reach Out",
      html: adminMessage
      });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: "rakeshsah192837465@gmail.com",
      subject: "New Student Inquiry - Please Reach Out",
      html:adminMessage
     });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    console.error('Error in contact API:', err);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
  }
}


