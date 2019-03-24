(function (doc, win) {
    let [docEl, resizeEvt, recalc] = [doc.documentElement, 'orientationchange' in window ? 'orientationchange' : 'resize', function () {
        let clientWidth = docEl.clientWidth
        if (!clientWidth) return
        if (clientWidth !== 375) {
            docEl.style.fontSize = 100 * (clientWidth / 375) + 'px'
        } else {
            docEl.style.fontSize = '100px'
        }
    }]

    if (!doc.addEventListener) return
    win.addEventListener(resizeEvt, recalc, false)
    doc.addEventListener('DOMContentLoaded', recalc, false)

    if (typeof WeixinJSBridge == "object" && typeof WeixinJSBridge.invoke == 'function') {
        handleFontSize();
    } else {
        if (document.addEventListener) {
            document.addEventListener("WeixinJSBridgeReady", handleFontSize, false);
        } else if (document.attachEvent) {
            document.attachEvent("WeixinJSBridgeReady", handleFontSize);
            document.attachEvent("onWeixinJSBridgeReady", handleFontSize);
        }
    }

    function handleFontSize() {
        // 设置网页字体为默认大小
        WeixinJSBridge.invoke('setFontSizeCallback', {'fontSize': 0});
        // 重写设置网页字体大小的事件
        WeixinJSBridge.on('menu:setfont', function () {
            WeixinJSBridge.invoke('setFontSizeCallback', {'fontSize': 0});
        });
    }

})(document, window)
// (function (_D) {
//     var _self = {};
//     _self.resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
//     _self.Html = _D.getElementsByTagName("html")[0];
//     _self.widthProportion = function () {
//         var p = Number((_D.body && _D.body.clientWidth || _self.Html.offsetWidth) / 720).toFixed(3);
//         return p > 1.067 ? 1.067 : p < 0.444 ? 0.444 : p;
//     };
//     _self.changePage = function () {
//         _self.Html.setAttribute("style", "font-size:" + _self.widthProportion() * 100 + "px");
//     };
//     _self.changePage();
//     if (!document.addEventListener) return;
//     window.addEventListener(_self.resizeEvt, _self.changePage, false);
//     document.addEventListener('DOMContentLoaded', _self.changePage, false);
// })(document);
