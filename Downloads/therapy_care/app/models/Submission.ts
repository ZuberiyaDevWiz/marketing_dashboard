import mongoose, { Schema, models } from "mongoose";

const submissionSchema = new Schema(
  {
    firstName: { type: String, required: true, trim: true },
    lastName: { type: String, trim: true },
    email: { type: String, required: true, trim: true },
    phone: { type: String, trim: true },
    message: { type: String, required: true, trim: true },
  },
  { timestamps: true }
);

// ✅ Prevent model overwrite issues in Next.js hot-reload
const Submission =
  models?.Submission || mongoose.model("Submission", submissionSchema);

export default Submission;
