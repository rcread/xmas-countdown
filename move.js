// var countdownDate = new Date("Dec 25, 2022 00:00:00").getTime();
// var now = new Date();
// var timeLeft = countdownDate - now;

// var todayDay = String(now.getDate()).

// var hours = new Date("Dec 24, 2022 23:59:59");
// var christmasHour = hours.getHours() - (new Date().getHours);
// console.log(christmasHour);


let todaysDate = new Date();
var dd = String(todaysDate.getDate()).padStart(2, '0');
var mm = String(todaysDate.getMonth() + 1).padStart(2, '0'); 
var yyyy = todaysDate.getFullYear();

todaysDate = dd + '/' + mm + '/' + yyyy;
document.getElementById('todayDate').innerHTML = todaysDate;



let addZero = num => num < 10 ? `0${num}`: num;

function countdown(){

    let daysUntil = document.getElementById("days");
    let hoursUntil = document.getElementById("hours");
    let minsUntil = document.getElementById("mins");
    let secsUntil = document.getElementById("secs");

    let today = new Date();
    console.log(today);
    let todayTime = today.getTime();
    console.log(todayTime);

    let christmasDay = new Date(2022, 11, 25, 0, 0);
    console.log(christmasDay);
    let christmasTime = christmasDay.getTime();
    let timeUntil = christmasTime - todayTime;
    console.log(timeUntil);

    if(christmasTime < todayTime){
        clearInterval(i);
        document.querySelector('.h3').innerHTML = "Countdown has expired";
    } else {
        let oneMin = 60 * 1000;
    let oneHour = 60 * oneMin;
    let oneDay = 24 * oneHour;

    let daysLeft = Math.floor(timeUntil / oneDay);
    let hoursLeft = Math.floor((timeUntil % oneDay) / oneHour);
    let minsLeft = Math.floor((timeUntil % oneHour) / oneMin);
    let secsLeft = Math.floor((timeUntil % oneMin) / 1000);
    console.log(daysLeft, hoursLeft, minsLeft, secsLeft);

    daysUntil.textContent = addZero(daysLeft);
    hoursUntil.textContent = addZero(hoursLeft);
    minsUntil.textContent = addZero(minsLeft);
    secsUntil.textContent = addZero(secsLeft);
    }
}

let i = setInterval(countdown, 1000);
countdown();


