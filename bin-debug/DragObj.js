var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
// 拖拽对象 将对象变成可拖拽
var DragObj = (function () {
    function DragObj(theDragObj, theStage, fn) {
        var the = theDragObj;
        var offsetX, offsetY;
        the.touchEnabled = true;
        the.addEventListener(egret.TouchEvent.TOUCH_BEGIN, startMove, this);
        the.addEventListener(egret.TouchEvent.TOUCH_END, stopMove, this);
        function startMove(e) {
            offsetX = e.stageX - the.x;
            offsetY = e.stageY - the.y;
            theStage.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE, onMove, this);
        }
        function stopMove(e) {
            theStage.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE, onMove, this);
        }
        function onMove(e) {
            the.x = e.stageX - offsetX;
            the.y = e.stageY - offsetY;
            if (fn) {
                fn();
            }
        }
    }
    return DragObj;
}());
__reflect(DragObj.prototype, "DragObj");
