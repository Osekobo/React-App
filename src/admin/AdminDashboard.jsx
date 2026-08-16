import { useEffect, useState } from 'react';
import api from '../services/api';
import Loading from '../components/Loading';

export default function AdminDashboard() {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  api.get('/reports/summary')
    .then((res) => setStats(res.data))
    .catch(() => {})
    .finally(() => setLoading(false));
}, []);

  if (loading) return <Loading />;

  return (
    <div>
      <h2 className="text-2xl font-bold text-slate-800 mb-4">Admin Dashboard</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200">
          <p className="text-xs text-slate-400 uppercase">Total Users</p>
          <p className="text-2xl font-bold">{stats?.users || 0}</p>
        </div>
        <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200">
          <p className="text-xs text-slate-400 uppercase">Total Applications</p>
          <p className="text-2xl font-bold">{stats?.applications || 0}</p>
        </div>
        <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200">
          <p className="text-xs text-slate-400 uppercase">Pending Review</p>
          <p className="text-2xl font-bold">{stats?.pending || 0}</p>
        </div>
        <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200">
          <p className="text-xs text-slate-400 uppercase">Total Disbursed</p>
          <p className="text-2xl font-bold">KSh {stats?.disbursed?.toLocaleString() || '0'}</p>
        </div>
      </div>
    </div>
  );
}