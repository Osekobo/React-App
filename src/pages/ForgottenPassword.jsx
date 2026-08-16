import { useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../services/api';

export default function ForgottenPassword() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setMessage('');
    setLoading(true);
    try {
      await api.post('/auth/forgot-password', { email });
      setMessage('Password reset link sent to your email.');
    } catch (err) {
      setError(err.response?.data?.error || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-md border border-slate-200">
        <h2 className="text-2xl font-bold text-slate-800 text-center">Reset Password</h2>
        <p className="text-sm text-slate-500 text-center mt-1">We'll send you a reset link</p>
        {message && <div className="mt-4 p-3 bg-green-50 text-green-600 text-sm rounded-lg">{message}</div>}
        {error && <div className="mt-4 p-3 bg-red-50 text-red-600 text-sm rounded-lg">{error}</div>}
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full py-2.5 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition disabled:opacity-70"
          >
            {loading ? 'Sending...' : 'Send Reset Link'}
          </button>
          <p className="text-sm text-center">
            <Link to="/login" className="text-blue-600 hover:underline">Back to Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
}