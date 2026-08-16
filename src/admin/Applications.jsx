import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../services/api';
import Loading from '../components/Loading';

export default function Applications() {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  api.get('/applications')
    .then((res) => setApplications(res.data))
    .catch(() => {})
    .finally(() => setLoading(false));
}, []);

  if (loading) return <Loading />;

  return (
    <div>
      <h2 className="text-2xl font-bold text-slate-800 mb-4">All Applications</h2>
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <table className="min-w-full divide-y divide-slate-200">
          <thead className="bg-slate-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase">Applicant</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase">Institution</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase">Amount</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {applications.map((app) => (
              <tr key={app.id}>
                <td className="px-6 py-4 text-sm">{app.fullName}</td>
                <td className="px-6 py-4 text-sm">{app.institution}</td>
                <td className="px-6 py-4 text-sm">KSh {app.amount}</td>
                <td className="px-6 py-4 text-sm">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    app.status === 'APPROVED' ? 'bg-green-100 text-green-700' :
                    app.status === 'REJECTED' ? 'bg-red-100 text-red-700' :
                    'bg-yellow-100 text-yellow-700'
                  }`}>{app.status}</span>
                </td>
                <td className="px-6 py-4 text-sm">
                  <Link to={`/admin/review/${app.id}`} className="text-blue-600 hover:underline">Review</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}