const currentyear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified")

const today = new Date();

// copyright year actual year
currentyear.textContent = today.getFullYear();

// Last modified time 

lastModified.textContent = "Last Modification: " + document.lastModified

