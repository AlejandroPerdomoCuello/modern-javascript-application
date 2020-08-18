const weatherFuture1 = "https://api.openweathermap.org/data/2.5/forecast?q=";
const weatherFuture2 = "&units=metric&appid=50b9caeb9f022d5e06aded241bfda347";

export default function getFutureTemp() {
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