import React from "react";

const Application = () => {
  // This will eventually come from your FastAPI backend
  const application = {
    status: "Draft",
    applicationNumber: "NGCDF-2026-00124",
    submittedDate: null,

    personal: {
      fullName: "Collins Oseko",
      idNumber: "12345678",
      phone: "0712345678",
      email: "collins@example.com",
      county: "Kisii",
      constituency: "Borabu",
      ward: "Nyamache",
    },

    education: {
      institution: "Technical University of Kenya",
      level: "University",
      course: "BTech Electrical Engineering",
      year: "2nd Year",
      admissionNumber: "TUK/2025/12345",
    },

    financial: {
      familyIncome: "Below KSh 30,000",
      dependants: "5",
      otherSupport: "No",
    },

    documents: [
      {
        name: "National ID",
        status: "Uploaded",
      },
      {
        name: "School ID",
        status: "Uploaded",
      },
      {
        name: "Fee Structure",
        status: "Uploaded",
      },
      {
        name: "Academic Transcript",
        status: "Missing",
      },
    ],
  };

  const isDraft = application.status === "Draft";

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="border-b bg-white shadow-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div>
            <h1 className="text-xl font-bold text-blue-700">
              Borabu NG-CDF
            </h1>

            <p className="text-sm text-gray-500">
              Bursary Portal
            </p>
          </div>

          <a
            href="/dashboard"
            className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-50"
          >
            ← Dashboard
          </a>
        </div>
      </header>

      {/* Main */}
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Page heading */}
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              My Application
            </h2>

            <p className="mt-1 text-gray-600">
              View and manage your bursary application.
            </p>
          </div>

          {isDraft && (
            <a
              href="/apply"
              className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-5 py-3 font-medium text-white transition hover:bg-blue-700"
            >
              ✏️ Continue Application
            </a>
          )}
        </div>

        {/* Application status */}
        <section className="mb-6 rounded-xl bg-white p-6 shadow-sm">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">
                Application Number
              </p>

              <h3 className="mt-1 text-lg font-bold text-gray-900">
                {application.applicationNumber}
              </h3>
            </div>

            <div>
              <p className="text-sm font-medium text-gray-500">
                Application Status
              </p>

              <span
                className={`mt-2 inline-flex rounded-full px-4 py-2 text-sm font-semibold ${
                  application.status === "Draft"
                    ? "bg-yellow-100 text-yellow-800"
                    : application.status === "Submitted"
                    ? "bg-blue-100 text-blue-800"
                    : application.status === "Under Review"
                    ? "bg-purple-100 text-purple-800"
                    : application.status === "Approved"
                    ? "bg-green-100 text-green-800"
                    : "bg-red-100 text-red-800"
                }`}
              >
                {application.status}
              </span>
            </div>

            <div>
              <p className="text-sm font-medium text-gray-500">
                Submitted Date
              </p>

              <p className="mt-1 font-semibold text-gray-900">
                {application.submittedDate || "Not submitted"}
              </p>
            </div>
          </div>
        </section>

        {/* Warning for draft */}
        {isDraft && (
          <div className="mb-6 rounded-xl border border-yellow-200 bg-yellow-50 p-5">
            <div className="flex gap-3">
              <div className="text-xl">⚠️</div>

              <div>
                <h3 className="font-semibold text-yellow-900">
                  Application not submitted
                </h3>

                <p className="mt-1 text-sm text-yellow-800">
                  Your application is still a draft. Complete the
                  missing information and submit it before the
                  application deadline.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Personal information */}
        <section className="mb-6 rounded-xl bg-white shadow-sm">
          <div className="flex items-center justify-between border-b px-6 py-5">
            <div>
              <h3 className="text-lg font-bold text-gray-900">
                Personal Information
              </h3>

              <p className="mt-1 text-sm text-gray-500">
                Applicant's personal details
              </p>
            </div>

            {isDraft && (
              <a
                href="/apply/personal"
                className="text-sm font-medium text-blue-600 hover:underline"
              >
                Edit
              </a>
            )}
          </div>

          <div className="grid gap-6 p-6 sm:grid-cols-2 lg:grid-cols-3">
            <InfoItem
              label="Full Name"
              value={application.personal.fullName}
            />

            <InfoItem
              label="ID Number"
              value={application.personal.idNumber}
            />

            <InfoItem
              label="Phone Number"
              value={application.personal.phone}
            />

            <InfoItem
              label="Email"
              value={application.personal.email}
            />

            <InfoItem
              label="County"
              value={application.personal.county}
            />

            <InfoItem
              label="Constituency"
              value={application.personal.constituency}
            />

            <InfoItem
              label="Ward"
              value={application.personal.ward}
            />
          </div>
        </section>

        {/* Education */}
        <section className="mb-6 rounded-xl bg-white shadow-sm">
          <div className="flex items-center justify-between border-b px-6 py-5">
            <div>
              <h3 className="text-lg font-bold text-gray-900">
                Education Information
              </h3>

              <p className="mt-1 text-sm text-gray-500">
                Applicant's education details
              </p>
            </div>

            {isDraft && (
              <a
                href="/apply/education"
                className="text-sm font-medium text-blue-600 hover:underline"
              >
                Edit
              </a>
            )}
          </div>

          <div className="grid gap-6 p-6 sm:grid-cols-2 lg:grid-cols-3">
            <InfoItem
              label="Institution"
              value={application.education.institution}
            />

            <InfoItem
              label="Education Level"
              value={application.education.level}
            />

            <InfoItem
              label="Course"
              value={application.education.course}
            />

            <InfoItem
              label="Year of Study"
              value={application.education.year}
            />

            <InfoItem
              label="Admission Number"
              value={application.education.admissionNumber}
            />
          </div>
        </section>

        {/* Financial information */}
        <section className="mb-6 rounded-xl bg-white shadow-sm">
          <div className="flex items-center justify-between border-b px-6 py-5">
            <div>
              <h3 className="text-lg font-bold text-gray-900">
                Financial Information
              </h3>

              <p className="mt-1 text-sm text-gray-500">
                Household financial information
              </p>
            </div>

            {isDraft && (
              <a
                href="/apply/financial"
                className="text-sm font-medium text-blue-600 hover:underline"
              >
                Edit
              </a>
            )}
          </div>

          <div className="grid gap-6 p-6 sm:grid-cols-2 lg:grid-cols-3">
            <InfoItem
              label="Family Income"
              value={application.financial.familyIncome}
            />

            <InfoItem
              label="Number of Dependants"
              value={application.financial.dependants}
            />

            <InfoItem
              label="Other Financial Support"
              value={application.financial.otherSupport}
            />
          </div>
        </section>

        {/* Documents */}
        <section className="mb-6 rounded-xl bg-white shadow-sm">
          <div className="flex items-center justify-between border-b px-6 py-5">
            <div>
              <h3 className="text-lg font-bold text-gray-900">
                Documents
              </h3>

              <p className="mt-1 text-sm text-gray-500">
                Documents attached to your application
              </p>
            </div>

            <a
              href="/documents"
              className="text-sm font-medium text-blue-600 hover:underline"
            >
              Manage Documents
            </a>
          </div>

          <div className="divide-y">
            {application.documents.map((document, index) => (
              <div
                key={index}
                className="flex flex-col gap-3 px-6 py-5 sm:flex-row sm:items-center sm:justify-between"
              >
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-gray-100 p-3">
                    📄
                  </div>

                  <div>
                    <p className="font-medium text-gray-900">
                      {document.name}
                    </p>

                    <p className="text-sm text-gray-500">
                      Required document
                    </p>
                  </div>
                </div>

                <span
                  className={`w-fit rounded-full px-3 py-1 text-xs font-semibold ${
                    document.status === "Uploaded"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {document.status}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Submit section */}
        {isDraft && (
          <section className="rounded-xl border border-blue-200 bg-blue-50 p-6">
            <h3 className="text-lg font-bold text-blue-900">
              Ready to submit?
            </h3>

            <p className="mt-2 max-w-3xl text-sm text-blue-800">
              Before submitting your application, make sure all
              information is correct and all required documents
              have been uploaded. You may not be able to edit your
              application after submission.
            </p>

            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <a
                href="/apply"
                className="rounded-lg bg-blue-600 px-5 py-3 text-center font-medium text-white transition hover:bg-blue-700"
              >
                Review Application
              </a>

              <button
                type="button"
                className="rounded-lg border border-blue-300 bg-white px-5 py-3 font-medium text-blue-700 transition hover:bg-blue-100"
                onClick={() =>
                  alert("Submit functionality will connect to FastAPI")
                }
              >
                Submit Application
              </button>
            </div>
          </section>
        )}

        {/* Submitted message */}
        {!isDraft && (
          <section className="rounded-xl border border-green-200 bg-green-50 p-6">
            <div className="flex gap-3">
              <div className="text-xl">✓</div>

              <div>
                <h3 className="font-bold text-green-900">
                  Application submitted successfully
                </h3>

                <p className="mt-1 text-sm text-green-800">
                  Your application has been received and will be
                  reviewed by the bursary committee.
                </p>
              </div>
            </div>
          </section>
        )}
      </main>
    </div>
  );
};

/* Reusable information component */
function InfoItem({ label, value }) {
  return (
    <div>
      <p className="text-sm font-medium text-gray-500">
        {label}
      </p>

      <p className="mt-1 font-semibold text-gray-900">
        {value || "Not provided"}
      </p>
    </div>
  );
}

export default Application;