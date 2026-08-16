import { useEffect, useState } from 'react';
import api from '../services/api';
import Loading from '../components/Loading';

export default function Reports() {
  const [report, setReport] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get('/reports/summary')
      .then((res) => setReport(res.data))
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <Loading />;

  return (
    <div>
      <h2 className="text-2xl font-bold text-slate-800 mb-4">Reports</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <h3 className="font-semibold text-slate-700">Summary Statistics</h3>
          <dl className="mt-4 space-y-2 text-sm">
            <div className="flex justify-between"><dt>Total Applications</dt><dd>{report?.totalApplications || 0}</dd></div>
            <div className="flex justify-between"><dt>Approved</dt><dd>{report?.approved || 0}</dd></div>
            <div className="flex justify-between"><dt>Rejected</dt><dd>{report?.rejected || 0}</dd></div>
            <div className="flex justify-between"><dt>Total Disbursed</dt><dd>KSh {report?.totalDisbursed?.toLocaleString() || '0'}</dd></div>
          </dl>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <h3 className="font-semibold text-slate-700">Export</h3>
          <button className="mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm transition">
            Download CSV
          </button>
        </div>
      </div>
    </div>
  );
}