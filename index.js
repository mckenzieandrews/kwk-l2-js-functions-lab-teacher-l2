// Code your solution in this file!
function distanceFromHqInBlocks (blockNumber) {
 
    return Math.abs(blockNumber - 42);
 
}

function distanceFromHqInFeet (blockNumber) {
  return distanceFromHqInBlocks(blockNumber) * 264;
}

function distanceTravelledInFeet (start, destination) {
  if (start < destination) {
    return (destination - start) * 264;
  } else {
    return (start - destination) * 264;
  }
}