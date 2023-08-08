// Code your solution in this file!
const returnFirstTwoDrivers = function(driverArray) {
    let newArray = driverArray.slice(0,2)
    return newArray
}
const returnLastTwoDrivers = function(driverArray) {
    let newArray = driverArray.slice(-2)
    return newArray
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(num) {
    return function(fare) {
        return fare * num
    }
}

const fareDoubler = function(fare) {
    return createFareMultiplier(2)(fare)
}

const fareTripler = function(fare) {
    return createFareMultiplier(3)(fare)
}

function selectDifferentDrivers(arrayOfDrivers, fn) {
    return fn(arrayOfDrivers)
}