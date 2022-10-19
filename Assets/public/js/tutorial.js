// Functionality for going through the tutorial
const nextBtn = document.querySelector("#nextTutorial");
const tutorial1 = document.querySelector("#tutorial-1");
const tutorial2 = document.querySelector("#tutorial-2");

const nextTutorial = (event) => {
    event.preventDefault();

    console.log('next slide');
    tutorial1.setAttribute('class', 'hidden');
    tutorial2.removeAttribute('class', 'hidden');
}

nextBtn.addEventListener('click', nextTutorial);