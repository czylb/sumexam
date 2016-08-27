;(function () {
    var url = '/sliders';//图片接口
    var xhr = new XMLHttpRequest();
    xhr.open('get', url, true);
    xhr.onload = function (e) {
        if (this.status === 200) {
            callback(JSON.parse(this.responseText));
        }
    }
    xhr.send();

    function callback (res) {
        console.log(res);
        var pics, banTitle, cir;
        pics = document.querySelectorAll('.pics');
        banTitle = document.querySelector('#banTitle');
        slider = document.querySelector('.slider');
        cir = document.querySelector('#cir');
        same = document.querySelectorAll('.same');
        num = res.length;
        for(var i = 0; i < num; i ++) {
            var newDiv = document.createElement("div");
            newDiv.className = "same";
            var newLi = document.createElement("li");
            slider.appendChild(newDiv);
            cir.appendChild(newLi);
            var newImg = document.createElement("img");
            newImg.src = res[i].imgURL;
            newDiv.appendChild(newImg);
        } 

        var cirs = document.querySelectorAll('#cir li'),
            flag = 0,
            index = cirs.length;
        var time = setInterval(animate,3000);
            cirs[0].className = 'show';
            slider.style.width = index * 640 / 64 + 'rem';
            console.log(slider.style.width);

        var animate = function (val) { //轮播函数
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
            for (var i = 0; i < cirs.length; i++) {
                cirs[i].className = '';
            }
            cirs[flag].className = 'show';
        }
    }

    
}());