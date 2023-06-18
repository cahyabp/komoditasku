import Navbar from "../component/Navbar";
import Hero from "../component/Hero";
import TabelHarga from "../component/TabelHarga";
import Post from "../component/CardList";
import Footer from "../component/Footer";

export const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <TabelHarga />
      <Post />
      <Footer />
    </>
  );
};
