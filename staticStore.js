import { items } from './items.js';

let cardContainer = document.getElementById('card-list');

items.forEach(i => {
    // li parent
    let cardHolder = document.createElement('li');
    cardHolder.classList.add('card');

    // div container for card elements
    let card = document.createElement('div');
    card.classList.add('card-main');

    // card img
    let imgContainer = document.createElement('div');
    imgContainer.classList.add('card-img-container');
    card.appendChild(imgContainer);

    let img = document.createElement('img');
    img.classList.add('card-img');
    if (i.imgSrc) {
        img.src = `./assets/images/${i.imgSrc}.png`;
    } else {
        img.src = `./assets/skullandcrossbones1.png`;
    }
    imgContainer.appendChild(img);

    // card text
    let cardTitle = document.createElement('h3');
    cardTitle.innerText = i.name;
    cardTitle.classList.add('card-title');
    card.appendChild(cardTitle);

    let cardDesc = document.createElement('p');
    cardDesc.innerText = i.text;
    cardDesc.classList.add('card-text');
    card.appendChild(cardDesc);

    // card button and price info
    let cardBtnContainer = document.createElement('div');
    cardBtnContainer.classList.add('card-btn-container');

    let cardPrice = document.createElement('span');
    cardPrice.innerText = `Price: ${i.price ? i.price : 'This one\'s on me, mate'}`;
    cardPrice.classList.add('card-price');
    cardBtnContainer.appendChild(cardPrice);

    let cardBtn = document.createElement('i');
    cardBtn.innerText = 'add_shopping_cart';
    cardBtn.classList.add('material-icons');
    cardBtn.classList.add('card-btn');
    cardBtnContainer.appendChild(cardBtn);

    // add items to document
    cardHolder.appendChild(card);
    cardContainer.appendChild(cardHolder);
    cardHolder.appendChild(cardBtnContainer);
});