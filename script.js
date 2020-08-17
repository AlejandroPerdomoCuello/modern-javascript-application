/* 
Information on getting the API to work

1- This is my API, must be a const
    50b9caeb9f022d5e06aded241bfda347

2- This is the link to get the information of the last 5 days in Metric (celsius)
    api.openweathermap.org/data/2.5/forecast?q={city name}&units=metric&appid={your api key}
*/

// Now to break the weblink to add the city name

const weatherNow1 = "https://api.openweathermap.org/data/2.5/weather?q=";

const weatherNow2 = "&units=metric&appid=50b9caeb9f022d5e06aded241bfda347";

// now to break up the weblink to add the city name I THNK I AWS SUPPOSE TO USE THIS ONE ALL THE TIME

const weather51 = "https://api.openweathermap.org/data/2.5/forecast?q=";

const weather52 = "&units=metric&appid=50b9caeb9f022d5e06aded241bfda347";

// Function for the Button press that gets the City name from the user
document.getElementById("mainBtn")
    .addEventListener("click", runTwoFunctions1);

function getCityName() {
    let city = document.getElementById("cityName1").value;

    // Here we construct the weblink with the proper name
    let urlNow = weatherNow1 + city + weatherNow2;

    // this is new, so I dont know what I am doing

    console.log(fetch(urlNow));

    fetch(urlNow)
        .then((response) => {
            if (response.ok) {
                console.log("Success")
            } else {
                console.log("Error")
            }

            return response.json();
        })
        .then((data) => {
            // Work with JSON data here
            let numberNow = data.main.temp + "°C";
            document.getElementById("mainOutput").innerHTML = numberNow;
        })
        .catch((err) => {
            // Do something for an error here
            console.log("There was an Error getting the Main Data");
        });
};

// Making the function to get the Temp of the next 5 days
function getFutureTemp() {
    let city5 = document.getElementById("cityName1").value;

    // Here we construct the weblink with the proper name
    let url5 = weather51 + city5 + weather52;
    console.log(url5);

    // this is new, so I dont know what I am doing

    console.log(fetch(url5));

    fetch(url5)
        .then((response) => {
            if (response.ok) {
                console.log("Success")
            } else {
                console.log("Error")
            }

            return response.json();
        })
        .then((data5) => {
            // Work with JSON data here
            workWithData(data5);
        })
        .catch((err) => {
            // Do something for an error here
            console.log("There was an Error getting the 5 days ahead Data")
        }, 3000); // the 3000 is the amounts of miliseconds to wait until the data is here, in this case 3 seconds

};

// a function to run two functions at the same time

function runTwoFunctions1 () {
    getCityName();
    getFutureTemp();
};

// Function for the Button2 press that gets the City name from the user
document.getElementById("btn2")
    .addEventListener("click", getCityName2);

function getCityName2() {
    let city2 = document.getElementById("cityName2").value;

    // Here we construct the weblink with the proper name

    let url2 = weatherNow1 + city2 + weatherNow2;

    // this is new, so I dont know what I am doing

    console.log(fetch(url2));

    fetch(url2)
        .then((res) => {
            if (res.ok) {
                console.log("Success, Again")
            } else {
                console.log("Error, Again")
            }

            return res.json();
        })
        .then((data2) => {
            // Work with JSON data here
            let number2 = data2.main.temp + "°C";
            document.getElementById("secondOutput").innerHTML = number2;
        })
        .catch((err) => {
            // Do something for an error here
            console.log("There was an Error getting the second Data");
        });
};

// Function to wor with the table data 
function workWithData(data5) {
    console.log("Now processing data5");

    document.getElementById("output5").innerHTML += "The weather for " + data5.city.name + ", " + data5.city.country + " is as folloms:";
    document.getElementById("output5").innerHTML += "<br>";
    document.getElementById("output5").innerHTML += data5.list[0].dt_txt + ": " + data5.list[0].main.temp + "°C";
    document.getElementById("output5").innerHTML += "<br>";
    document.getElementById("output5").innerHTML += data5.list[8].dt_txt + ": " + data5.list[8].main.temp + "°C";
    document.getElementById("output5").innerHTML += "<br>";
    document.getElementById("output5").innerHTML += data5.list[16].dt_txt + ": " + data5.list[16].main.temp + "°C";
    document.getElementById("output5").innerHTML += "<br>";
    document.getElementById("output5").innerHTML += data5.list[24].dt_txt + ": " + data5.list[24].main.temp + "°C";
    document.getElementById("output5").innerHTML += "<br>";
    document.getElementById("output5").innerHTML += data5.list[32].dt_txt + ": " + data5.list[32].main.temp + "°C";
    document.getElementById("output5").innerHTML += "<br>";
    document.getElementById("output5").innerHTML += data5.list[40].dt_txt + ": " + data5.list[40].main.temp + "°C";
};

// Function for the Enter  Key for the cityName1 input
let input = document.getElementById("cityName1");
input.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("mainBtn").click();
    }
});

// Function for the Enter  Key for the cityName2 input
let input2 = document.getElementById("cityName2");
input2.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("btn2").click();
    }
});

