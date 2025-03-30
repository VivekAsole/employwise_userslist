# employwise_userslist

This is a basic React project with authentication, protected routes, and service-based API calls.

## 🌍 Live Demo
🚀 **[EmployWise Users List](https://employwise-userslist.netlify.app)** – Hosted on Netlify.


## 📌 Features

- React with Vite for fast development
- Context API for authentication
- Protected routes using React Router
- Modular components and services
- API service layer for handling requests

## 🛠️ Setup Guide

### 1️⃣ Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (LTS version recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### 2️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/simple-react-project.git
cd simple-react-project
```

### 3️⃣ Install Dependencies

Using npm:

```bash
npm install
```

Or using yarn:

```bash
yarn install
```

### 4️⃣ Start the Development Server

Using npm:

```bash
npm run dev
```

Or using yarn:

```bash
yarn dev
```

The project will be available at: [http://localhost:5173](http://localhost:5173)

### 5️⃣ Build for Production

To create an optimized production build, run:

```bash
npm run build
```

Or:

```bash
yarn build
```

### 6️⃣ Run the Production Build

```bash
npm run preview
```

## 📂 Project Structure

```
simple-react-project/
│── node_modules/          # Dependencies
│── public/                # Static assets
│── src/                   # Source code
│   ├── components/        # Reusable UI components
│   │   ├── Loading.jsx
│   │   ├── ProtectedRoute.jsx
│   │   ├── Toast.jsx
│   │   ├── UpdateForm.jsx
│   │   ├── UserCard.jsx
│   ├── context/           # Global context (Auth)
│   │   ├── AuthContext.jsx
│   ├── pages/             # Page components
│   │   ├── LoginPage.jsx
│   │   ├── UsersPage.jsx
│   ├── services/          # API calls & business logic
│   │   ├── authService.js
│   │   ├── userService.js
│   ├── App.jsx            # Main App component
│   ├── main.jsx           # Entry point
│   ├── app.css            # Global styles
│── .gitignore             # Ignored files for Git
│── eslint.config.js       # ESLint configuration
│── index.html             # Main HTML file
│── package.json           # Project metadata and scripts
│── package-lock.json      # Lockfile for dependencies
│── README.md              # Documentation
│── vite.config.js         # Vite configuration
```
