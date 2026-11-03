// ----- Dark mode -----
const darkBot = document.getElementById("darkBot");

darkBot.addEventListener("click", function () {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    darkBot.textContent = "Light Mode";
  } else {
    darkBot.textContent = "Dark Mode";
  }
});

// ----- Mobile menu -----
const menuBtn = document.getElementById("menuBtn");
const mainNav = document.getElementById("mainNav");

menuBtn.addEventListener("click", function () {
  const isOpen = mainNav.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", isOpen);
});

// close the menu after tapping a link
mainNav.querySelectorAll("a").forEach(function (link) {
  link.addEventListener("click", function () {
    mainNav.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
  });
});
