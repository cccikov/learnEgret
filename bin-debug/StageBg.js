var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var StageBg = (function (_super) {
    __extends(StageBg, _super);
    function StageBg(color, arr) {
        var _this = _super.call(this) || this;
        _this.graphics.beginFill(color);
        _this.graphics.drawRect(arr[0], arr[1], arr[2], arr[3]);
        _this.graphics.endFill();
        return _this;
    }
    return StageBg;
}(egret.Shape));
__reflect(StageBg.prototype, "StageBg");
