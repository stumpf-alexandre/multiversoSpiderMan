function handleMouseEnter() {
    this.classList.add("s-card--hovered");

    document.body.id = `${this.id}-hovered`;
}

function handleMouseLeave() {
    this.classList.remove("s-card--hovered");

    document.body.id = "";
}

function addEventListenersCards() {
    const cardElements = document.getElementsByClassName("s-card");
    for (let i = 0; i < cardElements.length; i++) {
        const card = cardElements[i];
        card.addEventListener("mouseenter", handleMouseEnter);
        card.addEventListener("mouseleave", handleMouseLeave);
    }
}

/**só libera o script após carregar toda a pagina */
document.addEventListener("DOMContentLoaded", addEventListenersCards, false);

function selectCarouselItem(selectedItem) {
    console.log("selecionando item", selectedItem);
}