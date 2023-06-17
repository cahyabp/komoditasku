import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { LuFilter, LuFilterX } from "react-icons/lu";
import { AiOutlineCaretUp, AiOutlineCaretDown } from "react-icons/ai";
import { data } from "../Data";

function TabelHarga() {
  const [isFilter, setIsFilter] = useState(false);
  const [search, setSearch] = useState("");
  const tableHead = ["No", "Komoditi", "Wilayah", "Harga"];
  const [isOpenKomoditi, setIsOpenKomoditi] = useState(false);
  const [isOpenWilayah, setIsOpenWilayah] = useState(false);

  const [selectedKomoditi, setSelectedKomoditi] = useState("");
  const [selectedWilayah, setSelectedWilayah] = useState("");

  const handleFilter = () => {
    setIsFilter(!isFilter);
  };

  const getPageNumbers = () => {
    let pageNumbers = [];
    if (npage <= 5) {
      pageNumbers = numbers;
    } else {
      if (currentPage <= 3) {
        pageNumbers = numbers.slice(0, 5);
        pageNumbers.push("...");
        pageNumbers.push(npage);
      } else if (currentPage >= npage - 2) {
        pageNumbers = [1, "..."];
        pageNumbers = pageNumbers.concat(numbers.slice(npage - 4, npage + 1));
      } else {
        pageNumbers = pageNumbers.concat(
          numbers.slice(currentPage - 2, currentPage + 3)
        );
        pageNumbers.push("...");
        pageNumbers.push(npage);
      }
    }
    return pageNumbers;
  };

  // table pagination
  const [currentPage, setCurrentPage] = useState(true);
  const recordsPerPage = 10;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = data.slice(firstIndex, lastIndex);
  const npage = Math.ceil(data.length / recordsPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(true);

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
          <div className="relative flex w-[50%] justify-end align-top">
            <button
              onClick={() => {
                setIsOpenKomoditi((prev) => !prev);
                setIsOpenWilayah(false);
              }}
              className="mr-4 mt-4 flex w-full items-center justify-between rounded-lg border-4 border-transparent bg-gray-100 px-4 py-1 tracking-wider text-black duration-300 active:border-gray-900"
            >
              {selectedKomoditi || "Jenis Komoditi"}
              {!isOpenKomoditi ? (
                <AiOutlineCaretDown className="h-8" />
              ) : (
                <AiOutlineCaretUp className="h-8" />
              )}
            </button>

            {isOpenKomoditi && (
              <div className="absolute top-[57px] z-[1] w-[48.6%] bg-slate-100">
                {data
                  .filter(
                    (item, index) =>
                      data.findIndex(
                        (obj) => obj.komoditas === item.komoditas
                      ) === index
                  )
                  .map((item, i) => (
                    <div
                      key={i}
                      onClick={() => {
                        setSelectedKomoditi(item.komoditas);
                        setIsOpenKomoditi(false);
                      }}
                    >
                      <h3 className="flex cursor-pointer px-2 py-3 hover:bg-slate-400">
                        {item.komoditas}
                      </h3>
                    </div>
                  ))}
              </div>
            )}

            <button
              onClick={() => {
                setIsOpenWilayah((prev) => !prev);
                setIsOpenKomoditi(false);
              }}
              className="mt-4 flex w-full items-center justify-between rounded-lg border-4 border-transparent bg-gray-100 px-4 py-1 tracking-wider text-black duration-300 active:border-gray-900"
            >
              {selectedWilayah || "Wilayah"}
              {!isOpenWilayah ? (
                <AiOutlineCaretDown className="h-8" />
              ) : (
                <AiOutlineCaretUp className="h-8" />
              )}
            </button>

            {isOpenWilayah && (
              <div className="absolute right-0 top-14 z-[1] w-[48.7%] bg-slate-100">
                {data
                  .filter(
                    (item, index) =>
                      data.findIndex((obj) => obj.name === item.name) === index
                  )
                  .map((item, i) => (
                    <div
                      key={i}
                      onClick={() => {
                        setSelectedWilayah(item.name);
                        setIsOpenWilayah(false);
                      }}
                    >
                      <h3 className="flex cursor-pointer px-2 py-3 hover:bg-slate-400">
                        {item.name}
                      </h3>
                    </div>
                  ))}
              </div>
            )}
          </div>
        ) : null}

        <table className="table w-full divide-y divide-gray-200 ">
          <thead className="bg-gray-400">
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
            {records
              .filter((item) => {
                return search.toLowerCase() === ""
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
        <nav className="flex w-full justify-center">
          <ul className="flex space-x-2">
            <li className="inline-block">
              <a
                href="#TabelHarga"
                onClick={prePage}
                className="rounded-md bg-gray-200 px-2 py-1 hover:bg-gray-300"
              >
                Prev
              </a>
            </li>
            {getPageNumbers().map((n, i) => (
              <li className="inline-block" key={i}>
                <a
                  href="#TabelHarga"
                  className={
                    n === currentPage
                      ? "rounded-md bg-gray-500 px-2 py-1 text-white"
                      : "rounded-md bg-gray-200 px-2 py-1 hover:bg-gray-300"
                  }
                  onClick={() => changeCPage(n)}
                >
                  {n}
                </a>
              </li>
            ))}
            <li className="inline-block">
              <a
                href="#TabelHarga"
                onClick={nextPage}
                className="rounded-md bg-gray-200 px-2 py-1 hover:bg-gray-300"
              >
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
  function prePage() {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  }
  function changeCPage(id) {
    setCurrentPage(id);
  }
  function nextPage() {
    if (currentPage !== npage) {
      setCurrentPage(currentPage + 1);
    }
  }
}

export default TabelHarga;
