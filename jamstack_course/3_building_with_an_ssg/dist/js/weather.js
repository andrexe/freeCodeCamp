function success(pos) {

    // const API_KEY = process.env.OPEN_WEATHER_API_KEY;
    const API_KEY = 'aec96f6ebb1dd2ee4015600a64da66fe';

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${pos.coords.latitude}&lon=${pos.coords.longitude}&appid=${API_KEY}&units=metric`;

    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((data) => {

            document.querySelector('#city').textContent = data.name;
            document.querySelector('#temp').textContent = data.main.temp + '°C';
            document.querySelector('#main').textContent = data.weather[0].main;
            document.querySelector('#desc').textContent = data.weather[0].description;
            document.querySelector('#weather').classList.remove('hidden');

            console.log('data:', data)
        })
}

function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
}
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success, error);
}