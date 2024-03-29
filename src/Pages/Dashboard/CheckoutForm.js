import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const CheckoutForm = ({order}) => {
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState('');
  const [success, setSuccess] = useState('');
  const [processing, setProcessing] = useState(false);
  const [clientSecret, setClientSecret] = useState('');
  const [transactionId, setTransactionId] = useState('');

  const {_id,userName,pricePerunit,email}=order;

  useEffect(()=>{
    fetch('https://manufacturer-website-server-side-zd8v.onrender.com/create-payment-intent',{
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `Bearer ${localStorage.getItem('accessToken')}`
      },
      body: JSON.stringify({ pricePerunit })
    })
    .then(res=>res.json())
    .then(data=>{
      if (data?.clientSecret) {
        setClientSecret(data.clientSecret);
      }
    })
  },[pricePerunit])

  const handleSubmit = async(event) => {
    event.preventDefault();
    if(!stripe ||!elements ){
      return;
    }
    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }
    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });
    setCardError(error?.message || '')
    setSuccess('');
    setProcessing(true);

    // confirm card payment 
    const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            name: userName,
            email: email
          },
        },
      },
    );
    if (intentError) {
      setCardError(intentError?.message);
      setProcessing(false);
    }
    else{
      setCardError('');
      setTransactionId(paymentIntent.id);
      console.log(paymentIntent)
      setSuccess('Your payment is completed');

      //store payment on database
      const payment = {
        order: _id,
        transactionId: paymentIntent.id
    }
      fetch(`https://manufacturer-website-server-side-zd8v.onrender.com/booking/${_id}`,{
        method: 'PATCH',
        headers: {
            'content-type': 'application/json',
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        },
        body: JSON.stringify(payment)
    }).then(res=>res.json())
      .then(data=>{
        setProcessing(false);
        console.log(data)
      })
    }

  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <button className='btn btn-success btn-xs mt-4' type="submit" disabled={!stripe || !clientSecret}>
          Pay
        </button>
      </form>
      {
        cardError && <p className='text-red-500'>{cardError}</p>
      }
      {
        success && <div className='text-green-500'>
          <p>{success}  </p>
          <p>Your transaction Id: <span className="text-orange-500 font-bold">{transactionId}</span> </p>
        </div>
      }
    </>
  );
};

export default CheckoutForm;