const nodemailer = require("nodemailer");

let OTP = '';
const generateOTP = () => {
    const digits = '0123456789';
    
    for (let i = 0; i < 6; i++) {
        OTP += digits[Math.floor(Math.random() * 10)];
    }
    return OTP;
}

const sendOTP = async () => {

  let transporter = nodemailer.createTransport({
    service: 'gmail', 
    auth: {
      user: 'viratbarath218@gmail.com', 
      pass: 'qzhdmpmsajxiqyvs',
    },
  });

  const OTP = generateOTP();

  const mailOptions = {
      from: 'virat@gmail.com',
      to: 'barathkumar.b2411@gmail.com',
      subject: 'OTP Verification',
      text: `Your OTP is ${OTP}.`
  };

  let send = await transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
        } else {
            console.log(`OTP sent to ${email}.`);
        }
  });
    console.log(OTP);
    return OTP;
}

const verifyOTP = (enteredOTP) => {
    console.log('vanthuten' , enteredOTP  )
    if (enteredOTP === OTP) {
        console.log('OTP verification successful.');
        return 'OTP verification successful.';
    } else {
        console.log('OTP verification failed.');
        return 'OTP verification failed.';
    }
}

module.exports = { sendOTP,verifyOTP }