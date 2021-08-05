const navProjectsEl = document.getElementById("nav-projects-el");
const navBioEl = document.getElementById("nav-bio-el");
const navContactEl = document.getElementById("nav-contact-el");
const projectsDiv = document.getElementById("projects");
const bioDiv = document.getElementById("bio");
const contactDiv = document.getElementById("contact");

navProjectsEl.addEventListener("click", function() {
  //show Projects div
  projectsDiv.classList.remove('hidden');
  bioDiv.classList.add('hidden');
  contactDiv.classList.add('hidden'); 
});
navBioEl.addEventListener("click", function() {
  projectsDiv.classList.add('hidden');
  bioDiv.classList.remove('hidden');
  contactDiv.classList.add('hidden'); 
});
navContactEl.addEventListener("click", function() {
  projectsDiv.classList.add('hidden');
  bioDiv.classList.add('hidden');
  contactDiv.classList.remove('hidden'); 
});


