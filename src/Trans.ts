class Trans {
	public constructor(theContainer) {
        this.init(theContainer);
	}
    private init(theContainer):void{
        var square:egret.Shape = new egret.Shape();
        square.graphics.beginFill(0xe88822);
        square.graphics.drawRect(50,200,100,100);
        square.graphics.endFill();
        square.anchorOffsetX = square.width/2;
        square.anchorOffsetY = square.height/2;
        theContainer.addChild(square);

        var btn1:egret.TextField = new egret.TextField();
        btn1.text = "尺寸变化";
        btn1.x = 10;
        btn1.y = 250;
        theContainer.addChild(btn1);
        btn1.touchEnabled = true;
        btn1.addEventListener(egret.TouchEvent.TOUCH_TAP,function(e:egret.TouchEvent){
            square.scaleX = 2;
            square.scaleY = 2;
        },theContainer);

        var btn2:egret.TextField = new egret.TextField();
        btn2.text = "角度变化";
        btn2.x = 30;
        btn2.y = 300;
        theContainer.addChild(btn2);
        btn2.touchEnabled = true;
        btn2.addEventListener(egret.TouchEvent.TOUCH_TAP,function(e:egret.TouchEvent){
            square.rotation += 45;

        },theContainer);

        var btn3:egret.TextField = new egret.TextField();
        btn3.text = "斜切变化";
        btn3.x = 50;
        btn3.y = 350;
        theContainer.addChild(btn3);
        btn3.touchEnabled = true;
        btn3.addEventListener(egret.TouchEvent.TOUCH_TAP,function(e:egret.TouchEvent){
            square.skewX = 10;
        },theContainer);
    }
}