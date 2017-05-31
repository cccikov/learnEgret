class Boy extends egret.Sprite{
    public constructor(){
        super();
    }
    public order():void{
        // 创建约会事件对象
        // var dateEvent:DateEvent = new DateEvent(DateEvent.DATE);//实质new DateEvent("约会",false,false)
        var dateEvent:DateEvent = new DateEvent("约会",false,false);
        // 添加对应的约会信息
        dateEvent._year = 2017;
        dateEvent._month = 8;
        dateEvent._date = 2;
        dateEvent._where = "7天连锁酒店";
        dateEvent._todo = "嘿嘿嘿";

        // 发送(触发)事件
        console.log("抛出一个事件",this.dispatchEvent(dateEvent));
    }
}