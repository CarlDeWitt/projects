/*----------gem bar---------------------------*/
var gemcount = document.querySelector("#count");
var potgemcount = document.querySelector("#potcount");
gemcount.innerHTML = 0;
potgemcount.innerHTML = 0;
var c2click = false;
var toint = 0;
var potct = 0;
function increaseGemCount(){
        toint =  parseInt(gemcount.innerHTML);
        toint += 10;
        gemcount.innerHTML = toint;
}
/*----------Cotainer 1 ---------------------------*/
const pen = document.querySelector('#blk');

var C1leftBlockN = document.querySelector("#C1writing #nm");
var C1leftBlockO = document.querySelector("#C1writing #oc");
var C1leftBlockS = document.querySelector("#C1writing #st");
var C1leftBlockW = document.querySelector("#C1writing #wk");

var cp1 = 0;
var cp2 = 0;
var cp3 = 0;
var cp4 = 0;

C1leftBlockN.addEventListener("click",swapP1N);
C1leftBlockO.addEventListener("click",swapP1O);
C1leftBlockS.addEventListener("click",swapP1S);
C1leftBlockW.addEventListener("click",swapP1W);

function swapP1N(){
    if(cp1 == 0){
        C1leftBlockN.play();
        cp1++;
    }
    
    return;
}

function swapP1O(){
    if(cp2 == 0){
        C1leftBlockO.play();
        cp2++;
    }
    
    return;
}

function swapP1S(){
    if(cp3 == 0){
        C1leftBlockS.play();
        cp3++;
    }
    
    return;
}

function swapP1W(){
    if(cp4 == 0){
        C1leftBlockW.play();
        cp4++;
        increaseGemCount();
    }
    
    return;
}

new agnosticDraggable.Draggable(pen,{
    appendTo: '#container1',
    container: '#container1',
    cursor: 'move',
})

var intervalId = window.setInterval(function(){
    if(elementsOverlap(pen,C1leftBlockN)){
        swapP1N();
    }
    if(elementsOverlap(pen,C1leftBlockW)){
        swapP1W();
    }
    if(elementsOverlap(pen,C1leftBlockO)){
        swapP1O();
    }
    if(elementsOverlap(pen,C1leftBlockS)){
        swapP1S();
    }
  }, 500);

function elementsOverlap(el1, el2) {
    const domRect1 = el1.getBoundingClientRect();
    const domRect2 = el2.getBoundingClientRect();
  
    return !(
      domRect1.top > domRect2.bottom ||
      domRect1.right < domRect2.left ||
      domRect1.bottom < domRect2.top ||
      domRect1.left > domRect2.right
    );
  }

const paralax1 = document.querySelector('#container1');

window.addEventListener("scroll",function(){
    let offset = window.pageYOffset;
    paralax1.style.backgroundPositionY = offset * 0.2 + "px";
})


/*----------Cotainer 2 ---------------------------*/
var p1 = document.querySelector("#C2Photo1 .load");
var p2 = document.querySelector("#C2Photo2 .load");
var p3 = document.querySelector("#C2Photo3 .load");
var p4 = document.querySelector("#C2Photo4 .load");
var p5 = document.querySelector("#C2Photo5 .load");
var p6 = document.querySelector("#C2Photo6 .load");

new agnosticDraggable.Sortable(document.querySelector('#container2'), {
    containment: '#container2',
});

var kb1 =0;
var kb2 =0;
var kb3 =0;
var kb4 =0;
var kb5 =0;
var kb6 =0;

var p1Click = false;
var p1Promise = false;
var p2Click = false;
var p2Promise = false;
var p3Click = false;
var p3Promise = false;
var p4Click = false;
var p4Promise = false;
var p5Click = false;
var p5Promise = false;
var p6Click = false;
var p6Promise = false;

