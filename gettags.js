;(function () {
    var url = '/tags';//标签接口
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
        var info, info1, label;
        info = document.querySelectorAll('.info');
        info1 = document.querySelectorAll('.info1');
        label = document.querySelectorAll('.label');
        var num = res.avaliable.length;
        for(var i = 0; i < num; i ++) {
            info[i].innerHTML = res.avaliable[i].name;
            info1[i].innerHTML = res.added[i].name;
            label[i].innerHTML = res.added[i].name; 
        }           
    }
}());