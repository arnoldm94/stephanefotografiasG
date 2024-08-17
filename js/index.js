/* Home y Aboutme onclick function */
const aboutme_button = document.getElementById("aboutmeclick");
const home_button = document.getElementById("homeclick");

const addclassaboutme = (e) => {
  aboutme_button.classList.add("active");
  home_button.classList.remove("active");
};
const addclasshome = (e) => {
  home_button.classList.add("active");
  aboutme_button.classList.remove("active");
};

aboutme_button.addEventListener("click", addclassaboutme);
home_button.addEventListener("click", addclasshome);

/* FIN ... Home y Aboutme onclick function */

/* inicio seccion Scroll Function */

const smallerclass = () => {
  let navbarSteph = document.getElementById("navbarSteph");
  let logosteph = document.getElementById("logosteph");
  if (window.scrollY > 750) {
    navbarSteph.setAttribute("class", "navbar navbar-expand-lg navbar-light bg-light smaller");
    logosteph.setAttribute("class", "d-inline-flex p-2 smallerlogo");
  } else {
    navbarSteph.setAttribute("class", "navbar navbar-expand-lg navbar-light bg-light");
    logosteph.setAttribute("class", "d-inline-flex p-2");
  }
};

window.addEventListener("scroll", smallerclass);

/* final seccion Scroll Function */

/*Inicio de link a googlemaps REVIEWS */

const review1 = document.getElementById("review1");
const review2 = document.getElementById("review2");
const review3 = document.getElementById("review3");

const linktogooglereviews = (e) => {
  window.open(
    (location.href =
      "https://www.google.es/maps/place/Stephane+Fotograf%C3%ADa/@43.3251545,-2.9859631,17z/data=!4m8!3m7!1s0xd4e5b42538ba275:0x2144770ca517170e!8m2!3d43.3251506!4d-2.9833882!9m1!1b1!16s%2Fg%2F11y1fbmxr4?hl=es&entry=ttu"),
    "_blank"
  );
};

review1.addEventListener("click", linktogooglereviews);
review2.addEventListener("click", linktogooglereviews);
review3.addEventListener("click", linktogooglereviews);
