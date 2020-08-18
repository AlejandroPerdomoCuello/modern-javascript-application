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
function getCityName() {
    let city = document.getElementById("cityName1").value;

    // Here we construct the weblink with the proper name
    let url = weatherToday1 + city + weatherToday2;

    // this is new, so I dont know what I am doing

    console.log(fetch(url));

    fetch(url)
        .then((response) => {
            if (response.ok) {
                console.log("Success getting the Temperature Today of City1")
            } else {
                console.log("Error getting the Temeprature Today of City1")
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
            console.log("Error getting and working with the Temp for Today of City1");
        });
};

// Function to get the Future Temp of City 1
function getFutureTemp() {
    let city1 = document.getElementById("cityName1").value;

    // Here we construct the weblink with the proper name
    let url1 = weatherFuture1 + city1 + weatherFuture2;

    // this is new, so I dont know what I am doing

    console.log(fetch(url1));

    fetch(url1)
        .then((response) => {
            if (response.ok) {
                console.log("Success getting the Future Temperature for City 1")
            } else {
                console.log("Error getting the Future Temperature of City1")
            }

            return response.json();
        })
        .then((data1) => {
            // Work with JSON data here
            workWithData(data1);
        })
        .catch((err) => {
            // Do something for an error here
            console.log("Error getting the Future Temperature of City1")
        }, 5000); // the 3000 is the amounts of miliseconds to wait until the data is here, in this case 3 seconds

};

// Function to work with the table data1 for Future Temp of City 1
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
function getCityName2() {
    let city2 = document.getElementById("cityName2").value;

    // Here we construct the weblink with the proper name

    let url2 = weatherToday1 + city2 + weatherToday2;

    // this is new, so I dont know what I am doing

    console.log(fetch(url2));

    fetch(url2)
        .then((res) => {
            if (res.ok) {
                console.log("Success getting the Temp of Today for City2")
            } else {
                console.log("Error getting the Temp of Today for City2")
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
            console.log("Error getting and working with the Temperature for Today for City2");
        });
};

// Function to get Future Temp of City2
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
                console.log("Success getting the Future Temp of City2")
            } else {
                console.log("Error Getting the Future Temp of City2")
            }
            return response.json();
        })
        .then((data3) => {
            // Work with JSON data here
            workWithData2(data3);
        })
        .catch((err) => {
            // Do something for an error here
            console.log("Error getting and working with the Future Temp for City2")
        }, 3000); // the 3000 is the amounts of miliseconds to wait until the data is here, in this case 3 seconds

};

// Function to work with the table data3 for Future Temp of City 2
function workWithData2(data3) {
    console.log("Now processing data3");

    document.getElementById("output22").innerHTML += "The weather for " + data3.city.name + ", " + data3.city.country + " is as follows:";
    document.getElementById("output22").innerHTML += "<br>";
    document.getElementById("output22").innerHTML += data3.list[0].dt_txt + ": " + data3.list[0].main.temp + "°C";
    document.getElementById("output22").innerHTML += "<br>";
    document.getElementById("output22").innerHTML += data3.list[8].dt_txt + ": " + data3.list[8].main.temp + "°C";
    document.getElementById("output22").innerHTML += "<br>";
    document.getElementById("output22").innerHTML += data3.list[16].dt_txt + ": " + data3.list[16].main.temp + "°C";
    document.getElementById("output22").innerHTML += "<br>";
    document.getElementById("output22").innerHTML += data3.list[24].dt_txt + ": " + data3.list[24].main.temp + "°C";
    document.getElementById("output22").innerHTML += "<br>";
    document.getElementById("output22").innerHTML += data3.list[32].dt_txt + ": " + data3.list[32].main.temp + "°C";
    document.getElementById("output22").innerHTML += "<br>";
    document.getElementById("output22").innerHTML += data3.list[40].dt_txt + ": " + data3.list[40].main.temp + "°C";
};

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

