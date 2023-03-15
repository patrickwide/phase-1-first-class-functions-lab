// Code your solution in this file!
// Define the returnFirstTwoDrivers function
const returnFirstTwoDrivers = function (drivers) {
  return drivers.slice(0, 2);
};

// Define the returnLastTwoDrivers function
const returnLastTwoDrivers = function (drivers) {
  return drivers.slice(-2);
};

// Define the selectingDrivers array
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// Define the createFareMultiplier function
const createFareMultiplier = function (multiplier) {
  return function (fare) {
    return fare * multiplier;
  };
};

// Define the fareDoubler function
const fareDoubler = createFareMultiplier(2);

// Define the fareTripler function
const fareTripler = createFareMultiplier(3);

// Define the selectDifferentDrivers function
const selectDifferentDrivers = function (drivers, fn) {
  return fn(drivers);
};
