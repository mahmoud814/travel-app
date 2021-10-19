// Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();
/* Dependencies */
const bodyParser = require('body-parser');
const cors = require('cors');
/* Middleware*/
// Here we are configuring express to use body-parser as middle-ware
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
// Cors for cross origin allowance
app.use(cors());
// spin up the server
const port = 8000;
app.listen( port , ()=>{
    console.log(`server running on localhost port: ${port}`)
});
// intialize the main project folder
app.use(express.static('weather-site'));

// create empty array act as endpoint for routes
projectData = {};

// intialize routs
// get route to send data 

app.get('/all',  (req, res) => {
    res.send(projectData);
  });
//  post route to recieve data and save 
app.post('/add' , (req ,res) => {
    let data = req.body;
    console.log('server side data ', data); 
    projectData["date"] = data.date;
    projectData["temp"] = data.temp;
    projectData["feel"] = data.feel;
});
  
  
