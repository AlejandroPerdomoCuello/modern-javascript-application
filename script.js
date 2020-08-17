/* 
Information on getting the API to work

1- This is my API, must be a const
    50b9caeb9f022d5e06aded241bfda347

2- This is the website to get the information for current weather in Metric (celsius)
    api.openweathermap.org/data/2.5/weather?q={city name}&units=metric&appid={your api key}

3- This is the link to get the information of the last 5 days in Metric (celsius)
    api.openweathermap.org/data/2.5/forecast?q={city name}&units=metric&appid={your api key}

*/

// weather for now with the API already included, make sure that the api starts with http://
const weatherNow = "https://api.openweathermap.org/data/2.5/weather?q={city name}&units=metric&appid=50b9caeb9f022d5e06aded241bfda347";

// Now to break the weblink to add the city name

const weatherNow1 = "https://api.openweathermap.org/data/2.5/weather?q=";

const weatherNow2 = "&units=metric&appid=50b9caeb9f022d5e06aded241bfda347";

// weather for 5 days with the API included
const weather5 = "api.openweathermap.org/data/2.5/forecast?q={city name}&units=metric&appid=50b9caeb9f022d5e06aded241bfda347";

// now to break up the weblink to add the city name

const weather51 = "https://api.openweathermap.org/data/2.5/forecast?q=";

const weather52 = "&units=metric&appid=50b9caeb9f022d5e06aded241bfda347";

// Function for the Button press that gets the City name from the user
document.getElementById("mainBtn")
    .addEventListener("click", function getCityName() {
        let city = document.getElementById("cityName1").value;

        // Here we construct the weblink with the proper name
        let urlNow = weatherNow1 + city + weatherNow2;
        // console.log(urlNow);

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
                // console.log(data);
                // console.log(data.main.temp,);
                let numberNow = data.main.temp + "°C";
                document.getElementById("mainOutput").innerHTML = numberNow;
            })
            .catch((err) => {
                // Do something for an error here
                console.log("There was an Error getting the Main Data");
            });
        getFutureTemp();
    });

// Function for the Button2 press that gets the City name from the user
document.getElementById("btn2")
    .addEventListener("click", function getCityName2() {
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
                // console.log(data2.main.temp,);
                let number2 = data2.main.temp + "°C";
                document.getElementById("secondOutput").innerHTML = number2;
            })
            .catch((err) => {
                // Do something for an error here
                console.log("There was an Error getting the second Data");
            });
        
    });


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
                // console.log(data5);
                // console.log(data5.list[1].dt_txt,);
                let firstDate5 = data5.list[1].dt_txt;
                let firstDateTemp5 = data5.list[1].main.temp;
                let firstDateCity5 = data5.city.name;
                let firstDateCountry5 = data5.city.country;
                document.getElementById("output5").innerHTML = "The weather for " + firstDateCity5 + "," + firstDateCountry5 + "are as follow:" <br> "The date and hour are " + firstDate5 + " and the temperature is " + firstDateTemp5 + "°C.";
            })
            .catch((err) => {
                // Do something for an error here
                console.log("There was an Error getting the 5 days ahead Data")
            });
        
    };