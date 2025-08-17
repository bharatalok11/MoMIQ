# MoMIQ - AI Meeting Notes Summarizer

[![React](https://img.shields.io/badge/React-19.1.1-blue.svg)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-18+-green.svg)](https://nodejs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.17-38B2AC.svg)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-5.0.0-orange.svg)](https://vitejs.dev/)
[![Groq AI](https://img.shields.io/badge/Groq_AI-API-blue.svg)](https://console.groq.com/docs/quickstart)
[![Nodemailer](https://img.shields.io/badge/Nodemailer-6.9.1-yellow.svg)](https://nodemailer.com/about/)


> **MoMIQ** (Meeting Notes Made Intelligent & Quick) is an AI-powered application that transforms meeting transcripts into actionable insights with intelligent summarization and instant sharing capabilities.

## 🚀 Features

### Core Functionality
- **AI-Powered Summarization**: Generate intelligent summaries from meeting transcripts
- **Custom Prompts**: Tailor summaries with specific instructions and requirements
- **TXT File Support**: Upload and process text files (.txt format)
- **Instant Sharing**: Share summaries via email with multiple recipients
- **Real-time Processing**: Fast and efficient text processing
- **Responsive Design**: Modern, mobile-friendly interface

### User Experience
- **Drag & Drop**: Easy file upload with drag-and-drop support
- **Live Preview**: See your transcript and summary in real-time
- **Error Handling**: Comprehensive error messages and validation
- **Loading States**: Visual feedback during processing
- **Clean Interface**: Intuitive and professional design

## 🏗️ Architecture

### Frontend (React + Vite)
- **Framework**: React 19.1.1 with modern hooks
- **Build Tool**: Vite for fast development and building
- **Styling**: Tailwind CSS for responsive design
- **State Management**: React hooks for local state
- **HTTP Client**: Axios for API communication

### Backend (Node.js + Express)
- **Runtime**: Node.js with Express framework
- **AI Integration**: Groq AI API for text summarization
- **Email Service**: Nodemailer for email functionality
- **CORS**: Cross-origin resource sharing enabled
- **Environment**: Configurable via environment variables

## 📋 Prerequisites

Before running this project, ensure you have:

- **Node.js** (version 18 or higher)
- **npm** (comes with Node.js)
- **Groq AI API Key** (for AI summarization)
- **Email Credentials** (for email sharing functionality)

## 🛠️ Installation

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/MoMIQ.git
cd MoMIQ
```

### 2. Install Backend Dependencies
```bash
cd backend
npm install
```

### 3. Install Frontend Dependencies
```bash
cd ../frontend
npm install
```

### 4. Environment Configuration

#### Backend Environment (.env)
Create a `.env` file in the `backend` directory:

```env
PORT=5000
GROQ_API_KEY=your_groq_api_key_here
GROQ_MODEL=llama-3.1-8b-instant
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password_here
CORS_ORIGIN=http://localhost:5173
NODE_ENV=development
```

#### Frontend Environment (.env)
Create a `.env` file in the `frontend` directory:

```env
VITE_API_BASE_URL=http://localhost:5000
```

## 🚀 Running the Application

### 1. Start the Backend Server
```bash
cd backend
npm run dev
```

The backend server will start on `http://localhost:5000`

### 2. Start the Frontend Development Server
```bash
cd frontend
npm run dev
```

The frontend application will be available at `http://localhost:5173`

### 3. Access the Application
Open your browser and navigate to `http://localhost:5173`

## 📁 Project Structure

```
MoMIQ/
├── backend/                 # Backend server
│   ├── index.js            # Main server file
│   ├── package.json        # Backend dependencies
│   ├── routes/             # API route handlers
│   │   ├── summaryRoutes.js # Summary generation routes
│   │   └── emailRoutes.js  # Email sharing routes
│   ├── services/           # Business logic services
│   │   ├── aiService.js    # AI integration service
│   │   └── emailService.js # Email service
│   └── utils/              # Utility functions
│       └── promptBuilder.js # AI prompt construction
├── frontend/               # Frontend application
│   ├── src/                # Source code
│   │   ├── components/     # React components
│   │   │   ├── Header.jsx  # Application header
│   │   │   ├── FileUpload.jsx # File upload component
│   │   │   ├── PromptInput.jsx # Custom prompt input
│   │   │   ├── SummaryDisplay.jsx # Summary display
│   │   │   ├── EmailShare.jsx # Email sharing
│   │   │   ├── ActionButtons.jsx # Action buttons
│   │   │   ├── MessageDisplay.jsx # Status messages
│   │   │   └── Footer.jsx  # Application footer
│   │   ├── hooks/          # Custom React hooks
│   │   │   └── useApi.js   # API communication hook
│   │   ├── App.jsx         # Main application component
│   │   ├── main.jsx        # Application entry point
│   │   └── index.css       # Global styles
│   ├── package.json        # Frontend dependencies
│   ├── vite.config.js      # Vite configuration
│   └── tailwind.config.js  # Tailwind CSS configuration
└── README.md               # This file
```

## 🔧 Configuration

### Backend Configuration

#### Groq AI Setup
1. Sign up for a [Groq AI account](https://console.groq.com/docs/quickstart)
2. Generate an API key from your dashboard
3. Add the API key to your `.env` file

#### Email Configuration (Gmail)
1. Enable 2-Factor Authentication on your Gmail account
2. Generate an App Password:
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Generate a password for "Mail"
3. Use your email and the generated app password in `.env`

### Frontend Configuration

#### API Base URL
- **Development**: `http://localhost:5000`
- **Production**: Update `VITE_API_BASE_URL` to your production backend URL

## 📖 Usage Guide

### 1. Upload Transcript
- **Supported Format**: TXT files only
- **File Size**: Maximum 10MB
- **Method**: Drag & drop or click to browse
- **Alternative**: Paste text directly into the text area

### 2. Customize Prompt
- Enter specific instructions for summarization
- Examples:
  - "Summarize in bullet points for executives"
  - "Highlight only action items and decisions"
  - "Create a timeline of events discussed"

### 3. Generate Summary
- Click "Generate Summary" button
- Wait for AI processing (usually 10-30 seconds)
- Review and edit the generated summary if needed

### 4. Share Summary
- Enter recipient email addresses (comma-separated)
- Click "Share via Email"
- Recipients receive a formatted email with the summary

### 5. Reset Application
- Use the "Reset" button to clear all content
- Start fresh with new transcripts and prompts

## 🔌 API Endpoints

### Summary Generation
```
POST /generate-summary
Content-Type: application/json

{
  "transcript": "Meeting transcript text...",
  "prompt": "Custom summarization instructions..."
}

Response:
{
  "success": true,
  "summary": "Generated summary text...",
  "message": "Summary generated successfully"
}
```

### Email Sharing
```
POST /share-summary
Content-Type: application/json

{
  "summary": "Summary text to share...",
  "emails": ["user1@example.com", "user2@example.com"]
}

Response:
{
  "success": true,
  "message": "Summary shared via email successfully"
}
```

### Health Check
```
GET /health

Response:
{
  "status": "healthy",
  "timestamp": "2025-01-17T10:30:00.000Z",
  "environment": {
    "hasGroq": true,
    "emailConfigured": true
  }
}
```



## 🚀 Deployment    

### Backend Deployment
1. Set production environment variables
2. Use PM2 or similar process manager
3. Configure reverse proxy (Nginx/Apache)
4. Set up SSL certificates

### Frontend Deployment
1. Build the production version: `npm run build`
2. Deploy `dist/` folder to your web server
3. Configure environment variables for production
4. Set up CDN for static assets

### Environment Variables for Production
```env
# Backend
NODE_ENV=production
PORT=5000
GROQ_API_KEY=your_production_groq_key
GROQ_MODEL=llama-3.1-8b-instant
EMAIL_USER=your_production_email
EMAIL_PASS=your_production_app_password
CORS_ORIGIN=http://your-frontend-domain.com


# Frontend
VITE_API_BASE_URL=https://your-backend-domain.com
```


## 🙏 Acknowledgments

- **Groq AI** for providing the AI summarization capabilities
- **React Team** for the amazing frontend framework
- **Tailwind CSS** for the utility-first CSS framework
- **Vite** for the fast build tool
- **Express.js** for the robust backend framework
- **Nodemailer** for the email functionality

---

**Made with ❤️ for better meeting productivity**
