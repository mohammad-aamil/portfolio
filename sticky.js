
export function stickyNavbar() {
    
    //sticky navbar
    window.addEventListener("scroll",function () {
        let header = document.querySelector(".bg-color")
        header.classList.toggle("sticky", window.scrollY> 0)
      })
}
stickyNavbar()

export function downloadCV() {
    //download cv
let link = document.querySelector("#link")

link.addEventListener("click", function (e) {
  e.preventDefault();
  window.location.href = "images/Resume.pdf";
})
}
downloadCV()