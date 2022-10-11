const mongoose = require("mongoose")
const port = process.env.PORT || 5000
if (port === 5000) require('dotenv').config({ path: './.env' })

module.exports = async () => {
    mongoose.connect(process.env.URI, {
        useNewUrlParser: true, useUnifiedTopology: true
    }, () => console.log('Connected to Database!'))
    return mongoose
}