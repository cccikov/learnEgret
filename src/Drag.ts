class Drag extends egret.DisplayObjectContainer{
	public constructor() {
        super();
        this.init();
	}
    private init():void{
        /**
         * 触摸来移动对象
         */
        // 拖拽对象
        var draggedObject:egret.Shape;
        var offsetX:number;
        var offsetY:number;
        //圆
        var circle:egret.Shape = new egret.Shape();
        circle.graphics.beginFill(0x456123);
        circle.graphics.drawCircle(50,50,25);
        circle.graphics.endFill();
        // 方
        var square:egret.Shape = new egret.Shape();
        square.graphics.beginFill(0x0123ff);
        square.graphics.drawRect(0,0,100,100);
        square.graphics.endFill();

        this.addChild(square);
        this.addChild(circle);
        // 增加圆形的触摸监听
        circle.touchEnabled = true;
        circle.addEventListener(egret.TouchEvent.TOUCH_BEGIN,startMove,this);
        circle.addEventListener(egret.TouchEvent.TOUCH_END,stopMove,this);
        // 增加方形的触摸监听
        square.touchEnabled = true;
        square.addEventListener(egret.TouchEvent.TOUCH_BEGIN,startMove,this);
        square.addEventListener(egret.TouchEvent.TOUCH_END,stopMove,this);

        function startMove(e:egret.TouchEvent):void{
            // 把手指触摸的对象记录下来(是圆是方)
            draggedObject = e.currentTarget;
            // 计算手指和要拖动的对象的距离
            offsetX = e.stageX - draggedObject.x;
            offsetY = e.stageY - draggedObject.y;
            // 把触摸的对象放在显示列表的顶层
            console.log(this.getChildIndex(circle),this.getChildIndex(square));
            this.addChild(draggedObject);//因为addChild会改变index,所以在这里添加多一次,就变成是最上面了
            // 增加舞台的移动手指监听
            this.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE,onMove,this);
        }
        function stopMove(e:egret.TouchEvent) {console.log(22);
           //手指离开屏幕，移除手指移动的监听
           this.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE,onMove,this);
        }
        function onMove(e:egret.TouchEvent):void{
           //通过计算手指在屏幕上的位置，计算当前对象的坐标，达到跟随手指移动的效果
           draggedObject.x = e.stageX - offsetX;
           draggedObject.y = e.stageY - offsetY;
        }
    }
}
