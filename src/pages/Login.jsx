import React, { useState } from "react";
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebase/index';
import { useAtom, atom } from 'jotai';
import { useNavigate} from 'react-router-dom';
import { useEffect } from 'react';

export const userAtom = atom(localStorage.getItem('userEmail') ?? null);

const Login = () => {
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [email, setEmail] = useState("");
  const [user, setUser] = useAtom(userAtom);
  const navigate = useNavigate();
  const navigateTodashboard = ()=> {
    navigate('/dashboard'); }

  const handleSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential)=>{
      setUser(userCredential.user.email.toLowerCase());
      localStorage.setItem('userEmail', userCredential.user.email.toLowerCase());
      const user = userCredential.user.email.toLowerCase();
      console.log(userCredential);   
      console.log(user);
      alert("login succes")
      navigateTodashboard()
    }).catch((error)=> {
      console.log(error)
      alert("login failed")
    })
  }
  

useEffect(()=>{
},[]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-bg-login bg-cover">
      <div className="w-full max-w-xs">
        <form
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="300"
          data-aos-offset="0"
          onSubmit={handleSubmit}
          className="mb-4 rounded-lg bg-white/50 bg-gradient-to-t from-slate-100 px-8 pb-8 pt-6 shadow-md shadow-black"
        >
          <h2 className="mb-6 text-center text-2xl font-bold">Login</h2>
          <div className="mb-4">
            <label
              className="mb-2 block text-sm font-bold text-gray-700"
              htmlFor="email"
            >
              Username
            </label>
            <input
              className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
              id="email"
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              className="mb-2 block text-sm font-bold text-gray-700"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
              id="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="flex items-center">
              <input
                className="mr-2 leading-tight"
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <span className="text-sm">Remember Me</span>
            </label>
          </div>
          <div className="flex w-full items-center justify-center">
            <button
              className="focus:shadow-outline w-36 rounded bg-primary px-4 py-2 font-bold text-white hover:bg-green-800 focus:outline-none"
              type="submit"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
