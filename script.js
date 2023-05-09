"use strict";
const nav_links = document.querySelector(".navigation_list");
const navigation_background = document.querySelector(".navigation_background");
const navigation_nav = document.querySelector(".navigation_nav");

nav_links.addEventListener("click", e => {
  e.preventDefault();
  console.log(e.target, e);
  if (e.target.classList.contains("navigation_link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({
      behavior: "smooth",
    });
  }
});
