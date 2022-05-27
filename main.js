let content1 = document.getElementById("content1");
let content2 = document.getElementById("content2");
// let content3 = document.getElementById("content3");

// let btn1 = document.getElementById("btn1");
// let btn2 = document.getElementById("btn2");
// // let btn3 = document.getElementById("btn3");
// let textColors = {
//  dark : "#ff014f",
//  darkSec : "#fff",
// light : "#6a26da",
//  lightSec : "#333"
// }
function education(){
    content1.style.transform = "translateX(0)";
    content2.style.transform = "translateX(101%)";
    // content3.style.transform = "translateX(100%)";

    //     if (document.body.classList.contains("dark")) {
    //       btn1.style.color = textColors.dark
    //       btn2.style.color = textColors.darkSec
    // }else{
    //   btn1.style.color = textColors.light
    //   btn2.style.color = textColors.lightSec
    // }
    // btn1.style.color = dark
    // btn2.style.color = "#000"
    // btn3.style.color = "#000"
    content1.style.transitionDelay = "0.3s"
    content2.style.transitionDelay = "0s"
    // content3.style.transitionDelay = "0s"
}
function skills(){
    content1.style.transform = "translateX(101%)";
    content2.style.transform = "translateX(0)";
    // content3.style.transform = "translateX(100%)";

//     if (document.body.classList.contains("dark")) {
//       btn1.style.color = textColors.darkSec
//       btn2.style.color = textColors.dark
// }else{
//   btn1.style.color = textColors.lightSec
//   btn2.style.color = textColors.light
// }
    // btn3.style.color = "#000"
    content1.style.transitionDelay = "0.3s"
    content2.style.transitionDelay = "0.3s"
    // content3.style.transitionDelay = "0s"
}
// function openJS(){
//     content1.style.transform = "translateX(100%)";
//     content2.style.transform = "translateX(100%)";
//     content3.style.transform = "translateX(0)";
//     btn3.style.color = "#9c46ff"
//     btn2.style.color = "#000"
//     btn1.style.color = "#000"
//     content1.style.transitionDelay = "0s"
//     content2.style.transitionDelay = "0s"
//     content3.style.transitionDelay = "0.3s"
// }

// export { content1, content2, education, skills };