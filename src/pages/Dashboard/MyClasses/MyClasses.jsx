import React from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { BounceLoader } from "react-spinners";

const MyClasses = () => {
  const [axiosSecure] = useAxiosSecure();

  const fetchClasses = async () => {
    const res = await axiosSecure.get("/myClasses");
    return res.data;
  };

  const {
    data: myClasses = [],
    isLoading,
    error
  } = useQuery(["myClasses"], fetchClasses);

  if (isLoading) {
    return <BounceLoader color="#36d7b7" />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  
  return (
    <div className="overflow-x-auto">
      <h1 className="text-3xl lg:text-5xl font-bold uppercase text-center p-10">
        My Classes
      </h1>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Class Image</th>
            <th>Name</th>
            <th>Enrolled Students</th>
            <th>Price</th>
            <th>Status</th>
            <th>Feedback</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {myClasses?.map((myClass, index) => (
            <tr key={myClass._id}>
              <td>{index + 1}</td>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={myClass?.image} alt="" />
                    </div>
                  </div>
                </div>
              </td>
              <td>{myClass?.name}</td>
              <td>{myClass?.totalStudents}</td>
              <td>{myClass?.price}</td>
              <td>{myClass?.status}</td>
              <td>{myClass?.feedback}</td>
              <td>
                <button className="btn btn-accent btn-sm">Update</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyClasses;
