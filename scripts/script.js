document.addEventListener('DOMContentLoaded', function () {

    // Get the Image Outputs
    const player1Image = document.getElementById("player1Box");
    const player2Image = document.getElementById("player2Box");

    // Get the message Output
    const msg = document.getElementById("msg");

    // Get the Name Inputs
    const player1Name = document.getElementById("player1Name");
    const player2Name = document.getElementById("player2Name");

    // Image Sources
    const closedBox = "../Images/Boxes/close.png"
    const carrotBox = '../Images/Boxes/carrot.png';
    const emptyBox = '../Images/Boxes/empty.png';

    // Game Variables
    let carrotFound = false;
    let player1Clicked = false;
    let player2Clicked = false;

    // Function to change the image source
    function changeImageSource(imageElement, newSource) {
        imageElement.src = newSource;
    }

    // Function to simulate 50/50 probability
    function getRandomCarrot(player) {
        if (!carrotFound) {
            if (Math.random() < 0.5) {
                player.src = carrotBox;
                carrotFound = true;
                msg.innerHTML = `
                Wohh!! You got the carrot!
                <br>
                <p class="fs-5">Will you tell him?</p>
                `
            } else {
                player.src = emptyBox;
                carrotFound = false;
                msg.innerHTML = `
                Oops!! You don't got the carrot!
                <br>
                <p class="fs-5">Will you fool him?</p>
                `
            }
        } else {
            player.src = closedBox;
            carrotFound = false;
            msg.innerHTML = `
            Box closed! ${player1Name.value} open your eyes!
                <br>
                <p class="fs-5">What will you do?</p>
                
            `
        }
    }

    // Function to add the 'activename' class
    function addNameActive(addElem, removeElem) {
        addElem.classList.add('activename');
        removeElem.classList.remove('activename');
    }

    function removeFunctionalities() {
        player1Name.classList.remove('activename');
        player2Name.classList.remove('activename');
        player1Image.removeEventListener('click', player1ClickHandler);
        player2Image.removeEventListener('click', player2ClickHandler);
    }

    function player1ClickHandler() {
        if (!player1Clicked) {
            addNameActive(player1Name, player2Name);
            player2Image.removeEventListener('click', player2ClickHandler);
            getRandomCarrot(player1Image);
            player1Clicked = true;
        } else {
            changeImageSource(player1Image, closedBox);
            removeFunctionalities();
            msg.innerHTML = `
            Box closed! ${player2Name.value} open your eyes!
            <br>
            <p class="fs-5">What will you do?</p>
                
            `
            player1Clicked = false;
        }
        console.log(carrotFound);
    }


    function player2ClickHandler() {
        if (!player2Clicked) {
            addNameActive(player2Name, player1Name);
            player1Image.removeEventListener('click', player1ClickHandler);
            getRandomCarrot(player2Image);
            player2Clicked = true;
        } else {
            changeImageSource(player2Image, closedBox);
            removeFunctionalities();
            msg.innerHTML = `
            Box closed! ${player1Name.value} open your eyes!
            <br>
            <p class="fs-5">What will you do?</p>
            `
            player2Clicked = false;
        }
        console.log(carrotFound);
    }

    player1Image.addEventListener('click', player1ClickHandler);
    player2Image.addEventListener('click', player2ClickHandler);

});
