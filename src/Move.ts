class Move{
	public constructor(theContainer) {
        this.init(theContainer);
    }

    private init(theContainer):void{
        // 创建一个文本框,设定一个scrollRect限制显示范围
        var bigText:egret.TextField = new egret.TextField();
        bigText.text = "平移和滚动显示对象,平移和滚动显示对象";
        bigText.scrollRect = new egret.Rectangle(0,0,200,50);//限制范围
        bigText.cacheAsBitmap = true;
        theContainer.addChild(bigText);

        // 创建一个方块,点击文本左移
        var btnLeft:egret.Shape = new egret.Shape();
        btnLeft.graphics.beginFill(0xcccc01);
        btnLeft.graphics.drawRect(0,0,50,50);
        btnLeft.graphics.endFill();
        btnLeft.x = 50;
        btnLeft.y = 50;
        theContainer.addChild(btnLeft);
        btnLeft.touchEnabled = true;
        btnLeft.addEventListener(egret.TouchEvent.TOUCH_TAP,scroll,theContainer);

        function scroll(e:egret.TouchEvent):void{
            var rect:egret.Rectangle = bigText.scrollRect;
            rect.x +=20;
        }
    }
}