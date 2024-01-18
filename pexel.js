const hideCard = function (event) {
  const card = event.currentTarget.closest(".card");
  card.style.display = "none";
};

const changeNameButton = function () {
  const imageRow = document.getElementById("imageRow");
  const buttons = imageRow.querySelectorAll(".card button");
  buttons.forEach((button) => {
    if (button.innerText === "Edit") {
      button.innerText = "Hide";
      button.removeEventListener("click", hideCard);
      button.addEventListener("click", hideCard);
    }
  });
};

document
  .getElementById("caricaImmagine")
  .addEventListener("click", function () {
    const key = "hEnIYCcn3AMYja1lQq5PunyXMl7RKAW8kuoIQHV8ng49EWi56xHGtQKb";
    const query = "Roma";
    const apiUrl = `https://api.pexels.com/v1/search?query=${query}`;

    fetch(apiUrl, {
      headers: {
        Authorization: key,
      },
    })
      .then((response) => {
        console.log("response", response);
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("errore nella chiamata");
        }
      })
      .then((data) => {
        const imageRow = document.getElementById("imageRow");
        const cards = imageRow.getElementsByClassName("card");

        Array.from(cards).forEach((card, i) => {
          const imageElement = card.querySelector(".card-img-top");
          const idTextElement = card.querySelector(".text-muted");
          imageElement.src = data.photos[i].src.medium;
          idTextElement.textContent = `ID: ${data.photos[i].id}`;
        });
      })
      .catch((error) => {
        console.error("Errore nel caricamento delle immagini:", error);
      });
    changeNameButton();
  });

document
  .getElementById("caricaImmagineSecondaria")
  .addEventListener("click", function () {
    const key = "hEnIYCcn3AMYja1lQq5PunyXMl7RKAW8kuoIQHV8ng49EWi56xHGtQKb";
    const query = "montagna";
    const apiUrl = `https://api.pexels.com/v1/search?query=${query}`;

    fetch(apiUrl, {
      headers: {
        Authorization: key,
      },
    })
      .then((response) => {
        console.log("response", response);
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("errore nella chiamata");
        }
      })
      .then((data) => {
        const imageRow = document.getElementById("imageRow");
        const cards = imageRow.getElementsByClassName("card");

        Array.from(cards).forEach((card, i) => {
          const imageElement = card.querySelector(".card-img-top");
          const idTextElement = card.querySelector(".text-muted");
          imageElement.src = data.photos[i].src.medium;
          idTextElement.textContent = `ID: ${data.photos[i].id}`;
        });
      })
      .catch((error) => {
        console.error("Errore nel caricamento delle immagini:", error);
      });
    changeNameButton();
  });
