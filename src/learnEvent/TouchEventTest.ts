class TouchEventTest extends egret.DisplayObjectContainer{//不可以直接叫做TouchEvent , TouchEvent是关键字,是egret的一个核心类
    public constructor(){
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage,this);
    }
    private onAddToStage(event:egret.Event){
        // 添加绘制文本
        this.drawText();

        //  绘制一个透明度为1的矩形 , 100*80
        var spr:egret.Sprite = new egret.Sprite();
        spr.graphics.beginFill(0x00ff00,1);
        spr.graphics.drawRect(0,0,100,80);
        spr.graphics.endFill();
        spr.width = 100;
        spr.height = 80;
        this.addChild(spr);

        spr.touchEnabled = true;

        // 注册监听器
        this.addEventListener(egret.TouchEvent.TOUCH_TAP,this.bubble,this);
        spr.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onTouch,this);
        this.addEventListener(egret.TouchEvent.TOUCH_TAP,this.capture,this,true);
    }

    // 监听器
    private onTouch(evt:egret.TouchEvent){
        this.txt.text += "\n点击了spr"
    }

    private bubble(evt:egret.TouchEvent){
        this.txt.text += "\n冒泡侦听\n----------------";
    }

    private capture(evt:egret.TouchEvent){
        this.txt.text += "\n----------------\n捕获侦听";
    }
    // 绘制文字
    private txt:egret.TextField;
    private drawText():void{
        this.txt = new egret.TextField();
        var txt = this.txt;
        txt.size = 16;
        txt.x = 250;
        txt.width = 200;
        txt.height = 200;
        txt.text = "事件文字";
        this.addChild(this.txt);
    }
}
