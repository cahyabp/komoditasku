import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="bg-black text-white mx-auto flex h-24 max-w-[100%] items-center justify-between bg-primary px-4">
      <h1 className="text-3xl font-bold text-[#EEF2E6]">Komoditasku</h1>
      <ul className="hidden text-[#EEF2E6] md:flex">
        <li className="p-4">
          <a href=" ">Beranda</a>
        </li>
        <li className="p-4">
          <a href="#tabel-harga">Tabel Harga</a>
        </li>
        <li className="p-4">
          <a href="#informasi">Informasi</a>
        </li>
        <li className="p-4">
          <a href="tentang-kami">Tentang Kami</a>
        </li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          !nav
            ? "border-r-gray-900 fixed left-0 top-0 z-[-1] h-full w-[100%] border-r bg-[#00df9a] duration-500 ease-in-out md:hidden"
            : "fixed left-[-100%]"
        }
      >
        <ul className="pt-24 uppercase ">
          <li className="p-4">
            <a href=" ">Beranda</a>
          </li>
          <li className="p-4">
            <a href="#tabel-harga">Tabel Harga</a>
          </li>
          <li className="p-4">
            <a href="#informasi">Informasi</a>
          </li>
          <li className="p-4">
            <a href="tentang-kami">Tentang Kami</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