p1.addEventListener("click",C2P1);
p2.addEventListener("click",C2P2);
p3.addEventListener("click",C2P3);
p4.addEventListener("click",C2P4);
p5.addEventListener("click",C2P5);
p6.addEventListener("click",C2P6);
setInterval(function () {
    if(p1Click)
        if(p1Promise)
            p1.play();
        else{
            p1.src = "vid/c2/strL.mp4";    
            p1Promise = true;
        }
    
    if(p2Click)
    if(p2Promise)
        p2.play();
    else{
        p2.src = "vid/c2/agL.mp4";    
        p2Promise = true;
    }
    if(p3Click)
        if(p3Promise)
            p3.play();
        else{
            p3.src = "vid/c2/cuteL.mp4";   
            p3Promise = true;
        }
        if(p4Click)
        if(p4Promise)
            p4.play();
        else{
            p4.src = "vid/c2/ckL.mp4";    
            p4Promise = true
        }
        if(p5Click)
        if(p5Promise)
            p5.play();
        else{
            p5.src = "vid/c2/meL.mp4";    
            p5Promise = true;
        }
        if(p6Click)
        if(p6Promise)
            p6.play();
        else{
            p6.src = "vid/c2/kbL.mp4";    
            p6Promise = true;
        }
}, 10000);

function C2P1(){
    if(kb1 % 2 == 0){
        p1.src = "vid/c2/strA.mp4";
        document.querySelector("#vid1").removeAttribute("loop");
        document.getElementById('vid1').addEventListener('ended',myHandler);
        function myHandler() {
            console.log("video 1 is done");
        }
        kb1++
        p1Click = true;
    }
    else{
        p1.src = "vid/c2/strL.mp4";
        document.querySelector("#vid1").removeAttribute("loop");
        kb1++;
        p1Promise = true;
    }
}

function C2P2(){
    if(kb2 % 2 == 0){
        p2.src = "vid/c2/agA.mp4";
        document.querySelector("#vid2").removeAttribute("loop");
        document.getElementById('vid2').addEventListener('ended',myHandler);
        function myHandler() {
            console.log("video 2 is done");
        }
        kb2++
        p2Click = true;
    }
    else{
        p2.src = "vid/c2/agL.mp4";
        document.querySelector("#vid2").removeAttribute("loop");
        kb2++;
        p2Promise = true;
    }
}
function C2P3(){
    if(kb3 % 2 == 0){
        p3.src = "vid/c2/cuteA.mp4";
        document.querySelector("#vid3").removeAttribute("loop");
        document.getElementById('vid3').addEventListener('ended',myHandler);
        function myHandler() {
            console.log("video is done");
        }
        kb3++;
        p3Click = true;
    }
    else{
        p3.src = "vid/c2/cuteL.mp4";
        document.querySelector("#vid3").removeAttribute("loop");
        kb3++;
        p3Promise = true;
    }
}
function C2P4(){
    if(kb4 % 2 == 0){
        p4.src = "vid/c2/ckA.mp4";
        document.querySelector("#vid4").removeAttribute("loop");
        document.getElementById('vid4').addEventListener('ended',myHandler);
        function myHandler() {
            console.log("video 4 is done");
        }
        kb4++;
        p4Click = true;

    }
    else{
        p4.src = "vid/c2/ckL.mp4";
        document.querySelector("#vid4").removeAttribute("loop");
        kb4++;
        p4Promise = true;
    }
}
function C2P5(){
    if(kb5 % 2 == 0){
        p5.src = "vid/c2/meA.mp4";
        document.querySelector("#vid5").removeAttribute("loop");
        document.getElementById('vid5').addEventListener('ended',myHandler);
        function myHandler() {
            console.log("video 5 is done");
        }
        
        kb5++;
        p5Click = true;
    }
    else{
        p5.src = "vid/c2/meL.mp4";
        document.querySelector("#vid5").removeAttribute("loop");
        kb5++;
        p5Promise = true;
    }
}
function C2P6(){
    if(kb6 % 2 == 0){
        p6.src = "vid/c2/kbAG.mp4";
        document.querySelector("#vid6").removeAttribute("loop");
        document.getElementById('vid6').addEventListener('ended',myHandler);
        function myHandler() {
            console.log("video 6 is done");
        }
        if(c2click == false){
            increaseGemCount();
            c2click = true;
        }
        kb6++;
        p6Click = true;
    }else{
        p6.src = "vid/c2/kbL.mp4";
        document.querySelector("#vid6").removeAttribute("loop");
        kb6++;
        p6Promise = true;
    }
}
/*----------Cotainer 3 ---------------------------*/

