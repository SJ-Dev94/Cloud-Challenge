async function postData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    }
    );
    return response.json(); // parses JSON response into native JavaScript objects
  } 
  
  window.addEventListener('DOMContentLoaded', (event) => {
    let count = 1;
    postData(`https://cloudresumechallenge-apim.azure-api.net/cloudresumechallenge/visits/${count}`, {count: count} )
    .then((data) => {
      console.log(data); // JSON data parsed by `data.json()` call
      console.log('sent');
    });
});