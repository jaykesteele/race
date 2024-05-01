let registeredEarly = true;
let runnersAge = 34;
let raceNumber = Math.floor(Math.random () * 1000);


if (runnersAge >= 18 && registeredEarly === true){
    raceNumber += 1000
}
// gives race number

if (runnersAge >= 18 && registeredEarly === true){
console.log (`Hello runner ${raceNumber} Race starts at 9:30am!`);
} else if (runnersAge >= 18 && registeredEarly ===false){
    console.log (`Hello runner ${raceNumber} Race starts at 11:00am!`);
}else if (runnersAge < 18){
    console.log (`Hello runner ${raceNumber} Race starts at 12:30pm!`)
}

console.log('Have fun!')
