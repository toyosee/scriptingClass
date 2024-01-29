const ball = document.getElementById('ball');
const container = document.querySelector('.container');
const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');

let posX = 0;
let posY = 0;
let speedX = 2;
let speedY = 2;
let animationId;

// Function to start the bouncing animation
function startBounce() {
    // Check if animation already running to prevent multiple animations
    if (!animationId) {
        moveBall();
    }
}

// Function to stop the bouncing animation
function stopBounce() {
    cancelAnimationFrame(animationId);
    animationId = null;
}

// Function to move the ball
function moveBall() {
    posX += speedX;
    posY += speedY;

    if (posX >= container.offsetWidth - ball.offsetWidth || posX <= 0) {
        speedX = -speedX;
    }

    if (posY >= container.offsetHeight - ball.offsetHeight || posY <= 0) {
        speedY = -speedY;
    }

    ball.style.left = posX + 'px';
    ball.style.top = posY + 'px';

    animationId = requestAnimationFrame(moveBall);
}

// Event listener for the start button
startButton.addEventListener('click', startBounce);

// Event listener for the stop button
stopButton.addEventListener('click', stopBounce);
