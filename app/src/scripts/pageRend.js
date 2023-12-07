// GENERER structure du DOCUMENT

var cvBody = document.getElementById("app");
cvBody.className = "cv-body"

// creer heading
var heading = document.createElement('div')
heading.id = "header"
cvBody.appendChild(heading)

// creer CV div
var cv = document.createElement('div')
cv.id = "cv"
cvBody.appendChild(cv)

// creer cote div avec contacts
var side = document.createElement('div');
side.id = "side"
cv.appendChild(side)

var contactsContainer = document.createElement('div');
contactsContainer.className = "contacts";
side.appendChild(contactsContainer)

// creer container pour competence
var competenceContainer = document.createElement("div")
competenceContainer.className = "competence"
side.appendChild(competenceContainer)



// creer main div  exp
var main = document.createElement('div');
main.id = "main"
cv.appendChild(main)
