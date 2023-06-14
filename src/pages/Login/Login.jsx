import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import useAuth from "./../../hooks/useAuth";
import Swal from "sweetalert2";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";

const Login = () => {
  const { register, handleSubmit, reset } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const { login } = useAuth();
  const onSubmit = (data) => {
    login(data.email, data.password)
      .then((result) => {
        const user = result.user;
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${user.displayName} successfully logged in.`,
          showConfirmButton: false,
          timer: 1500,
        });
        reset();
      })
      .catch((err) => {
        console.error(err.message);
      });
  };

  const containerVariants = {
    hidden: {
      opacity: 0,
      y: -100,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
        delay: 0.2,
      },
    },
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <motion.div
        className="w-96 px-8 py-10 bg-white rounded-lg shadow-lg"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <h2 className="text-2xl font-bold mb-6">Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-6">
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring focus:border-blue-500"
              {...register("email", { required: true })}
            />
          </div>
          <div className="relative mb-6">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring focus:border-blue-500"
              {...register("password", { required: true })}
            />
            <span
              className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <FaEyeSlash className="w-5 h-5 text-gray-400" />
              ) : (
                <FaEye className="w-5 h-5 text-gray-400" />
              )}
            </span>
          </div>
          <input
            className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            type="submit"
            value="Login"
          />
        </form>
        <p className="mt-4 text-center">
          Don't have an account?{" "}
          <Link to="/register" className="text-blue-500 hover:text-blue-800">
            Please Register
          </Link>
        </p>
        <SocialLogin></SocialLogin>
      </motion.div>
    </div>
  );
};

export default Login;
