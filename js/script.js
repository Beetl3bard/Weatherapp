var search = document.querySelector('.search');
var cityInput=document.querySelector("#searchbox")

search.addEventListener("click", function(event) {
    event.preventDefault();
    var city = cityInput.value
    //console.log(city)
    weatherApi(city);
  });


var weatherApi = function(city) {
    
    var weatherUrl = "https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=f315da550213c8aba9a006208bd196d6&units=imperial";
  
    // make a get request to url
    fetch(weatherUrl)
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
    var cityNameTitle = data.name
    

    var cityName=document.querySelector(".cityName")
    cityName.textContent=cityNameTitle + " " +date
    // var currentcity = document.querySelector(".currentcity");
    // currentcity.textContent = date
    var windspeed = document.querySelector(".windspeed")
    windspeed.textContent = wind + " mph"
  }
  
  function coord(data){
      var lat = data.coord.lat
    console.log(lat);
  }
  var fiveDay = function(city) {
    
    var forcastUrl = "https:api.openweathermap.org/data/2.5/forecast?q="+city+"appid=f9be46b1327a91395e209580a933a70d";
   
    // make a get request to url
    fetch(forcastUrl)
      .then(function(response) {
        // request was successful
        if (response.ok) {
          console.log(response);
          response.json().then(function(data) {
            currentdate(data);
            console.log(data);
           
          });
        } else {
          alert( 'Endpoint Not Found');
        }
      })
      .catch(function(error) {
        alert("Unable to connect");
      });
  };
  fiveDay();