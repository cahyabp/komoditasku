import React from "react";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import { Home } from "./pages/Home";
import AboutUs from "./pages/about-us";
import Detail from "./component/Detail";
import { Admin } from "./pages/admin";
import { Route, Routes } from "react-router-dom";

function App() {
  const paths = [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/about-us",
      element: <AboutUs />,
    },
    {
      path: "/admin",
      element: <Admin />,
    },
  ];
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Routes>
          {paths.map((item, index) => (
            <Route key={index} {...item} />
          ))}
          <Route path="/Detail" element={<Detail />} />
        </Routes>
        <Footer />
      </main>
    </>
  );
}

export default App;
