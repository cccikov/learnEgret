class SampleDate extends egret.DisplayObjectContainer{
    public constructor(){
        super();

        var boy:Boy = new Boy();
        boy.name = "ccc";

        var girl:Girl = new Girl();
        girl.name = "tomato";

        // 注册监听器
        boy.addEventListener(DateEvent.DATE,girl.getDate,girl);

        // 男朋友发送要求
        boy.order();//触发事件

        // 约会邀请完成后,移除监听器
        boy.removeEventListener(DateEvent.DATE,girl.getDate,girl);
    }
}