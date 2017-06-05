var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// 加载图片 位图纹理 
var BitmapTest = (function (_super) {
    __extends(BitmapTest, _super);
    function BitmapTest() {
        var _this = _super.call(this) || this;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, function (evt) {
            RES.loadConfig("../../resource/default.res.json", "resource/"); //配置文件路径  资源的根目录,比如我们配置文件中有个图片的路径是assets/bg.jpg,所以实际路径应该是 "resource/" + "assets/bg.jpg" 前者就为第二个参数
            RES.loadGroup("preload"); // 根据组名加载的一组数据
            RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, function () {
                var img = new egret.Bitmap();
                img.texture = RES.getRes("bg_jpg");
                this.addChild(img);
            }, this);
        }, _this);
        return _this;
    }
    return BitmapTest;
}(egret.DisplayObjectContainer));
__reflect(BitmapTest.prototype, "BitmapTest");
