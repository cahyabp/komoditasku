import React from "react";
import { Home } from "./pages/Home";
import TabelHarga from "./component/TabelHarga";
import Post from "./component/CardList";
import AboutUs from "./pages/about-us";
import Login from "./pages/Login";
import Detail from "./component/Detail";
import Dashboard from "./pages/dashboard";
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
      path: "/login",
      element: <Login />,
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
    },
  ];
  return (
    <>
      <main>
        <Routes>
          {paths.map((item, index) => (
            <Route key={index} {...item} />
          ))}
          <Route path="/Detail" element={<Detail />} />
          <Route path="/TabelHarga" element={<TabelHarga />} />
          <Route path="/Post" element={<Post />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