// var c3img = document.querySelector("#C3Image img");
// var C3btn = document.querySelector("#C3Button");

// const images = ['cl.png','ey.png','sm.png','br.png'];
// var C3i =0;

// C3Button.addEventListener("click",C3change);

// function C3change(){
//     if(C3i < 4){
//         c3img.src = `Images/C3/${images[C3i]}`;
//         C3i++;
//     }else{
//         C3i=0;
//         c3img.src = `Images/C3/${images[C3i]}`;
//         C3i++;
//     }
// }
var splide = new Splide( '.splide' );
var bar    = splide.root.querySelector( '.my-slider-progress-bar' );

// Update the bar width:
splide.on( 'mounted move', function () {
  var end = splide.Components.Controller.getEnd() + 1;
  bar.style.width = String( 100 * ( splide.index + 1 ) / end ) + '%';
} );

splide.mount();

/*----------Cotainer 4 ---------------------------*/
/*var C4img = document.querySelector("#C4Image");

C4img.addEventListener("click",C4chnage);

const C4text = ['Loacation: Republic city','Date: 2020/12/01','Population: 60 Million'];
const C4imgs = ['C4_2.jpg','C4_1.jpg'];
var C4i = 0;//change this in a latter stage
var C4m = true;
function C4chnage(){
    if(C4i < 3){
        console.log(`${C4text[C4i]}`);
        C4i++;
    }else{
        if(C4m){
            C4img.src = `Images/C4/${C4imgs[0]}`;
            C4m = false;
        }else{
            C4img.src = `Images/C4/${C4imgs[1]}`;
            C4m = true;
            C4i = 0;
        }
    }
}*/
/*----------Cotainer 5 ---------------------------*/

const hoverables1 = document.querySelector("#c5w1");
const hoverables2 = document.querySelector("#c5w2");
const hoverables3 = document.querySelector("#c5w3");
const hoverables4 = document.querySelector("#c5w4");
const hoverables5 = document.querySelector("#c5w5");
const hoverables6 = document.querySelector("#c5w6");

const srch = document.querySelector('#srch');

var intervalId = window.setInterval(function(){
    if(elementsOverlap(hoverables1,srch)){
        hoverables1.src = 'Images/C5/v.png'
    }else{
        hoverables1.src = 'Images/C5/place.png'
    }
  }, 100);

  var intervalId = window.setInterval(function(){
    if(elementsOverlap(hoverables2,srch)){
        hoverables2.src = 'Images/C5/b.png'
    }else{
        hoverables2.src = 'Images/C5/place.png'
    }
  }, 100);
  
  var intervalId = window.setInterval(function(){
    if(elementsOverlap(hoverables3,srch)){
        hoverables3.src = 'Images/C5/s.png'
    }else{
        hoverables3.src = 'Images/C5/place.png'
    }
  }, 100);

  var intervalId = window.setInterval(function(){
    if(elementsOverlap(hoverables4,srch)){
        hoverables4.src = 'Images/C5/g.png'
    }else{
        hoverables4.src = 'Images/C5/place.png'
    }
  }, 100);

  var intervalId = window.setInterval(function(){
    if(elementsOverlap(hoverables5,srch)){
        hoverables5.src = 'Images/C5/m.png'
    }else{
        hoverables5.src = 'Images/C5/place.png'
    }
  }, 100);

  const c5vid = document.querySelector('#c5vid');
  var c5vidCheck = false;
  var intervalId = window.setInterval(function(){
    if(elementsOverlap(hoverables6,srch)){
        hoverables6.src = 'Images/C5/r.png';
        if(c5vidCheck == false){
            c5vid.src = "Vid/C5/vern2_2.mp4";
            c5vidCheck = true;
            increaseGemCount();
            // var moreinterval = window.setInterval(function(){
            //     if(c5vidCheck == true){
            //         c5vid.src = "Vid/C5/vern.mp4";
            //         c5vidCheck = false;
            //     }
            // },10000)
        }
    }else{
        hoverables6.src = 'Images/C5/place.png'
    }
  }, 100);

new agnosticDraggable.Draggable(srch, {
	container: '#container5',
    
});

