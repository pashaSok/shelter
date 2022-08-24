import {pets}  from "../../../js/pets.js";

const clinetWidth = document.documentElement.clientWidth;
const paginationButtonFirst = document.getElementById('our-pets__button-first');
const paginationButtonLeft = document.getElementById('our-pets__button-left');
const paginationButtonRight = document.getElementById('our-pets__button-right');
const paginationButtonActive = document.getElementById('our-pets__button-active');
const paginationButtonLast = document.getElementById('our-pets__button-last');
const ourPetsCardsWrapper = document.getElementById('our-pets__cards-wrapper');

let pageNumber = 1;
let maxPages;
let activeArray=[];
let startIndexInActiveArray=0;
let cardNumbers;
let lastIndexInActiveArray;


const shuffle = (arr) =>{
    return arr.sort(()=>Math.random()-0.5);
}

const generateBigArray=()=>{
    let bigArr=[];
    let arr = [0,1,2,3,4,5,6,7];
    for(let i=0;i<6;i++){
        bigArr.push(...shuffle(arr));
    }
    return bigArr;
}

let bigArr = generateBigArray();

const clientWidth = () =>{
    if(clinetWidth >= 1200){
        maxPages = 6;
        cardNumbers = 8;
    }
    else if(clinetWidth <= 780){
        maxPages = 16;
        cardNumbers =3;
    }
    else {
        maxPages = 8;
        cardNumbers=6;
    }
}
clientWidth();

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

const createCards = (cardNumbers, startIndexInActiveArray,lastIndexInActiveArray)=>{
    let card;
    lastIndexInActiveArray = cardNumbers;
    activeArray = bigArr.slice(startIndexInActiveArray, lastIndexInActiveArray);
    for(let i = 0;i<activeArray.length;i++){
        card = createPetCard(activeArray[i]);
        ourPetsCardsWrapper.appendChild(card);
    }
}

const createPagesNumber = (cardNumbers) =>{
    createCards(cardNumbers);
}

createPagesNumber();


paginationButtonFirst.addEventListener('click', () => {
    pageNumber = 1;
    paginationButtonActive.innerText = pageNumber; 
    paginationButtonFirst.classList.add('our-pets__button_disable');
    paginationButtonLeft.classList.add('our-pets__button_disable');
    paginationButtonRight.classList.remove('our-pets__button_disable');
    paginationButtonLast.classList.remove('our-pets__button_disable');
    startIndexInActiveArray=0;
    lastIndexInActiveArray=cardNumbers;
});

paginationButtonLeft.addEventListener('click',()=>{
    if(pageNumber>1){
        pageNumber--;
    }
    paginationButtonActive.innerText = pageNumber; 
    paginationButtonRight.classList.remove('our-pets__button_disable');
    paginationButtonLast.classList.remove('our-pets__button_disable');
    if(pageNumber===1){
        paginationButtonFirst.classList.add('our-pets__button_disable');
        paginationButtonLeft.classList.add('our-pets__button_disable');
    };
    ourPetsCardsWrapper.innerHTML='';
    createPagesNumber();
});

paginationButtonRight.addEventListener('click', ()=>{
    if(pageNumber<maxPages){
        pageNumber++;
    }
    paginationButtonActive.innerText=pageNumber;
    paginationButtonFirst.classList.remove('our-pets__button_disable');
    paginationButtonLeft.classList.remove('our-pets__button_disable');
    if(pageNumber===maxPages){
        paginationButtonRight.classList.add('our-pets__button_disable');
        paginationButtonLast.classList.add('our-pets__button_disable');
    }
    ourPetsCardsWrapper.innerHTML='';
    createPagesNumber();
});

paginationButtonLast.addEventListener('click', () => {
    pageNumber=maxPages;
    paginationButtonActive.innerText=pageNumber;
    paginationButtonRight.classList.add('our-pets__button_disable');
    paginationButtonLast.classList.add('our-pets__button_disable');
    paginationButtonFirst.classList.remove('our-pets__button_disable');
    paginationButtonLeft.classList.remove('our-pets__button_disable');
    startIndexInActiveArray=bigArr.length-1 - cardNumbers;
    lastIndexInActiveArray = bigArr.length-1;
});
