import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { HiEyeOff, HiEye } from "react-icons/hi";

const Login = () => {
  
  const navigate = useNavigate()

  const [isHiddenPassword, setIsHiddenPassword] = useState(false);

  const handdleHP = () =>{
    setIsHiddenPassword(!isHiddenPassword);
  }

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-neutral-800">
        <div className="w-full md:max-w-2xl p-4 custom-sm bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-neutral-900 dark:border-neutral-700">
          <form className="space-y-4" action="#">
            <h5 className="text-xl font-medium text-center dark:text-white">Login</h5>
            <div>
              <label
                for="input-label"
                className="block text-sm font-medium mb-3 dark:text-white"
              >
                Email
              </label>
              <input
                type="email"
                id="input-label"
                className="py-3 px-4 block w-full border-gray-300 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:placeholder-neutral-500 dark:focus:ring-neutral-600 dark:text-white"
                placeholder="you@site.com"
              />
            </div>
            <div>
              <label class="block text-sm mb-3 dark:text-white font-medium">
                Password
              </label>
              <div class="relative">
                <input
                 type= {isHiddenPassword ? "text" : "password"}
                 className="py-3 px-4 block w-full border-gray-300 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:placeholder-neutral-500 dark:focus:ring-neutral-600 dark:text-white"
                 placeholder="••••••••"
                />
                <button
                  type="button"
                  class="absolute top-0 end-0 p-3.5 rounded-e-md"
                  onClick={() => handdleHP()}
                >
                  {isHiddenPassword ? <HiEye className="dark:text-neutral-400"/> : <HiEyeOff className="dark:text-neutral-400"/>}
                </button>
              </div>
            </div>
            <button
              onClick={() => navigate('/dashboard')}
              type="button"
              class="py-3 px-4 w-full justify-center inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
