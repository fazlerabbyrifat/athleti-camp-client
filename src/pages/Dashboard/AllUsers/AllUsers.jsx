import React from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { BounceLoader } from "react-spinners";
import Swal from "sweetalert2";

const AllUsers = () => {
  const [axiosSecure] = useAxiosSecure();

  const fetchUsers = async () => {
    const res = await axiosSecure.get("/users");
    return res.data;
  };

  const {
    data: users = [],
    isLoading,
    error,
    refetch,
  } = useQuery(["users"], fetchUsers);

  if (isLoading) {
    return <BounceLoader color="#36d7b7" />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const handleCreateAdmin = (user) => {
    axiosSecure.patch(`users/admin/${user._id}`).then((res) => {
      if (res.data.modifiedCount > 0) {
        refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${user.name} is an admin`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  

  return (
    <div className="overflow-x-auto">
      <h1 className="text-3xl lg:text-5xl font-bold uppercase text-center p-10">
        All Users
      </h1>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>User Image</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user, index) => (
            <tr key={user._id}>
              <td>{index + 1}</td>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={user?.image} alt="" />
                    </div>
                  </div>
                </div>
              </td>
              <td>{user?.name}</td>
              <td>{user?.email}</td>
              <td>
                <button
                  className="btn btn-secondary btn-sm"
                >
                  Make Instructor
                </button>
              </td>
              <td>
                <button
                  onClick={() => handleCreateAdmin(user)}
                  className="btn btn-accent btn-sm"
                >
                  Make Admin
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllUsers;
