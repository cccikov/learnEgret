class TxInput extends egret.DisplayObjectContainer{
    constructor(){
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE,function(){

            this._container.width = 400;
            this._container.height = 400;
            this._container.x = 100;
            this._container.y = 100;
            this.addChild(this._container);
           
            var txInput:egret.TextField = new egret.TextField();
            txInput.type = egret.TextFieldType.INPUT;
            txInput.width = 200;
            txInput.height = 30;
            txInput.scaleY = 0.6;
            txInput.scaleX = 0.6;
            txInput.x = 0;
            txInput.y = 0;
            txInput.textColor = 0x000000;

            console.log(this._container);
            this.layTxBg(txInput);
            
        },this);
    }
    private _container:egret.Sprite = new egret.Sprite();
    private layTxBg(tx:egret.TextField):void {//一个背景颜色方法
        var shp:egret.Shape = new egret.Shape();
        shp.graphics.beginFill(0xffffff);
        shp.graphics.drawRect(tx.x, tx.y, tx.width*tx.scaleX, tx.height*tx.scaleY);
        shp.graphics.endFill();
        this._container.addChild(shp);
        this._container.addChild(tx);
    }
}