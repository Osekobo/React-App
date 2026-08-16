export default function HelpPage() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-slate-800 mb-4">Help & Support</h2>
      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 max-w-2xl space-y-4">
        <div>
          <h3 className="font-semibold text-slate-700">Frequently Asked Questions</h3>
          <ul className="mt-2 space-y-2 text-sm text-slate-600">
            <li><strong>How do I apply?</strong> – Go to the Apply page and fill out the form.</li>
            <li><strong>What documents are required?</strong> – You can upload them in the Documents section.</li>
            <li><strong>How can I check my status?</strong> – Visit the Status page.</li>
            <li><strong>Who can I contact for issues?</strong> – Email support@borabu.go.ke</li>
          </ul>
        </div>
        <hr />
        <div>
          <h3 className="font-semibold text-slate-700">Contact Support</h3>
          <p className="text-sm text-slate-600">Phone: +254 700 123 456</p>
          <p className="text-sm text-slate-600">Email: support@borabu.go.ke</p>
        </div>
      </div>
    </div>
  );
}