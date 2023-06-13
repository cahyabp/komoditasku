import React from "react";

function Blog() {
  return (
    <div class="dark:bg-gray-800 mx-auto max-w-2xl rounded-lg bg-white px-8 py-4 align-middle shadow-md">
      <div class="flex items-center justify-between">
        <span class="text-gray-600 dark:text-gray-400 text-sm font-light">
          23 Mei 2023
        </span>
        <a class="text-gray-100 bg-gray-600 hover:bg-gray-500 transform cursor-pointer rounded px-3 py-1 text-sm font-bold transition-colors duration-200">
          Komoditasku
        </a>
      </div>
      <div class="mt-2">
        <a
          href="https://stackdiary.com/"
          class="text-gray-700 hover:text-gray-600 dark:hover:text-gray-200 text-2xl font-bold hover:underline dark:text-white"
        >
          Stok Beras Bali Capai 18 Ribu Ton: Cukup untuk 3 Bulan
        </a>
        <p class="text-gray-600 dark:text-gray-300 mt-2">
          Denpasar - Kepala Dinas Pertanian dan Pangan Provinsi Bali I Wayan
          Sunada menyebut stok beras di Pulau Dewata mencapai 18 ribu ton per
          Kamis (25/5/2023). Angka itu diklaim cukup untuk pasokan tiga bulan ke
          depan.
        </p>
      </div>
      <div class="mt-4 flex items-center justify-between">
        <a href="#" class="text-blue-600 dark:text-blue-400 hover:underline">
          Baca Selengkapnya ⟶
        </a>
      </div>
    </div>
  );
}

export default Blog;
