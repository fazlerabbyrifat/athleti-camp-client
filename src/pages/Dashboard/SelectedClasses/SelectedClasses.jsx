import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { BounceLoader } from "react-spinners";
import SelectedClassesRow from "./SelectedClassesRow";
import Swal from "sweetalert2";
import axios from "axios";

const SelectedClasses = () => {
  const [selectedClasses, setSelectedClasses] = useState([]);

  useEffect(() => {
    fetch("https://athleti-camp-server.vercel.app/selectedClasses").then(res => res.json()).then(data =>setSelectedClasses(data))
  }, [])

  // const fetchSelectedClasses = async () => {
  //   const res = await axiosSecure.get("/selectedClasses");
  //   return res.data;
  // };

  // const {
  //   data: selectedClasses = [],
  //   isLoading,
  //   error,
  //   refetch,
  // } = useQuery(["selectedClasses"], fetchSelectedClasses);

  // if (isLoading) {
  //   return <BounceLoader color="#36d7b7" />;
  // }

  // if (error) {
  //   return <div>Error: {error.message}</div>;
  // }

  const handleClassDelete = (selectedClass) => {
    console.log(selectedClass._id)
    Swal.fire({
      title: "Confirm Delete",
      text: "Are you sure you want to delete this class?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Delete",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`https://athleti-camp-server.vercel.app/selectedClasses/${selectedClass._id}`)
          .then((res) => {
            console.log(res.data)
            if (res.data.deletedCount > 0) {
              Swal.fire(
                "Deleted!",
                "The class has been successfully deleted.",
                "success"
              );
            }
          });
      }
    });
  };

  return (
    <div className="overflow-x-auto">
      <h1 className="text-3xl lg:text-5xl font-bold uppercase text-center p-10">
        My Selected Classes: {selectedClasses.length}
      </h1>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Class</th>
            <th>Instructor</th>
            <th>Total Students</th>
            <th>Available Seats</th>
            <th>Price</th>
            <th>Action</th>
            <th>ACtion</th>
          </tr>
        </thead>
        <tbody>
          {selectedClasses?.map((selectedClass, index) => (
            <SelectedClassesRow
              key={selectedClass._id}
              selectedClass={selectedClass}
              index={index}
              handleClassDelete={handleClassDelete}
            ></SelectedClassesRow>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SelectedClasses;
