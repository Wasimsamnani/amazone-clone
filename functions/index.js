const functions = require("firebase-functions");
const express = require('express');
const cors = require('cors');
const stripe = require("stripe")("sk_test_51J1ZL2SJ18ah23ZjcOQ7YMkqC6qx5EY3aeOMCJMiM4pZhgamziB1DOMeGpheAMub28wpFhiKzjtJghRwDr5BQDGq00gKxHmx9g")

// Api
//App config
const app = express();
//Middlewares
app.use(cors({origin:true}));
app.use(express.json());
// apiroot
app.get('/',(req,res) => {
  res.status(200).send('hello world');
  console.log("home");
})
app.post('/payments/create',async(req,res) => {
  const total = req.query.total;
  console.log("total",req.query.total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount:total,
    currency:"usd",
  });
  res.status(201).send({
    clientSecrect:paymentIntent.client_secret,
  })
})
// listen command
exports.api = functions.https.onRequest(app);
