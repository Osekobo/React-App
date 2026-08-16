import { useState, useEffect } from 'react';
import api from '../services/api';
import Loading from '../components/Loading';

export default function Documents() {
  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    api
      .get('/applications/documents')
      .then((res) => setDocuments(res.data))
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const handleUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const formData = new FormData();
    formData.append('document', file);
    setUploading(true);
    try {
      const res = await api.post('/applications/documents', formData);
      setDocuments([...documents, res.data]);
    } catch (err) {
      alert('Upload failed');
    } finally {
      setUploading(false);
    }
  };

  if (loading) return <Loading />;

  return (
    <div>
      <h2 className="text-2xl font-bold text-slate-800 mb-4">Documents</h2>
      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
        <div className="flex items-center gap-4 mb-4">
          <label className="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition">
            {uploading ? 'Uploading...' : 'Upload Document'}
            <input type="file" onChange={handleUpload} className="hidden" disabled={uploading} />
          </label>
        </div>
        {documents.length === 0 ? (
          <p className="text-slate-500 text-sm">No documents uploaded yet.</p>
        ) : (
          <ul className="divide-y divide-slate-200">
            {documents.map((doc) => (
              <li key={doc.id} className="py-3 flex justify-between items-center">
                <span className="text-sm">{doc.fileName}</span>
                <a
                  href={doc.fileUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-600 hover:underline text-sm"
                >
                  View
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}