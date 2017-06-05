// 平移
class Move extends egret.DisplayObjectContainer {
	public constructor() {
        super();
        this.init();
        this.addEventListener(egret.Event.ADDED_TO_STAGE,function(){
            console.log("在将显示对象直接添加到舞台显示列表\n或\n将包含显示对象的子树添加至舞台显示列表中时调度");
        },this);
    }

    private init():void{
        // 创建一个文本框,设定一个scrollRect限制显示范围
        var bigText:egret.TextField = new egret.TextField();
        bigText.text = "平移和滚动显示对象,平移和滚动显示对象";
        bigText.scrollRect = new egret.Rectangle(0,0,200,50);//限制范围
        bigText.cacheAsBitmap = true;
        this.addChild(bigText);
        console.log("bigText添加到了舞台");

        // 创建一个方块,点击文本左移
        var btnLeft:egret.Shape = new egret.Shape();
        btnLeft.graphics.beginFill(0xcccc01);
        btnLeft.graphics.drawRect(0,0,50,50);
        btnLeft.graphics.endFill();
        btnLeft.x = 50;
        btnLeft.y = 50;
        this.addChild(btnLeft);
        console.log("btnLeft添加到了舞台");
        btnLeft.touchEnabled = true;
        btnLeft.addEventListener(egret.TouchEvent.TOUCH_TAP,scroll,this);

        function scroll(e:egret.TouchEvent):void{
            var rect:egret.Rectangle = bigText.scrollRect;
            rect.x +=20;
        }
    }
}