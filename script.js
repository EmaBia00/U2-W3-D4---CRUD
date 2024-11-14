const URL = "https://api.pexels.com/v1/search?query=";
const apiKey = "e8Np9rpRgiCh5OP08tkfM0vmmGs4NX9tiFoFTSN3azzcz1PSJcjodAK5";
const btnPrimary = document.querySelector(".btn.btn-primary");
const btnSecondary = document.querySelector(".btn.btn-secondary");

btnPrimary.onclick = () => getimage("cat");
btnSecondary.onclick = () => getimage("nature");

const cardRow = document.querySelector(".album .row");

const getimage = (query) => {
  fetch(URL + query, {
    method: "GET",
    headers: { Authorization: apiKey }
  })
    .then((resp) => {
      console.log(resp);
      if (resp.ok) {
        return resp.json();
      } else {
        throw new Error(`Ci dispiace, non siamo riusciti a reperire i dati. Errore: ${resp.statusText}`);
      }
    })
    .then((pexelObj) => {
      cardRow.innerHTML = "";

      pexelObj.photos.forEach((data) => {
        const col = document.createElement("div");
        col.onclick = () => {
          window.location.assign("./details.html?pexelsId=" + data.id);
        };
        col.className = "col-md-4";
        col.innerHTML = `<div class="card mb-4 shadow-sm">
              <img src=${data.src.medium} class="bd-placeholder-img card-img-top" />
              <div class="card-body">
                <h5 class="card-title">${data.photographer}</h5>
                <p class="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group">
                    <button type="button" class="btn btn-sm btn-outline-secondary">
                      View
                    </button>
                    <button type="button" class="btn btn-sm btn-outline-secondary">
                      Edit
                    </button>
                  </div>
                  <small class="text-muted">${data.id}</small>
                </div>
              </div>
            </div>`;
        cardRow.appendChild(col);
      });
    });
};
