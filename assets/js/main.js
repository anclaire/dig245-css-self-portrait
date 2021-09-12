
/* javascript */

var bauhaus = `

Staaatliches Bauhaus (1919-1933)

      ..-""T-..
    ,'__   | __ '.
   /   N|  | |N   !
  :     '  | '    :
  [      __|      ]
  :               :
   !   \______/  /
    '.    __   ,'
      "-"!..--"

`;

console.log(bauhaus);

console.log('My potrait looks really sad, but that was an accident. Dont know how to make it look happier...');
console.log('total number of HTML elements:');
console.log(document.querySelectorAll('*').length);

console.log('I found the x y coordinate help thanks to this Gavs Blog site: https://www.gavsblog.com/blog/get-the-current-position-of-the-mouse-from-a-javascript-event');
document.addEventListener('mousemove', (event) => {
});

document.addEventListener('mousemove', (event) => {
	console.log(`Mouse X: ${event.clientX}, Mouse Y: ${event.clientY}`);
});
