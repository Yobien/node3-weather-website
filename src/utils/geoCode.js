const request = require("postman-request")

const geoCode = (address, cb) => {
    const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + address + ".json?access_token=pk.eyJ1IjoidGltb3RoZWU2NyIsImEiOiJja2hvbTZ5Z2EwOGVpMnFsdDBoaWdsYmg1In0.J1L3k0m-KXdnGdXd0qocSQ"
    request({ url, json: true }, (error, { body } = {}) => {

        if (error) {
            return cb("Unable to connect to location services !")
        }
        if (!body || !body.features || body.features.length === 0) {
            return cb("Unable to find location. Try another search.")
        }
        return cb(null, {
            location: body.features[0].place_name,
            latitude: body.features[0].center[1],
            longitude: body.features[0].center[0]
        })
    })
}

module.exports = geoCode