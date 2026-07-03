const cvSchema = new mongoose.Schema({

  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },

  fullName: String,
  jobTitle: String,

  email: String,
  phone: String,
  location: String,

  github: String,
  linkedin: String,
  portfolio: String,

  summary: String,

  skills: [String],

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

  projects: [
    {
      name: String,
      description: String,
      github: String,
      demo: String,
      technologies: [String],
    },
  ],

  certifications: [
    {
      name: String,
      issuer: String,
      year: String,
    },
  ],

  languages: [
    {
      language: String,
      level: String,
    },
  ],

  template: String,

});