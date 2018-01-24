/**
 * Created by Administrator on 2017/5/23.
 */
function shake(obj,attr,endFn){
    if( obj.shaked ) { return; }   //值为true，则程序未执行完，返回，不执行下列代码
    obj.shaked = true;     //执行程序时，值为true

    var pos=parseInt(getStyle(obj,attr));
    var arr=[];
    var num=0;
    for(var i=20;i>0;i-=2){
        arr.push(i,-i);
    }
    arr.push(0);

    clearInterval(obj.shake);
    obj.shake=setInterval(function(){
        obj.style[attr]=pos+arr[num]+'px';
        num++;
        if(num===arr.length){
            clearInterval(obj.shake);
            endFn&&endFn();
            obj.shaked = false;   //程序执行完，将true改为false，以便下次执行循环
    }
    },50);
}

function getStyle(obj,attr){
    return obj.currentStyle?obj.currentStyle[attr]:getComputedStyle(obj)[attr];
}





/*另一种写法*/

/*function shake(obj,attr,endFn){
    if(obj.shaked==false||obj.shaked==undefined){
        obj.shaked=true;
        var pos=parseInt(getStyle(obj,attr));
        var arr=[];
        var num=0;
        for(var i=20;i>0;i-=2){
            arr.push(i,-i);
        }
        arr.push(0);

        clearInterval(obj.shake);
        obj.shake=setInterval(function(){
            obj.style[attr]=pos+arr[num]+'px';
            num++;
            if(num===arr.length){
                clearInterval(obj.shake);
                endFn&&endFn();
                obj.shaked = false;
            }
        },50);
    }
}

function getStyle(obj,attr){
    return obj.currentStyle?obj.currentStyle[attr]:getComputedStyle(obj)[attr];
}*/
