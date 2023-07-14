const form = document.querySelector("form");
const outputContainer = document.getElementById("outputContainer");

const formContainer = document.getElementById("formContainer");
randomFact = document.createElement("button");
formContainer.appendChild(randomFact);
randomFact.textContent = "Get random fact";

randomFact.onclick = async () => {
  try {
    const response = await axios.get(
      "https://cat-fact.herokuapp.com/facts/random"
    );
    const fact = response.data;
    const outputContainer = document.getElementById("outputContainer");
    const factElement = document.createElement("p");
    factElement.textContent = fact.text;
    outputContainer.appendChild(factElement);
  } catch (error) {
    console.error("Error fetching random fact:", error);
  }
};

form.addEventListener("submit", handleSubmit);

async function handleSubmit(event) {
  event.preventDefault();

  const animalInput = document.getElementById("exampleInputEmail1");
  const quantityInput = document.getElementById("exampleInputPassword1");
  const factIDinput = document.getElementById("factID");

  const animalName = animalInput.value;
  const quantity = quantityInput.value;
  const factID = factIDinput.value;

  let url;
  if (factID !== "") {
    url = `https://cat-fact.herokuapp.com/facts/${factID}`;
  } else {
    const url = `https://cat-fact.herokuapp.com/facts/random?animal_type=${animalName}&amount=${quantity}`;
  }

  try {
    const response = await axios.get(url);
    const facts = response.data;

    displayFacts(facts);
  } catch (error) {
    console.error("Error fetching cat facts:", error);
  }
}

function displayFacts(facts) {
  outputContainer.innerHTML = "";

  if (typeof facts == "object") {
    console.log(facts.text);
    const factElement = document.createElement("p");
    factElement.textContent = facts.text;
    outputContainer.appendChild(factElement);
  } else {
    facts.forEach((fact) => {
      const factElement = document.createElement("p");
      factElement.textContent = fact.text;
      outputContainer.appendChild(factElement);
    });
  }
}
