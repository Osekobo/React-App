import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import api from '../services/api';
import Loading from '../components/Loading';

export default function Dashboard() {
  const { user } = useAuth();
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get('/applications/stats')
      .then((res) => setStats(res.data))
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <Loading />;

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold text-slate-800">Dashboard</h2>
        <Link to="/" className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition">
          Borabu Bursary
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200 card-hover">
          <p className="text-xs text-slate-400 uppercase tracking-wider">Total Applications</p>
          <p className="text-2xl font-bold text-slate-800 mt-1">{stats?.total || 0}</p>
        </div>
        <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200 card-hover">
          <p className="text-xs text-slate-400 uppercase tracking-wider">Pending</p>
          <p className="text-2xl font-bold text-slate-800 mt-1">{stats?.pending || 0}</p>
        </div>
        <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200 card-hover">
          <p className="text-xs text-slate-400 uppercase tracking-wider">Approved</p>
          <p className="text-2xl font-bold text-slate-800 mt-1">{stats?.approved || 0}</p>
        </div>
        <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200 card-hover">
          <p className="text-xs text-slate-400 uppercase tracking-wider">Disbursed (KSh)</p>
          <p className="text-2xl font-bold text-slate-800 mt-1">
            {stats?.disbursed ? stats.disbursed.toLocaleString() : '0'}
          </p>
        </div>
      </div>
      <div className="mt-8 bg-white p-6 rounded-xl shadow-sm border border-slate-200">
        <h3 className="font-semibold text-slate-700">Recent Activity</h3>
        <p className="text-sm text-slate-500 mt-2">Your last application was submitted on 12 Aug 2026</p>
      </div>
    </div>
  );
}