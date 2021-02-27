const outputTag = document.querySelector("section.content div.colorBar")
const colorTags = document.querySelectorAll("section.content div.colorBar div.orient div.colors div")




colorTags.forEach(tag => {
  tag.addEventListener("click", function(){
    outputTag.style.backgroundColor = this.getAttribute("data-backgroundColor")
    outputTag.style.color = this.style.color

    if (this.getAttribute("data-backgroundColor") == "#1A1514") {
      outputTag.style.color = "#F4F4F1"
    }

    colorTags.forEach(tag => {
      tag.classList.remove("selected")
    })

    this.classList.add("selected")
  })
})
