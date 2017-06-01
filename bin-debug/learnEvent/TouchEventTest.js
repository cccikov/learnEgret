var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var TouchEventTest = (function (_super) {
    __extends(TouchEventTest, _super);
    function TouchEventTest() {
        var _this = _super.call(this) || this;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        return _this;
    }
    TouchEventTest.prototype.onAddToStage = function (event) {
        // 添加绘制文本
        this.drawText();
        //  绘制一个透明度为1的矩形 , 100*80
        var spr = new egret.Sprite();
        spr.graphics.beginFill(0x00ff00, 1);
        spr.graphics.drawRect(0, 0, 100, 80);
        spr.graphics.endFill();
        spr.width = 100;
        spr.height = 80;
        this.addChild(spr);
        spr.touchEnabled = true;
        // 注册监听器
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.bubble, this);
        spr.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch, this);
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.capture, this, true);
    };
    // 监听器
    TouchEventTest.prototype.onTouch = function (evt) {
        this.txt.text += "\n点击了spr";
    };
    TouchEventTest.prototype.bubble = function (evt) {
        this.txt.text += "\n冒泡侦听\n----------------";
    };
    TouchEventTest.prototype.capture = function (evt) {
        this.txt.text += "\n----------------\n捕获侦听";
    };
    TouchEventTest.prototype.drawText = function () {
        this.txt = new egret.TextField();
        var txt = this.txt;
        txt.size = 16;
        txt.x = 250;
        txt.width = 200;
        txt.height = 200;
        txt.text = "事件文字";
        this.addChild(this.txt);
    };
    return TouchEventTest;
}(egret.DisplayObjectContainer));
__reflect(TouchEventTest.prototype, "TouchEventTest");
