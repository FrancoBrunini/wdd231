const cards = document.querySelector("#cards");

async function getPlaces() {
    const response = await fetch("data/discover.json");
    const places = await response.json();

    places.forEach((place, index) => {
        const card = document.createElement("section");
        card.classList.add(`card${index + 1}`);

        card.innerHTML = `
            <h2>${place.name}</h2>
            <figure>
                <img src="${place.image}" alt="${place.name}" loading="lazy">
            </figure>
            <address>${place.address}</address>
            <p>${place.description}</p>
            <button>Learn More</button>
        `;

        cards.appendChild(card);
    });
}
const visitMessage = document.querySelector("#visit-message");

const lastVisit = localStorage.getItem("lastVisit");
const currentVisit = Date.now();

if (!lastVisit) {

    visitMessage.textContent =
        "Welcome! Let us know if you have any questions.";

} else {

    const millisecondsPerDay = 1000 * 60 * 60 * 24;

    const daysBetweenVisits = Math.floor(
        (currentVisit - Number(lastVisit)) / millisecondsPerDay
    );

    if (daysBetweenVisits < 1) {

        visitMessage.textContent =
            "Back so soon! Awesome!";

    } else {

        visitMessage.textContent =
            `You last visited ${daysBetweenVisits} ${
                daysBetweenVisits === 1 ? "day" : "days"
            } ago.`;
    }
}

localStorage.setItem("lastVisit", currentVisit);
getPlaces();