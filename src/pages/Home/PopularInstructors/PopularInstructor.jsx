import axios from "axios";
import React, { useEffect, useState } from "react";
import ImageCard from "./ImageCard";

const PopularInstructor = () => {
  const [popularInstructors, setPopularInstructors] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/popular-instructors")
      .then((res) => {
        setPopularInstructors(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="my-10">
      <div>
        <h3 className="text-3xl lg:text-5xl font-bold uppercase text-center">
          Our Best Instructors
        </h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-10">
        {popularInstructors.map((popularInstructor) => (
          <div
            key={popularInstructor._id}
            className="class-card bg-white p-4 rounded shadow grid-item"
          >
            <ImageCard imageURL={popularInstructor.image} />
            <div className="mt-5 p-4">
              <h3 className="text-xl font-bold">{popularInstructor.name}</h3>
              <p>Total Classes taken: {popularInstructor.total_classes}</p>
              <p>Total Students: {popularInstructor.total_students}</p>
              <p className="">
                Contact: {popularInstructor.email}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularInstructor;
