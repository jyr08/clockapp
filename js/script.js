// Get link/button/toggle
// Get the <body>

const lightDark = document.querySelector('a');
const body = document.querySelector('body');

// SETTING

lightDark.addEventListener('click', () => { 
  
// add 'dark' class

body.classList.toggle('dark');
  
});


