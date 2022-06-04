let isJumping = false;

const body = document.querySelector('body');
const player = document.querySelector('#player');
const enemy = document.querySelector('.enemy');

function slideBlocks() {
    enemy.classList.add('slideAnimate');
    setTimeout(function () {
        enemy.classList.remove('slideAnimate');
    }, 2000);
}
setInterval(slideBlocks, 4000);

body.addEventListener('keypress', function () {
    if (isJumping === false) {
        isJumping = true;
        player.classList.add('jumpAnimate');
    }
    setTimeout(function () {
        isJumping = false;
        player.classList.remove('jumpAnimate');
    }, 1000);
});
body.addEventListener('click', function () {
    if (isJumping === false) {
        isJumping = true;
        player.classList.add('jumpAnimate');
    }
    setTimeout(function () {
        isJumping = false;
        player.classList.remove('jumpAnimate');
    }, 1000);
});
