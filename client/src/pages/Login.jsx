import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useAuth } from "../context/auth";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobno, setMobno] = useState("");
  const [password, setPassword] = useState("");
  const [lemail, setLemail] = useState("");
  const [lpassword, setLpassword] = useState("");
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();
  const resgisterUser = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/quora/v1/auth/register", {
        name,
        email,
        mobno,
        password,
      });
      if (res && res.data.success) {
        toast.success("Registered Successfully");
        setEmail("");
        setPassword("");
        setName("");
        setMobno("");
        setTimeout(() => {
          navigate("/");
        }, 500);
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      toast.error(error);
    }
  };

  const loginHandler = async (e) => {
    e.preventDefault();
    const res = await axios.post("/quora/v1/auth/login", {
      email: lemail,
      password: lpassword,
    });
    if (res && res.data.success) {
      setAuth({
        ...auth,
        user: res.data.user,
        token: res.data.token,
      });
      toast.success(res.data.message);
      localStorage.setItem("auth", JSON.stringify(res.data));
      navigate(location.state || "/");
      setTimeout(() => {
        navigate("/home");
      }, 500);
    } else {
      toast.error(res.data.message);
    }
  };

  return (
    <>
      <div className="login-container flex flex-col items-center laptop:h-[60vh] mobile:h-screen w-auto  mx-auto laptop:mt-32 mobile:mt-o bg-[#ffffff] laptop:w-[80%] mobile:w-full rounded-sm">
        <div className="qoura-logo text-6xl font-extrabold text-[#cf4644] outline-2 mt-5 underline">
          Quora-Clone
        </div>
        <div className="flex justify-center w-full mt-10 px-5 laptop:flex-row mobile:flex-col ">
          <div className="register-container w-full px-4">
            <form className="flex flex-col gap-4" onSubmit={resgisterUser}>
              <input
                className="w-auto border border-gray-200 rounded-md p-2"
                type="text"
                name="name"
                id="name"
                required
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                className="w-auto border border-gray-200 rounded-md p-2"
                type="number"
                name="mobileno"
                id="mobileno"
                required
                placeholder="Enter your mobile no"
                value={mobno}
                onChange={(e) => setMobno(e.target.value)}
              />
              <input
                className="w-auto border border-gray-200 rounded-md p-2"
                type="email"
                name="email"
                id="email"
                required
                placeholder="Enter your email id"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                className="w-auto border border-gray-200 rounded-md p-2"
                type="password"
                name="password"
                id="password"
                required
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <button
                type="submit"
                className="bg-[#cf4644] border rounded-md p-2 text-white"
              >
                Register
              </button>
            </form>
          </div>
          <div className="login-container w-full px-4 mobile:mt-8">
            <form className="flex flex-col gap-5" onSubmit={loginHandler}>
              <input
                className="w-auto border border-gray-200 rounded-md p-2"
                type="email"
                name="lemail"
                id="lemail"
                placeholder="username"
                value={lemail}
                onChange={(e) => setLemail(e.target.value)}
              />
              <input
                className="w-auto border border-gray-200 rounded-md p-2"
                type="password"
                name="lpassword"
                id="lpassword"
                placeholder="password"
                value={lpassword}
                onChange={(e) => setLpassword(e.target.value)}
              />

              <button
                type="submit"
                className="bg-[#cf4644] border rounded-md p-2 text-white"
              >
                LogIn
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
