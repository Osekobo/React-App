import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './context/AuthContext';

// Components
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import ProtectedRoute from './components/ProtectedRoute';

// Pages
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Apply from './pages/Apply';
import Application from './pages/Application';
import Documents from './pages/Documents';
import Status from './pages/Status';
import ForgottenPassword from './pages/ForgottenPassword';
import HelpPage from './pages/HelpPage';
import HomePage from './pages/HomePage';
import Public from './pages/Public';

// Admin
import AdminDashboard from './admin/AdminDashboard';
import Applications from './admin/Applications';
import ApplicationReview from './admin/ApplicationReview';
import Students from './admin/Students';
import Payments from './admin/Payments';
import Reports from './admin/Reports';

export default function Router() {
  const { user } = useAuth();

  // If user is not logged in, show only public routes
  if (!user) {
    return (
      <div className="flex flex-col min-h-screen">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgotten-password" element={<ForgottenPassword />} />
          <Route path="/help" element={<HelpPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </div>
    );
  }

  // Logged in: show sidebar + navbar layout
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar />
        <div className="flex-1 overflow-y-auto p-6 bg-slate-50">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/apply" element={<Apply />} />
            <Route path="/application" element={<Application />} />
            <Route path="/documents" element={<Documents />} />
            <Route path="/status" element={<Status />} />
            <Route path="/help" element={<HelpPage />} />

            {/* Admin/Reviewer routes */}
            <Route
              path="/admin"
              element={
                <ProtectedRoute roles={['ADMIN', 'REVIEWER']}>
                  <AdminDashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/applications"
              element={
                <ProtectedRoute roles={['ADMIN', 'REVIEWER']}>
                  <Applications />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/review/:id"
              element={
                <ProtectedRoute roles={['ADMIN', 'REVIEWER']}>
                  <ApplicationReview />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/students"
              element={
                <ProtectedRoute roles={['ADMIN']}>
                  <Students />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/payments"
              element={
                <ProtectedRoute roles={['ADMIN']}>
                  <Payments />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/reports"
              element={
                <ProtectedRoute roles={['ADMIN']}>
                  <Reports />
                </ProtectedRoute>
              }
            />

            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </div>
  );
}