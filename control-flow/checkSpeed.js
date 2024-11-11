function checkSpeed(speed) {
    const speedLimit = 70;
    const kmPerPoint = 5;
    if(speed < speedLimit + kmPerPoint) return "ok";    
    const points = Math.floor((speed - speedLimit)/kmPerPoint);
    return (points >= 12)? "License suspended": `point : ${points}`;
}

console.log(checkSpeed(75));
