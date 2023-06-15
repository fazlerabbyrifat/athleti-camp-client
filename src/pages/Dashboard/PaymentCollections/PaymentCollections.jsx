import React from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { BounceLoader } from 'react-spinners';
import { useQuery } from '@tanstack/react-query';

const PaymentCollections = () => {
    const [axiosSecure] = useAxiosSecure();

    const fetchEnrolledClasses = async() => {
        const res = await axiosSecure.get('/payment');
        return res.data;
    };

    const {data: payments = [],
        isLoading,
        error,
    } = useQuery(['payment'], fetchEnrolledClasses)

    if (isLoading) {
        return <BounceLoader color="#36d7b7" />;
      }
    
      if (error) {
        return <div>Error: {error.message}</div>;
      }
console.log(payments);
    return (
        <div className="overflow-x-auto">
      <h1 className="text-3xl lg:text-5xl font-bold uppercase text-center p-10">
        My Payments
      </h1>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>ClassId</th>
            <th>Payment Id</th>
            <th>Payment Amount</th>
          </tr>
        </thead>
        <tbody>
          {
            payments?.map((payment, index) => <tr key={payment._id}>
            <td>{index + 1}</td>
            <td>
              <div className="flex items-center space-x-3">
                <div>
                  <div className="font-bold">{payment?.classId}</div>
                </div>
              </div>
            </td>
            <td>{payment?.paymentMethodId}</td>
            <td>{payment?.paymentAmount}</td>
          </tr>)
          }
        </tbody>
      </table>
    </div>
    );
};

export default PaymentCollections;