import React from "react";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

const ClassCard = ({allClass}) => {
    const { user } = useAuth()
    const isAvailable = allClass?.availableSeats > 0;

    const handleSelect = () => {
        if (!user){
            Swal.fire({
                position: 'top-end',
                icon: 'warning',
                title: 'You need to login first',
                showConfirmButton: false,
                timer: 1500
              })
        }
    }

  return (
    <div className={`class-card p-4 rounded shadow grid-item ${
        !isAvailable ? "bg-red-500" : "bg-white"
      }`}>
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
        <button onClick={handleSelect} className="btn btn-info mt-2">Select</button>
      </div>
    </div>
  );
};

export default ClassCard;
