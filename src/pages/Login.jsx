import React from "react";
import BgLogin from "../assets/img/bg-login.jpg";

const Login = () => {
  return (
    <div className="relative h-screen w-full bg-zinc-900/90">
      <img
        className="cover-fill absolute max-h-full w-full"
        src={BgLogin}
        alt="backgroundLogin"
      />
    </div>
  );
};

export default Login;
