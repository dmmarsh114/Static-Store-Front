import { items } from './items.js';

let cardContainer = document.getElementById('card-list');

// test items! ============================================
let cards = [];
for (let i = 1; i <= 6; i++) {
    let newItem = {
        name: `Item ${i}`,
        text: "Bilged on her anchor spanker hail-shot keelhaul schooner bounty rope's end Davy Jones' Locker no prey, no pay doubloon. Doubloon Privateer quarter avast boom skysail sloop Barbary Coast knave mizzen.",
    }
    cards.push(newItem);
}

items.forEach(i => {
    let cardHolder = document.createElement('li');
    cardHolder.classList.add('card');

    let card = document.createElement('div');
    card.classList.add('card-main');

    let imgContainer = document.createElement('div');
    imgContainer.classList.add('card-img-container');
    card.appendChild(imgContainer);

    let img = document.createElement('img');
    img.classList.add('card-img');
    img.src = `./assets/images/${i.imgSrc}.png`;
    imgContainer.appendChild(img);

    let cardTitle = document.createElement('h3');
    cardTitle.innerText = i.name;
    cardTitle.classList.add('card-title');
    card.appendChild(cardTitle);

    let cardDesc = document.createElement('p');
    cardDesc.innerText = i.text;
    cardDesc.classList.add('card-text');
    card.appendChild(cardDesc);

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

    cardHolder.appendChild(card);
    cardContainer.appendChild(cardHolder);
    cardHolder.appendChild(cardBtnContainer);
});