import { NavLink } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useSidebar } from '../context/SidebarContext';

export default function Sidebar() {
  const { user } = useAuth();
  const { isCollapsed, toggleSidebar } = useSidebar();
  const isAdmin = user?.role === 'ADMIN';
  const isReviewer = user?.role === 'REVIEWER';

  const linkClass = ({ isActive }) =>
    `sidebar-link flex items-center gap-3 px-3 py-2.5 rounded-lg transition ${
      isActive ? 'bg-slate-700/40 text-white' : 'hover:bg-slate-700/40'
    } ${isCollapsed ? 'justify-center' : ''}`;

  return (
    <aside className={`${isCollapsed ? 'w-16' : 'w-64'} bg-slate-800 text-slate-300 flex-shrink-0 flex flex-col h-full overflow-y-auto transition-all duration-300`}>
      <div className={`${isCollapsed ? 'px-2 py-4' : 'px-5 py-6'} border-b border-slate-700/60 flex items-center ${isCollapsed ? 'justify-center' : 'justify-between'}`}>
        <NavLink to="/" className={({ isActive }) => 
          `text-white text-xl font-bold flex items-center gap-2 transition ${isActive ? 'text-blue-300' : 'hover:text-blue-300'} ${isCollapsed ? 'justify-center' : ''}`
        } title="Borabu Bursary">
          <i className="fa-solid fa-graduation-cap text-blue-400"></i>
          {!isCollapsed && <span>Borabu Bursary</span>}
        </NavLink>
        <button
          onClick={toggleSidebar}
          className="bg-slate-700 hover:bg-slate-600 text-white transition p-2 rounded-lg"
          title={isCollapsed ? 'Expand Sidebar' : 'Collapse Sidebar'}
        >
          <i className={`fa-solid ${isCollapsed ? 'fa-chevron-right' : 'fa-chevron-left'}`}></i>
        </button>
      </div>
      <nav className="flex-1 px-3 py-4 space-y-1 text-sm">
        <NavLink to="/" className={linkClass} title="Dashboard">
          <i className="fa-solid fa-gauge-high w-5 text-center"></i>
          {!isCollapsed && <span>Dashboard</span>}
        </NavLink>

        {!isAdmin && !isReviewer && (
          <>
            <NavLink to="/apply" className={linkClass} title="Apply">
              <i className="fa-regular fa-pen-to-square w-5 text-center"></i>
              {!isCollapsed && <span>Apply</span>}
            </NavLink>
            <NavLink to="/application" className={linkClass} title="Application">
              <i className="fa-regular fa-file-lines w-5 text-center"></i>
              {!isCollapsed && <span>Application</span>}
            </NavLink>
            <NavLink to="/profile" className={linkClass} title="Profile">
              <i className="fa-regular fa-user w-5 text-center"></i>
              {!isCollapsed && <span>Profile</span>}
            </NavLink>
            <NavLink to="/documents" className={linkClass} title="Documents">
              <i className="fa-regular fa-folder-open w-5 text-center"></i>
              {!isCollapsed && <span>Documents</span>}
            </NavLink>
            <NavLink to="/status" className={linkClass} title="Status">
              <i className="fa-regular fa-circle-check w-5 text-center"></i>
              {!isCollapsed && <span>Status</span>}
            </NavLink>
          </>
        )}

        {(isAdmin || isReviewer) && (
          <>
            <NavLink to="/admin" className={linkClass} title="Admin Dashboard">
              <i className="fa-solid fa-gauge-high w-5 text-center"></i>
              {!isCollapsed && <span>Admin Dashboard</span>}
            </NavLink>
            <NavLink to="/admin/applications" className={linkClass} title="All Applications">
              <i className="fa-regular fa-rectangle-list w-5 text-center"></i>
              {!isCollapsed && <span>All Applications</span>}
            </NavLink>
            {isAdmin && (
              <>
                <NavLink to="/admin/students" className={linkClass} title="Manage Users">
                  <i className="fa-solid fa-users w-5 text-center"></i>
                  {!isCollapsed && <span>Manage Users</span>}
                </NavLink>
                <NavLink to="/admin/payments" className={linkClass} title="Payments">
                  <i className="fa-regular fa-credit-card w-5 text-center"></i>
                  {!isCollapsed && <span>Payments</span>}
                </NavLink>
                <NavLink to="/admin/reports" className={linkClass} title="Reports">
                  <i className="fa-regular fa-chart-bar w-5 text-center"></i>
                  {!isCollapsed && <span>Reports</span>}
                </NavLink>
              </>
            )}
          </>
        )}

        <hr className="border-slate-700/50 my-3" />
        <NavLink to="/help" className={linkClass} title="Help">
          <i className="fa-regular fa-circle-question w-5 text-center"></i>
          {!isCollapsed && <span>Help</span>}
        </NavLink>
        <NavLink to="/public" className={linkClass} title="Public Info">
          <i className="fa-regular fa-globe w-5 text-center"></i>
          {!isCollapsed && <span>Public Info</span>}
        </NavLink>
      </nav>
      <div className={`px-4 py-4 border-t border-slate-700/60 text-xs text-slate-400 flex items-center ${isCollapsed ? 'justify-center' : 'gap-3'}`}>
        <div 
          className="w-8 h-8 rounded-full bg-slate-600 flex items-center justify-center text-white font-semibold text-sm"
          title={`${user?.firstName} ${user?.lastName} (${user?.role})`}
        >
          {user?.firstName?.[0]}{user?.lastName?.[0]}
        </div>
        {!isCollapsed && (
          <div>
            <div className="text-slate-200 font-medium">{user?.firstName} {user?.lastName}</div>
            <div className="flex items-center gap-1.5">
              <span className="inline-block w-2 h-2 rounded-full bg-green-400"></span>
              <span className="text-[10px] uppercase tracking-wide">{user?.role}</span>
            </div>
          </div>
        )}
      </div>
    </aside>
  );
}