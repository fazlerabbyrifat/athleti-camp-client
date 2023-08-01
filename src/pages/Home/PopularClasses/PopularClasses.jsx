import React, { useEffect, useState } from "react";
import axios from "axios";
import anime from "animejs";

const PopularClasses = () => {
  const [popularClasses, setPopularClasses] = useState([]);

  useEffect(() => {
    axios
      .get("https://athleti-camp-server.vercel.app/popular-classes")
      .then((res) => {
        setPopularClasses(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    anime({
      targets: ".grid-item",
      scale: [
        { value: 0.7, easing: "easeInOutBack", duration: 1500 },
        { value: 1, easing: "easeInOutBack", duration: 3000 },
      ],
      delay: anime.stagger(2000, { grid: [3, 2], from: "center" }),
      loop: true,
    });
  }, [popularClasses]);

  return (
    <div className="my-10">
      <div>
        <h3 className="text-3xl lg:text-5xl font-bold uppercase text-center">
          Our Trending Classes
        </h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-10">
        {popularClasses.map((popularClass) => (
          <div
            key={popularClass._id}
            className="class-card bg-white p-4 rounded shadow grid-item"
          >
            <img
              src={popularClass.image}
              alt={popularClass.name}
              className="mb-2 rounded p-4"
            />
            <div className="mt-5 p-4">
              <h3 className="text-xl font-bold">{popularClass.name}</h3>
              <p className="text-lg font-semibold">
                Instructor: {popularClass.instructor}
              </p>
              <p>Total Students: {popularClass.totalStudents}</p>
              <p>Price: ${popularClass.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularClasses;
