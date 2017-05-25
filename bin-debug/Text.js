var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var CccText = (function (_super) {
    __extends(CccText, _super);
    function CccText() {
        var _this = _super.call(this) || this;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        return _this;
    }
    CccText.prototype.onAddToStage = function (event) {
        var tx = new egret.TextField;
        tx.width = 400;
        tx.x = 10;
        tx.y = 10;
        tx.textColor = 0;
        tx.size = 20;
        tx.fontFamily = "微软雅黑";
        tx.textAlign = egret.HorizontalAlign.CENTER;
        tx.textFlow = [
            { text: "妈妈再也不用担心我在", style: { "size": 12 } },
            { text: "Egret", style: { "textColor": 0x336699, "size": 60, "strokeColor": 0x6699cc, "stroke": 2 } },
            { text: "里说一句话不能包含各种", style: { "fontFamily": "楷体" } },
            { text: "五", style: { "textColor": 0xff0000 } },
            { text: "彩", style: { "textColor": 0x00ff00 } },
            { text: "缤", style: { "textColor": 0xf000f0 } },
            { text: "纷", style: { "textColor": 0x00ffff } },
            { text: "、\n" },
            { text: "大", style: { "size": 36 } },
            { text: "小", style: { "size": 6 } },
            { text: "不", style: { "size": 16 } },
            { text: "一", style: { "size": 24 } },
            { text: "、" },
            { text: "格", style: { "italic": true, "textColor": 0x00ff00 } },
            { text: "式", style: { "size": 16, "textColor": 0xf000f0 } },
            { text: "各", style: { "italic": true, "textColor": 0xf06f00 } },
            { text: "样", style: { "fontFamily": "楷体" } },
            { text: "" },
            { text: "的文字了！" }
        ];
        this.addChild(tx);
    };
    return CccText;
}(egret.DisplayObjectContainer));
__reflect(CccText.prototype, "CccText");
