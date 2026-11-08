

function $(id) {
    return document.querySelector(id);
}

// Navbar drawer
let navbar_drawer = document.querySelector(".navbar .drawer");
navbar_drawer.style.height = (innerHeight - 100) + "px";

let navbar_side_button = document.querySelector(".navbar .navbar-side-button button");
navbar_side_button.addEventListener("click", () => {
    document.querySelector(".navbar .drawer").style.visibility = "visible";
});

let navbar_side_cancel_button = document.querySelector(".navbar button.side-cancel");
navbar_side_cancel_button.addEventListener("click", () => {
    document.querySelector(".navbar .drawer").style.visibility = "hidden";
})

// Content
// set the default inner height for content element
$(".content").style.height = (innerHeight - $(".navbar-base").getBoundingClientRect().height - 20) + "px";

function onResize() {
    $(".content").style.height = (innerHeight - $(".navbar-base").getBoundingClientRect().height - 20) + "px";
}

window.addEventListener("resize", onResize );