;(function () {
    var url = '/news?num=5';//新闻接口
    var xhr = new XMLHttpRequest();
    xhr.open('get', url, true);
    xhr.onload = function (e) {
        if (this.status === 200) {
            callback(JSON.parse(this.responseText));
        }
    }
    xhr.send();

    function callback (res) {
        // console.log(res);
        var picture, title, description, number, newsType, typeword;
        picture = document.querySelectorAll('.picture');
        description = document.querySelectorAll('.description');
        title = document.querySelectorAll('.title');
        number = document.querySelectorAll('.number');
        newsType = document.querySelectorAll('.newsType');
        typeword = document.querySelectorAll('.typeword');
        num = res.length;
        for(var i = 0; i < num; i ++) {
            picture[i].src = res[i].imgURL;
            title[i].innerHTML = res[i].title;
            title[i].href = res[i].link;
            description[i].innerHTML = res[i].description;
            if (res[i].post) {
                if (res[i].post > 10000) {
                    number[i].innerHTML = parseInt(res[i].post / 10000) + "万人跟帖";
                } else {
                    number[i].innerHTML = res[i].post + "人跟帖";
                }
            }
            if (res[i].type) {
                newsType[i].style.backgroundColor = res[i].typeColor;
                typeword[i].innerHTML = res[i].type;
            }
        }           
    }

}());