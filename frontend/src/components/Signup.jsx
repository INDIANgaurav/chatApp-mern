import { useState } from "react";
import { Link , useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const Signup = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    fullName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });
  const handleCheckbox = (gender) => {
    setUser({ ...user, gender });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:8080/api/v1/user/register",
        user,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      if (res.data.success) {
        toast.success(res.data.message);
      }
      navigate("/login");
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error);
    }
    setUser({
      fullName: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      gender: "",
    });
  };

  return (
    <div className="min-w-96 m-auto">
      <div className="h-full w-full p-6 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100 ">
        <h1 className="text-3xl font-bold text-center text-gray-300 ">
          Signup
        </h1>
        <form onSubmit={submitHandler}>
          <div>
            <label className="label p-2">
              <span className="text-base label-text ">Fullname</span>
            </label>
            <input
              value={user.fullName}
              onChange={(e) => setUser({ ...user, fullName: e.target.value })}
              className="w-full input input-bordered h-10"
              type="text"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text ">Username</span>
            </label>
            <input
              value={user.username}
              onChange={(e) => setUser({ ...user, username: e.target.value })}
              className="w-full input input-bordered h-10"
              type="text"
              placeholder="Enter your Username"
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text ">Email</span>
            </label>
            <input
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              className="w-full input input-bordered h-10"
              type="email"
              placeholder="Enter your Username"
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text ">Password</span>
            </label>
            <input
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              className="w-full input input-bordered h-10"
              type="password"
              placeholder="Enter your Password"
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text ">Confirm Password</span>
            </label>
            <input
              value={user.confirmPassword}
              onChange={(e) =>
                setUser({ ...user, confirmPassword: e.target.value })
              }
              className="w-full input input-bordered h-10"
              type="password"
              placeholder="Enter your Confirm password"
            />
          </div>
          <div className="flex items-center my-4">
            <p>Male</p>
            <input
              checked={user.gender === "male"}
              onChange={() => handleCheckbox("male")}
              type="checkbox"
              defaultChecked
              className="checkbox mx-2"
            />

            <p>Female</p>
            <input
              checked={user.gender === "female"}
              onChange={() => handleCheckbox("female")}
              type="checkbox"
              defaultChecked
              className="checkbox mx-2"
            />
          </div>

          <p className="text-center my-3">
            Already registered ?{" "}
            <Link to="/login" className=" text-blue-500 font-bold">
              Login
            </Link>
          </p>

          <div>
            <button
              type="submit"
              className="btn btn-block btn-sm mt-2 border border-slate-700"
            >
              Signup
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
