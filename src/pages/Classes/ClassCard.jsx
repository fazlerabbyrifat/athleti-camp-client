import React, { useState } from "react";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAdmin from "../../hooks/useAdmin";

const ClassCard = ({ allClass }) => {
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const isAvailable = allClass?.availableSeats > 0;
  const isAdmin = useAdmin();

  const selectButtonDisabled = !isAvailable || isAdmin ;

  const handleSelect = () => {
    if (!user) {
      Swal.fire({
        position: "top-end",
        icon: "warning",
        title: "You need to login first",
        showConfirmButton: false,
        timer: 1500,
      });
    }
    else{
        const { _id, image, name, instructor, totalStudents, availableSeats, price } = allClass
        const newClass = {_id, name, image, instructor, totalStudents, availableSeats, price}
        axiosSecure.post('/selectedClasses', newClass)
        .then(data => {
            if(data.data.insertedId) {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${name} added successfully`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }
  };

  return (
    <div
      className={`class-card p-4 rounded shadow grid-item ${
        !isAvailable ? "bg-red-500" : "bg-white"
      }`}
    >
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
        <p>Available Seats: {allClass.availableSeats}</p>
        <p>Price: ${allClass.price}</p>
        <button
          onClick={handleSelect}
          disabled={selectButtonDisabled}
          className="btn btn-info mt-2"
        >
          Select
        </button>
      </div>
    </div>
  );
};

export default ClassCard;
