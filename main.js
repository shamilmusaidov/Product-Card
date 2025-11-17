const title = document.querySelector(".title")
title.addEventListener("mouseover", () => {
    console.log(title.textContent)
})

const productCards = document.querySelectorAll(".card-container");
const changeCardsColorButton = document.querySelector("#change-color-all-card");
const greenColorHash = "#00FF00";
const blueColorHash = '#0000FF'


changeCardsColorButton.addEventListener("click", () => {
    productCards.forEach((card) => card.style.backgroundColor = greenColorHash)
})

const firstProductCard = document.querySelector(".card-container");
const changeCardColorFirstButton = document.querySelector("#change-color-first-card");

changeCardColorFirstButton.addEventListener('click', () => {
    firstProductCard.style.backgroundColor = blueColorHash;
})

const openGoogleButton = document.querySelector('#open-google');

openGoogleButton.addEventListener('click', openGoogle)


function openGoogle() {
    const answer = confirm('вы действительно хотите открыть Google?');

    if (answer === true) {
        window.open('https://google.com')
    } else {
        return;
    }
}

const changeButtonColor = document.querySelector('#change-button-color');
changeButtonColor.addEventListener('click', () => {
    changeButtonColor.classList.toggle('bg-aqua')
})