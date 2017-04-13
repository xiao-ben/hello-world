function getStyle(obj,attr){
if(obj.currentStyle){
    return obj.currentStyle[attr];}
 else{
    return getComputedStyle(obj,false)[attr];}
}

function starMove(obj,json,fn){     
    clearInterval(obj.timer);//必须清空计时器 不然会抽搐;
    obj.timer=setInterval(function(){
    //获取当前的属性值
    for(var attr in json){
    var wit=0;
    var flag=true;//写到循环里边；
    if(attr=='opacity')
        {wit=parseFloat(getStyle(obj,attr))*100;}
    else
        {wit=parseInt(getStyle(obj,attr));
        } 
     //计算速度值   
    var speed=(json[attr]-wit)/10;
        speed=speed>0?Math.ceil(speed):Math.floor(speed);
     //判断是否达到目标值
    if(wit!=json[attr])
        {flag=false;}
    if(attr=='opacity'){
         obj.style[attr]=(wit+speed)/100;
    } 
    else{
        obj.style[attr]=wit+speed+'px';
        } 
        
    }
    //是否清空计时器
    if(flag)
            {clearInterval(obj.timer);
    //是否执行回调函数
    if(fn){
            fn()
            }
        }
    },5 )	
}
