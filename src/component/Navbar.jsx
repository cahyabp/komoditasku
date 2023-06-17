import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="mx-auto flex h-24 max-w-[100%] items-center justify-between bg-primary px-4 text-white">
      <h1 className="text-3xl font-bold text-[#EEF2E6]">KomoditasKu</h1>
      <ul className="hidden text-[#EEF2E6] md:flex">
        <li className="p-4">
          <Link to={"/"}>Beranda</Link>
        </li>
        <li className="p-4">
          <a href="#TabelHarga">Tabel Harga</a>
        </li>
        <li className="p-4">
          <a href="#Post">Informasi</a>
        </li>
        <li className="p-4">
          <Link to={"/about-us"}>Tentang Kami</Link>
        </li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          !nav
            ? "fixed left-0 top-0 z-[999] h-full w-[60%] border-r border-r-gray-900 bg-primary duration-500 ease-in-out sm:w-[80%] md:hidden"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="ml-4 pt-[30px] text-3xl font-bold text-[#EEF2E6] sm:text-sm">
          Komoditasku
        </h1>
        <ul className="pt-24 uppercase ">
          <li className="border-b border-gray-50 p-4">
            <a href=" ">Beranda</a>
          </li>
          <li className="border-b border-gray-50 p-4">
            <a href="#tabel-harga">Tabel Harga</a>
          </li>
          <li className="border-b border-gray-50 p-4">
            <a href="#informasi">Informasi</a>
          </li>
          <li className="border-b border-gray-50 p-4">
            <a href="tentang-kami">Tentang Kami</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
