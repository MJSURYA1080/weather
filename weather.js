
const apikey="3feab4af52c4c4be05e193d39d977109";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox=document.querySelector(".search input");
const searchbut=document.querySelector(".search button");


async function checkweather(city){
    const response=await fetch(apiurl+city+`&appid=${apikey}`);
    var data=await response.json();

    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+'°c';;
    document.querySelector(".humidity").innerHTML=data.main.humidity+'%';
    document.querySelector(".wind").innerHTML=data.wind.speed+"kmph";
}


searchbut.addEventListener("click",()=>{

checkweather(searchbox.value);
// searchbox.value="you made it";
})