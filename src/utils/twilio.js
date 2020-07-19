const TWILIO_PHONE_NUMBER = "the phone number you just bought"
const UNITED_STATES_COUNTRY_CODE = "+254"

module.exports = {
    sendSMS: (body, to) => axios({
        method:"POST",
        url :`https://twilio-sms.p.rapidapi.com/2010-04-01/Accounts/${process.env.TWILIO_SID}/Messages.json`,
        headers: {
            "content-type":"application/x-www-form-urlencoded",
            "x-rapidapi-host":"twilio-sms.p.rapidapi.com",
            "x-rapidapi-key": process.env.RAPIDAPI_KEY
        },
        params: {
            from: TWILIO_PHONE_NUMBER,
            body,
            to: KENYA_CODE + to
        }
    })
}