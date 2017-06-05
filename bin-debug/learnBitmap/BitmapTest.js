var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// 加载图片 位图纹理 纹理填充方式
var BitmapTest = (function (_super) {
    __extends(BitmapTest, _super);
    function BitmapTest() {
        var _this = _super.call(this) || this;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, function (evt) {
            RES.loadConfig("../../resource/default.res.json", "resource/"); //配置文件路径  资源的根目录,比如我们配置文件中有个图片的路径是assets/bg.jpg,所以实际路径应该是 "resource/" + "assets/bg.jpg" 前者就为第二个参数
            RES.loadGroup("preload"); // 根据组名加载的一组数据
            RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onload, this);
        }, _this);
        return _this;
    }
    BitmapTest.prototype.onload = function () {
        var img = new egret.Bitmap();
        img.texture = RES.getRes("test");
        this.addChild(img);
        // 拉伸
        var img2 = new egret.Bitmap();
        img2.texture = RES.getRes("test");
        img2.width *= 3;
        img2.height *= 2;
        img2.y = 110;
        this.addChild(img2);
        // 重复填充
        var img3 = new egret.Bitmap();
        img3.texture = RES.getRes("test");
        img3.fillMode = egret.BitmapFillMode.REPEAT; //填充方式
        img3.width *= 3;
        img3.height *= 2;
        img3.y = 320;
        this.addChild(img3);
    };
    return BitmapTest;
}(egret.DisplayObjectContainer));
__reflect(BitmapTest.prototype, "BitmapTest");
