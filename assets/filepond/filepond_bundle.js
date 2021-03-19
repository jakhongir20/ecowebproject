!function (e) {
    var t = {};

    function n(o) {
        if (t[o]) return t[o].exports;
        var r = t[o] = {i: o, l: !1, exports: {}};
        return e[o].call(r.exports, r, r.exports, n), r.l = !0, r.exports
    }

    n.m = e, n.c = t, n.d = function (e, t, o) {
        n.o(e, t) || Object.defineProperty(e, t, {configurable: !1, enumerable: !0, get: o})
    }, n.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "", n(n.s = 0)
}([function (e, t, n) {
    "use strict";
    var o = n(1), r = function (e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return t.default = e, t
    }(n(2));
    r.addPlugin({
        moduleSetName: function (e) {
            return "./ui/" + e + ".js"
        }, moduleGetConstructor: function (e) {
            return e.default
        }, moduleImport: function (e) {
            return n(12)("" + e)
        }
    }), window.uploadFile = function (e, t, n, o, r, u) {
        var i = 0, a = setInterval(function () {
            i = Math.min(1, i + Math.random() / 15), u(!0, i, 1), i >= 1 && (clearInterval(a), o(Date.now()))
        }, 100)
    }, window.loadResources = function (e) {
        try {
            return new Promise(function (t, n) {
                var o = 0, r = function () {
                    ++o === e.length && t()
                };
                e.forEach(function (e) {
                    var t = e.split("?")[0];
                    /\.css/.test(t) ? function (e, t) {
                        var n = document.createElement("link");
                        n.rel = "stylesheet", n.href = e, n.onload = t, document.head.appendChild(n)
                    }(e, r) : /\.js/.test(t) && function (e, t) {
                        var n = document.createElement("script");
                        n.src = e, n.onload = t, document.head.appendChild(n)
                    }(e, r)
                })
            })
        }
        catch (e){
            console.log(e)
        }

    }
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    t.createFontLoader = function (e, t, n) {
        return function () {
            for (var o = arguments.length, r = Array(o), u = 0; u < o; u++) r[u] = arguments[u];
            "Promise" in window && "FontFace" in window && (r.forEach(function (n) {
                t.forEach(function (t) {
                    var o = new FontFace(n.family, "url(" + e + n.file + "." + t + ")", n);
                    document.fonts.add(o), o.load()
                })
            }), document.fonts.ready.then(function () {
                document.documentElement.classList.add(n)
            }))
        }
    }
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var o = function () {
        return function (e, t) {
            if (Array.isArray(e)) return e;
            if (Symbol.iterator in Object(e)) return function (e, t) {
                var n = [], o = !0, r = !1, u = void 0;
                try {
                    for (var i, a = e[Symbol.iterator](); !(o = (i = a.next()).done) && (n.push(i.value), !t || n.length !== t); o = !0) ;
                } catch (e) {
                    r = !0, u = e
                } finally {
                    try {
                        !o && a.return && a.return()
                    } finally {
                        if (r) throw u
                    }
                }
                return n
            }(e, t);
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }
    }();

    function r(e) {
        if (Array.isArray(e)) {
            for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
            return n
        }
        return Array.from(e)
    }

    var u = /(was)? ?(not)? ?@([a-z]+) ?(.*)?/,
        i = /(?:was )?(?:not )?@[a-z]+ ?.*?(?:(?= and (?:was )?(?:not )?@[a-z])|$)/g, a = function (e) {
            var t = e.match(u), n = o(t, 5), r = n[1], i = n[2];
            return [n[3], function (e) {
                return void 0 === e || "true" === e || "false" !== e && e
            }(n[4]), "not" === i, "was" === r]
        }, c = t.monitor = function (e, t) {
            var n = {
                matches: !1, active: !1, onchange: function () {
                }, start: function () {
                    n.active || (n.active = !0, o.forEach(function (e) {
                        return e.forEach(function (e) {
                            return e.addListener(u)
                        })
                    }), u())
                }, stop: function () {
                    n.active = !1, o.forEach(function (e) {
                        return e.forEach(function (e) {
                            e.removeListener && e.removeListener(u)
                        })
                    })
                }, destroy: function () {
                    n.stop(), o.length = 0
                }
            }, o = e.split(" or ").map(function (e) {
                return function (e) {
                    return e.match(i).map(a)
                }(e).map(function (e) {
                    return function (e, t, n) {
                        return e.invert = t, e.retain = n, e.matched = !1, e
                    }.apply(void 0, [function (e, t, n) {
                        var o = s("monitor").find(function (e) {
                            return e.name === t
                        });
                        if (!o) throw new Error('Conditioner: Cannot find monitor with name "@' + t + '". Only the "@media" monitor is always available. Custom monitors can be added with the `addPlugin` method using the `monitors` key. The name of the custom monitor should not include the "@" symbol.');
                        return o.create(n, e)
                    }.apply(void 0, [t].concat(r(e)))].concat(r(e.splice(2))))
                })
            }), u = function () {
                var e = o.reduce(function (e, t) {
                    return !!e || function (e) {
                        return e.reduce(function (e, t) {
                            if (!e) return !1;
                            var n = t.invert ? !t.matches : t.matches;
                            return n && (t.matched = !0), !(!t.retain || !t.matched) || n
                        }, !0)
                    }(t)
                }, !1);
                n.matches = e, n.onchange(e)
            };
            return n
        }, d = function (e) {
            var t = function (e) {
                var t = p("moduleGetName", e), n = m("moduleSetName", t), o = {destruct: null, mounting: !1}, u = {
                    alias: t, name: n, element: e, mounted: !1, unmount: function () {
                        o.destruct && u.mounted && (f("moduleWillUnmount", u), o.destruct(), u.mounted = !1, f("moduleDidUnmount", u), u.onunmount.apply(e))
                    }, mount: function () {
                        if (!u.mounted && !o.mounting) return f("moduleWillMount", u), p("moduleImport", n).catch(function (t) {
                            throw o.mounting = !1, f("moduleDidCatch", t, u), u.onmounterror.apply(e, [t, u]), new Error("Conditioner: " + t)
                        }).then(function (t) {
                            o.destruct = p("moduleGetDestructor", p("moduleGetConstructor", t).apply(void 0, r(p("moduleSetConstructorArguments", n, e)))), u.mounted = !0, o.mounting = !1, f("moduleDidMount", u), u.onmount.apply(e, [u])
                        }), u
                    }, onmounterror: function () {
                    }, onmount: function () {
                    }, onunmount: function () {
                    }, destroy: function () {
                    }
                };
                return u
            }(e), n = p("moduleGetContext", e);
            return n ? function (e, t) {
                var n = c(e, t.element);
                return n.onchange = function (e) {
                    return e ? t.mount() : t.unmount()
                }, n.start(), t
            }(n, t) : t.mount()
        }, l = (t.hydrate = function (e) {
            return [].concat(r(p("moduleSelector", e))).map(d)
        }, []), s = function (e) {
            return l.filter(function (t) {
                return function (e, t) {
                    return e.indexOf(t) > -1
                }(Object.keys(t), e)
            }).map(function (t) {
                return t[e]
            })
        }, f = function (e) {
            for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++) n[o - 1] = arguments[o];
            return s(e).forEach(function (e) {
                return e.apply(void 0, n)
            })
        }, m = function (e) {
            for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++) n[o - 1] = arguments[o];
            return s(e).reduce(function (e, t) {
                return [t.apply(void 0, r(e))]
            }, n).shift()
        }, p = function (e) {
            for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++) n[o - 1] = arguments[o];
            return s(e).pop().apply(void 0, n)
        };
    (t.addPlugin = function (e) {
        return l.push(e)
    })({
        moduleSelector: function (e) {
            return e.querySelectorAll("[data-module]")
        }, moduleGetContext: function (e) {
            return e.dataset.context
        }, moduleImport: function (e) {
            return new Promise(function (t, n) {
                if (self[e]) return t(self[e]);
                n('Cannot find module with name "' + e + '". By default Conditioner will import modules from the global scope, make sure a function named "' + e + '" is defined on the window object. The scope of a function defined with `let` or `const` is limited to the <script> block in which it is defined.')
            })
        }, moduleGetConstructor: function (e) {
            return e
        }, moduleGetDestructor: function (e) {
            return e
        }, moduleSetConstructorArguments: function (e, t) {
            return [t]
        }, moduleGetName: function (e) {
            return e.dataset.module
        }, monitor: {
            name: "media", create: function (e) {
                return self.matchMedia(e)
            }
        }
    })
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (e) {
        e.dataset.state = "loading";
        var t = document.createElement("video");
        t.autoplay = !0, t.loop = !0, t.muted = !0, t.addEventListener("loadeddata", function () {
            e.dataset.state = "complete", t.play()
        }), e.appendChild(t);
        var n = function () {
            t.innerHTML = '\n        <source src="' + e.dataset.videoSrc + '" type="video/mp4" />'
        };
        "complete" === document.readyState ? n() : window.addEventListener("load", n)
    }
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    t.debounce = function (e) {
        var t = void 0;
        return function () {
            for (var n = arguments.length, o = Array(n), r = 0; r < n; r++) o[r] = arguments[r];
            t && cancelAnimationFrame(t), t = requestAnimationFrame(function () {
                e.apply(void 0, o)
            })
        }
    }
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    t.default = function (e) {
        e.addEventListener("submit", function (t) {
            var n = Date.now();
            t.preventDefault(), e.dataset.state = "busy";
            var o = new FormData(e);
            !function (e, t, n) {
                e.forEach(function (e) {
                    return e.setAttribute("disabled", n)
                })
            }(e.querySelectorAll("input, textarea, button"), 0, "disabled");
            var r = new XMLHttpRequest;
            r.onload = function () {
                var t = Date.now() - n, o = Math.max(0, 1e3 - t);
                setTimeout(function () {
                    !function (t) {
                        var n = t >= 200 && t < 300;
                        e.dataset.state = n ? "success" : "error", n || function (e, t) {
                            e.forEach(function (e) {
                                return e.removeAttribute(t)
                            })
                        }(e.querySelectorAll("input, textarea, button"), "disabled")
                    }(r.status)
                }, o)
            }, r.open(e.getAttribute("method") || "POST", e.getAttribute("action")), r.send(o)
        })
    }
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (e) {
        window.addEventListener("load", function () {
            e.src = e.dataset.src
        })
    }
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (e) {
        if ("SELECT" !== !e.nodeName) {
            var t = e.dataset.target, n = {
                hobby: {type: "Hobby", amount: "one (1) Website"},
                professional: {type: "Professional", amount: "up to five (5) Websites"},
                business: {type: "Business", amount: "unlimited Websites"}
            }, o = function (o) {
                e.value = o;
                var r = n[o];
                document.querySelector(t).querySelectorAll(".license-field").forEach(function (e) {
                    e.textContent = r[e.dataset.id]
                })
            };
            e.addEventListener("change", function (e) {
                o(e.target.value)
            }), o(window.location.search.split("=").pop() || e.value)
        }
    }
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var o = n(4);
    t.default = function (e) {
        var t = function () {
            e.dataset.scroll = window.scrollY
        };
        document.addEventListener("scroll", (0, o.debounce)(t)), t()
    }
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (e) {
        e.classList.remove("implicit");
        var t = e.nextElementSibling, n = document.createElement("button");
        return n.setAttribute("aria-expanded", "false"), n.innerHTML = e.textContent + ' \n\t<svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-menu"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>', n.onclick = function () {
            var e = "true" === n.getAttribute("aria-expanded") || !1;
            n.setAttribute("aria-expanded", !e), t.hidden = e
        }, e.textContent = "", e.appendChild(n), t.hidden = !0, function () {
            e.classList.add("implicit"), e.nextElementSibling.hidden = !1, e.textContent = e.firstChild.textContent
        }
    }
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var o = function (e) {
        return e && e.__esModule ? e : {default: e}
    }(n(3));
    t.default = function (e) {
        for (var t = window.innerWidth <= 640 ? 1 : 4, n = function (t) {
            var n = document.createElement("div");
            n.dataset.videoSrc = e.dataset.videoSrc, setTimeout(function () {
                (0, o.default)(n)
            }, 2e3 * t), e.appendChild(n)
        }, r = 0; r < t; r++) n(r)
    }
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    t.getParent = function (e, t) {
        if (e.matches(t)) return e;
        for (var n = void 0; n = e.parentNode;) if (n.matches(t)) return n;
        return null
    }
}, function (e, t, n) {
    var o = {
        ".": 0,
        "./": 0,
        "./conditioner-core": 2,
        "./conditioner-core.js": 2,
        "./createFontLoader": 1,
        "./createFontLoader.js": 1,
        "./index": 0,
        "./index.js": 0,
        "./ui/AsyncForm": 5,
        "./ui/AsyncForm.js": 5,
        "./ui/LazyImage": 6,
        "./ui/LazyImage.js": 6,
        "./ui/LazyVideo": 3,
        "./ui/LazyVideo.js": 3,
        "./ui/LicenseFormatter": 7,
        "./ui/LicenseFormatter.js": 7,
        "./ui/ScrollTracker": 8,
        "./ui/ScrollTracker.js": 8,
        "./ui/SectionToggler": 9,
        "./ui/SectionToggler.js": 9,
        "./ui/TiledVideo": 10,
        "./ui/TiledVideo.js": 10,
        "./utils/debounce": 4,
        "./utils/debounce.js": 4,
        "./utils/getParent": 11,
        "./utils/getParent.js": 11
    };

    function r(e) {
        return u(e).then(n)
    }

    function u(e) {
        return Promise.resolve().then(function () {
            var t = o[e];
            if (!(t + 1)) throw new Error("Cannot find module '" + e + "'.");
            return t
        })
    }

    r.keys = function () {
        return Object.keys(o)
    }, r.resolve = u, r.id = 12, e.exports = r
}]);