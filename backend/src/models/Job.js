import mongoose from "mongoose";

const jobSchema = new mongoose.Schema(
  {
    company: {
      type: String,
      required: true,
    },

    title: {
      type: String,
      required: true,
    },

    status: {
      type: String,

      enum: [
        "Applied",
        "Interview",
        "Rejected",
        "Offer",
      ],

      default: "Applied",
    },

    user: {
      type: mongoose.Schema.Types.ObjectId,

      ref: "User",

      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Job = mongoose.model("Job", jobSchema);

export default Job;