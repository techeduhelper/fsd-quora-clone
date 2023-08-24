import React from "react";

const Login = () => {
  // const handleGoogleLogin = () => {
  //   window.open("http://localhost:8080/auth/google", " _self");
  // };
  // const handleGithubLogin = () => {
  //   window.open("http://localhost:8080/auth/github", " _self");
  // };

  return (
    <>
      <div className="login-container flex flex-col items-center justify-center h-[60vh] w-[80%]  laptop:w-[80%] mx-auto mt-32 bg-[#ffffff] mobile:w-[95%] rounded-sm gap-24">
        <div className="qoura-logo text-6xl font-extrabold text-[#cf4644] outline-2">
          Quora-Clone
        </div>
        <div>
          {/* <div className="qoura-login-option text-lg"> */}
          {/* <button
              className="px-4 py-2 bg-slate-300 rounded-sm hover:bg-gray-400 shadow-sm flex justify-center items-center gap-2"
              onClick={handleGoogleLogin}
            >
              <FcGoogle />
              Login with Google
            </button>
            <button
              className="w-full mt-4 px-4 py-2 bg-slate-300 rounded-sm hover:bg-gray-400 shadow-sm flex justify-center items-center gap-2"
              onClick={handleGithubLogin}
            >
              Login with Github
            </button>
          </div> */}
          <div></div>
        </div>
      </div>
    </>
  );
};

export default Login;
