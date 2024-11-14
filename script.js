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
      images.forEach((img) => {
        console.log(img);
        const row = document.querySelector(".row");
        const column = document.createElement("div");
        column.className = "col-md-4";
        const card = document.createElement("div");
        card.className = "card mb-4 shadow-sm";
        const cardImg = document.createElement("img");
        // cardImg.src = img.

        // `<div class="col-md-4">
        //     <div class="card mb-4 shadow-sm">
        //       <img src="https://picsum.photos/id/237/300/200" class="bd-placeholder-img card-img-top" />
        //       <div class="card-body">
        //         <h5 class="card-title">Lorem Ipsum</h5>
        //         <p class="card-text">
        //           This is a wider card with supporting text below as a natural
        //           lead-in to additional content. This content is a little bit
        //           longer.
        //         </p>
        //         <div class="d-flex justify-content-between align-items-center">
        //           <div class="btn-group">
        //             <button type="button" class="btn btn-sm btn-outline-secondary">
        //               View
        //             </button>
        //             <button type="button" class="btn btn-sm btn-outline-secondary">
        //               Edit
        //             </button>
        //           </div>
        //           <small class="text-muted">9 mins</small>
        //         </div>
        //       </div>
        //     </div>`;
      });
      //   Recuperare le card
      //   Inserire al posto dell'src delle img l'immagine presa dall'url con la GET.
    });
};
btnLoadImg.addEventListener("click", () => getimage(url + query1));
btnLoadSecondImg.addEventListener("click", () => getimage(url + query2));
