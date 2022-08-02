import {pets}  from "../../../js/pets.js";

const clinetWidth = document.documentElement.clientWidth;
const petsSlider = document.getElementById('pets-corusel__slide');
const coruselPrevButton = document.getElementById('pets-prev');
const coruselNextButton = document.getElementById('pets-next');
const petsCoruselLeftSet = document.getElementById('pets-corusel__left');
const petsCoruselActiveSet = document.getElementById('pets-corusel__active');
const petsCoruselRightSet = document.getElementById('pets-corusel__right');

let startCardIndex = Math.floor(Math.random()*pets.length);

const nextCardInStartSet = () => {
    startCardIndex++;
    startCardIndex > pets.length-1 ? startCardIndex = startCardIndex % pets.length : startCardIndex;
}


const createPetCard = (petNumber) => {
    const card = document.createElement('div');
    card.classList.add('pet-card');
    card.setAttribute('id','pet-card');

    let cardImage = document.createElement('img');
    cardImage.setAttribute('src',`${pets[petNumber].img}`);
    cardImage.classList.add('pet-image');
    card.appendChild(cardImage);

    let cardTitle = document.createElement('span');
    cardTitle.textContent = `${pets[petNumber].name}`;
    cardTitle.classList.add('pet-name');
    card.appendChild(cardTitle);

    let cardButton = document.createElement('div');
    cardButton.classList.add('card-button');
    cardButton.setAttribute('id','card-button');
    cardButton.textContent = "Learn more";
    card.appendChild(cardButton);

    return card;
}

const createCoruselCards = (cardNumber) => {
    let card;
    for(let i=0; i<cardNumber; i++){
        card = createPetCard(startCardIndex);
        petsCoruselLeftSet.append(card);
        nextCardInStartSet();
        card = createPetCard(startCardIndex);
        petsCoruselActiveSet.append(card);
        nextCardInStartSet();
        card = createPetCard(startCardIndex);
        petsCoruselRightSet.append(card);
    }
}

const createCardsInCorusel = () => {
    let cardNumber;
    if(clinetWidth > 1200){
        cardNumber=3;
        createCoruselCards(cardNumber);
    }
    else if(clinetWidth < 768){
        cardNumber=1;
        createCoruselCards(cardNumber);
    }
    else {
        cardNumber = 2;
        createCoruselCards(cardNumber);
    }
}

createCardsInCorusel();

const movieLeft = () => {
    let changedItem;
    changedItem = petsCoruselRightSet;
    changedItem.innerHTML='';
    if (clinetWidth < 768) {
        nextCardInStartSet();
        const card = createPetCard(startCardIndex);
        petsCoruselRightSet.append(card);
    } 
    else if (clinetWidth > 1280){
        for (let i = 0; i < 3; i++) {
            nextCardInStartSet();
            const card = createPetCard(startCardIndex);
            petsCoruselRightSet.append(card);
        }
    } 
    else {
        for (let i = 0; i < 2; i++) {
            nextCardInStartSet();
            const card = createPetCard(startCardIndex);
            petsCoruselRightSet.append(card);
        }
    }
    petsSlider.classList.add('transition-left');
    coruselPrevButton.removeEventListener('click',movieRight);
    coruselNextButton.removeEventListener('click',movieLeft);
}

const movieRight = () => {
    let changedItem;
    changedItem = petsCoruselLeftSet;
    changedItem.innerHTML='';
    if (clinetWidth < 768) {
        nextCardInStartSet();
        const card = createPetCard(startCardIndex);
        petsCoruselLeftSet.append(card);
    } 
    else if (clinetWidth > 1280){
        for (let i = 0; i < 3; i++) {
            nextCardInStartSet();
            const card = createPetCard(startCardIndex);
            petsCoruselLeftSet.append(card);
        }
    } 
    else {
        for (let i = 0; i < 2; i++) {
            nextCardInStartSet();
            const card = createPetCard(startCardIndex);
            petsCoruselLeftSet.append(card);
        }
    }
    petsSlider.classList.add('transition-right');
    coruselPrevButton.removeEventListener('click', movieRight);
    coruselNextButton.removeEventListener('click', movieLeft);
}

coruselPrevButton.addEventListener('click', movieRight);
coruselNextButton.addEventListener('click', movieLeft);


petsSlider.addEventListener('animationend', (animation) => {

    if (animation.animationName === 'movie-right') {
        document.getElementById('pets-corusel__active').innerHTML = petsCoruselLeftSet.innerHTML;
        petsSlider.classList.remove('transition-right');
    } 
    else {
        document.getElementById('pets-corusel__active').innerHTML = petsCoruselRightSet.innerHTML;
        petsSlider.classList.remove('transition-left');
    }

    coruselPrevButton.addEventListener('click', movieRight);
    coruselNextButton.addEventListener('click', movieLeft);
});

