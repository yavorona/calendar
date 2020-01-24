const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/hotels');

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

const getRandomNumberInRange = (min, max) => {
    return Math.floor((Math.random() * (max - min)) + min)
}

const getRandomNumber = (range) => {
    return Math.floor(Math.random() * range);
}

for (let i = 0; i < 100; i++) {
    Hotel.create({
        id: i,
        views: getRandomNumber(10),
        averageDailyRateMin: getRandomNumberInRange(25, 50),
        averageDailyRateMax: getRandomNumberInRange(51, 100),
        adultsPerRoom: getRandomNumberInRange(2, 5),
        maxrooms: getRandomNumberInRange(3, 6),
        price: getRandomNumberInRange(100, 200),
        daysToCancel: 10
    })
}
