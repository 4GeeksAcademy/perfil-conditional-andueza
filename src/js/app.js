import "../style/index.css";

/**
 *  EDIT ONLY INSIDE THIS RENDER FUNCTION
 *  This function is called every time the user changes types or changes any input
 */
function render(variables = {}) {
  console.log("These are the current variables: ", variables);

  // Cover
  let cover = `<div class="cover"><img src="${variables.background}" /></div>`;
  if (variables.includeCover === false) {
    cover = "<div class='cover'></div>";
  }

  // Social Media position
  let socialPos = "position-right";
  if (variables.socialMediaPosition === "position-left") {
    socialPos = "position-left";
  }

  // Social Media links
  let liTwitter = "";
  if (variables.twitter) {
    liTwitter = `<li><a href="https://twitter.com/${variables.twitter}"><i class="fab fa-twitter"></i></a></li>`;
  }

  let liGithub = "";
  if (variables.github) {
    liGithub = `<li><a href="https://github.com/${variables.github}"><i class="fab fa-github"></i></a></li>`;
  }

  let liLinkedin = "";
  if (variables.linkedin) {
    liLinkedin = `<li><a href="https://linkedin.com/in/${variables.linkedin}"><i class="fab fa-linkedin"></i></a></li>`;
  }

  let liInstagram = "";
  if (variables.instagram) {
    liInstagram = `<li><a href="https://instagram.com/${variables.instagram}"><i class="fab fa-instagram"></i></a></li>`;
  }

  // Nombre y Apellido
  let fullName = "Lucy Boilett";
  if (variables.name || variables.lastName) {
    fullName = `${variables.name || ""} ${variables.lastName || ""}`.trim();
  }

  // Rol
  let role = "Web Developer";
  if (variables.role) {
    role = variables.role;
  }

  // Ubicación
  let location = "Miami, USA";
  if (variables.city || variables.country) {
    location = `${variables.city || ""}${
      variables.city && variables.country ? ", " : ""
    }${variables.country || ""}`;
  }

  // Render final
  document.querySelector("#widget_content").innerHTML = `
    <div class="widget">
      ${cover}
      <img src="${variables.avatarURL}" class="photo" />
      <h1>${fullName}</h1>
      <h2>${role}</h2>
      <h3>${location}</h3>
      <ul class="${socialPos}">
        ${liTwitter}
        ${liGithub}
        ${liLinkedin}
        ${liInstagram}
      </ul>
    </div>
  `;
}

/**
 * Don't change any of the lines below, here is where we do the logic for the dropdowns
 */
window.onload = function() {
  window.variables = {
    includeCover: true,
    background: "https://images.unsplash.com/photo-1511974035430-5de47d3b95da",
    avatarURL: "https://randomuser.me/api/portraits/women/42.jpg",
    socialMediaPosition: "position-left",
    twitter: null,
    github: null,
    linkedin: null,
    instagram: null,
    name: null,
    lastName: null,
    role: null,
    country: null,
    city: null
  };
  render(window.variables); // render the card for the first time

  document.querySelectorAll(".picker").forEach(function(elm) {
    elm.addEventListener("change", function(e) {
      const attribute = e.target.getAttribute("for");
      let values = {};
      values[attribute] =
        this.value == "" || this.value == "null"
          ? null
          : this.value == "true"
          ? true
          : this.value == "false"
          ? false
          : this.value;
      render(Object.assign(window.variables, values));
    });
  });
};
