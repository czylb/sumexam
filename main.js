"use strict";
var change = document.querySelector('#change'),
    change1 = document.querySelector('#change1'),
    info = document.querySelectorAll('.info'), 
    slider = document.querySelector('.slider'),
    same = document.querySelectorAll('.same'),
    bancon = document.querySelector('.banCon'),
    cir = document.querySelectorAll('#cir li'),
    flag = 0,
    index = same.length,
    time = setInterval("animate();",3000),
    menu = document.querySelector('#menu');
    // console.log(cir);
change.addEventListener('click',function(){
    menu.style.top = 0 + 'rem';
})
change1.addEventListener('click',function(){
    menu.style.top = -1140 + 'rem';
})
function animate(val) {//轮播函数
    if(val != null) {
        flag = val - 2;
    }
    if(flag < index - 1) {
        flag++; 
    }
    else {
        flag = 0;
    }
    slider.style.left = flag * -640 / 64 + 'rem';
    for (var i = 0; i < cir.length; i++) {
    	cir[i].className = '';
    }
    cir[flag].className = 'show';
}






