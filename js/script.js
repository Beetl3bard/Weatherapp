var search = document.querySelector('.search');
var cityInput=document.querySelector("#searchbox")
var newCard=document.querySelector(".card-container")

search.addEventListener("click", function(event) {
    event.preventDefault();
    var city = cityInput.value
    //console.log(city)
    weatherApi(city);
    fiveDay(city);

    cityInput.value="";
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
    var cityName=document.querySelector(".cityName")
        cityName.textContent=data.name + " " +date
    var currentTemp = document.querySelector(".currentTemp");
        currentTemp.textContent = "TEMP: "+data.main.temp
    var currentHumidity=document.querySelector('.currentHumidity')
        currentHumidity.textContent="HUMIDITY: "+data.main.humidity+"%"
    var windspeed = document.querySelector(".windspeed");
        windspeed.textContent ="WIND: "+ data.wind.speed + " mph"
  }
  
  var fiveDay = function(city) {
    
    var forcastUrl = "https://api.openweathermap.org/data/2.5/forecast?q="+city+"&appid=f9be46b1327a91395e209580a933a70d&units=imperial";
   
    // make a get request to url
    fetch(forcastUrl)
      .then(function(response) {
        // request was successful
        if (response.ok) {
          console.log(response);
          response.json().then(function(data) {
            forcastCard(data);
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
  
  var forcastCard=function(data){
      
      
     
    
      
      for (var index = 0; index < data.list.length; index++) {
         var anotherCard=document.createElement("div")
          anotherCard.classList="card"
        var newHeader=document.createElement("h4")
          newHeader.textContent=data.list[index].dt_txt
        var newTemp=document.createElement("p")
            newTemp.textContent="TEMP: " + data.list[index].main.temp
        var newWind=document.createElement("p") 
            newWind.textContent="WIND: " + data.list[index].wind.speed
        var newHumidity=document.createElement("p")
            newHumidity.textContent="HUMIDITY: "+data.list[index].main.humidity+"%"
        
        anotherCard.append(newHeader,newTemp,newWind,newHumidity)
          newCard.appendChild(anotherCard)
      }
      
  }
  