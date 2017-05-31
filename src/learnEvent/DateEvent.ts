// 这是一个事件类，用于构造事件对象
class DateEvent extends egret.Event{
    public static DATE:string = "约会";//boy class里面new DateEvent(DateEvent.DATE),这里实质new DateEvent("约会",false,false)
    public _year:number = 0;
    public _month:number = 0;
    public _date:number = 0;

    public _where:string = "";
    public _todo:string = "";
    public constructor(type:string,bubbles:boolean = false,cancelable:boolean = false){
        super(type,bubbles,cancelable);
    }

}