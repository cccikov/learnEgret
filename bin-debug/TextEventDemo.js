var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var TextEventDemo = (function (_super) {
    __extends(TextEventDemo, _super);
    function TextEventDemo() {
        var _this = _super.call(this) || this;
        var tx = new egret.TextField;
        tx.textFlow = new Array({
            text: "这段文字有链接",
            style: {
                "href": "event:text event triggered" //"href":"http://www.baidu.com" 
            }
        }, {
            text: "n这段文字无连接",
            style: {
                "textColor": 0xff0000
            }
        });
        tx.touchEnabled = true;
        tx.addEventListener(egret.TextEvent.LINK, function (evt) {
            console.log(evt.text);
        }, _this);
        tx.x = 10;
        tx.y = 90;
        _this.addChild(tx);
        return _this;
    }
    return TextEventDemo;
}(egret.DisplayObjectContainer));
__reflect(TextEventDemo.prototype, "TextEventDemo");
