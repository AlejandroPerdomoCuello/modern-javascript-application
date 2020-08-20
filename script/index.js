/* 
Information on getting the API to work

1- This is my API, must be a const
    50b9caeb9f022d5e06aded241bfda347
2- This is the link to get the information of the last 5 days in Metric (celsius)
    api.openweathermap.org/data/2.5/forecast?q={city name}&units=metric&appid={your api key}
*/

// Now to break the weblink to add the city name
const weatherToday1 = "https://api.openweathermap.org/data/2.5/weather?q=";
const weatherToday2 = "&units=metric&appid=50b9caeb9f022d5e06aded241bfda347";

// now to break up the weblink to add the city name I THNK I AWS SUPPOSE TO USE THIS ONE ALL THE TIME
const weatherFuture1 = "https://api.openweathermap.org/data/2.5/forecast?q=";
const weatherFuture2 = "&units=metric&appid=50b9caeb9f022d5e06aded241bfda347";

// Everything below is for Button1

// Function for Button1
document.getElementById("button1").addEventListener("click", runTwoFunctions1);

// Function that gets the Temperature of Today for City 1 and Displays it
import getCityName from "./getCityTempToday.js";

// Function to get the Future Temp of City 1
import getFutureTemp from "./getFutureTemp.js";

// Function to work with the table data1 for Future Temp of City 1

// Function to run two functions at the press of Button1

function runTwoFunctions1() {
    getCityName();
    getFutureTemp();
};

// Function that clicks Button 1
let input = document.getElementById("cityName1");
input.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("button1").click();
    }
});

// Everything below is for Button2

// Function for the Button2
document.getElementById("button2").addEventListener("click", runTwoFunctions2);

// Function that gets the Temperature of Today for City 1 and Displays it
import getCityName2 from "./getCityTempToday.js";

// Function to get Future Temp of City2
import getFutureTemp2 from "./getFutureTemp2.js";

// Function to work with the table data3 for Future Temp of City 2

// Function to run two functions at the press of Button2
function runTwoFunctions2() {
    getCityName2();
    getFutureTemp2();
};

// Function that clicks Button2
let input2 = document.getElementById("cityName2");
input2.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("button2").click();
    }
});
