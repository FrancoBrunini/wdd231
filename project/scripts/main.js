import "./navigation.js";
import { loadFeaturedShoes, loadAllShoes } from "./shoes.js";
import { getFavorite } from "./storage.js";

const page = document.body.dataset.page;

if (page === "home") {
    loadFeaturedShoes();
}

if (page === "catalog") {
    loadAllShoes();
}

const favContainer = document.querySelector("#favorite-display");

if (favContainer) {

    const fav = getFavorite();

    if (fav) {
        favContainer.innerHTML = `
            <p>⭐ Favorite: ${fav.name}</p>
        `;
    }
}
