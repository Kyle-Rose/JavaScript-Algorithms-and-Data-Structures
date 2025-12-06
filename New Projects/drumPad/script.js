const audioNames = {
  Q: "Heater 1",
  W: "Heater 2",
  E: "Heater 3",
  A: "Heater 4",
  S: "Clap",
  D: "Open HH",
  Z: "Kick n' Hat",
  X: "Kick",
  C: "Closed HH"
};

function playSound(letter) {
  const pad = document.getElementById(letter);
  if (!pad) return;

  const audio = pad.querySelector("audio");
  if (!audio) return;

  audio.currentTime = 0;
  audio.play();

  document.getElementById("display").textContent = audioNames[letter];

  pad.classList.add("active");
  setTimeout(() => pad.classList.remove("active"), 150);
}

document.querySelectorAll(".drum-pad").forEach(pad => {
  pad.addEventListener("click", () => playSound(pad.id));
});

document.addEventListener("keydown", e => {
  const key = e.key.toUpperCase();
  if (audioNames[key]) playSound(key);
});
