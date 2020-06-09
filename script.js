let projects = document.querySelectorAll(".project-card");

function slide(cardId) {
  let projectCard = projects[cardId];
  let cardProperties = getComputedStyle(projectCard);

  if (cardProperties.zIndex === "5") {
    return;
  }

  for (let i = 0; i < projects.length; i++) {
    if (projects[i].classList.contains("project-animation-right")) {
      projects[i].classList.remove("project-animation-right")
    }
  }

  for (let i = 0; i < projects.length; i++) {
    if (projects[i].classList.contains("project-animation-left")) {
      projects[i].classList.remove("project-animation-left")
    }
  }
  if (cardId == 0 || cardId == 1) {
    projectCard.classList.add("project-animation-left")
  } else {
    projectCard.classList.add("project-animation-right")
  }

  setTimeout(function changeFocus() {
    if (cardId === 0) {
      projects[cardId].style.zIndex = "5";
      projects[1].style.zIndex = "3";
      projects[2].style.zIndex = "2";
      projects[3].style.zIndex = "1";
    }
  
    if (cardId === 1) {
      projects[0].style.zIndex = "3";
      projects[cardId].style.zIndex = "5";
      projects[2].style.zIndex = "2";
      projects[3].style.zIndex = "1";
    }
  
    if (cardId === 2) {
      projects[0].style.zIndex = "2";
      projects[1].style.zIndex = "3";
      projects[cardId].style.zIndex = "5";
      projects[3].style.zIndex = "1";
    }
  
    if (cardId === 3) {
      projects[0].style.zIndex = "1";
      projects[1].style.zIndex = "2";
      projects[2].style.zIndex = "3";
      projects[cardId].style.zIndex = "5";
    }
  }, 300);
}
