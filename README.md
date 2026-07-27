# HEX INDIA Fasteners - Corporate Website

This repository contains the source code for the redesigned HEX INDIA Fasteners corporate website. The project is a full-stack JavaScript application designed for performance, responsive enterprise aesthetics, and lead generation via robust contact enquiry systems.

## 🛠️ Technology Stack

- **Frontend:** React, Vite, Tailwind CSS, Framer Motion, React Hook Form, Zod validation.
- **Backend:** Node.js, Express.js.
- **Integrations:**
  - Google Sheets API v4 (Automated Lead Capture)
  - Nodemailer (Automated Email Alerts and Customer Auto-replies)
  - Cloudflare Turnstile (Bot & Spam Protection)
  
## 📁 Directory Structure

```text
/
├── client/          # Frontend React + Vite application
│   ├── public/      # Static assets and images
│   ├── src/         # React components, pages, styles, and utilities
│   └── .env         # Frontend environment variables (Turnstile Site Key)
├── server/          # Backend Node.js Express application
│   ├── config/      # System configuration and Google Service Account keys
│   ├── controllers/ # Endpoint logic
│   ├── middleware/  # Security (Helmet/CORS) and Rate Limiters
│   ├── routes/      # Express API routes
│   ├── services/    # Integration logic (Sheets, Turnstile, Email)
│   ├── server.js    # Express entrypoint
│   └── .env         # Backend secrets and API keys
└── .gitignore       # Root Git ignore rules
```

## 🚀 Getting Started

### 1. Prerequisites
- Node.js (v18+)
- NPM or Yarn

### 2. Environment Variables

**Backend (`server/.env`)**
Requires configuration for SMTP credentials, Google Sheets IDs, and Cloudflare Turnstile secrets.

**Frontend (`client/.env`)**
Requires configuration for the `VITE_TURNSTILE_SITE_KEY`.

### 3. Installation & Running Locally

Install and start the Backend:
```bash
cd server
npm install
npm run dev
```

Install and start the Frontend (in a new terminal):
```bash
cd client
npm install
npm run dev
```

The application frontend will typically be accessible on `http://localhost:5173` and the backend will run on `http://localhost:5000`.
