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
let startIndexInActiveArray=0;
let activeArray=[];
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

const clientWidth = () =>{
    if(clinetWidth >= 1279){
        maxPages = 6;
        cardNumbers = 8;
        lastIndexInActiveArray=8;
    }
    else if(clinetWidth <= 767){
        maxPages = 16;
        cardNumbers =3;
        lastIndexInActiveArray=3;
    }
    else {
        maxPages = 8;
        cardNumbers=6;
        lastIndexInActiveArray=6;
    }
}

clientWidth();

function activeArr(activeArray){
    activeArray.splice(0,activeArray.length);
    return  bigArr.filter((el,index)=>index>=startIndexInActiveArray && index<lastIndexInActiveArray);
}

const createCards = ()=>{
    let card;
    activeArray=activeArr(activeArray);
    for(let i = 0;i<activeArray.length;i++){
        card = createPetCard(activeArray[i]);
        ourPetsCardsWrapper.appendChild(card);
    }
}
createCards();

ourPetsCardsWrapper.addEventListener('animationend',AnimationHandler,false);

function AnimationHandler(){
    ourPetsCardsWrapper.classList.remove('pagination-animation');
}

paginationButtonFirst.addEventListener('click', () => {
    pageNumber = 1;
    paginationButtonActive.innerText = pageNumber; 
    paginationButtonFirst.classList.add('our-pets__button_disable');
    paginationButtonLeft.classList.add('our-pets__button_disable');
    paginationButtonRight.classList.remove('our-pets__button_disable');
    paginationButtonLast.classList.remove('our-pets__button_disable');
    if(startIndexInActiveArray!==0){
        ourPetsCardsWrapper.classList.add('pagination-animation');
    }
    startIndexInActiveArray=0;
    lastIndexInActiveArray=cardNumbers;
    ourPetsCardsWrapper.textContent='';
    createCards();
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
    if(startIndexInActiveArray>0){
        ourPetsCardsWrapper.classList.add('pagination-animation');
        startIndexInActiveArray-=cardNumbers;
        lastIndexInActiveArray-=cardNumbers;
        ourPetsCardsWrapper.textContent='';
        createCards();
    }
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
    if(lastIndexInActiveArray<bigArr.length){
        ourPetsCardsWrapper.classList.add('pagination-animation');
        startIndexInActiveArray+=cardNumbers;
        lastIndexInActiveArray+=cardNumbers;
        ourPetsCardsWrapper.textContent='';
        createCards();
    }
});

paginationButtonLast.addEventListener('click', () => {
    pageNumber=maxPages;
    paginationButtonActive.innerText=pageNumber;
    paginationButtonRight.classList.add('our-pets__button_disable');
    paginationButtonLast.classList.add('our-pets__button_disable');
    paginationButtonFirst.classList.remove('our-pets__button_disable');
    paginationButtonLeft.classList.remove('our-pets__button_disable');
    if(lastIndexInActiveArray!==bigArr.length){
        ourPetsCardsWrapper.classList.add('pagination-animation');
    }
    lastIndexInActiveArray=bigArr.length;
    startIndexInActiveArray=bigArr.length-cardNumbers;
    ourPetsCardsWrapper.textContent='';
    createCards();
});
