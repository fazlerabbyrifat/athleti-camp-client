import axios from "axios";
import React, { useEffect, useState } from "react";
import InstructorCard from "./InstructorCard";

const Instructors = () => {
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    axios
      .get("http://athleti-camp-server-fazlerabbyrifat.vercel.app/instructors")
      .then((res) => {
        setInstructors(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="mb-5">
      <h3 className="text-3xl lg:text-5xl font-bold uppercase text-center p-10">
        Our Instructors
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-10">
        {instructors?.map((instructor) => (
          <InstructorCard
            key={instructor._id}
            instructor={instructor}
          ></InstructorCard>
        ))}
      </div>
    </div>
  );
};

export default Instructors;
