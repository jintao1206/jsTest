var input = document.querySelectorAll('#fill_in input'); //年月日输入框
var target = document.querySelector('#target strong'); //输入的年月日(现在距离-)
var go = document.querySelector('#go'); //倒计时按钮
var ps = document.querySelectorAll('#date p');
var nowDate = new Date();
var wishDate = null;
var timer = null;
var onOff = true;

init();
//执行倒计时
go.onclick=function () {
  if(!onOff) return;
    onOff = false;
    var year = input[0].value;
    var month = input[1].value - 1;
    var day = input[2].value;
    wishDate = new Date(year, month, day);
    timer = setInterval(function(){
        upDate();
    },1000);
    upDate();
}
//初始化
function init(){
    input[0].value = nowDate.getFullYear();
    input[1].value = nowDate.getMonth() + 1;
    input[2].value = nowDate.getDate();
    target.innerHTML = setFormat();
}

//设置格式
function setFormat(){
    var txt = nowDate.getFullYear() + '年' + (nowDate.getMonth() + 1) + '月' + nowDate.getDate() + '日';
    return txt;
}

function upDate() {
    nowDate = new Date();
    var dis = wishDate - nowDate;
    if (dis <= 0) {
        alert('不需要执行倒计时');
        clearInterval(timer);
        onOff = true;
        return;
    }
    time(wishDate);
}

function time(f) {
    let o = new Date(); //当前的时间
    let t = Math.floor(f - o)/1000;
    if(t < 0){
        clearInterval(timer);
        alert('时间到');
    }else{
        var timeArr=[];
        timeArr[0] = Math.floor(t/86400);
        timeArr[1]= Math.floor(t%86400/3600);
        timeArr[2] = Math.floor(t%86400%3600/60);
        timeArr[3]= Math.floor(t%60);
        for (var i = 0; i < timeArr.length;i++){
            timeArr[i] = toDou(timeArr[i]);
        }
        for(var i=0;i<timeArr.length;i++){
            ps[i].innerHTML=timeArr[i];
        }
    }
}

function toDou(n){
    return n < 10?'0'+n:''+n;
}