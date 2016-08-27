"use strict";
var change = document.querySelector('#change'),
    change1 = document.querySelector('#change1'),
    info1 = document.querySelectorAll('.info1'), 
    info = document.querySelectorAll('.info'),
    menu = document.querySelector('#menu');
change.addEventListener('click',function(){
    menu.style.top = 0 + 'rem';
})
change1.addEventListener('click',function(){
    menu.style.top = -1140 + 'rem';
})
for (var i = 0; i < 12; i++) {
	info1[i].addEventListener('click',function () {
		menu.style.top = -1140 + 'rem';
	})
}
for (var i = 0; i < 12; i++) {
	info[i].addEventListener('click',function () {
		info1[i].innerHTML = info[i].innerHTML;
	})
}






