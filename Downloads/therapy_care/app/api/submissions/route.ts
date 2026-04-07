import { NextResponse } from "next/server";
import mongoose from "mongoose";
import Submission from "@/app/models/Submission";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable.");
}

// ✅ Global connection cache to prevent multiple connections
let isConnected = false;

async function connectDB() {
  if (isConnected) return;
  const conn = await mongoose.connect(MONGODB_URI as string);
  isConnected = !!conn.connections[0].readyState;
  console.log("✅ Connected to MongoDB");
}

export async function POST(req: Request) {
  try {
    await connectDB();

    const data = await req.json();

    if (!data.firstName || !data.email || !data.message) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    const submission = await Submission.create(data);

    return NextResponse.json(
      { success: true, submission },
      { status: 201 }
    );
  } catch (err) {
    console.error("❌ POST /api/submissions error:", err);
    return NextResponse.json(
      { error: "Failed to save submission." },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await connectDB();
    const submissions = await Submission.find().sort({ createdAt: -1 });
    return NextResponse.json(submissions);
  } catch (err) {
    console.error("❌ GET /api/submissions error:", err);
    return NextResponse.json(
      { error: "Failed to fetch submissions." },
      { status: 500 }
    );
  }
}
