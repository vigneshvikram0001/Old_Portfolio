let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector(".nav-list");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navlist.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.remove("bx-x");
  navlist.classList.remove("active");
};

const sr = ScrollReveal({
  distance: '40px',
  duration: 2600,
  reset: true
})
const st = ScrollReveal({
  distance: '50px',
  duration: 2800,
  reset: true
})
sr.reveal('.home-text', {delay: 300, origin:'left'})
sr.reveal('.about, .services, .portfolio, .blog', {delay: 10, origin:'bottom'})
sr.reveal('.newslatter, .content-h3', {delay: 150, origin:'bottom'})
sr.reveal('.about-img img', {delay: 170, origin:'left'})
st.reveal('.box:nth-child(1)', {delay: 100, origin:'left'})
st.reveal('.box:nth-child(2)', {delay: 100, origin:'bottom'})
st.reveal('.box:nth-child(3)', {delay: 100, origin:'left'})
sr.reveal('.about-text, .skills', { delay: 130, origin: 'bottom' })



