const request = require("postman-request")

const forecast = (latitude, longitude, cb) => {
    const url = "http://api.weatherstack.com/current?access_key=a5671d5f6b7af5ea8ece030e30fe831e&query=" + longitude + "," + latitude
    request({ url, json: true }, (error, { body } = {}) => {
        if (error) {
            console.log(error)
            cb("Unable to connect to weather services.", null)
        } else if (body.error) {
            console.log(body.error)
            cb("Unable to find location.", null)
        } else {
            cb(null, body.current.weather_descriptions[0] + ". The temperature is : " + body.current.temperature + " degres. It feels like " + body.current.feelslike + " degress. " + "The humidity is : " + body.current.humidity + "%")
        }
    })

}


module.exports = forecast