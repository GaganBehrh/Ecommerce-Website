function showContactPage() {
  window.location.assign("contact.html");
}
function showNewsPage() {
  window.location.assign("news.html");
}
function showAboutPage() {
  window.location.assign("about.html");
}
let contact = document.getElementById("contact");
contact.addEventListener("click", showContactPage);
let news = document.getElementById("news");
news.addEventListener("click", showNewsPage);

let about = document.getElementById("about");
about.addEventListener("click", showAboutPage);
