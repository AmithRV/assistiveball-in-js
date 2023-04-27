
const appWrap = document.getElementById('app-wrap');

// get the div element that you want to move
const assistiveBall = document.getElementById('assistive-ball');

let xInital = appWrap.clientWidth - assistiveBall.clientWidth * 2;
let yInital = appWrap.clientHeight - assistiveBall.clientHeight * 2;

// set the initial position of the assistball
assistiveBall.style.transform = `translate(${xInital}px,${yInital}px)`;

let isBallMovementActive = false;

// listen for mouse movement on the document
document.addEventListener('mousemove', (event) => {
    const appWidth = appWrap.clientWidth - assistiveBall.clientWidth;
    const appHeight = appWrap.clientHeight - assistiveBall.clientHeight;

    if (assistiveBall != null && isBallMovementActive) {
        // calculate the x and y position of the mouse relative to the assistiveBall element
        const x = event.clientX - assistiveBall.offsetLeft - assistiveBall.clientWidth / 2;
        const y = event.clientY - assistiveBall.offsetTop - assistiveBall.clientHeight / 2;

        if (x > 0 && y > 0 && x < appWidth && y < appHeight) {
            assistiveBall.style.transform = `translate(${x}px,${y}px)`;
        }
    }
});

function getClick() {
    let clickCount = 0;
    let timeoutId = null;

    assistiveBall.addEventListener('click', function () {
        clickCount++;
        if (clickCount === 2) {
            clearTimeout(timeoutId);
            clickCount = 0;

            // perform action on double click
            if (isBallMovementActive === false) {
                assistiveBall.style.opacity = 1;
            } else {
                assistiveBall.style.opacity = 0.75;
            }
            console.log('Double-clicked!');
            isBallMovementActive = !isBallMovementActive;
        } else {
            timeoutId = setTimeout(() => {
                if (clickCount === 1) {
                    console.log('click');
                    clickCount = 0;
                }
                clickCount = 0;
            }, 300);
        }
    });
}

function handleActions() {
    // console.log('action')
}

getClick();