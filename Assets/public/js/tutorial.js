// This was when I tried to keep the whole tutorial on ONE view and multiple partials, but that was much more work than I anticipated, and it ended up being pretty buggy and hard to edit.

// // Functionality for going through the tutorial
// const nextBtn = document.querySelector("#nextTutorial");
// const tutorial1 = document.querySelector("#tutorial-1"); // first tutorial item not part of the loop
// const tutorialArr = [];

// // i is first defined as 0
// var i = 0;

// const goToDashboard = async () => {
// // function to go to dashboard
// const res = await fetch('/dashboard', {
//     method: 'GET',
//     headers: { 'Content-Type': 'application/json' },
// });
// if(res.ok) {
//     document.location.replace('/dashboard');
// }
// }


// const nextTutorial = async (event) => {
//     event.preventDefault();

//     console.log(i);
//     if (i !== 2) {
//     // set first tutorial item to hidden
//     tutorial1.setAttribute('class', 'hidden');

//     // loop through each of the following tutorial items
//     const elements = document.querySelectorAll("[data-id]");
    
//     elements.forEach(el => {
//         // push each tutorial item to an array defined in the global scope
//         tutorialArr.push(el);
//     });

//     // Show current tutorial item
//     tutorialArr[i].removeAttribute('class', 'hidden');
//     // i is now defined as i + 1
//     console.log(tutorialArr[i]);
//     i++;

//     // don't really know how this is working?
//     tutorialArr[i].setAttribute('class', 'hidden');


    
//     } else if (i===2) {
//     // Once all three tutorial elements have popped up, change next button to dashboard button
//         console.log('end of tutorial!');
//         nextBtn.textContent = 'Go to Dashboard!';
//         // call function to go to dashboard
//         //nextBtn.setAttribute('href', '/dashboard');

//         nextBtn.addEventListener('click', goToDashboard());
//     }

// }

// nextBtn.addEventListener('click', nextTutorial);