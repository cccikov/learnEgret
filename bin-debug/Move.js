var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Move = (function () {
    function Move(theContainer) {
        this.init(theContainer);
    }
    Move.prototype.init = function (theContainer) {
        // 创建一个文本框,设定一个scrollRect限制显示范围
        var bigText = new egret.TextField();
        bigText.text = "平移和滚动显示对象,平移和滚动显示对象";
        bigText.scrollRect = new egret.Rectangle(0, 0, 200, 50); //限制范围
        bigText.cacheAsBitmap = true;
        theContainer.addChild(bigText);
        // 创建一个方块,点击文本左移
        var btnLeft = new egret.Shape();
        btnLeft.graphics.beginFill(0xcccc01);
        btnLeft.graphics.drawRect(0, 0, 50, 50);
        btnLeft.graphics.endFill();
        btnLeft.x = 50;
        btnLeft.y = 50;
        theContainer.addChild(btnLeft);
        btnLeft.touchEnabled = true;
        btnLeft.addEventListener(egret.TouchEvent.TOUCH_TAP, scroll, theContainer);
        function scroll(e) {
            var rect = bigText.scrollRect;
            rect.x += 20;
        }
    };
    return Move;
}());
__reflect(Move.prototype, "Move");
//# sourceMappingURL=Move.js.map