export default function Footer() {
  return (
    <footer className="bg-gray-900 px-4 py-8 text-white sm:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">

          {/* Logo / Name */}
          <h1 className="text-xl font-bold">
            MyApp
          </h1>

          {/* Copyright */}
          <p className="text-center text-sm text-gray-400">
            © 2026 MyApp. All rights reserved.
          </p>

          {/* Links */}
          <div className="flex gap-5 text-sm text-gray-400">
            <a href="#" className="transition hover:text-white">
              Privacy
            </a>

            <a href="#" className="transition hover:text-white">
              Terms
            </a>

            <a href="#" className="transition hover:text-white">
              Contact
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}