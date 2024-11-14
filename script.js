const url = "https://api.pexels.com/v1/search?query=";
const apiKey = "e8Np9rpRgiCh5OP08tkfM0vmmGs4NX9tiFoFTSN3azzcz1PSJcjodAK5";
const btnLoadImg = document.getElementById("loadBtn");
const btnLoadSecondImg = document.getElementById("loadSecondBtn");
const query1 = "cat";
const query2 = "nature";

const getimage = function (url) {
  fetch(url, {
    method: "GET",
    headers: { Authorization: apiKey }
  })
    .then((response) => {
      console.log(response);
      if (response.ok) {
        return response.json();
      } else {
        throw new Error(`Ci dispiace, non siamo riusciti a reperire i dati. Errore: ${response.statusText}`);
      }
    })
    .then((images) => {
      //   console.log(images);
      const cards = document.querySelectorAll(".card");

      images.forEach((img) => {
        cards.forEach((card) => {});
      });
      //   Recuperare le card
      //   Inserire al posto dell'src delle img l'immagine presa dall'url con la GET.
    });
};
btnLoadImg.addEventListener("click", () => getimage(url + query1));
btnLoadSecondImg.addEventListener("click", () => getimage(url + query2));
