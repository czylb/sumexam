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
        cir = document.querySelectorAll('#cir');
        console.log(cir.length);
        num = res.length;
        for(var i = 0; i < num; i ++) {
            var flag = 0;
            pics[i].src = res[i].imgURL;
            banTitle.innerHTML = res[flag].title;
        }           
    }

}());