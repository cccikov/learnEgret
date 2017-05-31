class SampleDate extends egret.DisplayObjectContainer{
    public constructor(){
        super();

        console.log(egret.Capabilities.renderMode);

        var boy:Boy = new Boy();
        boy.name = "ccc";

        var girl:Girl = new Girl();
        girl.name = "tomato";

        // 注册监听器
        boy.addEventListener(DateEvent.DATE,girl.getDate,this);//监听器是girl.getDate方法 , 由girl 创建, 由boy注册
        boy.addEventListener("约会",function(evt:Event):void{
            console.log(evt);
        },this,false,9);//冒泡阶段,优先级

        // 男朋友发送要求
        boy.order();//触发事件

        console.log(boy.willTrigger(DateEvent.DATE));

        // 约会邀请完成后,移除监听器
        boy.removeEventListener(DateEvent.DATE,girl.getDate,this);
    }
}