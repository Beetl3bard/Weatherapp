var search = document.querySelector('.search');
var cityInput=document.querySelector("#searchbox")

search.addEventListener("click", function(event) {
    event.preventDefault();
    var city = cityInput.value
    //console.log(city)
    weatherApi(city);
  });


var weatherApi = function(city) {
    
    var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=f315da550213c8aba9a006208bd196d6&units=imperial";
  
    // make a get request to url
    fetch(apiUrl)
      .then(function(response) {
        // request was successful
        if (response.ok) {
          console.log(response);
          response.json().then(function(data) {
            currentdate(data);
            console.log(data);
           
          });
        } else {
          alert('Error: API Endpoint Not Found');
        }
      })
      .catch(function(error) {
        alert("Unable to connect");
      });
  };

  function currentdate(data){
    var date= new Date(data.dt*1000).toLocaleDateString()
    var wind= data.wind.speed
    console.log(date);
    console.log(wind);

    var currentcity = document.querySelector(".currentcity");
    currentcity.textContent = "{"+date+"}"
    //windspeed.textContent = "{"+wind+ "}"
  }
  