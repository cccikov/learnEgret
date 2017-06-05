// 加载图片
class LoadImg extends egret.DisplayObjectContainer {

    /**
     * 加载进度界面
     * Process interface loading
     */
    private loadingView: LoadingUI;

    public constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
        // 好像这个挺重要的，但是我还是不明白
    }

    private onAddToStage(event: egret.Event) {
        //设置加载进度界面
        //Config to load process interface
        this.loadingView = new LoadingUI();
        this.stage.addChild(this.loadingView);

        //初始化Resource资源加载库
        //initiate Resource loading library
        RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.loadConfig("resource/default.res.json", "resource/");
    }

    /**
     * 配置文件加载完成,开始预加载preload资源组。
     * configuration file loading is completed, start to pre-load the preload resource group
     */
    private onConfigComplete(event: RES.ResourceEvent): void {
        RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
        RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, this.onItemLoadError, this);
        RES.loadGroup("preload");//这个方法就是用来加载资源组的
    }

    /**
     * preload资源组加载完成
     * Preload resource group is loaded
     */
    private onResourceLoadComplete(event: RES.ResourceEvent) {
        if (event.groupName == "preload") {
            this.stage.removeChild(this.loadingView);
            RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
            RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, this.onItemLoadError, this);
            this.createGameScene();
        }
    }

    /**
     * 资源组加载出错
     *  The resource group loading failed
     */
    private onItemLoadError(event: RES.ResourceEvent) {
        console.warn("Url:" + event.resItem.url + " has failed to load");
    }

    /**
     * 资源组加载出错
     *  The resource group loading failed
     */
    private onResourceLoadError(event: RES.ResourceEvent) {
        //TODO
        console.warn("Group:" + event.groupName + " has failed to load");
        //忽略加载失败的项目
        //Ignore the loading failed projects
        this.onResourceLoadComplete(event);
    }

    /**
     * preload资源组加载进度
     * Loading process of preload resource group
     */
    private onResourceProgress(event: RES.ResourceEvent) {
        if (event.groupName == "preload") {
            this.loadingView.setProgress(event.itemsLoaded, event.itemsTotal);
        }
    }

    private textfield: egret.TextField;

    /**
     * 创建游戏场景
     * Create a game scene
     */
    private createGameScene() {
        var bg:egret.Shape = new egret.Shape();
        // 创建一个bg对象定义是egret.Shape对象
        // egret.Shape对象聚友图形绘制功能
        // Egret官方提供的类都在egret里面


        // 背景颜色
        bg.graphics.beginFill(0x336699);//填充颜色，妈的，竟然真的要是number属性
        bg.graphics.drawRect(0,0,this.stage.stageWidth,this.stage.stageHeight);//妈的，这不是好像canvas的方法，推测stage是舞台，场景的意思
        bg.graphics.endFill();

        // super.addChild(bg);//要讲上面的bg图形添加到喜爱你是结构中，才可以在运行时显示出来
        this.addChild(bg);//这里也可以使用this去调用



        // 写文字
        var tx:egret.TextField = new egret.TextField();
        tx.text = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ";
        tx.size = 32;
        tx.x = 20;
        tx.y = 20;
        tx.width = this.stage.stageWidth - 40;
        //文字响应用户操作
        tx.touchEnabled = true;
        tx.addEventListener( egret.TouchEvent.TOUCH_TAP, this.touchHandler, this );//动作，时间函数，对象
        this.addChild(tx);

        // 添加图片
        var plane1:egret.Bitmap = new egret.Bitmap(RES.getRes("plane1"));
        plane1.x = 60;
        plane1.y = 60;
        this.addChild(plane1);

        var plane2:egret.Bitmap = new egret.Bitmap(RES.getRes("plane2"));
        plane2.x = 80;
        plane2.y = 80;
        this.addChild(plane2);

        var plane3:egret.Bitmap = new egret.Bitmap(RES.getRes("plane3"));
        plane3.x = 80;
        plane3.y = 80;
        this.addChild(plane3);


        console.log("createGameScene",RES.getRes("plane1"));

        // 深度 index问题
        console.log("display indexes",this.getChildIndex(bg),this.getChildIndex(tx),this.getChildIndex(plane1),this.getChildIndex(plane2),this.getChildIndex(plane3));// 0 1 2 3 4
        this.setChildIndex(plane1,1);//改变深度
        console.log("display indexes",this.getChildIndex(bg),this.getChildIndex(tx),this.getChildIndex(plane1),this.getChildIndex(plane2),this.getChildIndex(plane3));// 0 2 1 3 4
        this.swapChildren(plane2,plane3);//交换深度


        // 锚点
        plane1.anchorOffsetX = 30;
        plane1.anchorOffsetY = 40;
        plane1.x += 30;
        plane1.y += 40;
        // 设置锚点的同时也改变坐标，所以看上去没有变化那样。

        // 动画
        this.times = -1;
        var that = this;
        this.stage.addEventListener(egret.TouchEvent.TOUCH_TAP,function(){
            switch (++ that.times % 3) {
                case 0:
                    egret.Tween.get(plane1).to({x:plane2.x},300,egret.Ease.circIn);
                    egret.Tween.get(plane2).to({x:plane1.x},300,egret.Ease.circIn);
                    break;
                case 1:
                    egret.Tween.get(plane3).to({scaleX:0.4,scaleY:0.4},500,egret.Ease.circIn).to({scaleX:1,scaleY:1},500,egret.Ease.circIn);
                    break;
                case 2:
                    egret.Tween.get(plane3).to({alpha:0.3},300,egret.Ease.circIn).to({alpha:1},300,egret.Ease.circIn);
                    break;
            }
            that.channel = sound.play(0,1);
        },this);

        // 加入声音
        var sound:egret.Sound = RES.getRes("bullet");

    }

    private times:number;
    private channel:egret.SoundChannel;

    private touchHandler(evt:egret.TouchEvent):void{
        var tx:egret.TextField = evt.currentTarget;
        tx.textColor = 0x00ff00;
    }


    /**
     * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
     * Create a Bitmap object according to name keyword.As for the property of name please refer to the configuration file of resources/resource.json.
     */
    private createBitmapByName(name: string) {
        let result = new egret.Bitmap();
        let texture: egret.Texture = RES.getRes(name);
        result.texture = texture;
        return result;
    }

    /**
     * 描述文件加载成功，开始播放动画
     * Description file loading is successful, start to play the animation
     */
    private startAnimation(result: string[]) {
        let parser = new egret.HtmlTextParser();

        let textflowArr = result.map(text => parser.parse(text));
        let textfield = this.textfield;
        let count = -1;
        let change = () => {
            count++;
            if (count >= textflowArr.length) {
                count = 0;
            }
            let textFlow = textflowArr[count];

            // 切换描述内容
            // Switch to described content
            textfield.textFlow = textFlow;
            let tw = egret.Tween.get(textfield);
            tw.to({ "alpha": 1 }, 200);
            tw.wait(2000);
            tw.to({ "alpha": 0 }, 200);
            tw.call(change, this);
        };

        change();
    }
}
