class Main extends egret.DisplayObjectContainer {

    public constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage,this);
    }

    private onAddToStage(event:egret.Event){
        this.stage.scaleMode = egret.StageScaleMode.NO_SCALE;
        console.log(this.stage.stageWidth);

        // 背景
        var bg: egret.Shape = new egret.Shape();
        bg.graphics.beginFill(0xffffff);
        bg.graphics.drawRect(0, 0, this.stage.stageWidth, this.stage.stageHeight);
        bg.graphics.endFill();
        this.addChild(bg);

        var _myGrid:MyGrid = new MyGrid();
        this.addChild(_myGrid);

        var shp:egret.Shape = new egret.Shape();
        shp.graphics.beginFill(0x00ff00);
        shp.graphics.drawRect(0,0,100,100);
        shp.graphics.endFill();
        shp.x = 100;
        shp.y = 100;
        this.addChild(shp);

        setTimeout(function(){
            shp.anchorOffsetX = 50;
        },2000);

        // 创建一个空的DisplayObjectContainer，把它的x和y坐标都改为
        var container:egret.DisplayObjectContainer = new egret.DisplayObjectContainer();//这是一个舞台？
        container.x = 200;
        container.y = 200;
        this.addChild(container);
        // 画一个红色的圆，添加到container中
        var circle:egret.Shape = new egret.Shape();
        circle.graphics.beginFill(0xff0000);
        circle.graphics.drawCircle(25,25,25);
        circle.graphics.endFill();
        container.addChild(circle);
        // 给圆增加点击事件
        circle.touchEnabled = true;
        circle.addEventListener(egret.TouchEvent.TOUCH_TAP,onclick,this);
        function onclick():void{//void代表没有return的意思
            // 把舞台左上角的坐标(0,0)转换为container内部的坐标
            var targetPoint:egret.Point = container.globalToLocal(0,0);
            // 重新定位圆,可以看出圆形移到了屏幕的左上角
            circle.x = targetPoint.x;
            circle.y = targetPoint.y;
        }

        new Drag(this);
        new Move(this);
        new Trans(this);



    }

}
