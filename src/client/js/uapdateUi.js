    
export function updateModel(data) { 

// closing model events

   let modal = document.getElementById("myModal");
   var span = document.getElementsByClassName("close")[0];
   window.onclick = function(event) { 
    if (event.target == modal) {
      modal.style.display = "none";
    }
   }
   span.onclick = function() {
    modal.style.display = "none";
   }
   console.log(data);

//    open the modal 

   modal.style.display = "block";

//    grapping country image

   if (data.pixabayData.hits[0] != null) {
        document.getElementById("country-img").src = `${data.pixabayData.hits[0].webformatURL}`;
    } else {
        document.getElementById("country-img").src = `${data.pixabayDefaultData.hits[0].webformatURL}`;
    }

//    appending country info

    document.querySelector('#destination-name').innerHTML = `${data.geonamesData.geonames[0].toponymName}`;
    document.querySelector('#country-name').innerHTML = `${data.geonamesData.geonames[0].countryName}`;
    document.querySelector('#country-code').innerHTML = `${data.geonamesData.geonames[0].countryCode}`;
    document.querySelector('#time-zone').innerHTML = `${data.weatherbitData.timezone}`;
    document.querySelector('#population').innerHTML = `${data.geonamesData.geonames[0].population}`;
    document.querySelector('#destination-description').innerHTML = `${data.geonamesData.geonames[0].fcodeName}`;
    document.querySelector('#trip-day').innerHTML = `${data.appInputData.input.tripDay} Days`;
    document.querySelector('#depart-date').innerHTML = `${data.appInputData.input.departInput}`;
    document.querySelector('#return-date').innerHTML = `${data.appInputData.input.returnInput}`;

//    notes and number of travelers information
    if (data.appInputData.input.notesInput.length === 0) {
        document.querySelector('#trip-notes').innerHTML = 'You have no travel Notes.';
    } else {
        document.querySelector('#trip-notes').innerHTML = `${data.appInputData.input.notesInput}`;
    }


    if (data.appInputData.input.psngrInput.length === 0) {
        document.querySelector('#trip-pasgr').innerHTML = 'You did not set travellers number.';
    } else {
        document.querySelector('#trip-pasgr').innerHTML = `${data.appInputData.input.psngrInput}`;
    }
//    Weather Info Card

     const weatherWrapper = document.querySelector('.weather-wrapper');
     weatherWrapper.innerHTML = '';
     if (data.appInputData.input.tripDay > 15) {
        weatherWrapper.innerHTML = `<div class='weather-message'>Weather forecast info is only available for 15 days from the current date.</div>`
     } else {

        for (let i = data.appInputData.input.tripDay ; i < data.weatherbitData.data.length - 1; i++) {
         const weatherCard = document.createElement('div');
         weatherCard.className = "weather-card";
         weatherCard.insertAdjacentHTML('afterbegin', 
         `<img src="media/weatherbit-weather-icons/${data.weatherbitData.data[i].weather.icon}.png" alt="weather icon">
          <div class="temp-wrapper">
            <span id="temp-high" class="temp">${data.weatherbitData.data[i].high_temp}°C</span>
            <span id="temp-low" class="temp">${data.weatherbitData.data[i].low_temp}°C</span>
            <div id="temp-date" class="temp-date">${data.weatherbitData.data[i].datetime}</div>
          </div>`
        );
         weatherWrapper.append(weatherCard);
     }
 
    }



}