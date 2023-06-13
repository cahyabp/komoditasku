import React from "react";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import TabelHarga from "./component/TabelHarga";
import Footer from "./component/Footer";
import Blog from "./component/Blog";

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <TabelHarga/>
      <Blog />
      <Footer/> 
    </div>
  );
}

export default App;
