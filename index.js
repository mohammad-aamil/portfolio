import {lightDark} from "./lightDark.js";
import {menuToggle} from "./menuToggle.js";
import {stickyNavbar} from "./sticky.js";
import {downloadCV} from "./sticky.js";
// import { content1, content2, education, skills } from "./main.js";

//text animation

let textDisplay = document.getElementById('text')
let phrases = ['deginer', 'frontend developer.', ]
let i = 0
let j = 0 
let currentPhrase = []
let isDeleting = false
let isEnd = false

function loop () {
  isEnd = false
  textDisplay.innerHTML = currentPhrase.join('')

  if (i < phrases.length) {

    if (!isDeleting && j <= phrases[i].length) {
      currentPhrase.push(phrases[i][j])
      j++
      textDisplay.innerHTML = currentPhrase.join('')
    }

    if(isDeleting && j <= phrases[i].length) {
      currentPhrase.pop(phrases[i][j])
      j--
      textDisplay.innerHTML = currentPhrase.join('')
    }

    if (j == phrases[i].length) {
      isEnd = true
      isDeleting = true
    }

    if (isDeleting && j === 0) {
      currentPhrase = []
      isDeleting = false
      i++
      if (i === phrases.length) {
        i = 0
      }
    }
  }
  let spedUp = Math.random() * (80 -50) + 50
  let normalSpeed = Math.random() * (100 -50) + 100
  let time = isEnd ? 2000 : isDeleting ? spedUp : normalSpeed
  setTimeout(loop, time)
}

loop()

//scrollTop Navbar fixed

// $(document).ready(function(){
//   $(window).bind('scroll', function() {
//   var navHeight = $( window ).height() - 70;
//     if ($(window).scrollTop() > navHeight) {
//       $('header').addClass('fixed');
//     }
//     else {
//       $('header').removeClass('fixed');
//     }
//  });
// });




// let switchIcon = document.querySelector("#switchIcon")
// switchIcon.addEventListener("click", function () {
//     document.body.classList.toggle("dark-theme")
//     // if (document.body.classList.contains("dark-theme")) {
//     //     icon.className = "fas fa-sun"
//     // }else{
//     //     icon.className = "fas fa-moon"
//     // }
// })

// let loader = document.querySelector("#preloader")
// window.addEventListener("load", function () {
//     loader.style.display = "none"
// })