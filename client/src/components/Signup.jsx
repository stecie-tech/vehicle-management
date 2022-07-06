import React from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../../../server/src/services/auth.service";

export default function Signup() {
  const navigate = useNavigate();
  const [values, setValues] = React.useState({
    email: "",
    password: "",
    names: "",
    phone: "",
    nationalId: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const user = await register(values);

    if (user.data) {
      toast.success("User created successfully", { duration: 3000 });
      setValues({
        email: "",
        password: "",
        names: "",
        phone: "",
        nationalId: "",
      });

      navigate("/");
    } else {
      toast.error(user.message);
    }
  }
  return (
    <div className="">
      <div className="w-full overflow-hidden rounded-3xl bg-white ">
        <div className="w-full md:flex">
          <div className="hidden w-1/2 h-screen items-center justify-center bg-lightblue py-10 px-10 md:flex md:flex-col md:gap-[33px]">
            <img src="/img/logo.png" alt="rra logo" srcset="" />
            <p className="text-primary font-bold tex-base">
              Welcome to <br />
              Vehicle management system
            </p>
          </div>
          <div className="w-full py-10 px-5  md:flex md:justify-center md:items-center  md:px-10">
            <form className="md:ml-[50px]" onSubmit={handleSubmit}>
              <div className="mb-10 flex flex-col gap-4">
                <h1 className="text-3xl font-bold text-gray-900">Sign up</h1>
                <p className="flex gap-1 text-base">
                  <span className="text-[#ADB5BD] font-semibold">
                    {" "}
                    Already have an account?
                  </span>{" "}
                  <Link className="text-primary font-semibold" to="/">
                    Login
                  </Link>
                </p>
              </div>

              <div className="-mx-3 flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="names"
                    className="block text-sm font-semibold text-gray-900"
                  >
                    Full names
                  </label>
                  <input
                    onChange={handleChange}
                    name="names"
                    placeholder="John Doe"
                    required
                    className=" rounded-2xl border border-[#DEE2E6]  text-gray-900 sm:text-sm outline-none focus:ring-blue-500 block w-[346px] p-2.5"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-gray-900"
                  >
                    Email address
                  </label>
                  <input
                    onChange={handleChange}
                    name="email"
                    placeholder="john@gmail.com"
                    className=" rounded-2xl border border-gray-300 text-gray-900 sm:text-sm outline-none focus:ring-blue-500 block w-[346px] p-2.5"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold text-gray-900"
                  >
                    Phone number
                  </label>
                  <input
                    onChange={handleChange}
                    type="tel"
                    name="phone"
                    id="phone"
                    placeholder="0786939074"
                    required
                    className=" rounded-2xl border border-gray-300 text-gray-900 sm:text-sm outline-none focus:ring-blue-500 block w-[346px] p-2.5"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="nationa_id"
                    className="block text-sm font-semibold text-gray-900"
                  >
                    National Id
                  </label>
                  <input
                    onChange={handleChange}
                    // required
                    name="nationalId"
                    placeholder="1200370145959068"
                    className=" rounded-2xl border border-gray-300 text-gray-900 sm:text-sm outline-none focus:ring-blue-500 block w-[346px] p-2.5"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold text-gray-900"
                  >
                    Password
                  </label>
                  <input
                    onChange={handleChange}
                    required
                    name="password"
                    id="password"
                    type="password"
                    placeholder="Enter password"
                    className=" rounded-2xl border border-gray-300 text-gray-900 sm:text-sm outline-none focus:ring-blue-500 block w-[346px] p-2.5"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="font-semibold rounded-2xl flex justify-center items-center mb-20 mt-4 w-full text-white bg-primary p-3 "
              >
                SignUp
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
