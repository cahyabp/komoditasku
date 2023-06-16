import React from "react";

const AboutUs = () => {
  return (
    <div class="container mx-auto my-24 md:px-6">
      <section class="mb-32 text-center">
        <div class="flex justify-center">
          <div class="max-w-[700px] text-center">
            <h2 class="mb-6 text-center text-3xl font-bold">KOMODITASKU</h2>
            <p class="mb-16 text-gray-600">
              Komoditasku adalah sebuah website yang menyediakan informasi
              terbaru mengenai harga komoditas di Indonesia. Website ini
              dirancang untuk membantu pengguna dalam memperoleh data harga
              terkini untuk komoditas pangan. <br />
              <br /> Fungsi utama dari Komoditasku adalah memberikan akses mudah
              dan cepat kepada pengguna untuk memantau dan membandingkan harga
              komoditas di pasar. Pengguna dapat mencari komoditas spesifik yang
              mereka minati, seperti harga beras, gula atau minyak. <br />
              <br />
              Berikut adalah beberapa fitur yang ditawarkan oleh Komoditasku:
              <br />
              1. Data Harga Terbaru: Komoditasku menyediakan informasi harga
              terkini dari berbagai sumber tepercaya. Data ini diperbarui secara
              rutin sehingga pengguna dapat mengandalkan informasi yang akurat
              dan mutakhir.
              <br /> 2. Filter dan Pencarian: Pengguna dapat menggunakan fitur
              filter dan pencarian untuk menemukan komoditas spesifik yang
              mereka cari. Misalnya, pengguna dapat memfilter hasil berdasarkan
              komoditi dan wilayah.
              <br /> 3. Tabel Harga: Komoditasku menyajikan data harga dalam
              bentuk tabel. Pengguna dapat melihat tren harga dari suatu
              wilayah, membandingkan harga antara komoditas yang berbeda, dan
              melakukan analisis sendiri untuk membantu mereka dalam pengambilan
              keputusan.
              <br /> 4. Berita dan Informasi Pasar: Selain data harga,
              Komoditasku juga menyediakan berita dan informasi terkait pasar
              komoditas di Indonesia. Pengguna dapat mengakses artikel-artikel
              terbaru tentang perubahan pasar, faktor-faktor yang mempengaruhi
              harga, dan perkembangan terbaru dalam industri komoditas.
              <br />
              <br />
              Dengan adanya Komoditasku, pengguna dapat mengakses informasi
              harga komoditas dengan mudah dan dapat mengambil keputusan yang
              lebih cerdas dalam perdagangan atau kegiatan bisnis mereka.
              Website ini diharapkan dapat memberikan wawasan yang lebih baik
              tentang pasar komoditas di Indonesia dan membantu menghubungkan
              produsen, pedagang, dan konsumen komoditas dengan lebih efisien.
            </p>
          </div>
        </div>

        {/* Penyusun Website */}
        <h2 class="mb-12 text-3xl font-bold">Penyusun Website KomoditasKu</h2>

        <div class="lg:gap-xl-12 grid gap-x-6 md:grid-cols-2 lg:grid-cols-4">
          <div class="mb-12 lg:mb-0">
            <img
              class="mx-auto mb-6 w-[150px] rounded-lg shadow-lg dark:shadow-black/20"
              src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).jpg"
              alt="avatar"
            />
            <h5 class="mb-4 text-lg font-bold">
              F122XB431 <br />
              Zaki Satria Prayoga
            </h5>
            <p class="mb-6">Frontend Developer</p>
            <ul class="mx-auto flex list-inside justify-center">
              <a href="#!" class="px-2">
                {/* <!-- GitHub --> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  class="dark:text-primary-400 h-4 w-4 text-primary"
                >
                  <path
                    fill="currentColor"
                    d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                  />
                </svg>
              </a>
              <a href="#!" class="px-2">
                {/* <!-- Linkedin --> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  class="dark:text-primary-400 h-3.5 w-3.5 text-primary"
                >
                  <path
                    fill="currentColor"
                    d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"
                  />
                </svg>
              </a>
            </ul>
          </div>
          <div class="mb-12 lg:mb-0">
            <img
              class="mx-auto mb-6 w-[150px] rounded-lg shadow-lg dark:shadow-black/20"
              src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(4).jpg"
              alt="avatar"
            />
            <h5 class="mb-4 text-lg font-bold">
              F122XB269 <br />
              Cahya Bintang Pamungkas
            </h5>
            <p class="mb-6">Frontend Developer</p>
            <ul class="mx-auto flex list-inside justify-center">
              <a href="#!" class="px-2">
                {/* <!-- GitHub --> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  class="dark:text-primary-400 h-4 w-4 text-primary"
                >
                  <path
                    fill="currentColor"
                    d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                  />
                </svg>
              </a>
              <a href="#!" class="px-2">
                {/* <!-- Linkedin --> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  class="dark:text-primary-400 h-3.5 w-3.5 text-primary"
                >
                  <path
                    fill="currentColor"
                    d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"
                  />
                </svg>
              </a>
            </ul>
          </div>
          <div class="mb-12 md:mb-0">
            <img
              class="mx-auto mb-6 w-[150px] rounded-lg shadow-lg dark:shadow-black/20"
              src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).jpg"
              alt="avatar"
            />
            <h5 class="mb-4 text-lg font-bold">
              F083XB137 <br />
              Nanda Ilham Saputra
            </h5>
            <p class="mb-6">Backend Developer</p>
            <ul class="mx-auto flex list-inside justify-center">
              <a href="#!" class="px-2">
                {/* <!-- GitHub --> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  class="dark:text-primary-400 h-4 w-4 text-primary"
                >
                  <path
                    fill="currentColor"
                    d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                  />
                </svg>
              </a>
              <a href="#!" class="px-2">
                {/* <!-- Linkedin --> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  class="dark:text-primary-400 h-3.5 w-3.5 text-primary"
                >
                  <path
                    fill="currentColor"
                    d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"
                  />
                </svg>
              </a>
            </ul>
          </div>
          <div class="mb-12 md:mb-0">
            <img
              class="mx-auto mb-6 w-[150px] rounded-lg shadow-lg dark:shadow-black/20"
              src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(31).jpg"
              alt="avatar"
            />
            <h5 class="mb-4 text-lg font-bold">
              F083XB272 <br />
              Alfian Nur Wibowo
            </h5>
            <p class="mb-6">Backend Developer</p>
            <ul class="mx-auto flex list-inside justify-center">
              <a href="#!" class="px-2">
                {/* <!-- GitHub --> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  class="dark:text-primary-400 h-4 w-4 text-primary"
                >
                  <path
                    fill="currentColor"
                    d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                  />
                </svg>
              </a>
              <a href="#!" class="px-2">
                {/* <!-- Linkedin --> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  class="dark:text-primary-400 h-3.5 w-3.5 text-primary"
                >
                  <path
                    fill="currentColor"
                    d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"
                  />
                </svg>
              </a>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
