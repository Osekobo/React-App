export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 py-3 px-6 text-xs text-slate-500 flex justify-between items-center flex-shrink-0">
      <span>&copy; {new Date().getFullYear()} Borabu Bursary Management</span>
      <span>v1.0.0</span>
    </footer>
  );
}