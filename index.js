// Code your solution in this file!

let drivers = ["Antonia", "Nuru", "Amari", "Mo"]

const returnFirstTwoDrivers = function() {

    return drivers.slice(0,2);
    
}

const returnLastTwoDrivers = function() {

    return drivers.slice(Math.max(drivers.length - 2, 0))
}

const selectingDrivers = [
    returnFirstTwoDrivers, returnLastTwoDrivers
]


const createFareMultiplier = function (multiplyValue) {
    return function (value) {
      return multiplyValue * value;
    };
  };


  const fareDoubler = createFareMultiplier(2);
  const fareTripler = createFareMultiplier(3);

  const selectDifferentDrivers = function (drivers, driversToReturn) {
    return driversToReturn(drivers);
  };

  
