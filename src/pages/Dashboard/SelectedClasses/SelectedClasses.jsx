import React from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import SelectedClassesRow from "./SelectedClassesRow";
import Swal from "sweetalert2";
import useSelected from "../../../hooks/useSelected";
import { Link } from "react-router-dom";

const SelectedClasses = () => {
  const { selectedClasses, refetch } = useSelected()
    const [axiosSecure] = useAxiosSecure()

  const handleClassDelete = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
      if (result.isConfirmed) {

          axiosSecure.delete(`/selectedClasses/${id}`)
              .then(data => {
                  if (data.data.deletedCount > 0) {
                      Swal.fire(
                          'Deleted!',
                          'Your file has been deleted.',
                          'success'
                      )
                      refetch()
                  }
              })
      }
  })
  };

  if (selectedClasses.length === 0) {
    return <>
        <div className='flex items-center justify-center h-[90vh]'>
            <div>
                <h2 className="text-xl text-center text-green-400">Please Select a class!</h2>
                <Link to='/classes'>
                    <button className="btn">
                        Go To Classes
                    </button>
                </Link>
            </div>
        </div>
    </>
}

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
