import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 px-4">
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl font-bold text-slate-800">Borabu Bursary Management</h1>
        <p className="mt-4 text-lg text-slate-600">
          Streamlining bursary disbursement for Borabu region.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link to="/login" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition">
            Login
          </Link>
          <Link to="/register" className="px-6 py-3 bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 font-medium rounded-lg transition">
            Register
          </Link>
          <Link to="/public" className="px-6 py-3 bg-slate-200 hover:bg-slate-300 text-slate-700 font-medium rounded-lg transition">
            Public Info
          </Link>
        </div>
      </div>
    </div>
  );
}