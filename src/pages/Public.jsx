export default function Public() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-slate-800 mb-4">Public Information</h2>
      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 max-w-3xl space-y-4">
        <div>
          <h3 className="font-semibold text-slate-700">Bursary Guidelines</h3>
          <p className="text-sm text-slate-600 mt-1">
            The Borabu bursary is open to all students from the region. Applicants must provide
            proof of admission and financial need. Applications are reviewed quarterly.
          </p>
        </div>
        <hr />
        <div>
          <h3 className="font-semibold text-slate-700">Important Dates</h3>
          <ul className="mt-1 text-sm text-slate-600 list-disc list-inside">
            <li>Application Deadline: 30th November 2026</li>
            <li>Review Period: December 2026</li>
            <li>Disbursement: January 2027</li>
          </ul>
        </div>
        <hr />
        <div>
          <h3 className="font-semibold text-slate-700">Contact</h3>
          <p className="text-sm text-slate-600">Email: bursary@borabu.go.ke</p>
        </div>
      </div>
    </div>
  );
}