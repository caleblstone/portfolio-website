const powTag = document.querySelector("svg.powcircle")
const cupTags = document.querySelectorAll("section.buyCups div")
const sectionTag = document.querySelector("section.buyCups")
const counterTag = document.querySelectorAll("section.cupCounter div")
const resetTag = document.querySelector("a div.reset")
let x, y

let mouse = false

let counter1 = 0
let counter2 = 0
let counter3 = 0

resetTag.addEventListener("click", function(){
  counter1 = 0
  counter2 = 0
  counter3 = 0
  counterTag[0].innerHTML = counter1
  counterTag[1].innerHTML = counter2
  counterTag[2].innerHTML = counter3
  console.log("yeah this is working");
})

cupTags.forEach(image => {
  image.addEventListener("mouseenter", function() {
    mouse = true
    const rect = image.getBoundingClientRect()

    let top = rect.top
    let left = rect.left
    let w = rect.width
    let h = rect.height

    let centerW = (w / 2) + left
    let centerH = (h / 2) + top

    powTag.style.left = centerW - ((innerWidth * .24)/2)
    powTag.style.top = centerH - ((innerWidth * .24)/2)

    // powTag.style.transition = "left .5s";

    console.log();
  })
})

cupTags[0].addEventListener("click", function(){
  counter1 = counter1 + 1
  counterTag[0].innerHTML = counter1
})
cupTags[1].addEventListener("click", function(){
  counter2 = counter2 + 1
  counterTag[1].innerHTML = counter2
})
cupTags[2].addEventListener("click", function(){
  counter3 = counter3 + 1
  counterTag[2].innerHTML = counter3
})
