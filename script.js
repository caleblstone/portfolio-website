let project = document.querySelectorAll("div.project")
let projects = document.querySelector("div.projects")
let projectGrid = document.querySelector("div.projectGrid")
let home = document.querySelector("div.home header")
let button = document.querySelectorAll("div.button")
let expanded = document.querySelectorAll("div.expanded")
let about = document.querySelector("div.about")
let contact = document.querySelector("div.contact")
let bioButtons = document.querySelectorAll("div.bioButton")
let bio = document.querySelector("div.bio")
let projectTitle = document.querySelector("div.proj header")
let aboutT = document.querySelector("div.bioAbout")
let contactT = document.querySelector("div.bioContact")
let infoMobile = document.querySelector("div.aboutMobile header")

if(window.innerWidth > 800){
  infoMobile.style.display = "none"
}

home.addEventListener("mouseover", function(){
  home.style.cursor = "pointer"

});
home.addEventListener("click", function(){
  projectGrid.style.display = "grid"
  expanded.forEach((item, i) => {
    item.style.display = "none"
  });
  projectTitle.style.display = "none"
  
  home.style.textDecoration = "underline"
  home.innerHTML = "Caleb Stone"

  if(window.innerWidth < 800){
    infoMobile.style.display = "block"
  }
})

bioButtons[0].addEventListener("click", function(){
  bio.style.display = "none"
  projects.style.display = "block"
})
bioButtons[1].addEventListener("click", function(){
  about.style.display = "block"
  contact.style.display = "none"
  aboutT.style.textDecoration = "underline"
  contactT.style.textDecoration = "none"
})
bioButtons[2].addEventListener("click", function(){
  about.style.display = "none"
  contact.style.display = "block"
  aboutT.style.textDecoration = "none"
  contactT.style.textDecoration = "underline"
})


//Changes mouse to pointer when hovering over project
project.forEach((item, i) => {
  item.addEventListener("mouseover", function(){
    // item.style.cursor = "pointer"
  })
  item.addEventListener("click", function(){
    if (item.classList.contains("inProgress")) {

    }
    if (item.classList.contains("done")) {
      projectGrid.style.display = "none"
      let identity = item.id + "Expanded"
      let expanded = document.getElementById(identity)
      expanded.style.display = "flex"
      projectTitle.style.display = "block"
      infoMobile.style.display = "none"
      let name = item.querySelector("div.name").textContent
      projectTitle.innerHTML = name
      projectTitle.style.color = "#FE4818"
      home.style.textDecoration = "none"
      home.innerHTML = "●"
    }
  })
});

infoMobile.addEventListener("click", function(){
  bio.style.display = "flex"
  projects.style.display = "none"

})