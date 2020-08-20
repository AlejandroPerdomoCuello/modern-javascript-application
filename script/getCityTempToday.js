// Function that clicks Button2
export default function getCityName() {
    const weatherToday1 = "https://api.openweathermap.org/data/2.5/weather?q=";
    const weatherToday2 = "&units=metric&appid=50b9caeb9f022d5e06aded241bfda347";
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

export function getCityName2() {
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