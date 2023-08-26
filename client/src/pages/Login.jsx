import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useAuth } from "../context/auth";

const Login = () => {
  // register input value
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobno, setMobno] = useState("");
  const [password, setPassword] = useState("");
  const [photo, setPhoto] = useState(null);
  const [loading, setLoading] = useState(false);
  // login input value
  const [lemail, setLemail] = useState("");
  const [lpassword, setLpassword] = useState("");
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();

  // get URl from Photo
  const handlePhoto = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => setPhoto(e.target.result);
    reader.readAsDataURL(file);
  };

  // For Register || POST Method
  const resgisterUser = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await axios.post("/quora/v1/auth/register", {
        name,
        email,
        mobno,
        password,
        photo,
      });
      if (res && res.data.success) {
        setLoading(false);
        toast.success(res.data && res.data.message);
        setPhoto([]);
        setEmail("");
        setPassword("");
        setName("");
        setMobno("");
        setTimeout(() => {
          navigate("/");
        }, 500);
      } else {
        toast.error(res.data && res.data.message);
      }
    } catch (error) {
      toast.error();
    }
  };

  // For login || POST Method
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
      <div className="login-container flex flex-col items-center laptop:h-[70vh] mobile:h-full w-auto  mx-auto laptop:mt-32 mobile:mt-o bg-[#ffffff] laptop:w-[80%] mobile:w-full rounded-sm">
        <div className="qoura-logo text-4xl font-extrabold text-[#cf4644] outline-2 mt-5 underline">
          Quora-Clone
        </div>
        <div className="flex justify-center w-full mt-10 px-5 laptop:flex-row mobile:flex-col ">
          <div className="register-container w-full px-4 text-center">
            <span className="text-[2rem] font-semibold underline">
              Register Here
            </span>
            <form className="flex flex-col gap-4 mt-5" onSubmit={resgisterUser}>
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
              <label
                className="text-md bg-stone-200 hover:bg-stone-300 py-2 text-center rounded-md"
                htmlFor="fileUpload"
              >
                <input type="file" onChange={handlePhoto} />
                Upload Profile Photo
              </label>
              <button
                type="submit"
                className="bg-[#cf4644] border rounded-md p-2 text-white"
              >
                {loading ? "Please wait.." : "Register"}
              </button>
            </form>
          </div>
          <div className="login-container w-full px-4 mobile:mt-8 text-center">
            <span className="text-[2rem] font-semibold underline">
              Login Here
            </span>
            <form className="flex flex-col gap-5 mt-5" onSubmit={loginHandler}>
              <input
                className="w-auto border border-gray-200 rounded-md p-2"
                type="email"
                name="lemail"
                id="lemail"
                required
                placeholder="username"
                value={lemail}
                onChange={(e) => setLemail(e.target.value)}
              />
              <input
                className="w-auto border border-gray-200 rounded-md p-2"
                type="password"
                name="lpassword"
                id="lpassword"
                required
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
