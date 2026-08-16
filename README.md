# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

- `src/` - Source code
  - `components/` - Reusable React components
  - `pages/` - Page components
  - `admin/` - Admin-specific pages
  - `context/` - React context providers
  - `services/` - API services
  - `assets/` - Static assets
  - `public/` - Public assets

## Features

- React 18 with Hooks
- React Router for navigation
- Tailwind CSS for styling
- Axios for API calls
- Authentication with JWT tokens
- Role-based access control (ADMIN, REVIEWER)
- Protected routes

## Environment Variables

Create a `.env` file in the root directory:

```
VITE_API_URL=http://localhost:8000
```

## Available Scripts

- `npm run dev` - Start development server on port 5173
- `npm run build` - Build for production
- `npm run preview` - Preview production build
