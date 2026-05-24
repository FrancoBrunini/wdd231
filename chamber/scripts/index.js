const url = "data/company.json";
const cards = document.querySelector(".company-container");
const apiKey = "8766e01bf3d8b85f2f56c728199da256";
const lat = -38.7183;
const lon = -62.2663;
const weatherurl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

async function getCompany() {
    const response = await fetch(url);
    const data = await response.json();

    displayCompany(data);
}

const displayCompany = (company) => {

    company.forEach((company) => {

        const card = document.createElement("section");

        const logo = document.createElement("img");
        const name = document.createElement("h2");
        const address = document.createElement("p");
        const phone = document.createElement("p");
        const website = document.createElement("a");
        const description = document.createElement("p");

        name.textContent = company.name;
        address.textContent = company.address;
        phone.textContent = company.phone;
        description.textContent = company.description;

        website.textContent = "Visit Website";
        website.href = company.website;
        website.target = "_blank";

        logo.setAttribute("src", company.image);
        logo.setAttribute("alt", `${company.name} logo`);
        logo.setAttribute("loading", "lazy");
        logo.setAttribute("width", "300");

        card.appendChild(logo);
        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(description);
        card.appendChild(website);

        cards.appendChild(card);
    });
};
getCompany();
const menuButton = document.querySelector("#menu");
const navigation = document.querySelector("nav");

menuButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    menuButton.classList.toggle("open");

});




async function getWeather() {
    const response = await fetch(weatherurl);
    const data = await response.json();

    document.querySelector(".current").innerHTML += `
        <p>Temp: ${data.main.temp}°C</p>
        <p>${data.weather[0].description}</p>
    `;
}


async function getForecast() {
    const response = await fetch(forecastUrl);
    const data = await response.json();

    const forecastContainer = document.querySelector(".forecast-content");

    forecastContainer.innerHTML = "";

    const dailyData = [
        data.list[0],
        data.list[8],
        data.list[16]
    ];

    dailyData.forEach((day) => {

        const card = document.createElement("div");

        const date = new Date(day.dt_txt).toLocaleDateString("en-US", {
            weekday: "short"
        });

        card.innerHTML = `
            <p><strong>${date}</strong></p>
            <p>${Math.round(day.main.temp)}°C</p>
            <p>${day.weather[0].description}</p>
        `;

        forecastContainer.appendChild(card);
    });
}
const year = new Date().getFullYear();

document.querySelector("#lastModified").textContent =
`Last Modification: ${document.lastModified}`;

document.querySelector("#copyright").innerHTML =
`&copy; ${year} Franco Bruñini`;
getForecast();
getWeather();