const colors = ["red", "green", "blue"];

colors.forEach((color) => {
  const div = document.createElement("div");
  div.textContent = color;
  div.style.color = color;
  div.style.backgroundColor = "pink";
  div.style.margin = "10px";
  document.body.appendChild(div);
});
