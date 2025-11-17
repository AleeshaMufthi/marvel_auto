import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();  // formData from your frontend

    const { name, email, phone, message } = body;

    // 🔐 SMTP Transporter (Zoho, Hostinger, Gmail SMTP — your choice)
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,       // smtp.zoho.com / smtp.hostinger.com / smtp.gmail.com
      port: Number(process.env.SMTP_PORT), // 465 or 587
      secure: Number(process.env.SMTP_PORT) === 465, // true for 465 SSL
      auth: {
        user: process.env.SMTP_USER,   // full email address
        pass: process.env.SMTP_PASS,   // SMTP password / App password
      },
    });

    // ✉ The email sent to the business/owner
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.RECEIVER_EMAIL,   // business email
      subject: "New Quote Request from Website",
      html: `
        <h2>New Quote Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json({ success: false, error }, { status: 500 });
  }
}
