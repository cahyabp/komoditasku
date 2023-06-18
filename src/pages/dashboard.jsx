import React from "react";

const Dashboard = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-1/5 bg-gray-800 p-4 text-white">
        <h2 className="mb-4 text-2xl font-bold">Admin Dashboard</h2>
        <ul className="space-y-2">
          <li>
            <a href="#" className="text-gray-300 hover:text-white">
              Dashboard
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-300 hover:text-white">
              Lihat Data Post
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-300 hover:text-white">
              Tambah Post
            </a>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="w-4/5 bg-gray-100 p-4">
        <h2 className="mb-4 text-2xl font-bold">Dashboard</h2>
        {/* Content */}
        <div className="flex space-x-4">
          {/* Card 1 */}
          <div className="w-1/3 rounded bg-white p-4 shadow-md">
            <h3 className="mb-2 text-xl font-bold">Post 1</h3>
            <p className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <div className="flex justify-end">
              <button className="mr-2 rounded bg-blue-500 px-4 py-2 text-white">
                Edit
              </button>
              <button className="rounded bg-red-500 px-4 py-2 text-white">
                Hapus
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="w-1/3 rounded bg-white p-4 shadow-md">
            <h3 className="mb-2 text-xl font-bold">Post 2</h3>
            <p className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <div className="flex justify-end">
              <button className="mr-2 rounded bg-blue-500 px-4 py-2 text-white">
                Edit
              </button>
              <button className="rounded bg-red-500 px-4 py-2 text-white">
                Hapus
              </button>
            </div>
          </div>

          {/* Card 3 */}
          <div className="w-1/3 rounded bg-white p-4 shadow-md">
            <h3 className="mb-2 text-xl font-bold">Post 3</h3>
            <p className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <div className="flex justify-end">
              <button className="mr-2 rounded bg-blue-500 px-4 py-2 text-white">
                Edit
              </button>
              <button className="rounded bg-red-500 px-4 py-2 text-white">
                Hapus
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
