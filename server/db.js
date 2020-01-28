const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/hotels');
const Promise = require('bluebird');

let hotelSchema = {
    id: Number, 
    views: Number, 
    averageDailyRateMin: Number,
    averageDailyRateMax: Number, 
    adultsPerRoom: Number,
    maxRooms: Number, 
    price: Number,
    daysToCancel: Number
}

let Hotel = mongoose.model('Hotel', hotelSchema);

const getLocations = () => {
    return new Promise((resolve, reject) => {
        Hotel.find({}, (err, locations) => {
            if (err) {
                reject(err);
            } else {
                resolve(locations);
            }
        })
    })
}

module.exports.Hotel = Hotel;
module.exports.getLocations = getLocations;