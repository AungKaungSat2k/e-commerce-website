// navbar
const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');

if (bar) {
    bar.addEventListener('click',() => {
        nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click',() => {
        nav.classList.remove('active');
    })
}

// single_product

const mainImg = document.getElementById('mainImg');
const smallImg = document.getElementsByClassName('small-img');

smallImg[0].onclick = (event) => {
    mainImg.src = smallImg[0].src;
};

smallImg[1].onclick = (event) => {
    mainImg.src = smallImg[1].src;
};

smallImg[2].onclick = (event) => {
    mainImg.src = smallImg[2].src;
};

smallImg[3].onclick = (event) => {
    mainImg.src = smallImg[3].src;
};