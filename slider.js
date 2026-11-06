const slides = ["images/1.jpg", "images/2.jpg", "images/3.jpg", "images/4.jpg", "images/5.jpg"];
const slider = document.getElementById("slider");
for (let r = 0; r < 2; r++) {
  const row = document.createElement("div");
  row.className = "row";
  const track = document.createElement("div");
  track.className = "track" + (r === 1 ? " reverse" : "");
  [...slides, ...slides].forEach(src => {
    const img = document.createElement("img");
    img.src = src;
    img.alt = "";
    track.appendChild(img);
  });
  row.appendChild(track);
  slider.appendChild(row);
}
