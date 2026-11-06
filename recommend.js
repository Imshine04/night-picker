document.getElementById("suggest").onclick = () => {
  const mood = document.getElementById("suggestMood").value;
  const top = movies
    .filter(m => m.mood === mood)
    .sort((a, b) => b.rating - a.rating);
  const list = document.getElementById("suggestions");
  list.innerHTML = "";
  top.forEach(m => {
    const li = document.createElement("li");
    li.textContent = "\u2B50 " + m.rating + " - " + m.title;
    list.appendChild(li);
  });
};
