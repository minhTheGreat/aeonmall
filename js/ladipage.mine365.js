String.prototype.replaceAll = function (t, e) {
    return this.valueOf().split(t).join(e)
}, String.prototype.format = function () {
    for (var t = this, e = 0; e < arguments.length; e++) {
        var i = new RegExp("\\{" + e + "\\}", "gi");
        t = t.replace(i, arguments[e])
    }
    return t.valueOf()
}, Array.prototype.removeSpace = function () {
    var t = [];
    return this.forEach(function (e) {
        (e = e.trim()).length > 0 && t.push(e)
    }), t
}, Array.prototype.random = function () {
    return this[Math.floor(Math.random() * this.length)]
}, Array.prototype.unique = function () {
    return this.filter(function (t, e, i) {
        return i.indexOf(t) == e
    })
}, Array.prototype.except = function (t) {
    var e = this;
    return Array.isArray(t) && t.forEach(function (t) {
        var i = e.indexOf(t); - 1 != i && e.splice(i, 1)
    }), e
}, Array.prototype.only = function (t) {
    var e = [];
    return Array.isArray(t) && this.forEach(function (i) {
        -1 != t.indexOf(i) && e.push(i)
    }), e
}, Array.prototype.insert = function (t, e) {
    this.splice(t, 0, e)
};
var LadiPageScriptV2 = LadiPageScriptV2 || function () {};
LadiPageScriptV2.prototype.init = function () {
    this.const = {
        DESKTOP: "desktop",
        MOBILE: "mobile",
        DOMAIN_GOOGLE_DOCS: "docs.google.com",
        POWERED_BY_IMAGE: "https://w.ladicdn.com/source/ladipage.svg",
        STATIC_DOMAIN: "w.ladicdn.com",
        APP_RUNTIME_PREFIX: "_runtime",
        DATA_ACTION_TYPE: {
            link: "link",
            section: "section",
            email: "email",
            phone: "phone",
            popup: "popup",
            hidden_show: "hidden_show",
            lightbox_image: "lightbox_image",
            lightbox_video: "lightbox_video",
            lightbox_iframe: "lightbox_iframe"
        },
        COUNTDOWN_TYPE: {
            countdown: "countdown",
            daily: "daily",
            endtime: "endtime"
        },
        COUNTDOWN_ITEM_TYPE: {
            day: "day",
            hour: "hour",
            minute: "minute",
            seconds: "seconds"
        },
        VIDEO_TYPE: {
            youtube: "youtube"
        },
        TRACKING_NAME: "ladicid",
        PUBLISH_STYLE: {
            desktop_min_width: 768
        },
        ANIMATED_LIST: ["rotate-1", "rotate-2", "rotate-3", "type", "scale", "loading-bar", "slide", "clip", "zoom", "push"],
        POSITION_TYPE: {
            default: "default",
            top: "top",
            bottom: "bottom",
            top_left: "top_left",
            top_center: "top_center",
            top_right: "top_right",
            center_left: "center_left",
            center_right: "center_right",
            bottom_left: "bottom_left",
            bottom_center: "bottom_center",
            bottom_right: "bottom_right"
        },
        INPUT_TYPE: {
            tel: "tel",
            text: "text",
            select_multiple: "select_multiple",
            number: "number",
            email: "email",
            textarea: "textarea",
            select: "select",
            radio: "radio",
            checkbox: "checkbox",
            add_to_cart_variant_product: "add_to_cart_variant_product"
        },
        ADD_TO_CART_PRODUCT_TYPE: {
            combined: "combined",
            combobox: "combobox"
        },
        ADD_TO_CART_PRODUCT_TITLE: {
            left: "left",
            top: "top"
        },
        FORM_THANKYOU_TYPE: {
            default: "default",
            url: "url",
            popup: "popup"
        },
        GAME_RESULT_TYPE: {
            default: "default",
            popup: "popup"
        },
        PERCENT_TRACKING_SCROLL: [0, 25, 50, 75, 100],
        TIME_ONPAGE_TRACKING: [10, 30, 60, 120, 180, 300, 600],
        FORM_CONFIG_TYPE: {
            email: "EMAIL",
            mail_chimp: "MAIL_CHIMP",
            infusion_soft: "INFUSION_SOFT",
            active_campaign: "ACTIVE_CAMPAIGN",
            hubspot: "HUBSPOT",
            smtp: "SMTP",
            get_response: "GET_RESPONSE",
            google_sheet: "GOOGLE_SHEET",
            google_form: "GOOGLE_FORM",
            custom_api: "CUSTOM_API",
            ladisales: "LADISALES"
        },
        WIDTH_SECTION_RESIZE: {},
        RESIZE_ADD_PIXEL: 300,
        RESIZE_RANGE: 50,
        LANG: {
            ALERT_TITLE: "Thông báo",
            ALERT_BUTTON_TEXT: "OK",
            GAME_RESULT_MESSAGE: "Chúc mừng bạn nhận được {{coupon_text}}. Nhập mã: {{coupon_code}} để sử dụng. Bạn còn {{spin_turn_left}} lượt quay.",
            GAME_MAX_TURN_MESSAGE: "Bạn đã hết lượt quay.",
            FORM_SEND_DATA_ERROR: "Đã xảy ra lỗi, vui lòng thử lại!",
            FORM_SEND_DATA_NO_CONFIG: "Vui lòng kiểm tra lại cấu hình Form!",
            FORM_THANKYOU_MESSAGE_DEFAULT: "Cảm ơn bạn đã quan tâm!",
            FORM_INPUT_REQUIRED_ERROR: "Vui lòng nhập đầy đủ các trường thông tin!",
            FORM_INPUT_EMAIL_REGEX: "Vui lòng nhập đúng định dạng email!",
            FORM_INPUT_TEXT_REGEX: "Vui lòng nhập đúng định dạng!"
        }
    }, this.runtime = {
        backdrop_popup_id: "backdrop-popup",
        lightbox_screen_id: "lightbox-screen",
        builder_section_popup_id: "SECTION_POPUP",
        ladipage_powered_by_id: "ladipage_powered_by",
        current_element_mouse_down_carousel: null,
        current_element_mouse_down_carousel_position_x: 0,
        current_element_mouse_down_carousel_diff: 40,
        current_element_mouse_down_gallery_control: null,
        current_element_mouse_down_gallery_control_time: 0,
        current_element_mouse_down_gallery_control_time_click: 300,
        current_element_mouse_down_gallery_control_position_x: 0,
        current_element_mouse_down_gallery_view: null,
        current_element_mouse_down_gallery_view_position_x: 0,
        current_element_mouse_down_gallery_view_diff: 40,
        scroll_show_popup: {},
        scroll_depth: [],
        scroll_to_section: {},
        isMobileOnly: !1,
        interval_countdown: null,
        interval_gallery: null,
        timeout_gallery: {},
        interval_carousel: null,
        timenext_carousel: {},
        interval_powered_by: null,
        isClient: !1,
        isDesktop: !0,
        isIE: !1,
        device: this.const.DESKTOP,
        ladipage_id: null,
        tmp: {},
        tabindexForm: 0,
        eventData: {},
        timenow: 0,
        widthScrollBar: 0,
        replaceStr: {},
        replacePrefixStart: "{{",
        replacePrefixEnd: "}}"
    }, this.const.WIDTH_SECTION_RESIZE[this.const.DESKTOP] = 1440, this.const.WIDTH_SECTION_RESIZE[this.const.MOBILE] = 768
}, LadiPageScriptV2.prototype.run = function (t) {
    var e = this;
    this.runtime.isIE = !!document.documentMode, this.runtime.isIE = this.runtime.isIE ? this.runtime.isIE : !this.runtime.isIE && !!window.StyleMedia, this.runtime.isClient = t, this.runtime.timenow = this.getCookie("_timenow"), this.isEmpty(this.runtime.timenow) ? (this.runtime.timenow = Date.now(), this.setCookie(null, "_timenow", this.runtime.timenow, 0, !0, window.location.pathname)) : this.runtime.timenow = parseFloat(this.runtime.timenow) || 0;
    try {
        this.runtime.widthScrollBar = window.innerWidth - document.documentElement.clientWidth
    } catch (t) {}
    if (t) {
        if (this.isString(this.runtime.eventData)) try {
            var i = decodeURIComponent(this.runtime.eventData);
            this.runtime.eventData = JSON.parse(i)
        } catch (t) {
            String.prototype.decode = function () {
                return this.valueOf().replaceAll(/&amp;/g, "&").replaceAll(/&gt;/g, ">").replaceAll(/&lt;/g, "<").replaceAll(/&quot;/g, '"')
            };
            var a = this.runtime.eventData.decode();
            a = a.replaceAll("\r\n", "").replaceAll("\n", ""), this.runtime.eventData = JSON.parse(a)
        }
    } else this.runtime.eventData = LadiPage.generateEventDataAll(t), this.runtime.isMobileOnly = LadiPage.data.is_mobile_only, this.runtime.ladipage_id = LadiPage.publish.id;
    this.runtime.isMobileOnly && Object.keys(e.runtime.eventData).forEach(function (t) {
        Object.keys(e.runtime.eventData[t]).forEach(function (i) {
            if (i.toLowerCase().startsWith(e.const.MOBILE)) {
                var a = e.const.DESKTOP + i.substring(e.const.MOBILE.length);
                e.runtime.eventData[t][a] = e.runtime.eventData[t][i]
            }
        })
    });
    this.isNull(window.ladi_is_desktop) ? this.runtime.isDesktop = t ? !/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase()) : LadiPage.isDesktop() : this.runtime.isDesktop = t ? window.ladi_is_desktop : LadiPage.isDesktop(), this.runtime.device = this.runtime.isDesktop ? this.const.DESKTOP : this.const.MOBILE, this.runtime.tmp.isFirstScroll = !0, this.runtime.tmp.runAfterLocation = [], this.runtime.tmp.product_info = {}, this.runtime.tmp.timeout_product_info = {};
    var n = e.getURLSearchParams(window.location.search, null, !0),
        r = "";
    Object.keys(n).forEach(function (t) {
        t != e.const.TRACKING_NAME && (e.setDataReplaceStr(t, n[t]), (e.isArray(n[t]) ? n[t] : [n[t]]).forEach(function (i) {
            e.isEmpty(r) ? r += "?" : r += "&", r += t + "=" + encodeURIComponent(i)
        }))
    });
    var o = this.runtime.isDesktop,
        l = Object.keys(this.runtime.eventData),
        s = {};
    s[this.const.TRACKING_NAME] = e.isEmpty(n[this.const.TRACKING_NAME]) ? e.getCookie(this.const.TRACKING_NAME) : n[this.const.TRACKING_NAME], this.historyReplaceState(window.location.pathname + r + window.location.hash), this.deleteCookie(this.const.TRACKING_NAME);
    var c, d = function (t, i, a, n) {
            if (e.isEmpty(e.runtime.timeout_gallery[t]) && e.isEmpty(e.runtime.current_element_mouse_down_gallery_view) && e.isEmpty(e.runtime.current_element_mouse_down_gallery_control)) {
                var r = document.getElementById(t);
                if (!(e.isEmpty(r) || e.runtime.tmp.gallery_playing_video && i)) {
                    var o = r.getElementsByClassName("ladi-gallery-view-item"),
                        l = r.getElementsByClassName("ladi-gallery-control-item");
                    if (0 != o.length && 0 != o.length) {
                        var s = r.getAttribute("data-is-next") || "true";
                        s = "true" == s.toLowerCase();
                        var c = parseFloat(r.getAttribute("data-current")) || 0,
                            d = parseFloat(r.getAttribute("data-max-item")) || 0;
                        i ? s ? c >= d - 1 ? (c = d - 2, s = !1) : c++ : c <= 0 ? (c = 1, s = !0) : c-- : s ? c++ : c--, c < 0 && (c = 0), c >= d - 1 && (c = d - 1), e.isEmpty(a) && (a = s ? "next" : "prev"), e.isEmpty(n) && (n = s ? "left" : "right"), e.runtime.tmp.gallery_playing_video && !o[c].classList.contains("selected") && e.stopAllVideo(!0), o[c].classList.add(a), r.querySelectorAll(".ladi-gallery-view-item.selected")[0].classList.add(n);
                        var u = 1e3 * (parseFloat(getComputedStyle(o[c]).transitionDuration) || 0);
                        e.runtime.timeout_gallery[t] = e.runTimeout(function () {
                            o[c].classList.add(n), e.runtime.timeout_gallery[t] = e.runTimeout(function () {
                                for (var i = 0; i < o.length; i++) i == c ? o[i].classList.add("selected") : o[i].classList.remove("selected"), o[i].style.removeProperty("left"), o[i].classList.remove(a), o[i].classList.remove(n);
                                delete e.runtime.timeout_gallery[t]
                            }, u - 5)
                        }, 5);
                        for (var p = 0; p < l.length; p++)(parseFloat(l[p].getAttribute("data-index")) || 0) == c ? l[p].classList.add("selected") : l[p].classList.remove("selected");
                        var m = e.getElementBoundingClientRect(r),
                            g = e.getElementBoundingClientRect(r.getElementsByClassName("ladi-gallery-control-item")[c]);
                        if (r.getElementsByClassName("ladi-gallery")[0].classList.contains("ladi-gallery-top") || r.getElementsByClassName("ladi-gallery")[0].classList.contains("ladi-gallery-bottom")) {
                            var y = parseFloat(getComputedStyle(r.getElementsByClassName("ladi-gallery-control")[0]).width) || 0,
                                f = parseFloat(getComputedStyle(r.getElementsByClassName("ladi-gallery-control-item")[c]).width) || 0,
                                _ = g.x - m.x - (y - f) / 2;
                            _ = -(_ -= parseFloat(r.getElementsByClassName("ladi-gallery-control-box")[0].style.getPropertyValue("left")) || 0) > 0 ? 0 : -_;
                            var h = parseFloat(getComputedStyle(r.getElementsByClassName("ladi-gallery-control-box")[0]).width) || 0;
                            _ < (h = (h = -(h -= parseFloat(getComputedStyle(r.getElementsByClassName("ladi-gallery-control")[0]).width) || 0)) > 0 ? 0 : h) && (_ = h), r.getElementsByClassName("ladi-gallery-control-box")[0].style.setProperty("left", _ + "px")
                        } else {
                            var v = parseFloat(getComputedStyle(r.getElementsByClassName("ladi-gallery-control")[0]).height) || 0,
                                E = parseFloat(getComputedStyle(r.getElementsByClassName("ladi-gallery-control-item")[c]).height) || 0,
                                w = g.y - m.y - (v - E) / 2;
                            w = -(w -= parseFloat(r.getElementsByClassName("ladi-gallery-control-box")[0].style.getPropertyValue("top")) || 0) > 0 ? 0 : -w;
                            var L = parseFloat(getComputedStyle(r.getElementsByClassName("ladi-gallery-control-box")[0]).height) || 0;
                            w < (L = (L = -(L -= parseFloat(getComputedStyle(r.getElementsByClassName("ladi-gallery-control")[0]).height) || 0)) > 0 ? 0 : L) && (w = L), r.getElementsByClassName("ladi-gallery-control-box")[0].style.setProperty("top", w + "px")
                        }
                        r.setAttribute("data-is-next", s), r.setAttribute("data-current", c)
                    }
                }
            }
        },
        u = function (t, i) {
            if ("gallery" == i) {
                var a = document.getElementById(t);
                if (!e.isEmpty(a)) {
                    var n = a.getElementsByClassName("ladi-gallery-control-item").length;
                    a.setAttribute("data-max-item", n);
                    var r = function (i) {
                        i.stopPropagation(),
                            function (t, i) {
                                var a = i.getAttribute("data-video-type"),
                                    n = i.getAttribute("data-video-url"),
                                    r = e.getVideoId(a, n),
                                    o = i.getAttribute("data-index"),
                                    l = document.getElementById(t + "_" + o + "_player");
                                e.isEmpty(l) && (e.stopAllVideo(), e.runtime.tmp.gallery_playing_video = !0, a == e.const.VIDEO_TYPE.youtube && (l = document.createElement("iframe"), i.parentElement.insertBefore(l, i.nextSibling), l.outerHTML = '<iframe id="' + t + "_" + o + '_player" class="iframe-video-play" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0;" src="https://www.youtube.com/embed/' + r + '?autoplay=1&rel=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'))
                            }(t, i.target)
                    };
                    if (n > 0) {
                        for (var o = 0; o < n; o++) {
                            var l = a.getElementsByClassName("ladi-gallery-view-item")[o];
                            e.isEmpty(l) || l.classList.contains("play-video") && l.addEventListener("click", r)
                        }
                        if (n <= 1)
                            for (var s = a.getElementsByClassName("ladi-gallery-view-arrow"), c = 0; c < s.length; c++) s[c].classList.add("ladi-hidden");
                        a.setAttribute("data-current", 0), a.setAttribute("data-is-next", !0)
                    }
                }
            }
        },
        p = function (t, i, a) {
            t.stopPropagation();
            var n = e.runtime.eventData[i],
                r = n[e.runtime.device + ".option.gallery_control.autoplay"],
                o = n[e.runtime.device + ".option.gallery_control.autoplay_time"],
                l = 0;
            r && !e.isEmpty(o) && (l = o);
            var s = parseFloat(t.target.getAttribute("data-index")) || 0,
                c = null,
                u = null;
            (parseFloat(a.getAttribute("data-current")) || 0) > s ? (c = "prev", u = "right") : (c = "next", u = "left");
            var p = a.getAttribute("data-is-next") || "true";
            (p = "true" == p.toLowerCase()) ? s-- : s++, a.setAttribute("data-current", s), a.setAttribute("data-next-time", Date.now() + 1e3 * l), d(i, !1, c, u)
        },
        m = function (t, i) {
            if ((e.isEmpty(e.runtime.timenext_carousel[t]) || !(e.runtime.timenext_carousel[t] > Date.now())) && e.isEmpty(e.runtime.current_element_mouse_down_carousel)) {
                var a = document.getElementById(t);
                if (!e.isEmpty(a)) {
                    var n = a.getAttribute("data-is-next") || "true";
                    n = "true" == n.toLowerCase();
                    var r = parseFloat(a.getAttribute("data-current")) || 0,
                        o = parseFloat(e.runtime.eventData[t][e.runtime.device + ".option.carousel_crop.width"]) || 0,
                        l = parseFloat(e.runtime.eventData[t][e.runtime.device + ".option.carousel_crop.width_item"]) || 0;
                    l > a.clientWidth && (l = a.clientWidth);
                    var s = Math.ceil(o / l);
                    i ? n ? r >= s - 1 ? (r = s - 2, n = !1) : r++ : r <= 0 ? (r = 1, n = !0) : r-- : n ? r++ : r--, r < 0 && (r = 0), r >= s - 1 && (r = s - 1);
                    var c = 1e3 * (parseFloat(getComputedStyle(a.getElementsByClassName("ladi-carousel-content")[0]).transitionDuration) || 0);
                    e.runtime.timenext_carousel[t] = Date.now() + c;
                    var d = e.getElementBoundingClientRect(a),
                        u = d.x + r * l - d.x - (a.clientWidth - l) / 2;
                    u = -u > 0 ? 0 : -u;
                    var p = -(o - a.clientWidth);
                    u < p && (u = p), a.getElementsByClassName("ladi-carousel-content")[0].style.setProperty("left", u + "px"), a.setAttribute("data-is-next", n), a.setAttribute("data-current", r)
                }
            }
        },
        g = function (i, a) {
            if ("form" == a) {
                var n = e.runtime.eventData[i];
                if (n["option.is_add_to_cart"]) {
                    var r = n["option.add_to_cart_product"],
                        o = n["option.form_account_id"],
                        l = document.getElementById(i);
                    if (!e.isEmpty(l)) {
                        var s = l.querySelector('[data-variant="true"]');
                        if (!e.isEmpty(s)) {
                            var c = e.runtime.eventData[s.id];
                            if (!e.isEmpty(c)) {
                                var d = s.clientHeight,
                                    u = e.generateVariantProduct(r, !0, o, c["option.input_add_to_cart_variant_product_type"], c["option.input_add_to_cart_variant_product_title"], c["option.input_add_to_cart_variant_product_price"], c["option.input_tabindex"], t, !0, function (t) {
                                        g(i, a)
                                    });
                                if (!e.isEmpty(u)) {
                                    s.innerHTML = u;
                                    for (var p = s.querySelectorAll("select.ladi-form-control"), m = 0; m < p.length; m++) p[m].addEventListener("change", e.runtime.tmp.generateLadiSaleProduct);
                                    if (c["option.input_add_to_cart_variant_product_type"] != e.const.ADD_TO_CART_PRODUCT_TYPE.combined) {
                                        var y = (parseFloat(getComputedStyle(s).top) || 0) + (parseFloat(getComputedStyle(s).height) || 0),
                                            f = "style_add_to_cart_" + i,
                                            _ = "#" + s.id + " {height: auto;}";
                                        e.createStyleElement(f, _);
                                        var h = s.clientHeight - d,
                                            v = e.findAncestor(s, "ladi-element");
                                        if (!e.isEmpty(v)) {
                                            for (var E = v.getElementsByClassName("ladi-element"), w = (parseFloat(getComputedStyle(l).height) || 0) + h, L = 0; L < E.length; L++)
                                                if (E[L].id != s.id) {
                                                    var S = (parseFloat(getComputedStyle(E[L]).top) || 0) + (parseFloat(getComputedStyle(E[L]).height) || 0);
                                                    S > y ? (_ += "#" + E[L].id + " {top: " + ((parseFloat(getComputedStyle(E[L]).top) || 0) + h) + "px;}", S + h > w && (w = S + h)) : S > w && (w = S)
                                                } var P = "#" + i + " {height: " + w + "px;}";
                                            e.createStyleElement(f, _ + P)
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },
        y = function (i, a) {
            var n = e.runtime.eventData[i];
            if (!(e.isEmpty(n) || e.isEmpty(n["option.form_account_id"]) || e.isEmpty(n["option.add_to_cart_product"]) || e.isEmpty(n["option.add_to_cart_product_key"]))) {
                var r = JSON.stringify(n),
                    o = e.generateProductKey(r, !0, n["option.add_to_cart_product"], n["option.form_account_id"], n["option.add_to_cart_product_key"], function (t) {
                        y(i, a)
                    });
                if (r !== o) {
                    var l = null,
                        s = null,
                        c = null;
                    if ("headline" != a && "paragraph" != a || window.ladi(i).value(o), "image" == a) {
                        if (l = document.getElementById(i), e.isEmpty(l)) return;
                        c = e.getOptimizeImage(o, l.clientWidth, l.clientHeight, !0, !1, t), s = "style_add_to_cart_image_" + i;
                        var d = "";
                        d = e.isEmpty(c) ? "#" + i + "  > .ladi-image > .ladi-image-background {background-image: none;}" : "#" + i + '  > .ladi-image > .ladi-image-background {background-image: url("' + c + '");}', e.createStyleElement(s, d)
                    }
                    if ("gallery" == a) {
                        if (!e.isArray(o)) return;
                        if (l = document.getElementById(i), e.isEmpty(l)) return;
                        for (var u = l.getElementsByClassName("ladi-gallery-view-item"); u.length < o.length;) {
                            var m = e.createTmpElement("div", '<div class="ladi-gallery-view-item" data-index="' + u.length + '"></div>', null, !0);
                            l.getElementsByClassName("ladi-gallery-view")[0].appendChild(m)
                        }
                        for (; u.length > o.length;) u[u.length - 1].parentElement.removeChild(u[u.length - 1]);
                        for (var g = l.getElementsByClassName("ladi-gallery-control-item"), f = function (t) {
                                p(t, i, l)
                            }; g.length < o.length;) {
                            var _ = e.createTmpElement("div", '<div class="ladi-gallery-control-item" data-index="' + g.length + '"></div>', null, !0);
                            _.addEventListener("click", f), l.getElementsByClassName("ladi-gallery-control-box")[0].appendChild(_)
                        }
                        for (; g.length > o.length;) g[g.length - 1].parentElement.removeChild(g[g.length - 1]);
                        s = "style_add_to_cart_gallery_" + i;
                        var h = "";
                        o.length <= 1 && (h += "#" + i + " .ladi-gallery .ladi-gallery-view .ladi-gallery-view-arrow {display: none;}", h += "#" + i + " > .ladi-gallery > .ladi-gallery-view {height: 100%;}", h += "#" + i + " > .ladi-gallery > .ladi-gallery-control {display: none;}");
                        var v = l.getElementsByClassName("ladi-gallery-view")[0],
                            E = l.getElementsByClassName("ladi-gallery-control-item")[0];
                        o.forEach(function (a, n) {
                            c = e.getOptimizeImage(a.src, v.clientWidth, v.clientHeight, !0, !1, t), h += "#" + i + ' .ladi-gallery .ladi-gallery-view-item[data-index="' + n + '"] {background-image: url("' + c + '");}', c = e.getOptimizeImage(a.src, E.clientWidth, E.clientHeight, !0, !1, t), h += "#" + i + ' .ladi-gallery .ladi-gallery-control-item[data-index="' + n + '"] {background-image: url("' + c + '");}'
                        }), l.setAttribute("data-max-item", o.length), e.isEmpty(h) || e.createStyleElement(s, h)
                    }
                }
            }
        };
    this.runtime.tmp.generateLadiSaleProduct = function (t) {
            var i = function () {
                    l.forEach(function (t) {
                        var i = e.runtime.eventData[t];
                        y(t, i.type)
                    })
                },
                a = function () {
                    if (e.isEmpty(t)) i();
                    else {
                        var n = t.target,
                            r = e.findAncestor(n, "ladi-element");
                        if (!e.isEmpty(r)) {
                            var o = e.findAncestor(r, "ladi-element");
                            if (!e.isEmpty(o)) {
                                var l = e.runtime.eventData[o.id];
                                if (!e.isEmpty(l)) {
                                    var s = l["option.form_account_id"],
                                        c = l["option.add_to_cart_product"];
                                    if (!e.isEmpty(s) && !e.isEmpty(c)) {
                                        var d = e.generateVariantProduct(c, !1, s, null, null, null, null, !0, !0, function (t) {
                                            a()
                                        });
                                        if (e.isObject(d) && e.isObject(d.product)) {
                                            for (var u = e.getProductVariantIndex(o.id, c, s), p = document.querySelectorAll('[data-variant="true"]'), m = 0; m < p.length; m++)
                                                if (p[m].id != r.id) {
                                                    var g = e.runtime.eventData[p[m].id];
                                                    if (!e.isEmpty(g)) {
                                                        var y = null;
                                                        if (g["option.input_add_to_cart_variant_product_type"] == e.const.ADD_TO_CART_PRODUCT_TYPE.combobox) {
                                                            if (!e.isArray(d.product.variants)) continue;
                                                            for (var f = d.product.variants[u], _ = f.option_ids.split("/"), h = 0; h < _.length; h++) y = document.querySelector("#" + p[m].id + ' [data-product-variant-id="' + _[h] + '"]'), e.isEmpty(y) || (y.value = f["option" + (h + 1)].trim())
                                                        }
                                                        if (g["option.input_add_to_cart_variant_product_type"] == e.const.ADD_TO_CART_PRODUCT_TYPE.combined) {
                                                            if (y = p[m].querySelector("select.ladi-form-control"), e.isEmpty(y)) continue;
                                                            y.value = u
                                                        }
                                                    }
                                                } i()
                                        }
                                    }
                                }
                            }
                        }
                    }
                };
            a()
        }, this.runtime.tmp.generateLadiSaleProduct(), l.forEach(function (i) {
            var a = e.runtime.eventData[i],
                n = LadiPageApp[a.type + e.const.APP_RUNTIME_PREFIX];
            e.isEmpty(n) ? (! function (t, i, a) {
                var n = document.getElementById(t);
                e.isEmpty(n) || (e.isEmpty(a) ? n.addEventListener("click", function (i) {
                    e.runEventTracking(t, !1)
                }) : (a.type == e.const.DATA_ACTION_TYPE.link && n.addEventListener("click", function (i) {
                    if ("true" == n.getAttribute("data-action") && !e.isEmpty(a.action)) {
                        var r = a.action,
                            o = e.createTmpElement("a", "", {
                                href: r,
                                target: a.target
                            });
                        r = e.getLinkUTMRedirect(o.href, window.location.search), r = e.convertDataReplaceStr(r), o.href = r, o.click()
                    }
                    e.runEventTracking(t, !1)
                }), a.type == e.const.DATA_ACTION_TYPE.email && n.addEventListener("click", function (i) {
                    "true" != n.getAttribute("data-action") || e.isEmpty(a.action) || e.createTmpElement("a", "", {
                        href: "mailto:" + a.action
                    }).click(), e.runEventTracking(t, !1)
                }), a.type == e.const.DATA_ACTION_TYPE.phone && n.addEventListener("click", function (i) {
                    "true" != n.getAttribute("data-action") || e.isEmpty(a.action) || e.createTmpElement("a", "", {
                        href: "tel:" + a.action
                    }).click(), e.runEventTracking(t, !1)
                }), a.type == e.const.DATA_ACTION_TYPE.section && n.addEventListener("click", function (i) {
                    var r = document.getElementById(a.action);
                    if (!e.isEmpty(r)) {
                        var o = e.findAncestor(n, "ladi-popup");
                        if (!e.isEmpty(o)) {
                            var l = e.findAncestor(o, "ladi-element");
                            l.hasAttribute("data-popup-backdrop") && window.ladi(l.id).hide()
                        }
                        window.ladi(a.action).scroll(), e.runEventTracking(t, !1)
                    }
                }), a.type == e.const.DATA_ACTION_TYPE.popup && n.addEventListener("click", function (i) {
                    var n = document.getElementById(a.action);
                    e.isEmpty(n) || window.ladi(a.action).show(), e.runEventTracking(t, !1)
                }), a.type == e.const.DATA_ACTION_TYPE.hidden_show && n.addEventListener("click", function (i) {
                    e.isArray(a.hidden_ids) && a.hidden_ids.forEach(function (t) {
                        window.ladi(t).hide()
                    }), e.isArray(a.show_ids) && a.show_ids.forEach(function (t) {
                        window.ladi(t).show()
                    }), e.runEventTracking(t, !1)
                }), a.type == e.const.DATA_ACTION_TYPE.lightbox_image && n.addEventListener("click", function (i) {
                    lightbox_image(a.image_url), e.runEventTracking(t, !1)
                }), a.type == e.const.DATA_ACTION_TYPE.lightbox_video && n.addEventListener("click", function (i) {
                    lightbox_video(a.video_url, a.video_type), e.runEventTracking(t, !1)
                }), a.type == e.const.DATA_ACTION_TYPE.lightbox_iframe && n.addEventListener("click", function (i) {
                    lightbox_iframe(a.iframe_url), e.runEventTracking(t, !1)
                })))
            }(i, a.type, a["option.data_action"]), function (t, i, a, n, r, l) {
                if ("video" == i && !e.isEmpty(a)) {
                    var s = document.getElementById(t);
                    if (!e.isEmpty(s)) {
                        var c = function () {
                            var i = document.getElementById(t + "_player");
                            if (e.isEmpty(i)) {
                                var r = e.getVideoId(n, a),
                                    o = s.getElementsByClassName("ladi-video")[0];
                                e.stopAllVideo(), n == e.const.VIDEO_TYPE.youtube && (o.innerHTML = o.innerHTML + '<iframe id="' + t + '_player" class="iframe-video-play" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0;" src="https://www.youtube.com/embed/' + r + '?autoplay=1&rel=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>')
                            }
                        };
                        (o && r || !o && l) && c(), s.addEventListener("click", function (t) {
                            t.stopPropagation(), c()
                        })
                    }
                }
            }(i, a.type, a["option.video_value"], a["option.video_type"], a[e.const.DESKTOP + ".option.video_autoplay"], a[e.const.MOBILE + ".option.video_autoplay"]), function (t, i, a, n) {
                "popup" == i && a && ((e.isEmpty(n) || n < 0) && (n = 0), e.runTimeout(function () {
                    window.ladi(t).show()
                }, 1e3 * n))
            }(i, a.type, a["option.show_popup_welcome_page"], a["option.delay_popup_welcome_page"]), function (t, i, a, n, r, o, l) {
                if ("countdown" == i && !e.isEmpty(a)) {
                    var s = document.getElementById(t);
                    e.isEmpty(s) || (s.setAttribute("data-type", a), a != e.const.COUNTDOWN_TYPE.countdown || e.isEmpty(n) || s.setAttribute("data-minute", n), a != e.const.COUNTDOWN_TYPE.endtime || e.isEmpty(l) || s.setAttribute("data-endtime", l), a != e.const.COUNTDOWN_TYPE.daily || e.isEmpty(r) || e.isEmpty(o) || (s.setAttribute("data-daily-start", r), s.setAttribute("data-daily-end", o)))
                }
            }(i, a.type, a["option.countdown_type"], a["option.countdown_minute"], a["option.countdown_daily_start"], a["option.countdown_daily_end"], a["option.countdown_endtime"]), function (t, i, a) {
                if ("countdown_item" == i && !e.isEmpty(a)) {
                    var n = document.getElementById(t);
                    e.isEmpty(n) || n.setAttribute("data-item-type", a)
                }
            }(i, a.type, a["option.countdown_item_type"]), function (t, i, a, n) {
                if ("section" == i) {
                    var r = document.getElementById(t);
                    if (!e.isEmpty(r)) {
                        var l = r.getElementsByClassName("ladi-section-arrow-down")[0];
                        if (e.isEmpty(l)) {
                            if (o) {
                                if (e.isEmpty(a)) return void r.removeAttribute("data-opacity");
                                var s = (parseFloat(a) || 0) + 50;
                                if (s > r.clientHeight) return void r.removeAttribute("data-opacity");
                                r.style.setProperty("height", s + "px"), r.classList.add("overflow-hidden")
                            } else {
                                if (e.isEmpty(n)) return void r.removeAttribute("data-opacity");
                                var c = (parseFloat(n) || 0) + 50;
                                if (c > r.clientHeight) return void r.removeAttribute("data-opacity");
                                r.style.setProperty("height", c + "px"), r.classList.add("overflow-hidden")
                            }(l = document.createElement("div")).className = "ladi-section-arrow-down", r.appendChild(l), r.removeAttribute("data-opacity"), l.addEventListener("click", function (t) {
                                t.stopPropagation(), r.classList.add("ladi-section-readmore"), r.style.removeProperty("height"), r.classList.remove("overflow-hidden"), l.parentElement.removeChild(l), e.runTimeout(function () {
                                    r.classList.remove("ladi-section-readmore")
                                }, 1e3 * parseFloat(getComputedStyle(r).transitionDuration))
                            })
                        }
                    }
                }
            }(i, a.type, a[e.const.DESKTOP + ".option.readmore_range"], a[e.const.MOBILE + ".option.readmore_range"]), function (t, i, a) {
                if ("form_item" == i) {
                    var n = null;
                    if (a == e.const.INPUT_TYPE.select || a == e.const.INPUT_TYPE.select_multiple)
                        for (var r = document.getElementById(t).getElementsByClassName("ladi-form-control"), o = 0; o < r.length; o++) r[o].addEventListener("change", function (t) {
                            t.target.setAttribute("data-selected", t.target.value)
                        });
                    if (a == e.const.INPUT_TYPE.checkbox) {
                        n = document.getElementById(t).getElementsByClassName("ladi-form-checkbox-item");
                        for (var l = function (t) {
                                t.stopPropagation();
                                var i = e.findAncestor(t.target, "ladi-form-checkbox-item");
                                e.isEmpty(i) || i.getElementsByTagName("span")[0].setAttribute("data-checked", t.target.checked)
                            }, s = function (t) {
                                t.stopPropagation();
                                var i = e.findAncestor(t.target, "ladi-form-checkbox-item");
                                e.isEmpty(i) || i.getElementsByTagName("input")[0].click()
                            }, c = 0; c < n.length; c++) {
                            var d = n[c].getElementsByTagName("input")[0];
                            n[c].getElementsByTagName("span")[0].addEventListener("click", s), d.addEventListener("change", l)
                        }
                    }
                    if (a == e.const.INPUT_TYPE.radio) {
                        n = document.getElementById(t).getElementsByClassName("ladi-form-checkbox-item");
                        for (var u = function (t) {
                                var i = e.findAncestor(t.target, "ladi-form-checkbox-item"),
                                    a = e.findAncestor(i, "ladi-form-checkbox");
                                if (!e.isEmpty(a)) {
                                    for (var n = a.querySelectorAll(".ladi-form-checkbox-item span"), r = 0; r < n.length; r++) n[r].setAttribute("data-checked", !1);
                                    e.isEmpty(i) || i.getElementsByTagName("span")[0].setAttribute("data-checked", t.target.checked)
                                }
                            }, p = function (t) {
                                t.stopPropagation();
                                var i = e.findAncestor(t.target, "ladi-form-checkbox-item");
                                e.isEmpty(i) || i.getElementsByTagName("input")[0].click()
                            }, m = 0; m < n.length; m++) {
                            var g = n[m].getElementsByTagName("input")[0];
                            n[m].getElementsByTagName("span")[0].addEventListener("click", p), g.addEventListener("change", u)
                        }
                    }
                }
            }(i, a.type, a["option.input_type"]), u(i, a.type), e.startAutoScroll(i, a.type, a[e.const.DESKTOP + ".option.auto_scroll"], a[e.const.MOBILE + ".option.auto_scroll"]), g(i, a.type)) : n(a, t).run(i, o)
        }),
        function () {
            if (e.runtime.isClient && !e.runtime.isDesktop && !e.isEmpty(e.runtime.bodyFontSize)) {
                var t = (parseFloat(getComputedStyle(document.body).fontSize) || 0) / e.runtime.bodyFontSize;
                if (1 != t)
                    for (var i = document.querySelectorAll(".ladi-paragraph, .ladi-list-paragraph, .ladi-headline, .ladi-countdown, .ladi-form"), a = 0; a < i.length; a++) {
                        var n = (parseFloat(getComputedStyle(i[a]).fontSize) || 0) / (t * t);
                        i[a].style.setProperty("font-size", n + "px")
                    }
            }
        }(),
        function () {
            var i = document.getElementsByClassName("ladi-form"),
                a = null,
                n = null,
                r = null,
                o = null,
                l = null,
                c = null,
                d = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"],
                u = ["name", "email", "phone", "address", "ward", "district", "state", "country"],
                p = ["ward", "district", "state", "country"],
                m = e.copy(p).reverse(),
                g = function (t) {
                    var i = [];
                    if (o.forEach(function (t) {
                            e.isEmpty(a[t]) && i.push(t)
                        }), i.length > 0) return e.showMessage(e.const.LANG.FORM_INPUT_REQUIRED_ERROR, null, function () {
                        var a = t.querySelector('[name="' + i[0] + '"]');
                        e.isEmpty(a) || a.focus()
                    }), !1;
                    var n = !0,
                        r = 0,
                        s = function () {
                            var i = t.querySelector('[name="' + l[r].name + '"]');
                            e.isEmpty(i) || i.focus()
                        };
                    for (r = 0; r < l.length; r++) {
                        var c = a[l[r].name];
                        if (!e.isEmpty(c)) try {
                            if (!new RegExp("^" + l[r].pattern + "$", l[r].pattern_flag).test(c)) {
                                e.showMessage(l[r].title, null, s), n = !1;
                                break
                            }
                        } catch (t) {}
                    }
                    return n
                },
                y = function (t) {
                    a = {};
                    for (var i = t.querySelectorAll(".ladi-element .ladi-form-item-container [name]"), r = {}, s = null, c = 0; c < i.length; c++) s = i[c].getAttribute("name"), r[s] = parseInt(i[c].getAttribute("tabindex")) || 0;
                    var d = Object.keys(r).sort(function (t, e) {
                        return r[t] - r[e]
                    });
                    if (d.only(p).length == p.length)
                        for (var g = 0; g < d.length; g++) {
                            var y = p.indexOf(d[g]); - 1 != y && (d[g] = m[y])
                        }
                    for (var f = 0; f < d.length; f++) a[d[f]] = "";
                    n = Object.keys(a);
                    for (var _ = 0; _ < i.length; _++) {
                        if (s = i[_].getAttribute("name"), i[_].required && -1 == o.indexOf(s) && o.push(s), "INPUT" == i[_].tagName) {
                            var h = i[_].getAttribute("type").trim().toLowerCase(),
                                v = i[_].getAttribute("pattern"),
                                E = i[_].getAttribute("title");
                            if ("email" == h ? l.push({
                                    name: s,
                                    pattern: '(([^<>()\\[\\]\\\\.,;:\\s@"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))',
                                    pattern_flag: "gi",
                                    title: e.const.LANG.FORM_INPUT_EMAIL_REGEX
                                }) : e.isEmpty(v) || l.push({
                                    name: s,
                                    pattern: v,
                                    title: e.isEmpty(E) ? e.const.LANG.FORM_INPUT_TEXT_REGEX : E
                                }), "checkbox" == h) {
                                e.isArray(a[s]) || (a[s] = []), i[_].checked && a[s].push(i[_].value);
                                continue
                            }
                            if ("radio" == h) {
                                i[_].checked && (a[s] = i[_].value);
                                continue
                            }
                        }
                        a[s] = i[_].value
                    }
                    u.forEach(function (t) {
                        e.isNull(a[t]) || (e.setCookie(null, "_ladipage_" + t, a[t], 365), e.isArray(e.runtime.DOMAIN_SET_COOKIE) && e.runtime.DOMAIN_SET_COOKIE.forEach(function (i) {
                            i != window.location.host && e.setCookie(i, "_ladipage_" + t, a[t], 365)
                        }))
                    })
                },
                f = function (t) {
                    var i = {
                        form_config_id: r,
                        ladipage_id: e.runtime.ladipage_id,
                        tracking_form: [],
                        form_data: []
                    };
                    e.isEmpty(e.runtime.time_zone) || (i.time_zone = e.runtime.time_zone), n.forEach(function (t) {
                        var n = a[t];
                        e.isArray(n) && 0 == n.length && (n = ""), i.form_data.push({
                            name: t,
                            value: n
                        })
                    }), i.tracking_form.push({
                        name: "url_page",
                        value: window.location.href
                    }), d.forEach(function (t) {
                        var a = c[t];
                        a = e.isNull(a) ? "" : a, i.tracking_form.push({
                            name: t,
                            value: a
                        })
                    }), e.isFunction(t) && t(i)
                },
                _ = function (t) {
                    t.reset();
                    for (var i = t.querySelectorAll(".ladi-element .ladi-form-item-container .ladi-form-checkbox-item input"), a = 0; a < i.length; a++) {
                        var n = e.findAncestor(i[a], "ladi-form-checkbox-item").querySelector("span");
                        e.isEmpty(n) || n.setAttribute("data-checked", i[a].checked)
                    }
                },
                h = function (t) {
                    y(t), g(t) && (f(function (t) {
                        e.sendRequest("POST", e.const.API_FORM_DATA, JSON.stringify(t), !0, {
                            "Content-Type": "application/json"
                        })
                    }), e.showMessage(e.const.LANG.FORM_SEND_DATA_NO_CONFIG), _(t))
                },
                v = function (i) {
                    c = e.getURLSearchParams(window.location.search), a = {}, n = [], r = null, o = [], l = [];
                    var u = i.getElementsByClassName("ladi-form")[0];
                    if (!e.isEmpty(u)) {
                        var p = e.runtime.eventData[i.id];
                        if (e.isEmpty(p)) h(u);
                        else if (e.isNull(e.runtime.tmp.form_sending) && (e.runtime.tmp.form_sending = {}), e.isNull(e.runtime.tmp.form_button_headline) && (e.runtime.tmp.form_button_headline = {}), !e.runtime.tmp.form_sending[i.id]) {
                            r = p["option.form_config_id"];
                            var m = p["option.form_send_ladipage"],
                                v = p["option.form_api_data"],
                                E = p["option.thankyou_type"],
                                w = p["option.thankyou_value"],
                                L = p["option.is_add_to_cart"];
                            if (L || !e.isEmpty(r)) {
                                if (y(u), g(u))
                                    if (L) console.log("add_to_cart");
                                    else {
                                        var S = 0,
                                            P = 0,
                                            b = [],
                                            A = !1,
                                            C = !1,
                                            T = !0,
                                            x = function (t) {
                                                t && _(u), delete e.runtime.tmp.form_sending[i.id], u.querySelector(".ladi-button > .ladi-element > .ladi-headline").innerHTML = e.runtime.tmp.form_button_headline[i.id]
                                            },
                                            N = function () {
                                                var n, r, o, l;
                                                n = function () {
                                                    var n = e.findAncestor(i, "ladi-popup");
                                                    if (!e.isEmpty(n)) {
                                                        var r = e.findAncestor(n, "ladi-element").id;
                                                        e.runRemovePopup(r, t)
                                                    }
                                                    var o = p["option.form_auto_funnel"];
                                                    E == e.const.FORM_THANKYOU_TYPE.default && (w = e.isEmpty(w) ? e.const.LANG.FORM_THANKYOU_MESSAGE_DEFAULT : w, e.showMessage(w, a)), E == e.const.FORM_THANKYOU_TYPE.popup && (o && e.setDataReplaceElement(!1, !1, a, w), window.ladi(w).show()), E == e.const.FORM_THANKYOU_TYPE.url && window.ladi(w).open_url("_top", o ? a : null)
                                                }, r = null, o = !1, l = function () {
                                                    o || (e.isFunction(n) && n(), e.removeTimeout(r), o = !0)
                                                }, e.isEmpty(s[e.const.TRACKING_NAME]) ? l() : (r = e.runTimeout(l, 3e3), e.sendRequest("POST", e.const.API_CHECKING_FORM, JSON.stringify(s), !0, {
                                                    "Content-Type": "application/json"
                                                }, function (t, e, i) {
                                                    i.readyState == XMLHttpRequest.DONE && l()
                                                }))
                                            },
                                            O = function (t, a, n, r) {
                                                if (n.readyState == XMLHttpRequest.DONE) {
                                                    if (r == e.const.API_FORM_DATA) {
                                                        var o = {};
                                                        try {
                                                            o = JSON.parse(t)
                                                        } catch (t) {}
                                                        200 == o.code ? S++ : (P++, T = !1)
                                                    } else 200 == a || 201 == a ? S++ : e.getElementAHref(r).host == e.const.DOMAIN_GOOGLE_DOCS ? S++ : P++;
                                                    S + P == b.length && (T && !A && S >= 1 ? (A = !0, e.runEventTracking(i.id, !0), N(), x(!0)) : !C && P >= 1 && (C = !0, e.showMessage(e.const.LANG.FORM_SEND_DATA_ERROR), x(!1)))
                                                }
                                            },
                                            I = function (t) {
                                                b.push({
                                                    url: e.const.API_FORM_DATA,
                                                    data: JSON.stringify(t),
                                                    async: !0,
                                                    headers: {
                                                        "Content-Type": "application/json"
                                                    },
                                                    callback: O
                                                })
                                            };
                                        m && f(I), e.isArray(v) && v.forEach(function (t) {
                                            if (!e.isEmpty(t.api_url) && e.isArray(t.custom_fields) && 0 != t.custom_fields.length) {
                                                var i = e.getElementAHref(t.api_url).host == e.const.DOMAIN_GOOGLE_DOCS,
                                                    n = {};
                                                t.custom_fields.forEach(function (t) {
                                                    var i = a[t.ladi_name];
                                                    e.isNull(i) || (e.isArray(i) ? 0 == i.length ? n[t.name] = "" : n[t.name] = JSON.stringify(i) : n[t.name] = i)
                                                }), i || (n.link = window.location.href, d.forEach(function (t) {
                                                    var i = c[t];
                                                    e.isNull(i) || (n[t] = i)
                                                }));
                                                var r = Object.keys(n).reduce(function (t, e) {
                                                    return t.push(e + "=" + encodeURIComponent(n[e])), t
                                                }, []).join("&");
                                                b.push({
                                                    url: t.api_url,
                                                    data: r,
                                                    async: !0,
                                                    headers: {
                                                        "Content-Type": "application/x-www-form-urlencoded"
                                                    },
                                                    callback: O
                                                })
                                            }
                                        });
                                        var k = function () {
                                            e.runtime.tmp.form_sending[i.id] = !0;
                                            var t = u.querySelector(".ladi-button > .ladi-element > .ladi-headline");
                                            e.isNull(e.runtime.tmp.form_button_headline[i.id]) && (e.runtime.tmp.form_button_headline[i.id] = t.innerHTML), t.innerHTML = "● ● ●"
                                        };
                                        b.length > 0 ? k() : m ? h(u) : (k(), f(I)), b.forEach(function (t) {
                                            e.sendRequest("POST", t.url, t.data, t.async, t.headers, t.callback)
                                        })
                                    }
                            } else h(u)
                        }
                    }
                },
                E = function (t) {
                    var i = e.findAncestor(t.target, "ladi-element");
                    if (!e.isEmpty(i))
                        for (var a = i.querySelectorAll('[type="checkbox"]'), n = 0; n < a.length; n++) a[n].removeAttribute("required")
                },
                w = function (t) {
                    var i = e.findAncestor(t.target, "ladi-element");
                    if (!e.isEmpty(i)) {
                        for (var a = i.querySelectorAll('[ladi-checkbox-required="true"]'), n = -1, r = 0; r < a.length; r++)
                            if (0 == a[r].querySelectorAll('[type="checkbox"]:checked').length) {
                                n = r;
                                break
                            } if (-1 == n) v(i);
                        else {
                            var o = a[n].querySelectorAll('[type="checkbox"]');
                            if (o.length > 0) {
                                o[0].setAttribute("required", "required");
                                for (var l = 0; l < o.length; l++) o[l].removeEventListener("change", E), o[l].addEventListener("change", E);
                                i.querySelector(".ladi-form").reportValidity()
                            }
                        }
                    }
                    return !1
                },
                L = function (t) {
                    console.log("buttonAddToCartClick")
                },
                S = function (t) {
                    var i = e.findAncestor(t.target, "ladi-form");
                    if (!e.isEmpty(i)) {
                        var a = i.querySelectorAll('[type="submit"]')[0];
                        e.isEmpty(a) || a.click()
                    }
                },
                P = {};
            u.forEach(function (t) {
                P[t] = e.getCookie("_ladipage_" + t)
            });
            var b = 0,
                A = !1,
                C = !1,
                T = function (t) {
                    for (var a = i[b].querySelectorAll('.ladi-element .ladi-form-item-container [name="' + t + '"]'), n = 0; n < a.length; n++)
                        if (!e.isEmpty(P[t]))
                            if ("SELECT" == a[n].tagName) a[n].querySelectorAll('option[value="' + P[t] + '"]').length > 0 && (a[n].value = P[t], A && a[n].dispatchEvent(new Event("change")));
                            else {
                                if (C) {
                                    var r = P[t].split(":");
                                    a[n].value = 2 == r.length ? r[1] : r[0]
                                } else a[n].value = P[t];
                                A && a[n].dispatchEvent(new Event("change"))
                            }
                };
            for (b = 0; b < i.length; b++) {
                i[b].onsubmit = w;
                for (var x = i[b].getElementsByClassName("ladi-button"), N = 0; N < x.length; N++) {
                    var O = i[b].getElementsByClassName("ladi-button")[N];
                    if (!e.isEmpty(O)) {
                        var I = e.findAncestor(O, "ladi-element");
                        !e.isEmpty(e.runtime.eventData[I.id]) && e.runtime.eventData[I.id]["option.is_add_to_cart"] ? I.addEventListener("click", L) : I.addEventListener("click", S)
                    }
                }
                for (var k = i[b].querySelectorAll("[tabindex]"), D = 0, B = 0; B < k.length; B++) {
                    var R = parseInt(k[B].getAttribute("tabindex")) || 0;
                    R > D && (D = R), k[B].setAttribute("tabindex", e.runtime.tabindexForm + R)
                }
                e.runtime.tabindexForm += D
            }
            var M = function (t, a, n) {
                for (A = a, C = n, b = 0; b < i.length; b++) {
                    var r = e.findAncestor(i[b], "ladi-element");
                    !e.isEmpty(e.runtime.eventData[r.id]) && e.runtime.eventData[r.id]["option.form_auto_complete"] && t.forEach(T)
                }
            };
            M(e.copy(u).except(p));
            e.runtime.tmp.runAfterLocation.push(function () {
                var t = "",
                    a = "",
                    n = "",
                    r = "",
                    o = function (e) {
                        var i = window.LadiLocation[a].data[e];
                        t += '<option value="' + i.id + ":" + i.name + '">' + i.name + "</option>"
                    },
                    l = function (t) {
                        var i = window.LadiLocation[t.target.getAttribute("data-country")].data[t.target.value.split(":")[0]];
                        n = "", e.isEmpty(i) || Object.keys(i.data).forEach(function (t) {
                            var e = i.data[t];
                            n += '<option value="' + e.id + ":" + e.name + '">' + e.name + "</option>"
                        });
                        var a = e.findAncestor(t.target, "ladi-element");
                        if (!e.isEmpty(a)) {
                            var r = a.querySelector('select[name="district"]');
                            e.isEmpty(r) || (r.setAttribute("data-selected", ""), r.innerHTML = r.querySelector("option").outerHTML + n);
                            var o = a.querySelector('select[name="ward"]');
                            e.isEmpty(o) || (o.setAttribute("data-selected", ""), o.innerHTML = o.querySelector("option").outerHTML)
                        }
                    },
                    s = function (t) {
                        var i = e.findAncestor(t.target, "ladi-element");
                        if (!e.isEmpty(i)) {
                            var a = i.querySelector('select[name="ward"]');
                            if (!e.isEmpty(a)) {
                                a.setAttribute("data-selected", ""), r = "";
                                var n = i.querySelector('select[name="state"]');
                                if (!e.isEmpty(n)) {
                                    var o = n.getAttribute("data-selected");
                                    if (!e.isEmpty(o)) {
                                        o = o.split(":")[0];
                                        var l = window.LadiLocation[n.getAttribute("data-country")].data[o];
                                        if (!e.isEmpty(l)) {
                                            var s = l.data[t.target.value.split(":")[0]];
                                            e.isEmpty(s) || Object.keys(s.data).forEach(function (t) {
                                                var e = s.data[t];
                                                r += '<option value="' + e.id + ":" + e.name + '">' + e.name + "</option>"
                                            })
                                        }
                                    }
                                }
                                a.innerHTML = a.querySelector("option").outerHTML + r
                            }
                        }
                    };
                for (b = 0; b < i.length; b++) {
                    var c = i[b].querySelectorAll('.ladi-element .ladi-form-item-container [name="state"]'),
                        d = 0,
                        u = null;
                    for (d = 0; d < c.length; d++)
                        if (u = e.findAncestor(c[d], "ladi-element"), !e.isEmpty(u) && (a = e.runtime.eventData[u.id]["option.input_country"], !e.isEmpty(a) && (t = "", a = a.split(":")[0], !e.isEmpty(window.LadiLocation[a])))) {
                            var p = window.LadiLocation[a].data;
                            Object.keys(p).forEach(o), c[d].innerHTML = c[d].querySelector("option").outerHTML + t, c[d].setAttribute("data-country", a), c[d].addEventListener("change", l)
                        } var m = i[b].querySelectorAll('.ladi-element .ladi-form-item-container [name="district"]');
                    for (d = 0; d < m.length; d++) m[d].addEventListener("change", s)
                }
            }), e.runtime.tmp.runAfterLocation.push(function () {
                M(m, !0, !0)
            })
        }(), (c = function () {
            l.forEach(function (t) {
                if ("countdown" == e.runtime.eventData[t].type) {
                    var i = document.getElementById(t);
                    if (!e.isEmpty(i)) {
                        var a = i.getAttribute("data-type"),
                            n = 0,
                            r = 0,
                            o = Date.now();
                        if (i.hasAttribute("data-date-start") || i.hasAttribute("data-date-end")) n = parseFloat(i.getAttribute("data-date-start")) || 0, r = parseFloat(i.getAttribute("data-date-end")) || 0;
                        else {
                            if (a == e.const.COUNTDOWN_TYPE.countdown) {
                                var l = parseInt(i.getAttribute("data-minute")) || 0;
                                if (l <= 0) return;
                                for (r = e.runtime.timenow; r <= o;) r += 60 * l * 1e3
                            }
                            if (a == e.const.COUNTDOWN_TYPE.endtime && (r = parseInt(i.getAttribute("data-endtime")) || 0), a == e.const.COUNTDOWN_TYPE.daily) {
                                var s = i.getAttribute("data-daily-start"),
                                    c = i.getAttribute("data-daily-end");
                                if (!e.isEmpty(s) && !e.isEmpty(c)) {
                                    var d = (new Date).toDateString();
                                    n = new Date(d + " " + s).getTime(), r = new Date(d + " " + c).getTime()
                                }
                            }
                            i.setAttribute("data-date-start", n), i.setAttribute("data-date-end", r)
                        }
                        if (!(n > o)) {
                            var u = r - o;
                            u < 0 && (u = 0);
                            for (var p = e.getCountdownTime(u), m = i.querySelectorAll("[data-item-type]"), g = 0; g < m.length; g++) m[g].querySelectorAll(".ladi-countdown-text span")[0].textContent = p[m[g].getAttribute("data-item-type")]
                        }
                    }
                }
            })
        })(), e.runtime.interval_countdown = e.runInterval(c, 1e3), l.forEach(function (t) {
            var i = e.runtime.eventData[t];
            if ("gallery" == i.type) {
                var a = document.getElementById(t);
                if (!e.isEmpty(a)) {
                    var n = i[e.runtime.device + ".option.gallery_control.autoplay"],
                        r = i[e.runtime.device + ".option.gallery_control.autoplay_time"],
                        o = 0;
                    n && !e.isEmpty(r) && (o = r);
                    var l = function (e) {
                            p(e, t, a)
                        },
                        s = function (i) {
                            i.stopPropagation(), i = e.getEventCursorData(i), e.isEmpty(e.runtime.timeout_gallery[t]) && (e.runtime.current_element_mouse_down_gallery_view = t, e.runtime.current_element_mouse_down_gallery_view_position_x = i.pageX)
                        },
                        c = function (i) {
                            i.stopPropagation(), i = e.getEventCursorData(i), (a.getElementsByClassName("ladi-gallery")[0].classList.contains("ladi-gallery-top") || a.getElementsByClassName("ladi-gallery")[0].classList.contains("ladi-gallery-bottom")) && (e.runtime.current_element_mouse_down_gallery_control = t, e.runtime.current_element_mouse_down_gallery_control_time = Date.now(), e.runtime.current_element_mouse_down_gallery_control_position_x = i.pageX, a.getElementsByClassName("ladi-gallery-control-box")[0].style.setProperty("transition-duration", "0ms"), a.getElementsByClassName("ladi-gallery-control-box")[0].setAttribute("data-left", getComputedStyle(a.getElementsByClassName("ladi-gallery-control-box")[0]).left))
                        };
                    a.getElementsByClassName("ladi-gallery-view-arrow-left")[0].addEventListener("click", function (e) {
                        e.stopPropagation(), a.setAttribute("data-is-next", !1), a.setAttribute("data-next-time", Date.now() + 1e3 * o), d(t, !1)
                    }), a.getElementsByClassName("ladi-gallery-view-arrow-right")[0].addEventListener("click", function (e) {
                        e.stopPropagation(), a.setAttribute("data-is-next", !0), a.setAttribute("data-next-time", Date.now() + 1e3 * o), d(t, !1)
                    }), a.getElementsByClassName("ladi-gallery-control-arrow-left")[0].addEventListener("click", function (t) {
                        t.stopPropagation();
                        var i = a.getElementsByClassName("ladi-gallery-control-item")[0];
                        if (!e.isEmpty(i)) {
                            var n = getComputedStyle(i);
                            if (a.getElementsByClassName("ladi-gallery")[0].classList.contains("ladi-gallery-top") || a.getElementsByClassName("ladi-gallery")[0].classList.contains("ladi-gallery-bottom")) {
                                var r = (parseFloat(n.width) || 0) + (parseFloat(n.marginRight) || 0);
                                (r += parseFloat(a.getElementsByClassName("ladi-gallery-control-box")[0].style.getPropertyValue("left")) || 0) > 0 && (r = 0), a.getElementsByClassName("ladi-gallery-control-box")[0].style.setProperty("left", r + "px")
                            } else {
                                var l = (parseFloat(n.height) || 0) + (parseFloat(n.marginBottom) || 0);
                                (l += parseFloat(a.getElementsByClassName("ladi-gallery-control-box")[0].style.getPropertyValue("top")) || 0) > 0 && (l = 0), a.getElementsByClassName("ladi-gallery-control-box")[0].style.setProperty("top", l + "px")
                            }
                            a.setAttribute("data-next-time", Date.now() + 1e3 * o)
                        }
                    }), a.getElementsByClassName("ladi-gallery-control-arrow-right")[0].addEventListener("click", function (t) {
                        t.stopPropagation();
                        var i = a.getElementsByClassName("ladi-gallery-control-item")[0];
                        if (!e.isEmpty(i)) {
                            var n = getComputedStyle(i);
                            if (a.getElementsByClassName("ladi-gallery")[0].classList.contains("ladi-gallery-top") || a.getElementsByClassName("ladi-gallery")[0].classList.contains("ladi-gallery-bottom")) {
                                var r = (parseFloat(n.width) || 0) + (parseFloat(n.marginRight) || 0);
                                r = -r + (parseFloat(a.getElementsByClassName("ladi-gallery-control-box")[0].style.getPropertyValue("left")) || 0);
                                var l = parseFloat(getComputedStyle(a.getElementsByClassName("ladi-gallery-control-box")[0]).width) || 0;
                                r < (l = (l = -(l -= parseFloat(getComputedStyle(a.getElementsByClassName("ladi-gallery-control")[0]).width) || 0)) > 0 ? 0 : l) && (r = l), a.getElementsByClassName("ladi-gallery-control-box")[0].style.setProperty("left", r + "px")
                            } else {
                                var s = (parseFloat(n.height) || 0) + (parseFloat(n.marginBottom) || 0);
                                s = -s + (parseFloat(a.getElementsByClassName("ladi-gallery-control-box")[0].style.getPropertyValue("top")) || 0);
                                var c = parseFloat(getComputedStyle(a.getElementsByClassName("ladi-gallery-control-box")[0]).height) || 0;
                                s < (c = (c = -(c -= parseFloat(getComputedStyle(a.getElementsByClassName("ladi-gallery-control")[0]).height) || 0)) > 0 ? 0 : c) && (s = c), a.getElementsByClassName("ladi-gallery-control-box")[0].style.setProperty("top", s + "px")
                            }
                            a.setAttribute("data-next-time", Date.now() + 1e3 * o)
                        }
                    }), a.getElementsByClassName("ladi-gallery-view")[0].addEventListener("mousedown", s), a.getElementsByClassName("ladi-gallery-view")[0].addEventListener("touchstart", s), a.getElementsByClassName("ladi-gallery-control")[0].addEventListener("mousedown", c), a.getElementsByClassName("ladi-gallery-control")[0].addEventListener("touchstart", c);
                    for (var u = a.getElementsByClassName("ladi-gallery-control-item"), m = 0; m < u.length; m++) u[m].addEventListener("click", l)
                }
            }
        }), e.runtime.interval_gallery = e.runInterval(function () {
            l.forEach(function (t) {
                var i = e.runtime.eventData[t];
                if ("gallery" == i.type) {
                    var a = document.getElementById(t);
                    if (!e.isEmpty(a)) {
                        var n = i[e.runtime.device + ".option.gallery_control.autoplay"],
                            r = i[e.runtime.device + ".option.gallery_control.autoplay_time"],
                            o = 0;
                        if (n && !e.isEmpty(r) && (o = r), o > 0) {
                            var l = a.getAttribute("data-next-time"),
                                s = Date.now();
                            e.isEmpty(l) && (l = s + 1, a.setAttribute("data-next-time", l)), s >= l && (d(t, !0), a.setAttribute("data-next-time", s + 1e3 * o))
                        }
                    }
                }
            })
        }, 1e3), l.forEach(function (t) {
            var i = e.runtime.eventData[t];
            if ("carousel" == i.type) {
                var a = document.getElementById(t);
                if (!e.isEmpty(a)) {
                    var n = i[e.runtime.device + ".option.carousel_setting.autoplay"],
                        r = i[e.runtime.device + ".option.carousel_setting.autoplay_time"],
                        o = 0;
                    n && !e.isEmpty(r) && (o = r);
                    var l = function (i) {
                        i.stopPropagation(), i = e.getEventCursorData(i), !e.isEmpty(e.runtime.timenext_carousel[t]) && e.runtime.timenext_carousel[t] > Date.now() || (e.runtime.timenext_carousel[t] = Date.now() + 864e5, e.runtime.current_element_mouse_down_carousel = t, e.runtime.current_element_mouse_down_carousel_position_x = i.pageX, a.getElementsByClassName("ladi-carousel-content")[0].style.setProperty("transition-duration", "0ms"), a.getElementsByClassName("ladi-carousel-content")[0].setAttribute("data-left", getComputedStyle(a.getElementsByClassName("ladi-carousel-content")[0]).left))
                    };
                    a.getElementsByClassName("ladi-carousel-arrow-left")[0].addEventListener("click", function (e) {
                        e.stopPropagation(), a.getElementsByClassName("ladi-carousel-content")[0].style.removeProperty("transition-duration"), a.setAttribute("data-is-next", !1), a.setAttribute("data-next-time", Date.now() + 1e3 * o), m(t, !1)
                    }), a.getElementsByClassName("ladi-carousel-arrow-right")[0].addEventListener("click", function (e) {
                        e.stopPropagation(), a.getElementsByClassName("ladi-carousel-content")[0].style.removeProperty("transition-duration"), a.setAttribute("data-is-next", !0), a.setAttribute("data-next-time", Date.now() + 1e3 * o), m(t, !1)
                    }), a.getElementsByClassName("ladi-carousel")[0].addEventListener("mousedown", l), a.getElementsByClassName("ladi-carousel")[0].addEventListener("touchstart", l)
                }
            }
        }), e.runtime.interval_carousel = e.runInterval(function () {
            l.forEach(function (t) {
                var i = e.runtime.eventData[t];
                if ("carousel" == i.type) {
                    var a = document.getElementById(t);
                    if (!e.isEmpty(a)) {
                        var n = i[e.runtime.device + ".option.carousel_setting.autoplay"],
                            r = i[e.runtime.device + ".option.carousel_setting.autoplay_time"],
                            o = 0;
                        if (n && !e.isEmpty(r) && (o = r), o > 0) {
                            var l = a.getAttribute("data-next-time"),
                                s = Date.now();
                            e.isEmpty(l) && (l = s + 1, a.setAttribute("data-next-time", l)), s >= l && (m(t, !0), a.setAttribute("data-next-time", s + 1e3 * o))
                        }
                    }
                }
            })
        }, 1e3),
        function () {
            l.forEach(function (t) {
                var i = e.runtime.eventData[t];
                if (!e.isEmpty(i["option.data_action"])) {
                    var a = document.getElementById(t);
                    if (!e.isEmpty(a) && "true" != a.getAttribute("data-action") && i["option.data_action"].type == e.const.DATA_ACTION_TYPE.link) {
                        var n = e.getLinkUTMRedirect(a.href, window.location.search);
                        a.setAttribute("data-replace-href", n), a.href = e.convertDataReplaceStr(n)
                    }
                }
            });
            for (var t = document.querySelectorAll(".ladi-headline a[href], .ladi-paragraph a[href], .ladi-list-paragraph a[href]"), i = 0; i < t.length; i++) {
                var a = e.getLinkUTMRedirect(t[i].href, window.location.search);
                t[i].setAttribute("data-replace-href", a), t[i].href = e.convertDataReplaceStr(a)
            }
        }(), t && e.const.TIME_ONPAGE_TRACKING.forEach(function (t) {
            e.runTimeout(function () {
                e.isFunction(window.gtag) && window.gtag("event", "TimeOnPage_" + t + "_seconds", {
                    event_category: "LadiPageTimeOnPage",
                    event_label: window.location.host + window.location.pathname,
                    non_interaction: !0
                }), e.isFunction(window.fbq) && window.fbq("trackCustom", "TimeOnPage_" + t + "_seconds")
            }, 1e3 * t)
        }),
        function () {
            for (var t = 2500, i = 3800, a = 800, n = 50, r = 150, o = 500, l = 1300, s = 600, c = 1500, d = t, u = function (i, a, n, r) {
                    e.isEmpty(i) || (i.classList.remove("in"), i.classList.add("out"));
                    var o = e.isEmpty(i) ? null : i.nextSibling;
                    if (e.isEmpty(o) ? n && e.runTimeout(function () {
                            f(m(a))
                        }, t) : e.runTimeout(function () {
                            u(o, a, n, r)
                        }, r), e.isEmpty(o) && document.querySelectorAll("html")[0].classList.contains("no-csstransitions")) {
                        var l = m(a);
                        g(a, l)
                    }
                }, p = function (i, a, n, r) {
                    var o = a.parentElement,
                        l = o.parentElement;
                    l.classList.contains("ladipage-animated-headline") || (l = l.parentElement), e.isEmpty(i) || (i.classList.add("in"), i.classList.remove("out"));
                    var s = e.isEmpty(i) ? null : i.nextSibling;
                    e.isEmpty(s) ? ((l.classList.contains("rotate-2") || l.classList.contains("rotate-3") || l.classList.contains("scale")) && o.style.setProperty("width", a.clientWidth + "px"), e.isEmpty(e.findAncestor(a, "type")) || e.runTimeout(function () {
                        var t = e.findAncestor(a, "ladipage-animated-words-wrapper");
                        e.isEmpty(t) || t.classList.add("waiting")
                    }, 200), n || e.runTimeout(function () {
                        f(a)
                    }, t)) : e.runTimeout(function () {
                        p(s, a, n, r)
                    }, r)
                }, m = function (t) {
                    var i = t.nextSibling;
                    return e.isEmpty(i) || i.classList.contains("after") ? t.parentElement.firstChild : i
                }, g = function (t, e) {
                    t.classList.remove("is-visible"), t.classList.add("is-hidden"), e.classList.remove("is-hidden"), e.classList.add("is-visible")
                }, y = function (t, i) {
                    e.isEmpty(e.findAncestor(t, "type")) ? e.isEmpty(e.findAncestor(t, "clip")) || (e.findAncestor(t, "ladipage-animated-words-wrapper").style.setProperty("width", t.clientWidth + 5 + "px"), e.runTimeout(function () {
                        f(t)
                    }, s + c)) : (p(t.querySelectorAll("i")[0], t, !1, i), t.classList.add("is-visible"), t.classList.remove("is-hidden"))
                }, f = function (c) {
                    if (!e.isEmpty(c)) {
                        var d = m(c);
                        if (e.isEmpty(e.findAncestor(c, "type")))
                            if (e.isEmpty(e.findAncestor(c, "letters"))) e.isEmpty(e.findAncestor(c, "clip")) ? e.isEmpty(e.findAncestor(c, "loading-bar")) ? (g(c, d), e.runTimeout(function () {
                                f(d)
                            }, t)) : (e.findAncestor(c, "ladipage-animated-words-wrapper").classList.remove("is-loading"), g(c, d), e.runTimeout(function () {
                                f(d)
                            }, i), e.runTimeout(function () {
                                e.findAncestor(c, "ladipage-animated-words-wrapper").classList.add("is-loading")
                            }, a)) : (e.findAncestor(c, "ladipage-animated-words-wrapper").style.setProperty("width", "2px"), e.runTimeout(function () {
                                g(c, d), y(d)
                            }, s));
                            else {
                                var _ = c.querySelectorAll("i").length >= d.querySelectorAll("i").length;
                                u(c.querySelectorAll("i")[0], c, _, n), p(d.querySelectorAll("i")[0], d, _, n)
                            }
                        else {
                            var h = e.findAncestor(c, "ladipage-animated-words-wrapper");
                            h.classList.add("selected"), h.classList.remove("waiting"), e.runTimeout(function () {
                                h.classList.remove("selected"), c.classList.remove("is-visible"), c.classList.add("is-hidden");
                                for (var t = c.querySelectorAll("i"), e = 0; e < t.length; e++) t[e].classList.remove("in"), t[e].classList.add("out")
                            }, o), e.runTimeout(function () {
                                y(d, r)
                            }, l)
                        }
                    }
                }, _ = function (t) {
                    var n = !1;
                    if (e.const.ANIMATED_LIST.forEach(function (e) {
                            t.classList.contains(e) && (n = !0)
                        }), n) {
                        var r = t.getElementsByClassName("ladipage-animated-words-wrapper")[0];
                        if (!e.isEmpty(r)) {
                            var o = e.isEmpty(r.getAttribute("data-word")) ? [] : JSON.parse(r.getAttribute("data-word"));
                            if (0 != o.length) {
                                var l = r.textContent.trim();
                                if (r.textContent = "", r.innerHTML = r.innerHTML + '<b class="is-visible">' + l + "</b>", o.forEach(function (t) {
                                        e.isEmpty(t) ? r.innerHTML = r.innerHTML + "<b>" + l + "</b>" : r.innerHTML = r.innerHTML + "<b>" + t.trim() + "</b>"
                                    }), !e.isEmpty(e.findAncestor(r, "type")) || !e.isEmpty(e.findAncestor(r, "loading-bar")) || !e.isEmpty(e.findAncestor(r, "clip"))) {
                                    r.innerHTML = r.innerHTML + '<div class="after"></div>';
                                    for (var s = getComputedStyle(r).color, c = r.getElementsByClassName("after"), u = 0; u < c.length; u++) c[u].style.setProperty("background-color", s)
                                }
                                if (t.classList.contains("type") && r.classList.add("waiting"), (t.classList.contains("type") || t.classList.contains("rotate-2") || t.classList.contains("rotate-3") || t.classList.contains("scale")) && t.classList.add("letters"), function (t) {
                                        for (var i = 0; i < t.length; i++) {
                                            var a = t[i],
                                                n = a.textContent.trim().split(""),
                                                r = a.classList.contains("is-visible");
                                            for (var o in n) {
                                                " " == n[o] && (n[o] = "&nbsp;");
                                                var l = e.findAncestor(a, "rotate-2");
                                                e.isEmpty(l) || (n[o] = "<em>" + n[o] + "</em>"), n[o] = r ? '<i class="in">' + n[o] + "</i>" : "<i>" + n[o] + "</i>"
                                            }
                                            var s = n.join("");
                                            a.innerHTML = s, a.style.setProperty("opacity", 1)
                                        }
                                    }(document.querySelectorAll(".letters b")), t.classList.contains("loading-bar")) d = i, e.runTimeout(function () {
                                    r.classList.add("is-loading")
                                }, a);
                                else if (t.classList.contains("clip")) {
                                    var p = r.clientWidth + 5;
                                    r.style.setProperty("width", p + "px")
                                }
                                e.runTimeout(function () {
                                    f(t.getElementsByClassName("is-visible")[0])
                                }, d)
                            }
                        }
                    }
                }, h = document.getElementsByClassName("ladipage-animated-headline"), v = 0; v < h.length; v++) _(h[v])
        }(), document.addEventListener("mouseleave", e.runEventMouseLeave), document.addEventListener("mousemove", e.runEventMouseMove), document.addEventListener("touchmove", e.runEventMouseMove), document.addEventListener("mouseup", e.runEventMouseUp), document.addEventListener("touchend", e.runEventMouseUp), window.addEventListener("scroll", e.runEventScroll), window.addEventListener("resize", e.runEventResize), window.addEventListener("orientationchange", e.runEventOrientationChange), document.getElementById(e.runtime.backdrop_popup_id).addEventListener("click", e.runEventBackdropClick), e.reloadLazyload(),
        function () {
            if (t) {
                    a = !1,
                    n = e.isArray(e.runtime.DOMAIN_FREE) ? e.runtime.DOMAIN_FREE : [],
                    r = window.location.href;
                ["/", ".", "/"].forEach(function (t) {
                    for (; r.endsWith(t);) r = r.substr(0, r.length - t.length)
                });
                var o = e.getElementAHref(r).host.toLowerCase();
                if (n.forEach(function (t) {
                        a || (a = o.endsWith(t.toLowerCase()))
                    }), a) i();
                else {
                    var l = {
                        domain: window.location.host
                    };
                    e.isEmpty(s[e.const.TRACKING_NAME]) || (l[e.const.TRACKING_NAME] = s[e.const.TRACKING_NAME]), e.sendRequest("POST", e.const.API_CHECK_VERIFY, JSON.stringify(l), !0, {
                        "Content-Type": "application/json"
                    }, function (t, e, a) {
                        a.readyState == XMLHttpRequest.DONE && 200 == e && 0 == JSON.parse(t).data && i()
                    })
                }
            }
        }(), e.setDataReplaceStart(), t || e.runAfterLocation(), "complete" === document.readyState || "loading" !== document.readyState && !document.documentElement.doScroll ? e.documentLoaded() : document.addEventListener("DOMContentLoaded", e.documentLoaded)
}, LadiPageScriptV2.prototype.copy = function (t) {
    return JSON.parse(JSON.stringify(t))
}, LadiPageScriptV2.prototype.checkResizeImage = function (t) {
    var e = t.toLowerCase();
    return e.endsWith(".jpg") || e.endsWith(".png")
}, LadiPageScriptV2.prototype.getOptimizeImage = function (t, e, i, a, n, r) {
    if (this.isEmpty(t) || !r) return t;
    var o = t.split("/"),
        l = o.indexOf("");
    if (-1 != l && o.length > l + 1 && (o[l + 1] = o[l + 1].toLowerCase()), l = o.indexOf(this.const.STATIC_DOMAIN.toLowerCase()), this.checkResizeImage(t) && -1 != l && (o.length == l + 3 || o.length == l + 6 && "ls" == o[3] && "product" == o[5])) {
        var s = o[l + 1].toLowerCase(),
            c = !0;
        if (s.startsWith("s")) {
            var d = s.split("x");
            2 == d.length && parseFloat(d[1]) == d[1] && (c = !1)
        }
        if (c) {
            if (r || n) {
                if (e = parseInt(e) || 0, i = parseInt(i) || 0, a) {
                    var u = this.const.RESIZE_RANGE + this.const.RESIZE_ADD_PIXEL;
                    e = e - e % this.const.RESIZE_RANGE + u, i = i - i % this.const.RESIZE_RANGE + u
                }
            } else e = this.const.WIDTH_SECTION_RESIZE[LadiPage.data.device_screen], i = this.const.WIDTH_SECTION_RESIZE[LadiPage.data.device_screen];
            o.insert(l + 1, "s" + e + "x" + i)
        }
    }
    return t = o.join("/")
}, LadiPageScriptV2.prototype.historyReplaceState = function (t) {
    try {
        window.history.replaceState(null, null, t)
    } catch (t) {}
}, LadiPageScriptV2.prototype.resetViewport = function () {
    this.isEmpty(this.runtime.tmp.timeoutViewport) || this.removeTimeout(this.runtime.tmp.timeoutViewport), this.isFunction(window.ladi_viewport) && (this.runtime.tmp.timeoutViewport = this.runTimeout(window.ladi_viewport, 10))
}, LadiPageScriptV2.prototype.runEventResize = function (t) {
    var e = this;
    e instanceof LadiPageScriptV2 || (e = LadiPageScript), e.resetViewport()
}, LadiPageScriptV2.prototype.runEventOrientationChange = function (t) {
    var e = this;
    e instanceof LadiPageScriptV2 || (e = LadiPageScript), e.resetViewport()
}, LadiPageScriptV2.prototype.runAfterLocation = function () {
    var t = this;
    for (t instanceof LadiPageScriptV2 || (t = LadiPageScript); t.runtime.tmp.runAfterLocation.length > 0;) {
        t.runtime.tmp.runAfterLocation.shift()()
    }
}, LadiPageScriptV2.prototype.randomId = function () {
    var t = Date.now(),
        e = window.performance && window.performance.now && 1e3 * window.performance.now() || 0;
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (i) {
        var a = 16 * Math.random();
        return t > 0 ? (a = (t + a) % 16 | 0, t = Math.floor(t / 16)) : (a = (e + a) % 16 | 0, e = Math.floor(e / 16)), ("x" === i ? a : 3 & a | 8).toString(16)
    })
}, LadiPageScriptV2.prototype.removeLazyloadPopup = function (t) {
    var e = document.getElementById(t);
    if (!this.isEmpty(e))
        for (var i = e.getElementsByClassName("ladi-lazyload"); i.length > 0;) i[0].classList.remove("ladi-lazyload")
}, LadiPageScriptV2.prototype.reloadLazyload = function () {
    var t = this;
    t instanceof LadiPageScriptV2 || (t = LadiPageScript);
    for (var e = document.getElementsByClassName("ladi-lazyload"), i = [], a = 0; a < e.length; a++) {
        var n = t.getElementBoundingClientRect(e[a]).y + window.scrollY;
        window.scrollY + t.getHeightDevice() > n && n + e[a].offsetHeight > window.scrollY && i.push(e[a])
    }
    i.forEach(function (t) {
        t.classList.remove("ladi-lazyload")
    });
    for (var r = document.querySelectorAll(".ladi-gallery .ladi-gallery-view-item.selected:not(.ladi-lazyload)"), o = 0; o < r.length; o++)
        if (t.isEmpty(r[o].getAttribute("data-lazyload"))) {
            r[o].setAttribute("data-lazyload", !0);
            for (var l = r[o].parentElement.getElementsByClassName("ladi-lazyload"); l.length > 0;) l[0].classList.remove("ladi-lazyload")
        }
}, LadiPageScriptV2.prototype.documentLoaded = function () {
    var t = this;
    t instanceof LadiPageScriptV2 || (t = LadiPageScript);
    var e = t.getURLSearchParams(window.location.search, null, !0),
        i = e.ladishow,
        a = e.ladihide,
        n = e.laditop;
    t.isEmpty(i) ? i = [] : t.isArray(i) || (i = i.split(",").removeSpace()), t.isEmpty(a) ? a = [] : t.isArray(a) || (a = a.split(",").removeSpace()), t.isEmpty(n) ? n = [] : t.isArray(n) || (n = n.split(",").removeSpace().reverse()), a.forEach(function (t) {
        window.ladi(t).hide()
    }), i.forEach(function (t) {
        window.ladi(t).show()
    }), n.forEach(function (t) {
        window.ladi(t).top()
    });
    var r = window.location.hash;
    if (!t.isEmpty(r)) try {
        var o = document.querySelector(r);
        t.isEmpty(o) || t.isEmpty(o.id) || t.runTimeout(function () {
            window.ladi(o.id).scroll()
        }, 100)
    } catch (t) {}
}, LadiPageScriptV2.prototype.getWidthDevice = function () {
    return window.outerWidth > 0 ? window.outerWidth : window.screen.width
}, LadiPageScriptV2.prototype.getHeightDevice = function (t) {
    return window.outerHeight > 0 && (t && window.outerHeight > window.innerHeight || !t && window.innerHeight > window.outerHeight) ? window.outerHeight : window.innerHeight
}, LadiPageScriptV2.prototype.startAutoScroll = function (t, e, i, a) {
    if (this.runtime.isDesktop ? i : a) {
        var n = document.getElementById(t);
        if (!this.isEmpty(n) && !n.classList.contains("ladi-auto-scroll")) {
            var r = 0;
            if ("section" != e) {
                if (n.clientWidth <= this.getWidthDevice()) return;
                r = (r = parseFloat(getComputedStyle(n).left) || 0) > 0 ? 0 : -1 * r
            } else {
                for (var o = n.querySelectorAll(".ladi-container > .ladi-element"), l = 0; l < o.length; l++) {
                    var s = parseFloat(getComputedStyle(o[l]).left) || 0;
                    s < r && (r = s)
                }
                r = r > 0 ? 0 : -1 * r, n.querySelector(".ladi-container").style.setProperty("margin-left", r + "px")
            }
            n.classList.add("ladi-auto-scroll"), n.scrollLeft = r
        }
    }
}, LadiPageScriptV2.prototype.stopAllVideo = function (t) {
    if (this.runtime.isDesktop || t) {
        var e = document.getElementsByClassName("iframe-video-play");
        if (e.length > 0) {
            if (e[0].classList.contains("lightbox-item")) document.getElementById(this.runtime.lightbox_screen_id).getElementsByClassName("lightbox-close")[0].click();
            else e[0].parentElement.removeChild(e[0]);
            this.stopAllVideo(t)
        } else delete this.runtime.tmp.gallery_playing_video
    }
}, LadiPageScriptV2.prototype.getLinkUTMRedirect = function (t, e, i) {
    var a = this.createTmpElement("a", "", {
            href: t
        }),
        n = this,
        r = this.getURLSearchParams(e),
        o = r.utm_source;
    if (!this.isEmpty(o)) {
        o = "utm_source=" + encodeURIComponent(o);
        var l = r.utm_medium,
            s = r.utm_campaign,
            c = r.utm_term,
            d = r.utm_content;
        this.isEmpty(l) || (o += "&utm_medium=" + encodeURIComponent(l)), this.isEmpty(s) || (o += "&utm_campaign=" + encodeURIComponent(s)), this.isEmpty(c) || (o += "&utm_term=" + encodeURIComponent(c)), this.isEmpty(d) || (o += "&utm_content=" + encodeURIComponent(d)), this.isEmpty(a.href) || this.isEmpty(a.host) || !this.isEmpty(this.getURLSearchParams(a.search, "utm_source")) || (a.search = a.search + (this.isEmpty(a.search) ? "?" : "&") + o)
    }
    if (i) {
        var u = Object.keys(this.runtime.replaceStr),
            p = "";
        (u = u.except(["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"])).forEach(function (t) {
            var e = n.getDataReplaceStr(t);
            e = n.isEmpty(e) ? "" : e, n.isArray(e) ? e.forEach(function (e) {
                n.isEmpty(p) || (p += "&"), p += t + "=" + encodeURIComponent(e)
            }) : (n.isEmpty(p) || (p += "&"), p += t + "=" + encodeURIComponent(e))
        }), this.isEmpty(a.href) || (a.search = a.search + (this.isEmpty(a.search) ? "?" : "&") + p)
    }
    return a.href
}, LadiPageScriptV2.prototype.randomInt = function (t, e) {
    return t = Math.ceil(t), e = Math.floor(e), Math.floor(Math.random() * (e - t + 1)) + t
}, LadiPageScriptV2.prototype.runCallback = function (t, e) {
    if (this.isFunction(e)) {
        var i = this;
        if (t) {
            var a = i.runInterval(function () {
                i.removeInterval(a), i.runCallback(!1, e)
            }, 0);
            return
        }
        e()
    }
}, LadiPageScriptV2.prototype.runTimeout = function (t, e) {
    if (this.isFunction(t)) {
        if (!this.isEmpty(e) && e > 0) return setTimeout(t, e);
        t()
    }
}, LadiPageScriptV2.prototype.removeTimeout = function (t) {
    return clearTimeout(t)
}, LadiPageScriptV2.prototype.removeInterval = function (t) {
    return clearInterval(t)
}, LadiPageScriptV2.prototype.runInterval = function (t, e) {
    if (this.isFunction(t)) return setInterval(t, e)
}, LadiPageScriptV2.prototype.deleteCookie = function (t) {
    document.cookie = t + "=; expires = Thu, 01 Jan 1970 00:00:00 GMT; path = /"
}, LadiPageScriptV2.prototype.setCookie = function (t, e, i, a, n, r) {
    var o = "";
    if (n) o = "0";
    else {
        var l = new Date;
        l.setTime(l.getTime() + 24 * a * 60 * 60 * 1e3), o = "expires = " + l.toUTCString()
    }
    var s = e + " = " + i;
    this.isEmpty(o) || (s += "; " + o), this.isEmpty(t) || (s += "; domain = " + t), this.isEmpty(r) || this.runtime.isIE || (s += "; path = " + r), document.cookie = s
}, LadiPageScriptV2.prototype.getCookie = function (t) {
    for (var e = t + "=", i = decodeURIComponent(document.cookie).split(";"), a = 0; a < i.length; a++) {
        for (var n = i[a];
            " " == n.charAt(0);) n = n.substring(1);
        if (0 == n.indexOf(e)) return n.substring(e.length, n.length)
    }
    return ""
}, LadiPageScriptV2.prototype.getURLSearchParams = function (t, e, i) {
    var a = {};
    if (t = this.isNull(t) ? window.location.search : t, !this.isEmpty(t))
        for (var n = t.substr(1).split("&"), r = 0; r < n.length; ++r) {
            var o = n[r].split("=", 2);
            this.isNull(a[o[0]]) ? 1 == o.length ? a[o[0]] = "" : a[o[0]] = decodeURIComponent(o[1].replace(/\+/g, " ")) : i && (this.isArray(a[o[0]]) || (a[o[0]] = [a[o[0]]]), 1 == o.length ? a[o[0]].push("") : a[o[0]].push(decodeURIComponent(o[1].replace(/\+/g, " "))))
        }
    return this.isEmpty(e) ? a : a[e]
}, LadiPageScriptV2.prototype.getVideoId = function (t, e) {
    if (this.isEmpty(e)) return e;
    if (t == this.const.VIDEO_TYPE.youtube) {
        var i = this.createTmpElement("a", "", {
            href: e
        }); - 1 != e.toLowerCase().indexOf("watch") ? e = this.getURLSearchParams(i.search, "v") : -1 != e.toLowerCase().indexOf("embed/") ? e = i.pathname.substring("/embed/".length) : -1 != e.toLowerCase().indexOf("youtu.be") && (e = i.pathname.substring("/".length))
    }
    return e
}, LadiPageScriptV2.prototype.sendRequest = function (t, e, i, a, n, r) {
    var o = new XMLHttpRequest;
    try {
        if (this.isFunction(r) && (o.onreadystatechange = function () {
                r(o.responseText, o.status, o, e)
            }), o.open(t, e, a), this.isObject(n)) Object.keys(n).forEach(function (t) {
            o.setRequestHeader(t, n[t])
        });
        o.send(i)
    } catch (t) {
        this.isFunction(r) && r(t, 0, o, e)
    }
}, LadiPageScriptV2.prototype.runEventBackdropClick = function (t) {
    t.stopPropagation();
    var e = this;
    e instanceof LadiPageScriptV2 || (e = LadiPageScript);
    for (var i = null, a = document.querySelectorAll('[data-popup-backdrop="true"]'), n = 0; n < a.length; n++) "none" != getComputedStyle(a[n]).display && (i = a[n].id);
    e.runRemovePopup(i, e.runtime.isClient)
}, LadiPageScriptV2.prototype.runEventMouseMove = function (t) {
    t.stopPropagation();
    var e = this;
    e instanceof LadiPageScriptV2 || (e = LadiPageScript), t = e.getEventCursorData(t);
    var i = null,
        a = 0,
        n = 0,
        r = 0;
    e.isEmpty(e.runtime.current_element_mouse_down_carousel) || (i = document.getElementById(e.runtime.current_element_mouse_down_carousel), a = t.pageX - e.runtime.current_element_mouse_down_carousel_position_x, n = parseFloat(i.getElementsByClassName("ladi-carousel-content")[0].getAttribute("data-left")) || 0, (n += a) < (r = -((parseFloat(e.runtime.eventData[e.runtime.current_element_mouse_down_carousel][e.runtime.device + ".option.carousel_crop.width"]) || 0) - i.clientWidth)) && (n = r), n > 0 && (n = 0), i.getElementsByClassName("ladi-carousel-content")[0].style.setProperty("left", n + "px"));
    if (!e.isEmpty(e.runtime.current_element_mouse_down_gallery_view)) {
        i = document.getElementById(e.runtime.current_element_mouse_down_gallery_view), a = t.pageX - e.runtime.current_element_mouse_down_gallery_view_position_x;
        var o = parseFloat(i.getAttribute("data-current")) || 0;
        o == (parseFloat(i.getAttribute("data-max-item")) || 0) - 1 && a < 0 && (a = 0), a > 0 && 0 == o && (a = 0), a >= e.runtime.current_element_mouse_down_gallery_view_diff ? (e.runtime.current_element_mouse_down_gallery_view = null, e.runtime.current_element_mouse_down_gallery_view_position_x = 0, i.getElementsByClassName("ladi-gallery-view-arrow-left")[0].click()) : a <= -e.runtime.current_element_mouse_down_gallery_view_diff ? (e.runtime.current_element_mouse_down_gallery_view = null, e.runtime.current_element_mouse_down_gallery_view_position_x = 0, i.getElementsByClassName("ladi-gallery-view-arrow-right")[0].click()) : i.querySelectorAll(".ladi-gallery-view-item.selected").length > 0 && i.querySelectorAll(".ladi-gallery-view-item.selected")[0].style.setProperty("left", a + "px")
    }
    e.isEmpty(e.runtime.current_element_mouse_down_gallery_control) || (i = document.getElementById(e.runtime.current_element_mouse_down_gallery_control), a = t.pageX - e.runtime.current_element_mouse_down_gallery_control_position_x, n = parseFloat(i.getElementsByClassName("ladi-gallery-control-box")[0].getAttribute("data-left")) || 0, (n += a) < (r = (parseFloat(getComputedStyle(i.getElementsByClassName("ladi-gallery-control")[0]).width) || 0) - (parseFloat(getComputedStyle(i.getElementsByClassName("ladi-gallery-control-box")[0]).width) || 0)) && (n = r), n > 0 && (n = 0), i.getElementsByClassName("ladi-gallery-control-box")[0].style.setProperty("left", n + "px"))
}, LadiPageScriptV2.prototype.runEventMouseUp = function (t) {
    t.stopPropagation();
    var e = this;
    e instanceof LadiPageScriptV2 || (e = LadiPageScript), t = e.getEventCursorData(t);
    var i = null,
        a = 0;
    if (!e.isEmpty(e.runtime.current_element_mouse_down_carousel)) {
        delete e.runtime.timenext_carousel[e.runtime.current_element_mouse_down_carousel], a = t.pageX - e.runtime.current_element_mouse_down_carousel_position_x;
        var n = (i = document.getElementById(e.runtime.current_element_mouse_down_carousel)).getElementsByClassName("ladi-carousel-content")[0].getAttribute("data-left");
        i.getElementsByClassName("ladi-carousel-content")[0].removeAttribute("data-left"), i.getElementsByClassName("ladi-carousel-content")[0].style.removeProperty("transition-duration"), e.runtime.current_element_mouse_down_carousel = null, a >= e.runtime.current_element_mouse_down_carousel_diff ? i.getElementsByClassName("ladi-carousel-arrow-left")[0].click() : a <= -e.runtime.current_element_mouse_down_carousel_diff ? i.getElementsByClassName("ladi-carousel-arrow-right")[0].click() : i.getElementsByClassName("ladi-carousel-content").length > 0 && (i.getElementsByClassName("ladi-carousel-content")[0].style.setProperty("transition-duration", "100ms"), i.getElementsByClassName("ladi-carousel-content")[0].style.setProperty("left", n), e.runTimeout(function () {
            i.getElementsByClassName("ladi-carousel-content")[0].style.removeProperty("transition-duration")
        }, 1))
    }
    e.isEmpty(e.runtime.current_element_mouse_down_gallery_view) || (i = document.getElementById(e.runtime.current_element_mouse_down_gallery_view)).querySelectorAll(".ladi-gallery-view-item.selected").length > 0 && i.querySelectorAll(".ladi-gallery-view-item.selected")[0].style.removeProperty("left"), e.isEmpty(e.runtime.current_element_mouse_down_gallery_control) || ((i = document.getElementById(e.runtime.current_element_mouse_down_gallery_control)).getElementsByClassName("ladi-gallery-control-box")[0].removeAttribute("data-left"), i.getElementsByClassName("ladi-gallery-control-box")[0].style.removeProperty("transition-duration")), e.runtime.current_element_mouse_down_carousel_position_x = 0, e.runtime.current_element_mouse_down_gallery_view = null, e.runtime.current_element_mouse_down_gallery_view_position_x = 0;
    var r = 0;
    e.runtime.current_element_mouse_down_gallery_control_time + e.runtime.current_element_mouse_down_gallery_control_time_click < Date.now() && (r = 5), e.runTimeout(function () {
        e.runtime.current_element_mouse_down_gallery_control = null, e.runtime.current_element_mouse_down_gallery_control_time = 0, e.runtime.current_element_mouse_down_gallery_control_position_x = 0
    }, r)
}, LadiPageScriptV2.prototype.runEventMouseLeave = function (t) {
    var e = this;
    e instanceof LadiPageScriptV2 || (e = LadiPageScript), Object.keys(e.runtime.eventData).forEach(function (t) {
        var i = e.runtime.eventData[t];
        "popup" == i.type && i["option.show_popup_exit_page"] && window.ladi(t).show()
    })
}, LadiPageScriptV2.prototype.runEventScroll = function (t) {
    var e = this;
    if (e instanceof LadiPageScriptV2 || (e = LadiPageScript), !e.runtime.tmp.is_run_show_popup) {
        var i = e.runtime.isDesktop;
        if (Object.keys(e.runtime.eventData).forEach(function (t) {
                var a = e.runtime.eventData[t],
                    n = null,
                    r = null,
                    o = a[e.runtime.device + ".style.animation-name"];
                if (!e.isEmpty(o) && (n = document.getElementById(t), !e.isEmpty(n) && !n.classList.contains("ladi-animation"))) {
                    var l = parseFloat(a[e.runtime.device + ".style.animation-delay"]) || 0;
                    r = e.getElementBoundingClientRect(n).y + window.scrollY;
                    var s = window.scrollY > r && window.scrollY <= r + n.offsetHeight || window.scrollY + e.getHeightDevice(!0) >= r && window.scrollY + e.getHeightDevice(!0) <= r + n.offsetHeight || r >= window.scrollY && window.scrollY + e.getHeightDevice(!0) >= r + n.offsetHeight;
                    e.runtime.tmp.isFirstScroll && l > 0 && !s && n.classList.add("ladi-animation-hidden"), s && (n.classList.add("ladi-animation"), e.runTimeout(function () {
                        n.classList.remove("ladi-animation-hidden")
                    }, 1e3 * l))
                }
                var c = null,
                    d = null,
                    u = null;
                if (a[e.runtime.device + ".option.sticky"] && (c = a[e.runtime.device + ".option.sticky_position"], d = parseFloat(a[e.runtime.device + ".option.sticky_position_top"]), u = parseFloat(a[e.runtime.device + ".option.sticky_position_bottom"])), !e.isEmpty(c)) {
                    var p = document.getElementById(t);
                    if (!e.isEmpty(p) && -1 != ["default", "top", "bottom"].indexOf(c)) {
                        var m = e.getElementBoundingClientRect(p),
                            g = p.getAttribute("data-top"),
                            y = p.getAttribute("data-left");
                        e.isEmpty(g) ? (p.setAttribute("data-top", m.y + window.scrollY), g = m.y) : g = parseFloat(g), e.isEmpty(y) ? (p.setAttribute("data-left", m.x + window.scrollX), y = m.x) : y = parseFloat(y);
                        var f = null,
                            _ = null;
                        if ("default" == c && (d > g - window.scrollY ? (f = d + "px", _ = y + "px") : e.getHeightDevice() - u - p.clientHeight < g - window.scrollY && (f = "calc(100% - " + (u + p.clientHeight) + "px)", _ = y + "px")), "top" == c && (d > g - window.scrollY || e.getHeightDevice() - 0 < g - window.scrollY) && (f = d + "px", _ = y + "px"), "bottom" == c && (e.getHeightDevice() - u - p.clientHeight < g - window.scrollY || 0 > g + p.clientHeight - window.scrollY) && (f = "calc(100% - " + (u + p.clientHeight) + "px)", _ = y + "px"), e.isEmpty(f) || e.isEmpty(_)) p.style.removeProperty("top"), p.style.removeProperty("left"), p.style.removeProperty("width"), p.style.removeProperty("position"), p.style.removeProperty("z-index");
                        else if (p.style.setProperty("top", f), p.style.setProperty("left", _), "section" == a.type && (e.runtime.isMobileOnly ? p.style.setProperty("width", document.getElementsByClassName("ladi-wraper")[0].clientWidth + "px") : i && p.style.setProperty("width", "100%")), p.style.setProperty("position", "fixed"), p.style.setProperty("z-index", "90000040"), !p.hasAttribute("data-first")) {
                            p.setAttribute("data-first", !0), p.classList.contains("ladi-animation-hidden") && (p.classList.remove("ladi-animation-hidden"), p.classList.add("ladi-animation"));
                            for (var h = p.getElementsByClassName("ladi-animation-hidden"); h.length > 0;) h[0].classList.add("ladi-animation"), h[0].classList.remove("ladi-animation-hidden");
                            p.classList.remove("ladi-lazyload");
                            for (var v = p.getElementsByClassName("ladi-lazyload"); v.length > 0;) v[0].classList.remove("ladi-lazyload")
                        }
                    }
                }
                if ("popup" == a.type) {
                    if (!e.isEmpty(e.runtime.scroll_show_popup[t])) return;
                    e.isEmpty(a["option.popup_welcome_page_scroll_to"]) || (n = document.getElementById(a["option.popup_welcome_page_scroll_to"]), e.isEmpty(n) || (r = n.offsetTop, (window.scrollY > r && window.scrollY <= r + n.offsetHeight || window.scrollY + e.getHeightDevice() >= r && window.scrollY + e.getHeightDevice() <= r + n.offsetHeight) && (e.runtime.scroll_show_popup[t] = !0, window.ladi(t).show())))
                }
                if ("section" == a.type) {
                    if (!e.isEmpty(e.runtime.scroll_to_section[t])) return;
                    n = document.getElementById(t), e.isEmpty(n) || (r = n.offsetTop, (window.scrollY > r && window.scrollY <= r + n.offsetHeight || window.scrollY + e.getHeightDevice() >= r && window.scrollY + e.getHeightDevice() <= r + n.offsetHeight) && (e.runtime.scroll_to_section[t] = !0, e.runEventTracking(t, !1)))
                }
            }), e.runtime.isClient)
            for (var a = Math.round((window.scrollY + e.getHeightDevice()) / document.body.clientHeight * 100), n = 1; n < e.const.PERCENT_TRACKING_SCROLL.length; n++) a > e.const.PERCENT_TRACKING_SCROLL[n - 1] && a <= e.const.PERCENT_TRACKING_SCROLL[n] && -1 == e.runtime.scroll_depth.indexOf(e.const.PERCENT_TRACKING_SCROLL[n]) && (e.runtime.scroll_depth.push(e.const.PERCENT_TRACKING_SCROLL[n]), e.isFunction(window.gtag) && window.gtag("event", "ScrollDepth_" + e.const.PERCENT_TRACKING_SCROLL[n] + "_percent", {
                event_category: "LadiPageScrollDepth",
                event_label: window.location.host + window.location.pathname,
                non_interaction: !0
            }), e.isFunction(window.fbq) && window.fbq("trackCustom", "ScrollDepth_" + e.const.PERCENT_TRACKING_SCROLL[n] + "_percent"));
        e.runtime.tmp.isFirstScroll = !1
    }
}, LadiPageScriptV2.prototype.runRemovePopup = function (t, e, i, a) {
    var n = this,
        r = document.querySelectorAll("#" + this.runtime.builder_section_popup_id + " .ladi-container > .ladi-element"),
        o = !1;
    e || LadiPagePlugin.getPlugin("popup").removeStyleShowPopupBuilder();
    var l = function () {
            var t = document.getElementById("style_popup");
            n.isEmpty(t) || t.parentElement.removeChild(t)
        },
        s = [];
    if (this.isEmpty(t))
        for (var c = 0; c < r.length; c++) s.push(r[c].id);
    else s.push(t);
    s.forEach(function (t) {
        var i = document.getElementById(t);
        if (!n.isEmpty(i)) {
            n.isEmpty(i.style.getPropertyValue("display")) || (o = !0), i.style.removeProperty("display"), i.style.removeProperty("z-index");
            var a = i.getElementsByClassName("popup-close")[0];
            if (n.isEmpty(a) || a.style.removeProperty("display"), i.hasAttribute("data-popup-backdrop")) {
                l(), e && (n.isEmpty(n.runtime.tmp.bodyScrollY) || window.scrollTo(0, n.runtime.tmp.bodyScrollY)), n.runtime.tmp.bodyScrollY = null;
                for (var s = 0; s < r.length; s++) r[s].style.removeProperty("z-index")
            }
        }
    }), o && this.isFunction(i) && i(), a && l()
}, LadiPageScriptV2.prototype.runShowPopup = function (t, e, i, a, n) {
    var r = "";
    if (!this.isEmpty(t)) {
        var o = document.getElementById(t),
            l = null;
        if (!a || !this.isEmpty(o) && !this.isEmpty(this.runtime.eventData[t])) {
            var s = this;
            this.runtime.tmp.is_run_show_popup = !0;
            var c = 0;
            a || LadiPagePlugin.getPlugin("popup").showStyleShowPopupBuilder(t), a && (e = this.runtime.eventData[t][this.runtime.device + ".option.popup_position"], i = this.runtime.eventData[t][this.runtime.device + ".option.popup_backdrop"]);
            var d = function () {
                if (r += "body {", r += "overflow: hidden !important;", a) {
                    var e = window.scrollY;
                    if (!s.isEmpty(s.runtime.tmp.bodyScrollY)) {
                        var i = getComputedStyle(document.body);
                        "fixed" == i.position && (parseFloat(i.top) || 0) == -1 * s.runtime.tmp.bodyScrollY && (e = s.runtime.tmp.bodyScrollY)
                    }
                    "block" != o.style.getPropertyValue("display") || s.isEmpty(s.runtime.tmp.bodyScrollY) || (e = s.runtime.tmp.bodyScrollY), r += "position: fixed !important;", r += "width: 100% !important;", r += "top: -" + e + "px", s.runtime.tmp.bodyScrollY = e, l = function () {
                        s.runtime.tmp.bodyScrollY = e
                    }
                }
                r += "}";
                for (var n = document.querySelectorAll("#" + s.runtime.builder_section_popup_id + " .ladi-container > .ladi-element"), d = 0; d < n.length; d++) n[d].id != t && n[d].style.setProperty("z-index", "1", "important");
                c = 500
            };
            e == this.const.POSITION_TYPE.default ? (r += "#" + this.runtime.backdrop_popup_id + " { display: block !important; " + i + "}", o.setAttribute("data-popup-backdrop", !0), d()) : a || (r += "#" + this.runtime.backdrop_popup_id + " { display: block !important;}", o.setAttribute("data-popup-backdrop", !0), d()), this.isFunction(n) && "block" != o.style.getPropertyValue("display") && (n(), this.isFunction(l) && l()), o.style.setProperty("display", "block", "important");
            var u = o.hasAttribute("data-scroll"),
                p = !1;
            if (!u && o.clientHeight > .9 * this.getHeightDevice() && (a ? (o.setAttribute("data-scroll", !0), o.getElementsByClassName("ladi-popup")[0].style.setProperty("height", o.clientHeight + "px", "important"), o.style.setProperty("max-height", .9 * this.getHeightDevice() + "px"), o.style.setProperty("overflow-y", "auto", "important"), o.style.setProperty("overflow-x", "hidden", "important"), u = !0) : p = !0), a || LadiPagePlugin.getPlugin("popup").styleShowPopupBuilderUpDown(t, p), s.isEmpty(r) || this.createStyleElement("style_popup", r), a && !this.isEmpty(o)) {
                var m = o.getElementsByClassName("popup-close")[0];
                this.isEmpty(m) && ((m = document.createElement("div")).className = "popup-close", o.appendChild(m), m.addEventListener("click", function (e) {
                    e.stopPropagation(), s.runRemovePopup(t, a)
                })), o.getElementsByClassName("popup-close")[0].style.setProperty("display", "block", "important");
                var g = function () {
                    var t = o.getElementsByClassName("popup-close")[0];
                    if (!s.isEmpty(t)) {
                        var e = s.getElementBoundingClientRect(o),
                            i = 15,
                            a = 15;
                        e.x + 30 - t.clientWidth > a && (a = e.x + 30 - t.clientWidth), e.y + 30 - t.clientHeight > i && (i = e.y + 30 - t.clientHeight), u && (a += s.runtime.widthScrollBar), t.style.setProperty("right", a + "px"), t.style.setProperty("top", i + "px"), t.style.setProperty("position", "fixed")
                    }
                };
                u && (g(), o.hasAttribute("data-resize-scroll") || (o.setAttribute("data-resize-scroll", !0), window.addEventListener("resize", g)))
            }
            a && this.runEventTracking(t, !1), s.runTimeout(function () {
                delete s.runtime.tmp.is_run_show_popup
            }, c)
        }
    }
}, LadiPageScriptV2.prototype.runEventTracking = function (t, e) {
    if (this.runtime.isClient && !this.isEmpty(t)) {
        var i = this.runtime.eventData[t],
            a = i.type,
            n = null,
            r = null,
            o = null,
            l = null;
        if (e && "form" == a ? (n = i["option.form_conversion_name"], r = i["option.form_google_ads_conversion"], o = i["option.form_google_ads_label"], l = i["option.form_event_custom_script"]) : (n = i["option.conversion_name"], r = i["option.google_ads_conversion"], o = i["option.google_ads_label"], l = i["option.event_custom_script"]), this.isFunction(window.fbq) && !this.isEmpty(n) && window.fbq("trackCustom", n), this.isFunction(window.gtag) && (this.isEmpty(r) || this.isEmpty(o) || window.gtag("event", "conversion", {
                send_to: "AW-" + r + "/" + o
            }), !this.isEmpty(n))) {
            var s = "";
            s = "section" == a ? "LadiPageSection" : "popup" == a ? "LadiPagePopup" : "form" == a ? "LadiPageConversion" : "LadiPageClick";
            var c = LadiPageApp[i.type + this.const.APP_RUNTIME_PREFIX];
            if (!this.isEmpty(c)) {
                var d = c(i, this.runtime.isClient);
                this.isFunction(d.getEventTrackingCategory) && (s = c(i, this.runtime.isClient).getEventTrackingCategory())
            }
            window.gtag("event", n, {
                event_category: s,
                event_label: window.location.host + window.location.pathname
            })
        }
        this.isEmpty(l) || this.runFunctionString(l)
    }
}, LadiPageScriptV2.prototype.runFunctionString = function (t) {
    try {
        new Function(t)()
    } catch (t) {}
}, LadiPageScriptV2.prototype.generateAddToCartDetail = function (t) {
    var e = "",
        i = this,
        a = [];
    return t || a.push({
        name: "LadiPage Product Name",
        title: "LadiPage Product Variant",
        price: 999999,
        image: "",
        quantity: 1,
        currency: {
            symbol: "VND"
        }
    }), e += "<tbody>", a.forEach(function (t) {
        e += '<tr class="add-to-cart-detail-row"><td class="add-to-cart-detail-image"><img src="' + t.image + '" /></td>', e += '<td class="add-to-cart-detail-title"><span>' + t.name + "</span><br /><span>" + t.title + "</span></td>", e += '<td class="add-to-cart-detail-quantity"><input type="number" min="1" value="' + t.quantity + '" /></td>', e += '<td class="add-to-cart-detail-price"><span>' + i.formatNumber(t.price, 3), i.isObject(t.currency) && !i.isEmpty(t.currency.symbol) && (e += " " + t.currency.symbol), e += "</span></td>", e += "</tr>"
    }), e += "</tbody>"
}, LadiPageScriptV2.prototype.getProductVariantIndex = function (t, e, i) {
    var a = this,
        n = -1,
        r = a.generateVariantProduct(e, !1, i, null, null, null, null, !0, !0);
    if (!a.isObject(r) || !a.isObject(r.product) || !a.isArray(r.product.variants)) return n;
    this.runtime.isClient ? Object.keys(this.runtime.eventData).forEach(function (o) {
        if ((a.isEmpty(t) || t == o) && -1 == n) {
            var l = a.runtime.eventData[o];
            if ("form" == l.type && l["option.is_add_to_cart"] && l["option.add_to_cart_product"] == e && l["option.form_account_id"] == i) {
                var s = document.getElementById(o);
                if (!a.isEmpty(s)) {
                    var c = s.querySelector('[data-variant="true"]');
                    if (!a.isEmpty(c)) {
                        var d = a.runtime.eventData[c.id];
                        if (!a.isEmpty(d)) {
                            if (d["option.input_add_to_cart_variant_product_type"] == a.const.ADD_TO_CART_PRODUCT_TYPE.combobox) {
                                var u = c.querySelectorAll("[data-product-variant-id]");
                                n = r.product.variants.findIndex(function (t) {
                                    for (var e = !0, i = null, a = function (t) {
                                            return t == i
                                        }, n = 0; n < u.length; n++) {
                                        i = u[n].getAttribute("data-product-variant-id");
                                        var r = u[n].value,
                                            o = t.option_ids.split("/").findIndex(a);
                                        if (-1 != o && t["option" + (o + 1)].trim() != r) {
                                            e = !1;
                                            break
                                        }
                                    }
                                    return e
                                })
                            }
                            d["option.input_add_to_cart_variant_product_type"] == a.const.ADD_TO_CART_PRODUCT_TYPE.combined && (n = c.querySelector(".ladi-form-control").value, n = a.isEmpty(n) ? -1 : parseInt(n))
                        }
                    }
                }
            }
        }
    }) : n = LadiPage.getProductVariantIndex(t, r, e, i);
    return n
}, LadiPageScriptV2.prototype.generateProductKey = function (t, e, i, a, n, r) {
    var o = this,
        l = o.generateVariantProduct(i, !1, a, null, null, null, null, !0, !0, function (e) {
            o.generateProductKey(t, !1, i, a, n, r)
        });
    if (o.isObject(l) && o.isObject(l.product)) {
        var s = null;
        if (-1 != ["name", "description"].indexOf(n) && (s = l.product[n], t = s), -1 != ["image"].indexOf(n) && (s = l.product[n], o.isObject(s) && (t = s.src, o.isEmpty(t) || (t = "https://" + o.const.STATIC_DOMAIN + "/" + t))), -1 != ["images"].indexOf(n) && (s = l.product[n], o.isArray(s) && (t = [], s.forEach(function (e) {
                o.isEmpty(e.src) || t.push({
                    src: "https://" + o.const.STATIC_DOMAIN + "/" + e.src
                })
            }))), o.isArray(l.product.variants) && l.product.variants.length > 0) {
            var c = o.getProductVariantIndex(null, i, a);
            if (-1 != c) {
                var d = l.product.variants[c]; - 1 != ["title", "sku"].indexOf(n) && (s = d[n], t = s), -1 != ["weight"].indexOf(n) && (s = d[n], o.isEmpty(d.weight_unit) || (s += d.weight_unit), t = s), -1 != ["price"].indexOf(n) && (s = o.formatNumber(d[n], 3), o.isObject(l.store_info) && o.isObject(l.store_info.currency) && !o.isEmpty(l.store_info.currency.symbol) && (s += " " + l.store_info.currency.symbol), t = s), -1 != ["src"].indexOf(n) && (s = d[n], o.isEmpty(s) || (s = "https://" + o.const.STATIC_DOMAIN + "/" + s), t = s)
            }
        }!e && o.isFunction(r) && r(t)
    }
    return t
}, LadiPageScriptV2.prototype.generateVariantProduct = function (t, e, i, a, n, r, o, l, s, c) {
    var d = e ? "" : null,
        u = this;
    if (!u.isEmpty(t) && !u.isEmpty(i)) {
        u.isEmpty(u.runtime.tmp.product_info[i]) && (u.runtime.tmp.product_info[i] = {}), u.isEmpty(u.runtime.tmp.timeout_product_info[i]) && (u.runtime.tmp.timeout_product_info[i] = {});
        var p = u.runtime.tmp.product_info[i][t],
            m = function () {
                if (!e) return u.isObject(p) ? p : null;
                var t = "";
                if (u.isObject(p)) {
                    if (!u.isObject(p.product)) return t;
                    a == u.const.ADD_TO_CART_PRODUCT_TYPE.combined && (t += '<div class="ladi-form-item-container"><div class="ladi-form-item-background"></div><div class="ladi-form-item"><select required tabindex="' + o + '" class="ladi-form-control ladi-form-control-select" data-selected=""' + (l ? "" : ' onmousedown="javascript: event.preventDefault();"') + ">", u.isArray(p.product.variants) && p.product.variants.forEach(function (e, i) {
                        var a = e.title;
                        r && (a += " - " + u.formatNumber(e.price, 3), u.isObject(p.store_info) && u.isObject(p.store_info.currency) && !u.isEmpty(p.store_info.currency.symbol) && (a += " " + p.store_info.currency.symbol)), t += '<option value="' + i + '">' + a + "</option>"
                    }), t += "</select></div></div>"), a == u.const.ADD_TO_CART_PRODUCT_TYPE.combobox && u.isArray(p.product.options) && p.product.options.forEach(function (e) {
                        t += '<div class="ladi-form-item-box">', u.isEmpty(n) || (t += '<div class="ladi-form-item-title"><span>' + e.name + "</span></div>"), t += '<div class="ladi-form-item-container"><div class="ladi-form-item-background"></div><div class="ladi-form-item"><select data-product-variant-id="' + e.product_option_id + '" required tabindex="' + o + '" class="ladi-form-control ladi-form-control-select" data-selected=""' + (l ? "" : ' onmousedown="javascript: event.preventDefault();"') + ">", e.values.forEach(function (e) {
                            t += '<option value="' + e + '">' + e + "</option>"
                        }), t += "</select></div></div></div>"
                    })
                }
                return t
            };
        if (u.isNull(p)) {
            u.runtime.tmp.product_info[i][t] = !0;
            var g = {
                product_id: parseInt(t) || t,
                form_account_id: i
            };
            return u.sendRequest("POST", u.const.API_SHOW_PRODUCT, JSON.stringify(g), !0, {
                "Content-Type": "application/json"
            }, function (e, a, n) {
                if (n.readyState == XMLHttpRequest.DONE) try {
                    var r = JSON.parse(e);
                    p = r.data, u.isObject(p) ? (u.runtime.tmp.product_info[i][t] = p, d = m(), u.isFunction(c) && c(d)) : u.isEmpty(u.runtime.tmp.timeout_product_info[i]) || u.removeTimeout(u.runtime.tmp.timeout_product_info[i][t])
                } catch (e) {
                    u.isEmpty(u.runtime.tmp.timeout_product_info[i]) || u.removeTimeout(u.runtime.tmp.timeout_product_info[i][t])
                }
            }), d
        }!0 === p ? u.runtime.tmp.timeout_product_info[i][t] = u.runTimeout(function () {
            u.generateVariantProduct(t, e, i, a, n, r, o, l, !1, c)
        }, 100) : (d = m(), !s && u.isFunction(c) && c(d))
    }
    return d
}, LadiPageScriptV2.prototype.formatNumber = function (t, e, i, a) {
    if (void 0 != t) {
        void 0 == i && (i = 0), void 0 == a && (a = 0);
        var n = "\\d(?=(\\d{" + (e || 3) + "})+" + (a > 0 ? "\\." : "$") + ")";
        t = t.toFixed(Math.max(0, ~~a)).replace(new RegExp(n, "g"), "$&,");
        var r = null,
            o = null;
        i >= 1 && (o = (r = t.split("."))[0], t = o = new Array(i - o.length + 1).join("0") + o, 2 == r.length && (t += "." + r[1])), a >= 1 && 2 == (r = t.split(".")).length && (o = r[1], o = new Array(a - o.length + 1).join("0") + o, t = r[0] + "." + o)
    }
    return t
}, LadiPageScriptV2.prototype.setDataReplaceStr = function (t, e) {
    this.runtime.replaceStr[t] = e
}, LadiPageScriptV2.prototype.getDataReplaceStr = function (t, e) {
    var i = null;
    return this.isNull(e) || (i = e[t]), this.isNull(i) && (i = this.runtime.replaceStr[t]), i
}, LadiPageScriptV2.prototype.highlightText = function (t, e, i, a) {
    if (0 != e.length) {
        var n = i ? "gi" : "g",
            r = [];
        e.forEach(function (t) {
            r.push(t.replaceAll("|", "\\|"))
        }), r.sort(function (t, e) {
            return e.length - t.length
        });
        var o = this;
        Array.from(t.childNodes).forEach(function (t) {
            var l = new RegExp(r.join("|"), n);
            if (3 !== t.nodeType) o.highlightText(t, e, i, a);
            else if (l.test(t.textContent)) {
                var s = document.createDocumentFragment(),
                    c = 0;
                t.textContent.replace(l, function (e, i) {
                    var n = document.createTextNode(t.textContent.slice(c, i)),
                        r = null;
                    o.isFunction(a) ? r = a(e) : (r = document.createElement("span")).textContent = e, s.appendChild(n), s.appendChild(r), c = i + e.length
                });
                var d = document.createTextNode(t.textContent.slice(c));
                s.appendChild(d), t.parentNode.replaceChild(s, t)
            }
        })
    }
}, LadiPageScriptV2.prototype.convertDataReplaceStr = function (t, e, i, a) {
    for (var n = this, r = t, o = new RegExp(n.runtime.replacePrefixStart + "[^" + n.runtime.replacePrefixStart + "]*" + n.runtime.replacePrefixEnd, "gi"), l = null, s = [], c = function (t) {
            if (i) s.push(t);
            else {
                var e = t,
                    o = e.split("|");
                e = (e = o.length > 1 ? o[o.length - 1] : e.substr(n.runtime.replacePrefixStart.length)).substr(0, e.length - n.runtime.replacePrefixEnd.length);
                var l = n.getDataReplaceStr(e, a);
                if (n.isEmpty(l))
                    if (o.length > 1) {
                        var c = n.randomInt(0, o.length - 2);
                        l = o[c], 0 == c && (l = l.substr(n.runtime.replacePrefixStart.length))
                    } else l = "";
                r = r.replaceAll(t, l)
            }
        }; null !== (l = o.exec(t));) l.index === o.lastIndex && o.lastIndex++, l.forEach(c);
    return s = s.unique(), n.highlightText(e, s, !0, function (t) {
        var e = document.createElement("span");
        return e.setAttribute("data-replace-str", t), e
    }), r
}, LadiPageScriptV2.prototype.setDataReplaceElement = function (t, e, i, a, n) {
    for (var r = this.isEmpty(a) ? document : document.getElementById(a), o = r.querySelectorAll("span[data-replace-str]"), l = 0; l < o.length; l++) {
        var s = o[l].getAttribute("data-replace-str");
        o[l].innerHTML = this.convertDataReplaceStr(s, null, !1, i)
    }
    for (var c = r.querySelectorAll("a[data-replace-href]"), d = 0; d < c.length; d++) {
        var u = c[d].getAttribute("data-replace-href");
        u = this.convertDataReplaceStr(u, null, !1, i), c[d].href = u
    }
    if (t)
        for (var p = r.querySelectorAll(".ladi-element .ladi-form-item-container [name]"), m = 0; m < p.length; m++) {
            var g = p[m].getAttribute("name").trim();
            if (-1 != n.indexOf(g)) {
                var y = this.getDataReplaceStr(g, i);
                if (!this.isNull(y)) {
                    var f = this.isArray(y) ? y[0] : y;
                    if ("INPUT" == p[m].tagName) {
                        var _ = p[m].getAttribute("type").trim();
                        if ("checkbox" == _ || "radio" == _) {
                            var h = !1;
                            if ("checkbox" == _) {
                                var v = y;
                                this.isArray(v) || (v = [v]), h = -1 != v.indexOf(p[m].getAttribute("value"))
                            }
                            "radio" == _ && (h = p[m].getAttribute("value") == f.trim()), h ? (p[m].checked = !0, e && p[m].setAttribute("checked", "checked")) : (p[m].checked = !1, e && p[m].removeAttribute("checked"));
                            var E = this.findAncestor(p[m], "ladi-form-checkbox-item");
                            if (!this.isEmpty(E)) {
                                var w = E.querySelector("span");
                                this.isEmpty(w) || w.setAttribute("data-checked", p[m].checked)
                            }
                        } else p[m].value = f.trim(), e && p[m].setAttribute("value", p[m].value)
                    }
                    if ("TEXTAREA" == p[m].tagName && (p[m].value = f.trim(), e && (p[m].innerHTML = p[m].value)), "SELECT" == p[m].tagName) {
                        var L = p[m].querySelector('option[value="' + f.trim() + '"]');
                        if (!this.isEmpty(L) && (p[m].value = L.getAttribute("value"), e && !L.hasAttribute("selected"))) {
                            for (var S = p[m].querySelectorAll("option"), P = 0; P < S.length; P++) S[P].removeAttribute("selected");
                            L.setAttribute("selected", "selected")
                        }
                    }
                }
            }
        }
}, LadiPageScriptV2.prototype.setDataReplaceStart = function () {
    for (var t = document.querySelectorAll(".ladi-headline, .ladi-paragraph, .ladi-list-paragraph ul"), e = 0; e < t.length; e++) this.convertDataReplaceStr(t[e].innerHTML, t[e], !0);
    this.setDataReplaceElement(!0, !0, null, null, Object.keys(this.runtime.replaceStr))
}, LadiPageScriptV2.prototype.showMessage = function (t, e, i) {
    if (this.isEmpty(t)) this.isFunction(i) && i();
    else {
        var a = document.getElementsByClassName("ladipage-message")[0];
        if (this.isEmpty(a)) {
            var n = this;
            t = n.convertDataReplaceStr(t, null, !1, e), (a = document.createElement("div")).className = "ladipage-message", document.body.appendChild(a);
            var r = document.createElement("div");
            r.className = "ladipage-message-box", a.appendChild(r);
            var o = document.createElement("h1");
            r.appendChild(o), o.textContent = this.const.LANG.ALERT_TITLE;
            var l = document.createElement("div");
            l.className = "ladipage-message-text", r.appendChild(l), l.innerHTML = t;
            var s = document.createElement("button");
            s.className = "ladipage-message-close", r.appendChild(s), s.textContent = this.const.LANG.ALERT_BUTTON_TEXT, s.focus(), s.addEventListener("click", function (t) {
                t.stopPropagation(), a.parentElement.removeChild(a), n.isFunction(i) && i()
            })
        } else this.isFunction(i) && i()
    }
}, LadiPageScriptV2.prototype.findAncestor = function (t, e) {
    for (;
        (t = t.parentElement) && !t.classList.contains(e););
    return t
}, LadiPageScriptV2.prototype.createStyleElement = function (t, e) {
    var i = document.getElementById(t);
    return this.isEmpty(i) && ((i = document.createElement("style")).id = t, i.type = "text/css", document.head.appendChild(i)), i.innerHTML != e && (i.innerHTML = e), i
}, LadiPageScriptV2.prototype.createTmpElement = function (t, e, i, a, n) {
    var r = document.createElement(t);
    this.isEmpty(i) || Object.keys(i).forEach(function (t) {
        r.setAttribute(t, i[t])
    });
    var o = document.createElement("div");
    return o.appendChild(r), a ? r.outerHTML = e : r.innerHTML = e, n ? o : o.firstChild
}, LadiPageScriptV2.prototype.getCountdownTime = function (t, e) {
    var i = Math.floor(t / 1e3),
        a = i % 86400,
        n = a % 3600,
        r = Math.floor(i / 86400),
        o = Math.floor(a / 3600),
        l = Math.floor(n / 60),
        s = n % 60;
    r = r < 0 ? 0 : r, o = o < 0 ? 0 : o, l = l < 0 ? 0 : l, s = s < 0 ? 0 : s, r = r < 10 ? "0" + r : r, o = o < 10 ? "0" + o : o, l = l < 10 ? "0" + l : l, s = s < 10 ? "0" + s : s;
    var c = {};
    return c[this.const.COUNTDOWN_ITEM_TYPE.day] = r, c[this.const.COUNTDOWN_ITEM_TYPE.hour] = o, c[this.const.COUNTDOWN_ITEM_TYPE.minute] = l, c[this.const.COUNTDOWN_ITEM_TYPE.seconds] = s, this.isEmpty(e) ? c : c[e]
}, LadiPageScriptV2.prototype.getElementBoundingClientRect = function (t) {
    var e = t.getBoundingClientRect();
    return (this.isNull(e.x) || this.isNull(e.y)) && (e.x = e.left, e.y = e.top), e
}, LadiPageScriptV2.prototype.getEventCursorData = function (t) {
    return (this.isNull(t.pageX) || this.isNull(t.pageY)) && (!this.isEmpty(t.touches) && t.touches.length > 0 ? (t.pageX = t.touches[0].pageX, t.pageY = t.touches[0].pageY) : !this.isEmpty(t.targetTouches) && t.targetTouches.length > 0 ? (t.pageX = t.targetTouches[0].pageX, t.pageY = t.targetTouches[0].pageY) : !this.isEmpty(t.changedTouches) && t.changedTouches.length > 0 && (t.pageX = t.changedTouches[0].pageX, t.pageY = t.changedTouches[0].pageY)), t
}, LadiPageScriptV2.prototype.getElementAHref = function (t, e) {
    var i = document.createElement("a");
    return !e || t.toLowerCase().startsWith("http://") || t.toLowerCase().startsWith("https://") || (t = "http://" + t), i.href = t, i
}, LadiPageScriptV2.prototype.loadScript = function (t, e, i) {
    var a = document.createElement("script");
    a.type = "text/javascript", e && (a.async = !0), a.src = t, a.onload = i, document.body.appendChild(a)
}, LadiPageScriptV2.prototype.isObject = function (t) {
    return !this.isFunction(t) && !this.isArray(t) && t instanceof Object
}, LadiPageScriptV2.prototype.isArray = function (t) {
    return t instanceof Array
}, LadiPageScriptV2.prototype.isFunction = function (t) {
    return "function" == typeof t || t instanceof Function
}, LadiPageScriptV2.prototype.isString = function (t) {
    return "string" == typeof t || t instanceof String
}, LadiPageScriptV2.prototype.isEmpty = function (t) {
    return !!this.isNull(t) || (this.isString(t) ? 0 == (t = t.trim()).length || "undefined" == t.toLowerCase() : !!this.isArray(t) && 0 == t.length)
}, LadiPageScriptV2.prototype.isNull = function (t) {
    return void 0 === t || void 0 == t
};
var Base64 = {
        _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
        encode: function (t) {
            var e, i, a, n, r, o, l, s = "",
                c = 0;
            for (t = Base64._utf8_encode(t); c < t.length;) n = (e = t.charCodeAt(c++)) >> 2, r = (3 & e) << 4 | (i = t.charCodeAt(c++)) >> 4, o = (15 & i) << 2 | (a = t.charCodeAt(c++)) >> 6, l = 63 & a, isNaN(i) ? o = l = 64 : isNaN(a) && (l = 64), s = s + Base64._keyStr.charAt(n) + Base64._keyStr.charAt(r) + Base64._keyStr.charAt(o) + Base64._keyStr.charAt(l);
            return s
        },
        decode: function (t) {
            var e, i, a, n, r, o, l = "",
                s = 0;
            for (t = t.replace(/[^A-Za-z0-9\+\/\=]/g, ""); s < t.length;) e = Base64._keyStr.indexOf(t.charAt(s++)) << 2 | (n = Base64._keyStr.indexOf(t.charAt(s++))) >> 4, i = (15 & n) << 4 | (r = Base64._keyStr.indexOf(t.charAt(s++))) >> 2, a = (3 & r) << 6 | (o = Base64._keyStr.indexOf(t.charAt(s++))), l += String.fromCharCode(e), 64 != r && (l += String.fromCharCode(i)), 64 != o && (l += String.fromCharCode(a));
            return l = Base64._utf8_decode(l)
        },
        _utf8_encode: function (t) {
            t = t.replace(/\r\n/g, "\n");
            for (var e = "", i = 0; i < t.length; i++) {
                var a = t.charCodeAt(i);
                a < 128 ? e += String.fromCharCode(a) : a > 127 && a < 2048 ? (e += String.fromCharCode(a >> 6 | 192), e += String.fromCharCode(63 & a | 128)) : (e += String.fromCharCode(a >> 12 | 224), e += String.fromCharCode(a >> 6 & 63 | 128), e += String.fromCharCode(63 & a | 128))
            }
            return e
        },
        _utf8_decode: function (t) {
            for (var e = "", i = 0, a = 0, n = 0; i < t.length;)(a = t.charCodeAt(i)) < 128 ? (e += String.fromCharCode(a), i++) : a > 191 && a < 224 ? (n = t.charCodeAt(i + 1), e += String.fromCharCode((31 & a) << 6 | 63 & n), i += 2) : (n = t.charCodeAt(i + 1), c3 = t.charCodeAt(i + 2), e += String.fromCharCode((15 & a) << 12 | (63 & n) << 6 | 63 & c3), i += 3);
            return e
        }
    },
    LadiPageScript = LadiPageScript || new LadiPageScriptV2;
LadiPageScript.init();
var lightbox_run = function (t, e) {
        var i = document.getElementById(LadiPageScript.runtime.lightbox_screen_id);
        if (!LadiPageScript.isEmpty(i)) {
            i.innerHTML = '<div class="lightbox-close"></div>' + t;
            var a = i.getElementsByClassName("lightbox-close")[0],
                n = i.getElementsByClassName("lightbox-item")[0],
                r = function () {
                    var t = document.getElementById(LadiPageScript.runtime.backdrop_popup_id);
                    return LadiPageScript.isEmpty(t) || "none" == getComputedStyle(t).display
                },
                o = 0;
            r() ? (o = window.scrollY, LadiPageScript.runtime.tmp.bodyScrollY = o) : o = LadiPageScript.runtime.tmp.bodyScrollY;
            var l = function (t) {
                t.style.removeProperty("display"), t.innerHTML = "";
                var e = document.getElementById("style_lightbox");
                LadiPageScript.isEmpty(e) || e.parentElement.removeChild(e);
                var i = r();
                i && !LadiPageScript.isEmpty(LadiPageScript.runtime.tmp.bodyScrollY) && window.scrollTo(0, LadiPageScript.runtime.tmp.bodyScrollY), i && (LadiPageScript.runtime.tmp.bodyScrollY = null)
            };
            a.addEventListener("click", function (t) {
                t.stopPropagation(), l(i)
            }), i.style.setProperty("display", "block");
            var s = "body {";
            s += "overflow: hidden !important;", s += "position: fixed !important;", s += "width: 100% !important;", s += "top: -" + o + "px", s += "}", LadiPageScript.createStyleElement("style_lightbox", s);
            var c = function () {
                var t = i.getElementsByClassName("lightbox-close")[0],
                    e = i.getElementsByClassName("lightbox-item")[0];
                if (!LadiPageScript.isEmpty(t) && !LadiPageScript.isEmpty(e)) {
                    var a = LadiPageScript.getElementBoundingClientRect(e),
                        n = 10,
                        r = 10;
                    a.x - 5 - t.clientWidth > r && (r = a.x - 5 - t.clientWidth), a.y - 5 - t.clientHeight > n && (n = a.y - 5 - t.clientHeight), r += LadiPageScript.runtime.widthScrollBar, t.style.setProperty("right", r + "px"), t.style.setProperty("top", n + "px")
                }
            };
            LadiPageScript.isEmpty(i.getAttribute("data-event-click")) && (i.setAttribute("data-event-click", !0), i.addEventListener("click", function (t) {
                t.stopPropagation(), l(t.target)
            }), window.addEventListener("resize", c)), a.style.setProperty("top", "-100px"), a.style.setProperty("right", "-100px"), n.onload = c, n.src = e
        }
    },
    lightbox_iframe = function (t, e) {
        if (!LadiPageScript.isEmpty(t)) {
            var i = document.getElementById(LadiPageScript.runtime.lightbox_screen_id);
            if (!LadiPageScript.isEmpty(i)) {
                var a = "",
                    n = .9 * document.body.clientWidth,
                    r = .5625 * n;
                r > .9 * LadiPageScript.getHeightDevice() && (n = 1.7778 * (r = .9 * LadiPageScript.getHeightDevice()));
                var o = "margin: auto; position: absolute; top: 0; left: 0; bottom: 0; right: 0; width: " + n + "px; height: " + r + "px; max-width: 90%; max-height: 90%;";
                a = '<iframe id="lightbox_iframe" class="lightbox-item" style="' + o + '" frameborder="0" allowfullscreen></iframe>';
                var l = t,
                    s = LadiPageScript.createTmpElement("iframe", l, null, !0);
                LadiPageScript.isEmpty(s) || "IFRAME" != s.tagName || (l = s.src, s.removeAttribute("src"), s.setAttribute("style", o), s.removeAttribute("width"), s.removeAttribute("height"), s.classList.add("lightbox-item"), e || s.setAttribute("id", "lightbox_iframe"), a = s.outerHTML), lightbox_run(a, l)
            }
        }
    },
    lightbox_image = function (t) {
        if (!LadiPageScript.isEmpty(t)) {
            var e = document.getElementById(LadiPageScript.runtime.lightbox_screen_id);
            if (!LadiPageScript.isEmpty(e)) {
                lightbox_run('<img class="lightbox-item" style="margin: auto; position: absolute; top: 0; left: 0; bottom: 0; right: 0; object-fit: scale-down; max-width: 90%; max-height: 90%;" />', t)
            }
        }
    },
    lightbox_video = function (t, e) {
        if (!LadiPageScript.isEmpty(t) && !LadiPageScript.isEmpty(e) && e == LadiPageScript.const.VIDEO_TYPE.youtube) {
            LadiPageScript.stopAllVideo();
            var i = LadiPageScript.getVideoId(e, t);
            lightbox_iframe('<iframe id="lightbox_player" src="https://www.youtube.com/embed/' + i + '?autoplay=1&rel=0" class="iframe-video-play" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>', !0)
        }
    },
    LadiPageLibraryV2 = LadiPageLibraryV2 || function () {};
LadiPageLibraryV2.prototype.open_url = function (t, e) {
    if (!LadiPageScript.isEmpty(this.id)) {
        var i = this.id,
            a = "";
        if (LadiPageScript.isObject(e)) Object.keys(e).forEach(function (t) {
            LadiPageScript.isEmpty(a) || (a += "&"), a += t + "=" + encodeURIComponent(e[t])
        });
        if (!LadiPageScript.isEmpty(a)) {
            var n = LadiPageScript.createTmpElement("a", "", {
                href: i
            });
            n.search = n.search + (LadiPageScript.isEmpty(n.search) ? "?" : "&") + a, i = n.href
        }
        i = LadiPageScript.getLinkUTMRedirect(i, window.location.search), window.open(i, t)
    }
}, LadiPageLibraryV2.prototype.submit = function () {
    var t = document.getElementById(this.id);
    if (!LadiPageScript.isEmpty(t)) {
        var e = t.querySelector('.ladi-form button[type="submit"]');
        LadiPageScript.isEmpty(e) || e.click()
    }
}, LadiPageLibraryV2.prototype.scroll = function () {
    var t = document.getElementById(this.id);
    if (!LadiPageScript.isEmpty(t)) {
        for (var e = document.querySelectorAll("#" + LadiPageScript.runtime.builder_section_popup_id + " .ladi-container > .ladi-element"), i = 0; i < e.length; i++) e[i].id != this.id && e[i].hasAttribute("data-popup-backdrop") && "block" == e[i].style.getPropertyValue("display") && LadiPageScript.runRemovePopup(e[i].id, !0);
        var a = function () {
            t.scrollIntoView({
                behavior: "smooth"
            })
        };
        try {
            if (!LadiPageScript.isNull(window.jQuery)) return void $("html, body").animate({
                scrollTop: $(t).offset().top
            });
            a()
        } catch (t) {
            a()
        }
    }
}, LadiPageLibraryV2.prototype.value = function (t) {
    if (!LadiPageScript.isEmpty(this.id)) {
        var e = document.querySelectorAll("#" + this.id + " > ." + ["ladi-button .ladi-headline", "ladi-headline", "ladi-paragraph", "ladi-list-paragraph"].join(", #" + this.id + " > .")),
            i = document.querySelectorAll("#" + this.id + " > ." + ["ladi-form-item-container .ladi-form-item > input", "ladi-form-item-container .ladi-form-item > textarea", "ladi-form-item-container .ladi-form-item > select"].join(", #" + this.id + " > .")),
            a = document.querySelectorAll("#" + this.id + " > ." + ["ladi-form-item-container .ladi-form-checkbox-item > input"].join(", #" + this.id + " > .")),
            n = 0;
        for (n = 0; n < e.length; n++) e[n].innerHTML = t;
        for (n = 0; n < i.length; n++) i[n].value = t;
        var r = LadiPageScript.isArray(t) ? t : [t];
        for (n = 0; n < a.length; n++) {
            var o = !1;
            "checkbox" == a[n].getAttribute("type").toLowerCase() && -1 != r.indexOf(a[n].value) && (o = !0), "radio" == a[n].getAttribute("type").toLowerCase() && r.length > 0 && r[0] == a[n].value && (o = !0), o ? a[n].checked || a[n].click() : a[n].checked && a[n].click()
        }
    }
}, LadiPageLibraryV2.prototype.top = function () {
    var t = document.getElementById(this.id);
    if (!LadiPageScript.isEmpty(t) && t.classList.contains("ladi-section")) try {
        t.parentElement.insertBefore(t, t.parentElement.firstChild), LadiPageScript.reloadLazyload()
    } catch (t) {}
}, LadiPageLibraryV2.prototype.hide = function () {
    var t = document.getElementById(this.id);
    LadiPageScript.isEmpty(t) || (0 == t.getElementsByClassName("ladi-popup").length ? (t.style.setProperty("display", "none", "important"), LadiPageScript.reloadLazyload()) : LadiPageScript.runRemovePopup(this.id, !0, function () {
        for (var t = document.querySelectorAll("#" + LadiPageScript.runtime.builder_section_popup_id + " .ladi-container > .ladi-element"), e = 0; e < t.length; e++) t[e].id != this.id && t[e].hasAttribute("data-popup-backdrop") && "block" == t[e].style.getPropertyValue("display") && LadiPageScript.runRemovePopup(t[e].id, !0)
    }))
}, LadiPageLibraryV2.prototype.show = function () {
    var t = document.getElementById(this.id);
    if (!LadiPageScript.isEmpty(t))
        if (0 == t.getElementsByClassName("ladi-popup").length) {
            t.style.setProperty("display", "block", "important");
            var e = LadiPageScript.runtime.eventData[this.id];
            LadiPageScript.isEmpty(e) || LadiPageScript.startAutoScroll(this.id, e.type, e[LadiPageScript.const.DESKTOP + ".option.auto_scroll"], e[LadiPageScript.const.MOBILE + ".option.auto_scroll"]), LadiPageScript.reloadLazyload()
        } else LadiPageScript.runShowPopup(this.id, null, null, !0, function () {
            for (var t = document.querySelectorAll("#" + LadiPageScript.runtime.builder_section_popup_id + " .ladi-container > .ladi-element"), e = 0; e < t.length; e++) t[e].id != this.id && t[e].hasAttribute("data-popup-backdrop") && "block" == t[e].style.getPropertyValue("display") && LadiPageScript.runRemovePopup(t[e].id, !0)
        }), LadiPageScript.removeLazyloadPopup(this.id)
}, ["start", "add_turn"].forEach(function (t) {
    LadiPageLibraryV2.prototype[t] = function () {
        var e = LadiPageScript.runtime.eventData[this.id];
        if (!LadiPageScript.isEmpty(e)) {
            var i = LadiPageApp[e.type + LadiPageScript.const.APP_RUNTIME_PREFIX];
            if (!LadiPageScript.isEmpty(i)) {
                var a = i(e, !0);
                LadiPageScript.isFunction(a[t]) && a[t](this.id)
            }
        }
    }
});
var LadiPageAppV2, ladi = ladi || function (t) {
    if (!LadiPageScript.isEmpty(t)) {
        var e = new LadiPageLibraryV2;
        return e.id = t, e
    }
};
LadiPageScript.const.API_CHECK_VERIFY = "https://la.ladipage.com/2.0/domain/check", LadiPageScript.const.API_CHECKING_FORM = "https://la.ladipage.com/2.0/elastic/tracking-form", LadiPageScript.const.API_SHOW_PRODUCT = "https://api.ladipage.com/2.0/product/detail", LadiPageScript.const.API_FORM_DATA = "https://api.forms.ladipage.com/2.0/send-form", LadiPageScript.const.CDN_LIBRARY_JS_URL = "https://w.ladicdn.com/v2/source/", LadiPageScript.const.CDN_LIBRARY_CSS_URL = "https://w.ladicdn.com/v2/source/", (LadiPageAppV2 = LadiPageAppV2 || function () {}).prototype.notify_runtime = function (t, e) {
    var i = function () {},
        a = null,
        n = "top_left",
        r = "top_center",
        o = "top_right",
        l = "bottom_left",
        s = "bottom_center",
        c = "bottom_right";
    return i.prototype.run = function (e, i) {
        var d = t["option.sheet_id"];
        if (!LadiPageScript.isEmpty(d)) {
            var u = document.getElementById(e),
                p = i ? LadiPageScript.const.DESKTOP : LadiPageScript.const.MOBILE,
                m = t[p + ".option.position"],
                g = 1e3 * (parseFloat(t["option.time_show"]) || 5),
                y = 1e3 * (parseFloat(t["option.time_delay"]) || 10),
                f = "https://static.ladipage.net/source/notify.svg",
                _ = [{
                    key: "gsx$title",
                    className: ".ladi-notify-title"
                }, {
                    key: "gsx$content",
                    className: ".ladi-notify-content"
                }, {
                    key: "gsx$time",
                    className: ".ladi-notify-time"
                }, {
                    key: "gsx$image",
                    className: ".ladi-notify-image img"
                }],
                h = function () {
                    u.style.setProperty("opacity", 0), m != n && m != r && m != o || u.style.setProperty("top", -u.clientHeight - 100 + "px"), m != l && m != s && m != c || u.style.setProperty("bottom", -u.clientHeight - 100 + "px")
                };
            h(), _.forEach(function (t) {
                "gsx$image" == t.key ? u.querySelectorAll(t.className)[0].src = f : u.querySelectorAll(t.className)[0].textContent = ""
            });
            var v = function (t) {
                t = t.sort(function () {
                    return .5 - Math.random()
                });
                var e = -1,
                    i = function () {
                        if (e + 1 < t.length) {
                            var d = t[++e],
                                p = Object.keys(d);
                            u.style.removeProperty("opacity"), m != n && m != r && m != o || u.style.removeProperty("top"), m != l && m != s && m != c || u.style.removeProperty("bottom"), _.forEach(function (t) {
                                -1 != p.indexOf(t.key) && ("gsx$image" == t.key ? u.querySelectorAll(t.className)[0].src = LadiPageScript.isEmpty(d[t.key].$t) ? f : d[t.key].$t : u.querySelectorAll(t.className)[0].textContent = d[t.key].$t)
                            }), a = LadiPageScript.runTimeout(function () {
                                h(), a = LadiPageScript.runTimeout(i, y)
                            }, g)
                        } else v(t)
                    };
                a = LadiPageScript.runTimeout(i, y)
            };
            LadiPageScript.sendRequest("GET", "https://spreadsheets.google.com/feeds/list/" + d + "/1/public/values?alt=json", null, !0, null, function (t, e, i) {
                if (i.readyState == XMLHttpRequest.DONE && 200 == e) {
                    u.querySelector(".ladi-notify").classList.remove("ladi-hidden");
                    var a = JSON.parse(t).feed.entry;
                    u.classList.add("ladi-notify-transition"), v(a)
                }
            })
        }
    }, i.prototype.stop = function (t, e) {
        LadiPageScript.removeTimeout(a), a = null
    }, new i
}, (LadiPageAppV2 = LadiPageAppV2 || function () {}).prototype.spinlucky_runtime = function (t, e) {
    var i = function () {},
        a = function (t) {
            return parseFloat(LadiPageScript.getCookie("_total_turn_" + t)) || 0
        };
    return i.prototype.getEventTrackingCategory = function () {
        return "LadiPageFinish"
    }, i.prototype.run = function (e, i) {
        var n = t["option.spinlucky_setting.list_value"],
            r = t["option.spinlucky_setting.result_popup_id"],
            o = t["option.spinlucky_setting.result_message"],
            l = t["option.spinlucky_setting.max_turn"],
            s = a(e);
        if (!LadiPageScript.isEmpty(n)) {
            LadiPageScript.setDataReplaceStr("spin_turn_left", l - s);
            var c = document.getElementById(e),
                d = c.getElementsByClassName("ladi-spin-lucky-start")[0],
                u = c.getElementsByClassName("ladi-spin-lucky-screen")[0],
                p = !1;
            d.addEventListener("click", function (t) {
                if (t.stopPropagation(), !p)
                    if ((s = a(e)) >= l) LadiPageScript.showMessage(LadiPageScript.const.LANG.GAME_MAX_TURN_MESSAGE.format(l));
                    else {
                        p = !0;
                        var i = [],
                            c = 0,
                            d = 1;
                        n.forEach(function (t, e) {
                            var a = Base64.decode(t).split("|"),
                                n = a[0].trim(),
                                r = a[1].trim(),
                                o = parseFloat(a[2].trim()) || 0;
                            i.push({
                                min: d,
                                max: d + o - 1,
                                value: n,
                                text: r,
                                percent: o,
                                index: e
                            }), d += o, c += o
                        });
                        for (var m = LadiPageScript.randomInt(1, c), g = null, y = 0; y < i.length; y++)
                            if (i[y].min <= m && i[y].max >= m) {
                                g = i[y];
                                break
                            } if (LadiPageScript.isEmpty(g)) p = !1;
                        else {
                            var f = parseFloat(u.getAttribute("data-rotate")) || 0,
                                _ = g.index * (360 / i.length) + 360 * (4 + Math.ceil(f / 360)) + 180 / i.length,
                                h = "rotate(" + _ + "deg)";
                            u.setAttribute("data-rotate", _), u.style.setProperty("transform", h), u.style.setProperty("-webkit-transform", h), "NEXT_TURN" != g.value.toUpperCase() && (s++, LadiPageScript.setCookie(null, "_total_turn_" + e, s, 1, !1, window.location.pathname));
                            LadiPageScript.runTimeout(function () {
                                "NEXT_TURN" == g.value.toUpperCase() ? LadiPageScript.isEmpty(g.text) || LadiPageScript.showMessage(g.text) : (LadiPageScript.setDataReplaceStr("coupon", g.value), LadiPageScript.setDataReplaceStr("coupon_code", g.value), LadiPageScript.setDataReplaceStr("coupon_text", g.text), LadiPageScript.setDataReplaceStr("spin_turn_left", l - s), LadiPageScript.setDataReplaceElement(!0, !1, null, null, ["coupon"]), r == LadiPageScript.const.GAME_RESULT_TYPE.default ? LadiPageScript.isEmpty(o) || LadiPageScript.showMessage(o) : window.ladi(r).show(), LadiPageScript.runEventTracking(e, !1)), p = !1
                            }, 1e3 * parseFloat(getComputedStyle(u).transitionDuration) + 1e3)
                        }
                    }
            })
        }
    }, i.prototype.stop = function (t, e) {}, i.prototype.start = function (t) {
        var e = document.getElementById(t);
        if (!LadiPageScript.isEmpty(e) && e.getElementsByClassName("ladi-spin-lucky").length > 0) {
            var i = e.getElementsByClassName("ladi-spin-lucky-start")[0];
            LadiPageScript.isEmpty(i) || i.click()
        }
    }, i.prototype.add_turn = function (e) {
        var i = t["option.spinlucky_setting.max_turn"],
            n = a(e);
        n > 0 && n--, LadiPageScript.setCookie(null, "_total_turn_" + e, n, 1, !1, window.location.pathname), LadiPageScript.setDataReplaceStr("spin_turn_left", i - n), LadiPageScript.setDataReplaceElement(!1)
    }, new i
};