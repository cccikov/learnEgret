// 加载图片 位图纹理 纹理填充方式
class BitmapTest extends egret.DisplayObjectContainer{
    constructor(){
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE,function(evt:egret.Event){
            RES.loadConfig("../../resource/default.res.json","resource/");//配置文件路径  资源的根目录,比如我们配置文件中有个图片的路径是assets/bg.jpg,所以实际路径应该是 "resource/" + "assets/bg.jpg" 前者就为第二个参数
            RES.loadGroup("preload");// 根据组名加载的一组数据
            RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE,this.onload,this);
        },this);
    }
    private onload():void{
        var img:egret.Bitmap = new egret.Bitmap();
        img.texture = RES.getRes("test");
        this.addChild(img);

        // 拉伸
        var img2:egret.Bitmap = new egret.Bitmap();
        img2.texture = RES.getRes("test");
        img2.width *= 3;
        img2.height *= 2;
        img2.y = 110;
        this.addChild(img2);

        // 重复填充
        var img3:egret.Bitmap = new egret.Bitmap();
        img3.texture = RES.getRes("test");
        img3.fillMode = egret.BitmapFillMode.REPEAT;//填充方式
        img3.width *= 3;
        img3.height *= 2;
        img3.y = 320;
        this.addChild(img3);
    }
}