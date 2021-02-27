//When I scroll down the page, at a certain point...
//Add a class to the header that turns it white

const headerTag = document.querySelector("header")

const toggleHeader = function () {
  const pixels = window.pageYOffset
}

const fadeBox = function(){
  const pixels = window.pageYOffset
  const alpha = Math.min(pixels / 3000, 0.7)

  headerTag.style.boxShadow = `0 0 10px rgba(0,0,0, ${alpha})`
}

fadeBox()

document.addEventListener("scroll", function(){
  fadeBox()
})
