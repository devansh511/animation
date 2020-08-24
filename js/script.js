// Preloader Function

function loading() {
    
    var load = document.getElementById('preloader');
    
    load.style.display = "none";
}

// KeypressAnimation

document.onkeydown = letter;

function letter(event) {
    
    console.log(event);
    var keycode = event.keyCode;
    var Chars = String.fromCharCode(keycode);
    var board = document.createElement('div');
    board.id = 'letters';
    var parentBoard = document.getElementsByTagName('div')[3];

    parentBoard.appendChild(board);
    board.style.position = 'absolute';

    var randX = Math.round(Math.random() * parentBoard.offsetWidth);
    var randY = Math.round(Math.random() * parentBoard.offsetHeight);

    board.style.left = randX + 'px';
    board.style.top = randY + 'px';
    board.innerText = Chars;

    board.style.transition = "all 0.5s linear 0s";
    board.style.left = board.offsetLeft - 10 + 'px';
    board.style.top= board.offsetTop - 10 + 'px';
    board.style.fontSize = '50px';
    board.style.opacity = 0;
}

// Human Animation

var r_eye = document.getElementById('right-eye');

var l_eye = document.getElementById('left-eye');

var r_pupil = document.getElementById('right-pupil');

var l_pupil = document.getElementById('left-pupil');

var Face = document.getElementById('face');

var Neck = document.getElementById('neck');

var Mouth = document.getElementById('mouth');