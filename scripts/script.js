document.addEventListener('DOMContentLoaded', function () {

    // Get the Image Outputs
    const player1Image = document.getElementById("player1Box");
    const player2Image = document.getElementById("player2Box");

    // Get the Name Inputs
    const player1Name = document.getElementById("player1Name");
    const player2Name = document.getElementById("player2Name");

    // Image Sources
    const carrotBox = '../Images/Boxes/carrot.png';
    const emptyBox = '../Images/Boxes/empty.png';

    // Function to change the image source
    function changeImageSource(imageElement, newSource) {
        imageElement.src = newSource;
    }

    // Function to simulate 50/50 probability
    function getRandomCarrot() {
        return Math.random() < 0.5;
    }

    // Function to add the 'activename' class
    function addNameActive(nameElement) {
        nameElement.classList.add('activename');
    }

    // Function to remove the 'activename' class
    function removeNameActive(nameElement) {
        nameElement.classList.remove('activename');
    }

    // Event listener function for player 1 box click
    function player1ClickHandler() {
        const playerGetsCarrot = getRandomCarrot();
        if (playerGetsCarrot) {
            changeImageSource(player1Image, carrotBox);
            addNameActive(player1Name);
            removeNameActive(player2Name);
        } else {
            changeImageSource(player1Image, emptyBox);
            addNameActive(player2Name);
            removeNameActive(player1Name);
        }
        player1Image.removeEventListener('click', player1ClickHandler);
    }

    // Event listener function for player 2 box click
    function player2ClickHandler() {
        const playerGetsCarrot = getRandomCarrot();
        if (playerGetsCarrot) {
            changeImageSource(player2Image, carrotBox);
            addNameActive(player2Name);
            removeNameActive(player1Name);
        } else {
            changeImageSource(player2Image, emptyBox);
            addNameActive(player1Name);
            removeNameActive(player2Name);
        }
        player2Image.removeEventListener('click', player2ClickHandler);
    }

    // Adding click event listeners to player 1 and player 2 boxes
    player1Image.addEventListener('click', player1ClickHandler);
    player2Image.addEventListener('click', player2ClickHandler);

});
