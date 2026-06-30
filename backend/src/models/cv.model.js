import mongoose from "mongoose";

const cvSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    template: {
  type: String,
  default: "modern",
},
    jobTitle: String,
    fullName: String,
    email: String,
    phone: String,
    location: String,
    summary: String,
    skills: String,

    experiences: [
      {
        company: String,
        position: String,
        period: String,
        description: String,
      },
    ],

    educations: [
      {
        school: String,
        degree: String,
        year: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);

export default mongoose.model(
  "CV",
  cvSchema
);