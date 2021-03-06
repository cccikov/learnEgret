var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var SampleDate = (function (_super) {
    __extends(SampleDate, _super);
    function SampleDate() {
        var _this = _super.call(this) || this;
        console.log(egret.Capabilities.renderMode);
        var boy = new Boy();
        boy.name = "ccc";
        var girl = new Girl();
        girl.name = "tomato";
        // 注册监听器
        boy.addEventListener(DateEvent.DATE, girl.getDate, _this); //监听器是girl.getDate方法 , 由girl 创建, 由boy注册
        boy.addEventListener("约会", function (evt) {
            console.log(evt);
        }, _this, false, 9); //冒泡阶段,优先级
        // 男朋友发送要求
        boy.order(); //触发事件
        console.log(boy.willTrigger(DateEvent.DATE));
        // 约会邀请完成后,移除监听器
        boy.removeEventListener(DateEvent.DATE, girl.getDate, _this);
        return _this;
    }
    return SampleDate;
}(egret.DisplayObjectContainer));
__reflect(SampleDate.prototype, "SampleDate");
