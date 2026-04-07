import { NextResponse } from "next/server";
import mongoose from "mongoose";
import Submission from "@/app/models/Submission";
import { connectDB } from "@/lib/mongodb";

export async function DELETE(req: Request, context: { params: Promise<{ id: string }> }) {
  try {
    // ✅ Unwrap the params promise properly
    const { id } = await context.params;

    await connectDB();

    // ✅ Validate ID format
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json({ error: "Invalid ID format" }, { status: 400 });
    }

    // ✅ Try deleting
    const deleted = await Submission.findByIdAndDelete(id);
    if (!deleted) {
      return NextResponse.json({ error: "Submission not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("DELETE error:", error);
    return NextResponse.json(
      { error: "Failed to delete submission" },
      { status: 500 }
    );
  }
}
