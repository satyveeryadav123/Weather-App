const apiKey = "e21431c7994849a18eb71805262302";

const searchBtn = document.getElementById("searchBtn");
const cityInput = document.getElementById("cityInput");
const weatherResult = document.getElementById("weatherResult");

searchBtn.addEventListener("click", function(){
    const city = cityInput.value;
    weatherResult.innerHTML = "Fetching weather...";
    fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`)
    .then(response => response.json())
    .then(data =>{

        const condition = data.current.condition.text.toLowerCase();
        if(condition.includes("rain")){
            document.body.style.background = "linear-gradient(135deg, #56ccf2, #2f80ed)";
        }
        else if (condition.includes("cloud")){
            document.body.style.background = "linear-gradient(135deg, #a0a0a0, #c0c0c0)";

        }
        else if (condition.includes('sun')){
            document.body.style.background = "linear-gradient(135deg, #ffd700, #ff8c00)";
        }
        else{
            document.body.style.background = "#87ceeb";
        }

        weatherResult.innerHTML =`
        <h2>${data.location.name}</h2>
        <p>Temperature:${data.current.temp_c}°C</p>
        <p>Conditon:${data.current.condition.text}</p>
        <p>Humidity:${data.current.humidity}%</p>
        <img src= "https:${data.current.condition.icon}" alt="icon">
        `;
        
    })
    .catch(error =>{
        weatherResult.innerHTML ="City not found.Please try again,";
});
});