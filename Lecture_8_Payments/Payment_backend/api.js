const express = require('express')
const app = express();
const dotenv = require('dotenv');
dotenv.config({path:"./.env"});
const { PORT, RAZORPAY_PUBLIC_KEY, RAZORPAY_PRIVATE_KEY } = process.env;

const ShortId = require("short-unique-id");
const uid = new ShortId({ length: 10 });

const Razorpay = require('razorpay');
const razorpayInstance = new Razorpay({
    key_id: RAZORPAY_PUBLIC_KEY,
    key_secret:RAZORPAY_PRIVATE_KEY,
});

// you are allowing any user to access your server as cross origin 
const cors = require("cors");
app.use(cors());

app.use(express.json());

app.post("/checkout", async (req, res) => {
    try {
        const amount = 200; //Paisa
        const currency = "INR";
        const receipt = `rp_${uid.rnd()}`; //generates a random unique ID for receipt.

        const orderConfig = {
            amount: amount * 100, //converted into Rupees
            currency: currency,
            receipt: receipt,
        };
        const order = await razorpayInstance.orders.create(orderConfig);
        res.status(201).json({
            order: order,
            message: "Payment Requested to razorpay",
        })
    } catch (err) {
        res.status(500).json({
          message: "failure",
          error: err,
        });
    }
    
})

app.post("verify", function () {
  //  that payemnt is done -> razorpay
  // update the status of the user -> order , premium
})

const port = PORT;
app.listen(port, () => {
    console.log(`Server is running at port ${port}`);
});