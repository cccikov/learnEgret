var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Trans = (function (_super) {
    __extends(Trans, _super);
    function Trans() {
        var _this = _super.call(this) || this;
        _this.changeSize = false;
        _this.changeSkew = false;
        _this.init();
        return _this;
    }
    Trans.prototype.init = function () {
        var square = new egret.Shape();
        square.graphics.beginFill(0xe88822);
        square.graphics.drawRect(0, 0, 150, 100);
        square.anchorOffsetX = square.width / 2;
        square.anchorOffsetY = square.height / 2;
        square.x = square.anchorOffsetX + 250;
        square.y = square.anchorOffsetY + 250;
        square.graphics.endFill();
        this.addChild(square);
        // 这些变化要好注重锚点位置.
        var btn1 = new egret.TextField();
        btn1.text = "尺寸变化";
        btn1.textColor = 0x333333;
        btn1.x = 10;
        btn1.y = 250;
        this.addChild(btn1);
        btn1.touchEnabled = true;
        btn1.addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
            if (!this.changeSize) {
                this.changeSize = true;
                square.scaleX = 2;
                square.scaleY = 2;
            }
            else {
                this.changeSize = false;
                square.scaleX = 1;
                square.scaleY = 1;
            }
        }, this);
        var btn2 = new egret.TextField();
        btn2.text = "角度变化";
        btn2.textColor = 0x333333;
        btn2.x = 10;
        btn2.y = 300;
        this.addChild(btn2);
        btn2.touchEnabled = true;
        btn2.addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
            square.rotation += 45;
        }, this);
        var btn3 = new egret.TextField();
        btn3.text = "斜切变化";
        btn3.textColor = 0x333333;
        btn3.x = 10;
        btn3.y = 350;
        this.addChild(btn3);
        btn3.touchEnabled = true;
        btn3.addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
            if (!this.changeSkew) {
                this.changeSkew = true;
                square.skewX = 10;
            }
            else {
                this.changeSkew = false;
                square.skewX = -10;
            }
        }, this);
    };
    return Trans;
}(egret.DisplayObjectContainer));
__reflect(Trans.prototype, "Trans");
