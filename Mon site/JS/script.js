//========== Animation de la nav barre au scroll ==========
const navigation = document.getElementsByClassName("nav-desk");
console.log(navigation);
console.log(navigation[0].classList);

window.addEventListener("scroll", () => {
  for (i = 0; i < navigation.length; i++) {
    if (window.scrollY > 90) {
      navigation[i].classList.add("anim-nav-desk");
    } else {
      navigation[i].classList.remove("anim-nav-desk");
    }
  }
});
//====================

VanillaTilt.init(document.querySelector(".selfie"), {
  max: 25,
  speed: 1500,
  reverse: true,
});
