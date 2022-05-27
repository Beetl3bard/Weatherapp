var citySelector = document.querySelector('searchboxsubmit');

citySelector.addEventListener("click", function() {
    console.log('clicked')
  });


var weatherApi = function() {
    
    var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=memphis&appid=f315da550213c8aba9a006208bd196d6&units=imperial";
  
    // make a get request to url
    fetch(apiUrl)
      .then(function(response) {
        // request was successful
        if (response.ok) {
          console.log(response);
          response.json().then(function(data) {
            console.log(data);
            
          });
        } else {
          alert('Error: API Endpoint Not Found');
        }
      })
      .catch(function(error) {
        alert("Unable to connect to API");
      });
  };
weatherApi();