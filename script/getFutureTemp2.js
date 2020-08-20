const weatherFuture1 = "https://api.openweathermap.org/data/2.5/forecast?q=";
const weatherFuture2 = "&units=metric&appid=50b9caeb9f022d5e06aded241bfda347";

export default function getFutureTemp2() {
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