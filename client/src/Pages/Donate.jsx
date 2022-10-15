import React, { useRef } from 'react'
import Razorpay from "https://checkout.razorpay.com/v1/checkout.js";

export default function Donate() {
  const name = useRef();
  const email = useRef();
  const phone = useRef();
  const amount = useRef();

  async function checkout(event) {
    event.preventDefault();
    const response = await fetch('http://localhost:5000/razorpay/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: name.current.value,
        email: email.current.value,
        phone: phone.current.value,
        amount: amount.current.value
      })
    })
    const data = await response.json();
    console.log(data);
    if (data?.id) await pay(data.id)
    else alert(data?.error)
  }

  async function pay(order_id) {
    const options = {
      "key": "YOUR_KEY_ID", // Enter the Key ID generated from the Dashboard
      "amount": amount.current.value * 100, // Amount is in currency subunits.
      "currency": "INR",
      "name": "Raunak - 2022",
      "description": "Test Transaction",
      "image": "https://example.com/your_logo",
      "order_id": order_id,
      "handler": async function (response) {
        console.log(response)
        await verify(response)
      },
      "prefill": {
        "name": name.current.value,
        "email": email.current.value,
        "contact": phone.current.value
      },
      "theme": {
        "color": "#3399cc"
      }
    };
    const rzp = new Razorpay(options);
    rzp.open();
    rzp.on('payment.failed', function (response) {
      alert("Couldn't process payment")
      console.log(response.error)
    });
  }

  async function verify({ razorpay_payment_id, razorpay_order_id, razorpay_signature }) {
    const response = await fetch('http://localhost:5000/razorpay/confirm-payment', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ razorpay_payment_id, razorpay_order_id, razorpay_signature })
    })
    const data = await response.json();
    console.log(data);
    alert(data?.msg || data?.error)
  }

  return (
    <form onSubmit={checkout} className='p-5 flex flex-col space-y-2 items-center placeholder:text-gray'>
      <div>
        <label htmlFor="name">Name: </label>
        <input ref={name} type="text" id='name' required className='text-black' />
      </div>
      <div>
        <label htmlFor="email">Email: </label>
        <input ref={email} type="email" id='email' required className='text-black' />
      </div>
      <div>
        <label htmlFor="phone">Phone: </label>
        <input ref={phone} type="text" id='phone' required minLength={10} maxLength={10} className='text-black' />
      </div>
      <div>
        <label htmlFor="amount">Amount: </label>
        <input ref={amount} type="number" id='amount' required min={1} className='text-black' />
      </div>
      <button type="submit">Donate Now!</button>
    </form>
  )
}
