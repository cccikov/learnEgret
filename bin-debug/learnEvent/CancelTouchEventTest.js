var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var CancelTouchEventTest = (function (_super) {
    __extends(CancelTouchEventTest, _super);
    function CancelTouchEventTest() {
        var _this = _super.call(this) || this;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        return _this;
    }
    CancelTouchEventTest.prototype.onAddToStage = function (event) {
        var scroller = new eui.Scroller(); //添加库时,即使是egret自带库,也要在wing,才会添加了那个库
        var list = new eui.List();
        list.itemRendererSkinName = "\n        <e:Skin states=\"up,down,disabled\" minHeight=\"50\" minWidth=\"100\" xmlns:e=\"http://ns.egret.com/eui\"> <e:Image width=\"100%\" height=\"100%\" scale9Grid=\"1,3,8,8\" alpha.disabled=\"0.5\"\n                     source=\"resource/up.png\"\n                     source.down=\"resource/down.png\"/> <e:Label text=\"{data}\" top=\"8\" bottom=\"8\" left=\"8\" right=\"8\"\n                     textColor=\"0xFFFFFF\" verticalAlign=\"middle\" textAlign=\"center\"/> </e:Skin>";
        var ac = new eui.ArrayCollection([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]);
        list.dataProvider = ac;
        scroller.viewport = list;
        scroller.height = 200;
        this.addChild(scroller);
        scroller.addEventListener(egret.TouchEvent.TOUCH_BEGIN, function () { console.log("111 Scroller Begin"); }, this);
        list.addEventListener(egret.TouchEvent.TOUCH_BEGIN, function () { console.log("111 List Begin"); }, this);
        scroller.addEventListener(egret.TouchEvent.TOUCH_END, function () { console.log("222 Scroller END"); }, this);
        list.addEventListener(egret.TouchEvent.TOUCH_END, function () { console.log("222 List END"); }, this);
        scroller.addEventListener(egret.TouchEvent.TOUCH_TAP, function () { console.log("33 Scroller Tap"); }, this);
        list.addEventListener(egret.TouchEvent.TOUCH_TAP, function () { console.log("33 List Tap"); }, this);
        scroller.addEventListener(egret.TouchEvent.TOUCH_CANCEL, function () { console.log("44 Scroller cancel"); }, this);
        list.addEventListener(egret.TouchEvent.TOUCH_CANCEL, function () { console.log("44 List cancel"); }, this);
    };
    return CancelTouchEventTest;
}(egret.DisplayObjectContainer));
__reflect(CancelTouchEventTest.prototype, "CancelTouchEventTest");
