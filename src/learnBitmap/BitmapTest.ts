// 加载图片 位图纹理 
class BitmapTest extends egret.DisplayObjectContainer{
    constructor(){
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE,function(evt:egret.Event){
            RES.loadConfig("../../resource/default.res.json","resource/");//配置文件路径  资源的根目录,比如我们配置文件中有个图片的路径是assets/bg.jpg,所以实际路径应该是 "resource/" + "assets/bg.jpg" 前者就为第二个参数
            RES.loadGroup("preload");// 根据组名加载的一组数据
            RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE,function(){
                var img:egret.Bitmap = new egret.Bitmap();
                img.texture = RES.getRes("bg_jpg");
                this.addChild(img);
            },this);
        },this);
    }

}