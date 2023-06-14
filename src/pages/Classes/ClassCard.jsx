import React from "react";
import useAuth from "../../hooks/useAuth";

const ClassCard = ({allClass}) => {
    const { user } = useAuth()
    console.log(user)
  return (
    <div className="class-card bg-white p-4 rounded shadow grid-item">
      <img
        src={allClass.image}
        alt={allClass.name}
        className="mb-2 rounded p-4"
      />
      <div className="mt-5 p-4">
        <h3 className="text-xl font-bold">{allClass.name}</h3>
        <p className="text-lg font-semibold">
          Instructor: {allClass.instructor}
        </p>
        <p>Total Students: {allClass.totalStudents}</p>
        <p>Price: ${allClass.price}</p>
      </div>
    </div>
  );
};

export default ClassCard;
