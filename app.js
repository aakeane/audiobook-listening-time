const form = document.querySelector("#form");

form.addEventListener("input", function (e) {
  e.preventDefault();
  const elems = document.querySelector("#form").elements;

  // Check all fields are completed otherwise clear output result
  for (let i = 0; i < elems.length; i++) {
    if (elems[i].value === "") {
      clearOutput();
      return;
    }
  }
  // If all fields are completed run time calculator
  totalTime(e);
});

function totalTime(e) {
  e.preventDefault();

  const playS = document.querySelector("#playback-speed").value;
  const hr = document.querySelector("#hours").value;
  const mins = document.querySelector("#minutes").value;
  // Store original hour, mins & playback speed for the output
  const arr = [hr, mins, playS];

  const hours = hr * 60;

  const totalHours = hours / playS;
  const totalMins = mins / playS;
  const totalTime = totalHours + totalMins;
  outputInfo(totalTime, arr);
}

// Convert total minutes to hours & minutes
function outputInfo(time, arr) {
  const hours = time / 60;
  const rhours = Math.floor(hours);
  const minutes = (hours - rhours) * 60;
  const rminutes = Math.round(minutes);

  document.querySelector(
    "#output"
  ).innerHTML = `<p class="fw-lighter fst-italic fs-3">${arr[0]} hours ${arr[1]} mins at ${arr[2]}x =</em></p> <p class="display-6">${rhours} hour(s) and ${rminutes} minute(s)</p`;
}

function clearOutput() {
  document.querySelector("#output").innerHTML = "";
}
