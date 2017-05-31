var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Boy = (function (_super) {
    __extends(Boy, _super);
    function Boy() {
        return _super.call(this) || this;
    }
    Boy.prototype.order = function () {
        // 创建约会事件对象
        // var dateEvent:DateEvent = new DateEvent(DateEvent.DATE);//实质new DateEvent("约会",false,false)
        var dateEvent = new DateEvent("约会", false, false);
        // 添加对应的约会信息
        dateEvent._year = 2017;
        dateEvent._month = 8;
        dateEvent._date = 2;
        dateEvent._where = "7天连锁酒店";
        dateEvent._todo = "嘿嘿嘿";
        // 发送(触发)事件
        console.log("抛出一个事件", this.dispatchEvent(dateEvent));
    };
    return Boy;
}(egret.Sprite));
__reflect(Boy.prototype, "Boy");
