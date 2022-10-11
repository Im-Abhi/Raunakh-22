const express = require("express");
const router = express.Router();
const Razorpay = require('razorpay');
const Transaction = require('../schemas/Transaction')
const { sha256 } = require("js-sha256");
const mongoose = require("mongoose");
const { startOfDay, endOfDay } = require('date-fns');

var instance = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET
});

router.post('/history/all', async (req, res) => {
    try {
        let transactions;
        if (req.body.from && req.body.to) {
            const from = new Date(req.body.from)
            const to = new Date(req.body.to)
            transactions = await Transaction.find({
                status: "successful",
                createdAt: {
                    $gte: startOfDay(from),
                    $lte: endOfDay(to)
                }
            }).sort({ createdAt: -1 })
        } else transactions = await Transaction.find({ status: "successful" }).sort({ createdAt: -1 })

        let amount = 0
        transactions.forEach(transaction => { amount += transaction.amount })

        if (req.body.transactions) res.status(200).json({ msg: "successful", amount, transactions, count: transactions.length });
        else res.status(200).json({ msg: "successful", amount, count: transactions.length });
    } catch { res.status(500).json({ error: "Couldn't fetch transactions" }) }
})

router.get('/history/user', async (req, res) => {
    try {
        const transactions = await Transaction.find({ user: req.user.id })
        res.json({ msg: "successful", transactions })
    } catch { res.status(500).json({ error: "Couldn't fetch transactions" }) }
})

router.get('/history/:id', async (req, res) => {
    try {
        const transaction = await Transaction.findById(req.params.id)
        res.json({ msg: "successful", transaction })
    } catch { res.status(500).json({ error: "Couldn't fetch transaction" }) }
})

router.post('/checkout', async (req, res) => {
    try {
        const { amount } = req.body

        const options = {
            amount,  // amount in the smallest currency unit
            currency: "INR",
            receipt: new mongoose.Types.ObjectId()
        };
        instance.orders.create(options, async function (error, order) {
            if (error) return res.status(500).json({ error })

            const transaction = await Transaction.create({ receipt: options.receipt, orderId: order.id, amount: amount / 100 })
            res.json({ id: order.id })
            setTimeout(async () => {
                try {
                    await Transaction.findOneAndUpdate({ _id: transaction._id, status: "pending" }, { status: "unsuccessful" })
                } catch { }
            }, 315000);
        });
    } catch { res.status(500).json({ error: "Couldn't create transaction" }) }
})

router.post('/confirm-payment', async (req, res) => {
    try {
        const { razorpay_payment_id, razorpay_order_id, razorpay_signature } = req.body
        const transaction = await Transaction.findOne({ user: req.user.id, orderId: razorpay_order_id })
        const generatedSignature = sha256.hmac(process.env.RAZORPAY_KEY_SECRET, razorpay_order_id + "|" + razorpay_payment_id);
        if (generatedSignature !== razorpay_signature) return res.status(401).json({ error: "Couldn't process the payment" })

        transaction.paymentId = razorpay_payment_id
        transaction.signature = razorpay_signature
        transaction.status = "successful"
        await transaction.save()

        res.json({ msg: "Payment successful" })
    } catch { res.status(500).json({ error: "Couldn't process the payment" }) }
})

module.exports = router