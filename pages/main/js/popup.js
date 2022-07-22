import {pets}  from "./pets.js";

const popupLayer = document.getElementById('popup-layer');
const popup = document.getElementById('popup');
const popupTitle = document.getElementById('popup__title');
const popupImage = document.getElementById('popup__image');
const popupType = document.getElementById('popup__type');
const popupDescription = document.getElementById('popup__description');
const popupItemAge = document.getElementById('popup-about__item-text__age');
const popupItemInoculations = document.getElementById('popup-about__item-text__inoculations');
const popupItemDiseases = document.getElementById('popup-about__item-text__diseases');
const popupItemParasites = document.getElementById('popup-about__item-text__parasites');
const popupCloseButton = document.getElementById('popup__close-button');

let currentButton;

document.addEventListener('click', e => {
    if(e.target.classList.contains('card-button')){
        popupLayer.classList.add('popup-active');
        currentButton = e.target;
        let petName = e.target.parentElement.innerText.split('\n')[0];
        for(let i = 0;i<pets.length;i++){
            if(petName === pets[i].name){
                popupTitle.innerText=`${petName}`;
                popupImage.setAttribute('src',`${pets[i].img}`);
                popupType.innerText=`${pets[i].type} - ${pets[i].breed}`;
                popupDescription.innerText=`${pets[i].description}`;
                popupItemAge.innerText=`${pets[i].age}`;
                popupItemInoculations.innerText=`${pets[i].inoculations}`;
                popupItemDiseases.innerText=`${pets[i].diseases}`;
                popupItemParasites.innerText=`${pets[i].parasites}`;
            }
        }
    }
});

popupLayer.addEventListener('click', e => {
    if(!popup.contains(e.target) && e.target !== popup){
        popupLayer.classList.remove('popup-active');
    }
});

popupCloseButton.addEventListener('click', () => {
    popupLayer.classList.remove('popup-active')
});


