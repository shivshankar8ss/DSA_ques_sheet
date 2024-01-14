// script.js

async function getData() {
  const cityName = document.getElementById('city').value; // Assuming 'city' is the ID of your input element
  const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${cityName}`;

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '3e8382aa37mshc223f11d937e919p102949jsn6e6ee9ad7dda',
      'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
  };

  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const result = await response.json(); // Parse JSON data

    // Process the result and update HTML elements with weather information
    document.getElementById('temp').textContent = `${result.temp}°`;
    document.getElementById('w-speed').textContent = result.wind_speed;
    document.getElementById('humidity').textContent = result.humidity;

    // Update weather image source based on the response (adjust this based on your API's structure)
    // document.getElementById('sun').src = result.weather_icon_url;

  } catch (error) {
    console.error(error);
  }
}

getData();