function elementsOverlap(el1, el2) {
    const domRect1 = el1.getBoundingClientRect();
    const domRect2 = el2.getBoundingClientRect();
  
    return !(
      domRect1.top > domRect2.bottom ||
      domRect1.right < domRect2.left ||
      domRect1.bottom < domRect2.top ||
      domRect1.left > domRect2.right
    );
  }


/*-------------C6_1---------------------------*/
// const sortableDiv = document.querySelector('#containerData');
var gemmies1 = document.querySelector("#gm1");
var gemmies2 = document.querySelector("#gm2");
var gemmies3 = document.querySelector("#gm3");
var gemmies4 = document.querySelector("#gm4");
var gemmies5 = document.querySelector("#gm5");
var holder = document.querySelector("#potie");
var potter = document.querySelector("#poter");
var c6vid = document.querySelector("#c6vid")

new agnosticDraggable.Draggable(gemmies1,{
    cursor: 'move',
    zIndex: 1,
})

new agnosticDraggable.Draggable(gemmies2,{
    cursor: 'move',
    zIndex: 1,
})

new agnosticDraggable.Draggable(gemmies3,{
    cursor: 'move',
    zIndex: 100000,
})

new agnosticDraggable.Draggable(gemmies4,{
    cursor: 'move',
    zIndex: 1,
})

new agnosticDraggable.Draggable(gemmies5,{
    cursor: 'move',
    zIndex: 1,
})
function check50(){
    
    transfer();
    if(potct == 25){
        holder.src = "images/C6_1/crt25.png";
        potter.src = "images/C6_1/crt25.png";
        C6cont.classList.remove("disapear");
        c6vid.src = "Vid/C6_1/idfull.mp4";
    }
    else if(potct == 20){
        holder.src = "images/C6_1/crt20.png";
        potter.src = "images/C6_1/crt20.png";
    }
    else if(potct == 15){
        holder.src = "images/C6_1/crt15.png";
        potter.src = "images/C6_1/crt15.png";
    }
    else if(potct == 10){
        holder.src = "images/C6_1/crt10.png";
        potter.src = "images/C6_1/crt10.png";
    }
    else if(potct == 5){
        holder.src = "images/C6_1/crt5.png";
        potter.src = "images/C6_1/crt5.png";
    }
}

function transfer(){  
    if(toint == 0){
        return;
    }
    potct += 5;
    toint -= 5;
    potgemcount.innerHTML =  potct;
    gemcount.innerHTML = toint;
}

var intervalId = window.setInterval(function(){
    if(elementsOverlap(gemmies1,holder) && toint != 0){
        gemmies1.classList.add("disapear");
        check50()
    }
  }, 500);

  var intervalId = window.setInterval(function(){
    if(elementsOverlap(gemmies2,holder)&& toint != 0){
        gemmies2.classList.add("disapear");
        check50()
    }
  }, 500);

  var intervalId = window.setInterval(function(){
    if(elementsOverlap(gemmies3,holder)&& toint != 0){
        gemmies3.classList.add("disapear");
        check50()
    }
  }, 500);

  var intervalId = window.setInterval(function(){
    if(elementsOverlap(gemmies4,holder)&& toint != 0){
        gemmies4.classList.add("disapear");
        check50()
    }
  }, 500);

  var intervalId = window.setInterval(function(){
    if(elementsOverlap(gemmies5,holder)&& toint != 0){
        gemmies5.classList.add("disapear");
        check50()
    }
  }, 500);

function elementsOverlap(el1, el2) {
    const domRect1 = el1.getBoundingClientRect();
    const domRect2 = el2.getBoundingClientRect();
  
    return !(
      domRect1.top > domRect2.bottom ||
      domRect1.right < domRect2.left ||
      domRect1.bottom < domRect2.top ||
      domRect1.left > domRect2.right
    );
  }

/*-------------Cotainer 6 ---------------------------*/
const C6imgs = document.querySelector("#C6btn");
const C6img = document.querySelector("#C6Image");
var C6cont = document.querySelector("#container6");

var C6i = 1;

C6imgs.addEventListener('click',C6change);


function C6change(){
    console.log("hello");
    if(C6i < 5){
        C6img.src = `images/C6/p${[C6i]}.png`;
        C6i++;
    }else{
        C6i = 0;
        C6change();
    }
}