// Preloader Function

function loading() {
    
    var load = document.getElementById('preloader');
    
    load.style.display = "none";
}

// KeypressAnimation

document.onkeydown = letter;

function letter(event) {
    
    var colors = ['#8B0000', '#FFD700', '#4B0082', '#000080', '#D2691E', '#000000', '#008080', '#FF4500', '#FFFFFF'];
    var keycode = event.keyCode;
    var Chars = String.fromCharCode(keycode);
    var board = document.createElement('div');
    board.id = 'letters';
    
    var parentBoard = document.getElementsByTagName('div')[4];
    parentBoard.appendChild(board);
    board.style.position = 'absolute';

    var randX = Math.round(Math.random() * parentBoard.offsetWidth);
    var randY = Math.round(Math.random() * parentBoard.offsetHeight);
    var colour = colors[Math.floor(Math.random() * colors.length)];
    
    board.style.left = randX + 'px';
    board.style.top = randY + 'px';
    board.innerText = Chars;

    board.style.transition = "all 0.5s linear 0s";
    board.style.left = board.offsetLeft - 12 + 'px';
    board.style.top= board.offsetTop - 12 + 'px';
    board.style.fontSize = '50px';
    board.style.opacity = 0;
    board.style.color = colour;
}

// Human Animation

var r_eye = document.getElementById('right-eye');

var l_eye = document.getElementById('left-eye');

var r_pupil = document.getElementById('right-pupil');

var l_pupil = document.getElementById('left-pupil');

var Face = document.getElementById('face');

var Neck = document.getElementById('neck');

var Mouth = document.getElementById('mouth');