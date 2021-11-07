const { validate } = require("./validateForm");
const { dayDiffrence } = require("./dayDiff.js");
let modal = document.getElementById("myModal");


// submit Button





document.getElementById('submit').addEventListener('click' , (e)=>{
   event.preventDefault();


   // form data variables 

   let departInput = document.querySelector('#depart-input').value;
   let returnInput = document.querySelector('#return-input').value;
   let destinationInput = document.querySelector('#destination-input').value;
   let psngrInput = document.querySelector('#psngr-input').value;
   let notesInput = document.querySelector('#notes-input').value;
   var loadingDiv = document.getElementById("loading");



   let tripDay = dayDiffrence(departInput, returnInput);


   loadingDiv.classList.add("active");
   console.log(departInput);
   validate(departInput , returnInput , destinationInput);

   window.scroll({
        top: document.body.scrollHeight,
        behavior: 'smooth'
    });

    // modal.style.display = "block";
      
  //   fetch ('http://localhost:8000/all-apis', {
  //       method: 'POST',
  //       credentials: 'same-origin',
  //       headers: {
  //           'Content-Type': 'application/json'
  //       },
  //       body: JSON.stringify({destinationInput, remarksInput}) // Convert the input data of destination and remarks into a string for server
  //   })

  //   .then (res => {
  //       return res.json()
  //   })   
  //   .then (data => {
  //    console.log(data);
  // })

});

window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }



