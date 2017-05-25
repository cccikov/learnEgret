// 拖拽对象 将对象变成可拖拽
class DragObj {
	public constructor(theDragObj,theStage,fn) {
		let the = theDragObj;
		let offsetX,offsetY;
		the.touchEnabled = true;
		the.addEventListener(egret.TouchEvent.TOUCH_BEGIN,startMove,this);
		the.addEventListener(egret.TouchEvent.TOUCH_END,stopMove,this);
		function startMove(e:egret.TouchEvent):void{
			offsetX = e.stageX - the.x;
			offsetY = e.stageY - the.y;
			theStage.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE,onMove,this);
		}
		function stopMove(e:egret.TouchEvent):void{
			theStage.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE,onMove,this);
		}
		function onMove(e:egret.TouchEvent):void{
			the.x = e.stageX - offsetX;
			the.y = e.stageY - offsetY;
			if(fn){
				fn();
			}
		}
	}
}
