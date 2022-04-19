// api.openweathermap.org/data/2.5/weather?q={city names}&appid={API key}

const { append } = require("express/lib/response");

const weatherApi={
    key: "6da1fca3910e849efa3d69194e85246b",
    baseUrl:"https://api.openweathermap.org/data/2.5/weather",

}

const corse = require(corse);
app.use(cors(););

// event listener function on keypress

const searchInputBox=document.getElementById('Input-box');
searchInputBox.addEventListener('keypress',(event) => {
    if(event.keyCode == 13){
    console.log(searchInputBox.value);
    getweatherreport(searchInputBox.value);
    document.querySelector('.weather-body').style.display="block";
    }
});
// get weather report
function getweatherreport(city){
    fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`)
    .then(weather => {
        return weather.json();

    }).then(showweatherreport);
}
// show weather report
function showweatherreport(weather){
    console.log(weather);
    let city=document.getElementById('city');
    city.innerText=`${weather.name},${weather.sys.country}`;

    let temperature=document.getElementById('temperature');
    temperature.innerHTML=`${Math.round(weather.main.temp)}&deg;C`;

    let minmaxtemp=document.getElementById('min-max');
    minmaxtemp.innerHTML=`${Math.floor(weather.main.temp_min)}&deg;C (min)/${Math.ceil(weather.main.temp_max)}&deg;C (max)`;

   
    let icon=document.getElementById('icon');

    let weathertype=document.getElementById('weather');
    weathertype.innerText=`${weather.weather[0].main}`;

    let date=document.getElementById('date');
    let todaydate=new Date();
    date.innerText=dateManage(todaydate);
     

    if(weathertype.textContent=='Clear'){
        document.body.style.backgroundImage="url('images/sunny.jpg')";
        icon.innerHTML=`<img src="images/sun.png" style='height:50px'/>`

        
    }
    else if(weathertype.textContent=='Haze'){
        document.body.style.backgroundImage="url('images/cloudy_sky.jpg')";
        icon.innerHTML=`<img src="images/cloudy.png" style='height:50px'/>`

    }
    else if(weathertype.textContent=='Clouds'){
        document.body.style.backgroundImage="url('images/cloudy_sky.jpg')";
        icon.innerHTML=`<img src="images/cloudy.png" style='height:50px'/>`
    }
    else if(weathertype.textContent=='Rain'){
        document.body.style.backgroundImage="url('images/rainy.jpg')";

        icon.innerHTML=`<img src="images/raincloud.png" style='height:50px'/>`


    }
    else if(weathertype.textContent=='Snow'){
        document.body.style.backgroundImage="url('images/snow.jpg')";
        icon.innerHTML=`<img src="images/snowman.png" style='height:50px'/>`

    }
    else if(weathertype.textContent=='Thunderstorm'){
        document.body.style.backgroundImage="url('images/thunderstorm.jpg')";
        icon.innerHTML=`<img src="images/thunder.png" style='height:50px'/>`

    }
}
// date manage
function dateManage(dateArg){
let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

let months=["January","February","March","April","May","June","July","August","September","October","November","December"];

let year=dateArg.getFullYear();
let month=months[dateArg.getMonth()];
let date=dateArg.getDate();
let day=days[dateArg.getDay()];
return `${date} ${month} (${day}), ${year}`;
}