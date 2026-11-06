const menuButton = document.getElementById("menuButton");
const navigation = document.getElementById("navigation");
menuButton.addEventListener("click", function() {
    navigation.classList.toggle("active");
});
const themeButton = document.getElementById("themeButton");
themeButton.addEventListener("click", function() {
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")) {
        themeButton.textContent = "☀";
    } else {
        themeButton.textContent = "☾";
    }
});
const backToTop = document.getElementById("backToTop");
window.addEventListener("scroll", function() {
    if (window.scrollY > 300) {
        backToTop.classList.add("show");
    } else {
        backToTop.classList.remove("show");
    }
});
backToTop.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
const links = document.querySelectorAll(".navigation a");
links.forEach(function(link) {
    link.addEventListener("click", function() {
        navigation.classList.remove("active");
    });
});