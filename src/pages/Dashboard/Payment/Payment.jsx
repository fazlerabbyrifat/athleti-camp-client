import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";
import Swal from "sweetalert2";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK)

const Payment = () => {
  const location = useLocation();
  const classData = location.state;
  const [paymentComplete, setPaymentComplete] = useState(false);
console.log(classData)
  useEffect(() => {
    if (paymentComplete) {
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Payment successfully completed',
            showConfirmButton: false,
            timer: 1500
          })
    }
  }, [paymentComplete])

  return (
    <div className="my-10">
      <div className="text-center">
        <h2 className="text-3xl lg:text-5xl font-bold uppercase text-center p-10">Payment</h2>
        <p className="text-2xl font-semibold">Payment Amount: {classData?.price}</p>
      </div>
      <Elements stripe={stripePromise}>
        <CheckoutForm classData={classData} setPaymentComplete={setPaymentComplete}></CheckoutForm>
      </Elements>
    </div>
  );
};

export default Payment;
