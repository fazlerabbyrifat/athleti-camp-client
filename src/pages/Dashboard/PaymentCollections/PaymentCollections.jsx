import React from 'react';
import usePaymentHistory from '../../../hooks/usePaymentHistory';

const PaymentCollections = () => {
   const {payments} = usePaymentHistory(); 

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