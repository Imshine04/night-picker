const items = [];

document.getElementById("add").onclick = () => {
  const input = document.getElementById("item");
  const mood = document.getElementById("mood").value;
  const name = input.value.trim();
  if (!name) return;
  items.push({ name, mood });
  const li = document.createElement("li");
  li.textContent = mood + " " + name;
  document.getElementById("list").appendChild(li);
  input.value = "";
};

document.getElementById("pick").onclick = () => {
  const filter = document.getElementById("filter").value;
  const options = filter === "all" ? items : items.filter(i => i.mood === filter);
  if (options.length === 0) {
    document.getElementById("result").textContent = "Nothing matches that mood yet!";
    return;
  }
  const choice = options[Math.floor(Math.random() * options.length)];
  document.getElementById("result").textContent = "Tonight: " + choice.mood + " " + choice.name;
};
