// submit Button


const handleSubmit = document.getElementById('submit');

handleSubmit.addEventListener('click' , (e)=>{


   event.preventDefault();
   window.scroll({
    top: document.body.scrollHeight,
    behavior: 'smooth'
   });


   // form data variables 

   let departInput = document.querySelector('#depart-input').value;
   let returnInput = document.querySelector('#return-input').value;
   let destinationInput = document.querySelector('#destination-input').value;
   let psngrInput = document.querySelector('#psngr-input').value;
   let notesInput = document.querySelector('#notes-input').value;
   let tripDay = Client.dayDiffrence(departInput, returnInput);

  //  loading process

   var loadingDiv = document.getElementById("loading");
   loadingDiv.classList.add("active");
   
  //   validate input data

   let validation = Client.validate(departInput , returnInput , destinationInput);

  // fetching data from api
    if (validation) {
      fetch ('http://localhost:8000/all-apis', {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({destinationInput, psngrInput , notesInput , tripDay}) // Convert the input data of destination and remarks into a string for server
    })
      .then (res => {
        return res.json()
      })   
      .then (data => {
        Client.updateModel(data);
        loadingDiv.classList.remove("active");
      })    
    } else {
      loadingDiv.classList.remove("active");
    }


    document.getElementById('depart-input').onchange = function() {
      var departSpan = document.getElementById("feed-depart");
      departSpan.classList.remove("inValid");
    };
    document.getElementById('return-input').onchange = function() {
      var returnSpan = document.getElementById("feed-return");
      returnSpan.classList.remove("inValid");
    };
    document.getElementById('destination-input').onchange = function() {
      var distSpan = document.getElementById("feed-dist");
      distSpan.classList.remove("inValid");
    };

      


    });


  module.exports = handleSubmit;
