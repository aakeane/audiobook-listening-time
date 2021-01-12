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
  totalTime(e);
});

function totalTime(e) {
  e.preventDefault();

  let playS = document.querySelector("#playback-speed");
  let hr = document.querySelector("#hours");
  let mins = document.querySelector("#minutes");
  // Store original hour, mins & playback speed for the output
  const arr = [hr.value, mins.value, playS.value];

  let playbackSpeed = playS.value;
  let hours = hr.value * 60;
  let minutes = mins.value;

  // If speed is faster than 1x
  if (playbackSpeed >= 1) {
    const totalHours = hours / playbackSpeed;
    const totalMins = minutes / playbackSpeed;
    const totalTime = totalHours + totalMins;
    outputInfo(totalTime, arr);

    // If speed is slower than 1x
  } else {
    const totalHours = hours / playbackSpeed;
    const totalMins = minutes / playbackSpeed;
    const totalTime = totalHours + totalMins;
    outputInfo(totalTime, arr);
  }
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
