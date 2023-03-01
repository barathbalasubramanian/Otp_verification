const express = require('express')
const bodyParser = require('body-parser');
const {sendOTP , verifyOTP } = require('./otp_verification/otp_verify.js')

const app = express();
const send = sendOTP();
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', './views');

const PORT = 8000;

app.get('/' ,(req,res) => {
    res.render("index");
});

app.post('/', (req, res) => {
    const myInputValue = req.body['my-input'];
    const result = verifyOTP(myInputValue);
    res.send(`${result}!`);
});

app.listen(8000)
console.log(`Server is running on http://localhost:${PORT}`)