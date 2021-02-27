const sidebarTag = document.querySelector("section.sidebar")
const heroTag = document.querySelector("section.hero")
const colorBarTag = document.querySelector("section.content div.colorBar")
const page1Tag = document.querySelector("section.content div.page1")
const page2Tag = document.querySelector("section.content div.page2")
const page3Tag = document.querySelector("section.content div.page3")
const sideBarTag = document.querySelector("section.sidebar div.marquee")


const orient = function() {
  heroTag.style.width = window.innerWidth - 96 + "px"
  heroTag.style.height = window.innerHeight - 80 + "px"
  colorBarTag.style.width = window.innerWidth - 96 + "px"
  page1Tag.style.width = window.innerWidth - 96 + "px"
  page1Tag.style.height = window.innerHeight - 80 + "px"
  page2Tag.style.width = window.innerWidth - 96 + "px"
  page2Tag.style.height = window.innerHeight - 80 + "px"
  page3Tag.style.width = window.innerWidth - 96 + "px"
  page3Tag.style.height = window.innerHeight - 80 + "px"
}






// sideBarTag.forEach(tag => {
//   const location = tag.style
// })

orient()
