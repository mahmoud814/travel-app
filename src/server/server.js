// Bring window.fetch to Node.js
const fetch = require('node-fetch');
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
    console.log(`server running on localhost port: ${port} ${process.env.geonamesUserName}`)
});
// intialize the main project folder
app.use(express.static('dist'));
app.get('/', function (req, res) {
    res.sendFile('dist/index.html');
});

// Server Test and Troubleshooting
const mockAPIResponse = require('./mockAPI.js');
app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
});

// Dotenv Package (to setup environment variables)
const dotenv = require('dotenv');
dotenv.config();

// APIs
app.post('/all-apis', (req, res) => {

    // User Input Variable
        let appInputData = {
            input: req.body
        };
        console.log(appInputData);

    
        // Log: User Location Input
        console.log(`user destination input: ${req.body.destinationInput}`);
    
        // Geonames API Variable
        const geonamesAPI = (`http://api.geonames.org/searchJSON?name=${req.body.destinationInput}&maxRows=1&username=${process.env.geonamesUserName}`);
    
        // Get Geonames Data
        fetch (geonamesAPI)
        .then (res => res.json())
        .then (geonamesData => {
            // console.log(geonamesData);
    
            // Validation: Location
            if (geonamesData.geonames[0] == null) {
                res.status(404).json({locValidation: 'Invalid location name, please re-enter.'});
                return;
            }
    
            // Weatherbit API Variable
            const weatherbitAPI = `https://api.weatherbit.io/v2.0/forecast/daily?&lat=${geonamesData.geonames[0].lat}&lon=${geonamesData.geonames[0].lng}&key=${process.env.weatherbitApiKey}`;
    
            // Get Weatherbit Data
            fetch (weatherbitAPI)
            .then (res => res.json())
            .then (weatherbitData => {
                // console.log(weatherbitData);
    
                // Pixabay Dynamic Data API Variable
                const pixabayAPI = `https://pixabay.com/api/?key=${process.env.pixabayApiKey}&q=${req.body.destinationInput}&image_type=photo&editors_choice=true&per_page=3`;
    
                // Get Pixabay Dynamic Data
                fetch (pixabayAPI)
                .then (res => res.json())
                .then (pixabayData => {
                    console.log(pixabayData);
    
                    // Pixabay Default Data API Variable
                    const pixabayDefaultAPI = `https://pixabay.com/api/?key=${process.env.pixabayApiKey}&q=travel&image_type=photo&editors_choice=true&per_page=3`;
    
                    // Get Pixabay Default Data
                    fetch (pixabayDefaultAPI)
                    .then (res => res.json())
                    .then (pixabayDefaultData => {
                        // console.log(pixabayDefaultData);
    
                        // Sent All Data
                        res.send({appInputData, geonamesData, weatherbitData, pixabayData, pixabayDefaultData});
                    })
                })
            })
        })
    
        .catch (err => {
            res.send(err);
        });
    });
  
  
