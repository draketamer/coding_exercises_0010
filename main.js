// <⚠️ DONT DELETE THIS ⚠️>
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// <⚠️ /DONT DELETE THIS ⚠️>

/*
✅ The text of the title should change when the mouse is on top of it.
✅ The text of the title should change when the mouse is leaves it.
✅ When the window is resized the title should change.
✅ On right click the title should also change.
✅ The colors of the title should come from a color from the colors array.
✅ DO NOT CHANGE .css, or .html files.
✅ ALL function handlers should be INSIDE of "superEventHandler"
*/
const title = document.querySelector("h2");
const superEventHandler = {
  handleMouseEnter: function () {
    title.innerText = "Mouse is on the title!";
    title.style.color = colors[0];
  },
  handleMouseLeave: function () {
    title.innerText = "Mouse is not on the title!";
    title.style.color = colors[1];
  },
  handleResize: function () {
    title.innerText = "You resized the window!";
    title.style.color = colors[2];
  },
  handleRightClick: function () {
    title.innerText = "You right-clicked!";
    title.style.color = colors[3];
  },
};

title.addEventListener("mouseenter", superEventHandler.handleMouseEnter);
title.addEventListener("mouseleave", superEventHandler.handleMouseLeave);
window.addEventListener("resize", superEventHandler.handleResize);
window.addEventListener("contextmenu", function (event) {
  event.preventDefault();
  superEventHandler.handleRightClick();
});
