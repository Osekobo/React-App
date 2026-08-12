import { useState } from "react";

export default function ItemCard() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4 py-8">
      <div className="w-full max-w-sm rounded-2xl bg-white p-6 text-center shadow-lg sm:p-8">

        {/* Title */}
        <h1 className="mb-6 text-2xl font-bold text-gray-900 sm:text-3xl">
          Item Card
        </h1>

        {/* Count */}
        <div className="mb-8 rounded-xl bg-gray-100 p-6">
          <p className="text-sm font-medium text-gray-500">
            Current Count
          </p>

          <p className="mt-2 text-5xl font-bold text-blue-600">
            {count}
          </p>
        </div>

        {/* Buttons */}
        <div className="space-y-3">

          {/* Add */}
          <button
            onClick={() => setCount(count + 1)}
            className="w-full rounded-lg bg-green-600 px-4 py-3 font-semibold text-white transition hover:bg-green-700 active:scale-[0.98]"
          >
            + Add
          </button>

          {/* Minus */}
          <button
            onClick={() => {
              if (count > 0) {
                setCount(count - 1);
              }
            }}
            className="w-full rounded-lg bg-yellow-500 px-4 py-3 font-semibold text-white transition hover:bg-yellow-600 active:scale-[0.98]"
          >
            − Minus
          </button>

          {/* Reset */}
          <button
            onClick={() => setCount(0)}
            className="w-full rounded-lg bg-gray-700 px-4 py-3 font-semibold text-white transition hover:bg-gray-800 active:scale-[0.98]"
          >
            Reset
          </button>

        </div>
      </div>
    </div>
  );
}