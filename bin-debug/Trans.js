var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Trans = (function () {
    function Trans(theContainer) {
        this.init(theContainer);
    }
    Trans.prototype.init = function (theContainer) {
        var square = new egret.Shape();
        square.graphics.beginFill(0xe88822);
        square.graphics.drawRect(50, 200, 100, 100);
        square.graphics.endFill();
        square.anchorOffsetX = square.width / 2;
        square.anchorOffsetY = square.height / 2;
        theContainer.addChild(square);
        var btn1 = new egret.TextField();
        btn1.text = "尺寸变化";
        btn1.x = 10;
        btn1.y = 250;
        theContainer.addChild(btn1);
        btn1.touchEnabled = true;
        btn1.addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
            square.scaleX = 2;
            square.scaleY = 2;
        }, theContainer);
        var btn2 = new egret.TextField();
        btn2.text = "角度变化";
        btn2.x = 30;
        btn2.y = 300;
        theContainer.addChild(btn2);
        btn2.touchEnabled = true;
        btn2.addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
            square.rotation += 45;
        }, theContainer);
        var btn3 = new egret.TextField();
        btn3.text = "斜切变化";
        btn3.x = 50;
        btn3.y = 350;
        theContainer.addChild(btn3);
        btn3.touchEnabled = true;
        btn3.addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
            square.skewX = 10;
        }, theContainer);
    };
    return Trans;
}());
__reflect(Trans.prototype, "Trans");
//# sourceMappingURL=Trans.js.map