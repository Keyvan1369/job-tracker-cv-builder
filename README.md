# AI Resume Builder & Career Assistant

An AI-powered resume builder designed to help users create professional resumes, analyze their CVs, improve their content, and generate tailored cover letters.

The platform combines a modern resume-building experience with AI-powered career tools to make job applications easier and more effective.

**Project Status:**  In Development

---

##  Features

###  Resume Builder
- Create and edit professional resumes.
- Manage personal information and social links.
- Add work experience, education, skills, projects, and certifications.
- Choose from multiple resume templates.
- Live resume preview.
- Export resumes as PDF.
- Save and update resumes.

### AI Resume Analysis
- Analyze resume quality.
- Generate an overall resume score.
- Identify strengths and weaknesses.
- Receive actionable improvement suggestions.

### AI Content Improvement
- Improve resume sections using AI.
- Rewrite professional summaries.
- Enhance descriptions and professional wording.

###  ATS Job Match Checker
- Compare resumes against job descriptions.
- Generate an ATS compatibility score.
- Identify missing or relevant skills.
- Provide recommendations to improve job matching.

###  AI Cover Letter Generator
- Generate personalized cover letters.
- Use resume information and job descriptions.
- Produce professional, job-specific content.
- Copy and edit generated cover letters.

###  Authentication
- User registration and login.
- Protected API endpoints.
- User-specific resume management.

---

## Tech Stack

### Frontend
- React.js
- JavaScript (ES6+)
- Vite
- Bootstrap
- Axios
- React Router
- CSS3

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- REST API

### AI Integration
- Groq API
- LLM-powered resume analysis
- AI content generation
- Prompt-based AI workflows

### Development Tools
- Git & GitHub
- Postman
- Nodemon
- VS Code

---

##  Project Architecture

```text
AI-Resume-Builder/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── ai/
│   │   │   ├── cvbuilder/
│   │   │   └── templates/
│   │   │
│   │   ├── context/
│   │   ├── hooks/
│   │   ├── pages/
│   │   ├── services/
│   │   └── styles/
│   │
│   └── package.json
│
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── services/
│   │   ├── prompts/
│   │   └── middleware/
│   │
│   └── package.json
│
└── README.md
```

---

##  Getting Started

### Prerequisites

Make sure you have installed:

- Node.js
- npm
- MongoDB (local or Atlas)
- Groq API Key

### 1. Clone the Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL

cd AI-Resume-Builder
```

### 2. Install Backend Dependencies

```bash
cd backend
npm install
```

### 3. Configure Backend Environment Variables

Create a `.env` file inside the backend directory.

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
GROQ_API_KEY=your_groq_api_key
```

Use the exact environment variable names expected by your backend configuration.

### 4. Start Backend

```bash
npm run dev
```

### 5. Install Frontend Dependencies

Open another terminal:

```bash
cd frontend
npm install
```

### 6. Configure Frontend

Create a `.env` file:

```env
VITE_API_URL=http://localhost:5000/api
```

Adjust the URL according to your backend configuration.

### 7. Start Frontend

```bash
npm run dev
```

Open the local URL provided by Vite in your browser.

---

##  AI Workflow

The application uses a centralized AI service architecture.

```text
React Frontend
      |
      v
AI Service
      |
      v
Express API
      |
      v
AI Controller
      |
      v
AI Provider (Groq)
      |
      v
AI Response
      |
      v
Frontend UI
```

Supported AI actions include:

- `resume-score`
- `improve-section`
- `ats-checker`
- `cover-letter`

---

## Security

- JWT-based authentication.
- Protected API routes.
- Environment variables for sensitive credentials.
- API keys are kept on the backend.
- User-specific resume access.

---

## Roadmap

The project is actively evolving.

- [x] User authentication
- [x] Resume creation and editing
- [x] Multiple resume templates
- [x] Live resume preview
- [x] PDF export
- [x] AI resume analysis
- [x] AI section improvement
- [x] ATS job matching
- [x] AI cover letter generation
- [ ] Modern SaaS dashboard
- [ ] Professional UI/UX redesign
- [ ] Responsive design improvements
- [ ] DOCX export
- [ ] Resume auto-save
- [ ] Public resume sharing
- [ ] Subscription and payment integration
- [ ] Production deployment

---

## Project Goal

The goal is to build a complete AI-powered career platform that helps job seekers create better resumes, optimize applications for ATS systems, and improve their chances of getting interviews.

The long-term vision is to turn this project into a production-ready SaaS platform.

---

## Author

**Keyvan Hojabr**

Full-Stack Web Developer | Vienna, Austria

- GitHub: [Keyvan1369](https://github.com/Keyvan1369)
- LinkedIn: [Keyvan Hojabr](https://www.linkedin.com/in/keyvan-hojabr/)

---

*Built with React, Node.js, MongoDB, and AI.*