// DO NOT CHANGE index.html

// Step 1: Fill the drop-down selector box to have these options:
// NYC, SF, LA, SYD, ATX

const cityConainer = document.getElementById("city-type");
["NYC", "SF", "LA", "SYD", "ATX"].forEach(
  (city) =>
    (cityConainer.appendChild(document.createElement("option")).textContent =
      city)
);
// Step 2: When one of the cities is selected, change the background to a picture of the selected city.
// Hint: Use the CSS classes provided

cityConainer.addEventListener("change", (e) => changeBackground(e));

function changeBackground(event) {
  const selectedCity = event.target.value;
  const body = document.body;
  body.classList.remove("nyc", "sf", "la", "austin", "sydney");

  switch (selectedCity) {
    case "NYC":
      body.classList.add("nyc");
      break;
    case "SF":
      body.classList.add("sf");
      break;
    case "LA":
      body.classList.add("la");
      break;
    case "SYD":
      body.classList.add("sydney");
      break;
    case "ATX":
      body.classList.add("austin");
      break;
  }
}

// Check the README file for extensions!
