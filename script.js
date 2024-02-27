const header = 'WHAT TIME IS IT?!';
const subheader = 'JavaScript Date Methods';
document.querySelector('.header').innerHTML = header;
document.querySelector('.subheader').innerHTML = subheader;
document.querySelector('.updateButton').innerHTML = 'Update Time';

function updateTime() {
  const fullDate = new Date();

  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  const dayName = days[fullDate.getDay()];

  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

  const monthName = months[fullDate.getMonth()];
  
  const shortDate = monthName + ' ' + fullDate.getDate() + ', ' + fullDate.getFullYear();

  document.querySelector('.fullDate').innerHTML = fullDate;

  document.querySelector('.day').innerHTML = dayName;
  document.querySelector('.month').innerHTML = monthName;
  document.querySelector('.date').innerHTML = fullDate.getDate();
  document.querySelector('.fullYear').innerHTML = fullDate.getFullYear();
  document.querySelector('.hours').innerHTML = fullDate.getHours();
  document.querySelector('.minutes').innerHTML = fullDate.getMinutes();
  document.querySelector('.seconds').innerHTML = fullDate.getSeconds();
  
  document.querySelector('.shortDate').innerHTML = shortDate;
}

updateTime();

function changeButtonColor() {
  document.querySelector('.updateButton').style.backgroundColor = 'linen';
  document.querySelector('.updateButton').style.color = 'orangered';
}

function changeButtonColorBack() {
  document.querySelector('.updateButton').style.backgroundColor = 'orangered';
  document.querySelector('.updateButton').style.color = 'linen';
}

document.querySelector('.updateButton').addEventListener('click', updateTime);
document.querySelector('.updateButton').addEventListener('mouseover', changeButtonColor)
document.querySelector('.updateButton').addEventListener('mouseout', changeButtonColorBack)
