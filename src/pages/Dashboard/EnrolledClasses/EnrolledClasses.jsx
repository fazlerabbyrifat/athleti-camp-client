import React from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { async } from "@firebase/util";
import { useQuery } from "@tanstack/react-query";
import { BounceLoader } from 'react-spinners';

const EnrolledClasses = () => {
    const [axiosSecure] = useAxiosSecure();

    const fetchEnrolledClasses = async() => {
        const res = await axiosSecure.get('/enrolledClasses');
        return res.data;
    };

    const {data: enrolledClasses = [],
        isLoading,
        error,
    } = useQuery(['enrolledClasses'], fetchEnrolledClasses)

    if (isLoading) {
        return <BounceLoader color="#36d7b7" />;
      }
    
      if (error) {
        return <div>Error: {error.message}</div>;
      }
      console.log(enrolledClasses)

  return (
    <div className="overflow-x-auto">
      <h1 className="text-3xl lg:text-5xl font-bold uppercase text-center p-10">
        My Enrolled Classes
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
          </tr>
        </thead>
        <tbody>
          {
            enrolledClasses?.map((enrolledClass, index) => <tr key={enrolledClass._id}>
            <td>{index + 1}</td>
            <td>
              <div className="flex items-center space-x-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img
                      src={enrolledClass?.image}
                      alt=""
                    />
                  </div>
                </div>
                <div>
                  <div className="font-bold">{enrolledClass?.className}</div>
                </div>
              </div>
            </td>
            <td>{enrolledClass?.instructor}</td>
            <td>{enrolledClass?.totalStudents}</td>
            <td>{enrolledClass?.remainingSeats}</td>
            <td>${enrolledClass?.price}</td>
          </tr>)
          }
        </tbody>
      </table>
    </div>
  );
};

export default EnrolledClasses;
