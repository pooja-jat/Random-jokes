const btn = document.querySelector("button");

function fetchJoke() {
  btn.disabled = true;

  fetch("https://official-joke-api.appspot.com/random_joke")
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("joke").innerText = data.setup;
      document.getElementsByClassName("para")[0].innerText = data.punchline;
      btn.disabled = false;
    })
    .catch((error) => {
      document.getElementById("joke").innerText = "error";
      console.error("Error fetching joke:", error);
      btn.disabled = false;
    });
  //
}

fetchJoke();

btn.addEventListener("click", fetchJoke);
