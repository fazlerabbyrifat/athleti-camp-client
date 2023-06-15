import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const CheckoutForm = ({ classData, setPaymentComplete }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [axiosSecure] = useAxiosSecure();
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState("");

  const handleSubmitPayment = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log(error);
      setCardError(error.message);
      return;
    }

    try {
      const response = await axiosSecure.post(`/dashboard/payment/${classData?.id}`, {
        paymentMethodId: paymentMethod.id,
        paymentAmount: parseInt(classData?.price),
      });

      if (response.status === 200) {
        setPaymentComplete(true);
      } else {
        console.log(response.data.message);
        setCardError(response.data.message);
      }
    } catch (error) {
      console.log(error);
      setCardError(error.message);
    }
  };

  return (
    <>
      <form className="w-1/2 mx-auto mt-10" onSubmit={handleSubmitPayment}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "20px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button className="btn btn-info btn-sm mt-5" type="submit">
          Pay
        </button>
      </form>
      {cardError && <p className="text-error text-sm">{cardError}</p>}
      {transactionId && (
        <p>Transaction Completed with transactionId: {transactionId}</p>
      )}
    </>
  );
};

export default CheckoutForm;
