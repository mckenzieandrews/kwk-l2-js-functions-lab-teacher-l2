// Code your solution in this file!
function distanceFromHqInBlocks (blockNumber) {
 
    return Math.abs(blockNumber - 42);
 
}

function distanceFromHqInFeet (blockNumber) {
  return distanceFromHqInBlocks(blockNumber) * 264;
}

function distanceTravelledInFeet (start, destination) {
    return Math.abs(destination - start) * 264;
 
}

