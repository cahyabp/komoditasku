import React, { useState } from "react";
import data from "../component/data";
import { useNavigate } from "react-router-dom";

const Post = () => {
  const [count, setCount] = useState(3);
  const navigate = useNavigate();

  const handleClickDetail = () => {
    navigate(`/Detail`);
  };

  const toggleLoadMore = () => {
    setCount(count === 3 ? 6 : 3);
  };

  return (
    <div
      id="Post"
      name="event"
      className="mx-auto max-h-full max-w-[1240px] items-center px-5 py-20"
    >
      <h1 className="pb-5 text-center text-5xl font-bold">Berita Terkini</h1>
      <div className="mx-auto flex justify-between">
        <div
          data-aos="fade-down"
          className="grid items-center gap-4 pt-2 sm:grid-cols-2 md:grid-cols-3 "
        >
          {data.cardData.map((item, index) => {
            if (index < count) {
              return (
                <div
                  className="relative max-w-[1240px] overflow-hidden rounded-lg border border-gray-200 shadow transition ease-in-out"
                  key={index}
                  onClick={() => handleClickDetail()}
                >
                  <a href="#">
                    <img
                      className="h-full w-full rounded-t-lg object-cover opacity-75"
                      src={item.img}
                      alt=""
                    />
                  </a>
                  <div className="absolute bottom-0 w-full bg-black bg-opacity-50">
                    <a href="#">
                      <h5 className="mb-2 py-2 text-center text-xl font-bold tracking-tight text-white">
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
          className="items-center rounded-md bg-primary px-7 py-3 text-center text-white"
          onClick={() => toggleLoadMore()}
        >
          <p>{count === 3 ? "Show More" : "More Less"}</p>
        </button>
      </div>
    </div>
  );
};

export default Post;
