import React from "react";
import BgLogin from "../assets/img/bg-login.jpg";

const Login = () => {
  return (
    <div className="relative h-screen w-full bg-zinc-900/90">
      <img
        className="absolute w-full"
        onScroll={BgLogin}
        alt="backgroundLogin"
      ></img>
    </div>
  );
};

export default Login;
