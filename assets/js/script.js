'use strict';

const toggleFunc = function (elem) { elem.classList.toggle("active"); }; 

// const desktop_menu = document.querySelector("[data-toggle]");
// const mobile_menu = document.querySelector("[data-toggle-navbar]");
// const overlay = document.querySelector("[data-overlay]");
// const navbar = document.querySelector("[data-navbar]");

// desktop_menu.addEventListener("click", function() {
//   toggleFunc(navbar);
//   toggleFunc(overlay);
// });

// mobile_menu.addEventListener("click", function() {
//   toggleFunc(navbar);
//   toggleFunc(overlay);
// });

const dep_city_select = document.querySelector('[data-dep-city-select]');
const dep_city_select_box = document.querySelector('[data-dep-city-box]');
const dep_city = document.querySelectorAll('.calc-select__dropdown-option-wrap');
const city = document.querySelector('.city');


const dep_port_select = document.querySelector('.calc-port-select__btn');
const dep_port_select_box = document.querySelector('.calc-port-select__dropdown');
const dep_port = document.querySelectorAll(".calc-port-select__dropdown-option-wrap");
const port = document.querySelector(".port");

const mobile_dep_city_select = document.querySelector('.mobile-city-select');
const mobile_dep_city_dropdwn = document.querySelector('.mobile-city-dropdown');
const mobile_dep_city_options = document.querySelectorAll('.mobile-city-dropdown-option');
const mobile_dep_port_select = document.querySelector('.mobile-port-select');
const mobile_dep_port_dropdwn = document.querySelector('.mobile-port-dropdown');
const mobile_dep_port_options = document.querySelectorAll('.mobile-port-dropdown-option');
const depart_city = document.querySelector('.depart-city');
const depart_port = document.querySelector('.depart-port');


dep_city_select.addEventListener("click", function() {
  dep_city_select_box.classList.toggle("active");
});

dep_port_select.addEventListener("click", function() {
  dep_port_select_box.classList.toggle("active");
});


dep_city.forEach(o => {
  o.addEventListener("click", function() {
    city.innerHTML = o.querySelector("label").innerHTML;
    dep_city_select_box.classList.remove("active");
  });
});

dep_port.forEach(o => {
  o.addEventListener("click", function() {
    port.innerHTML = o.querySelector("label").innerHTML;
    dep_port_select_box.classList.remove("active");
  });
});


mobile_dep_city_select.addEventListener("click", function() {
  mobile_dep_city_dropdwn.classList.toggle("active");
});



mobile_dep_port_select.addEventListener("click", function() {
  mobile_dep_port_dropdwn.classList.toggle("active");
});

mobile_dep_city_options.forEach(o => {
  o.addEventListener("click", function() {
    depart_city.innerHTML = o.querySelector("label").innerHTML;
    mobile_dep_city_dropdwn.classList.remove("active");
  });
});

mobile_dep_port_options.forEach(o => {
  o.addEventListener("click", function() {
    depart_port.innerHTML = o.querySelector("label").innerHTML;
    mobile_dep_port_dropdwn.classList.remove("active");
  })
});