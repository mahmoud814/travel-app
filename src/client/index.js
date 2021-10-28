import './styles/main.scss';

// global variables 
const baseURL = "http://api.openweathermap.org/data/2.5/weather?zip=";
const apiKey ="&appid=fd16d6d32ab7a7814aed0df675cac427&units=imperial";


//Get the date
let d = new Date();
let newDate = (d.getMonth() + 1) + '/'+ d.getDate()+'/'+ d.getFullYear();



// starting data 

document.getElementById('date').innerHTML = "Date : NO DATA YET";
document.getElementById('temp').innerHTML = "Temperature : NO DATA YET";
document.getElementById('feel').innerHTML = "I feel : NO DATA YET";

// event listener for generate weather data on click
document.getElementById('generate').addEventListener('click' , makeRequests);
function makeRequests (e){
    e.preventDefault();
    const destinationInput = document.getElementById('zip').value;
    const remarksInput = document.getElementById('feelings').value;
    console.log(destinationInput);
    fetch ('http://localhost:8007/all-apis', {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({destinationInput, remarksInput}) // Convert the input data of destination and remarks into a string for server
    })

    .then (res => {
        return res.json()
        console.log(res);
    })

}
//  Function to get server data
const getServerData = async ()=> {
  const request = await fetch('/all');
  try {
    const allData = await request.json()
    console.log(allData)
    document.getElementById('date').innerHTML = `Date : ${allData.date}`;
    document.getElementById('temp').innerHTML = `Temperature : ${allData.temp}`;
    document.getElementById('feel').innerHTML = `I feel : ${allData.feel}`  ;
  }
  catch (error) {
    console.log("error", error);
  }

}



//  Function to POST data 

const postWeatherData = async (url , data )=>{
    const req = await fetch(url, {
        method: "POST",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          date: data.date,
          temp: data.temp,
          feel: data.feel
        })
      })

      try {
        const successReq = await req;
        return successReq;
      }
      catch (error) {
        console.log(error);
      }
}

//  function to get weather data 
const getWeaterData = async (baseURL,zipCode,apiKey)=>{
    const req =  await fetch(baseURL+zipCode+apiKey);
    console.log(req);
    try {
        const data = req.json();
        return data;        
    } catch (error) {
        console.log(error);
        
    }
}