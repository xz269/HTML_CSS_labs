! function(t, e, n, o) {
    t.fn.freeMason = function(n) {
        return n = t.extend({}, t.fn.freeMason.options, n), this.each(
            function() {
                function o(t, e) {
                    return onresize = function() {
                        clearTimeout(e), e = setTimeout(t, 100)
                    }, t
                }
                var s = t(this);
                o(function() {
                    var o = t(e).width(),
                        i = s.find(".thumb-list"),
                        a = i.find(".thumb"),
                        r = a.length,
                        c = a.width(),
                        u = a.height(),
                        d = n.maxCols,
                        l = 2 * n.contPadding,
                        m = n.thumbGutter,
                        p = c + m,
                        f = Math.floor((o - l) / p),
                        h = /mozilla/.test(navigator.userAgent.toLowerCase()) &&
                        !/webkit/.test(navigator.userAgent.toLowerCase()) ?
                        "-moz-transition" : /webkit/.test(
                            navigator.userAgent.toLowerCase()) ?
                        "-webkit-transition" : /msie/.test(
                            navigator.userAgent.toLowerCase()) ?
                        "-ms-transition" : /opera/.test(
                            navigator.userAgent.toLowerCase()) ?
                        "-o-transition" : "transition";
                    s.css({
                        minWidth: c,
                        maxWidth: p * d - m,
                        width: p * f - m
                    }), s.css(o > c + l ? {
                        padding: "0 " + l / 2 + "px"
                    } : {
                        padding: 0
                    }), a.css(h, "left " + n.speed +
                        ", top " + n.speed);
                    var g = Math.ceil(s.width() / p);
                    a.each(function() {
                        var e = t(this),
                            n = e.index(),
                            o = n % g,
                            s = Math.floor(n / g);
                        e.css({
                            top: s * u + m * s,
                            left: o * c + m * o
                        })
                    }), i.css({
                        height: Math.ceil(r / g) * (u +
                            m) - m
                    })
                })()
            })
    }, t.fn.freeMason.options = {
        contPadding: 20,
        thumbGutter: 20,
        speed: "0.5s",
        maxCols: 4
    }
}(jQuery, window, document),
function(t, e, n, o) {
    t.fn.rift = function() {
        return this.each(function() {
            var e = t(this),
                n = e.find("img"),
                o = n.attr("src");
            e.prepend('<span class="top-span"></span>').append(
                '<span class="btm-span"></span>').find(
                "span.top-span").css("background", "url(" + o +
                ") no-repeat center top").css("background-size",
                "100%").parent().find("span.btm-span").css(
                "background", "url(" + o +
                ") no-repeat center bottom").css(
                "background-size", "100%")
        })
    }
}(jQuery, window, document),
function(t) {
    function e() {
        a.content = "width=device-width,minimum-scale=" + i[0] +
            ",maximum-scale=" + i[1], t.removeEventListener(o, e, !0)
    }
    var n = "addEventListener",
        o = "gesturestart",
        s = "querySelectorAll",
        i = [1, 1],
        a = s in t ? t[s]("meta[name=viewport]") : [];
    (a = a[a.length - 1]) && n in t && (e(), i = [.25, 1.6], t[n](o, e, !0))
}(document), $(function() {
    $(".thumb-wrapper").freeMason({
        contPadding: 0,
        thumbGutter: 10,
        speed: "0.5s",
        maxCols: 3
    }), $(".rift").rift();
    var e = !1,
        n = $(".cover"),
        o = $(window);
    $(window).scroll(function() {
        e = !0
    }), window.setInterval(function() {
        e && (1 - o.scrollTop() / 200 > -10 && n.css({
            opacity: 1 - o.scrollTop() / 200
        }), e = !1)
    }, 50)
}), "ontouchstart" in document.documentElement && (document.documentElement
    .className += " no-touch");