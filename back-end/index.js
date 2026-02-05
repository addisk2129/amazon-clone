
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const Stripe = require("stripe");
const stripe = new Stripe(process.env.STRIPE_KEY);

const app = express();
app.use(cors({
  origin: ['http://localhost:5173',
    'https://amanone-clone-frontend.vercel.app/api'],
  credentials: true,
  origin: true
}));

app.use(express.json());
const port=5000;

app.get("/", (req, res) => {
  res.status(200).json({message: "success"});
});

app.post("/api/payment/create", async (req, res) => {
  const total = Math.round(Number(req.query.total) * 100);


  if (!total || isNaN(total) || total <= 0) {
    return res.status(400).json({message: "Invalid total amount"});
  }

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: total , // Convert dollars to cents
      currency: "usd",
    });

    res.status(200).json({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({message: "Payment creation failed"});
  }
});

app.listen(port,(err)=>{
    if(err){
        console.log("something went wrong")
        return;
    }
    console.log('server is running on port'+port)
})

