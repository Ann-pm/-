/**
 * Created by Administrator on 2017/5/23.
 */

/*
写封装函数的大致思路：
确定参数-判断方向的正反向-清除定时器-进行判断，和循环语句，当超过目标时，将最后的值设为目标值-设置渐变的代码--设置判断语句，
当目标值达到时，清除定时器及执行回调函数

*/



function opacity(obj,step, target, frequency, endFn){
    var currentOpacity=getStyle(obj,'opacity')*100;
    step = currentOpacity < target ? step : -step;

    clearInterval(obj.alpha);

    obj.alpha=setInterval(function(){
        currentOpacity=getStyle(obj,'opacity')*100;
        var nextOpacity=currentOpacity + step;
        if(step>0 && nextOpacity > target || step < 0 && nextOpacity < target ){
            nextOpacity=target;
        }
        obj.style.opacity = nextOpacity/100;
        obj.style.filter='alpha(opacity:'+nextOpacity+')';
        if(nextOpacity == target){
            clearInterval(obj.alpha);
            endFn&&endFn();
        }
    },frequency);
}
function getStyle(obj,attr){
    return obj.currentStyle?obj.currentStyle[attr]:getComputedStyle(obj)[attr];
}
