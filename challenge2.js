function speedDetector(speed) {
    const speedLimit = 70; // Speed limit
    const kmPerDemerit = 5; // Kilometers per demerit point

    if (speed < speedLimit) {
        console.log("Ok");
    } else {
        const excessSpeed = speed - speedLimit;
        const demeritPoints = Math.floor(excessSpeed / kmPerDemerit);

        if (demeritPoints > 12) {
            console.log("License suspended");
        } else {
            console.log(`Points: ${demeritPoints}`);
        }
    }
}

// Example Usage
speedDetector(80); // Replace 80 with any speed to test
