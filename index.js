function distanceFromHqInBlocks(someValue) {
    return Math.abs(someValue - 42);
}
distanceFromHqInBlocks(50);
function distanceFromHqInFeet(someValue) {
    return distanceFromHqInBlocks(someValue) * 264;
}
distanceFromHqInFeet();
function distanceTravelledInFeet(start, destination) {
return (Math.abs(destination - start) * 264);
}
distanceTravelledInFeet(34, 38);
function calculatesFarePrice(start, destination) {
    if (distanceTravelledInFeet(start, destination) < 400) {
        return 0;
    }
    else if (distanceTravelledInFeet(start, destination) < 2000) {
        return (distanceTravelledInFeet(start, destination) - 400) * .02;
    }
    else if (distanceTravelledInFeet(start, destination) > 2000) {
       return distanceTravelledInFeet(start, destination) > 2500 ? 'cannot travel that far' : 25;
    }
}
calculatesFarePrice(34, 38);