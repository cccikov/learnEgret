class StageBg extends egret.Shape{
    constructor(color,arr){
        super();
        this.graphics.beginFill(color);
        this.graphics.drawRect(arr[0],arr[1],arr[2],arr[3]);
        this.graphics.endFill();
    }
}