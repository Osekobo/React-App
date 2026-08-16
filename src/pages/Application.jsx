import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import api from '../services/api';
import Loading from '../components/Loading';

export default function Application() {
  const [searchParams] = useSearchParams();
  const id = searchParams.get('id');
  const [application, setApplication] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      api
        .get(`/applications/${id}`)
        .then((res) => setApplication(res.data))
        .catch(() => {})
        .finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, [id]);

  if (loading) return <Loading />;
  if (!application) return <div className="text-slate-500">Select an application to view</div>;

  return (
    <div>
      <h2 className="text-2xl font-bold text-slate-800 mb-4">Application Details</h2>
      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 max-w-2xl space-y-3">
        <div className="flex justify-between">
          <span className="font-medium">Status:</span>
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
            application.status === 'APPROVED' ? 'bg-green-100 text-green-700' :
            application.status === 'REJECTED' ? 'bg-red-100 text-red-700' :
            'bg-yellow-100 text-yellow-700'
          }`}>{application.status}</span>
        </div>
        <div><span className="font-medium">Full Name:</span> {application.fullName}</div>
        <div><span className="font-medium">Phone:</span> {application.phone}</div>
        <div><span className="font-medium">Institution:</span> {application.institution}</div>
        <div><span className="font-medium">Course:</span> {application.course}</div>
        <div><span className="font-medium">Year:</span> {application.yearOfStudy}</div>
        <div><span className="font-medium">Amount:</span> KSh {application.amount}</div>
        <div><span className="font-medium">Submitted:</span> {new Date(application.createdAt).toLocaleDateString()}</div>
      </div>
    </div>
  );
}