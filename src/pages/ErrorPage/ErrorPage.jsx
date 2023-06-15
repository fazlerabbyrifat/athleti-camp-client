import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="mx-auto w-2/3 text-center">
      <h1 className="text-3xl mb-3 font-bold">Oops! Something went wrong.</h1>
      <img
        className="w-full h-[650px]"
        src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-1920.jpg?w=740&t=st=1686870083~exp=1686870683~hmac=8596a0ed29b77f1693556c9a8a498b6d380d8cf65ed9b034be464bc734a0d787"
        alt="Error"
      />
      <p className="text-xl font-semibold">
        Sorry, the page you're looking for does not exist.
      </p>
      <Link>
        <button className="btn btn-primary btn-outline mt-5">Return to Home</button>
      </Link>
    </div>
  );
};

export default ErrorPage;
