async function getData() {
  const cityName = document.getElementById('city').value; 
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

    const result = await response.json(); 
    document.getElementById('temp').textContent = `${result.temp}°`;
    document.getElementById('w-speed').textContent = result.wind_speed;
    document.getElementById('humidity').textContent = result.humidity;


  } catch (error) {
    console.error(error);
  }
}

getData();
