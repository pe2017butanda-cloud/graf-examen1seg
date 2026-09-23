// Obtener la imagen y los botones
const image = document.getElementById('image');

const xSmallBtn = document.getElementById('xSmallBtn');
const smallBtn = document.getElementById('smallBtn');
const mediumBtn = document.getElementById('mediumBtn');
const largeBtn = document.getElementById('largeBtn');
const xLargeBtn = document.getElementById('xLargeBtn');

// X-Pequeño
xSmallBtn.addEventListener('click', () => {
    image.style.width = '100px';
    image.style.height = '100px';
});

// Pequeño
smallBtn.addEventListener('click', () => {
    image.style.width = '150px';
    image.style.height = '150px';
});

// Mediano
mediumBtn.addEventListener('click', () => {
    image.style.width = '300px';
    image.style.height = '300px';
});

// Grande
largeBtn.addEventListener('click', () => {
    image.style.width = '450px';
    image.style.height = '450px';
});

// X-Grande
xLargeBtn.addEventListener('click', () => {
    image.style.width = '600px';
    image.style.height = '600px';
});