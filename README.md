# Real Estate Web Application

<img src="/client/public/hero-image.png" alt="Real Estate Platform" width="400" height="200">

<h1 align="center">Real Estate Web Application</h1>

<p align="center">
  <a href="https://github.com/pran-ekaiva006/real-estate">
    <img src="https://img.shields.io/badge/GitHub-Repo-blue?logo=github" alt="GitHub Repo">
  </a>
  
  <a href="https://real-estate-2-fnb9.onrender.com" target="_blank">
    <img src="https://img.shields.io/badge/Live-Demo-blue?logo=render&logoColor=white" alt="Live Demo on Render">
  </a>
  
  <a href="https://github.com/pran-ekaiva006/real-estate/blob/main/LICENSE">
    <img src="https://img.shields.io/badge/License-MIT-yellow" alt="License">
  </a>
</p>

---

### 📋 Table of Contents

- [🎯 About The Project](#about-the-project)
- [✨ Features](#features)
- [🛠️ Tech Stack](#tech-stack)
- [🎪 Demo](#demo)
- [🔧 Installation](#installation)
- [⚙️ Environment Variables](#environment-variables)
- [📂 Folder Structure](#folder-structure)
- [🚀 API Documentation](#api-documentation)
- [📜 License](#license)

---

### **About The Project**

Real Estate Web Application is a comprehensive MERN stack project that enables users to browse, search, and manage property listings with a modern, responsive interface. Built as a full-stack demonstration of contemporary web development practices, featuring secure authentication, dynamic content management, and an intuitive user experience.

The project aims to provide a professional property browsing platform that showcases skills in frontend development, backend API design, database integration, and modern UI/UX principles.

---

### **Features**

- 🏠 **Browse property listings** with detailed information and image galleries
- 🔍 **Advanced Search & Filtering** by price range, location, and property type  
- 📝 **Property Management** - Add, edit, and delete listings with form validation
- 🔐 **User Authentication** - Secure registration and login system
- 💬 **Interactive Chatbot** - Predefined Q&A system for user assistance  
- 📱 **Fully Responsive Design** - Optimized for desktop, tablet, and mobile devices
- ⚡ **Smooth Animations** - Enhanced UX with Framer Motion transitions
- 💾 **Data Persistence** - Secure MongoDB integration for all user and property data

---

## **Tech Stack**

<p>
  <img alt="React" src="https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB"/>
  <img alt="TailwindCSS" src="https://img.shields.io/badge/TailwindCSS-38B2AC?logo=tailwind-css&logoColor=white"/>
  <img alt="Node.js" src="https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=white"/>
  <img alt="Express.js" src="https://img.shields.io/badge/Express.js-000000?logo=express&logoColor=white"/>
  <img alt="MongoDB" src="https://img.shields.io/badge/MongoDB-47A248?logo=mongodb&logoColor=white"/>
  <img alt="Auth0" src="https://img.shields.io/badge/Auth0-EB5424?logo=auth0&logoColor=white"/>
  <img alt="Framer Motion" src="https://img.shields.io/badge/Framer%20Motion-0055FF?logo=framer&logoColor=white"/>
  <img alt="Vite" src="https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white"/>
</p>

---

## **Demo**

Check out the live project here: [Real Estate Web Application Live Demo](https://real-estate-2-fnb9.onrender.com)  

GitHub repository: [Real Estate GitHub](https://github.com/pran-ekaiva006/real-estate)

---

## **Installation**

1. Clone the repo:

```bash
git clone https://github.com/pran-ekaiva006/real-estate.git
```

### Install dependencies:

# Frontend
```bash
cd real-estate/client
npm install
```

# Backend
```bash
cd ../server
npm install
```

Run the application:

# Frontend
```bash
cd client
npm run dev
```

# Backend
```bash
cd ../server
npm start
```

The application will be available at `http://localhost:5173` (frontend) with the API running on `http://localhost:5001`.

---

## ⚙️ **Environment Variables**

Create `.env` files in both directories:

### Client (`client/.env`):
```env
VITE_API_BASE_URL=http://localhost:5001
```

### Server (`server/.env`):
```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
PORT=5001
NODE_ENV=development
```

---

### 📂 **Folder Structure**

```bash
real-estate-main/
├── .gitignore
├── LICENSE
├── README.md
├── client/                 # Frontend React application
│   ├── .eslintrc.cjs
│   ├── index.html
│   ├── package-lock.json
│   ├── package.json
│   ├── tailwind.config.js
│   ├── vite.config.js
│   ├── public/            # Static assets
│   │   ├── hero-image.png
│   │   ├── logo.png
│   │   └── vite.svg
│   └── src/
│       ├── App.css
│       ├── App.jsx
│       ├── index.css
│       ├── main.jsx
│       ├── components/    # Reusable React components
│       │   ├── custom/
│       │   │   ├── Header.jsx
│       │   │   ├── Footer.jsx
│       │   │   └── PropertyCard.jsx
│       │   └── ui/
│       │       ├── button.jsx
│       │       ├── input.jsx
│       │       └── dialog.jsx
│       ├── pages/         # Page components
│       │   ├── Home.jsx
│       │   ├── Properties.jsx
│       │   ├── PropertyDetail.jsx
│       │   └── Dashboard.jsx
│       ├── api/          # API service functions
│       │   └── PropertyService.js
│       ├── context/      # React Context
│       │   └── AuthContext.jsx
│       └── utils/        # Utility functions
│           └── helpers.js
│
└── server/                # Backend Node.js application
    ├── controllers/       # Route handlers
    │   ├── authController.js
    │   └── propertyController.js
    ├── models/           # Database models
    │   ├── User.js
    │   └── Property.js
    ├── routes/           # API routes
    │   ├── auth.js
    │   └── properties.js
    ├── middleware/       # Custom middleware
    │   └── authMiddleware.js
    ├── utils/           # Utility functions
    │   └── database.js
    ├── server.js        # Application entry point
    └── package.json
```

---



### Additional Features
- **File Upload**: Property images upload with validation
- **Pagination**: All list endpoints support pagination
- **Filtering**: Advanced filtering by price, location, property type
- **Authentication**: JWT-based secure authentication system

---

### **License**

This Project is Licensed under the MIT License, see [LICENSE](./LICENSE) for details.
