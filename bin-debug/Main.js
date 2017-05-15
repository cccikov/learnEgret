var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        var _this = _super.call(this) || this;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        return _this;
    }
    Main.prototype.onAddToStage = function (event) {
        var _myGrid = new MyGrid();
        this.addChild(_myGrid);
        var shp = new egret.Shape();
        shp.graphics.beginFill(0x00ff00);
        shp.graphics.drawRect(0, 0, 100, 100);
        shp.graphics.endFill();
        shp.x = 100;
        shp.y = 100;
        this.addChild(shp);
        setTimeout(function () {
            shp.anchorOffsetX = 50;
        }, 2000);
        // 创建一个空的DisplayObjectContainer，把它的x和y坐标都改为
        var container = new egret.DisplayObjectContainer(); //这是一个舞台？
        container.x = 200;
        container.y = 200;
        this.addChild(container);
        // 画一个红色的圆，添加到container中
        var circle = new egret.Shape();
        circle.graphics.beginFill(0xff0000);
        circle.graphics.drawCircle(25, 25, 25);
        circle.graphics.endFill();
        container.addChild(circle);
        // 给圆增加点击事件
        circle.touchEnabled = true;
        circle.addEventListener(egret.TouchEvent.TOUCH_TAP, onclick, this);
        function onclick() {
            // 把舞台左上角的坐标(0,0)转换为container内部的坐标
            var targetPoint = container.globalToLocal(0, 0);
            // 重新定位圆,可以看出圆形移到了屏幕的左上角
            circle.x = targetPoint.x;
            circle.y = targetPoint.y;
        }
        new Drag(this);
        new Move(this);
        new Trans(this);
    };
    return Main;
}(egret.DisplayObjectContainer));
__reflect(Main.prototype, "Main");
//# sourceMappingURL=Main.js.map