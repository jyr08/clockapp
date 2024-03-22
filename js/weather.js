// Query String 
// https://api.openweathermap.org/data/2.5/weather?q=tacoma&appid=f2f85762267ef18d0df71e18ec9f3737

// variables
const url = 'https://api.openweathermap.org/data/2.5/weather';
// const city = 'vacouver';
const zip = 99004;
const APIKEY = 'f2f85762267ef18d0df71e18ec9f3737';
const units = 'imperial';

// the data
const dataSource = `${url}?zip=${zip}&appid=${APIKEY}&units=${units}`;

// fetch it
fetch(dataSource)
  .then( response => response.json() )
  .then( myData => {
  
  console.log( myData );
  console.log( myData.name );
  console.log( myData.weather );
  console.log( myData.weather[0] );
  console.log( myData.weather[0].description );
  console.log( myData.main.temp );
  
  //  get stuff
  const body = document.querySelector('body');
  const h1 = document.querySelector('h1');
  const h2 = document.querySelector('h2');
  const icon = document.querySelector('img');
  
  //   set stuff
//   h1.textContent = myData.main.temp;
//   h2.textContent = myData.name;
  
  // template
  const template = `
      <img src="http://openweathermap.org/img/wn/${myData.weather[0].icon}@2x.png" />  
      
      <h1> ${myData.main.temp} </h1>
      <h2> ${myData.name} </h2>
      `
  
  //   display template
  body.insertAdjacentHTML( "afterbegin" , template );
  
});
  