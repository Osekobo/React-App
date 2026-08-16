import { useAuth } from '../context/AuthContext';

export default function Profile() {
  const { user } = useAuth();

  return (
    <div>
      <h2 className="text-2xl font-bold text-slate-800 mb-4">Profile</h2>
      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 max-w-lg">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-2xl font-bold text-blue-700">
            {user?.firstName?.[0]}{user?.lastName?.[0]}
          </div>
          <div>
            <p className="text-xl font-semibold">{user?.firstName} {user?.lastName}</p>
            <p className="text-sm text-slate-500">{user?.email}</p>
            <span className="inline-block mt-1 text-xs font-medium px-2 py-1 rounded-full bg-blue-100 text-blue-700">
              {user?.role}
            </span>
          </div>
        </div>
        <hr className="my-4" />
        <div className="space-y-2 text-sm">
          <p><span className="font-medium">Email:</span> {user?.email}</p>
          <p><span className="font-medium">Role:</span> {user?.role}</p>
          <p><span className="font-medium">Member since:</span> {new Date(user?.createdAt).toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  );
}