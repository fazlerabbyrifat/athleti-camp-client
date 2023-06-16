import React from "react";
import useAuth from "../../../hooks/useAuth";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const AddClass = () => {
  const { user } = useAuth();
  const { register, handleSubmit, reset } = useForm();
  const [axiosSecure] = useAxiosSecure();

  const onSubmit = (data) => {
    const classData = {
      ...data,
      price: parseFloat(data.price),
      availableSeats: parseInt(data.availableSeats),
      email: user?.email,
      instructor: user?.displayName,
      totalStudents: 0,
      status: 'pending',
    };
    console.log(classData); 
    axiosSecure.post('/addClass', classData)
    .then(data => {
        if(data.data.insertedId) {
            reset();
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Class added successfully',
                showConfirmButton: false,
                timer: 1500
              })
        }
    })
    // reset();
  };

  return (
    <div className="my-10">
        <h1 className="text-3xl lg:text-5xl font-bold uppercase text-center p-10">
        Add A Class
      </h1>
        <div className="w-1/2 mx-auto">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label htmlFor="className" className="block font-medium mb-1">
            Class Name
          </label>
          <input
            type="text"
            id="name"
            {...register("name", { required: true })}
            className="w-full border-gray-300 border p-2 rounded"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="classImage" className="block font-medium mb-1">
            Class Image
          </label>
          <input
            type="text"
            id="image"
            {...register("image", { required: true })}
            className="w-full border-gray-300 border p-2 rounded"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="instructorName" className="block font-medium mb-1">
            Instructor Name
          </label>
          <input
            type="text"
            id="instructorName"
            value={user?.displayName}
            readOnly
            className="w-full border-gray-300 border p-2 rounded bg-gray-100"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="instructorEmail" className="block font-medium mb-1">
            Instructor Email
          </label>
          <input
            type="email"
            id="instructorEmail"
            value={user?.email}
            readOnly
            className="w-full border-gray-300 border p-2 rounded bg-gray-100"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="availableSeats" className="block font-medium mb-1">
            Available Seats
          </label>
          <input
            type="number"
            id="availableSeats"
            {...register("availableSeats", { required: true })}
            className="w-full border-gray-300 border p-2 rounded"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="price" className="block font-medium mb-1">
            Price
          </label>
          <input
            type="number"
            id="price"
            {...register("price", { required: true })}
            className="w-full border-gray-300 border p-2 rounded"
          />
        </div>

        <input className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded" type="submit" value="ADD" />
      </form>
    </div>
    </div>
  );
};

export default AddClass;
