import React from 'react'
import { Link } from 'react-router-dom';
import MainTemplet from '../templet/MainTemplet';

const ForgotPassword = () => {
  return (
    <>
      <div className="h-screen bg-slate-100 ">
        <div className="flex  border shadow-xl w-full max-w-5xl mx-auto">
          <div className="w-full flex flex-col md:flex-row rounded-xl ">
            <div className="w-full md:w-[50%] flex md:justify-center  ">
              <MainTemplet />
            </div>
            <div className=" w-full md:w-[50%]  py-24 px-10 bg-white">
              <div className="flex flex-col gap-y-4 ">
                <h2 className="text-2xl font-semibold mb-2 text-center">
                  Forgot Password
                </h2>
                <p className="text-center font-semibold">
                  We will send password reset link on your email Id
                </p>
                <form>
                  <div className="flex flex-col gap-5 mt-4">
                    <label className=" flex flex-col gap-1">
                      <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm md:text-md font-medium text-slate-700">
                        Email Id
                      </span>
                      <input
                        type="email"
                        name="email"
                        className=" w-full h-[3rem]  mt-1 px-3 py-4 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none block font-medium   focus:ring-gray-300  rounded-md sm:text-sm focus:ring-1 hover:border-2 "
                        placeholder="you@example.com"
                      />
                    </label>
                    <p className="text-center mt-5 text-red-500">
                      Email Id is required! (use any value)
                    </p>
                    <button className="border py-3 rounded-xl text-lg bg-blue-600 hover:bg-blue-800 text-gray-300">
                      Login
                    </button>
                    <p className="text-center ">
                      Don't have an account yet?{" "}
                      <Link
                        to={"/signup"}
                        className="hover:underline cursor-pointer hover:text-purple-900"
                      >
                        Register
                      </Link>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ForgotPassword
