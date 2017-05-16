class HitTest extends egret.DisplayObjectContainer {

    public constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }

    private onAddToStage(event: egret.Event) {

        this.drawText();
        // 画一个方形
        var shp: egret.Shape = new egret.Shape();
        shp.graphics.beginFill(0xff0000);
        shp.width = 100;//Shape好像都要手动输入width和height
        shp.height = 100;
        shp.graphics.drawRect(0, 0, shp.width, shp.height);
        shp.graphics.endFill();
        this.addChild(shp);



        var circle: egret.Shape = new egret.Shape();
        circle.graphics.beginFill(0x00ff00);
        circle.x = 300;
        circle.y = 300;
        circle.graphics.drawCircle(0, 0, 2);
        circle.graphics.endFill();
        // Shape对象的width,height并不会对Shape造成影响;drawCircle,drawRect等里面的绘图坐标感觉是相对于该对象的x,y
        this.addChild(circle);
        console.log(circle.x, circle.y);

        var that = this;
        new DragObj(shp, this, function() {
            // 碰撞检测
            var isHit: boolean = shp.hitTestPoint(300, 300);//是否与某一点碰撞
            that.infoText.text = "碰撞检测" + isHit;
        });

    }
    private infoText: egret.TextField;
    private drawText() {//就画了一个文本框出来
        this.infoText = new egret.TextField();//舞台的infoText属性设为是一个文本对象
        this.infoText.y = 200;
        this.infoText.textColor = 0x333333;
        this.infoText.text = "碰撞检测";
        this.addChild(this.infoText);
    }
}
