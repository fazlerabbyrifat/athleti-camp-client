import React from "react";

const NewsLetter = () => {
  return (
    <div className="flex justify-between items-center p-10 h-52 mx-20 my-10" style={{ background: "linear-gradient(to right, #f9a825, #f57f17)" }}>
      <div>
        <h2 className="text-5xl font-bold">Subscribe to Our Newsletter</h2>
        <p className="text-2xl font-semibold">Get updates to news and events</p>
      </div>
      <div className="join">
        <input className="input input-bordered join-item" placeholder="Email" />
        <button className="btn join-item rounded-r-full">Subscribe</button>
      </div>
    </div>
  );
};

export default NewsLetter;
