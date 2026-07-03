import mongoose from "mongoose";

const experienceSchema = new mongoose.Schema(
  {
    company: { type: String, trim: true },
    position: { type: String, trim: true },
    period: { type: String, trim: true },
    description: { type: String, trim: true },
  },
  { _id: false }
);

const educationSchema = new mongoose.Schema(
  {
    school: { type: String, trim: true },
    degree: { type: String, trim: true },
    year: { type: String, trim: true },
  },
  { _id: false }
);

const projectSchema = new mongoose.Schema(
  {
    name: { type: String, trim: true },

    description: { type: String, trim: true },

    github: String,

    demo: String,

    technologies: [String],
  },
  { _id: false }
);

const certificationSchema = new mongoose.Schema(
  {
    name: String,

    issuer: String,

    year: String,
  },
  { _id: false }
);

const languageSchema = new mongoose.Schema(
  {
    language: String,

    level: String,
  },
  { _id: false }
);

const cvSchema = new mongoose.Schema(
  {
    user: {

      type: mongoose.Schema.Types.ObjectId,

      ref: "User",

      required: true,

      index: true,

    },

    fullName: {

      type: String,

      trim: true,

      required: true,

    },

    jobTitle: {

      type: String,

      trim: true,

      default: "",

    },

    email: {

      type: String,

      trim: true,

      default: "",

    },

    phone: {

      type: String,

      trim: true,

      default: "",

    },

    location: {

      type: String,

      trim: true,

      default: "",

    },

    github: String,

    linkedin: String,

    portfolio: String,

    summary: {

      type: String,

      default: "",

    },

    skills: {

      type: [String],

      default: [],

    },

    experiences: {

      type: [experienceSchema],

      default: [],

    },

    educations: {

      type: [educationSchema],

      default: [],

    },

    projects: {

      type: [projectSchema],

      default: [],

    },

    certifications: {

      type: [certificationSchema],

      default: [],

    },

    languages: {

      type: [languageSchema],

      default: [],

    },

    template: {

      type: String,

      default: "modern",

    },

    theme: {

      type: String,

      default: "light",

    },

    font: {

      type: String,

      default: "Inter",

    },

    accentColor: {

      type: String,

      default: "#2563eb",

    },

    aiAnalysis: {

      score: {

        type: Number,

        default: 0,

      },

      ats: {

        type: Number,

        default: 0,

      },

      strengths: {

        type: [String],

        default: [],

      },

      improvements: {

        type: [String],

        default: [],

      },

    },

  },

  {

    timestamps: true,

  }
);

export default mongoose.model("CV", cvSchema);