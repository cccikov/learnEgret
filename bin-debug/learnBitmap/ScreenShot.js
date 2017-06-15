var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ScreenShot = (function (_super) {
    __extends(ScreenShot, _super);
    function ScreenShot() {
        var _this = _super.call(this) || this;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, function () {
        }, _this);
        return _this;
    }
    return ScreenShot;
}(egret.DisplayObjectContainer));
__reflect(ScreenShot.prototype, "ScreenShot");
