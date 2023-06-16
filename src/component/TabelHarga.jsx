import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { LuFilter, LuFilterX } from "react-icons/lu";
import { data } from "../Data";

function TabelHarga() {
  const [isFilter, setIsFilter] = useState(false);
  const [search, setSearch] = useState('');
  const tableHead = ["No", "Komoditi", "Wilayah", "Harga"];

  const handleFilter = () => {
    setIsFilter(!isFilter);
  };

  return (
    <div
      id="TabelHarga"
      className="container mx-auto max-h-full max-w-full bg-primary py-20"
    >
      <div className="flex flex-col items-end justify-end gap-8">
        <div className="flex items-start justify-end gap-2 ">
          <div className="relative max-w-xs">
            <label htmlFor="hs-table-search" className="sr-only">
              Search
            </label>
            <div className="flex items-center justify-center gap-3 rounded-md bg-white px-3 py-2">
              <div className="text-red-300">
                <BsSearch className="  h-[16px] w-[16px]" />
              </div>
              <input
                type="text"
                name="hs-table-search"
                id="hs-table-search"
                className="focus-visible:outline-none"
                placeholder="Search..."
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>
          <button
            onClick={handleFilter}
            className="flex items-center justify-center gap-3 rounded-md bg-white px-3 py-2 text-black "
          >
            <div>{!isFilter ? <LuFilter /> : <LuFilterX />}</div>
            Filter
          </button>
        </div>

        {isFilter ? (
          <div className="flex items-center justify-end gap-4 ">
            <button className="bg-white p-3">Komoditi</button>
            <button className="bg-white p-3">Wilayah</button>
          </div>
        ) : null}

        <table className="w-full divide-y divide-gray-200 ">
          <thead className="bg-gray-50">
            <tr>
              {tableHead.map((data, index) => {
                if (data === "Harga") {
                  return (
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-xs font-bold uppercase text-black "
                    >
                      {data}
                    </th>
                  );
                }
                return (
                  <th
                    id={index}
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-bold uppercase text-black "
                  >
                    {data}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {data.filter((item) => {
              return search.toLowerCase() === ''
              ? item
              : item.name.toLowerCase().includes(search);   
          })
          .map((item, index) => (
                <tr key={index} className="bg-slate-300">
                  <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-800">
                    {item.id}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-800">
                    {item.komoditas}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-800">
                    {item.name}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-center text-sm font-medium">
                     {item.display}
                  </td>
                </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TabelHarga;
