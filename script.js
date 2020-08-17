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

// All elements below are for the First Button

// Function for the Button press that gets the City name from the user
document.getElementById("button1").addEventListener("click", runTwoFunctions1);

function getCityName() {
    let city = document.getElementById("cityName1").value;

    // Here we construct the weblink with the proper name
    let url = weatherToday1 + city + weatherToday2;

    // this is new, so I dont know what I am doing

    console.log(fetch(url));

    fetch(url)
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
            let weatherTodayCity1 = data.main.temp + "°C";
            document.getElementById("output1").innerHTML = weatherTodayCity1;
        })
        .catch((err) => {
            // Do something for an error here
            console.log("There was an Error getting the Main Data");
        });
};

// Making the function to get the Temp of the next 5 days of City 1
function getFutureTemp() {
    let city1 = document.getElementById("cityName1").value;

    // Here we construct the weblink with the proper name
    let url1 = weatherFuture1 + city1 + weatherFuture2;
    console.log(url1);

    // this is new, so I dont know what I am doing

    console.log(fetch(url1));

    fetch(url1)
        .then((response) => {
            if (response.ok) {
                console.log("Success")
            } else {
                console.log("Error")
            }

            return response.json();
        })
        .then((data1) => {
            // Work with JSON data here
            workWithData(data1);
        })
        .catch((err) => {
            // Do something for an error here
            console.log("There was an Error getting the 5 days ahead Data")
        }, 3000); // the 3000 is the amounts of miliseconds to wait until the data is here, in this case 3 seconds

};

// Function to wor with the table data for city 1
function workWithData(data1) {
    console.log("Now processing data1");

    document.getElementById("output11").innerHTML += "The weather for " + data1.city.name + ", " + data1.city.country + " is as follows:";
    document.getElementById("output11").innerHTML += "<br>";
    document.getElementById("output11").innerHTML += data1.list[0].dt_txt + ": " + data1.list[0].main.temp + "°C";
    document.getElementById("output11").innerHTML += "<br>";
    document.getElementById("output11").innerHTML += data1.list[8].dt_txt + ": " + data1.list[8].main.temp + "°C";
    document.getElementById("output11").innerHTML += "<br>";
    document.getElementById("output11").innerHTML += data1.list[16].dt_txt + ": " + data1.list[16].main.temp + "°C";
    document.getElementById("output11").innerHTML += "<br>";
    document.getElementById("output11").innerHTML += data1.list[24].dt_txt + ": " + data1.list[24].main.temp + "°C";
    document.getElementById("output11").innerHTML += "<br>";
    document.getElementById("output11").innerHTML += data1.list[32].dt_txt + ": " + data1.list[32].main.temp + "°C";
    document.getElementById("output11").innerHTML += "<br>";
    document.getElementById("output11").innerHTML += data1.list[40].dt_txt + ": " + data1.list[40].main.temp + "°C";
};

// a function to run two functions at the same time

function runTwoFunctions1() {
    getCityName();
    getFutureTemp();
};



// All elements below are for the Second Button

// Function for the Button2 press that gets the City name from the user
document.getElementById("button2").addEventListener("click", runTwoFunctions2);

// Function to get City name 2 for the second city
function getCityName2() {
    let city2 = document.getElementById("cityName2").value;

    // Here we construct the weblink with the proper name

    let url2 = weatherToday1 + city2 + weatherToday2;

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
            let WeatherTodayCity2 = data2.main.temp + "°C";
            document.getElementById("output2").innerHTML = WeatherTodayCity2;
        })
        .catch((err) => {
            // Do something for an error here
            console.log("There was an Error getting Data for the Second City");
        });
};

function getFutureTemp2() {
    let city3 = document.getElementById("cityName2").value;

    // Here we construct the weblink with the proper name
    let url4 = weatherFuture1 + city3 + weatherFuture2;
    console.log(url4);

    // this is new, so I dont know what I am doing

    console.log(fetch(url4));

    fetch(url4)
        .then((response) => {
            if (response.ok) {
                console.log("Success")
            } else {
                console.log("Error")
            }
            return response.json();
        })
        .then((data2) => {
            // Work with JSON data here
            workWithData(data2);
        })
        .catch((err) => {
            // Do something for an error here
            console.log("There was an Error getting the 5 days ahead Data")
        }, 3000); // the 3000 is the amounts of miliseconds to wait until the data is here, in this case 3 seconds

};

// Function to wor with the table data for city 2
function workWithData2(data2) {
    console.log("Now processing data2");

    document.getElementById("output22").innerHTML += "The weather for " + data2.city.name + ", " + data2.city.country + " is as follows:";
    document.getElementById("output22").innerHTML += "<br>";
    document.getElementById("output22").innerHTML += data2.list[0].dt_txt + ": " + data2.list[0].main.temp + "°C";
    document.getElementById("output22").innerHTML += "<br>";
    document.getElementById("output22").innerHTML += data2.list[8].dt_txt + ": " + data2.list[8].main.temp + "°C";
    document.getElementById("output22").innerHTML += "<br>";
    document.getElementById("output22").innerHTML += data2.list[16].dt_txt + ": " + data2.list[16].main.temp + "°C";
    document.getElementById("output22").innerHTML += "<br>";
    document.getElementById("output22").innerHTML += data2.list[24].dt_txt + ": " + data2.list[24].main.temp + "°C";
    document.getElementById("output22").innerHTML += "<br>";
    document.getElementById("output22").innerHTML += data2.list[32].dt_txt + ": " + data2.list[32].main.temp + "°C";
    document.getElementById("output22").innerHTML += "<br>";
    document.getElementById("output22").innerHTML += data2.list[40].dt_txt + ": " + data2.list[40].main.temp + "°C";
};

// a function to run two functions at the same time

function runTwoFunctions2() {
    getCityName2();
    getFutureTemp2();
};

// Function for the Enter  Key for the cityName1 input
let input = document.getElementById("cityName1");
input.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("button1").click();
    }
});

// Function for the Enter  Key for the cityName2 input
let input2 = document.getElementById("cityName2");
input2.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("button2").click();
    }
});

