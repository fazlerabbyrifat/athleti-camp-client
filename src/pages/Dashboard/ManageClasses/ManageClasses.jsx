import React, { useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { BounceLoader } from "react-spinners";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";

const ManageClasses = () => {
  const [axiosSecure] = useAxiosSecure();
  const [feedbackModalOpen, setFeedbackModalOpen] = useState(false);
  const [selectedClass, setSelectedClass] = useState(null);
  const [feedback, setFeedback] = useState("");

  const fetchAllClasses = async () => {
    const res = await axiosSecure.get("/manageClasses");
    return res.data;
  };

  const {
    data: allClasses = [],
    isLoading,
    error,
    refetch,
  } = useQuery(["allClasses"], fetchAllClasses);

  if (isLoading) {
    return <BounceLoader color="#36d7b7" />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const handleApprove = (allClass) => {
    axiosSecure
      .put(`/manageClasses/${allClass._id}/role`, { status: "approved" })
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${allClass.name} is approved`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  const handleDeny = (allClass) => {
    axiosSecure
      .put(`/manageClasses/${allClass._id}/role`, { status: "denied" })
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${allClass.name} is denied`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  const handleSendFeedback = (classId) => {
    setFeedbackModalOpen(true);

    setSelectedClass(classId);
  };

  const handleCloseModal = () => {
    setFeedbackModalOpen(false);
    setSelectedClass(null);
    setFeedback("");
  };

  const handleFeedbackChange = (event) => {
    setFeedback(event.target.value);
  };

  const handleSendFeedbackSubmit = () => {
    handleCloseModal();
    setSelectedClass(null);
    setFeedback("");
  };

  return (
    <div className="overflow-x-auto">
      <h1 className="text-3xl lg:text-5xl font-bold uppercase text-center p-10">
        All Classes
      </h1>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Class Image</th>
            <th>Name</th>
            <th>Instructor</th>
            <th>Email</th>
            <th>Available Seats</th>
            <th>Price</th>
            <th>Status</th>
            <th>Action</th>
            <th>Action</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {allClasses?.map((allClass, index) => (
            <tr key={allClass._id}>
              <td>{index + 1}</td>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={allClass?.image} alt="" />
                    </div>
                  </div>
                </div>
              </td>
              <td>{allClass?.name}</td>
              <td>{allClass?.instructor}</td>
              <td>{allClass?.email}</td>
              <td>{allClass?.availableSeats}</td>
              <td>${allClass?.price}</td>
              <td>{allClass?.status}</td>
              <td>
                <button
                  className="btn btn-primary btn-sm"
                  onClick={() => handleApprove(allClass)}
                  disabled={
                    allClass?.status === "approved" ||
                    allClass?.status === "denied"
                  }
                >
                  Approve
                </button>
              </td>
              <td>
                <button
                  className="btn btn-error btn-sm"
                  onClick={() => handleDeny(allClass)}
                  disabled={
                    allClass?.status === "approved" ||
                    allClass?.status === "denied"
                  }
                >
                  Deny
                </button>
              </td>
              <td>
                <button
                  className="btn btn-warning btn-sm"
                  onClick={() => handleSendFeedback(allClass._id)}
                >
                  Send Feedback
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Feedback Modal */}
      {feedbackModalOpen && selectedClass && (
        <div className="modal">
          <div className="modal-content">
            <h2>Send Feedback</h2>
            <textarea
              className="feedback-input"
              value={feedback}
              onChange={handleFeedbackChange}
              placeholder="Enter your feedback here"
            />
            <div className="modal-actions">
              <button className="btn" onClick={handleCloseModal}>
                Cancel
              </button>
              <button
                className="btn btn-primary"
                onClick={handleSendFeedbackSubmit}
              >
                Send Feedback
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageClasses;
