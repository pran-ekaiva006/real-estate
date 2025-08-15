# Real Estate Web Application

![Real Estate Platform](client/public/hero-image.png)

<div align="center">

[![Live Demo](https://img.shields.io/badge/Live%20Demo-deployed-brightgreen?style=for-the-badge&logo=render)](https://real-estate-2-fnb9.onrender.com)
[![GitHub Repository](https://img.shields.io/badge/GitHub-Repository-181717?style=for-the-badge&logo=github)](https://github.com/pran-ekaiva006/real-estate)
[![MIT License](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)](https://github.com/pran-ekaiva006/real-estate/blob/main/LICENSE)

*A modern, full-stack real estate platform built with the MERN stack*

</div>

## Overview

A comprehensive real estate web application that enables users to browse, search, and manage property listings with a modern, responsive interface. Built as a full-stack demonstration of contemporary web development practices, featuring secure authentication, dynamic content management, and an intuitive user experience.

**Live Application:** [https://real-estate-2-fnb9.onrender.com](https://real-estate-2-fnb9.onrender.com)

## Key Features

### Property Management
- **Advanced Search & Filtering** - Filter properties by price range, location, and property type
- **Detailed Property Listings** - Comprehensive property information with image galleries
- **Property Creation** - Add new listings with form validation and data persistence

### User Experience
- **User Authentication** - Secure registration and login system
- **Responsive Design** - Optimized for desktop, tablet, and mobile devices
- **Interactive Chatbot** - Predefined Q&A system for user assistance
- **Smooth Animations** - Enhanced UX with Framer Motion transitions

## Technology Stack

### Frontend
- **React 18** - Modern React with hooks and context
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library for React
- **Vite** - Next-generation frontend build tool

### Backend
- **Node.js** - JavaScript runtime environment
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database for data persistence
- **Auth0** - Authentication and authorization platform

### Development Tools
- **ESLint & Prettier** - Code formatting and linting
- **Git** - Version control system

## Getting Started

### Prerequisites
- Node.js (v16.0.0 or higher)
- MongoDB (local installation or MongoDB Atlas)
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/pran-ekaiva006/real-estate.git
   cd real-estate
   ```

2. **Install server dependencies**
   ```bash
   cd server
   npm install
   ```

3. **Install client dependencies**
   ```bash
   cd ../client
   npm install
   ```

### Environment Configuration

Create `.env` files in both directories:

**Client (`client/.env`)**
```env
VITE_API_BASE_URL=http://localhost:5001
```

**Server (`server/.env`)**
```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
PORT=5001
NODE_ENV=development
```

### Running the Application

1. **Start the backend server**
   ```bash
   cd server
   npm start
   ```

2. **Start the frontend development server**
   ```bash
   cd client
   npm run dev
   ```

The application will be available at `http://localhost:5173` (frontend) with the API running on `http://localhost:5001`.

## Project Structure

```
real-estate/
├── client/                 # Frontend React application
│   ├── public/            # Static assets
│   ├── src/
│   │   ├── components/    # Reusable React components
│   │   ├── pages/         # Page components
│   │   ├── api/          # API service functions
│   │   └── utils/        # Utility functions
│   ├── package.json
│   └── vite.config.js
│
├── server/                # Backend Node.js application
│   ├── controllers/       # Route handlers
│   ├── models/           # Database models
│   ├── routes/           # API routes
│   ├── middleware/       # Custom middleware
│   ├── server.js         # Application entry point
│   └── package.json
│
└── README.md
```

## Deployment

The application is deployed using modern cloud platforms:

- **Backend**: [Render](https://render.com) - Node.js hosting with MongoDB Atlas
- **Frontend**: Compatible with Vercel, Netlify, or similar static hosting services
- **Database**: MongoDB Atlas for production data storage

## API Documentation

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License. See the [LICENSE](https://github.com/pran-ekaiva006/real-estate/blob/main/LICENSE) file for details.

## Author

**Pranjal Kumar Verma**
- Location: Bhopal, Madhya Pradesh, India
- GitHub: [@pran-ekaiva006](https://github.com/pran-ekaiva006)
- LinkedIn: [Connect with me](https://linkedin.com/in/your-profile)

---

<div align="center">
<p>⭐ Star this repository if you found it helpful!</p>
</div>
