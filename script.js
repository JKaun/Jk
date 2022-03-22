const yesBtn = document.querySelector('#yesBtn');
const noBtn = document.querySelector('#noBtn');
let name = prompt('Cual es tu nombre?');
let distraccion = alert('Pregunta 100% para distraerte');

yesBtn.addEventListener('click', function () {
    confirm(`Felicidades ${name}, ahora somos novios`);
})

noBtn.addEventListener('mouseover', function () {
    const randomX = parseInt(Math.random() * 70);
    const randomY = parseInt(Math.random() * 50);
    noBtn.style.setProperty('top', randomY + '%');
    noBtn.style.setProperty('left', randomX + '%');
    noBtn.style.setProperty('transform', `traslate(-${randomX}%,-${randomY}%)`);
})

noBtn.addEventListener('click', function () {
    confirm(`Felicidades ${name}, me rompiste el corazon`);
})
