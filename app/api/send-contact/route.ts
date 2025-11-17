import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import type { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const form = await req.formData();

  const name = form.get("name");
  const email = form.get("email");
  const phone = form.get("phone");
  const subject = form.get("subject");
  const message = form.get("message");
  const file = form.get("file") as File | null;

  const attachments = file
    ? [
        {
          filename: file.name,
          content: Buffer.from(await file.arrayBuffer()),
        },
      ]
    : [];

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  await transporter.sendMail({
    from: `"Website Contact" <${process.env.SMTP_USER}>`,
    to: "owner@company.com",
    subject: `New Contact Form: ${subject}`,
    html: `
      <h2>New Contact Inquiry</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Message:</strong> ${message}</p>
    `,
    attachments,
  });

  return NextResponse.json({ success: true });
}
