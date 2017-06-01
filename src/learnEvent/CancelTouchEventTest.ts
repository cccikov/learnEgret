class CancelTouchEventTest extends egret.DisplayObjectContainer {//不可以直接叫做TouchEvent , TouchEvent是关键字,是egret的一个核心类
    public constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    private onAddToStage(event: egret.Event) {
        var scroller = new eui.Scroller();//添加库时,即使是egret自带库,也要在wing,才会添加了那个库
        var list = new eui.List();
        list.itemRendererSkinName = `
        <e:Skin states="up,down,disabled" minHeight="50" minWidth="100" xmlns:e="http://ns.egret.com/eui"> <e:Image width="100%" height="100%" scale9Grid="1,3,8,8" alpha.disabled="0.5"
                     source="resource/up.png"
                     source.down="resource/down.png"/> <e:Label text="{data}" top="8" bottom="8" left="8" right="8"
                     textColor="0xFFFFFF" verticalAlign="middle" textAlign="center"/> </e:Skin>`
        var ac = new eui.ArrayCollection([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]);
        list.dataProvider = ac;
        scroller.viewport = list;
        scroller.height = 200;
        this.addChild(scroller);


        scroller.addEventListener(egret.TouchEvent.TOUCH_BEGIN, () => { console.log("111 Scroller Begin") }, this);
        list.addEventListener(egret.TouchEvent.TOUCH_BEGIN, () => { console.log("111 List Begin") }, this);
        scroller.addEventListener(egret.TouchEvent.TOUCH_END, () => { console.log("222 Scroller END") }, this);
        list.addEventListener(egret.TouchEvent.TOUCH_END, () => { console.log("222 List END") }, this);
        scroller.addEventListener(egret.TouchEvent.TOUCH_TAP, () => { console.log("33 Scroller Tap") }, this);
        list.addEventListener(egret.TouchEvent.TOUCH_TAP, () => { console.log("33 List Tap") }, this);
        scroller.addEventListener(egret.TouchEvent.TOUCH_CANCEL, () => { console.log("44 Scroller cancel") }, this);
        list.addEventListener(egret.TouchEvent.TOUCH_CANCEL, () => { console.log("44 List cancel") }, this);
    }
}
