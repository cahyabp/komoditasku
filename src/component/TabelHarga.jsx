import React from "react";

function TabelHarga() {
  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto">
        <div className="flex justify-between py-3 pl-2">
          <div className="relative max-w-xs">
            <label htmlFor="hs-table-search" className="sr-only">
              Search
            </label>
            <input
              type="text"
              name="hs-table-search"
              id="hs-table-search"
              className="border-gray-200 focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 block w-full rounded-md p-3 pl-10 text-sm"
              placeholder="Search..."
            />
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
              <svg
                className="text-gray-400 h-3.5 w-3.5"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <div className="relative">
              <button className="focus:ring-accent-500 focus:border-accent-500 hover:bg-gray-50 relative z-0 inline-flex rounded-md text-sm shadow-sm focus:z-10 focus:outline-none focus:ring-1">
                <span className="text-gray-600 border-gray-300 relative inline-flex items-center space-x-2 rounded-md border bg-white px-3 py-3 text-sm font-medium sm:py-2">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3 w-3"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                      />
                    </svg>
                  </div>
                  <div className="hidden sm:block">Filters</div>
                </span>
              </button>
            </div>
          </div>
        </div>

        <div className="flex justify-center w-full p-1.5 items-center">
          <div className="overflow-hidden rounded-lg border w-[900px]">
            <table className="divide-gray-200 min-w-full divide-y">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="text-gray-500 px-6 py-3 text-left text-xs font-bold uppercase "
                  >
                    No
                  </th>
                  <th
                    scope="col"
                    className="text-gray-500 px-6 py-3 text-left text-xs font-bold uppercase "
                  >
                    Komoditi
                  </th>
                  <th
                    scope="col"
                    className="text-gray-500 px-6 py-3 text-left text-xs font-bold uppercase "
                  >
                    Wilayah
                  </th>
                  <th
                    scope="col"
                    className="text-gray-500 px-6 py-3 text-right text-xs font-bold uppercase "
                  >
                    Harga
                  </th>
                </tr>
              </thead>
              <tbody className="divide-gray-200 divide-y">
                <tr>
                  <td className="text-gray-800 whitespace-nowrap px-6 py-4 text-sm font-medium">
                    1
                  </td>
                  <td className="text-gray-800 whitespace-nowrap px-6 py-4 text-sm">
                    Beras
                  </td>
                  <td className="text-gray-800 whitespace-nowrap px-6 py-4 text-sm">
                    Bandung
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-right text-sm font-medium">
                    Rp. 10.450
                  </td>
                </tr>
                <tr>
                  <td className="text-gray-800 whitespace-nowrap px-6 py-4 text-sm font-medium">
                    2
                  </td>
                  <td className="text-gray-800 whitespace-nowrap px-6 py-4 text-sm">
                    Beras
                  </td>
                  <td className="text-gray-800 whitespace-nowrap px-6 py-4 text-sm">
                    Jawa Tengah
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-right text-sm font-medium">
                    Rp. 12.100
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TabelHarga;
