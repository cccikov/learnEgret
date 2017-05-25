class TextEventDemo extends egret.DisplayObjectContainer{
    constructor(){
        super();
        let tx:egret.TextField = new egret.TextField;
        tx.textFlow = new Array<egret.ITextElement>({
            text:"这段文字有链接",
            style:{
                "href":"event:text event triggered"//"href":"http://www.baidu.com"
            }
        },{
            text:"n这段文字无连接",
            style{
                "textColor": 0xff0000
            }
        });
        tx.touchEnabled = true;
        tx.addEventListener(egret.TextEvent.LINK,function(evt:egret.TextEvent){
            console.log(evt.text);
        },this);
        tx.x = 10;
        tx.y = 90;
        this.addChild(tx);
    }
}