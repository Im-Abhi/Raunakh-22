const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const transactionSchema = new Schema({
    receipt: { type: Schema.Types.ObjectId, required: true, unique: true },
    paymentId: String,
    orderId: { type: String, required: true, unique: true },
    signature: String,
    amount: { type: Number, required: true },
    status: { type: String, default: "pending", enum: ["pending", "successful", "unsuccessful"] },
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true }
}, { timestamps: true })

module.exports = mongoose.model('transaction', transactionSchema);