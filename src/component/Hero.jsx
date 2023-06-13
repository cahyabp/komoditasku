import React from "react";
import vectorHero from "../assets/img/vector-hero.png";

function Hero() {
  return (
    <section className="text-gray-100 bg-gray-800 my-8">
      <div className="container mx-auto flex flex-col justify-center p-6 sm:py-12 lg:flex-row lg:justify-between lg:py-24">
        <div className="xl:h-112 2xl:h-128 mt-8 flex h-72 items-center justify-center p-6 sm:h-80 lg:mt-0 lg:h-96">
          <img
            src={vectorHero}
            alt=""
            className="xl:h-112 2xl:h-128 h-72 object-contain sm:h-80 lg:h-96"
          />
        </div>
        <div className="flex flex-col justify-center rounded-sm p-6 text-center lg:max-w-md lg:text-left xl:max-w-lg">
          <h1 className="text-5xl font-bold leading-none sm:text-6xl">
            Komoditasku
          </h1>
          <p className="mb-8 mt-6 text-lg sm:mb-12">
          Jadilah yang pertama mengetahui harga terbaru komoditas di kota-kota besar Indonesia melalui website kami yang informatif.
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:items-center sm:justify-center sm:space-x-4 sm:space-y-0 lg:justify-start">
            <a
              rel="noopener noreferrer"
              href="#"
              className="dark:border-gray-100 rounded border px-8 py-3 text-lg font-semibold"
            >
              Harga Komoditas Terkini
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
