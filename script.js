let project = document.querySelectorAll("div.project")
let projectGrid = document.querySelector("div.projectGrid")
let home = document.querySelector("div.home")
let button = document.querySelectorAll("div.button")
let expanded = document.querySelectorAll("div.expanded")
let about = document.querySelector("div.about")
let contact = document.querySelector("div.contact")
let bioButtons = document.querySelectorAll("div.bioButton")

home.addEventListener("mouseover", function(){
  home.style.cursor = "pointer"

});
home.addEventListener("click", function(){
  projectGrid.style.display = "grid"
  expanded.forEach((item, i) => {
    item.style.display = "none"
  });
})

bioButtons[0].addEventListener("click", function(){
  about.style.display = "block"
  contact.style.display = "none"
})
bioButtons[1].addEventListener("click", function(){
  about.style.display = "none"
  contact.style.display = "block"
})


//Changes mouse to pointer when hovering over project
project.forEach((item, i) => {
  item.addEventListener("mouseover", function(){
    item.style.cursor = "pointer"
  })
  item.addEventListener("click", function(){
    projectGrid.style.display = "none"
    let identity = item.id + "Expanded"
    console.log(identity);
    let expanded = document.getElementById(identity)
    expanded.style.display = "flex"
  })
});
