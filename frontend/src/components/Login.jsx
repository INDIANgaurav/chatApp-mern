import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(user)
    setUser({
      username: "",
      password: "",
    });
  };
  return (
    <div className="min-w-96 m-auto">
      <div className="h-full w-full p-6 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100 ">
        <h1 className="text-3xl font-bold text-center text-gray-300 ">Login</h1>
        <form action="" onSubmit={submitHandler}  >
          <div>
            <label className="label p-2">
              <span className="text-base label-text ">Username</span>
            </label>
            <input
            value={user.username}
            onChange={(e) => setUser({...user, username: e.target.value })}
              className="w-full input input-bordered h-10"
              type="text"
              placeholder="Enter your Username"
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text ">Password</span>
            </label>
            <input
               value={user.password}
               onChange={(e) => setUser({...user, password: e.target.value })}
              className="w-full input input-bordered h-10"
              type="password"
              placeholder="Enter your Password"
            />
          </div>

          <p className="text-center my-3">
            Not Registered ?{" "}
            <Link to="/register" className=" text-blue-500 font-bold">
              Signup
            </Link>
          </p>

          <div>
            <button type="submit" className="btn btn-block btn-sm mt-2 border border-slate-700">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
