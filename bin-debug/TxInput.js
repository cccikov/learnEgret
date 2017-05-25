var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var TxInput = (function (_super) {
    __extends(TxInput, _super);
    function TxInput() {
        var _this = _super.call(this) || this;
        _this._container = new egret.Sprite();
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, function () {
            this._container.width = 400;
            this._container.height = 400;
            this._container.x = 100;
            this._container.y = 100;
            this.addChild(this._container);
            var txInput = new egret.TextField();
            txInput.type = egret.TextFieldType.INPUT;
            txInput.width = 200;
            txInput.height = 30;
            txInput.scaleY = 0.6;
            txInput.scaleX = 0.6;
            txInput.x = 0;
            txInput.y = 0;
            txInput.textColor = 0x000000;
            console.log(this._container);
            this.layTxBg(txInput);
        }, _this);
        return _this;
    }
    TxInput.prototype.layTxBg = function (tx) {
        var shp = new egret.Shape();
        shp.graphics.beginFill(0xffffff);
        shp.graphics.drawRect(tx.x, tx.y, tx.width * tx.scaleX, tx.height * tx.scaleY);
        shp.graphics.endFill();
        this._container.addChild(shp);
        this._container.addChild(tx);
    };
    return TxInput;
}(egret.DisplayObjectContainer));
__reflect(TxInput.prototype, "TxInput");
