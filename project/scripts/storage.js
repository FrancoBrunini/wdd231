export function saveFavorite(shoe) {

    localStorage.setItem("favoriteShoe", JSON.stringify(shoe));

}

export function getFavorite() {
    return JSON.parse(localStorage.getItem("favoriteShoe"));
}