const form = document.querySelector("#form");

form.addEventListener("input", totalTime);

function totalTime(e) {
  e.preventDefault();

  const elements = document.querySelectorAll(".form-control");

  let playS = document.querySelector("#playback-speed");
  let hr = document.querySelector("#hours");
  let min = document.querySelector("#minutes");

  // Authenticate that no fields are empty before calculation
  for (let i = 0; i < elements.length; i++) {
    if (elements[i].value.length === 0) {
      return;
    }
  }

  let playbackSpeed = playS.value;
  let hours = hr.value * 60;
  let minutes = min.value;

  // If speed is faster than 1x
  if (playbackSpeed >= 1) {
    const totalHours = hours / playbackSpeed;
    const totalMins = minutes / playbackSpeed;
    const totalTime = totalHours + totalMins;
    outputInfo(totalTime);

    // If speed is slower than 1x
  } else {
    const totalHours = hours / playbackSpeed;
    const totalMins = minutes / playbackSpeed;
    const totalTime = totalHours + totalMins;
    outputInfo(totalTime);
  }
}

// Convert total minutes to hours & minutes
function outputInfo(time) {
  const hours = time / 60;
  const rhours = Math.floor(hours);
  const minutes = (hours - rhours) * 60;
  const rminutes = Math.round(minutes);

  document.querySelector("#output").textContent = `${Math.floor(
    time
  )} minutes = ${rhours} hour(s) and ${rminutes} minute(s)`;
}
