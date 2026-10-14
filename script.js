// get the dark mode button
const darkBot = document.getElementById("darkBot");

// when clicked it will change the page mode 
darkBot.addEventListener("click", function () {
  // turn dark mode on or off
  document.body.classList.toggle("dark");

  // for changing the words on the button
  if (document.body.classList.contains("dark")) {
    darkBot.textContent = "Light Mode";
  } else {
    darkBot.textContent = "Dark Mode";
  }
});