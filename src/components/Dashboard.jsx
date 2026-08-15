import { useState } from "react";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Main content */}
      <div className="lg:ml-64">
        {/* Dashboard content */}
        <main className="p-4 sm:p-6 lg:p-8">
          {/* Welcome */}
          <section className="mb-8">
            <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              Welcome back, Rodent
            </h1>

            <p className="mt-2 text-gray-600">
              Here's an overview of your bursary application.
            </p>
          </section>

          {/* Status cards */}
          <section className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {/* Application */}
            <div className="rounded-xl bg-white p-5 shadow-sm">
              <div className="mb-4 flex items-center justify-between">
                <div className="rounded-lg bg-blue-100 p-3">📝</div>

                <span className="text-sm text-gray-500">Application</span>
              </div>

              <h3 className="text-xl font-bold text-gray-900">Draft</h3>

              <p className="mt-1 text-sm text-gray-500">Not submitted yet</p>
            </div>

            {/* Documents */}
            <div className="rounded-xl bg-white p-5 shadow-sm">
              <div className="mb-4 flex items-center justify-between">
                <div className="rounded-lg bg-purple-100 p-3">📄</div>

                <span className="text-sm text-gray-500">Documents</span>
              </div>

              <h3 className="text-xl font-bold text-gray-900">3 / 5</h3>

              <p className="mt-1 text-sm text-gray-500">Documents uploaded</p>
            </div>

            {/* Progress */}
            <div className="rounded-xl bg-white p-5 shadow-sm">
              <div className="mb-4 flex items-center justify-between">
                <div className="rounded-lg bg-green-100 p-3">📊</div>

                <span className="text-sm text-gray-500">Progress</span>
              </div>

              <h3 className="text-xl font-bold text-gray-900">60%</h3>

              <div className="mt-3 h-2 rounded-full bg-gray-200">
                <div className="h-2 w-[60%] rounded-full bg-green-500"></div>
              </div>
            </div>

            {/* Status */}
            <div className="rounded-xl bg-white p-5 shadow-sm">
              <div className="mb-4 flex items-center justify-between">
                <div className="rounded-lg bg-yellow-100 p-3">⏳</div>

                <span className="text-sm text-gray-500">Status</span>
              </div>

              <h3 className="text-xl font-bold text-gray-900">In Progress</h3>

              <p className="mt-1 text-sm text-gray-500">
                Complete your application
              </p>
            </div>
          </section>

          {/* Main grid */}
          <section className="grid gap-6 lg:grid-cols-3">
            {/* Application progress */}
            <div className="rounded-xl bg-white p-6 shadow-sm lg:col-span-2">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <h2 className="text-lg font-bold text-gray-900">
                    Application Progress
                  </h2>

                  <p className="mt-1 text-sm text-gray-500">
                    Complete all sections before submitting.
                  </p>
                </div>

                <span className="font-semibold text-blue-600">60%</span>
              </div>

              {/* Progress bar */}
              <div className="mb-8 h-3 overflow-hidden rounded-full bg-gray-200">
                <div className="h-full w-[60%] rounded-full bg-blue-600"></div>
              </div>

              {/* Steps */}
              <div className="space-y-6">
                {/* Step 1 */}
                <div className="flex items-start gap-4">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-green-100 text-green-600">
                    ✓
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Personal Information
                    </h3>

                    <p className="text-sm text-gray-500">
                      Your personal information is complete.
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex items-start gap-4">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-green-100 text-green-600">
                    ✓
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Education Information
                    </h3>

                    <p className="text-sm text-gray-500">
                      Your education details are complete.
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex items-start gap-4">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-green-100 text-green-600">
                    ✓
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Financial Information
                    </h3>

                    <p className="text-sm text-gray-500">
                      Your financial information is complete.
                    </p>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="flex items-start gap-4">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-yellow-100 text-yellow-600">
                    !
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900">Documents</h3>

                    <p className="text-sm text-gray-500">
                      Upload the remaining required documents.
                    </p>
                  </div>
                </div>

                {/* Step 5 */}
                <div className="flex items-start gap-4">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-gray-400">
                    5
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Review & Submit
                    </h3>

                    <p className="text-sm text-gray-500">
                      Review your application before submitting.
                    </p>
                  </div>
                </div>
              </div>

              {/* Continue button */}
              <div className="mt-8">
                <button className="rounded-lg bg-blue-600 px-5 py-3 font-medium text-white transition hover:bg-blue-700">
                  Continue Application →
                </button>
              </div>
            </div>

            {/* Quick actions */}
            <div className="rounded-xl bg-white p-6 shadow-sm">
              <h2 className="text-lg font-bold text-gray-900">Quick Actions</h2>

              <div className="mt-5 space-y-3">
                <a
                  href="/application"
                  className="flex items-center gap-4 rounded-lg border p-4 transition hover:bg-gray-50"
                >
                  <div className="rounded-lg bg-blue-100 p-3">📝</div>

                  <div>
                    <h3 className="font-semibold text-gray-900">
                      My Application
                    </h3>

                    <p className="text-sm text-gray-500">View or continue</p>
                  </div>
                </a>

                <a
                  href="/documents"
                  className="flex items-center gap-4 rounded-lg border p-4 transition hover:bg-gray-50"
                >
                  <div className="rounded-lg bg-purple-100 p-3">📄</div>

                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Upload Documents
                    </h3>

                    <p className="text-sm text-gray-500">Manage your files</p>
                  </div>
                </a>

                <a
                  href="/profile"
                  className="flex items-center gap-4 rounded-lg border p-4 transition hover:bg-gray-50"
                >
                  <div className="rounded-lg bg-green-100 p-3">👤</div>

                  <div>
                    <h3 className="font-semibold text-gray-900">My Profile</h3>

                    <p className="text-sm text-gray-500">Update your details</p>
                  </div>
                </a>

                <a
                  href="/application-status"
                  className="flex items-center gap-4 rounded-lg border p-4 transition hover:bg-gray-50"
                >
                  <div className="rounded-lg bg-yellow-100 p-3">🔍</div>

                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Application Status
                    </h3>

                    <p className="text-sm text-gray-500">
                      Track your application
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </section>

          {/* Bottom section */}
          <section className="mt-6 grid gap-6 lg:grid-cols-2">
            {/* Announcements */}
            <div className="rounded-xl bg-white p-6 shadow-sm">
              <div className="mb-5 flex items-center justify-between">
                <h2 className="text-lg font-bold text-gray-900">
                  Announcements
                </h2>

                <a
                  href="/announcements"
                  className="text-sm font-medium text-blue-600 hover:underline"
                >
                  View all
                </a>
              </div>

              <div className="space-y-4">
                <div className="rounded-lg bg-blue-50 p-4">
                  <h3 className="font-semibold text-blue-900">
                    Bursary Applications Are Open
                  </h3>

                  <p className="mt-1 text-sm text-blue-700">
                    Applications for the current bursary cycle are now open.
                  </p>

                  <p className="mt-2 text-xs text-blue-600">2 days ago</p>
                </div>

                <div className="rounded-lg bg-gray-50 p-4">
                  <h3 className="font-semibold text-gray-900">
                    Application Deadline
                  </h3>

                  <p className="mt-1 text-sm text-gray-600">
                    Make sure you submit your application before the deadline.
                  </p>

                  <p className="mt-2 text-xs text-gray-500">5 days ago</p>
                </div>
              </div>
            </div>

            {/* Recent activity */}
            <div className="rounded-xl bg-white p-6 shadow-sm">
              <h2 className="mb-5 text-lg font-bold text-gray-900">
                Recent Activity
              </h2>

              <div className="space-y-5">
                <div className="flex gap-4">
                  <div className="mt-1 h-3 w-3 rounded-full bg-green-500"></div>

                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      Education information completed
                    </p>

                    <p className="text-xs text-gray-500">Today, 10:30 AM</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="mt-1 h-3 w-3 rounded-full bg-blue-500"></div>

                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      Document uploaded
                    </p>

                    <p className="text-xs text-gray-500">Yesterday, 4:15 PM</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="mt-1 h-3 w-3 rounded-full bg-purple-500"></div>

                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      Profile updated
                    </p>

                    <p className="text-xs text-gray-500">2 days ago</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
