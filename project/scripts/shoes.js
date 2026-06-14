import { saveFavorite } from "./storage.js";
let allShoes = [];

export async function loadFeaturedShoes() {

    try {

        const response = await fetch("data/shoes.json");

        if (!response.ok) {
            throw new Error("Could not load shoes");
        }

        const shoes = await response.json();

        displayShoes(shoes.slice(0, 4));

    } catch (error) {
        console.error(error);
    }
}

export async function loadAllShoes() {

    try {

        const response = await fetch("data/shoes.json");

        if (!response.ok) {
            throw new Error("Could not load shoes");
        }

        const shoes = await response.json();

        allShoes = shoes;

        displayShoes(shoes);

        const brandFilter = document.querySelector("#brand-filter");

        if (brandFilter) {
            brandFilter.addEventListener("change", filterShoes);
        }

    } catch (error) {
        console.error(error);
    }
}

function displayShoes(shoes) {

    const container = document.querySelector("#shoe-container");

    if (!container) return;

    container.innerHTML = "";

    shoes.forEach(shoe => {

        const card = document.createElement("div");

        card.classList.add("shoe-card");

        card.innerHTML = `
            <img src="${shoe.image}"
                 alt="${shoe.name}"
                 loading="lazy">

            <h3>${shoe.name}</h3>

            <p>${shoe.brand}</p>

            <p>${shoe.category}</p>

            <p>$${shoe.price}</p>

            <button class="details-btn">
                View Details
            </button>
        `;

        const detailsButton = card.querySelector(".details-btn");

        detailsButton.addEventListener("click", () => {
            openModal(shoe);
        });

        container.appendChild(card);
    });
}

function filterShoes(event) {

    const selectedBrand = event.target.value;

    if (selectedBrand === "all") {
        displayShoes(allShoes);
        return;
    }

    const filteredShoes = allShoes.filter(
        shoe => shoe.brand === selectedBrand
    );

    displayShoes(filteredShoes);
}

function openModal(shoe) {

    const modal = document.querySelector("#shoe-modal");
    const modalContent = document.querySelector("#modal-content");

    modalContent.innerHTML = `
        <h2>${shoe.name}</h2>

        <img src="${shoe.image}" alt="${shoe.name}">

        <p><strong>Brand:</strong> ${shoe.brand}</p>
        <p><strong>Category:</strong> ${shoe.category}</p>
        <p><strong>Price:</strong> $${shoe.price}</p>

        <button id="favorite-btn">⭐ Add to Favorites</button>
    `;

    modal.showModal();

    const favoriteBtn = document.querySelector("#favorite-btn");

    console.log(favoriteBtn); 

    favoriteBtn.addEventListener("click", () => {

        console.log("clicked"); 

        saveFavorite(shoe);

        favoriteBtn.textContent = "⭐ Added!";
        favoriteBtn.disabled = true;
    });
}
const modal = document.querySelector("#shoe-modal");
const closeButton = document.querySelector("#close-modal");

if (closeButton && modal) {

    closeButton.addEventListener("click", () => {
        modal.close();
    });

    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.close();
        }
    });
}
