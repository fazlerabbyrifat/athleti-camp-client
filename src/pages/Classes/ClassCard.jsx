import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import useAdmin from "../../hooks/useAdmin";
import useInstructor from "../../hooks/useInstructor";
import { useLocation, useNavigate } from "react-router-dom";

const ClassCard = ({ allClass }) => {
  const { user } = useAuth();
  const {isAdmin} = useAdmin();
  const { isInstructor} = useInstructor();
  const navigate = useNavigate();
  const location = useLocation();
  const [isDisable, setIsDisable] = useState(false);

  const {_id, image, name, instructor, totalStudents, availableSeats, price} = allClass

  useEffect(() =>{
    if(isAdmin || isInstructor){
      setIsDisable(true);
    }
  }, [isAdmin,isInstructor])

  const handleSelect = (item) => {
  if (!user) {
    Swal.fire({
        title: 'Please Login',
        text: "You have to login first!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'login'
    }).then((result) => {
        if (result.isConfirmed) {
            navigate('/login', { state: { from: location } })
        }
    })
} else {
    const selectedItem = {
        name: user?.displayName || 'anonymous',
        email: user?.email || 'anonymous email',
        classId: _id,
        image,
        name,
        instructor,
        price,
        totalStudents,
        availableSeats
    }
    fetch('http://athleti-camp-server-fazlerabbyrifat.vercel.app/selectedClasses', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(selectedItem)
    })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if (data.message === "exists") {
            Swal.fire({
              position: 'top-end',
              icon: 'error',
              title: `Already added ${item.name}`,
              showConfirmButton: false,
              timer: 1500
            })
            }
            if (data.insertedId) {
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: `${item.name} is added. Please checkout!`,
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
        allClass.availableSeats === 0 ? "bg-red-500" : "bg-white"
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
          onClick={() => handleSelect(allClass)}
          disabled={allClass?.availableSeats === 0 || isDisable}
          className="btn btn-info mt-2"
        >
          Select
        </button>
      </div>
    </div>
  );
};

export default ClassCard;
