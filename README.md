<<<<<<< HEAD
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
=======
# -FUTURE_FS_01
>>>>>>> cfe5cd194b6d2baee1978ee45e3ad53912ff35d7
Suman Anand — Personal Portfolio
CS Engineering Student & Aspiring Full Stack Developer B.Tech CSE @ Raajdhani Engineering College, Bhubaneswar | Expected Graduation: 2027

🔗 GitHub · LinkedIn · Email

Built as Task 1 for the Future Interns — Full Stack Web Development Track

Live Link: https://suman-anand-portfolio.onrender.com/
About
A modern, fully responsive personal portfolio website built from scratch with a Node.js/Express backend powering a real working contact form that delivers emails directly to my inbox.

Designed with a dark-first aesthetic featuring animated particle backgrounds, shooting stars, smooth scroll-reveal animations, and a seamless dark/light mode toggle — all without any frontend framework.

Features
Dark / Light Mode — Smooth theme toggle with localStorage persistence
Working Contact Form — Sends real emails via Nodemailer + Gmail SMTP
Auto Reply — Visitor gets an instant confirmation email
Particle Animation — 80 floating particles with connecting lines on canvas
Shooting Stars — Periodic animated shooting stars across the hero section
Animated Orbs — 4 independently floating gradient background orbs
Custom Cursor — Smooth custom cursor with trailing animation
Fully Responsive — Mobile-first design, works on all screen sizes
Scroll Animations — Elements reveal on scroll with staggered delays
Counter Animation — Animated number counters in the hero section
Blog Section — 3 blog cards showcasing thoughts & learnings
Rate Limiting — Max 5 form submissions per IP per 10 minutes
Tech Stack
Layer	Technology
Frontend	HTML5, CSS3, Vanilla JavaScript (ES6+)
Backend	Node.js, Express.js
Email	Nodemailer + Gmail SMTP App Password
Fonts	Bebas Neue, Cabinet Grotesk, JetBrains Mono
Icons	Font Awesome 6.5
Hosting	Render (recommended)
Project Structure
FUTURE_FS_01/
│
├── public/                 # Frontend (served as static files)
│   ├── index.html          # Main HTML — all sections
│   ├── style.css           # All styles + dark/light mode vars
│   └── script.js           # Animations, form, theme toggle
│
├── server.js               # Express backend + contact API
├── package.json            # Project metadata & dependencies
├── .env                    # Secret credentials (never commit!)
├── .env.example            # Template for .env setup
├── .gitignore              # Keeps .env & node_modules off GitHub
└── README.md               # You are here
Getting Started Locally
Prerequisites
Node.js v18 or higher
A Gmail account with 2-Step Verification enabled
1. Clone the repository
git clone https://github.com/sumananand460/FUTURE_FS_01.git
cd FUTURE_FS_01
2. Install dependencies
npm install
3. Set up environment variables
cp .env.example .env
Open .env and fill in:

EMAIL_USER=sumananand470@gmail.com
EMAIL_PASS=your_16_char_app_password
PORT=3000
How to get an App Password: Google Account → Security → 2-Step Verification → App Passwords → Generate

4. Run the server
npm run dev       # Development (auto-restarts on save)
npm start         # Production
5. Open in browser
http://localhost:3000
How the Contact Form Works
Visitor submits name, email, subject, and message
Server validates all fields and checks rate limit (max 5 per IP per 10 min)
Notification email is delivered to sumananand470@gmail.com
Auto-reply is sent back to the visitor instantly
Form shows a success or error message in real time
Sections
#	Section	Description
01	Hero	Animated title, eyebrow badge, stat counters, CTA buttons
02	About	Bio, B.Tech & school education cards
03	Skills	12 skill cards with icons across a 4-column grid
04	Projects	TO-DO App, Quiz Game, Portfolio Website
05	Blog	3 articles on JavaScript, React, and career learnings
06	Contact	Working email form + direct links
Deploy to Render (Free)
Push your code to GitHub (make sure .env is in .gitignore)
Go to render.com → New Web Service
Connect your GitHub repository
Configure the service:
Runtime: Node
Build Command: npm install
Start Command: npm start
Add environment variables in the Render dashboard:
EMAIL_USER → sumananand470@gmail.com
EMAIL_PASS → your App Password
Click Deploy
Security
.env credentials never exposed to the frontend
HTML injection prevention via escapeHtml() on all user inputs
Rate limiting: max 5 form submissions per IP per 10 minutes
Input validation with length limits on all fields
node_modules/ and .env excluded from Git via .gitignore
License
This project is licensed under the MIT License.

*Made with passion by Suman Anand
