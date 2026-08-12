import { useState } from "react";

export default function ItemForm() {
  const [items, setItems] = useState([
    { id: 1, name: "Laptop", price: 70000 },
    { id: 2, name: "Television", price: 80000 },
    { id: 3, name: "Phone", price: 90000 },
  ]);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const newItem = {
      id: items.length + 1,
      name: name,
      price: price,
    };

    setItems([...items, newItem]);

    setName("");
    setPrice("");
  }

  function handleDelete(id) {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
  }

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Page heading */}
        <h1 className="mb-6 text-2xl font-bold text-gray-900 sm:text-3xl">
          Item Management
        </h1>

        {/* Form Card */}
        <div className="mb-8 rounded-2xl bg-white p-6 shadow-md sm:p-8">
          <h2 className="mb-6 text-xl font-semibold text-gray-800">
            Add New Item
          </h2>

          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 gap-5 md:grid-cols-3 md:items-end"
          >
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Name
              </label>

              <input
                id="name"
                type="text"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              />
            </div>

            {/* Price */}
            <div>
              <label
                htmlFor="price"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Price
              </label>

              <input
                id="price"
                type="number"
                placeholder="Enter price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700 active:scale-[0.98]"
            >
              Add Item
            </button>
          </form>
        </div>

        {/* Table Card */}
        <div className="rounded-2xl bg-white p-4 shadow-md sm:p-6">
          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-xl font-semibold text-gray-800">Items</h2>

            <span className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-600">
              {items.length} items
            </span>
          </div>

          {/* Responsive table */}
          <div className="overflow-x-auto">
            <table className="w-full min-w-150 text-left">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <th className="px-4 py-3 text-sm font-semibold text-gray-700">
                    ID
                  </th>

                  <th className="px-4 py-3 text-sm font-semibold text-gray-700">
                    NAME
                  </th>

                  <th className="px-4 py-3 text-sm font-semibold text-gray-700">
                    PRICE
                  </th>

                  <th className="px-4 py-3 text-sm font-semibold text-gray-700">
                    ACTION
                  </th>
                </tr>
              </thead>

              <tbody>
                {items.map((item) => (
                  <tr
                    key={item.id}
                    className="border-b border-gray-100 transition hover:bg-gray-50"
                  >
                    <td className="px-4 py-4 text-gray-600">{item.id}</td>

                    <td className="px-4 py-4 font-medium text-gray-900">
                      {item.name}
                    </td>

                    <td className="px-4 py-4 text-gray-600">
                      KSh {Number(item.price).toLocaleString()}
                    </td>

                    <td className="px-4 py-4">
                      <button
                        onClick={() => handleDelete(item.id)}
                        className="rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-red-700"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
