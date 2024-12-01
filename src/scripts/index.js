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

function selectCarouselItem(selectedButtonElement) {
    const selectedItem = selectedButtonElement.id;
    const carousel = document.querySelector(".s-cards-carousel");
    const transforms = carousel.style.transform;
    const rotateY = transforms.match(/rotateY\((-?\d+deg)\)/i);
    const rotateYDeg = -120 * (Number(selectedItem) - 1);
    const newTransform = transforms.replace(rotateY[0], `rotateY(${rotateYDeg}deg)`);

    carousel.style.transform = newTransform;

    const activeButtonElement = document.querySelector(".s-controller__button--active");
    activeButtonElement.classList.remove("s-controller__button--active");
    selectedButtonElement.classList.add("s-controller__button--active");
}