import React from "react";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import { Home } from "./pages/Home";
import { Admin } from "./pages/admin";

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
      path: "/admin",
      element: <Admin />,
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
        </Routes>
      </main>
    </>
  );
}

export default App;
