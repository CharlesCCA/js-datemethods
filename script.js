const header = 'WHAT TIME IS IT?!';
const subheader = 'JavaScript Date Methods';
document.querySelector('.header').innerHTML = header;
document.querySelector('.subheader').innerHTML = subheader;

const fullDate = new Date();

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const dayName = days[fullDate.getDay()];

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

const monthName = months[fullDate.getMonth()];

document.querySelector('.fullDate').innerHTML = fullDate;

document.querySelector('.day').innerHTML = dayName;
document.querySelector('.month').innerHTML = monthName;
document.querySelector('.date').innerHTML = fullDate.getDate();
document.querySelector('.fullYear').innerHTML = fullDate.getFullYear();
document.querySelector('.hours').innerHTML = fullDate.getHours();
document.querySelector('.minutes').innerHTML = fullDate.getMinutes();
document.querySelector('.seconds').innerHTML = fullDate.getSeconds();


