const menuTag = document.querySelector('.menuTag')
const menuButton = document.querySelector('.menuButton')
const closeMenuButton = document.querySelector('.closeMenuButton')

menuButton.addEventListener("click", function() {
    menuTag.classList.remove("-translate-y-80", "opacity-0", "scale-90")
    console.log("menu click")
});

closeMenuButton.addEventListener("click", function() {
    menuTag.classList.add("-translate-y-80", "opacity-0", "scale-90")
    console.log("close click")
});

console.log("Javascript is Working")