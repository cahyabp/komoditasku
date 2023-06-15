import Hero from "../component/Hero";
import TabelHarga from "../component/TabelHarga";
import Blog from "../component/Blog";
import Event from "../component/CardList";

export const Home = () => {
  return (
    <>
      <Hero />
      <TabelHarga />
      <Blog />
      <Event />
    </>
  );
};
