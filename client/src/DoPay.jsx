import React from 'react'
import axios from "axios";


const Home = () => {


    const checkoutHandler = async (amount) => {
        console.log("amount -- ", amount);
        const key = "rzp_test_yw35MEmnbaln3I";
        
        const order = await axios.post("http://localhost:4040/payment/checkout", {amount});
        
        const options = {
            key,
            amount: order.data.data.amount,
            currency: "INR",
            name: "Dudhwala",
            description: "Tutorial of RazorPay",
            image: "./Assets/whiteIcon.png",
            order_id: order.data.data.id,
            callback_url: "http://localhost:4040/payment/verification",
            prefill: {
                name: "Aapka",
                email: "aapka.dudh@example.com",
                contact: "9999999999"
            },
            notes: {
                "address": "Razorpay Corporate Office"
            },
            theme: {
                "color": "#121212"
            }
        };
        const razor = new window.Razorpay(options);
        razor.open();
    }

    return (
        <div>
            <h1>₹{200}</h1>
            <button onClick={() => checkoutHandler(200)}>Buy Now</button>
        </div>
    )
}

export default Home