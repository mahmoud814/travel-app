// submit Button

document.getElementById('submit').addEventListener('click' , makeRequests);
function makeRequests (e){
    window.scroll({
        top: document.body.scrollHeight,
        behavior: 'smooth'
    });
    var loadingDiv = document.getElementById("loading");
    loadingDiv.classList.add("active");
//     e.preventDefault();
//     const destinationInput = document.getElementById('zip').value;
//     const remarksInput = document.getElementById('feelings').value;
//     console.log(destinationInput);
//     fetch ('http://localhost:8000/all-apis', {
//         method: 'POST',
//         credentials: 'same-origin',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({destinationInput, remarksInput}) // Convert the input data of destination and remarks into a string for server
//     })

//     .then (res => {
//         return res.json()
//     })   
//     .then (data => {
//      console.log(data);
//   })

}