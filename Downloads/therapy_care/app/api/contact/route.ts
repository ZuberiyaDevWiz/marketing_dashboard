// app/api/contact/route.ts
import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";

import validator from "validator";
import nodemailer from "nodemailer";

type Body = {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  message?: string;
};

async function sendNotificationEmail(formData: Body) {
  if (!process.env.SMTP_HOST) return;

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT || 587),
    secure: Number(process.env.SMTP_PORT) === 465, // true for 465
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const html = `
    <p>You have a new contact form submission:</p>
    <ul>
      <li><strong>First name:</strong> ${formData.firstName || ""}</li>
      <li><strong>Last name:</strong> ${formData.lastName || ""}</li>
      <li><strong>Email:</strong> ${formData.email || ""}</li>
      <li><strong>Phone:</strong> ${formData.phone || ""}</li>
      <li><strong>Message:</strong> ${formData.message || ""}</li>
    </ul>
  `;

  await transporter.sendMail({
    from: process.env.EMAIL_FROM,
    to: process.env.EMAIL_TO,
    subject: "New contact form submission",
    html,
  });
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Body;

    // Basic validation
    if (!body.firstName || !body.lastName) {
      return NextResponse.json({ error: "Name is required" }, { status: 400 });
    }
    if (!body.email || !validator.isEmail(body.email)) {
      return NextResponse.json({ error: "Valid email required" }, { status: 400 });
    }
    if (!body.phone || !/^\d+$/.test(body.phone)) {
      return NextResponse.json({ error: "Phone number (digits only) required" }, { status: 400 });
    }
    if (!body.message) {
      return NextResponse.json({ error: "Message required" }, { status: 400 });
    }

    const db = await connectDB();
    const doc = {
      firstName: body.firstName.trim(),
      lastName: body.lastName.trim(),
      email: body.email.trim(),
      phone: body.phone.trim(),
      message: body.message.trim(),
      createdAt: new Date(),
    };

    const res = await db.collection("submissions").insertOne(doc);

    // Optional: send notification email if SMTP configured
    try {
      await sendNotificationEmail(doc);
    } catch (emailErr) {
      console.warn("Email sending failed:", emailErr);
      // don't block insert: respond success but warn in logs
    }

    return NextResponse.json({ success: true, id: res.insertedId }, { status: 201 });
  } catch (err) {
    console.error("API error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
