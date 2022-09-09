// console.log(navigator.geolocation)

// let latitude, longitude

// let getUserLocation = () => {
//  if (navigator.geolocation) {
//   navigator.geolocation.getCurrentPosition(getWeatherAPI)
//   // navigator.geolocation.getCurrentPosition((position) => {
//   //  latitude = position.coords.latitude
//   //  longitude =  position.coords.longitude
//   //  // console.log(position)
//   // })

//  }else{
//   alert('Geolocation is not supported')

//  }
// }

// let apiKey= '9c324df5a674b284755eae3dadb30b0f'
// let baseURL = 'https://api.openweathermap.org/data/2.5/weather'

// let getWeatherAPI  = (position) => {
//  fetch(
//   '${baseURL}?lat= ${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}'
//  )
// }

// let menu = document.getElementById('menu');

// let navBarToggle = document.getElementById('hamburger');

// let hamburger = document.getElementById('hamburger');

// let close = document.getElementById('close');

// navBarToggle.addEventListener('click', () => {
//     navBarToggle.classList.add('hide-hamburger');
//     menu.classList.toggle('active');
//     close.classList.toggle('show-close');
//     // logo.classList.add('logo-inactive');
// })

// close.addEventListener('click', () => {
//   navBarToggle.classList.remove('hide-hamburger')
//   menu.classList.toggle('active')
//   close.classList.toggle('show-close');
//   // logo.classList.remove('logo-inactive')
// })

const menuIcon = document.querySelector(".hamburger");
const navBar = document.querySelector(".menu");
const times = document.getElementById("close");

menuIcon.addEventListener("click", () => {
    menuIcon.classList.toggle("deactive");
  navBar.classList.toggle("show-menu");
  times.classList.toggle("show-close");
});

times.addEventListener("click", () => {
  navBar.classList.toggle("show-menu");
  menuIcon.classList.toggle("deactive")
  times.classList.toggle("show-close");

});

let landings = document.getElementById("landings");
let subLanding = document.getElementById("sub-landing");

landings.addEventListener("click", () => {
  subLanding.classList.toggle("landing-menu");
  subLanding.classList.toggle("sub-landing");
});

let pages = document.getElementById("pages");
let subPages = document.getElementById("sub-pages");

pages.addEventListener("click", () => {
  subPages.classList.toggle("pages-menu");
  subPages.classList.toggle("sub-pages");
});
