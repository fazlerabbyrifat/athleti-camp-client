import React from "react";
import { FaTrashAlt, FaWallet } from "react-icons/fa";
import { Link } from "react-router-dom";

const SelectedClassesRow = ({selectedClass, index, handleClassDelete}) => {
    const classData = {
        price: selectedClass.price,
        id: selectedClass._id
    }

  return (
    <tr>
      <td>{index + 1}</td>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img
                src={selectedClass?.image}
                alt=""
              />
            </div>
          </div>
          <div>
            <div className="font-bold">{selectedClass?.name}</div>
          </div>
        </div>
      </td>
      <td>{selectedClass?.instructor}</td>
      <td>{selectedClass?.totalStudents}</td>
      <td>{selectedClass?.availableSeats}</td>
      <td>${selectedClass?.price}</td>
      <td>
        <button onClick={() => handleClassDelete(selectedClass)} className="btn btn-error btn-sm">
          <FaTrashAlt></FaTrashAlt>
        </button>
      </td>
      <td>
        <Link to={`/dashboard/payment/${selectedClass._id}`} state={classData}>
          <button className="btn btn-primary btn-sm">
            <FaWallet></FaWallet>
          </button>
        </Link>
      </td>
    </tr>
  );
};

export default SelectedClassesRow;
