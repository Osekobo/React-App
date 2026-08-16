import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../services/api';
import Loading from '../components/Loading';

export default function ApplicationReview() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [application, setApplication] = useState(null);
  const [loading, setLoading] = useState(true);
  const [recommendation, setRecommendation] = useState('');
  const [comments, setComments] = useState('');
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    api
      .get(`/admin/applications/${id}`)
      .then((res) => setApplication(res.data))
      .catch(() => {})
      .finally(() => setLoading(false));
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await api.post(`/admin/applications/${id}/review`, { recommendation, comments });
      navigate('/admin/applications');
    } catch (err) {
      alert('Failed to submit review');
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) return <Loading />;
  if (!application) return <div>Application not found</div>;

  return (
    <div>
      <h2 className="text-2xl font-bold text-slate-800 mb-4">Review Application</h2>
      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 max-w-2xl space-y-4">
        <div><span className="font-medium">Applicant:</span> {application.fullName}</div>
        <div><span className="font-medium">Institution:</span> {application.institution}</div>
        <div><span className="font-medium">Course:</span> {application.course}</div>
        <div><span className="font-medium">Amount:</span> KSh {application.amount}</div>
        <div><span className="font-medium">Status:</span> {application.status}</div>
        <hr />
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700">Recommendation</label>
            <select
              value={recommendation}
              onChange={(e) => setRecommendation(e.target.value)}
              required
              className="mt-1 w-full px-4 py-2 border border-slate-300 rounded-lg"
            >
              <option value="">Select...</option>
              <option value="APPROVED">Approve</option>
              <option value="REJECTED">Reject</option>
              <option value="NEEDS_INFO">Request More Info</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700">Comments</label>
            <textarea
              value={comments}
              onChange={(e) => setComments(e.target.value)}
              rows="3"
              className="mt-1 w-full px-4 py-2 border border-slate-300 rounded-lg"
            />
          </div>
          <button
            type="submit"
            disabled={submitting}
            className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition disabled:opacity-70"
          >
            {submitting ? 'Submitting...' : 'Submit Review'}
          </button>
        </form>
      </div>
    </div>
  );
}