var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// 九宫格
var NineGrid = (function (_super) {
    __extends(NineGrid, _super);
    function NineGrid() {
        var _this = _super.call(this) || this;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        return _this;
    }
    NineGrid.prototype.onAddToStage = function (event) {
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onGroupComp, this);
        RES.loadConfig("../../resource/default.res.json", "resource/");
        RES.loadGroup("preload");
    };
    NineGrid.prototype.onGroupComp = function () {
        var bg = new StageBg(0xffffff, [0, 0, this.stage.stageWidth, this.stage.stageHeight]);
        this.addChild(bg);
        var img = new egret.Bitmap();
        img.texture = RES.getRes("test");
        img.x = 440;
        this.addChild(img);
        var img2 = new egret.Bitmap();
        img2.texture = RES.getRes("test");
        img2.width *= 2;
        this.addChild(img2);
        var img3 = new egret.Bitmap();
        img3.texture = RES.getRes("test"); // 测试图片
        var rect = new egret.Rectangle(85, 40, 30, 20); //这个定义的是九宫格中间的格子的位置大小 说明文档中的区域5
        img3.scale9Grid = rect; //
        img3.width *= 2;
        img3.height *= 2;
        img3.y = 110;
        this.addChild(img3);
        // 区域1,3,7,9不拉伸变形 , 区域2,8左右拉伸 区域4,6上下拉伸 区域5上下左右拉伸
    };
    return NineGrid;
}(egret.DisplayObjectContainer));
__reflect(NineGrid.prototype, "NineGrid");
