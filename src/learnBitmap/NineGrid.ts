// 九宫格
class NineGrid extends egret.DisplayObjectContainer{
    public constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage,this);
    }
    private onAddToStage(event:egret.Event) {
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onGroupComp, this);
        RES.loadConfig("../../resource/default.res.json", "resource/");
        RES.loadGroup("preload");
    }
    private onGroupComp() {
        var bg:StageBg = new StageBg(0xffffff,[0,0,this.stage.stageWidth,this.stage.stageHeight]);
        this.addChild(bg);

        var img:egret.Bitmap = new egret.Bitmap();
        img.texture = RES.getRes("test");
        img.x = 440;
        this.addChild(img);

        var img2:egret.Bitmap = new egret.Bitmap();
        img2.texture = RES.getRes("test");
        img2.width *= 2;
        this.addChild(img2);

        var img3:egret.Bitmap = new egret.Bitmap();
        img3.texture = RES.getRes("test");// 测试图片
        var rect:egret.Rectangle = new egret.Rectangle(85,40,30,20);//这个定义的是九宫格中间的格子的位置大小 说明文档中的区域5
        img3.scale9Grid =rect;//
        img3.width *= 2;
        img3.height *= 2;
        img3.y = 110;
        this.addChild(img3);
        // 区域1,3,7,9不拉伸变形 , 区域2,8左右拉伸 区域4,6上下拉伸 区域5上下左右拉伸
    }
}