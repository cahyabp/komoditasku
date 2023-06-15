import React from "react";

// export const AboutUs = () => {
//   return <div className="h-[80vh]">AboutUs</div>;
// };
const AboutUs = () => {
  return (
    <div name="about" className="my-36 w-full pt-7">
      <div className="relative mx-auto max-w-[1240px]">
        <div className="md:mx0 mx-5 text-center">
          <h2
            data-aos-offset="500"
            data-aos="fade-up"
            className="text-5xl font-bold"
          >
            About us
          </h2>
          <p
            data-aos-offset="500"
            data-aos="fade-right"
            className="py-6 text-2xl text-gray-500"
          >
            Komoditasku merupakan sebuah website yang membantu masyarakat untuk
            mengetahui harga komoditi terkini diseluruh Indonesia. Pada website
            ini kita dapat mencari harga komoditi dia
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
