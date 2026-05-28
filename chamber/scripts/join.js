document.querySelector("#open-np").addEventListener("click", () => {
    document.querySelector("#np-modal").showModal();
});

document.querySelector("#open-bronze").addEventListener("click", () => {
    document.querySelector("#bronze-modal").showModal();
});

document.querySelector("#open-silver").addEventListener("click", () => {
    document.querySelector("#silver-modal").showModal();
});

document.querySelector("#open-gold").addEventListener("click", () => {
    document.querySelector("#gold-modal").showModal();
});

document.querySelectorAll(".close").forEach(button => {
    button.addEventListener("click", () => {
        button.parentElement.close();
    });
});

document.querySelector("#timestamp").value =
new Date().toISOString();
document.querySelector("#timestamp").value = new Date().toLocaleString();