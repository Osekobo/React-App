import { useAuth } from '../context/AuthContext';
import { useSidebar } from '../context/SidebarContext';

export default function Navbar() {
  const { user, logout } = useAuth();
  const { toggleSidebar } = useSidebar();

  return (
    <header className="bg-white px-6 py-3 border-b border-slate-200 flex items-center justify-between flex-shrink-0">
      <div className="flex items-center gap-4">
        <button
          onClick={toggleSidebar}
          className="text-slate-500 hover:text-slate-700 transition p-1"
          title="Toggle Sidebar"
        >
          <i className="fa-solid fa-bars text-lg"></i>
        </button>
        <h2 className="text-lg font-semibold text-slate-800">Dashboard</h2>
        <span className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-medium">
          Bursary 2026
        </span>
      </div>
      <div className="flex items-center gap-4 text-sm">
        <span className="text-slate-500 hidden sm:inline">
          Logged in as <strong className="text-slate-700">{user?.firstName} {user?.lastName}</strong>
        </span>
        <span className="inline-flex items-center gap-1.5 text-xs bg-emerald-100 text-emerald-700 px-3 py-1.5 rounded-full font-medium">
          <i className="fa-regular fa-circle-check"></i> Logged in
        </span>
        <button className="text-slate-400 hover:text-slate-600 transition">
          <i className="fa-regular fa-bell text-lg"></i>
        </button>
        <button
          onClick={logout}
          className="text-red-500 hover:text-red-700 transition text-sm font-medium"
        >
          <i className="fa-solid fa-right-from-bracket mr-1"></i> Logout
        </button>
      </div>
    </header>
  );
}