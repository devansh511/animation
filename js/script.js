//Preloader Function

function loading() {
    
    var load = document.getElementById('preloader');
    
    load.style.display = "none";
}

// Keypress Animation

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


// SnowFall

function init() {
    var canvas = document.getElementById('canvas');
    var w = canvas.width;
    var h = canvas.height;
    var ctx = canvas.getContext('2d');
    var bg = new Image();
    bg.src = "./assets/snowfall.jpg";
    
    var flakes = [];

    function snowFall() {
        ctx.clearRect(0, 0, w, h);
        ctx.drawImage(bg, 0, 0, w , h );
        addFlake();
        snow();
    };

    function addFlake() {
        var x = Math.ceil(Math.random() * w);
        var s = Math.ceil(Math.random() * 8);
        flakes.push({"x": x, "y" : 0, "s": s});
    };

    function snow() {
        for(var i = 0;i < flakes.length;i++)
        {
            var flake = flakes[i];
            ctx.beginPath();
            ctx.fillStyle = "rgba(255,255,255,0.9)";
            ctx.arc(flake.x, flakes[i].y+=flake.s/2, flake.s/2, 0, 2 * Math.PI);
            ctx.fill();
            if(flakes[i].y > h)
            {
                flakes.splice(i, 1);
            }
        };
    };
    setInterval(snowFall, 20);
};

// Smooth Scroll

// function smoothScroll(target, duration) {
//     var target = document.querySelector(target);
//     var targetPosition = target.getBoundingClientRect().top;
//     var startPosition = window.pageYOffset;
//     var distance = targetPosition - startPosition;
//     var startTime = null;

//     function animation(currentTime){
//         if(startTime === null)
//             startTime = currentTime;
//         var timeElapsed = currentTime - startTime;
//         var run = ease(timeElapsed, startPosition, distance, duration);
//         window.scrollTo(0, run);
//         if(timeElapsed < duration)
//             requestAnimationFrame(animation);
//     }

//     function ease(t, b, c, d) {
//         t /= d / 2;
//         if (t < 1)
//             return c / 2 * t * t + b;
//         t--;
//         return -c / 2 * (t * (t - 2) - 1) + b; 
//     }
//     requestAnimationFrame(animation);
// }

// var section2 = document.querySelector('.section2');

// section2.addEventListener('click', function(){

//     smoothScroll('.section2', 3000);
// });

// Human Animation

// var positions = ['-7', '-4',  '-1',  '2',  '5','6','3','0','-3','-6','-7'];

// function moveRightEye(element) {
    
//     var r_eye = document.getElementById(element);

//     positions.forEach((ele)=>{
//         r_eye.style.transform = "translateX(" + ele + "px)";
//         setTimeout(() => {  console.log("World!"); }, 200);
//     });
// }

// function moveLeftEye(element) {
    
//     var l_eye = document.getElementById(element);

//     positions.forEach((ele)=>{
//         l_eye.style.transform = "translateX(" + ele + "px)";
//     });
// }
 
// document.onclick = moveRightEye('right-pupil');
// document.onclick = moveLeftEye('left-pupil');

// setTimeout(moveRightEye,3000);
// setTimeout(moveLeftEye,3000);

// let pos = 0;
// function moveNeck(ele){

//     var neck = document.getElementById(ele);

//     if(pos === 0)
//     {
//         while(pos <= 10)
//         {
//             pos++;
//             neck.style.transform = "translateY(" + pos + "px)";
//             setTimeout(() => {  console.log("World!"); }, 50
//             );
//         }

//         while(pos >= -10)
//         {
//             pos--;
//             neck.style.transform = "translateY(" + pos + "px)";
//             setTimeout(() => {  console.log("World!"); }, 50
//             );
//         }
//     }
//     else
//     {
//         while(pos <= 10)
//         {
//             pos++;
//             neck.style.transform = "translateY(" + pos + "px)";
//             setTimeout(() => {  console.log("World!"); }, 50
//             );
//         }
//         while(pos >= -10)
//         {
//             pos--;
//             neck.style.transform = "translateY(" + pos + "px)";
//             setTimeout(() => {  console.log("World!"); }, 50
//             );
//         }
//     }
//     moveNeck('neck');
// }