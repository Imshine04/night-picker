const items = [];

document.getElementById("add").onclick = () => {
  const input = document.getElementById("item");
  if (!input.value.trim()) return;
  items.push(input.value.trim());
  const li = document.createElement("li");
  li.textContent = input.value.trim();
  document.getElementById("list").appendChild(li);
  input.value = "";
};

document.getElementById("pick").onclick = () => {
  if (items.length === 0) return;
  const choice = items[Math.floor(Math.random() * items.length)];
  document.getElementById("result").textContent = "Tonight: " + choice;
};