import React, { useState } from "react";
import data from "../component/data";
import { useNavigate } from "react-router-dom";

const Event = () => {
  const [count, setCount] = useState(3);
  const navigate = useNavigate();

  const handleClickDetail = () => {
    navigate(`/Detail`);
  };

  const toggleLoadMore = () => {
    setCount(count === 3 ? 6 : 3);
  };

  return (
    <div name="event" className="mx-auto max-w-[1240px] items-center px-5">
      <h1 className="pb-5 pt-28 text-center text-5xl font-bold">
        Berita Terkini
      </h1>
      <div className="mx-auto flex justify-between">
        <div
          data-aos-offset="400"
          data-aos="fade-up"
          className="grid items-center gap-4 pt-2 sm:grid-cols-2 md:grid-cols-3"
        >
          {data.cardData.map((item, index) => {
            if (index < count) {
              return (
                <div
                  class="relative max-w-[1240px] overflow-hidden rounded-lg border border-gray-200 shadow"
                  key={index}
                  onClick={() => handleClickDetail()}
                >
                  <a href="#">
                    <img
                      class="h-full w-full rounded-t-lg object-cover opacity-75"
                      src={item.img}
                      alt=""
                    />
                  </a>
                  <div class="absolute bottom-0 w-full bg-black bg-opacity-50">
                    <a href="#">
                      <h5 class="mb-2 py-2 text-center text-xl font-bold tracking-tight text-white">
                        {item.title}
                      </h5>
                    </a>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
      <div className="flex flex-row justify-center gap-2 pt-10">
        <button
          className="items-center rounded-md bg-[#007936] px-7 py-3 text-center"
          onClick={() => toggleLoadMore()}
        >
          <p>{count === 3 ? "Show More" : "More Less"}</p>
        </button>
      </div>
    </div>
  );
};

export default Event;
