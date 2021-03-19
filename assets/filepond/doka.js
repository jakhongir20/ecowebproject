!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";var r=n(1);window.dokaCreate=r.create},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};
/*!
 * Doka 6.9.2
 * Copyright 2019 PQINA Inc - All Rights Reserved
 * Please visit https://pqina.nl/doka/ for further information
 */
    function i(e) {
        return (i = "function" == typeof Symbol && "symbol" == r(Symbol.iterator) ? function (e) {
            return void 0 === e ? "undefined" : r(e)
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : r(e)
        })(e)
    }

    function o(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function a(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {}, r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function (e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function (t) {
                o(e, t, n[t])
            })
        }
        return e
    }

    function l(e, t) {
        return function (e) {
            if (Array.isArray(e)) return e
        }(e) || function (e, t) {
            var n = [], r = !0, i = !1, o = void 0;
            try {
                for (var a, l = e[Symbol.iterator](); !(r = (a = l.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0) ;
            } catch (e) {
                i = !0, o = e
            } finally {
                try {
                    r || null == l.return || l.return()
                } finally {
                    if (i) throw o
                }
            }
            return n
        }(e, t) || function () {
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }()
    }

    function c(e) {
        return function (e) {
            if (Array.isArray(e)) {
                for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
                return n
            }
        }(e) || function (e) {
            if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
        }(e) || function () {
            throw new TypeError("Invalid attempt to spread non-iterable instance")
        }()
    }

    var u = function (e, t) {
            return t.parentNode.insertBefore(e, t)
        }, s = function (e, t) {
            return t.parentNode.insertBefore(e, t.nextSibling)
        }, f = function (e) {
            return "object" === i(e) && null !== e
        }, d = function (e, t) {
            for (var n in e) e.hasOwnProperty(n) && t(n, e[n])
        }, h = function (e) {
            var t = {};
            return d(e, function (n) {
                !function (e, t, n) {
                    "function" != typeof n ? Object.defineProperty(e, t, n) : e[t] = n
                }(t, n, e[n])
            }), t
        }, p = function (e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
            if (null === n) return e.getAttribute(t) || e.hasAttribute(t);
            e.setAttribute(t, n)
        }, g = ["svg", "path"], m = function (e) {
            return g.includes(e)
        }, v = function (e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            "object" === i(t) && (n = t, t = null);
            var r = m(e) ? document.createElementNS("http://www.w3.org/2000/svg", e) : document.createElement(e);
            return t && (m(e) ? p(r, "class", t) : r.className = t), d(n, function (e, t) {
                p(r, e, t)
            }), r
        }, y = function (e) {
            return function (t, n) {
                void 0 !== n && e.children[n] ? e.insertBefore(t, e.children[n]) : e.appendChild(t)
            }
        }, E = function (e, t, n, r) {
            var i = n[0] || e.left, o = n[1] || e.top, l = i + e.width, c = o + e.height * (r[1] || 1), u = {
                element: a({}, e),
                inner: {left: e.left, top: e.top, right: e.right, bottom: e.bottom},
                outer: {left: i, top: o, right: l, bottom: c}
            };
            return t.filter(function (e) {
                return !e.isRectIgnored()
            }).map(function (e) {
                return e.rect
            }).forEach(function (e) {
                _(u.inner, a({}, e.inner)), _(u.outer, a({}, e.outer))
            }), w(u.inner), u.outer.bottom += u.element.marginBottom, u.outer.right += u.element.marginRight, w(u.outer), u
        }, _ = function (e, t) {
            t.top += e.top, t.right += e.left, t.bottom += e.top, t.left += e.left, t.bottom > e.bottom && (e.bottom = t.bottom), t.right > e.right && (e.right = t.right)
        }, w = function (e) {
            e.width = e.right - e.left, e.height = e.bottom - e.top
        }, T = function (e) {
            return "number" == typeof e
        }, A = function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.stiffness,
                n = void 0 === t ? .5 : t, r = e.damping, i = void 0 === r ? .75 : r, o = e.mass, a = void 0 === o ? 10 : o,
                l = e.delay, c = void 0 === l ? 0 : l, u = null, s = null, f = 0, d = !1, p = null, g = h({
                    interpolate: function (e) {
                        if (null === p && (p = e), !(e - c < p || d)) {
                            if (!T(u) || !T(s)) return d = !0, void (f = 0);
                            !function (e, t, n) {
                                var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : .001;
                                return Math.abs(e - t) < r && Math.abs(n) < r
                            }(s += f += -(s - u) * n / a, u, f *= i) ? g.onupdate(s) : (s = u, f = 0, d = !0, g.onupdate(s), g.oncomplete(s))
                        }
                    }, target: {
                        set: function (e) {
                            if (T(e) && !T(s) && (s = e, p = null), null === u && (u = e, s = e, p = null), d && (p = null), s === (u = e) || void 0 === u) return d = !0, f = 0, p = null, g.onupdate(s), void g.oncomplete(s);
                            d = !1
                        }, get: function () {
                            return u
                        }
                    }, resting: {
                        get: function () {
                            return d
                        }
                    }, onupdate: function () {
                    }, oncomplete: function () {
                    }, position: {
                        get: function () {
                            return s
                        }
                    }
                });
            return g
        }, R = function (e) {
            return e < .5 ? 2 * e * e : (4 - 2 * e) * e - 1
        }, x = {
            spring: A, tween: function () {
                var e, t, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, r = n.duration,
                    i = void 0 === r ? 500 : r, o = n.easing, a = void 0 === o ? R : o, l = n.delay,
                    c = void 0 === l ? 0 : l, u = null, s = !0, f = !1, d = null, p = h({
                        interpolate: function (n) {
                            s || null === d || (null === u && (u = n), n - u < c || ((e = n - u - c) < i ? (t = e / i, p.onupdate((e >= 0 ? a(f ? 1 - t : t) : 0) * d)) : (e = 1, t = f ? 0 : 1, p.onupdate(t * d), p.oncomplete(t * d), s = !0)))
                        }, target: {
                            get: function () {
                                return f ? 0 : d
                            }, set: function (e) {
                                if (null === d) return d = e, p.onupdate(e), void p.oncomplete(e);
                                e < d ? (d = 1, f = !0) : (f = !1, d = e), s = !1, u = null
                            }
                        }, resting: {
                            get: function () {
                                return s
                            }
                        }, onupdate: function () {
                        }, oncomplete: function () {
                        }
                    });
                return p
            }
        }, I = function (e, t, n) {
            var r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            (t = Array.isArray(t) ? t : [t]).forEach(function (t) {
                e.forEach(function (e) {
                    var o = e, a = function () {
                        return n[e]
                    }, l = function (t) {
                        return n[e] = t
                    };
                    "object" === i(e) && (o = e.key, a = e.getter || a, l = e.setter || l), t[o] && !r || (t[o] = {
                        get: a,
                        set: l
                    })
                })
            })
        }, C = function (e) {
            return function (t, n) {
                e.addEventListener(t, n)
            }
        }, O = function (e) {
            return function (t, n) {
                e.removeEventListener(t, n)
            }
        }, S = {
            opacity: 1,
            scaleX: 1,
            scaleY: 1,
            translateX: 0,
            translateY: 0,
            rotateX: 0,
            rotateY: 0,
            rotateZ: 0,
            originX: 0,
            originY: 0
        }, M = function (e, t) {
            if (Object.keys(e).length !== Object.keys(t).length) return !0;
            for (var n in t) if (t[n] !== e[n]) return !0;
            return !1
        }, b = function (e, t) {
            var n = t.opacity, r = t.perspective, i = t.translateX, o = t.translateY, a = t.scaleX, l = t.scaleY,
                c = t.rotateX, u = t.rotateY, s = t.rotateZ, f = t.originX, d = t.originY, h = t.width, p = t.height,
                g = "", m = "";
            null == f && null == d || (m += "transform-origin: ".concat(f || 0, "px ").concat(d || 0, "px;")), null != r && (g += "perspective(".concat(r, "px) ")), null == i && null == o || (g += "translate3d(".concat(i || 0, "px, ").concat(o || 0, "px, 0) ")), null == a && null == l || (g += "scale3d(".concat(null != a ? a : 1, ", ").concat(null != l ? l : 1, ", 1) ")), null != s && (g += "rotateZ(".concat(s, "rad) ")), null != c && (g += "rotateX(".concat(c, "rad) ")), null != u && (g += "rotateY(".concat(u, "rad) ")), "" != g && (m += "transform:".concat(g, ";")), null != n && (m += "opacity:".concat(n, ";"), n < 1 && (m += "pointer-events:none;"), 0 === n && "BUTTON" === e.nodeName && (m += "visibility:hidden;")), null != h && (m += "width:".concat(h, "px;")), null != p && (m += "height:".concat(p, "px;"));
            var v = e.elementCurrentStyle || "";
            m.length === v.length && m === v || (e.style.cssText = m, e.elementCurrentStyle = m)
        }, L = {
            styles: function (e) {
                var t = e.mixinConfig, n = e.viewProps, r = e.viewInternalAPI, i = e.viewExternalAPI, o = e.view,
                    l = a({}, n), c = {};
                I(t, [r, i], n);
                var u = function () {
                    return o.rect ? E(o.rect, o.childViews, [n.translateX || 0, n.translateY || 0], [n.scaleX || 0, n.scaleY || 0]) : null
                };
                return r.rect = {get: u}, i.rect = {get: u}, t.forEach(function (e) {
                    n[e] = void 0 === l[e] ? S[e] : l[e]
                }), {
                    write: function () {
                        if (M(c, n)) return b(o.element, n), Object.assign(c, a({}, n)), !0
                    }, destroy: function () {
                    }
                }
            }, listeners: function (e) {
                var t = e.viewExternalAPI, n = e.view, r = [], i = C(n.element), o = O(n.element);
                return t.on = function (e, t) {
                    r.push({type: e, fn: t}), i(e, t)
                }, t.off = function (e, t) {
                    r.splice(r.findIndex(function (n) {
                        return n.type === e && n.fn === t
                    }), 1), o(e, t)
                }, {
                    write: function () {
                        return !0
                    }, destroy: function () {
                        r.forEach(function (e) {
                            o(e.type, e.fn)
                        })
                    }
                }
            }, animations: function (e) {
                var t = e.mixinConfig, n = e.viewProps, r = e.viewInternalAPI, o = e.viewExternalAPI, l = a({}, n), c = [];
                return d(t, function (e, t) {
                    var u = function (e, t, n) {
                        var r = e[t] && "object" === i(e[t][n]) ? e[t][n] : e[t] || e,
                            o = "string" == typeof r ? r : r.type, l = "object" === i(r) ? a({}, r) : {};
                        return x[o] ? x[o](l) : null
                    }(t);
                    u && (u.onupdate = function (t) {
                        n[e] = t
                    }, u.target = l[e], I([{
                        key: e, setter: function (e) {
                            u.target !== e && (u.target = e)
                        }, getter: function () {
                            return n[e]
                        }
                    }], [r, o], n, !0), c.push(u))
                }), {
                    write: function (e) {
                        var t = !0;
                        return c.forEach(function (n) {
                            n.resting || (t = !1), n.interpolate(e)
                        }), t
                    }, destroy: function () {
                    }
                }
            }, apis: function (e) {
                var t = e.mixinConfig, n = e.viewProps, r = e.viewExternalAPI;
                I(t, r, n)
            }
        }, P = function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            return t.layoutCalculated || (e.paddingTop = parseInt(n.paddingTop, 10) || 0, e.marginTop = parseInt(n.marginTop, 10) || 0, e.marginRight = parseInt(n.marginRight, 10) || 0, e.marginBottom = parseInt(n.marginBottom, 10) || 0, e.marginLeft = parseInt(n.marginLeft, 10) || 0, t.layoutCalculated = !0), e.left = t.offsetLeft || 0, e.top = t.offsetTop || 0, e.width = t.offsetWidth || 0, e.height = t.offsetHeight || 0, e.right = e.left + e.width, e.bottom = e.top + e.height, e.scrollTop = t.scrollTop, e.hidden = null === t.offsetParent && "fixed" !== n.position, e
        }, G = "undefined" != typeof window && void 0 !== window.document, k = function () {
            return G
        }, D = "children" in (k() ? v("svg") : {}) ? function (e) {
            return e.children.length
        } : function (e) {
            return e.childNodes.length
        }, U = function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.tag,
                n = void 0 === t ? "div" : t, r = e.name, i = void 0 === r ? null : r, o = e.attributes,
                l = void 0 === o ? {} : o, c = e.read, u = void 0 === c ? function () {
                } : c, s = e.write, f = void 0 === s ? function () {
                } : s, d = e.create, p = void 0 === d ? function () {
                } : d, g = e.destroy, m = void 0 === g ? function () {
                } : g, _ = e.filterFrameActionsForChild, w = void 0 === _ ? function (e, t) {
                    return t
                } : _, T = e.didCreateView, A = void 0 === T ? function () {
                } : T, R = e.didWriteView, x = void 0 === R ? function () {
                } : R, I = e.shouldUpdateChildViews, C = void 0 === I ? function () {
                    return !0
                } : I, O = e.ignoreRect, S = void 0 !== O && O, M = e.ignoreRectUpdate, b = void 0 !== M && M, G = e.mixins,
                k = void 0 === G ? [] : G;
            return function (e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    r = v(n, i ? "doka--".concat(i) : null, l), o = window.getComputedStyle(r, null), c = P(), s = null,
                    d = !1, g = [], _ = [], T = {}, R = {}, I = [f], O = [u], M = [m], G = function () {
                        return r
                    }, U = function () {
                        return [].concat(g)
                    }, V = function () {
                        return s || (s = E(c, g, [0, 0], [1, 1]))
                    }, B = function () {
                        return r.layoutCalculated = !1
                    }, z = {
                        element: {get: G}, style: {
                            get: function () {
                                return o
                            }
                        }, childViews: {get: U}
                    }, N = a({}, z, {
                        rect: {get: V}, ref: {
                            get: function () {
                                return T
                            }
                        }, is: function (e) {
                            return i === e
                        }, appendChild: y(r), createChildView: function (e) {
                            return function (t, n) {
                                return t(e, n)
                            }
                        }(e), linkView: function (e) {
                            return g.push(e), e
                        }, unlinkView: function (e) {
                            g.splice(g.indexOf(e), 1)
                        }, appendChildView: function (e, t) {
                            return function (e, n) {
                                return void 0 !== n ? t.splice(n, 0, e) : t.push(e), e
                            }
                        }(0, g), removeChildView: function (e, t) {
                            return function (n) {
                                var r = t.splice(t.indexOf(n), 1);
                                return r.length && r[0]._destroy(), n.element.parentNode && e.removeChild(n.element), n
                            }
                        }(r, g), registerWriter: function (e) {
                            return I.push(e)
                        }, registerReader: function (e) {
                            return O.push(e)
                        }, registerDestroyer: function (e) {
                            return M.push(e)
                        }, invalidateLayout: B, dispatch: e.dispatch, query: e.query
                    }), F = {
                        element: {get: G}, childViews: {get: U}, rect: {get: V}, resting: {
                            get: function () {
                                return d
                            }
                        }, isRectIgnored: function () {
                            return S
                        }, invalidateLayout: B, _read: function () {
                            s = null, C({root: q, props: t}) && g.forEach(function (e) {
                                return e._read()
                            }), !(b && c.width && c.height) && P(c, r, o);
                            var e = {root: q, props: t, rect: c};
                            O.forEach(function (t) {
                                return t(e)
                            })
                        }, _write: function (e) {
                            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [], r = 0 === n.length;
                            return I.forEach(function (i) {
                                !1 === i({props: t, root: q, actions: n, timestamp: e}) && (r = !1)
                            }), _.forEach(function (t) {
                                !1 === t.write(e) && (r = !1)
                            }), C({props: t, root: q, actions: n, timestamp: e}) && (g.filter(function (e) {
                                return !!e.element.parentNode
                            }).forEach(function (t) {
                                t._write(e, w(t, n)) || (r = !1)
                            }), g.forEach(function (t, i) {
                                t.element.parentNode || (q.appendChild(t.element, i), t._read(), t._write(e, w(t, n)), r = !1)
                            })), d = r, x({props: t, root: q, actions: n, timestamp: e}), r
                        }, _destroy: function () {
                            _.forEach(function (e) {
                                return e.destroy()
                            }), M.forEach(function (e) {
                                e({root: q})
                            }), g.forEach(function (e) {
                                return e._destroy()
                            })
                        }
                    }, W = a({}, z, {
                        rect: {
                            get: function () {
                                return c
                            }
                        }
                    });
                Object.keys(k).sort(function (e, t) {
                    return "styles" === e ? 1 : "styles" === t ? -1 : 0
                }).forEach(function (e) {
                    var n = L[e]({
                        mixinConfig: k[e],
                        viewProps: t,
                        viewState: R,
                        viewInternalAPI: N,
                        viewExternalAPI: F,
                        view: h(W)
                    });
                    n && _.push(n)
                });
                var q = h(N);
                p({root: q, props: t});
                var H = D(r) || 0;
                return g.forEach(function (e, t) {
                    q.appendChild(e.element, H + t)
                }), A(q), h(F)
            }
        }, V = function (e, t) {
            return function (n) {
                var r = n.root, i = n.props, o = n.actions, a = void 0 === o ? [] : o, l = n.timestamp;
                if (a.filter(function (t) {
                    return e[t.type]
                }).forEach(function (t) {
                    return e[t.type]({root: r, props: i, action: t.data, timestamp: l})
                }), t) return t({root: r, props: i, actions: a, timestamp: l})
            }
        }, B = function (e) {
            return Array.isArray(e)
        }, z = function (e) {
            return null == e
        }, N = function (e) {
            return e.trim()
        }, F = function (e) {
            return "" + e
        }, W = function (e) {
            return "boolean" == typeof e
        }, q = function (e) {
            return "string" == typeof e
        }, H = function (e) {
            return T(e) ? e : q(e) ? F(e).replace(/[a-z]+/gi, "") : 0
        }, Y = function (e) {
            return parseInt(H(e), 10)
        }, Z = function (e) {
            return T(e) && isFinite(e) && Math.floor(e) === e
        }, X = function (e) {
            if (Z(e)) return e;
            var t = F(e).trim();
            return /MB$/i.test(t) ? (t = t.replace(/MB$i/, "").trim(), 1e3 * Y(t) * 1e3) : /KB/i.test(t) ? (t = t.replace(/KB$i/, "").trim(), 1e3 * Y(t)) : Y(t)
        }, K = function (e) {
            return B(e) ? "array" : function (e) {
                return null === e
            }(e) ? "null" : Z(e) ? "int" : /^[0-9]+ ?(?:GB|MB|KB)$/gi.test(e) ? "bytes" : i(e)
        }, j = {
            array: function (e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ",";
                return z(e) ? [] : B(e) ? e : F(e).split(t).map(N).filter(function (e) {
                    return e.length
                })
            }, boolean: function (e) {
                return W(e) ? e : "true" === e
            }, int: function (e) {
                return "bytes" === K(e) ? X(e) : Y(e)
            }, float: function (e) {
                return parseFloat(H(e))
            }, bytes: X, string: function (e) {
                return function (e) {
                    return "function" == typeof e
                }(e) ? e : F(e)
            }, object: function (e) {
                try {
                    return JSON.parse(function (e) {
                        return e.replace(/{\s*'/g, '{"').replace(/'\s*}/g, '"}').replace(/'\s*:/g, '":').replace(/:\s*'/g, ':"').replace(/,\s*'/g, ',"').replace(/'\s*,/g, '",')
                    }(e))
                } catch (t) {
                    return e
                }
            }, file: function (e) {
                return e
            }, function: function (e) {
                return function (e) {
                    for (var t = self, n = e.split("."), r = null; r = n.shift();) if (!(t = t[r])) return null;
                    return t
                }(e)
            }
        }, Q = function (e, t, n) {
            if (e === t) return e;
            var r = K(e);
            if (r !== n) {
                var i = function (e, t) {
                    return j[t](e)
                }(e, n);
                if (r = K(i), null === i) throw'Trying to assign value with incorrect type, allowed type: "'.concat(n, '"');
                e = i
            }
            return e
        }, J = function (e) {
            var t = {};
            return d(e, function (n) {
                var r = q(e[n]) ? e[n] : n, i = e[r];
                t[n] = r === n ? function (e, t) {
                    var n = e;
                    return {
                        enumerable: !0, get: function () {
                            return n
                        }, set: function (r) {
                            n = Q(r, e, t)
                        }
                    }
                }(i[0], i[1]) : t[r]
            }), h(t)
        }, $ = function (e) {
            e.file = null, e.activeView = null, e.markup = [], e.markupToolValues = {}, e.rootRect = {
                x: 0,
                y: 0,
                left: 0,
                top: 0,
                width: 0,
                height: 0
            }, e.stage = null, e.stageOffset = null, e.image = null, e.zoomTimeoutId = null, e.instantUpdate = !1, e.filePromise = null, e.fileLoader = null, e.instructions = {
                size: null,
                crop: null,
                filter: null,
                color: null
            }, e.filter = null, e.filterName = null, e.filterValue = null, e.colorValues = {}, e.colorMatrices = {}, e.size = {
                width: !1,
                height: !1,
                aspectRatioLocked: !0,
                aspectRatioPrevious: !1
            }, e.crop = {
                rectangle: null,
                transforms: null,
                rotation: null,
                flip: null,
                aspectRatio: null,
                isRotating: !1,
                isDirty: !1,
                limitToImageBounds: !0,
                draft: {rectangle: null, transforms: null}
            }
        }, ee = function (e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "-";
            return e.split(/(?=[A-Z])/).map(function (e) {
                return e.toLowerCase()
            }).join(t)
        }, te = function () {
            return Math.random().toString(36).substr(2, 9)
        }, ne = function () {
            var e = [], t = function (t, n) {
                !function (e, t) {
                    e.splice(t, 1)
                }(e, e.findIndex(function (e) {
                    return e.event === t && (e.cb === n || !n)
                }))
            };
            return {
                fire: function (t) {
                    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) r[i - 1] = arguments[i];
                    e.filter(function (e) {
                        return e.event === t
                    }).map(function (e) {
                        return e.cb
                    }).forEach(function (e) {
                        setTimeout(function () {
                            e.apply(void 0, r)
                        }, 0)
                    })
                }, on: function (t, n) {
                    e.push({event: t, cb: n})
                }, onOnce: function (n, r) {
                    e.push({
                        event: n, cb: function () {
                            t(n, r), r.apply(void 0, arguments)
                        }
                    })
                }, off: t
            }
        }, re = "boolean", ie = "int", oe = "number", ae = "string", le = "array", ce = "object", ue = "function",
        se = null, fe = function () {
            return null === se && (se = (/iPad|iPhone|iPod/.test(navigator.userAgent) || "MacIntel" === navigator.platform && navigator.maxTouchPoints > 1) && !window.MSStream), se
        }, de = function () {
            return a({}, pe)
        }, he = function (e, t) {
            e = function (e) {
                return q(pe[e]) ? pe[e] : e
            }(e), pe[e][0] = Q(t, pe[e][0], pe[e][1])
        }, pe = {
            id: [null, ae],
            className: [null, ae],
            src: [null, "file"],
            storageName: ["doka", ae],
            maxImagePreviewWidth: [1500, ie],
            maxImagePreviewHeight: [1500, ie],
            imagePreviewScaleMode: ["stage", ae],
            allowPreviewFitToView: [!0, re],
            allowButtonCancel: [!0, re],
            allowButtonConfirm: [!0, re],
            allowButtonReset: [!0, re],
            allowDropFiles: [!1, re],
            allowBrowseFiles: [!0, re],
            allowAutoClose: [!0, re],
            allowAutoDestroy: [!1, re],
            utils: [["crop", "filter", "color", "markup"], le],
            util: [null, ae],
            initialState: [null, ce],
            outputData: [!1, re],
            outputFile: [!0, re],
            outputCorrectImageExifOrientation: [!0, re],
            outputStripImageHead: [!0, re],
            outputType: [null, ae],
            outputQuality: [null, ie],
            outputFit: ["cover", ae],
            outputUpscale: [!0, re],
            outputWidth: [null, ie],
            outputHeight: [null, ie],
            outputCanvasBackgroundColor: [null, ae],
            outputCanvasMemoryLimit: [k() && fe() ? 16777216 : null, ie],
            outputCanvasSyncTarget: [null, ce],
            size: [null, ce],
            sizeMin: [{width: 1, height: 1}, ce],
            sizeMax: [{width: 9999, height: 9999}, ce],
            filter: [null, ce],
            filters: [{
                original: {
                    label: "Original", matrix: function () {
                        return null
                    }
                }, chrome: {
                    label: "Chrome", matrix: function () {
                        return [1.398, -.316, .065, -.273, .201, -.051, 1.278, -.08, -.273, .201, -.051, .119, 1.151, -.29, .215, 0, 0, 0, 1, 0]
                    }
                }, fade: {
                    label: "Fade", matrix: function () {
                        return [1.073, -.015, .092, -.115, -.017, .107, .859, .184, -.115, -.017, .015, .077, 1.104, -.115, -.017, 0, 0, 0, 1, 0]
                    }
                }, mono: {
                    label: "Mono", matrix: function () {
                        return [.212, .715, .114, 0, 0, .212, .715, .114, 0, 0, .212, .715, .114, 0, 0, 0, 0, 0, 1, 0]
                    }
                }, noir: {
                    label: "Noir", matrix: function () {
                        return [.15, 1.3, -.25, .1, -.2, .15, 1.3, -.25, .1, -.2, .15, 1.3, -.25, .1, -.2, 0, 0, 0, 1, 0]
                    }
                }
            }, ce],
            crop: [null, ce],
            cropShowSize: [!1, re],
            cropZoomTimeout: [null, ie],
            cropMask: [null, ue],
            cropMaskInset: [0, ie],
            cropAllowResizeRect: [!0, re],
            cropAllowImageTurnLeft: [!0, re],
            cropAllowImageTurnRight: [!1, re],
            cropAllowImageFlipHorizontal: [!0, re],
            cropAllowImageFlipVertical: [!0, re],
            cropAllowToggleLimit: [!1, re],
            cropLimitToImageBounds: [!0, re],
            cropAllowInstructionZoom: [!1, re],
            cropAllowRotate: [!0, re],
            cropResizeMatchImageAspectRatio: [!1, re],
            cropResizeKeyCodes: [[18, 91, 92, 93], le],
            cropResizeScrollRectOnly: [!1, re],
            cropAspectRatio: [null, ae],
            cropAspectRatioOptions: [null, le],
            cropMinImageWidth: [1, ie],
            cropMinImageHeight: [1, ie],
            colorBrightness: [0, oe],
            colorBrightnessRange: [[-.25, .25], le],
            colorContrast: [1, oe],
            colorContrastRange: [[.5, 1.5], le],
            colorExposure: [1, oe],
            colorExposureRange: [[.5, 1.5], le],
            colorSaturation: [1, oe],
            colorSaturationRange: [[0, 2], le],
            markup: [null, le],
            markupUtil: ["select", ae],
            markupFilter: [function () {
                return !0
            }, ue],
            markupAllowAddMarkup: [!0, re],
            markupAllowCustomColor: [!0, re],
            markupDrawDistance: [4, oe],
            markupColor: ["#000", ae],
            markupColorOptions: [[["White", "#fff", "#f6f6f6"], ["Silver", "#9e9e9e"], ["Black", "#000", "#333"], ["Red", "#f44336"], ["Orange", "#ff9800"], ["Yellow", "#ffeb3b"], ["Green", "#4caf50"], ["Blue", "#2196f3"], ["Violet", "#3f51b5"], ["Purple", "#9c27b0"]], le],
            markupFontSize: [.1, oe],
            markupFontSizeOptions: [[["XL", .15], ["L", .125], ["M", .1], ["S", .075], ["XS", .05]], le],
            markupFontFamily: ["Helvetica, Arial, Verdana", ae],
            markupFontFamilyOptions: [[["Serif", "Palatino, 'Times New Roman', serif"], ["Sans Serif", "Helvetica, Arial, Verdana"], ["Monospaced", "Monaco, 'Lucida Console', monospaced"]], le],
            markupShapeStyle: [[.015, null], le],
            markupShapeStyleOptions: [[["Fill", 0, null, 0], ["Outline thick", .025, null, 4], ["Outline default", .015, null, 2], ["Outline thin", .005, null, 1], ["Outline dashed", .005, [.01], 1]], le],
            markupLineStyle: [[.015, null], le],
            markupLineStyleOptions: [[["Thick", .025, null, 4], ["Default", .015, null, 2], ["Thin", .005, null, 1], ["Dashed", .005, [.01], 1]], le],
            markupLineDecoration: [["arrow-end"], le],
            markupLineDecorationOptions: [[["None", []], ["Single arrow", ["arrow-end"]], ["Double arrow", ["arrow-begin", "arrow-end"]]], le],
            beforeCreateBlob: [null, ue],
            afterCreateBlob: [null, ue],
            afterCreateOutput: [null, ue],
            onconfirm: [null, ue],
            oncancel: [null, ue],
            onclose: [null, ue],
            onloadstart: [null, ue],
            onload: [null, ue],
            onloaderror: [null, ue],
            oninit: [null, ue],
            onready: [null, ue],
            onupdate: [null, ue],
            ondestroy: [null, ue],
            labelButtonReset: ["Сбросить", ae],
            labelButtonCancel: ["Закрыть", ae],
            labelButtonConfirm: ["Применить", ae],
            labelButtonUtilCrop: ["Обрезать", ae],
            labelButtonUtilResize: ["Изменить размер", ae],
            labelButtonUtilFilter: ["Фильтры", ae],
            labelButtonUtilColor: ["Цвет", ae],
            labelButtonUtilMarkup: ["Надписи", ae],
            labelStatusMissingWebGL: ["WebGL не поддерживает ваш браузер", ae],
            labelStatusAwaitingImage: ["Ожидание…", ae],
            labelStatusLoadImageError: ["Ошибка загрузки изображения…", ae],
            labelStatusLoadingImage: ["Загрузка изображения…", ae],
            labelStatusProcessingImage: ["Обработка изображения…", ae],
            labelColorBrightness: ["Яркость", ae],
            labelColorContrast: ["Контраст", ae],
            labelColorExposure: ["Экспозиция", ae],
            labelColorSaturation: ["Насыщенность", ae],
            labelMarkupTypeRectangle: ["Квадрат", ae],
            labelMarkupTypeEllipse: ["Круг", ae],
            labelMarkupTypeText: ["Текст", ae],
            labelMarkupTypeLine: ["Указатель", ae],
            labelMarkupSelectFontSize: ["Размер", ae],
            labelMarkupSelectFontFamily: ["Шрифт", ae],
            labelMarkupSelectLineDecoration: ["Оформление", ae],
            labelMarkupSelectLineStyle: ["Стиль", ae],
            labelMarkupSelectShapeStyle: ["Стиль", ae],
            labelMarkupRemoveShape: ["Удалить", ae],
            labelMarkupToolSelect: ["Выбрать", ae],
            labelMarkupToolDraw: ["Нарисовать", ae],
            labelMarkupToolLine: ["Стрелка", ae],
            labelMarkupToolText: ["Текст", ae],
            labelMarkupToolRect: ["Квадрат", ae],
            labelMarkupToolEllipse: ["Круг", ae],
            labelResizeWidth: ["Ширина", ae],
            labelResizeHeight: ["Высота", ae],
            labelResizeApplyChanges: ["Применить", ae],
            labelCropInstructionZoom: ["Увеличивайте и уменьшайте масштаб с помощью колеса прокрутки или сенсорной панели.", ae],
            labelButtonCropZoom: ["Увеличить", ae],
            labelButtonCropRotateLeft: ["Повернуть влево", ae],
            labelButtonCropRotateRight: ["Повернуть вправо", ae],
            labelButtonCropRotateCenter: ["Центр вращения", ae],
            labelButtonCropFlipHorizontal: ["Отразить по горизонтали", ae],
            labelButtonCropFlipVertical: ["Отразить по вертикали", ae],
            labelButtonCropAspectRatio: ["Соотношение сторон", ae],
            labelButtonCropToggleLimit: ["Обрезать выделенную область", ae],
            labelButtonCropToggleLimitEnable: ["Ограничено изображением", ae],
            labelButtonCropToggleLimitDisable: ["Выбрать внешнее изображение", ae],
            pointerEventsPolyfillScope: ["root", ae],
            styleCropCorner: ["circle", ae],
            styleFullscreenSafeArea: [k() && /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream ? "bottom" : "none", ae],
            styleLayoutMode: [null, ae]
        }, ge = function (e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
            return Math.min(n, Math.max(t, e))
        }, me = function (e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10;
            return parseFloat(e.toFixed(t))
        }, ve = function (e, t) {
            return {x: me(e.x, t), y: me(e.y, t)}
        }, ye = function (e, t) {
            return Ae(e.x - t.x, e.y - t.y)
        }, Ee = function (e, t) {
            return function (e, t) {
                return e.x * t.x + e.y * t.y
            }(ye(e, t), ye(e, t))
        }, _e = function (e, t) {
            return Math.sqrt(Ee(e, t))
        }, we = function (e, t) {
            return Ae(ge(e.x, t.x, t.x + t.width), ge(e.y, t.y, t.y + t.height))
        }, Te = function (e, t, n) {
            var r = Math.cos(t), i = Math.sin(t), o = Ae(e.x - n.x, e.y - n.y);
            return Ae(n.x + r * o.x - i * o.y, n.y + i * o.x + r * o.y)
        }, Ae = function () {
            return {
                x: arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                y: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0
            }
        }, Re = function (e, t) {
            return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height
        }, xe = function (e, t) {
            return Le(e.x + t.x, e.y + t.y, e.width, e.height)
        }, Ie = {
            translate: xe, rotate: function (e, t, n) {
                var r = function (e, t, n) {
                        return 0 === t ? {tl: e.tl, tr: e.tr, br: e.br, bl: e.bl} : {
                            tl: Te(e.tl, t, n),
                            tr: Te(e.tr, t, n),
                            br: Te(e.br, t, n),
                            bl: Te(e.bl, t, n)
                        }
                    }(be(e), t, n), i = r.tl, o = r.tr, a = r.br, l = r.bl, c = Math.min(i.x, o.x, a.x, l.x),
                    u = Math.min(i.y, o.y, a.y, l.y), s = Math.max(i.x, o.x, a.x, l.x), f = Math.max(i.y, o.y, a.y, l.y);
                return Le(c, u, s - c, f - u)
            }, scale: function (e, t, n) {
                return Le(t * (e.x - n.x) + n.x, t * (e.y - n.y) + n.y, t * e.width, t * e.height)
            }
        }, Ce = function (e) {
            return Le(e.x, e.y, e.width, e.height)
        }, Oe = function (e) {
            return {top: e.y, right: e.x + e.width, bottom: e.y + e.height, left: e.x}
        }, Se = function (e) {
            var t = e.top, n = e.right, r = e.bottom, i = e.left;
            return {x: i, y: t, width: n - i, height: r - t}
        }, Me = function (e) {
            return Ae(e.x + .5 * e.width, e.y + .5 * e.height)
        }, be = function (e) {
            return {
                tl: {x: e.x, y: e.y},
                tr: {x: e.x + e.width, y: e.y},
                br: {x: e.x + e.width, y: e.y + e.height},
                bl: {x: e.x, y: e.y + e.height}
            }
        }, Le = function (e, t, n, r) {
            return {x: e, y: t, width: n, height: r}
        }, Pe = function (e) {
            if (z(e)) return e;
            if (/:/.test(e)) {
                var t = e.split(":"), n = t[0];
                return t[1] / n
            }
            return parseFloat(e)
        }, Ge = function (e, t) {
            var n = e.width, r = n * t;
            return r > e.height && (n = (r = e.height) / t), {
                x: .5 * (e.width - n),
                y: .5 * (e.height - r),
                width: n,
                height: r
            }
        }, ke = function (e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1, r = e.height / e.width, i = t,
                o = 1, a = r;
            a > i && (o = (a = i) / r);
            var l = Math.max(1 / o, i / a), c = e.width / (n * l * o);
            return {width: c, height: c * t}
        }, De = function (e, t) {
            return {x: e, y: t}
        }, Ue = function (e, t) {
            return De(e.x - t.x, e.y - t.y)
        }, Ve = function (e, t) {
            return Math.sqrt(function (e, t) {
                return function (e, t) {
                    return e.x * t.x + e.y * t.y
                }(Ue(e, t), Ue(e, t))
            }(e, t))
        }, Be = function (e, t) {
            var n = e, r = t, i = 1.5707963267948966 - t, o = Math.sin(1.5707963267948966), a = Math.sin(r),
                l = Math.sin(i), c = Math.cos(i), u = n / o;
            return De(c * (u * a), c * (u * l))
        }, ze = function (e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {x: .5, y: .5},
                i = r.x > .5 ? 1 - r.x : r.x, o = r.y > .5 ? 1 - r.y : r.y, a = 2 * i * e.width, l = 2 * o * e.height,
                c = function (e, t) {
                    var n = e.width, r = e.height, i = Be(n, t), o = Be(r, t),
                        a = De(e.x + Math.abs(i.x), e.y - Math.abs(i.y)),
                        l = De(e.x + e.width + Math.abs(o.y), e.y + Math.abs(o.x)),
                        c = De(e.x - Math.abs(o.y), e.y + e.height - Math.abs(o.x));
                    return {width: Ve(a, l), height: Ve(a, c)}
                }(t, n);
            return Math.max(c.width / a, c.height / l)
        }, Ne = function (e, t) {
            var n = t.origin, r = t.translation;
            return function (e, t, n) {
                return t.reduce(function (e, t) {
                    return (0, Ie[t[0]])(e, t[1], n)
                }, e)
            }(e, [["scale", t.scale], ["translate", r]], n)
        }, Fe = function (e, t) {
            var n = e, r = t, i = 1.5707963267948966 - t, o = Math.sin(1.5707963267948966), a = Math.sin(r),
                l = Math.sin(i), c = Math.cos(i), u = n / o;
            return Ae(c * (u * a), c * (u * l))
        }, We = function (e, t, n, r) {
            var i = {x: e.x + t.x, y: e.y + t.y}, o = function (e, t) {
                var n = e.width, r = e.height, i = t % (Math.PI / 2), o = Fe(n, i), a = Fe(r, i), l = be(e);
                return {
                    tl: Ae(l.tl.x + Math.abs(o.x), l.tl.y - Math.abs(o.y)),
                    tr: Ae(l.tr.x + Math.abs(a.y), l.tr.y + Math.abs(a.x)),
                    br: Ae(l.br.x - Math.abs(o.x), l.br.y + Math.abs(o.y)),
                    bl: Ae(l.bl.x - Math.abs(a.y), l.bl.y - Math.abs(a.x))
                }
            }(r, n), a = Te(o.tl, -n, i), l = Te(o.tr, -n, i), c = Te(o.br, -n, i);
            return Le(Math.min(a.x, l.x, c.x), Math.min(a.y, l.y, c.y), Math.max(a.x, l.x, c.x) - Math.min(a.x, l.x, c.x), Math.max(a.y, l.y, c.y) - Math.min(a.y, l.y, c.y))
        }, qe = function (e, t, n) {
            var r = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3], i = n.origin, o = n.translation,
                a = Ne(e, n), l = 2 * Math.PI + n.rotation % (2 * Math.PI), c = We(i, o, l, t), u = Me(c),
                s = t.height / t.width, f = {x: (u.x - a.x) / a.width, y: (u.y - a.y) / a.height},
                d = f.y > .5 ? 1 - f.y : f.y, h = 2 * (f.x > .5 ? 1 - f.x : f.x) * a.width, p = 2 * d * a.height;
            return {
                center: f,
                zoom: r ? Math.min(h / c.width, p / c.height) : Math.min(a.width / c.width, a.height / c.height),
                rotation: n.rotation,
                aspectRatio: s,
                scaleToFit: r
            }
        }, He = function (e, t) {
            var n = Ye(e, t);
            return {
                center: {x: me(n.center.x), y: me(n.center.y)},
                rotation: me(n.rotation),
                zoom: me(n.zoom),
                aspectRatio: me(n.aspectRatio),
                flip: a({}, t.flip),
                scaleToFit: n.scaleToFit
            }
        }, Ye = function (e, t) {
            var n = qe(e, t.rectangle, t.transforms, t.limitToImageBounds);
            return {
                center: {x: n.center.x, y: n.center.y},
                rotation: n.rotation,
                zoom: n.zoom,
                aspectRatio: n.aspectRatio,
                flip: a({}, t.flip),
                scaleToFit: n.scaleToFit
            }
        }, Ze = function (e, t, n, r) {
            var i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "width", o = e.width, a = e.height;
            return o || a ? (o = o && ge(o, t.width, n.width), a = a && ge(a, t.height, n.height), r ? (a ? o ? "width" === i ? a = o / r : "height" === i ? o = a * r : (a * r < t.width ? a = (o = t.width) / r : o / r < t.height && (o = (a = t.height) * r), a * r > n.width ? a = (o = n.width) / r : o / r > n.height && (o = (a = n.height) * r)) : a = ge(a * r, t.width, n.width) / r : o = ge(o / r, t.height, n.height) * r, {
                width: o,
                height: a
            }) : {width: o, height: a}) : {width: o, height: a}
        }, Xe = function (e) {
            var t;
            if (/^#/.test(e)) {
                if (4 === e.length) {
                    var n = e.split("");
                    e = "#" + n[1] + n[1] + n[2] + n[2] + n[3] + n[3]
                }
                var r = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
                t = [parseInt(r[1], 16), parseInt(r[2], 16), parseInt(r[3], 16)]
            } else /^rgb/.test(e) && ((t = e.match(/\d+/g).map(function (e) {
                return parseInt(e, 10)
            })).length = 3);
            return t
        }, Ke = [], je = function (e) {
            var t = [];
            return d(e, function (e, n) {
                return t.push(n)
            }), t.length ? t.reduce(function (e, t) {
                return function (e, t) {
                    var n = new Array(20);
                    return n[0] = e[0] * t[0] + e[1] * t[5] + e[2] * t[10] + e[3] * t[15], n[1] = e[0] * t[1] + e[1] * t[6] + e[2] * t[11] + e[3] * t[16], n[2] = e[0] * t[2] + e[1] * t[7] + e[2] * t[12] + e[3] * t[17], n[3] = e[0] * t[3] + e[1] * t[8] + e[2] * t[13] + e[3] * t[18], n[4] = e[0] * t[4] + e[1] * t[9] + e[2] * t[14] + e[3] * t[19] + e[4], n[5] = e[5] * t[0] + e[6] * t[5] + e[7] * t[10] + e[8] * t[15], n[6] = e[5] * t[1] + e[6] * t[6] + e[7] * t[11] + e[8] * t[16], n[7] = e[5] * t[2] + e[6] * t[7] + e[7] * t[12] + e[8] * t[17], n[8] = e[5] * t[3] + e[6] * t[8] + e[7] * t[13] + e[8] * t[18], n[9] = e[5] * t[4] + e[6] * t[9] + e[7] * t[14] + e[8] * t[19] + e[9], n[10] = e[10] * t[0] + e[11] * t[5] + e[12] * t[10] + e[13] * t[15], n[11] = e[10] * t[1] + e[11] * t[6] + e[12] * t[11] + e[13] * t[16], n[12] = e[10] * t[2] + e[11] * t[7] + e[12] * t[12] + e[13] * t[17], n[13] = e[10] * t[3] + e[11] * t[8] + e[12] * t[13] + e[13] * t[18], n[14] = e[10] * t[4] + e[11] * t[9] + e[12] * t[14] + e[13] * t[19] + e[14], n[15] = e[15] * t[0] + e[16] * t[5] + e[17] * t[10] + e[18] * t[15], n[16] = e[15] * t[1] + e[16] * t[6] + e[17] * t[11] + e[18] * t[16], n[17] = e[15] * t[2] + e[16] * t[7] + e[17] * t[12] + e[18] * t[17], n[18] = e[15] * t[3] + e[16] * t[8] + e[17] * t[13] + e[18] * t[18], n[19] = e[15] * t[4] + e[16] * t[9] + e[17] * t[14] + e[18] * t[19] + e[19], n
                }(c(e), t)
            }, t.shift()) : []
        }, Qe = function (e) {
            return e.crop.draft.transforms ? e.crop.draft.transforms.scale : e.crop.transforms.scale
        }, Je = function (e) {
            var t = e.image.width / e.image.naturalWidth, n = Qe(e);
            return {width: e.options.cropMinImageWidth * n * t, height: e.options.cropMinImageHeight * n * t}
        }, $e = function (e) {
            var t = Qe(e);
            return {width: e.image.width * t, height: e.image.height * t}
        }, et = function (e) {
            return e.options.cropAspectRatioOptions ? e.options.cropAspectRatioOptions.map(function (e) {
                var t = {aspectRatio: null, width: null, height: null};
                return "number" == typeof e.value && (t.aspectRatio = e.value), "string" == typeof e.value && (t.aspectRatio = Pe(e.value)), "object" === i(e.value) && null !== e.value && (t.width = e.value.width, t.height = e.value.height, t.aspectRatio = t.height / t.width), {
                    label: e.label,
                    value: t
                }
            }) : null
        }, tt = function (e) {
            var t = e.image.naturalWidth, n = e.image.naturalHeight, r = n / t;
            return e.stage.width < t && (n = r * (t = e.stage.width)), e.stage.height < n && (t = (n = e.stage.height) / r), Le(.5 * e.stage.width - .5 * t, .5 * e.stage.height - .5 * n, t, n)
        }, nt = function (e) {
            return {
                GET_SIZE: function () {
                    return !1 !== e.size.width && !1 !== e.size.height ? {
                        width: e.size.width,
                        height: e.size.height
                    } : {width: null, height: null}
                }, GET_SIZE_INPUT: function () {
                    return {width: e.size.width, height: e.size.height}
                }, GET_SIZE_ASPECT_RATIO_LOCK: function () {
                    return e.size.aspectRatioLocked
                }, IS_ACTIVE_VIEW: function (t) {
                    return e.activeView === t
                }, GET_ACTIVE_VIEW: function () {
                    return e.activeView
                }, GET_STYLES: function () {
                    return Object.keys(e.options).filter(function (e) {
                        return /^style/.test(e)
                    }).map(function (t) {
                        return {name: t, value: e.options[t]}
                    })
                }, GET_FILE: function () {
                    return e.file
                }, GET_IMAGE: function () {
                    return e.image
                }, GET_STAGE: function () {
                    return a({}, e.stage, e.stageOffset)
                }, GET_STAGE_RECT: function (t) {
                    var n, r = e.options.imagePreviewScaleMode;
                    return (n = "crop" === r ? t ? function (e, t) {
                        t.aspectRatio || (t.aspectRatio = e.image.height / e.image.width);
                        var n = ot(e.image, t, t.scaleToFit), r = n.width / n.height;
                        return e.stage.width < n.width && (n.width = e.stage.width, n.height = n.width / r), e.stage.height < n.height && (n.height = e.stage.height, n.width = n.height * r), Le(.5 * e.stage.width - .5 * n.width, .5 * e.stage.height - .5 * n.height, n.width, n.height)
                    }(e, t) : tt(e) : "image" === r ? tt(e) : a({}, e.stage)).fits = n.width < e.stage.width && n.height < e.stage.height, n.mode = r, n
                }, GET_IMAGE_STAGE_RECT: function () {
                    return tt(e)
                }, GET_ROOT: function () {
                    return e.rootRect
                }, GET_ROOT_SIZE: function () {
                    return {width: e.rootRect.width, height: e.rootRect.height}
                }, GET_MIN_IMAGE_SIZE: function () {
                    return {width: e.options.cropMinImageWidth, height: e.options.cropMinImageHeight}
                }, GET_IMAGE_PREVIEW_SCALE_FACTOR: function () {
                    return e.image.width / e.image.naturalWidth
                }, GET_MIN_PREVIEW_IMAGE_SIZE: function () {
                    var t = e.image.width / e.image.naturalWidth;
                    return {width: e.options.cropMinImageWidth * t, height: e.options.cropMinImageHeight * t}
                }, GET_MIN_CROP_SIZE: function () {
                    return Je(e)
                }, GET_MAX_CROP_SIZE: function () {
                    return $e(e)
                }, GET_MIN_PIXEL_CROP_SIZE: function () {
                    var t = e.crop.transforms.scale, n = Je(e);
                    return {width: n.width / t, height: n.height / t}
                }, GET_MAX_PIXEL_CROP_SIZE: function () {
                    var t = e.crop.transforms.scale, n = $e(e);
                    return {width: n.width / t, height: n.height / t}
                }, GET_CROP_ASPECT_RATIO_OPTIONS: function () {
                    return et(e)
                }, GET_ACTIVE_CROP_ASPECT_RATIO: function () {
                    var t = e.crop.aspectRatio;
                    return q(t) ? Pe(t) : t
                }, GET_CROP_ASPECT_RATIO: function () {
                    var t = q(e.options.cropAspectRatio) ? Pe(e.options.cropAspectRatio) : e.options.cropAspectRatio,
                        n = et(e);
                    return !n || n && !n.length ? t : n.find(function (e) {
                        return e.value.aspectRatio === t
                    }) ? t : n[0].value.aspectRatio
                }, GET_CROP_RECTANGLE_ASPECT_RATIO: function () {
                    var t = e.crop, n = t.rectangle, r = t.aspectRatio;
                    return n ? n.width / n.height : r
                }, GET_CROP: function (t, n) {
                    var r = Ke[t];
                    if (r && r.ts === n) return r;
                    var i = lt(e);
                    return i && (i.ts = n, Ke[t] = i), i
                }, GET_COLOR_MATRIX: function () {
                    return je(e.colorMatrices)
                }, GET_COLOR_VALUES: function () {
                    return a({
                        exposure: e.options.colorExposure,
                        brightness: e.options.colorBrightness,
                        contrast: e.options.colorContrast,
                        saturation: e.options.colorSaturation
                    }, e.colorValues)
                }, GET_MARKUP_TOOL_VALUES: function () {
                    return a({
                        color: e.options.markupColor,
                        fontFamily: e.options.markupFontFamily,
                        fontSize: e.options.markupFontSize,
                        shapeStyle: e.options.markupShapeStyle,
                        lineStyle: e.options.markupLineStyle,
                        lineDecoration: e.options.markupLineDecoration
                    }, e.markupToolValues)
                }, GET_PREVIEW_IMAGE_DATA: function () {
                    return e.file.preview
                }, GET_THUMB_IMAGE_DATA: function () {
                    return e.file.thumb
                }, GET_FILTER: function () {
                    return e.filter
                }, GET_UID: function () {
                    return e.uid
                }, GET_MARKUP_BY_ID: function (t) {
                    return e.markup.find(function (e) {
                        return e[1].id === t
                    })
                }, GET_BACKGROUND_COLOR: function () {
                    var t = e.options.outputCanvasBackgroundColor;
                    if (!t) return it;
                    if (rt[t]) return rt[t];
                    var n = Xe(t);
                    return rt[t] = n.concat(1), rt[t]
                }
            }
        }, rt = {}, it = [0, 0, 0, 0], ot = function (e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2], r = t.zoom, i = t.rotation,
                o = t.center, a = t.aspectRatio, l = ke(e, a, r), c = {x: .5 * l.width, y: .5 * l.height},
                u = {x: 0, y: 0, width: l.width, height: l.height, center: c},
                s = r * ze(e, Ge(u, a), i, n ? o : {x: .5, y: .5});
            return {
                widthFloat: l.width / s,
                heightFloat: l.height / s,
                width: Math.round(l.width / s),
                height: Math.round(l.height / s)
            }
        }, at = function (e, t) {
            var n = Me(t);
            return !function (e, t) {
                return me(e.x) === me(t.x) && me(e.y) === me(t.y)
            }(Me(e), n)
        }, lt = function (e) {
            if (!e.stage || !e.image) return null;
            var t = e.crop.draft.rectangle || {free: e.crop.rectangle, limited: e.crop.rectangle},
                n = e.crop.draft.transforms || e.crop.transforms, r = n.origin, i = n.translation, o = n.scale,
                a = n.interaction, l = e.crop.rotation, c = e.crop.flip,
                u = !(!e.crop.draft.rectangle && !e.crop.draft.transforms), s = u || e.instantUpdate,
                f = at(t.limited, e.stage), h = e.crop.isDirty || u, p = e.crop.isRotating,
                g = void 0 === e.crop.limitToImageBounds || e.crop.limitToImageBounds,
                m = {width: e.image.naturalWidth, height: e.image.naturalHeight}, v = je(e.colorMatrices), y = Ye(e.image, {
                    rectangle: t.limited,
                    transforms: {origin: r, translation: i, scale: o, rotation: l.main + l.sub},
                    flip: c,
                    limitToImageBounds: e.crop.limitToImageBounds
                }), E = {
                    props: y, crop: ot(m, y, e.crop.limitToImageBounds), image: function (e, t) {
                        var n = function (e) {
                            return !1 === e.size.width ? function (e) {
                                return e.options.size ? e.options.size.width : null
                            }(e) : e.size.width
                        }(e), r = function (e) {
                            return !1 === e.size.height ? function (e) {
                                return e.options.size ? e.options.size.height : null
                            }(e) : e.size.height
                        }(e), i = t.width / t.height;
                        return Ze({width: n, height: r}, e.options.sizeMin, e.options.sizeMax, i)
                    }(e, t.limited)
                }, _ = E.image, w = E.crop, T = w.width, A = w.height, R = w.widthFloat / w.heightFloat;
            _.width && _.height ? (T = _.width, A = _.height) : _.width && !_.height ? (T = _.width, A = _.width / R) : _.height && !_.width && (A = _.height, T = _.height * R), E.currentWidth = Math.round(T), E.currentHeight = Math.round(A);
            var x = {x: 0, y: 0}, I = 0, C = 0;
            if (s && a) {
                if (a.translation) {
                    var O = a.translation.x - i.x, S = a.translation.y - i.y;
                    x.x = 100 * Math.sign(O) * Math.log10(1 + Math.abs(O) / 100), x.y = 100 * Math.sign(S) * Math.log10(1 + Math.abs(S) / 100)
                }
                if (a.scale) {
                    var M = a.scale - o;
                    I = .25 * Math.sign(M) * Math.log10(1 + Math.abs(M) / .25)
                }
                if (a.rotation) {
                    var b = a.rotation - (l.main + l.sub);
                    C = .05 * Math.sign(b) * Math.log10(1 + Math.abs(b) / .05)
                }
            }
            var L = {}, P = t.free, G = Oe(P), k = Oe(t.limited);
            return d(G, function (e) {
                var t = G[e] - k[e];
                L[e] = k[e] + 5 * Math.sign(t) * Math.log10(1 + Math.abs(t) / 5)
            }), {
                canRecenter: f,
                canReset: h,
                isDraft: s,
                isRotating: p,
                isLimitedToImageBounds: g,
                cropRect: {x: L.left, y: L.top, width: L.right - L.left, height: L.bottom - L.top},
                origin: r,
                translation: i,
                translationBand: x,
                scale: o,
                scaleBand: I,
                rotation: l,
                rotationBand: C,
                flip: c,
                interaction: a,
                cropStatus: E,
                colorMatrix: v,
                markup: e.markup
            }
        }, ct = {
            1: function () {
                return [1, 0, 0, 1, 0, 0]
            }, 2: function (e) {
                return [-1, 0, 0, 1, e, 0]
            }, 3: function (e, t) {
                return [-1, 0, 0, -1, e, t]
            }, 4: function (e, t) {
                return [1, 0, 0, -1, 0, t]
            }, 5: function () {
                return [0, 1, 1, 0, 0, 0]
            }, 6: function (e, t) {
                return [0, 1, -1, 0, t, 0]
            }, 7: function (e, t) {
                return [0, -1, -1, 0, t, e]
            }, 8: function (e) {
                return [0, -1, 1, 0, 0, e]
            }
        }, ut = function (e, t, n) {
            return -1 === n && (n = 1), ct[n](e, t)
        }, st = function (e) {
            e.width = 1, e.height = 1, e.getContext("2d").clearRect(0, 0, 1, 1)
        }, ft = function (e) {
            return e && (e.horizontal || e.vertical)
        }, dt = function (e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, i = r.canvasMemoryLimit,
                o = r.background, a = void 0 === o ? null : o, l = n.zoom || 1, c = function (e, t, n) {
                    if (t <= 1 && !ft(n)) return e.width = e.naturalWidth, e.height = e.naturalHeight, e;
                    var r = document.createElement("canvas"), i = e.naturalWidth, o = e.naturalHeight, a = t >= 5 && t <= 8;
                    a ? (r.width = o, r.height = i) : (r.width = i, r.height = o);
                    var l = r.getContext("2d");
                    if (t && l.transform.apply(l, ut(i, o, t)), ft(n)) {
                        var c = [1, 0, 0, 1, 0, 0];
                        (!a && n.horizontal || a & n.vertical) && (c[0] = -1, c[4] = i), (!a && n.vertical || a && n.horizontal) && (c[3] = -1, c[5] = o), l.transform.apply(l, c)
                    }
                    return l.drawImage(e, 0, 0, i, o), r
                }(e, t, n.flip), u = {width: c.width, height: c.height}, s = n.aspectRatio || u.height / u.width,
                f = ke(u, s, l);
            if (i) {
                var d = f.width * f.height;
                if (d > i) {
                    var h = Math.sqrt(i) / Math.sqrt(d);
                    u.width = Math.floor(u.width * h), u.height = Math.floor(u.height * h), f = ke(u, s, l)
                }
            }
            var p = document.createElement("canvas"), g = {x: .5 * f.width, y: .5 * f.height},
                m = {x: 0, y: 0, width: f.width, height: f.height, center: g}, v = void 0 === n.scaleToFit || n.scaleToFit,
                y = l * ze(u, Ge(m, s), n.rotation, v ? n.center : {x: .5, y: .5});
            p.width = Math.round(f.width / y), p.height = Math.round(f.height / y), g.x /= y, g.y /= y;
            var E = g.x - u.width * (n.center ? n.center.x : .5), _ = g.y - u.height * (n.center ? n.center.y : .5),
                w = p.getContext("2d");
            a && (w.fillStyle = a, w.fillRect(0, 0, p.width, p.height)), w.translate(g.x, g.y), w.rotate(n.rotation || 0), w.drawImage(c, E - g.x, _ - g.y, u.width, u.height);
            var T = w.getImageData(0, 0, p.width, p.height);
            return st(p), T
        };
    "undefined" != typeof window && void 0 !== window.document && (HTMLCanvasElement.prototype.toBlob || Object.defineProperty(HTMLCanvasElement.prototype, "toBlob", {
        value: function (e, t, n) {
            var r = this.toDataURL(t, n).split(",")[1];
            setTimeout(function () {
                for (var n = atob(r), i = n.length, o = new Uint8Array(i), a = 0; a < i; a++) o[a] = n.charCodeAt(a);
                e(new Blob([o], {type: t || "image/png"}))
            })
        }
    }));
    var ht = function (e, t) {
            return vt(e.x * t, e.y * t)
        }, pt = function (e, t) {
            return vt(e.x + t.x, e.y + t.y)
        }, gt = function (e) {
            var t = Math.sqrt(e.x * e.x + e.y * e.y);
            return 0 === t ? {x: 0, y: 0} : vt(e.x / t, e.y / t)
        }, mt = function (e, t, n) {
            var r = Math.cos(t), i = Math.sin(t), o = vt(e.x - n.x, e.y - n.y);
            return vt(n.x + r * o.x - i * o.y, n.y + i * o.x + r * o.y)
        }, vt = function () {
            return {
                x: arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                y: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0
            }
        }, yt = function (e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
                r = arguments.length > 3 ? arguments[3] : void 0;
            return "string" == typeof e ? parseFloat(e) * n : "number" == typeof e ? e * (r ? t[r] : Math.min(t.width, t.height)) : void 0
        }, Et = function (e, t, n) {
            var r = e.borderStyle || e.lineStyle || "solid", i = e.backgroundColor || e.fontColor || "transparent",
                o = e.borderColor || e.lineColor || "transparent", a = yt(e.borderWidth || e.lineWidth, t, n);
            return {
                "stroke-linecap": e.lineCap || "round",
                "stroke-linejoin": e.lineJoin || "round",
                "stroke-width": a || 0,
                "stroke-dasharray": "string" == typeof r ? "" : r.map(function (e) {
                    return yt(e, t, n)
                }).join(","),
                stroke: o,
                fill: i,
                opacity: e.opacity || 1
            }
        }, _t = function (e) {
            return null != e
        }, wt = function (e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
                r = yt(e.x, t, n, "width") || yt(e.left, t, n, "width"),
                i = yt(e.y, t, n, "height") || yt(e.top, t, n, "height"), o = yt(e.width, t, n, "width"),
                a = yt(e.height, t, n, "height"), l = yt(e.right, t, n, "width"), c = yt(e.bottom, t, n, "height");
            return _t(i) || (i = _t(a) && _t(c) ? t.height - a - c : c), _t(r) || (r = _t(o) && _t(l) ? t.width - o - l : l), _t(o) || (o = _t(r) && _t(l) ? t.width - r - l : 0), _t(a) || (a = _t(i) && _t(c) ? t.height - i - c : 0), {
                x: r || 0,
                y: i || 0,
                width: o || 0,
                height: a || 0
            }
        }, Tt = function (e) {
            return e.map(function (e, t) {
                return "".concat(0 === t ? "M" : "L", " ").concat(e.x, " ").concat(e.y)
            }).join(" ")
        }, At = function (e, t) {
            return Object.keys(t).forEach(function (n) {
                return e.setAttribute(n, t[n])
            })
        }, Rt = function (e, t) {
            var n = document.createElementNS("http://www.w3.org/2000/svg", e);
            return t && At(n, t), n
        }, xt = {contain: "xMidYMid meet", cover: "xMidYMid slice"}, It = {left: "start", center: "middle", right: "end"},
        Ct = function (e) {
            return function (t) {
                return Rt(e, {id: t.id})
            }
        }, Ot = {
            image: function (e) {
                var t = Rt("image", {id: e.id, "stroke-linecap": "round", "stroke-linejoin": "round", opacity: "0"});
                return t.onload = function () {
                    t.setAttribute("opacity", e.opacity || 1)
                }, t.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", e.src), t
            }, rect: Ct("rect"), ellipse: Ct("ellipse"), text: Ct("text"), path: function (e) {
                var t = Rt("g", {id: e.id}), n = Rt("path");
                t.appendChild(n);
                var r = Rt("path", {style: "stroke-width: 40; stroke-opacity: 0;"});
                return t.appendChild(r), t
            }, line: function (e) {
                var t = Rt("g", {id: e.id, "stroke-linecap": "round", "stroke-linejoin": "round"}), n = Rt("line");
                t.appendChild(n);
                var r = Rt("path");
                t.appendChild(r);
                var i = Rt("path");
                t.appendChild(i);
                var o = Rt("line", {style: "stroke-width: 40; stroke-opacity: 0;"});
                return t.appendChild(o), t
            }
        }, St = {
            rect: function (e) {
                return At(e, a({}, e.rect, e.styles))
            }, ellipse: function (e) {
                var t = e.rect.x + .5 * e.rect.width, n = e.rect.y + .5 * e.rect.height, r = .5 * e.rect.width,
                    i = .5 * e.rect.height;
                return At(e, a({cx: t, cy: n, rx: r, ry: i}, e.styles))
            }, image: function (e, t) {
                At(e, a({}, e.rect, e.styles, {preserveAspectRatio: xt[t.fit] || "none"}))
            }, text: function (e, t, n, r) {
                var i = yt(t.fontSize, n, r), o = t.fontFamily || "sans-serif", l = t.fontWeight || "normal",
                    c = It[t.textAlign] || "start";
                At(e, a({}, e.rect, e.styles, {
                    "stroke-width": 0,
                    "font-weight": l,
                    "font-size": i,
                    "font-family": o,
                    "text-anchor": c
                })), e.text !== t.text && (e.text = t.text, e.textContent = t.text.length ? t.text : " ")
            }, path: function (e, t, n, r) {
                At(e, a({}, e.styles, {fill: "none"}));
                var i = e.childNodes[0], o = e.childNodes[1], l = Tt(t.points.map(function (e) {
                    return {x: yt(e.x, n, r, "width"), y: yt(e.y, n, r, "height")}
                }));
                At(i, {d: l}), At(o, {d: l})
            }, line: function (e, t, n, r) {
                At(e, a({}, e.rect, e.styles, {fill: "none"}));
                var i = e.childNodes[0], o = e.childNodes[1], l = e.childNodes[2], c = e.childNodes[3], u = e.rect,
                    s = {x: e.rect.x + e.rect.width, y: e.rect.y + e.rect.height};
                if (At(i, {x1: u.x, y1: u.y, x2: s.x, y2: s.y}), At(c, {
                    x1: u.x,
                    y1: u.y,
                    x2: s.x,
                    y2: s.y
                }), t.lineDecoration) {
                    o.style.display = "none", l.style.display = "none";
                    var f = gt({x: s.x - u.x, y: s.y - u.y}), d = yt(.05, n, r);
                    if (-1 !== t.lineDecoration.indexOf("arrow-begin")) {
                        var h = ht(f, d), p = pt(u, h), g = mt(u, 2, p), m = mt(u, -2, p);
                        At(o, {
                            style: "display:block;",
                            d: "M".concat(g.x, ",").concat(g.y, " L").concat(u.x, ",").concat(u.y, " L").concat(m.x, ",").concat(m.y)
                        })
                    }
                    if (-1 !== t.lineDecoration.indexOf("arrow-end")) {
                        var v = ht(f, -d), y = pt(s, v), E = mt(s, 2, y), _ = mt(s, -2, y);
                        At(l, {
                            style: "display:block;",
                            d: "M".concat(E.x, ",").concat(E.y, " L").concat(s.x, ",").concat(s.y, " L").concat(_.x, ",").concat(_.y)
                        })
                    }
                }
            }
        }, Mt = function (e, t) {
            return Ot[e](t)
        }, bt = function (e, t, n, r, i) {
            "path" !== t && (e.rect = wt(n, r, i)), e.styles = Et(n, r, i), St[t](e, n, r, i)
        }, Lt = function (e, t) {
            return e[1].zIndex > t[1].zIndex ? 1 : e[1].zIndex < t[1].zIndex ? -1 : 0
        }, Pt = function () {
            var e = {
                resize: function (e, t) {
                    var n = t.mode, r = void 0 === n ? "contain" : n, i = t.upscale, a = void 0 !== i && i, u = t.width,
                        s = t.height, f = t.matrix;
                    if (f = !f || l(f) ? null : f, !u && !s) return c(e, f);
                    if (null === u ? u = s : null === s && (s = u), "force" !== r) {
                        var d = u / e.width, h = s / e.height, p = 1;
                        if ("cover" === r ? p = Math.max(d, h) : "contain" === r && (p = Math.min(d, h)), p > 1 && !1 === a) return c(e, f);
                        u = e.width * p, s = e.height * p
                    }
                    for (var g = e.width, m = e.height, v = Math.round(u), y = Math.round(s), E = e.data, _ = new Uint8ClampedArray(v * y * 4), w = g / v, T = m / y, A = Math.ceil(.5 * w), R = Math.ceil(.5 * T), x = 0; x < y; x++) for (var I = 0; I < v; I++) {
                        for (var C = 4 * (I + x * v), O = 0, S = 0, M = 0, b = 0, L = 0, P = 0, G = 0, k = (x + .5) * T, D = Math.floor(x * T); D < (x + 1) * T; D++) for (var U = Math.abs(k - (D + .5)) / R, V = (I + .5) * w, B = U * U, z = Math.floor(I * w); z < (I + 1) * w; z++) {
                            var N = Math.abs(V - (z + .5)) / A, F = Math.sqrt(B + N * N);
                            if (F >= -1 && F <= 1 && (O = 2 * F * F * F - 3 * F * F + 1) > 0) {
                                var W = E[3 + (N = 4 * (z + D * g))];
                                G += O * W, M += O, W < 255 && (O = O * W / 250), b += O * E[N], L += O * E[N + 1], P += O * E[N + 2], S += O
                            }
                        }
                        _[C] = b / S, _[C + 1] = L / S, _[C + 2] = P / S, _[C + 3] = G / M, f && o(C, _, f)
                    }
                    return {data: _, width: v, height: y}
                }, filter: c
            }, t = function (t, n) {
                var r = t.transforms, i = null;
                if (r.forEach(function (e) {
                    "filter" === e.type && (i = e)
                }), i) {
                    var o = null;
                    r.forEach(function (e) {
                        "resize" === e.type && (o = e)
                    }), o && (o.data.matrix = i.data, r = r.filter(function (e) {
                        return "filter" !== e.type
                    }))
                }
                n(function (t, n) {
                    return t.forEach(function (t) {
                        n = e[t.type](n, t.data)
                    }), n
                }(r, t.imageData))
            };
            self.onmessage = function (e) {
                t(e.data.message, function (t) {
                    self.postMessage({id: e.data.id, message: t}, [t.data.buffer])
                })
            };
            var n = 1, r = 1, i = 1;

            function o(e, t, o) {
                var a = t[e] / 255, l = t[e + 1] / 255, c = t[e + 2] / 255, u = t[e + 3] / 255,
                    s = a * o[0] + l * o[1] + c * o[2] + u * o[3] + o[4],
                    f = a * o[5] + l * o[6] + c * o[7] + u * o[8] + o[9],
                    d = a * o[10] + l * o[11] + c * o[12] + u * o[13] + o[14],
                    h = a * o[15] + l * o[16] + c * o[17] + u * o[18] + o[19], p = Math.max(0, s * h) + n * (1 - h),
                    g = Math.max(0, f * h) + r * (1 - h), m = Math.max(0, d * h) + i * (1 - h);
                t[e] = 255 * Math.max(0, Math.min(1, p)), t[e + 1] = 255 * Math.max(0, Math.min(1, g)), t[e + 2] = 255 * Math.max(0, Math.min(1, m))
            }

            var a = self.JSON.stringify([1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0]);

            function l(e) {
                return self.JSON.stringify(e || []) === a
            }

            function c(e, t) {
                if (!t || l(t)) return e;
                for (var o = e.data, a = o.length, c = t[0], u = t[1], s = t[2], f = t[3], d = t[4], h = t[5], p = t[6], g = t[7], m = t[8], v = t[9], y = t[10], E = t[11], _ = t[12], w = t[13], T = t[14], A = t[15], R = t[16], x = t[17], I = t[18], C = t[19], O = 0, S = 0, M = 0, b = 0, L = 0, P = 0, G = 0, k = 0, D = 0, U = 0, V = 0, B = 0; O < a; O += 4) P = (S = o[O] / 255) * c + (M = o[O + 1] / 255) * u + (b = o[O + 2] / 255) * s + (L = o[O + 3] / 255) * f + d, G = S * h + M * p + b * g + L * m + v, k = S * y + M * E + b * _ + L * w + T, D = S * A + M * R + b * x + L * I + C, U = Math.max(0, P * D) + n * (1 - D), V = Math.max(0, G * D) + r * (1 - D), B = Math.max(0, k * D) + i * (1 - D), o[O] = 255 * Math.max(0, Math.min(1, U)), o[O + 1] = 255 * Math.max(0, Math.min(1, V)), o[O + 2] = 255 * Math.max(0, Math.min(1, B));
                return e
            }
        }, Gt = function (e, t) {
            if (1165519206 === e.getUint32(t + 4, !1)) {
                t += 4;
                var n = 18761 === e.getUint16(t += 6, !1);
                t += e.getUint32(t + 4, n);
                var r = e.getUint16(t, n);
                t += 2;
                for (var i = 0; i < r; i++) if (274 === e.getUint16(t + 12 * i, n)) return e.setUint16(t + 12 * i + 8, 1, n), !0;
                return !1
            }
        }, kt = function (e) {
            return new Promise(function (t) {
                var n = new FileReader;
                n.onload = function () {
                    return t(function (e) {
                        var t = new DataView(e);
                        if (65496 !== t.getUint16(0)) return null;
                        for (var n, r, i = 2, o = !1; i < t.byteLength && (n = t.getUint16(i, !1), r = t.getUint16(i + 2, !1) + 2, n >= 65504 && n <= 65519 || 65534 === n) && (o || (o = Gt(t, i)), !(i + r > t.byteLength));) i += r;
                        return e.slice(0, i)
                    }(n.result) || null)
                }, n.readAsArrayBuffer(e.slice(0, 262144))
            })
        }, Dt = function (e, t) {
            var n = window.BlobBuilder = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder || window.MSBlobBuilder;
            if (n) {
                var r = new n;
                return r.append(e), r.getBlob(t)
            }
            return new Blob([e], {type: t})
        }, Ut = function (e) {
            var t = new Blob(["(", e.toString(), ")()"], {type: "application/javascript"}), n = URL.createObjectURL(t),
                r = new Worker(n), i = [];
            return {
                transfer: function () {
                }, post: function (e, t, n) {
                    var o = Math.random().toString(36).substr(2, 9);
                    i[o] = t, r.onmessage = function (e) {
                        var t = i[e.data.id];
                        t && (t(e.data.message), delete i[e.data.id])
                    }, r.postMessage({id: o, message: e}, n)
                }, terminate: function () {
                    r.terminate(), URL.revokeObjectURL(n)
                }
            }
        }, Vt = function (e, t) {
            return new Promise(function (n) {
                var r = {width: e.width, height: e.height}, i = e.getContext("2d");
                (function (e) {
                    return e.reduce(function (e, t) {
                        return e.then(function (e) {
                            return t().then(Array.prototype.concat.bind(e))
                        })
                    }, Promise.resolve([]))
                })(t.sort(Lt).map(function (e) {
                    return function () {
                        return new Promise(function (t) {
                            Nt[e[0]](i, r, e[1], t) && t()
                        })
                    }
                })).then(function () {
                    return n(e)
                })
            })
        }, Bt = function (e, t) {
            e.beginPath(), e.lineCap = t["stroke-linecap"], e.lineJoin = t["stroke-linejoin"], e.lineWidth = t["stroke-width"], t["stroke-dasharray"].length && e.setLineDash(t["stroke-dasharray"].split(",")), e.fillStyle = t.fill, e.strokeStyle = t.stroke, e.globalAlpha = t.opacity || 1
        }, zt = function (e) {
            e.fill(), e.stroke(), e.globalAlpha = 1
        }, Nt = {
            rect: function (e, t, n) {
                var r = wt(n, t), i = Et(n, t);
                return Bt(e, i), e.rect(r.x, r.y, r.width, r.height), zt(e), !0
            }, ellipse: function (e, t, n) {
                var r = wt(n, t), i = Et(n, t);
                Bt(e, i);
                var o = r.x, a = r.y, l = r.width, c = r.height, u = l / 2 * .5522848, s = c / 2 * .5522848, f = o + l,
                    d = a + c, h = o + l / 2, p = a + c / 2;
                return e.moveTo(o, p), e.bezierCurveTo(o, p - s, h - u, a, h, a), e.bezierCurveTo(h + u, a, f, p - s, f, p), e.bezierCurveTo(f, p + s, h + u, d, h, d), e.bezierCurveTo(h - u, d, o, p + s, o, p), zt(e), !0
            }, image: function (e, t, n, r) {
                var i = wt(n, t), o = Et(n, t);
                Bt(e, o);
                var a = new Image;
                a.onload = function () {
                    if ("cover" === n.fit) {
                        var t = i.width / i.height, o = t > 1 ? a.width : a.height * t, l = t > 1 ? a.width / t : a.height,
                            c = .5 * a.width - .5 * o, u = .5 * a.height - .5 * l;
                        e.drawImage(a, c, u, o, l, i.x, i.y, i.width, i.height)
                    } else if ("contain" === n.fit) {
                        var s = Math.min(i.width / a.width, i.height / a.height), f = s * a.width, d = s * a.height,
                            h = i.x + .5 * i.width - .5 * f, p = i.y + .5 * i.height - .5 * d;
                        e.drawImage(a, 0, 0, a.width, a.height, h, p, f, d)
                    } else e.drawImage(a, 0, 0, a.width, a.height, i.x, i.y, i.width, i.height);
                    zt(e), r()
                }, a.src = n.src
            }, text: function (e, t, n) {
                var r = wt(n, t), i = Et(n, t);
                Bt(e, i);
                var o = yt(n.fontSize, t), a = n.fontFamily || "sans-serif", l = n.fontWeight || "normal",
                    c = n.textAlign || "left";
                return e.font = "".concat(l, " ").concat(o, "px ").concat(a), e.textAlign = c, e.fillText(n.text, r.x, r.y), zt(e), !0
            }, line: function (e, t, n) {
                var r = wt(n, t), i = Et(n, t);
                Bt(e, i), e.beginPath();
                var o = {x: r.x, y: r.y}, a = {x: r.x + r.width, y: r.y + r.height};
                e.moveTo(o.x, o.y), e.lineTo(a.x, a.y);
                var l = gt({x: a.x - o.x, y: a.y - o.y}), c = .04 * Math.min(t.width, t.height);
                if (-1 !== n.lineDecoration.indexOf("arrow-begin")) {
                    var u = ht(l, c), s = pt(o, u), f = mt(o, 2, s), d = mt(o, -2, s);
                    e.moveTo(f.x, f.y), e.lineTo(o.x, o.y), e.lineTo(d.x, d.y)
                }
                if (-1 !== n.lineDecoration.indexOf("arrow-end")) {
                    var h = ht(l, -c), p = pt(a, h), g = mt(a, 2, p), m = mt(a, -2, p);
                    e.moveTo(g.x, g.y), e.lineTo(a.x, a.y), e.lineTo(m.x, m.y)
                }
                return zt(e), !0
            }, path: function (e, t, n) {
                var r = Et(n, t);
                Bt(e, r), e.beginPath();
                var i = n.points.map(function (e) {
                    return {x: yt(e.x, t, 1, "width"), y: yt(e.y, t, 1, "height")}
                });
                e.moveTo(i[0].x, i[0].y);
                for (var o = i.length, a = 1; a < o; a++) e.lineTo(i[a].x, i[a].y);
                return zt(e), !0
            }
        }, Ft = function (e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            return new Promise(function (r, i) {
                if (!e || !function (e) {
                    return /^image/.test(e.type)
                }(e)) return i({status: "not an image file", file: e});
                var o = n.stripImageHead, a = n.beforeCreateBlob, l = n.afterCreateBlob, c = n.canvasMemoryLimit,
                    u = t.crop, s = t.size, f = t.filter, d = t.markup, h = t.output,
                    p = t.image && t.image.orientation ? Math.max(1, Math.min(8, t.image.orientation)) : null,
                    g = h && h.quality, m = null === g ? null : g / 100, v = h && h.type || null,
                    y = h && h.background || null, E = [];
                !s || "number" != typeof s.width && "number" != typeof s.height || E.push({
                    type: "resize",
                    data: s
                }), f && 20 === f.length && E.push({type: "filter", data: f});
                var _ = function (e) {
                    var t = l ? l(e) : e;
                    Promise.resolve(t).then(r)
                }, w = function (t, n) {
                    var r = function (e) {
                        var t = document.createElement("canvas");
                        return t.width = e.width, t.height = e.height, t.getContext("2d").putImageData(e, 0, 0), t
                    }(t), l = d.length ? Vt(r, d) : r;
                    Promise.resolve(l).then(function (t) {
                        (function (e, t) {
                            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                            return new Promise(function (r) {
                                var i = n ? n(e) : e;
                                Promise.resolve(i).then(function (e) {
                                    e.toBlob(r, t.type, t.quality)
                                })
                            })
                        })(t, n, a).then(function (n) {
                            if (st(t), o) return _(n);
                            kt(e).then(function (e) {
                                null !== e && (n = new Blob([e, n.slice(20)], {type: n.type})), _(n)
                            })
                        }).catch(i)
                    })
                };
                if (/svg/.test(e.type) && null === v) return function (e, t, n, r) {
                    return new Promise(function (i) {
                        var o = r.background, a = void 0 === o ? null : o, l = new FileReader;
                        l.onloadend = function () {
                            var e = l.result, r = document.createElement("div");
                            r.style.cssText = "position:absolute;pointer-events:none;width:0;height:0;visibility:hidden;", r.innerHTML = e;
                            var o = r.querySelector("svg");
                            document.body.appendChild(r);
                            var c = o.getBBox();
                            r.parentNode.removeChild(r);
                            var u = r.querySelector("title"), s = o.getAttribute("viewBox") || "",
                                f = o.getAttribute("width") || "", d = o.getAttribute("height") || "",
                                h = parseFloat(f) || null, p = parseFloat(d) || null,
                                g = (f.match(/[a-z]+/) || [])[0] || "", m = (d.match(/[a-z]+/) || [])[0] || "",
                                v = s.split(" ").map(parseFloat),
                                y = v.length ? {x: v[0], y: v[1], width: v[2], height: v[3]} : c,
                                E = null != h ? h : y.width, _ = null != p ? p : y.height;
                            o.style.overflow = "visible", o.setAttribute("width", E), o.setAttribute("height", _);
                            var w = "";
                            if (n && n.length) {
                                var T = {width: E, height: _};
                                w = n.sort(Lt).reduce(function (e, t) {
                                    var n = Mt(t[0], t[1]);
                                    return bt(n, t[0], t[1], T), n.removeAttribute("id"), 1 === n.getAttribute("opacity") && n.removeAttribute("opacity"), e + "\n" + n.outerHTML + "\n"
                                }, ""), w = "\n\n<g>".concat(w.replace(/&nbsp;/g, " "), "</g>\n\n")
                            }
                            var A = t.aspectRatio || _ / E, R = E, x = R * A, I = void 0 === t.scaleToFit || t.scaleToFit,
                                C = ze({width: E, height: _}, Ge({
                                    width: R,
                                    height: x
                                }, A), t.rotation, I ? t.center : {x: .5, y: .5}), O = t.zoom * C,
                                S = t.rotation * (180 / Math.PI), M = {x: .5 * R, y: .5 * x},
                                b = {x: M.x - E * t.center.x, y: M.y - _ * t.center.y},
                                L = ["rotate(".concat(S, " ").concat(M.x, " ").concat(M.y, ")"), "translate(".concat(M.x, " ").concat(M.y, ")"), "scale(".concat(O, ")"), "translate(".concat(-M.x, " ").concat(-M.y, ")"), "translate(".concat(b.x, " ").concat(b.y, ")")],
                                P = ["scale(".concat(t.flip.horizontal ? -1 : 1, " ").concat(t.flip.vertical ? -1 : 1, ")"), "translate(".concat(t.flip.horizontal ? -E : 0, " ").concat(t.flip.vertical ? -_ : 0, ")")],
                                G = '<?xml version="1.0" encoding="UTF-8"?>\n<svg width="'.concat(R).concat(g, '" height="').concat(x).concat(m, '" \nviewBox="0 0 ').concat(R, " ").concat(x, '" ').concat(a ? 'style="background:' + a + '" ' : "", '\npreserveAspectRatio="xMinYMin"\nxmlns:xlink="http://www.w3.org/1999/xlink"\nxmlns="http://www.w3.org/2000/svg">\n\x3c!-- Generated by PQINA - https://pqina.nl/ --\x3e\n<title>').concat(u ? u.textContent : "", '</title>\n<g transform="').concat(L.join(" "), '">\n<g transform="').concat(P.join(" "), '">\n').concat(o.outerHTML).concat(w, "\n</g>\n</g>\n</svg>");
                            i(G)
                        }, l.readAsText(e)
                    })
                }(e, u, d, {background: y}).then(function (e) {
                    r(Dt(e, "image/svg+xml"))
                });
                var T = URL.createObjectURL(e);
                (function (e) {
                    return new Promise(function (t, n) {
                        var r = new Image;
                        r.onload = function () {
                            t(r)
                        }, r.onerror = function (e) {
                            n(e)
                        }, r.src = e
                    })
                })(T).then(function (t) {
                    URL.revokeObjectURL(T);
                    var n = dt(t, p, u, {canvasMemoryLimit: c, background: y}), r = {quality: m, type: v || e.type};
                    if (!E.length) return w(n, r);
                    var i = Ut(Pt);
                    i.post({transforms: E, imageData: n}, function (e) {
                        w(function (e) {
                            var t;
                            try {
                                t = new ImageData(e.width, e.height)
                            } catch (n) {
                                t = document.createElement("canvas").getContext("2d").createImageData(e.width, e.height)
                            }
                            return t.data.set(e.data), t
                        }(e), r), i.terminate()
                    }, [n.data.buffer])
                }).catch(i)
            })
        }, Wt = function (e, t) {
            if (1165519206 !== e.getUint32(t += 2, !1)) return -1;
            var n = 18761 === e.getUint16(t += 6, !1);
            t += e.getUint32(t + 4, n);
            var r = e.getUint16(t, n);
            t += 2;
            for (var i = 0; i < r; i++) if (274 === e.getUint16(t + 12 * i, n)) return e.getUint16(t + 12 * i + 8, n)
        }, qt = function (e) {
            return new Promise(function (t) {
                var n = new FileReader;
                n.onload = function () {
                    return t(function (e) {
                        var t = new DataView(e);
                        if (65496 != t.getUint16(0, !1)) return null;
                        for (var n, r = t.byteLength, i = 2; i < r;) {
                            if (t.getUint16(i + 2, !1) <= 8) return -1;
                            if (n = t.getUint16(i, !1), i += 2, 65505 === n) return Wt(t, i);
                            if (65280 != (65280 & n)) return null;
                            i += t.getUint16(i, !1)
                        }
                    }(n.result) || -1)
                }, n.readAsArrayBuffer(e.slice(0, 262144))
            })
        }, Ht = 1, Yt = 2, Zt = function (e, t, n) {
            var r = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3], i = e.center, o = e.zoom,
                a = e.aspectRatio, l = Me(t), c = {x: l.x - n.width * i.x, y: l.y - n.height * i.y},
                u = 2 * Math.PI + e.rotation % (2 * Math.PI),
                s = o * ze(n, Ge(t, a || n.height / n.width), u, r ? i : {x: .5, y: .5});
            return {origin: {x: i.x * n.width, y: i.y * n.height}, translation: c, scale: s, rotation: e.rotation}
        }, Xt = function (e) {
            return {origin: a({}, e.origin), translation: a({}, e.translation), rotation: e.rotation, scale: e.scale}
        }, Kt = function (e, t, n, r) {
            var i = n.translation, o = n.scale, l = n.rotation, c = n.origin,
                u = {origin: a({}, c), translation: a({}, i), scale: o, rotation: 2 * Math.PI + l % (2 * Math.PI)},
                s = e.height / e.width, f = We(c, i, u.rotation, t), d = Me(f), h = Oe(f), p = Ne(e, n), g = Me(p),
                m = {x: p.x, y: p.y}, v = {x: g.x, y: g.y}, y = d.x, E = d.y,
                _ = {x: m.x, y: m.y, width: p.width, height: p.height};
            if (!function (e, t) {
                var n = Oe(e), r = Oe(t);
                return n.left >= r.left && n.top >= r.top && n.bottom <= r.bottom && n.right <= r.right
            }(f, p)) if ("moving" === r) {
                _.y > f.y ? _.y = f.y : _.y + _.height < h.bottom && (_.y = h.bottom - _.height), _.x > f.x ? _.x = f.x : _.x + _.width < h.right && (_.x = h.right - _.width);
                var w = Ne(e, a({}, n, {scale: u.scale})), T = Me(w);
                v.x = T.x, v.y = T.y, m.x = w.x, m.y = w.y, _.x = v.x - .5 * _.width, _.y = v.y - .5 * _.height, _.y > f.y ? _.y = f.y : _.y + _.height < h.bottom && (_.y = h.bottom - _.height), _.x > f.x ? _.x = f.x : _.x + _.width < h.right && (_.x = h.right - _.width);
                var A = {x: _.x - m.x, y: _.y - m.y}, R = {
                    x: A.x * Math.cos(u.rotation) - A.y * Math.sin(u.rotation),
                    y: A.x * Math.sin(u.rotation) + A.y * Math.cos(u.rotation)
                };
                u.translation.x += R.x, u.translation.y += R.y
            } else if ("resizing" === r) {
                p.width < f.width && (_.width = f.width, _.height = _.width * s, _.height < f.height && (_.height = f.height, _.width = _.height / s)), p.height < f.height && (_.height = f.height, _.width = _.height / s, _.width < f.width && (_.width = f.width, _.height = _.width * s)), _.x = v.x - .5 * _.width, _.y = v.y - .5 * _.height, _.y > f.y ? _.y = f.y : _.y + _.height < h.bottom && (_.y = h.bottom - _.height), _.x > f.x ? _.x = f.x : _.x + _.width < h.right && (_.x = h.right - _.width), u.scale = ze(e, t, u.rotation, {
                    x: (y - _.x) / _.width,
                    y: (E - _.y) / _.height
                });
                var x = Ne(e, a({}, n, {scale: u.scale})), I = Me(x);
                v.x = I.x, v.y = I.y, m.x = x.x, m.y = x.y, _.x = v.x - .5 * _.width, _.y = v.y - .5 * _.height, _.y > f.y ? _.y = f.y : _.y + _.height < h.bottom && (_.y = h.bottom - _.height), _.x > f.x ? _.x = f.x : _.x + _.width < h.right && (_.x = h.right - _.width);
                var C = {x: _.x - m.x, y: _.y - m.y}, O = {
                    x: C.x * Math.cos(u.rotation) - C.y * Math.sin(u.rotation),
                    y: C.x * Math.sin(u.rotation) + C.y * Math.cos(u.rotation)
                };
                u.translation.x += O.x, u.translation.y += O.y
            } else if ("rotating" === r) {
                var S = !1;
                if (_.y > f.y) {
                    var M = _.y - f.y;
                    _.y = f.y, _.height += 2 * M, S = !0
                }
                if (_.y + _.height < h.bottom) {
                    var b = h.bottom - (_.y + _.height);
                    _.y = h.bottom - _.height, _.height += 2 * b, S = !0
                }
                if (_.x > f.x) {
                    var L = _.x - f.x;
                    _.x = f.x, _.width += 2 * L, S = !0
                }
                if (_.x + _.width < h.right) {
                    var P = h.right - (_.x + _.width);
                    _.x = h.right - _.width, _.width += 2 * P, S = !0
                }
                S && (u.scale = ze(e, t, u.rotation, {x: (y - p.x) / p.width, y: (E - p.y) / p.height}))
            }
            return a({}, u, {rotation: n.rotation})
        }, jt = {
            n: function (e) {
                return {x: e.x + .5 * e.width, y: e.y}
            }, e: function (e) {
                return {x: e.x + e.width, y: e.y + .5 * e.height}
            }, s: function (e) {
                return {x: e.x + .5 * e.width, y: e.y + e.height}
            }, w: function (e) {
                return {x: e.x, y: e.y + .5 * e.height}
            }
        }, Qt = function (e, t) {
            return jt[e](t)
        }, Jt = function (e, t, n) {
            var r = n.origin, i = n.translation, o = 2 * Math.PI + n.rotation % (2 * Math.PI), l = Ne(e, n),
                c = {x: r.x + i.x, y: r.y + i.y}, u = We(r, i, o, t), s = Oe(u), f = Oe(l), d = l;
            if (s.top < f.top || s.right > f.right || s.bottom > f.bottom || s.left < f.left) {
                var h = a({}, f);
                if (s.top <= h.top) {
                    var p = h.bottom - h.top, g = h.right - h.left, m = Math.max(1, u.height / p), v = p * m, y = g * m - g;
                    h.bottom = s.top + v, h.top = s.top, h.left -= .5 * y, h.right += .5 * y
                }
                if (s.bottom >= h.bottom) {
                    var E = h.bottom - h.top, _ = h.right - h.left, w = Math.max(1, u.height / E), T = E * w, A = _ * w - _;
                    h.bottom = s.bottom, h.top = s.bottom - T, h.left -= .5 * A, h.right += .5 * A
                }
                if (s.left <= h.left) {
                    var R = h.bottom - h.top, x = h.right - h.left, I = Math.max(1, u.width / x), C = x * I, O = R * I - R;
                    h.right = s.left + C, h.left = s.left, h.top -= .5 * O, h.bottom += .5 * O
                }
                if (s.right >= h.right) {
                    var S = h.bottom - h.top, M = h.right - h.left, b = Math.max(1, u.width / M), L = M * b, P = S * b - S;
                    h.right = s.right, h.left = s.right - L, h.top -= .5 * P, h.bottom += .5 * P
                }
                d = Le(h.left, h.top, h.right - h.left, h.bottom - h.top)
            }
            var G = be(d), k = Me(d), D = Te(G.tl, o, c), U = Te(G.br, o, c), V = D.x + .5 * (U.x - D.x),
                B = D.y + .5 * (U.y - D.y), z = xe(d, {x: V - k.x, y: B - k.y}), N = xe(u, {x: V - k.x, y: B - k.y}),
                F = Me(N), W = {x: z.x, y: z.y}, q = z.width, H = z.height, Y = (F.x - W.x) / q, Z = (F.y - W.y) / H,
                X = q / e.width, K = {x: Y * e.width, y: Z * e.height}, j = 1 - X, Q = K.x * j, J = K.y * j,
                $ = {x: W.x + q * Y, y: W.y + H * Z}, ee = Te(W, o, {x: W.x + .5 * q, y: W.y + .5 * H}), te = Te(W, o, $),
                ne = ee.x - te.x, re = ee.y - te.y;
            return {origin: K, translation: {x: W.x - Q + ne, y: W.y - J + re}, scale: X, rotation: n.rotation}
        }, $t = {
            nw: function (e) {
                return {x: e.x, y: e.y}
            }, ne: function (e) {
                return {x: e.x + e.width, y: e.y}
            }, se: function (e) {
                return {x: e.x + e.width, y: e.y + e.height}
            }, sw: function (e) {
                return {x: e.x, y: e.y + e.height}
            }
        }, en = function (e, t) {
            return $t[e](t)
        }, tn = Math.PI / 2, nn = Math.PI / 4, rn = function (e) {
            var t = me(nn), n = me(tn), r = e / n, i = Math.floor(r) * n, o = e - i;
            return o > t && (o -= n, i += n), {main: i, sub: o}
        }, on = function (e, t) {
            var n = {width: e.width, height: e.height};
            if (e.width > t.width || e.height > t.height) {
                var r = e.height / e.width, i = t.width / e.width, o = t.height / e.height;
                i < o ? (n.width = e.width * i, n.height = n.width * r) : (n.height = e.height * o, n.width = n.height / r)
            }
            return n
        }, an = function (e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
            return (t + e).slice(-t.length)
        }, ln = function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Date;
            return "".concat(e.getFullYear(), "-").concat(an(e.getMonth() + 1, "00"), "-").concat(an(e.getDate(), "00"), "_").concat(an(e.getHours(), "00"), "-").concat(an(e.getMinutes(), "00"), "-").concat(an(e.getSeconds(), "00"))
        }, cn = function (e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, i = e("GET_CROP_ASPECT_RATIO"),
                o = {center: {x: .5, y: .5}, flip: {horizontal: !1, vertical: !1}, zoom: 1, rotation: 0, aspectRatio: null};
            n ? Object.assign(o, n) : t.options.crop ? Object.assign(o, t.options.crop) : o.aspectRatio = i;
            var a = r.width, l = r.height;
            if (a && l) o.aspectRatio = l / a; else if (t.instructions.size) {
                var c = t.instructions.size, u = c.width, s = c.height;
                u && s && (o.aspectRatio = s / u)
            }
            return o
        }, un = function (e) {
            return e.charAt(0).toUpperCase() + e.slice(1)
        }, sn = {jpeg: "jpg", "svg+xml": "svg"}, fn = function (e) {
            return Array.isArray(e) && 20 === e.length
        }, dn = ["x", "y", "left", "top", "right", "bottom", "width", "height"], hn = function (e) {
            var t = l(e, 2), n = t[0], r = t[1], i = !1 !== r.allowSelect, o = !1 !== r.allowMove, c = !1 !== r.allowResize,
                u = !1 !== r.allowInput, s = !1 !== r.allowDestroy, f = void 0 === r.allowEdit || r.allowEdit;
            (!0 === r.allowResize || !0 === r.allowMove || !0 === r.allowInput || r.allowEdit) && (i = !0), !1 === r.allowMove && (c = !1), !0 === r.allowResize && (o = !0);
            var d = r.points ? {} : dn.reduce(function (e, t) {
                return e[t] = function (e) {
                    return "string" == typeof e && /%/.test(e) ? parseFloat(e) / 100 : e
                }(r[t]), e
            }, {});
            return r.points && (c = !1), [n, a({
                zIndex: 0,
                id: Math.random().toString(36).substr(2, 9)
            }, r, d, {
                isDestroyed: !1,
                isSelected: !1,
                isDirty: !0,
                allowDestroy: s,
                allowSelect: i,
                allowMove: o,
                allowResize: c,
                allowInput: u,
                allowEdit: f
            })]
        }, pn = void 0, gn = k() ? new Image : {};
    gn.onload = function () {
        pn = gn.naturalWidth > gn.naturalHeight, gn = void 0
    }, gn.src = "data:image/jpg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/4QA6RXhpZgAATU0AKgAAAAgAAwESAAMAAAABAAYAAAEoAAMAAAABAAIAAAITAAMAAAABAAEAAAAAAAD/2wBDAP//////////////////////////////////////////////////////////////////////////////////////wAALCAABAAIBASIA/8QAJgABAAAAAAAAAAAAAAAAAAAAAxABAAAAAAAAAAAAAAAAAAAAAP/aAAgBAQAAPwBH/9k=";
    var mn = {
            contrast: function (e) {
                return [e, 0, 0, 0, .5 * (1 - e), 0, e, 0, 0, .5 * (1 - e), 0, 0, e, 0, .5 * (1 - e), 0, 0, 0, 1, 0]
            }, exposure: function (e) {
                return [e, 0, 0, 0, 0, 0, e, 0, 0, 0, 0, 0, e, 0, 0, 0, 0, 0, 1, 0]
            }, brightness: function (e) {
                return [1, 0, 0, 0, e, 0, 1, 0, 0, e, 0, 0, 1, 0, e, 0, 0, 0, 1, 0]
            }, saturation: function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                return [.213 + .787 * e, .715 - .715 * e, .072 - .072 * e, 0, 0, .213 - .213 * e, .715 + .285 * e, .072 - .072 * e, 0, 0, .213 - .213 * e, .715 - .715 * e, .072 + .928 * e, 0, 0, 0, 0, 0, 1, 0]
            }
        }, vn = Math.PI / 2, yn = function (e) {
            var t = {
                upscale: e("GET_OUTPUT_UPSCALE"),
                mode: e("GET_OUTPUT_FIT"),
                width: e("GET_OUTPUT_WIDTH"),
                height: e("GET_OUTPUT_HEIGHT")
            }, n = e("GET_SIZE_INPUT");
            if (n.width || n.height) {
                var r = n.width, i = n.height, o = e("GET_CROP_RECTANGLE_ASPECT_RATIO");
                r && !i ? i = r / o : i && !r && (r = i * o), t.width = r, t.height = i, t.upscale = !0, t.mode = "force"
            }
            return t
        }, En = function (e, t, n) {
            return new Promise(function (r, i) {
                var o = {data: null, file: null}, l = He(t.image, t.crop), c = yn(n), u = {
                    crop: l,
                    image: a({}, function (e, t) {
                        var n = t("GET_CROP", t("GET_UID"), Date.now()),
                            r = {width: n.cropStatus.currentWidth, height: n.cropStatus.currentHeight}, i = e.mode,
                            o = e.width, a = e.height, l = e.upscale;
                        if (!o && !a) return r;
                        if (null === o ? o = a : null === a && (a = o), "force" !== i) {
                            var c = o / r.width, u = a / r.height, s = 1;
                            if ("cover" === i ? s = Math.max(c, u) : "contain" === i && (s = Math.min(c, u)), s > 1 && !1 === l) return r;
                            o = r.width * s, a = r.height * s
                        }
                        return {width: Math.round(o), height: Math.round(a)}
                    }(c, n), {orientation: t.file.orientation}),
                    size: c,
                    output: {
                        type: n("GET_OUTPUT_TYPE"),
                        quality: n("GET_OUTPUT_QUALITY"),
                        background: t.options.outputCanvasBackgroundColor
                    },
                    filter: t.colorMatrices.filter ? {
                        id: t.filterName,
                        value: t.filterValue,
                        matrix: t.colorMatrices.filter
                    } : null,
                    color: Object.keys(t.colorValues).length ? Object.keys(t.colorValues).reduce(function (e, n) {
                        return e[n] = {
                            value: t.colorValues[n], matrix: t.colorMatrices[n].map(function (e) {
                                return me(e, 5)
                            })
                        }, e
                    }, {}) : null,
                    markup: function (e) {
                        return e.map(function (e) {
                            var t = a({}, e[1]);
                            return Object.keys(t).forEach(function (e) {
                                void 0 === t[e] && delete t[e]
                            }), delete t.isDestroyed, delete t.isSelected, delete t.isDirty, [e[0], t]
                        })
                    }(function (e) {
                        return e.markup.filter(function (e) {
                            return !e[1].isDestroyed
                        })
                    }(t).map(function (e) {
                        return [e[0], a({}, e[1])]
                    })),
                    colorMatrix: n("GET_COLOR_MATRIX")
                };
                if (e.data && (o.data = u), e.file) {
                    var s = {
                        beforeCreateBlob: n("GET_BEFORE_CREATE_BLOB"),
                        afterCreateBlob: n("GET_AFTER_CREATE_BLOB"),
                        stripImageHead: n("GET_OUTPUT_STRIP_IMAGE_HEAD"),
                        canvasMemoryLimit: n("GET_OUTPUT_CANVAS_MEMORY_LIMIT")
                    }, f = t.file.data, d = a({}, u, {filter: u.colorMatrix, markup: u.markup});
                    Ft(f, d, s).then(function (e) {
                        o.file = function (e, t) {
                            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                                r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
                                i = "string" == typeof n ? e.slice(0, e.size, n) : e.slice(0, e.size, e.type);
                            return i.lastModifiedDate = new Date, q(t) || (t = ln()), t && null === r && function (e) {
                                return e.split(".").pop()
                            }(t) ? i.name = t : (r = r || function (e) {
                                if ("string" != typeof e) return "";
                                var t = e.split("/").pop();
                                return /svg/.test(t) ? "svg" : /zip|compressed/.test(t) ? "zip" : /plain/.test(t) ? "txt" : /msword/.test(t) ? "doc" : /[a-z]+/.test(t) ? "jpeg" === t ? "jpg" : t : ""
                            }(i.type), i.name = t + (r ? "." + r : "")), i
                        }(e, function (e, t) {
                            var n = function (e) {
                                return e.substr(0, e.lastIndexOf(".")) || e
                            }(e), r = t.split("/")[1], i = sn[r] || r;
                            return "".concat(n, ".").concat(i)
                        }(f.name, function (e) {
                            return /jpeg|png|svg\+xml/.test(e) ? e : "image/jpeg"
                        }(e.type))), r(o)
                    }).catch(i)
                } else r(o)
            })
        }, _n = function (e) {
            e.crop.draft.rotateMinScale = null
        }, wn = function (e, t, n) {
            var r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                i = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
            !function (e) {
                e.crop.draft.rotateMinScale || (e.crop.draft.rotateMinScale = e.crop.transforms.scale)
            }(e);
            var o = a({}, e.crop.transforms, {scale: e.crop.draft.rotateMinScale});
            e.crop.draft.transforms = Mn(e.image, e.crop.rectangle, o, t.main + t.sub, n, e.crop.draft.transforms ? e.crop.draft.transforms.rotation : e.crop.rotation.main + e.crop.rotation.sub, r, i), e.crop.rotation = rn(e.crop.draft.transforms.rotation)
        }, Tn = function (e, t) {
            if (null !== e.stage) {
                var n = void 0 === e.instructions.crop.scaleToFit ? void 0 === e.crop.limitToImageBounds ? e.options.cropLimitToImageBounds : e.crop.limitToImageBounds : e.instructions.crop.scaleToFit,
                    r = t("GET_STAGE_RECT", e.instructions.crop);
                e.crop.rectangle = Ge(r.fits ? r : e.stage, e.instructions.crop.aspectRatio || e.image.aspectRatio), e.crop.draft.rectangle = null, "stage" !== r.mode && r.fits && (e.crop.rectangle.x = r.x, e.crop.rectangle.y = r.y), e.crop.transforms = Zt(e.instructions.crop, r, e.image, n), e.crop.draft.transforms = null, e.crop.rotation = rn(e.instructions.crop.rotation), e.crop.flip = a({}, e.instructions.crop.flip);
                var i = t("GET_CROP_ASPECT_RATIO_OPTIONS") || [], o = i.map(function (e) {
                    return e.value.aspectRatio
                }).find(function (t) {
                    return t === e.instructions.crop.aspectRatio
                }), l = i.find(function (e) {
                    return null === e.value.aspectRatio
                });
                o ? e.crop.aspectRatio = o : l && i.length ? e.crop.aspectRatio = null : e.crop.aspectRatio = t("GET_CROP_ASPECT_RATIO"), e.crop.isDirty = !1
            }
        }, An = function (e, t, n) {
            if (null !== e.stage) {
                Cn(e), e.size.width = !!e.instructions.size && e.instructions.size.width, e.size.height = !!e.instructions.size && e.instructions.size.height, e.size.aspectRatioLocked = !0, e.size.aspectRatioPrevious = !1;
                var r = void 0 === e.instructions.crop.scaleToFit ? void 0 === e.crop.limitToImageBounds ? e.options.cropLimitToImageBounds : e.crop.limitToImageBounds : e.instructions.crop.scaleToFit;
                Tn(e, t), e.instructions.markup && n("MARKUP_SET_VALUE", {value: e.instructions.markup}), n("CROP_SET_LIMIT", {
                    value: r,
                    silent: !0
                }), Object.keys(e.instructions.color).forEach(function (t) {
                    return n("COLOR_SET_VALUE", {key: t, value: e.instructions.color[t]})
                }), n("FILTER_SET_VALUE", {value: e.instructions.filter}), _n(e)
            }
        }, Rn = function (e, t) {
            if (e.stage) {
                Cn(e);
                var n = e.crop.rectangle, r = n.height / n.width, i = e.crop.aspectRatio;
                if (null !== i && me(r, 3) !== me(i, 3)) {
                    var o = t("GET_MIN_CROP_SIZE");
                    o.width = me(o.width), o.height = me(o.height);
                    var l = Math.min(n.width, n.height);
                    Math.min(l * i, l / i) < Math.max(o.width, o.height) && (e.crop.rectangle = function (e, t, n) {
                        var r = Ce(e);
                        return r.width = Math.min(r.height, r.width), r.height = r.width, r.height = r.width * t, r.height < n.height && (r.height = n.height, r.width = r.height / t), r.width < n.width && (r.width = n.width, r.height = r.width * t), r
                    }(a({}, e.crop.rectangle), i, o), e.crop.draft.transforms = Jt(e.image, e.crop.rectangle, e.crop.transforms))
                }
                var c = e.crop.draft.transforms || e.crop.transforms,
                    u = qe(e.image, e.crop.rectangle, c, e.crop.limitToImageBounds);
                e.crop.aspectRatio && (u.aspectRatio = e.crop.aspectRatio);
                var s = t("GET_STAGE_RECT", u);
                e.crop.transforms = Zt(u, s, e.image, u.scaleToFit), e.crop.draft.transforms = null;
                var f = e.crop.aspectRatio || e.crop.rectangle.height / e.crop.rectangle.width;
                e.crop.rectangle = Ge(s, f), e.crop.draft.rectangle = null, "stage" !== s.mode && (e.crop.rectangle.x += s.x, e.crop.rectangle.y += s.y), _n(e)
            }
        }, xn = function (e, t, n) {
            var r = t("GET_CROP_ZOOM_TIMEOUT");
            r && (clearTimeout(e.zoomTimeoutId), e.zoomTimeoutId = setTimeout(function () {
                n("CROP_ZOOM")
            }, r))
        }, In = function (e, t, n) {
            Cn(e), xn(e, t, n)
        }, Cn = function (e) {
            clearTimeout(e.zoomTimeoutId)
        }, On = function (e) {
            e.crop.draft.transforms = Xt(e.crop.transforms), e.crop.draft.rectangle = {
                limited: Ce(e.crop.rectangle),
                free: Ce(e.crop.rectangle)
            }, Cn(e)
        }, Sn = function (e, t) {
            return Math.min(e.width / t.width, e.height / t.height)
        }, Mn = function (e, t, n, r, i, o, l, c) {
            var u = a({}, Xt(n), {rotation: r}), s = c ? Kt(e, t, u, "rotating") : u, f = Sn(t, i);
            return me(s.scale, 5) > me(f, 5) ? (l && (o += 2 * l), a({}, Xt(n), {
                rotation: o,
                interaction: {rotation: s.rotation}
            })) : (s.scale = Math.min(f, s.scale), s.interaction = {rotation: s.rotation}, s)
        }, bn = function (e, t, n, r, i, o) {
            var l = Math.max(1e-10, r), c = a({}, Xt(n), {scale: l}), u = o ? Kt(e, t, c, "resizing") : c, s = Sn(t, i);
            return u.scale = Math.min(s, u.scale), u.interaction = {scale: l}, u
        }, Ln = function (e) {
            e.crop.draft.rectangle = null, e.crop.transforms = e.crop.draft.transforms || e.crop.transforms, e.crop.transforms.interaction = null, e.crop.draft.transforms = null, e.crop.transforms = a({}, e.crop.transforms, function (e, t, n) {
                var r = n.origin, i = n.translation, o = n.scale, a = 2 * Math.PI + n.rotation % (2 * Math.PI),
                    l = {x: r.x + i.x, y: r.y + i.y}, c = We(r, i, a, t), u = Ne(e, n), s = be(u), f = Me(u),
                    d = Te(s.tl, a, l), h = Te(s.br, a, l), p = d.x + .5 * (h.x - d.x), g = d.y + .5 * (h.y - d.y),
                    m = xe(u, {x: p - f.x, y: g - f.y}), v = xe(c, {x: p - f.x, y: g - f.y}), y = Me(v),
                    E = {x: m.x, y: m.y}, _ = m.width, w = m.height, T = (y.x - E.x) / _, A = (y.y - E.y) / w,
                    R = {x: T * e.width, y: A * e.height}, x = 1 - o, I = R.x * x, C = R.y * x,
                    O = {x: E.x + _ * T, y: E.y + w * A}, S = Te(E, a, {x: E.x + .5 * _, y: E.y + .5 * w}), M = Te(E, a, O),
                    b = S.x - M.x, L = S.y - M.y;
                return {origin: ve(R), translation: ve({x: E.x - I + b, y: E.y - C + L})}
            }(e.image, e.crop.rectangle, e.crop.transforms)), e.crop.isRotating = !1, e.crop.isDirty = !0
        }, Pn = function (e, t) {
            return e.getAllResponseHeaders().indexOf(t) >= 0 ? e.getResponseHeader(t) : null
        }, Gn = function (e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = t.progress,
                r = void 0 === n ? function (e) {
                } : n, i = t.load, o = void 0 === i ? function (e, t) {
                } : i, a = t.error, l = void 0 === a ? function () {
                } : a, c = new XMLHttpRequest;
            c.onprogress = function (e) {
                return r(e.lengthComputable ? e.loaded / e.total : null)
            }, c.onerror = function () {
                return l(c)
            }, c.onload = function () {
                var e = c.response;
                if (!e) return l(c);
                var t = c.getResponseHeader("Content-Type"), n = Pn(c, "Content-Disposition"), r = n ? function (e) {
                    if (!e) return null;
                    var t = e.split(/filename=|filename\*=.+''/).splice(1).map(function (e) {
                        return e.trim().replace(/^["']|[;"']{0,2}$/g, "")
                    }).filter(function (e) {
                        return e.length
                    });
                    return t.length ? decodeURI(t[t.length - 1]) : null
                }(n) : null, i = Pn(c, "Content-Doka"), a = null;
                if (i) try {
                    a = JSON.parse(i)
                } catch (e) {
                }
                !e.type.length && t && (function (e) {
                    throw new Error('"' + e + '" is read-only')
                }("blob"), e = e.slice(0, e.size, t)), r && (e.name = r), o(e, a)
            }, c.open("GET", e), c.responseType = "blob", c.send()
        }, kn = function (e, t) {
            var n = t.progress;
            return new Promise(function (t, r) {
                if (q(e)) {
                    var i = function (e) {
                        return /^data:/.test(e)
                    }(e);
                    return i && /MSIE|Trident/.test(window.navigator.userAgent) ? t({
                        file: function (e) {
                            for (var t = e.split(","), n = t[0].match(/([a-z]+\/[a-z]+)/)[0], r = atob(t[1]), i = r.length, o = new ArrayBuffer(r.length), a = new Uint8Array(o), l = 0; l < i; l++) a[l] = r.charCodeAt(l);
                            return new Blob([o], {type: n})
                        }(e)
                    }) : void Gn(e, {
                        progress: i ? function () {
                        } : n, error: r, load: function (e, n) {
                            return t({file: e, fileInstructions: n})
                        }
                    })
                }
                if (e instanceof Blob) t({file: e}); else {
                    if ("IMG" === e.nodeName) {
                        var o = function (e) {
                            var n = document.createElement("canvas");
                            n.width = e.naturalWidth, n.height = e.naturalHeight, n.getContext("2d").drawImage(e, 0, 0), n.toBlob(function (e) {
                                return t({file: e})
                            })
                        };
                        return e.complete ? void o(e) : void (e.onload = function () {
                            return o(e)
                        })
                    }
                    "CANVAS" !== e.nodeName ? r(e) : e.toBlob(function (e) {
                        return t({file: e})
                    })
                }
            })
        }, Dn = function (e) {
            return !1 === e.file
        }, Un = function (e, t, n) {
            return a({
                SET_UID: function (e) {
                    var t = e.id;
                    n.uid = t
                }, AWAIT_IMAGE: function () {
                    n.file || (n.noImageTimeout = setTimeout(function () {
                        e("AWAITING_IMAGE")
                    }, 250))
                }, REQUEST_REMOVE_IMAGE: function () {
                    e("UNLOAD_IMAGE"), n.file = !1, n.noImageTimeout = setTimeout(function () {
                        e("AWAITING_IMAGE")
                    }, 500)
                }, DID_UNLOAD_IMAGE: function () {
                    e("ABORT_IMAGE")
                }, REQUEST_ABORT_IMAGE: function (t) {
                    e("UNLOAD_IMAGE"), n.file = !1, n.queuedFile = t
                }, DID_SET_SRC: function (t) {
                    t.value !== t.prevValue && (clearTimeout(n.noImageTimeout), e("REQUEST_LOAD_IMAGE", {source: t.value}))
                }, ABORT_IMAGE: function () {
                    if (n.file = null, n.queuedFile) {
                        var t = n.queuedFile;
                        n.queuedFile = null, e("REQUEST_LOAD_IMAGE", t)
                    }
                }, REQUEST_LOAD_IMAGE: function (t) {
                    var r = t.source, i = t.success, o = void 0 === i ? function () {
                    } : i, a = t.failure, l = void 0 === a ? function (e) {
                    } : a, c = t.options, u = t.resolveOnConfirm, s = void 0 !== u && u;
                    if (clearTimeout(n.noImageTimeout), !r) return l("no-image-source");
                    null === n.file ? ($(n), n.file = {uid: te()}, e("DID_REQUEST_LOAD_IMAGE", {source: r}), kn(r, {
                        progress: function (t) {
                            return null !== t && e("DID_MAKE_PROGRESS", {progress: t})
                        }
                    }).then(function (t) {
                        var r = t.file, i = t.fileInstructions;
                        if (!c && i) {
                            var a = i.crop, u = i.filter, f = i.colorMatrix, d = i.color, h = i.markup, p = i.size;
                            c = {crop: a, filter: u ? u.id || u.matrix : f, color: d, markup: h, size: p}
                        }
                        if (Dn(n)) return e("ABORT_IMAGE");
                        r.name || (r.name = ln()), n.file.orientation = -1, n.file.data = r, e("LOAD_IMAGE", {
                            success: o,
                            failure: l,
                            options: c,
                            resolveOnConfirm: s
                        }, !0), e("KICK")
                    }).catch(function (t) {
                        if (Dn(n)) return e("ABORT_IMAGE");
                        e("DID_LOAD_IMAGE_ERROR", {error: {status: "IMAGE_LOAD_ERROR", data: t}}), l(t)
                    })) : e("REQUEST_ABORT_IMAGE", {source: r, success: o, failure: l, options: c, resolveOnConfirm: s})
                }, LOAD_IMAGE: function (r) {
                    var i = r.success, o = r.failure, c = r.options, u = void 0 === c ? {} : c, s = r.resolveOnConfirm;
                    if (Dn(n)) return e("ABORT_IMAGE");
                    var f = n.file.data;
                    Promise.all([function (e) {
                        return new Promise(function (t, n) {
                            var r = new Image;
                            r.src = URL.createObjectURL(e), r.onerror = function (e) {
                                clearInterval(i), n(e)
                            };
                            var i = setInterval(function () {
                                r.naturalWidth && r.naturalHeight && (clearInterval(i), URL.revokeObjectURL(r.src), t({
                                    width: r.naturalWidth,
                                    height: r.naturalHeight
                                }))
                            }, 1)
                        })
                    }(f), qt(f)]).then(function (r) {
                        var c = l(r, 2), f = c[0], d = c[1];
                        if (Dn(n)) return e("ABORT_IMAGE");
                        if (n.file.orientation = t("GET_OUTPUT_CORRECT_IMAGE_EXIF_ORIENTATION") && pn ? d : -1, n.file.orientation > -1) {
                            var h = f.width, p = f.height;
                            d >= 5 && d <= 8 && (f.width = p, f.height = h)
                        }
                        var g = t("GET_MIN_IMAGE_SIZE");
                        if (f.width < g.width || f.height < g.height) return e("DID_LOAD_IMAGE_ERROR", {
                            error: {
                                status: "IMAGE_MIN_SIZE_VALIDATION_ERROR",
                                data: {size: f, minImageSize: g}
                            }
                        }), $(n), void o();
                        var m = on(f, {width: t("GET_MAX_IMAGE_PREVIEW_WIDTH"), height: t("GET_MAX_IMAGE_PREVIEW_HEIGHT")});
                        if (n.image = {
                            x: 0,
                            y: 0,
                            width: m.width,
                            height: m.height,
                            naturalWidth: f.width,
                            naturalHeight: f.height,
                            aspectRatio: f.height / f.width,
                            orientation: d
                        }, u.size && (u.size.hasOwnProperty("mode") && u.size.hasOwnProperty("upscale") ? (n.options.outputWidth = u.size.width, n.options.outputHeight = u.size.height, n.options.outputFit = u.size.mode, n.options.upscale = u.size.upscale) : (n.size.width = u.size.width, n.size.height = u.size.height, n.size.aspectRatioLocked = !0, n.size.aspectRatioPrevious = !1, n.instructions.size = {
                            width: u.size.width,
                            height: u.size.height
                        })), n.instructions.crop = cn(t, n, u.crop ? a({}, u.crop) : null, n.size), n.crop.limitToImageBounds = n.options.cropLimitToImageBounds, !1 === n.instructions.crop.scaleToFit && (n.crop.limitToImageBounds = n.instructions.crop.scaleToFit), void 0 === u.filter) n.instructions.filter = n.options.filter; else {
                            var v = u.filter;
                            n.instructions.filter = null === v ? v : v.id || v.matrix || v
                        }
                        var y = n.options.markup || [];
                        n.instructions.markup = y.concat(u.markup || []), n.instructions.color = Object.keys(mn).reduce(function (e, t) {
                            return e[t] = u.color && void 0 !== u.color[t] ? "number" == typeof u.color[t] ? u.color[t] : u.color[t].value : n.options["color".concat(un(t))], e
                        }, {}), e("DID_LOAD_IMAGE", {
                            image: a({
                                size: n.file.data.size,
                                name: n.file.data.name,
                                type: n.file.data.type,
                                orientation: d
                            }, f)
                        }), n.filePromise = {resolveOnConfirm: s, success: i, failure: o}
                    }).catch(function (t) {
                        if (Dn(n)) return e("ABORT_IMAGE");
                        e("DID_LOAD_IMAGE_ERROR", {error: {status: "IMAGE_UNKNOWN_ERROR", data: t}}), $(n), o()
                    })
                }, CHANGE_VIEW: function (t) {
                    var r = t.id;
                    n.activeView = r, e("SHOW_VIEW", {id: r})
                }, UPDATE_ROOT_RECT: function (e) {
                    var t = e.rect;
                    n.rootRect = t
                }, DID_RESIZE_STAGE: function (r) {
                    var i = r.size, o = r.offset, a = r.animate, l = null === n.stage;
                    if (n.stage = Le(0, 0, i.width, i.height), n.stageOffset = Ae(o.x, o.y), !t("GET_ALLOW_PREVIEW_FIT_TO_VIEW")) {
                        var c = t("GET_IMAGE_STAGE_RECT");
                        n.stage = Le(0, 0, c.width, c.height), n.stageOffset = Ae(n.stageOffset.x + c.x, n.stageOffset.y + c.y)
                    }
                    if (l) {
                        if (An(n, t, e), e("DID_SHOW_IMAGE", {
                            image: {
                                size: n.file.data.size,
                                name: n.file.data.name,
                                type: n.file.data.type,
                                orientation: n.image.orientation,
                                width: n.image.naturalWidth,
                                height: n.image.naturalHeight
                            }
                        }), !n.filePromise.resolveOnConfirm) {
                            var u = He(n.image, n.crop), s = yn(t);
                            n.filePromise.success({
                                crop: u,
                                image: {orientation: n.file.orientation},
                                size: s,
                                output: {type: t("GET_OUTPUT_TYPE"), quality: t("GET_OUTPUT_QUALITY")}
                            })
                        }
                    } else n.instantUpdate = !a, Rn(n, t), setTimeout(function () {
                        n.instantUpdate = !1
                    }, 16)
                }, RESIZE_SET_OUTPUT_SIZE_ASPECT_RATIO_LOCK: function (e) {
                    var t = e.value;
                    n.size.aspectRatioLocked = t
                }, RESIZE_SET_OUTPUT_SIZE: function (r) {
                    var i = r.width, o = r.height, a = Ze({
                        width: i = i || null,
                        height: o = o || null
                    }, t("GET_SIZE_MIN"), t("GET_SIZE_MAX"), t("GET_CROP_RECTANGLE_ASPECT_RATIO"));
                    if (n.size.width = a.width ? Math.round(a.width) : null, n.size.height = a.height ? Math.round(a.height) : null, i && o) {
                        var l = o / i;
                        if (l === n.crop.aspectRatio) return;
                        !1 === n.size.aspectRatioPrevious && (n.size.aspectRatioPrevious = n.crop.aspectRatio), e("CROP_SET_ASPECT_RATIO", {value: l})
                    } else !1 !== n.size.aspectRatioPrevious && (e("CROP_SET_ASPECT_RATIO", {value: n.size.aspectRatioPrevious}), n.size.aspectRatioPrevious = !1)
                }, CROP_SET_ASPECT_RATIO: function (e) {
                    var r = e.value;
                    if (Cn(n), n.crop.aspectRatio = q(r) ? Pe(r) : r, n.crop.aspectRatio && Rn(n, t), n.crop.isDirty = !0, n.size.width && n.size.height) if (n.crop.aspectRatio) {
                        var i = n.size.width * n.crop.aspectRatio,
                            o = ge(i, t("GET_SIZE_MIN").height, t("GET_SIZE_MAX").height);
                        n.size.height = o, n.size.width = o / n.crop.aspectRatio
                    } else n.size.height = null
                }, DID_SET_CROP_ASPECT_RATIO: function (t) {
                    var n = t.value, r = t.prevValue;
                    Pe(n) !== Pe(r) && e("CROP_SET_ASPECT_RATIO", {value: n})
                }, CROP_ZOOM: function () {
                    n.stage && (Cn(n), Rn(n, t))
                }, DID_SET_CROP_LIMIT_TO_IMAGE_BOUNDS: function (t) {
                    var r = t.value, i = t.prevValue;
                    n.crop.limitToImageBounds = r, !1 === i && !0 === r && e("CROP_ENABLED_LIMIT_TO_IMAGE_BOUNDS")
                }, CROP_ENABLED_LIMIT_TO_IMAGE_BOUNDS: function () {
                    var e = n.stage, r = n.image;
                    if (n.crop.rectangle) {
                        var i = n.crop.rectangle.height / n.crop.rectangle.width, o = Ge(e, i);
                        n.crop.rectangle = o, n.crop.transforms = Kt(r, n.crop.rectangle, n.crop.transforms, "moving"), n.crop.transforms = Kt(r, n.crop.rectangle, n.crop.transforms, "resizing"), n.crop.transforms = Kt(r, n.crop.rectangle, n.crop.transforms, "rotating"), n.crop.draft.rectangle = null, n.crop.draft.transforms = null, Rn(n, t)
                    }
                }, CROP_SET_LIMIT: function (t) {
                    var r = t.value, i = t.silent, o = void 0 !== i && i, a = n.crop.limitToImageBounds !== r;
                    n.crop.limitToImageBounds = r, a && !o && (n.crop.isDirty = !0), a && r && e("CROP_ENABLED_LIMIT_TO_IMAGE_BOUNDS")
                }, CROP_IMAGE_RESIZE_GRAB: function () {
                    On(n), Cn(n)
                }, CROP_IMAGE_ROTATE_GRAB: function () {
                    On(n), Cn(n), n.crop.isRotating = !0
                }, CROP_RECT_DRAG_GRAB: function () {
                    On(n), Cn(n)
                }, CROP_RECT_DRAG_RELEASE: function () {
                    (function (e) {
                        e.crop.rectangle = e.crop.draft.rectangle.limited, e.crop.draft.rectangle = null, Ln(e), _n(e)
                    })(n), xn(n, t, e)
                }, CROP_RECT_EDGE_DRAG: function (e) {
                    var r = e.offset, i = e.origin, o = e.anchor, a = n.image, l = n.stage, c = /n|s/.test(i) ? Yt : Ht,
                        u = Qt(i, n.crop.rectangle), s = Qt(o, n.crop.rectangle),
                        f = we({x: u.x + (c === Ht ? r.x : 0), y: u.y + (c === Yt ? r.y : 0)}, l),
                        d = t("GET_MIN_CROP_SIZE"), h = t("GET_MAX_CROP_SIZE");
                    d.width = me(d.width), d.height = me(d.height);
                    var p = Sn(n.crop.rectangle, t("GET_MIN_PREVIEW_IMAGE_SIZE")) / (n.crop.draft.transforms.scale || n.crop.transforms.scale);
                    h.width = me(h.width * p), h.height = me(h.height * p);
                    var g = {x: Math.sign(u.x - s.x), y: Math.sign(u.y - s.y)};
                    n.crop.draft.rectangle = function (e, t, n, r, i, o, a, l, c) {
                        var u = o.left, s = o.right, f = o.top, d = o.bottom, h = s - u, p = d - f, g = i.left, m = i.right,
                            v = i.top, y = i.bottom;
                        if (n === Yt) {
                            if (v = e.y > 0 ? r.y : Math.min(r.y, Math.max(t.y, f)), y = e.y > 0 ? Math.max(r.y, Math.min(t.y, d)) : r.y, a) {
                                var E = (y - v) / a;
                                g = r.x - .5 * E, m = r.x + .5 * E
                            }
                        } else if (g = e.x > 0 ? r.x : Math.min(r.x, Math.max(t.x, u)), m = e.x > 0 ? Math.max(r.x, Math.min(t.x, s)) : r.x, a) {
                            var _ = (m - g) * a;
                            v = r.y - .5 * _, y = r.y + .5 * _
                        }
                        var w, T, A, R, x = l.width, I = l.height;
                        if (n === Yt ? (w = r.x - .5 * x, T = r.x + .5 * x, e.y < 0 ? (A = r.y - I, R = r.y) : e.y > 0 && (A = r.y, R = r.y + I)) : (A = r.y - .5 * I, R = r.y + .5 * I, e.x < 0 ? (w = r.x - x, T = r.x) : e.x > 0 && (w = r.x, T = r.x + x)), a) if (n === Yt) {
                            var C = Math.min((y - v) / a, h), O = C * a;
                            g < u && (m = (g = u) + C), m > s && (g = (m = s) - C), r.x = g + .5 * C, e.y < 0 ? v = r.y - O : e.y > 0 && (y = r.y + O)
                        } else {
                            var S = Math.min((m - g) * a, p), M = S / a;
                            v < f && (y = (v = f) + S), y > d && (v = (y = d) - S), r.y = v + .5 * S, e.x < 0 ? g = r.x - M : e.x > 0 && (m = r.x + M)
                        }
                        var b = Se({top: v, right: m, bottom: y, left: g}), L = function () {
                            var t = x * a;
                            n === Ht ? (v = r.y - .5 * t, y = r.y + .5 * t) : e.y < 0 ? (y = r.y, v = y - t) : e.y > 0 && (v = r.y, y = v + t)
                        }, P = function () {
                            var t = I / a;
                            n === Yt ? (g = r.x - .5 * t, m = r.x + .5 * t) : e.x < 0 ? (m = r.x, g = m - t) : e.x > 0 && (g = r.x, m = g + t)
                        };
                        m < T && (m = T, g = T - x, a && L()), g > w && (g = w, m = w + x, a && L()), v > A && (v = A, y = A + I, a && P()), y < R && (y = R, v = R - I, a && P());
                        var G = c.width, k = c.height;
                        if (a && (a < 1 ? G = k / a : k = G * a), m - g > G && (e.x < 0 ? g = r.x - G : m = r.x + G), y - v > k && (e.y < 0 ? v = r.y - k : y = r.y + k), m - g == 0 && (e.x > 0 ? m = r.x + 2 : g = r.x - 2), y - v == 0 && (e.y > 0 ? y = r.y + 2 : v = r.y - 2), Math.round(g) < u || Math.round(m) > s || Math.round(v) < f || Math.round(y) > d) {
                            var D = d - f, U = s - u;
                            if (g < u) {
                                g = u;
                                var V = Math.min(m - g, U);
                                m = g + V
                            }
                            if (m > s) {
                                m = s;
                                var B = Math.min(m - g, U);
                                g = m - B
                            }
                            if (v < f) {
                                v = f;
                                var z = Math.min(y - v, D);
                                y = v + z
                            }
                            if (y > d) {
                                y = d;
                                var N = Math.min(y - v, D);
                                v = y - N
                            }
                            b = Se({top: v, right: m, bottom: y, left: g})
                        }
                        return {free: b, limited: Se({top: v, right: m, bottom: y, left: g})}
                    }(g, f, c, s, Oe(n.crop.rectangle), Oe(l), n.crop.aspectRatio, d, h), n.crop.limitToImageBounds && (n.crop.draft.transforms = Jt(a, n.crop.draft.rectangle.limited, n.crop.transforms))
                }, CROP_RECT_CORNER_DRAG: function (e) {
                    var r = e.offset, i = e.origin, o = e.anchor, a = n.image, l = n.stage, c = en(i, n.crop.rectangle),
                        u = en(o, n.crop.rectangle), s = {x: c.x + r.x, y: c.y + r.y}, f = t("GET_MIN_CROP_SIZE"),
                        d = t("GET_MAX_CROP_SIZE");
                    f.width = me(f.width), f.height = me(f.height);
                    var h = Sn(n.crop.rectangle, t("GET_MIN_PREVIEW_IMAGE_SIZE")) / (n.crop.draft.transforms.scale || n.crop.transforms.scale);
                    d.width = me(d.width * h), d.height = me(d.height * h);
                    var p = {x: Math.sign(c.x - u.x), y: Math.sign(c.y - u.y)};
                    n.crop.draft.rectangle = function (e, t, n, r, i, o, a) {
                        var l = Oe(r), c = l.left, u = l.right, s = l.top, f = l.bottom, d = we({x: t.x, y: t.y}, r),
                            h = e.x > 0 ? n.x : Math.min(d.x, n.x), p = e.x > 0 ? Math.max(n.x, d.x) : n.x,
                            g = e.y > 0 ? n.y : Math.min(d.y, n.y), m = e.y > 0 ? Math.max(n.y, d.y) : n.y;
                        if (i) {
                            var v = d.x - n.x;
                            e.x > 0 ? p = Math.max(n.x, n.x + e.x * v) : h = Math.min(n.x, n.x - e.x * v), e.y > 0 ? m = Math.max(n.y, n.y + e.x * v * i) : g = Math.min(n.y, n.y - e.x * v * i)
                        }
                        var y = Se({top: g, right: p, bottom: m, left: h});
                        if (Se({top: g, right: p, bottom: m, left: h}), o.width && o.height) {
                            var E = o.width, _ = o.height;
                            i && (1 === i ? _ = E = Math.max(E, _) : E < _ ? E = _ / i : E > _ ? _ = E * i : E = _ / i), p - h < E && (e.x > 0 ? p = n.x + E : h = n.x - E), m - g < _ && (e.y > 0 ? m = n.y + _ : g = n.y - _);
                            var w = a.width, T = a.height;
                            i && (i < 1 ? w = T / i : T = w * i), p - h > w && (e.x < 0 ? h = n.x - w : p = n.x + w), m - g > T && (e.y < 0 ? g = n.y - T : m = n.y + T)
                        }
                        if (p - h == 0 && (e.x > 0 ? p = n.x + 2 : h = n.x - 2), m - g == 0 && (e.y > 0 ? m = n.y + 2 : g = n.y - 2), Math.round(h) < c || Math.round(p) > u || Math.round(g) < s || Math.round(m) > f) {
                            var A = f - s, R = u - c;
                            if (h < c) {
                                h = c;
                                var x = Math.min(p - h, R);
                                p = h + x, i && (e.y > 0 && (m = n.y + x * i), e.y < 0 && (g = n.y - x * i))
                            }
                            if (p > u) {
                                p = u;
                                var I = Math.min(p - h, R);
                                h = p - I, i && (e.y > 0 && (m = n.y + I * i), e.y < 0 && (g = n.y - I * i))
                            }
                            if (g < s) {
                                g = s;
                                var C = Math.min(m - g, A);
                                m = g + C, i && (e.x > 0 && (p = n.x + C / i), e.x < 0 && (h = n.x - C / i))
                            }
                            if (m > f) {
                                m = f;
                                var O = Math.min(m - g, A);
                                g = m - O, i && (e.x > 0 && (p = n.x + O / i), e.x < 0 && (h = n.x - O / i))
                            }
                            y = Se({top: g, right: p, bottom: m, left: h})
                        }
                        return {free: y, limited: Se({top: g, right: p, bottom: m, left: h})}
                    }(p, s, u, l, n.crop.aspectRatio, f, d), n.crop.limitToImageBounds && (n.crop.draft.transforms = Jt(a, n.crop.draft.rectangle.limited, n.crop.transforms))
                }, CROP_IMAGE_DRAG_GRAB: function () {
                    return On(n) || Cn(n)
                }, CROP_IMAGE_DRAG_RELEASE: function () {
                    Ln(n), _n(n), xn(n, t, e)
                }, CROP_IMAGE_ROTATE_RELEASE: function () {
                    Ln(n), xn(n, t, e)
                }, CROP_IMAGE_DRAG: function (e) {
                    var t = e.value;
                    Cn(n), n.crop.draft.transforms = function (e, t, n, r, i) {
                        var o = {x: n.translation.x + r.x, y: n.translation.y + r.y}, l = a({}, Xt(n), {translation: o}),
                            c = i ? Kt(e, t, l, "moving") : l;
                        return c.interaction = {translation: o}, c
                    }(n.image, n.crop.rectangle, n.crop.transforms, t, n.crop.limitToImageBounds)
                }, CROP_IMAGE_RESIZE_RELEASE: function () {
                    t("GET_CROP_RESIZE_MATCH_IMAGE_ASPECT_RATIO") && function (e, t) {
                        var n = me(e.crop.draft.transforms.scale, 5);
                        if (!(me(e.crop.draft.targetSize, 5) < n)) return !1;
                        if (null !== e.crop.aspectRatio) return !1;
                        if (!1 === e.crop.limitToImageBounds) return !1;
                        if (0 !== me(e.crop.rotation.sub, 5)) return !1;
                        var r = me(e.crop.rotation.main / vn, 5) % 2 != 0 ? e.image.width / e.image.height : e.image.height / e.image.width;
                        if (r === e.crop.rectangle.height / e.crop.rectangle.width) return !1;
                        var i = e.stage.x + .5 * e.stage.width, o = e.stage.y + .5 * e.stage.height,
                            a = e.crop.rectangle.x + .5 * e.crop.rectangle.width,
                            l = e.crop.rectangle.y + .5 * e.crop.rectangle.height;
                        if (a !== i || l !== o) return !1;
                        var c = t("GET_STAGE_RECT");
                        e.crop.rectangle = Ge(c, r), "stage" !== c.mode && (e.crop.rectangle.x += c.x, e.crop.rectangle.y += c.y), e.crop.transforms = Zt({
                            center: {
                                x: .5,
                                y: .5
                            }, rotation: e.crop.transforms.rotation, zoom: 1, aspectRatio: r
                        }, c, e.image, !0), e.crop.draft.transforms = null
                    }(n, t), Ln(n), _n(n), xn(n, t, e)
                }, CROP_IMAGE_RESIZE: function (e) {
                    var r = e.value;
                    Cn(n);
                    var i = n.crop.transforms;
                    n.crop.draft.targetSize = i.scale + i.scale * r, n.crop.draft.transforms = bn(n.image, n.crop.rectangle, i, n.crop.draft.targetSize, t("GET_MIN_PREVIEW_IMAGE_SIZE"), n.crop.limitToImageBounds)
                }, CROP_IMAGE_RESIZE_MULTIPLY: function (e) {
                    var r = e.value;
                    Cn(n);
                    var i = n.crop.transforms;
                    n.crop.draft.targetSize = i.scale * r, n.crop.draft.transforms = bn(n.image, n.crop.rectangle, i, n.crop.draft.targetSize, t("GET_MIN_PREVIEW_IMAGE_SIZE"), n.crop.limitToImageBounds)
                }, CROP_IMAGE_RESIZE_AMOUNT: function (e) {
                    var r = e.value;
                    Cn(n);
                    var i = n.crop.transforms;
                    n.crop.draft.targetSize = (n.crop.draft.transforms ? n.crop.draft.transforms.scale : i.scale) + r, n.crop.draft.transforms = bn(n.image, n.crop.rectangle, i, n.crop.draft.targetSize, t("GET_MIN_PREVIEW_IMAGE_SIZE"), n.crop.limitToImageBounds)
                }, CROP_IMAGE_ROTATE: function (e) {
                    var r = e.value;
                    Cn(n), n.crop.isRotating = !0, wn(n, {
                        main: n.crop.rotation.main,
                        sub: r
                    }, t("GET_MIN_PREVIEW_IMAGE_SIZE"), !1, n.crop.limitToImageBounds)
                }, CROP_IMAGE_ROTATE_ADJUST: function (e) {
                    var r = e.value;
                    Cn(n), wn(n, {
                        main: n.crop.rotation.main,
                        sub: Math.min(Math.PI / 4, Math.max(-Math.PI / 4, n.crop.rotation.sub + r))
                    }, t("GET_MIN_PREVIEW_IMAGE_SIZE"), !1, n.crop.limitToImageBounds), Ln(n)
                }, CROP_IMAGE_ROTATE_CENTER: function () {
                    Cn(n), wn(n, {
                        main: n.crop.rotation.main,
                        sub: 0
                    }, t("GET_MIN_PREVIEW_IMAGE_SIZE"), !1, n.crop.limitToImageBounds), Ln(n)
                }, CROP_IMAGE_ROTATE_LEFT: function () {
                    In(n, t, e), wn(n, {
                        main: n.crop.rotation.main - vn,
                        sub: n.crop.rotation.sub
                    }, t("GET_MIN_PREVIEW_IMAGE_SIZE"), -vn, n.crop.limitToImageBounds), Ln(n), t("GET_CROP_FORCE_LETTERBOX") && e("CROP_UPDATE_LETTERBOX")
                }, CROP_IMAGE_ROTATE_RIGHT: function () {
                    In(n, t, e), wn(n, {
                        main: n.crop.rotation.main + vn,
                        sub: n.crop.rotation.sub
                    }, t("GET_MIN_PREVIEW_IMAGE_SIZE"), vn, n.crop.limitToImageBounds), Ln(n), t("GET_CROP_FORCE_LETTERBOX") && e("CROP_UPDATE_LETTERBOX")
                }, CROP_IMAGE_FLIP_HORIZONTAL: function () {
                    In(n, t, e), 0 === me(n.crop.rotation.main % Math.PI / 2, 5) ? n.crop.flip.horizontal = !n.crop.flip.horizontal : n.crop.flip.vertical = !n.crop.flip.vertical, n.crop.isDirty = !0
                }, CROP_IMAGE_FLIP_VERTICAL: function () {
                    In(n, t, e), 0 === me(n.crop.rotation.main % Math.PI / 2, 5) ? n.crop.flip.vertical = !n.crop.flip.vertical : n.crop.flip.horizontal = !n.crop.flip.horizontal, n.crop.isDirty = !0
                }, DID_RECEIVE_IMAGE_DATA: function (e) {
                    var t = e.previewData, r = e.thumbData;
                    n.file.preview = t, n.file.thumb = r
                }, MARKUP_SET_VALUE: function (e) {
                    var t = e.value;
                    n.markup = (t || []).map(hn).sort(Lt)
                }, MARKUP_ADD_DEFAULT: function (n) {
                    var r = n.value, i = function () {
                            return -.5 + Math.random()
                        }, o = t("GET_CROP_RECTANGLE_ASPECT_RATIO"), l = o > 1 ? .5 / o : .5, c = o > 1 ? .5 : .5 * o,
                        u = function () {
                            return {width: l, height: c, x: .5 + .5 * i() - .5 * l, y: .5 + .5 * i() - .5 * c}
                        }, s = function (e) {
                            return t("GET_MARKUP_TOOL_VALUES")[e]
                        }, f = function () {
                            var e = s("shapeStyle"), t = s("color");
                            return {
                                backgroundColor: e[0] || e[1] ? null : t,
                                borderWidth: e[0],
                                borderStyle: e[1] ? e[1] : null,
                                borderColor: t
                            }
                        }, d = {
                            rect: function () {
                                return a({}, u(), f())
                            }, ellipse: function () {
                                return a({}, u(), f())
                            }, text: function () {
                                return {
                                    x: .5 + .5 * i() - .1,
                                    y: .5 + .5 * i(),
                                    width: 0,
                                    height: 0,
                                    fontColor: s("color"),
                                    fontSize: s("fontSize"),
                                    fontFamily: s("fontFamily"),
                                    text: "Text"
                                }
                            }, line: function () {
                                var e = s("lineStyle");
                                return a({}, u(), {
                                    lineColor: s("color"),
                                    lineWidth: e[0],
                                    lineStyle: e[1] ? e[1] : null,
                                    lineDecoration: s("lineDecoration")
                                })
                            }
                        }[r]();
                    e("MARKUP_ADD", [r, d])
                }, MARKUP_ADD: function (r) {
                    n.markup.forEach(function (e) {
                        return e[1].isSelected = !1
                    }), n.markup = n.markup.filter(function (e) {
                        return !e[1].isDestroyed
                    });
                    var i = hn(r);
                    n.markup.push(i), n.markup.sort(Lt), "draw" !== t("GET_MARKUP_UTIL") && e("MARKUP_SELECT", {id: i[1].id}), n.crop.isDirty = !0
                }, MARKUP_SELECT: function (e) {
                    var t = e.id;
                    n.markup.forEach(function (e) {
                        e[1].isSelected = e[1].id === t, e[1].isDirty = !0
                    })
                }, MARKUP_ELEMENT_DRAG: function (e) {
                    var t = e.id, r = e.origin, i = e.offset, o = e.size, a = n.markup.find(function (e) {
                        return e[1].id === t
                    });
                    if (a) {
                        var l = a[1], c = r.x / o.width, u = r.y / o.height, s = r.width / o.width, f = r.height / o.height,
                            d = i.x / o.width, h = i.y / o.height;
                        l.x = c + d, l.y = u + h, l.width = s, l.height = f, l.left = void 0, l.top = void 0, l.right = void 0, l.bottom = void 0, l.isDirty = !0, n.crop.isDirty = !0
                    }
                }, MARKUP_ELEMENT_RESIZE: function (e) {
                    var t = e.id, r = e.corner, i = e.origin, o = e.offset, a = e.size, c = n.markup.find(function (e) {
                        return e[1].id === t
                    });
                    if (c) {
                        var u = l(c, 2), s = u[0], f = u[1], d = (i.x + o.x) / a.width, h = (i.y + o.y) / a.height;
                        if (/n/.test(r)) if ("line" === s) f.height = f.height - (h - f.y), f.y = h; else {
                            var p = f.y + f.height;
                            h > p && (h = p), f.height = f.height - (h - f.y), f.y = h
                        }
                        if (/w/.test(r)) if ("line" === s) f.width = f.width - (d - f.x), f.x = d; else {
                            var g = f.x + f.width;
                            d > g && (d = g), f.width = f.width - (d - f.x), f.x = d
                        }
                        /s/.test(r) && (f.height = "line" === s ? h - f.y : Math.max(0, h - f.y)), /e/.test(r) && (f.width = "line" === s ? d - f.x : Math.max(0, d - f.x)), f.left = void 0, f.top = void 0, f.right = void 0, f.bottom = void 0, f.isDirty = !0, n.crop.isDirty = !0
                    }
                }, MARKUP_DELETE: function (t) {
                    var r = t.id, i = n.markup.find(function (e) {
                        return e[1].id === r
                    });
                    if (i) {
                        var o = i[1];
                        o.allowDestroy && (o.isDestroyed = !0, o.isSelected = !1, o.isDirty = !0);
                        for (var a = null, l = n.markup.length; l > 0;) {
                            l--;
                            var c = n.markup[l][1];
                            if (!c.isDestroyed && c.allowDestroy) {
                                a = c.id;
                                break
                            }
                        }
                        e("MARKUP_SELECT", {id: a})
                    }
                }, MARKUP_UPDATE: function (e) {
                    var t = e.style, r = e.value;
                    n.markupToolValues[t] = r, n.markup.map(function (e) {
                        return e[1]
                    }).filter(function (e) {
                        return e.isSelected
                    }).forEach(function (e) {
                        if ("color" === t) e[function (e) {
                            return e.borderWidth ? "borderColor" : e.lineWidth ? "lineColor" : e.fontColor ? "fontColor" : e.backgroundColor ? "backgroundColor" : void 0
                        }(e)] = r; else if ("shapeStyle" === t) {
                            var n = function (e) {
                                var t = e.fontColor, n = e.backgroundColor, r = e.lineColor, i = e.borderColor;
                                return t || n || r || i
                            }(e);
                            e.borderWidth = r[0], e.borderStyle = r[1], e.backgroundColor = r[0] || r[1] ? null : n
                        } else "lineStyle" === t ? (e.lineWidth = r[0], e.lineStyle = r[1]) : e[t] = r;
                        e.isDirty = !0
                    }), n.crop.isDirty = !0
                }
            }, ["color", "shapeStyle", "lineStyle", "textDecoration", "fontSize", "fontFamily"].reduce(function (t, r) {
                var i = r.split(/(?=[A-Z])/).join("_").toUpperCase(), o = un(r);
                return t["SET_MARKUP_" + i] = function (t) {
                    var i = t.value;
                    i !== t.prevValue && (n.options["markup".concat(o)] = i, e("MARKUP_UPDATE", {style: r, value: i}))
                }, t
            }, {}), {
                DID_SET_CROP: function (t) {
                    var n = t.value;
                    n !== t.prevValue && e("SET_DATA", {crop: n})
                }, COLOR_SET_COLOR_VALUE: function (t) {
                    var r = t.key, i = t.value;
                    n.crop.isDirty = !0, e("COLOR_SET_VALUE", {key: r, value: i})
                }, COLOR_SET_VALUE: function (t) {
                    var r = t.key, i = t.value;
                    n.colorValues[r] = i, e("SET_COLOR_MATRIX", {key: r, matrix: mn[r](i)})
                }
            }, Object.keys(mn).reduce(function (r, i) {
                var o = i.toUpperCase(), a = un(i);
                return r["SET_COLOR_".concat(o)] = function (r) {
                    var c = r.value;
                    if (c !== r.prevValue) {
                        var u = l(t("GET_COLOR_".concat(o, "_RANGE")), 2), s = u[0], f = u[1], d = ge(c, s, f);
                        n.options["color".concat(a)] = d, n.instructions.color || (n.instructions.color = {}), n.instructions.color[i] = d, e("COLOR_SET_VALUE", {
                            key: i,
                            value: d
                        })
                    }
                }, r
            }, {}), {
                SET_COLOR_MATRIX: function (t) {
                    var r = t.key, i = t.matrix;
                    i ? n.colorMatrices[r] = c(i) : delete n.colorMatrices[r], e("DID_SET_COLOR_MATRIX", {
                        key: r,
                        matrix: i
                    })
                }, FILTER_SET_FILTER: function (t) {
                    var r = t.value;
                    n.crop.isDirty = !0, e("FILTER_SET_VALUE", {value: r})
                }, FILTER_SET_VALUE: function (r) {
                    var i = r.value, o = fn(i) ? i : null;
                    if (q(i)) {
                        var a = t("GET_FILTERS");
                        d(a, function (e, t) {
                            e === i && (o = t.matrix())
                        })
                    }
                    n.filter = i, n.filterName = q(i) ? i : null, e("SET_COLOR_MATRIX", {key: "filter", matrix: o})
                }, DID_SET_UTIL: function (t) {
                    var r = t.value;
                    t.prevValue, -1 !== n.options.utils.indexOf(r) && e("CHANGE_VIEW", {id: r})
                }, DID_SET_FILTER: function (t) {
                    var n = t.value;
                    n !== t.prevValue && (e("FILTER_SET_VALUE", {value: n}), e("SET_DATA", {filter: n}))
                }, DID_SET_SIZE: function (t) {
                    var n = t.value;
                    n !== t.prevValue && e("SET_DATA", {size: n})
                }, DID_SET_MARKUP_UTIL: function (t) {
                    var n = t.value;
                    n !== t.prevValue && n && (/^(draw|line|text|rect|ellipse)$/.test(n) || (n = "select"), e("SWITCH_MARKUP_UTIL", {util: n}))
                }, DID_SET_MARKUP: function (t) {
                    var n = t.value, r = t.prevValue;
                    n !== r && JSON.stringify(n) === JSON.stringify(r) || (e("MARKUP_SET_VALUE", {value: n}), e("SET_DATA", {markup: n}))
                }, SET_DATA: function (r) {
                    if (r.size) {
                        var i = a({width: null, height: null}, r.size),
                            o = Ze(i, t("GET_SIZE_MIN"), t("GET_SIZE_MAX"), null);
                        n.instructions.size = a({}, o), e("RESIZE_SET_OUTPUT_SIZE", o)
                    }
                    r.filter && (n.instructions.filter = r.filter ? r.filter.id || r.filter.matrix : r.colorMatrix), n.instructions.markup = r.markup || [], n.instructions.markup.forEach(function (e) {
                        return e[1].isDirty = !0
                    }), n.instructions.color = Object.keys(mn).reduce(function (e, t) {
                        var i = void 0 === r.color || void 0 === r.color[t], o = n.options["color".concat(un(t))];
                        return e[t] = i ? o : T(r.color[t]) ? r.color[t] : r.color[t].value, e
                    }, {}), r.crop && (n.instructions.crop = cn(t, n, r.crop, n.size), n.crop.limitToImageBounds = n.options.cropLimitToImageBounds, !1 === n.instructions.crop.scaleToFit && (n.crop.limitToImageBounds = n.instructions.crop.scaleToFit), Tn(n, t))
                }, DID_SET_INITIAL_STATE: function (e) {
                    var r = e.value || {}, i = r.crop, o = r.filter, l = r.color, c = r.size, u = void 0 === c ? {} : c,
                        s = r.markup, f = void 0 === s ? [] : s, d = a({width: null, height: null}, u),
                        h = Ze(d, t("GET_SIZE_MIN"), t("GET_SIZE_MAX"), null);
                    n.instructions.size = a({}, h), n.instructions.crop = cn(t, n, i), n.crop.limitToImageBounds = n.options.cropLimitToImageBounds, !1 === n.instructions.crop.scaleToFit && (n.crop.limitToImageBounds = n.instructions.crop.scaleToFit), n.instructions.filter = o || null, n.instructions.color = Object.keys(mn).reduce(function (e, t) {
                        return e[t] = void 0 === l || void 0 === l[t] ? n.options["color".concat(un(t))] : l[t], e
                    }, {}), n.instructions.markup = f, n.crop.isDirty = !0
                }, GET_DATA: function (r) {
                    var i = r.success, o = r.failure, a = r.file, l = r.data;
                    if (!n.file) return o("no-image-source");
                    if (!n.stage) return o("image-not-fully-loaded");
                    var c = {
                        file: W(a) ? a : t("GET_OUTPUT_FILE"),
                        data: W(l) ? l : t("GET_OUTPUT_DATA"),
                        success: i,
                        failure: o
                    };
                    e(c.file ? "REQUEST_PREPARE_OUTPUT" : "PREPARE_OUTPUT", c)
                }, REQUEST_PREPARE_OUTPUT: function (t) {
                    var n = t.file, r = t.data, i = t.success, o = t.failure;
                    e("PREPARE_OUTPUT", {file: n, data: r, success: i, failure: o}, !0), e("DID_REQUEST_PREPARE_OUTPUT")
                }, PREPARE_OUTPUT: function (r) {
                    var i = r.file, o = r.data, a = r.success, l = void 0 === a ? function () {
                    } : a, c = r.failure, u = void 0 === c ? function () {
                    } : c;
                    if (Dn(n)) return e("ABORT_IMAGE");
                    var s = function (t) {
                        if (e("DID_PREPARE_OUTPUT"), Dn(n)) return e("ABORT_IMAGE");
                        l(t)
                    };
                    En({file: i, data: o}, n, t).then(function (t) {
                        var r = n.options.afterCreateOutput, i = r ? r(t, function (t, n) {
                            return e("DID_REQUEST_POSTPROCESS_OUTPUT", {label: t, progress: n}), function (t) {
                                e("DID_MAKE_PROGRESS", {progress: t})
                            }
                        }) : t;
                        Promise.resolve(i).then(s).catch(function (t) {
                            e("DID_REQUEST_POSTPROCESS_OUTPUT_ERROR", {error: t})
                        })
                    }).catch(function (t) {
                        if (Dn(n)) return e("ABORT_IMAGE");
                        u(t)
                    })
                }, EDIT_RESET: function () {
                    Cn(n), An(n, t, e)
                }, EDIT_CONFIRM: function () {
                    if (n.file && n.stage) {
                        Cn(n), e("CROP_ZOOM");
                        var r = {
                            file: t("GET_OUTPUT_FILE"), data: t("GET_OUTPUT_DATA"), success: function (t) {
                                n.filePromise.resolveOnConfirm && n.filePromise.success(t), e("DID_CONFIRM", {output: t})
                            }, failure: console.error
                        };
                        e(r.file ? "REQUEST_PREPARE_OUTPUT" : "PREPARE_OUTPUT", r)
                    }
                }, EDIT_CANCEL: function () {
                    n.filePromise && n.filePromise.success(null), e("DID_CANCEL")
                }, EDIT_CLOSE: function () {
                    Cn(n)
                }, EDIT_DESTROY: function () {
                    $(n)
                }, SET_OPTIONS: function (t) {
                    var n = t.options;
                    d(n, function (t, n) {
                        e("SET_".concat(ee(t, "_").toUpperCase()), {value: n})
                    })
                }
            })
        }, Vn = function (e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 24;
            return '<svg width="'.concat(t, '" height="').concat(t, '" viewBox="0 0 ').concat(t, " ").concat(t, '" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">').concat(e, "</svg>")
        }, Bn = U({
            ignoreRect: !0,
            ignoreRectUpdate: !0,
            name: "button",
            mixins: {
                styles: ["opacity"],
                animations: {opacity: {type: "tween", duration: 250}},
                apis: ["id"],
                listeners: !0
            },
            tag: "button",
            create: function (e) {
                var t = e.root, n = e.props;
                t.element.innerHTML = "".concat(n.icon || "", "<span>").concat(n.label, "</span>"), t.element.setAttribute("type", n.type || "button"), n.name && n.name.split(" ").forEach(function (e) {
                    t.element.className += " doka--button-".concat(e)
                }), t.ref.handleClick = function () {
                    "string" == typeof n.action ? t.dispatch(n.action) : n.action()
                }, t.element.addEventListener("click", t.ref.handleClick), t.ref.handlePointer = function (e) {
                    return e.stopPropagation()
                }, t.element.addEventListener("pointerdown", t.ref.handlePointer), n.create && n.create({root: t, props: n})
            },
            destroy: function (e) {
                var t = e.root;
                t.element.removeEventListener("pointerdown", t.ref.handlePointer), t.element.removeEventListener("click", t.ref.handleClick)
            }
        }), zn = U({
            name: "status-progress",
            tag: "svg",
            ignoreRect: !0,
            ignoreRectUpdate: !0,
            mixins: {apis: ["progress"], animations: {progress: {type: "spring", stiffness: .25, damping: .25, mass: 2.5}}},
            create: function (e) {
                var t = e.root, n = e.props;
                t.element.setAttribute("data-value", 0), t.element.setAttribute("width", 24), t.element.setAttribute("height", 24), t.element.setAttribute("viewBox", "0 0 20 20");
                var r = t.ref.circle = document.createElementNS("http://www.w3.org/2000/svg", "circle"), i = {
                    r: 5,
                    cx: 10,
                    cy: 10,
                    fill: "none",
                    stroke: "currentColor",
                    "stroke-width": 10,
                    transform: "rotate(-90) translate(-20)"
                };
                t.element.appendChild(r), Object.keys(i).forEach(function (e) {
                    r.setAttribute(e, i[e])
                }), t.ref.updateStroke = function (e) {
                    t.ref.circle.setAttribute("stroke-dasharray", "".concat(31.42 * Math.min(1, e), " 31.42"))
                }, "number" == typeof n.progress ? (t.progress = n.progress, t.element.setAttribute("data-value", Math.max(n.progress, .001)), t.ref.updateStroke(t.progress)) : t.progress = 0
            },
            write: V({
                DID_MAKE_PROGRESS: function (e) {
                    var t = e.root, n = e.action;
                    t.progress = n.progress, t.element.setAttribute("data-value", Math.max(n.progress, .001))
                }
            }, function (e) {
                var t = e.root;
                t.ref.updateStroke(t.progress)
            })
        }), Nn = U({
            name: "status-bubble-inner", create: function (e) {
                var t = e.root, n = e.props;
                n.onClose ? t.appendChildView(t.createChildView(Bn, {
                    label: "Close",
                    name: "icon-only status-bubble-close",
                    icon: Vn('<g fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6L6 18M6 6l12 12"/></g>'),
                    action: n.onClose
                })) : t.ref.progressIndicator = t.appendChildView(t.createChildView(zn, {progress: n.progress})), t.appendChildView(t.createChildView(function (e) {
                    return U({
                        ignoreRect: !0, tag: e, create: function (e) {
                            var t = e.root, n = e.props;
                            t.element.textContent = n.text
                        }
                    })
                }("p"), {text: n.label}))
            }
        }), Fn = U({
            name: "status-bubble",
            mixins: {
                styles: ["opacity", "translateY"],
                apis: ["markedForRemoval"],
                animations: {opacity: {type: "tween", duration: 500}, translateY: {type: "spring", mass: 20}}
            },
            create: function (e) {
                var t = e.root, n = e.props;
                return t.appendChildView(t.createChildView(Nn, n))
            }
        }), Wn = function (e) {
            e.element.dataset.viewStatus = "idle", qn(e)
        }, qn = function (e) {
            e.ref.busyIndicators.forEach(function (e) {
                e.translateY = -10, e.opacity = 0, e.markedForRemoval = !0
            })
        }, Hn = function (e, t, n, r) {
            e.element.dataset.viewStatus = "busy";
            var i = Yn(e, t, n, r);
            qn(e), e.ref.busyIndicators.push(i), i.markedForRemoval = !1, i.translateY = 0, i.opacity = 1
        }, Yn = function (e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
            return e.appendChildView(e.createChildView(Fn, {translateY: 20, opacity: 0, label: t, onClose: n, progress: r}))
        }, Zn = U({
            name: "edit-status", ignoreRect: !0, create: function (e) {
                var t = e.root;
                t.ref.busyIndicators = [], t.element.setAttribute("tabindex", -1)
            }, write: V({
                MISSING_WEBGL: function (e) {
                    var t = e.root, n = /fullscreen/.test(t.query("GET_STYLE_LAYOUT_MODE"));
                    Hn(t, t.query("GET_LABEL_STATUS_MISSING_WEB_G_L"), n ? function () {
                        t.dispatch("EDIT_CANCEL")
                    } : null)
                }, AWAITING_IMAGE: function (e) {
                    var t = e.root;
                    Hn(t, t.query("GET_LABEL_STATUS_AWAITING_IMAGE"))
                }, DID_PRESENT_IMAGE: function (e) {
                    var t = e.root;
                    Wn(t)
                }, DID_LOAD_IMAGE_ERROR: function (e) {
                    var t = e.root, n = e.action, r = /fullscreen/.test(t.query("GET_STYLE_LAYOUT_MODE")),
                        i = t.query("GET_LABEL_STATUS_LOAD_IMAGE_ERROR"), o = "function" == typeof i ? i(n.error) : i;
                    Hn(t, o, r ? function () {
                        t.dispatch("EDIT_CANCEL")
                    } : null)
                }, DID_REQUEST_LOAD_IMAGE: function (e) {
                    var t = e.root;
                    Hn(t, t.query("GET_LABEL_STATUS_LOADING_IMAGE"))
                }, DID_REQUEST_PREPARE_OUTPUT: function (e) {
                    var t = e.root;
                    Hn(t, t.query("GET_LABEL_STATUS_PROCESSING_IMAGE"))
                }, DID_REQUEST_POSTPROCESS_OUTPUT: function (e) {
                    var t = e.root, n = e.action;
                    Hn(t, n.label, null, n.progress)
                }, DID_REQUEST_POSTPROCESS_OUTPUT_ERROR: function (e) {
                    var t = e.root, n = e.action.error;
                    Hn(t, n, function () {
                        return t.dispatch("DID_PREPARE_OUTPUT")
                    })
                }, DID_PREPARE_OUTPUT: function (e) {
                    var t = e.root;
                    Wn(t)
                }
            }), didWriteView: function (e) {
                var t = e.root;
                t.ref.busyIndicators = t.ref.busyIndicators.filter(function (e) {
                    return !e.markedForRemoval || 0 !== e.opacity || (t.removeChildView(e), !1)
                })
            }
        }), Xn = {down: "pointerdown", move: "pointermove", up: "pointerup"}, Kn = function () {
            var e = [], t = function (t) {
                return e.findIndex(function (e) {
                    return e.pointerId === t.pointerId
                })
            };
            return {
                update: function (n) {
                    var r = t(n);
                    r < 0 || (e[r] = n)
                }, multiple: function () {
                    return e.length > 1
                }, count: function () {
                    return e.length
                }, active: function () {
                    return e.concat()
                }, push: function (n) {
                    t(n) >= 0 || e.push(n)
                }, pop: function (n) {
                    var r = t(n);
                    r < 0 || e.splice(r, 1)
                }
            }
        }, jn = function (e, t, n, r) {
            return e.addEventListener(Xn[t], n, r)
        }, Qn = function (e, t, n) {
            return e.removeEventListener(Xn[t], n)
        }, Jn = function (e, t) {
            "contains" in e && e.contains(t);
            var n = t;
            do {
                if (n === e) return !0
            } while (n = n.parentNode);
            return !1
        }, $n = function (e, t, n, r) {
            var i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {
                    stopPropagation: !0,
                    cancelOnMultiple: !1
                }, o = {x: 0, y: 0}, a = {enabled: !0, origin: null, cancel: !1, cancelled: !1, pointers: Kn()}, l = null,
                c = function (e, t) {
                    t && (l || u(e, t), cancelAnimationFrame(l), l = requestAnimationFrame(function () {
                        u(e, t), l = null
                    }))
                }, u = function (e, t) {
                    return t.apply(null, [e, function (e) {
                        return {x: e.pageX - o.x, y: e.pageY - o.y}
                    }(e)])
                }, s = function (n) {
                    var r = 0 === a.pointers.count();
                    r && (a.active = !1, a.cancel = !1, a.cancelled = !1), (e === n.target || Jn(e, n.target)) && (r ? n.isPrimary && (a.pointers.push(n), jn(document.documentElement, "up", d), n.preventDefault(), i.stopPropagation && (n.stopPropagation(), n.stopImmediatePropagation()), a.active = !0, o.x = n.pageX, o.y = n.pageY, jn(document.documentElement, "move", f), t(n)) : i.cancelOnMultiple && (a.cancel = !0))
                }, f = function (e) {
                    e.isPrimary && (a.cancelled || (e.preventDefault(), i.stopPropagation && e.stopPropagation(), c(e, n), a.cancel && (a.cancelled = !0, c(e, r))))
                }, d = function e(t) {
                    a.pointers.pop(t), 0 === a.pointers.count() && (Qn(document.documentElement, "move", f), Qn(document.documentElement, "up", e)), a.active && (a.cancelled || (t.preventDefault(), i.stopPropagation && t.stopPropagation(), c(t, n), c(t, r)))
                };
            return jn(document.documentElement, "down", s), {
                enable: function () {
                    a.enabled || jn(document.documentElement, "down", s), a.enabled = !0
                }, disable: function () {
                    a.enabled && Qn(document.documentElement, "down", s), a.enabled = !1
                }, destroy: function () {
                    Qn(document.documentElement, "up", d), Qn(document.documentElement, "move", f), Qn(document.documentElement, "down", s)
                }
            }
        }, er = {type: "spring", stiffness: .4, damping: .65, mass: 7}, tr = function (e, t, n) {
            if (/^(line|text|ellipse|rect)$/.test(n)) e.dispatch("MARKUP_ADD_DEFAULT", {value: n}), e.dispatch("SET_MARKUP_UTIL", {value: "select"}); else if ("draw" === n && !e.ref.drawInput) {
                var r = e.ref, i = r.drawState, o = r.viewSize, l = 0, c = 0, u = {},
                    s = e.query("GET_MARKUP_DRAW_DISTANCE");
                e.ref.drawInput = $n(e.element, function (n) {
                    var r = e.query("GET_MARKUP_TOOL_VALUES"), a = r.lineStyle[0], s = r.lineStyle[1];
                    i.lineColor = r.color, i.lineWidth = a, i.lineStyle = s;
                    var f = e.query("GET_ROOT"),
                        d = void 0 !== n.offsetX ? n.offsetX : n.pageX - f.x - t.stageOffsetX - window.pageXOffset,
                        h = void 0 !== n.offsetY ? n.offsetY : n.pageY - f.y - t.stageOffsetY - window.pageYOffset;
                    l = d - e.markupX, c = h - e.markupY, u.x = 0, u.y = 0, i.points.push({x: l / o.width, y: c / o.height})
                }, function (t, n) {
                    if (e.dispatch("KICK"), s) {
                        var r = _e(n, u);
                        if (r > s) {
                            var a = function (e, t) {
                                var n = ye(e, t);
                                return Math.atan2(n.y, n.x)
                            }(u, n) + Math.PI / 2, f = s - r;
                            u.x += Math.sin(a) * f, u.y -= Math.cos(a) * f, i.points.push({
                                x: (l + u.x) / o.width,
                                y: (c + u.y) / o.height
                            })
                        }
                    } else i.points.push({x: (l + n.x) / o.width, y: (c + n.y) / o.height})
                }, function (t, n) {
                    i.points.length > 1 && e.dispatch("MARKUP_ADD", ["path", a({}, i)]), i.points = []
                })
            }
            "draw" !== n && e.ref.drawInput && (e.ref.drawInput.destroy(), e.ref.drawInput = null)
        }, nr = function (e, t) {
            return Object.keys(t).forEach(function (n) {
                e.setAttribute(n, t[n])
            })
        }, rr = function (e, t) {
            var n = document.createElementNS("http://www.w3.org/2000/svg", e);
            return t && nr(n, t), n
        }, ir = ["nw", "se"], or = ["nw", "n", "ne", "w", "e", "sw", "s", "se"],
        ar = {nw: "nwse", n: "ns", ne: "nesw", w: "ew", e: "ew", sw: "nesw", s: "ns", se: "nwse"}, lr = {
            nw: function (e) {
                return {x: e.x, y: e.y}
            }, n: function (e) {
                return {x: e.x + .5 * e.width, y: e.y}
            }, ne: function (e) {
                return {x: e.x + e.width, y: e.y}
            }, w: function (e) {
                return {x: e.x, y: e.y + .5 * e.height}
            }, e: function (e) {
                return {x: e.x + e.width, y: e.y + .5 * e.height}
            }, sw: function (e) {
                return {x: e.x, y: e.y + e.height}
            }, s: function (e) {
                return {x: e.x + .5 * e.width, y: e.y + e.height}
            }, se: function (e) {
                return {x: e.x + e.width, y: e.y + e.height}
            }
        }, cr = U({
            tag: "div",
            name: "image-markup",
            ignoreRect: !0,
            mixins: {
                styles: ["opacity"],
                animations: {opacity: "spring", markupX: er, markupY: er, markupWidth: er, markupHeight: er},
                listeners: !0,
                apis: ["toolsReference", "onSelect", "onDrag", "markupX", "markupY", "markupWidth", "markupHeight", "allowInteraction", "stageOffsetX", "stageOffsetY"]
            },
            create: function (e) {
                var t = e.root, n = e.props, r = n.onSelect, i = void 0 === r ? function () {
                } : r, o = n.onUpdate, a = void 0 === o ? function () {
                } : o, l = rr("svg", {xmlns: "http://www.w3.org/2000/svg", "xmlns:xlink": "http://www.w3.org/1999/xlink"});
                t.ref.canvas = l;
                var c = t.query("GET_ROOT_SIZE");
                l.setAttribute("width", c.width), l.setAttribute("height", c.height);
                var u = document.createElement("input");
                nr(u, {
                    type: "text",
                    autocomplete: "off",
                    autocapitalize: "off"
                }), u.addEventListener("keydown", function (e) {
                    e.stopPropagation(), 13 === e.keyCode || 9 === e.keyCode ? (e.target.blur(), s()) : 8 !== e.keyCode || t.ref.input.value.length || t.dispatch("MARKUP_DELETE", {id: t.ref.selected.id})
                }), t.ref.input = u, t.ref.elements = [], t.ref.viewSize = {
                    width: 0,
                    height: 0,
                    scale: 0
                }, t.ref.resetSelected = function () {
                    return t.ref.selected = {id: null, type: null, settings: {}}, t.ref.selected
                }, t.ref.resetSelected();
                var s = function () {
                    t.ref.resetSelected(), i(null)
                };
                t.ref.handleDeselect = function (e) {
                    var r;
                    t.query("IS_ACTIVE_VIEW", "markup") && t.ref.selected.id && e.target !== t.ref.removeButton.element && (r = e.target, t.ref.selected.id !== function (e) {
                        return e.id ? e : e.parentNode
                    }(r).id && (function (e) {
                        return Jn(t.ref.manipulatorGroup, e) || e === t.ref.input
                    }(e.target) || n.isMarkupUtil(e.target) || s()))
                }, jn(document.body, "down", t.ref.handleDeselect), t.ref.handleTextInput = function () {
                    return a("text", t.ref.input.value)
                }, t.ref.input.addEventListener("input", t.ref.handleTextInput), t.ref.handleAttemptDelete = function (e) {
                    t.query("IS_ACTIVE_VIEW", "markup") && (!t.ref.selected.id || 8 !== e.keyCode && 46 !== e.keyCode || (e.stopPropagation(), e.preventDefault(), t.dispatch("MARKUP_DELETE", {id: t.ref.selected.id})))
                }, document.body.addEventListener("keydown", t.ref.handleAttemptDelete);
                var f = rr("g"), d = rr("g", {class: "doka--shape-group"});
                f.appendChild(d), t.ref.shapeGroup = d;
                var h = rr("g", {fill: "none", class: "doka--manipulator-group"}),
                    p = rr("rect", {x: 0, y: 0, width: 0, height: 0, fill: "none"}), g = rr("path");
                h.appendChild(g), h.appendChild(p), t.ref.manipulatorPath = g, t.ref.manipulatorRect = p, t.ref.manipulators = [];
                for (var m = 0; m < 10; m++) {
                    var y = rr("circle", {r: 6, "stroke-width": 2}),
                        E = rr("circle", {r: 22, class: "doka--hitbox", style: "opacity: 0"});
                    h.appendChild(E), h.appendChild(y), t.ref.manipulators.push({visual: y, hitbox: E, dragger: null})
                }
                f.appendChild(h), t.ref.manipulatorGroup = h, l.appendChild(f), t.ref.shapeOffsetGroup = f, t.ref.removeButton = t.appendChildView(t.createChildView(Bn, {
                    label: t.query("GET_LABEL_MARKUP_REMOVE_SHAPE"),
                    name: "destroy-shape",
                    action: function () {
                        t.dispatch("MARKUP_DELETE", {id: t.ref.selected.id})
                    }
                })), t.query("IS_ACTIVE_VIEW", "markup") && (t.element.dataset.active = !0), t.ref.drawInput = null, t.ref.drawState = {
                    lineColor: null,
                    lineWidth: null,
                    lineStyle: null,
                    points: []
                };
                var _ = rr("path", {fill: "none", class: "doka--draw-path"});
                t.ref.drawPath = _, l.appendChild(_);
                var w = v("div", "doka--image-markup-clip");
                w.appendChild(u), w.appendChild(l), t.ref.clip = w, t.element.appendChild(w), "draw" === t.query("GET_MARKUP_UTIL") && tr(t, n, "draw")
            },
            destroy: function (e) {
                var t = e.root;
                t.ref.elements.concat(t.ref.manipulators).forEach(function (e) {
                    e.dragger && e.dragger.destroy()
                }), t.ref.input.removeEventListener("input", t.ref.handleTextInput), document.body.removeEventListener("keydown", t.ref.handleAttemptDelete), Qn(document.body, "down", t.ref.handleDeselect)
            },
            read: function (e) {
                var t = e.root;
                if (!t.rect.element.hidden) for (var n in t.ref.elements) {
                    var r = t.ref.elements[n];
                    if (r && "text" === r.nodeName && r.parentNode) {
                        var i = r.getBBox();
                        r.bbox = {x: i.x, y: i.y, width: i.width, height: i.height}
                    }
                }
            },
            write: V({
                SHOW_VIEW: function (e) {
                    var t = e.root, n = e.props;
                    "markup" === e.action.id ? t.element.dataset.active = !0 : (t.element.dataset.active = !1, n.onSelect(null))
                }, MARKUP_SET_VALUE: function (e) {
                    var t = e.root;
                    d(t.ref.elements, function (e, t) {
                        t && t.dragger && t.dragger.destroy()
                    }), t.ref.elements = [], t.ref.shapeGroup.innerHTML = ""
                }, UPDATE_ROOT_RECT: function (e) {
                    var t = e.root, n = e.action, r = t.ref.canvas;
                    r.setAttribute("width", n.rect.width), r.setAttribute("height", n.rect.height), t.ref.previousScale = null
                }, SWITCH_MARKUP_UTIL: function (e) {
                    var t = e.root, n = e.action, r = e.props, i = n.util;
                    tr(t, r, i)
                }
            }, function (e) {
                var t = e.root, n = e.props, r = e.timestamp;
                if (!(t.opacity <= 0)) {
                    var i = t.query("GET_CROP", n.id, r);
                    if (i) {
                        var o = t.query("GET_MARKUP_UTIL");
                        t.element.dataset.util = o || "";
                        var c = i.markup, u = i.cropStatus, s = n.onSelect, f = n.onDrag, d = t.ref, h = d.clip,
                            p = d.manipulatorGroup, g = d.drawPath, m = d.viewSize, v = d.shapeOffsetGroup,
                            y = d.manipulators, E = d.manipulatorPath, _ = d.manipulatorRect, w = d.removeButton,
                            T = d.drawState, A = t.query("GET_OUTPUT_WIDTH"), R = t.query("GET_OUTPUT_HEIGHT"), x = u.image,
                            I = u.crop, C = I.width, O = I.height, S = I.widthFloat / I.heightFloat;
                        if (A || R) {
                            var M = t.query("GET_OUTPUT_FIT");
                            A && !R && (R = A), R && !A && (A = R);
                            var b, L = A / C, P = R / O;
                            "force" === M ? (C = A, O = R) : ("cover" === M ? b = Math.max(L, P) : "contain" === M && (b = Math.min(L, P)), C *= b, O *= b)
                        } else x.width && x.height ? (C = x.width, O = x.height) : x.width && !x.height ? (C = x.width, O = x.width / S) : x.height && !x.width && (O = x.height, C = x.height * S);
                        var G = T.points.length, k = me(t.markupX, 3), D = me(t.markupY, 3), U = me(t.markupWidth, 3),
                            V = me(t.markupHeight, 3), B = me(Math.min(t.markupWidth / C, t.markupHeight / O), 4);
                        if (m.width = U, m.height = V, m.scale = B, sr(t, {
                            drawLength: G,
                            markupX: k,
                            markupY: D,
                            scale: B,
                            markup: c,
                            currentWidth: C,
                            currentHeight: O
                        })) {
                            var z = k, N = t.rect.element.width - k - U, F = D, W = t.rect.element.height - D - V,
                                q = "inset(".concat(F, "px ").concat(N, "px ").concat(W, "px ").concat(z, "px)");
                            if (h.style.clipPath = q, h.style.webkitClipPath = q, v.setAttribute("transform", "translate(".concat(k, " ").concat(D, ")")), t.ref.previousDrawLength = G, t.ref.previousX = k, t.ref.previousY = D, t.ref.previousScale = B, t.ref.previousCurrentHeight = O, t.ref.previousCurrentWidth = C, t.ref.previousMarkupLength = c.length, !(m.width < 1 || m.height < 1)) {
                                var H, Y = c.find(function (e) {
                                    return e[1].isSelected
                                }), Z = Y && t.ref.selected.id !== Y[1].id || t.ref.selected.id && !Y;
                                if (H = Y ? t.ref.selected = {
                                    id: Y[1].id,
                                    type: Y[0],
                                    settings: Y[1]
                                } : t.ref.resetSelected(), T.points.length) {
                                    var X = Et(T, m, B);
                                    return X.d = Tt(T.points.map(function (e) {
                                        return {x: k + e.x * m.width, y: D + e.y * m.height}
                                    })), void nr(g, X)
                                }
                                g.removeAttribute("d"), t.ref.input.hidden = "text" !== t.ref.selected.type, w.element.dataset.active = null !== t.ref.selected.id, E.setAttribute("style", "opacity:0"), _.setAttribute("style", "opacity:0"), y.forEach(function (e) {
                                    e.visual.setAttribute("style", "opacity:0; pointer-events:none;"), e.hitbox.setAttribute("style", "pointer-events:none;")
                                });
                                var K = t.query("GET_MARKUP_FILTER");
                                c.filter(K).sort(Lt).forEach(function (e, r) {
                                    var i = l(e, 2), o = i[0], c = i[1], u = c.id, d = c.isDestroyed, h = c.isDirty,
                                        g = c.isSelected, v = c.allowSelect, T = c.allowMove, A = c.allowResize,
                                        R = c.allowInput;
                                    if (d) {
                                        var x = t.ref.elements[u];
                                        x && (x.dragger && x.dragger.destroy(), t.ref.elements[u] = null, x.parentNode.removeChild(x))
                                    } else {
                                        var I, C, O, S = t.ref.elements[u];
                                        if (S || (S = Mt(o, c), t.ref.elements[u] = S, v ? (S.dragger = $n(S, function () {
                                            C = Date.now(), I = a({}, S.rect), (O = u === t.ref.selected.id) || s(u)
                                        }, function (e, t) {
                                            T && f(u, I, t, m, B)
                                        }, function (e, n) {
                                            if (R && "text" === o && O) {
                                                var r = Ee({x: 0, y: 0}, n), i = Date.now() - C;
                                                if (!(r > 10 || i > 750)) {
                                                    t.ref.input.focus();
                                                    var a = t.markupX + S.bbox.x, l = S.bbox.width, c = (e.offsetX - a) / l,
                                                        u = Math.round(t.ref.input.value.length * c);
                                                    t.ref.input.setSelectionRange(u, u)
                                                }
                                            }
                                        }), S.dragger.disable()) : S.setAttribute("style", "pointer-events:none;")), S.dragger && (n.allowInteraction ? S.dragger.enable() : S.dragger.disable()), r !== S.index) {
                                            S.index = r;
                                            var M = t.ref.shapeGroup;
                                            M.insertBefore(S, M.childNodes[r + 1])
                                        }
                                        if (h && bt(S, o, c, m, B), g) {
                                            var b = w.rect.element.width, L = w.rect.element.height, P = t.markupX - .5 * b,
                                                G = t.markupY - L - 15, k = "text" === o ? S.bbox : S.rect, D = !1,
                                                U = function (e) {
                                                    var t = e.fontColor, n = e.backgroundColor, r = e.lineColor,
                                                        i = e.borderColor;
                                                    return t || n || r || i
                                                }(c);
                                            if (U) {
                                                var V = Xe(U);
                                                D = (.2126 * V[0] + .7152 * V[1] + .0722 * V[2]) / 255 > .65, p.setAttribute("is-bright-color", D)
                                            }
                                            "line" === o ? (P += k.x, G += k.y, nr(E, {
                                                d: "M ".concat(k.x, " ").concat(k.y, " L ").concat(k.x + k.width, " ").concat(k.y + k.height),
                                                style: "opacity:1"
                                            })) : "path" === o ? (P += (k = {
                                                x: c.points[0].x * m.width,
                                                y: c.points[0].y * m.height,
                                                width: 0,
                                                height: 0
                                            }).x, G += k.y, nr(E, {
                                                d: Tt(c.points.map(function (e) {
                                                    return {x: e.x * m.width, y: e.y * m.height}
                                                })), style: "opacity:1"
                                            })) : k && (P += k.x + .5 * k.width, G += k.y, nr(_, {
                                                x: k.x - ("text" === o ? 5 : 0),
                                                y: k.y,
                                                width: k.width + ("text" === o ? 10 : 0),
                                                height: k.height,
                                                style: "opacity:1"
                                            }));
                                            var z = t.markupY + 10, N = t.markupY + t.markupHeight - 10, F = t.markupX + 10,
                                                W = t.markupX + t.markupWidth - 10;
                                            if (G < z ? G = z : G + L > N && (G = N - L), P < F ? P = F : P + b > W && (P = W - b), k || (w.element.dataset.active = "false"), w.element.setAttribute("style", "transform: translate3d(".concat(P, "px, ").concat(G, "px, 0)")), "text" === o && k) {
                                                var q = k.width + 65, H = t.markupWidth - k.x,
                                                    Y = "\n                        width: ".concat(Math.min(q, H), "px;\n                        height: ").concat(k.height, "px;\n                        color: ").concat(S.getAttribute("fill"), ";\n                        font-family: ").concat(S.getAttribute("font-family"), ";\n                        font-size: ").concat(S.getAttribute("font-size").replace(/px/, ""), "px;\n                        font-weight: ").concat(S.getAttribute("font-weight") || "normal", ";\n                    ");
                                                fe() ? Y += "\n                            left: ".concat(Math.round(t.markupX + k.x), "px;\n                            top: ").concat(Math.round(t.markupY + k.y), "px;\n                        ") : Y += "\n                            transform: translate3d(".concat(Math.round(t.markupX + k.x), "px,").concat(Math.round(t.markupY + k.y), "px,0);\n                        "), t.ref.input.setAttribute("style", Y), S.setAttribute("fill", "none")
                                            }
                                            if ("text" === o) return;
                                            if (!A) return;
                                            var Z = "line" === o ? ir : or;
                                            y.forEach(function (e, t) {
                                                var n = Z[t];
                                                if (n) {
                                                    var r = "line" === o ? "move" : "".concat(ar[n], "-resize"),
                                                        i = lr[n](S.rect);
                                                    nr(e.visual, {
                                                        cx: i.x,
                                                        cy: i.y,
                                                        style: "opacity:1"
                                                    }), nr(e.hitbox, {cx: i.x, cy: i.y, style: "cursor:".concat(r)})
                                                }
                                            })
                                        }
                                        c.isDirty = !1
                                    }
                                }), Z && (dr(t), "text" === H.type ? t.ref.input.value = H.settings.text : t.ref.selected.id && fr(t, n.onResize))
                            }
                        }
                    }
                }
            })
        }), ur = function (e) {
            return e.forEach(function (e) {
                return e[1].isDirty = !0
            })
        }, sr = function (e, t) {
            var n = t.drawLength, r = t.markup, i = t.markupX, o = t.markupY, a = t.currentWidth, l = t.currentHeight,
                c = t.scale;
            return !(n === e.ref.previousDrawLength && (i !== e.ref.previousX ? (ur(r), 0) : o !== e.ref.previousY ? (ur(r), 0) : c !== e.ref.previousScale ? (ur(r), 0) : l !== e.ref.previousCurrentHeight ? (ur(r), 0) : a !== e.ref.previousCurrentWidth ? (ur(r), 0) : r.length === e.ref.previousMarkupLength && !r.find(function (e) {
                return e[1].isDirty
            })))
        }, fr = function (e, t) {
            var n = e.ref.selected.id, r = "g" === e.ref.elements[n].nodeName ? ir : or;
            e.ref.manipulators.forEach(function (i, o) {
                var a = r[o];
                if (a) {
                    var l = null;
                    i.dragger = $n(i.hitbox, function () {
                        l = {x: parseFloat(p(i.hitbox, "cx")), y: parseFloat(p(i.hitbox, "cy"))}
                    }, function (r, i) {
                        t(n, a, l, i, e.ref.viewSize)
                    }, null, {stopPropagation: !0})
                }
            })
        }, dr = function (e) {
            e.ref.manipulators.forEach(function (e) {
                e.dragger && (e.dragger.destroy(), e.dragger = null)
            })
        }, hr = {
            38: "up",
            40: "down",
            37: "left",
            39: "right",
            189: "minus",
            187: "plus",
            72: "h",
            76: "l",
            81: "q",
            82: "r",
            84: "t",
            86: "v",
            90: "z",
            219: "left_bracket",
            221: "right_bracket"
        }, pr = function (e, t, n, r, i) {
            var o = null, a = !0, l = {enabled: !0}, c = function (e) {
                var i = hr[e.keyCode] || e.keyCode;
                n[i] && (e.stopPropagation(), a && (o = t(i), a = !1), n[i](o), r(o))
            }, u = function (e) {
                var t = hr[e.keyCode] || e.keyCode;
                n[t] && (e.stopPropagation(), i(o), a = !0)
            };
            return e.addEventListener("keydown", c), e.addEventListener("keyup", u), {
                enable: function () {
                    l.enabled || (e.addEventListener("keydown", c), e.addEventListener("keyup", u)), l.enabled = !0
                }, disable: function () {
                    l.enabled && (e.removeEventListener("keydown", c), e.removeEventListener("keyup", u)), l.enabled = !1
                }, destroy: function () {
                    e.removeEventListener("keydown", c), e.removeEventListener("keyup", u)
                }
            }
        }, gr = function (e, t, n) {
            var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
                i = arguments.length > 4 ? arguments[4] : void 0;
            t = Math.round(t), n = Math.round(n);
            var o = i || document.createElement("canvas"), a = o.getContext("2d");
            return r >= 5 && r <= 8 ? (o.width = n, o.height = t) : (o.width = t, o.height = n), a.save(), -1 !== r && a.transform.apply(a, ut(t, n, r)), a.drawImage(e, 0, 0, t, n), a.restore(), o
        }, mr = function () {
            self.onmessage = function (e) {
                createImageBitmap(e.data.message.file).then(function (t) {
                    self.postMessage({id: e.data.id, message: t}, [t])
                })
            }
        }, vr = function (e, t, n) {
            var r = e.createShader(n);
            return e.shaderSource(r, t), e.compileShader(r), r
        }, yr = function (e, t, n) {
            var r = e.createProgram();
            return e.attachShader(r, vr(e, t, e.VERTEX_SHADER)), e.attachShader(r, vr(e, n, e.FRAGMENT_SHADER)), e.linkProgram(r), r
        }, Er = function () {
            var e = new Float32Array(16);
            return e[0] = 1, e[5] = 1, e[10] = 1, e[15] = 1, e
        }, _r = function (e, t, n, r, i) {
            var o = 1 / Math.tan(t / 2), a = 1 / (r - i);
            e[0] = o / n, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = o, e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[11] = -1, e[12] = 0, e[13] = 0, e[15] = 0, e[10] = (i + r) * a, e[14] = 2 * i * r * a
        }, wr = function (e, t) {
            var n = t[0], r = t[1], i = t[2];
            e[12] = e[0] * n + e[4] * r + e[8] * i + e[12], e[13] = e[1] * n + e[5] * r + e[9] * i + e[13], e[14] = e[2] * n + e[6] * r + e[10] * i + e[14], e[15] = e[3] * n + e[7] * r + e[11] * i + e[15]
        }, Tr = function (e, t) {
            var n = t[0], r = t[1], i = t[2];
            e[0] = e[0] * n, e[1] = e[1] * n, e[2] = e[2] * n, e[3] = e[3] * n, e[4] = e[4] * r, e[5] = e[5] * r, e[6] = e[6] * r, e[7] = e[7] * r, e[8] = e[8] * i, e[9] = e[9] * i, e[10] = e[10] * i, e[11] = e[11] * i
        }, Ar = function (e, t) {
            var n = Math.sin(t), r = Math.cos(t), i = e[4], o = e[5], a = e[6], l = e[7], c = e[8], u = e[9], s = e[10],
                f = e[11];
            e[4] = i * r + c * n, e[5] = o * r + u * n, e[6] = a * r + s * n, e[7] = l * r + f * n, e[8] = c * r - i * n, e[9] = u * r - o * n, e[10] = s * r - a * n, e[11] = f * r - l * n
        }, Rr = function (e, t) {
            var n = Math.sin(t), r = Math.cos(t), i = e[0], o = e[1], a = e[2], l = e[3], c = e[8], u = e[9], s = e[10],
                f = e[11];
            e[0] = i * r - c * n, e[1] = o * r - u * n, e[2] = a * r - s * n, e[3] = l * r - f * n, e[8] = i * n + c * r, e[9] = o * n + u * r, e[10] = a * n + s * r, e[11] = l * n + f * r
        }, xr = function (e, t) {
            var n = Math.sin(t), r = Math.cos(t), i = e[0], o = e[1], a = e[2], l = e[3], c = e[4], u = e[5], s = e[6],
                f = e[7];
            e[0] = i * r + c * n, e[1] = o * r + u * n, e[2] = a * r + s * n, e[3] = l * r + f * n, e[4] = c * r - i * n, e[5] = u * r - o * n, e[6] = s * r - a * n, e[7] = f * r - l * n
        }, Ir = "\nattribute vec4 aPosition;\nvoid main() {\n\tgl_Position = aPosition;\n}\n", Cr = function (e, t, n) {
            var r = {width: 0, height: 0}, i = {x: 0, y: 0}, o = null, a = function (e) {
                    return e * Math.PI / 180
                }(30), l = Math.tan(a / 2), u = {antialias: !1, alpha: !1},
                s = e.getContext("webgl", u) || e.getContext("experimental-webgl", u);
            if (!s) return null;
            s.enable(s.BLEND), s.blendFunc(s.SRC_ALPHA, s.ONE_MINUS_SRC_ALPHA);
            var f = yr(s, Ir, "\nprecision mediump float;\n\nuniform vec2 uViewportSize;\nuniform vec3 uColorStart;\nuniform vec3 uColorEnd;\nuniform vec2 uOverlayLeftTop;\nuniform vec2 uOverlayRightBottom;\nuniform vec4 uColorCanvasBackground;\n\nvoid main() {\n\n\tfloat x = gl_FragCoord.x;\n\tfloat y = gl_FragCoord.y;\n\n\tvec2 center = vec2(.5, .5);\n\tvec2 st = vec2(x / uViewportSize.x, y / uViewportSize.y);\n\tfloat mixValue = distance(st, center) * 1.5; // expand outside view (same as doka--root::after)\n\tvec3 color = mix(uColorStart, uColorEnd, mixValue);\n\n\tif (uColorCanvasBackground[3] == 1.0) {\n\n\t\tfloat innerLeft = uOverlayLeftTop.x;\n\t\tfloat innerRight = uOverlayRightBottom.x;\n\t\tfloat innerTop = uOverlayRightBottom.y;\n\t\tfloat innerBottom = uOverlayLeftTop.y;\n\n\t\tif (x < innerLeft || x > innerRight || y < innerTop || y > innerBottom) {\n\t\t\tgl_FragColor = vec4(color, 1.0);\n\t\t\treturn;\n\t\t}\n\n\t\tgl_FragColor = uColorCanvasBackground;\n\t\treturn;\n\t}\n\t\n\tgl_FragColor = vec4(color, 1.0);\n}\n"),
                d = s.getUniformLocation(f, "uColorStart"), h = s.getUniformLocation(f, "uColorEnd"),
                p = s.getUniformLocation(f, "uViewportSize"), g = s.getAttribLocation(f, "aPosition"),
                m = s.getUniformLocation(f, "uOverlayLeftTop"), v = s.getUniformLocation(f, "uOverlayRightBottom"),
                y = s.getUniformLocation(f, "uColorCanvasBackground"), E = s.createBuffer(),
                _ = new Float32Array([1, -1, 1, 1, -1, -1, -1, 1]);
            s.bindBuffer(s.ARRAY_BUFFER, E), s.bufferData(s.ARRAY_BUFFER, _, s.STATIC_DRAW), s.bindBuffer(s.ARRAY_BUFFER, null);
            var w = yr(s, Ir, "\nprecision mediump float;\n\nuniform vec2 uOverlayLeftTop;\nuniform vec2 uOverlayRightBottom;\nuniform vec4 uOutlineColor;\nuniform float uOutlineWidth;\n\nvoid main() {\n\n\tfloat x = gl_FragCoord.x;\n\tfloat y = gl_FragCoord.y;\n\n\tfloat innerLeft = uOverlayLeftTop.x;\n\tfloat innerRight = uOverlayRightBottom.x;\n\tfloat innerTop = uOverlayRightBottom.y;\n\tfloat innerBottom = uOverlayLeftTop.y;\n\n\tfloat outerLeft = innerLeft - uOutlineWidth;\n\tfloat outerRight = innerRight + uOutlineWidth;\n\tfloat outerTop = innerTop - uOutlineWidth;\n\tfloat outerBottom = innerBottom + uOutlineWidth;\n\t\n\tif (x < outerLeft || x >= outerRight || y < outerTop || y >= outerBottom) {\n\t\tdiscard;\n\t}\n\n\tif (x < innerLeft || x >= innerRight || y < innerTop || y >= innerBottom) {\n\t\tgl_FragColor = uOutlineColor;\n\t}\n}\n"),
                T = s.getAttribLocation(w, "aPosition"), A = s.getUniformLocation(w, "uOutlineWidth"),
                R = s.getUniformLocation(w, "uOutlineColor"), x = s.getUniformLocation(w, "uOverlayLeftTop"),
                I = s.getUniformLocation(w, "uOverlayRightBottom"), C = s.createBuffer(),
                O = new Float32Array([1, -1, 1, 1, -1, -1, -1, 1]);
            s.bindBuffer(s.ARRAY_BUFFER, C), s.bufferData(s.ARRAY_BUFFER, O, s.STATIC_DRAW), s.bindBuffer(s.ARRAY_BUFFER, null);
            var S = yr(s, "\nattribute vec4 aPosition;\nattribute vec2 aTexCoord;\nuniform mat4 uMatrix;\n\n// send to fragment shader\nvarying vec2 vTexCoord;\nvarying vec4 vPosition;\n\nvoid main () {\n    vPosition = uMatrix * aPosition;\n    gl_Position = vPosition;\n    vTexCoord = aTexCoord;\n}\n", "\nprecision mediump float;\n\nuniform sampler2D uTexture;\nuniform vec2 uTextureSize;\n\nuniform float uColorOpacity;\nuniform mat4 uColorMatrix;\nuniform vec4 uColorOffset;\n\nuniform vec4 uOverlayColor;\nuniform vec2 uOverlayLeftTop;\nuniform vec2 uOverlayRightBottom;\n\nvarying vec2 vTexCoord;\nvarying vec4 vPosition;\n\nvoid main () {\n\n    vec3 cB = vec3(1.0);\n\n\tvec4 cF = texture2D(uTexture, vTexCoord);\n\t\n\tvec4 cM = (cF * uColorMatrix) + uColorOffset;\n\n    float r = max(0.0, cM.r * cM.a) + (cB.r * (1.0 - cM.a));\n    float g = max(0.0, cM.g * cM.a) + (cB.g * (1.0 - cM.a));\n    float b = max(0.0, cM.b * cM.a) + (cB.b * (1.0 - cM.a));\n\n\tvec4 color = vec4(r, g, b, cF.a);\n\t\n\t// test if falls within\n    if ((gl_FragCoord.x < uOverlayLeftTop.x || gl_FragCoord.x > uOverlayRightBottom.x) || \n        (gl_FragCoord.y > uOverlayLeftTop.y || gl_FragCoord.y < uOverlayRightBottom.y)) {\n\t\tcolor *= uOverlayColor;\n\t}\n\t\n    gl_FragColor = color * uColorOpacity;\n}\n");
            s.useProgram(S);
            var M = s.getUniformLocation(S, "uMatrix"), b = s.getUniformLocation(S, "uTexture"),
                L = s.getUniformLocation(S, "uTextureSize"), P = s.getUniformLocation(S, "uOverlayColor"),
                G = s.getUniformLocation(S, "uOverlayLeftTop"), k = s.getUniformLocation(S, "uOverlayRightBottom"),
                D = s.getUniformLocation(S, "uColorOpacity"), U = s.getUniformLocation(S, "uColorOffset"),
                V = s.getUniformLocation(S, "uColorMatrix"), B = s.getAttribLocation(S, "aPosition"),
                z = s.getAttribLocation(S, "aTexCoord"), N = function (e, t, n, r, i) {
                    var o = e.createTexture();
                    e.activeTexture(e.TEXTURE0 + r), e.bindTexture(e.TEXTURE_2D, o), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.LINEAR), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, e.LINEAR), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE), e.uniform1i(t, r), e.uniform2f(n, i.width, i.height);
                    try {
                        e.texImage2D(e.TEXTURE_2D, 0, e.RGBA, e.RGBA, e.UNSIGNED_BYTE, i)
                    } catch (t) {
                        e.texImage2D(e.TEXTURE_2D, 0, e.RGBA, i.width, i.height, 0, e.RGBA, e.UNSIGNED_BYTE, null)
                    }
                    return o
                }(s, b, L, 0, t), F = t.width * n, W = t.height * n, q = -.5 * F, H = .5 * W, Y = .5 * F, Z = -.5 * W,
                X = new Float32Array([q, H, q, Z, Y, H, Y, Z]), K = new Float32Array([0, 0, 0, 1, 1, 0, 1, 1]),
                j = X.length / 2, Q = s.createBuffer();
            s.bindBuffer(s.ARRAY_BUFFER, Q), s.bufferData(s.ARRAY_BUFFER, X, s.STATIC_DRAW), s.bindBuffer(s.ARRAY_BUFFER, null);
            var J = s.createBuffer();
            s.bindBuffer(s.ARRAY_BUFFER, J), s.bufferData(s.ARRAY_BUFFER, K, s.STATIC_DRAW), s.bindBuffer(s.ARRAY_BUFFER, null);
            var $ = 0, ee = 0, te = {
                release: function () {
                    e.width = 1, e.height = 1
                }, resize: function (t, a) {
                    e.width = t * n, e.height = a * n, e.style.width = "".concat(t, "px"), e.style.height = "".concat(a, "px"), r.width = t * n, r.height = a * n, i.x = .5 * r.width, i.y = .5 * r.height, o = r.width / r.height, s.viewport(0, 0, s.canvas.width, s.canvas.height)
                }, update: function (e, u, _, O, b, L, F, W, q, H, Y, Z, X, K, ne, re, ie, oe, ae) {
                    var le = Y ? Y.height * n : r.height;
                    $ = t.width * n, ee = t.height * n, e *= n, u *= n, _ *= n, O *= n;
                    var ce = ee / 2 / l * (r.height / le) * -1;
                    ce /= -l * ce * 2 / r.height;
                    var ue = .5 * $, se = .5 * ee;
                    e -= ue, u -= se;
                    var fe = W, de = -(i.x - ue) + _, he = i.y - se - O, pe = Er();
                    _r(pe, a, o, 1, 2 * -ce), wr(pe, [de, he, ce]), wr(pe, [e, -u, 0]), Tr(pe, [fe, fe, fe]), xr(pe, -F), wr(pe, [-e, u, 0]), Rr(pe, L), Ar(pe, b), s.clearColor(K[0], K[1], K[2], 1), s.clear(s.COLOR_BUFFER_BIT);
                    var ge = Z.x * n, me = Z.y * n, ve = Z.width * n, ye = Z.height * n, Ee = ge, _e = Ee + ve,
                        we = r.height - me, Te = r.height - (me + ye);
                    s.useProgram(f), s.uniform3fv(d, ne), s.uniform3fv(h, re), s.uniform4fv(y, ae.map(function (e, t) {
                        return t < 3 ? e / 255 : e
                    })), s.uniform2f(p, r.width, r.height), s.uniform2f(m, Ee, we), s.uniform2f(v, _e, Te), s.bindBuffer(s.ARRAY_BUFFER, E), s.vertexAttribPointer(g, 2, s.FLOAT, !1, 0, 0), s.enableVertexAttribArray(g), s.drawArrays(s.TRIANGLE_STRIP, 0, 4), s.useProgram(S), s.bindFramebuffer(s.FRAMEBUFFER, null), s.bindTexture(s.TEXTURE_2D, N), s.bindBuffer(s.ARRAY_BUFFER, Q), s.vertexAttribPointer(B, 2, s.FLOAT, !1, 0, 0), s.enableVertexAttribArray(B), s.bindBuffer(s.ARRAY_BUFFER, J), s.vertexAttribPointer(z, 2, s.FLOAT, !1, 0, 0), s.enableVertexAttribArray(z), s.uniformMatrix4fv(M, !1, pe), s.uniform2f(G, Ee, we), s.uniform2f(k, _e, Te), s.uniform4fv(P, X), s.uniform1f(D, H), s.uniform4f(U, q[4], q[9], q[14], q[19]), s.uniformMatrix4fv(V, !1, [].concat(c(q.slice(0, 4)), c(q.slice(5, 9)), c(q.slice(10, 14)), c(q.slice(15, 19)))), s.drawArrays(s.TRIANGLE_STRIP, 0, j), s.useProgram(w), s.uniform1f(A, ie), s.uniform4fv(R, oe), s.uniform2f(x, Ee, we), s.uniform2f(I, _e, Te), s.bindBuffer(s.ARRAY_BUFFER, C), s.vertexAttribPointer(T, 2, s.FLOAT, !1, 0, 0), s.enableVertexAttribArray(T), s.drawArrays(s.TRIANGLE_STRIP, 0, 4), te.onupdate(s)
                }, onupdate: function () {
                }
            };
            return te
        }, Or = function (e) {
            var t = 0, n = {}, r = A(e), i = A(e), o = A(e), a = A(e);
            return r.onupdate = function (e) {
                return n.x = e
            }, r.oncomplete = function () {
                return t++
            }, i.onupdate = function (e) {
                return n.y = e
            }, i.oncomplete = function () {
                return t++
            }, o.onupdate = function (e) {
                return n.width = e
            }, o.oncomplete = function () {
                return t++
            }, a.onupdate = function (e) {
                return n.height = e
            }, a.oncomplete = function () {
                return t++
            }, {
                interpolate: function (e) {
                    r.interpolate(e), i.interpolate(e), o.interpolate(e), a.interpolate(e)
                }, setTarget: function (e) {
                    t = 0, r.target = e ? e.x : null, i.target = e ? e.y : null, o.target = e ? e.width : null, a.target = e ? e.height : null
                }, getRect: function () {
                    return n
                }, isStable: function () {
                    return 4 === t
                }
            }
        }, Sr = function (e) {
            var t = 0, n = {}, r = A(e), i = A(e), o = A(e);
            return r.onupdate = function (e) {
                return n.r = e
            }, r.oncomplete = function () {
                return t++
            }, i.onupdate = function (e) {
                return n.g = e
            }, i.oncomplete = function () {
                return t++
            }, o.onupdate = function (e) {
                return n.b = e
            }, o.oncomplete = function () {
                return t++
            }, {
                interpolate: function (e) {
                    r.interpolate(e), i.interpolate(e), o.interpolate(e)
                }, setTarget: function (e) {
                    t = 0, r.target = e ? e[0] : null, i.target = e ? e[1] : null, o.target = e ? e[2] : null
                }, getColor: function () {
                    return [n.r, n.g, n.b]
                }, isStable: function () {
                    return 3 === t
                }
            }
        }, Mr = {stiffness: .25, damping: .25, mass: 2.5},
        br = [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0], Lr = U({
            name: "image-gl",
            ignoreRect: !0,
            ignoreRectUpdate: !0,
            mixins: {
                apis: ["top", "left", "width", "height", "xOrigin", "yOrigin", "xTranslation", "yTranslation", "xRotation", "yRotation", "zRotation", "scale", "overlay", "stage", "colorMatrix", "colorOpacity", "overlayOpacity", "outlineWidth", "isDraft"],
                animations: {
                    xTranslation: er,
                    yTranslation: er,
                    xOrigin: er,
                    yOrigin: er,
                    scale: er,
                    xRotation: {type: "spring", stiffness: .25, damping: .25, mass: 2.5},
                    yRotation: {type: "spring", stiffness: .25, damping: .25, mass: 2.5},
                    zRotation: {type: "spring", stiffness: .25, damping: .25, mass: 2.5},
                    colorOpacity: {type: "tween", delay: 150, duration: 750},
                    overlayOpacity: "spring",
                    introScale: {type: "spring", stiffness: .25, damping: .75, mass: 15},
                    outlineWidth: er
                }
            },
            create: function (e) {
                var t = e.root;
                t.ref.canvas = document.createElement("canvas"), t.ref.canvas.width = 0, t.ref.canvas.height = 0, t.appendChild(t.ref.canvas), t.ref.gl = null, t.introScale = 1, t.ref.isPreview = "preview" === t.query("GET_STYLE_LAYOUT_MODE"), t.ref.shouldZoom = !t.ref.isPreview, t.ref.didZoom = !1, t.ref.backgroundColor = null, t.ref.backgroundColorSpring = Sr(Mr), t.ref.backgroundColorCenter = null, t.ref.backgroundColorCenterSpring = Sr(Mr), t.ref.overlaySpring = Or(er), t.ref.stageSpring = Or(er), t.ref.outlineSpring = A(er), t.ref.colorMatrixSpring = [], t.ref.colorMatrixStable = !0, t.ref.colorMatrixStableCount = 0, t.ref.colorMatrixPositions = [];
                for (var n = 0; n < 20; n++) !function () {
                    var e = n, r = A(Mr);
                    r.target = br[e], r.onupdate = function (n) {
                        t.ref.colorMatrixPositions[e] = n
                    }, r.oncomplete = function () {
                        t.ref.colorMatrixStableCount++
                    }, t.ref.colorMatrixSpring[e] = r
                }();
                t.ref.dragger = $n(t.element, function () {
                    t.dispatch("CROP_IMAGE_DRAG_GRAB")
                }, function (e, n) {
                    t.dispatch("CROP_IMAGE_DRAG", {value: n})
                }, function () {
                    t.dispatch("CROP_IMAGE_DRAG_RELEASE")
                }, {cancelOnMultiple: !0});
                var r = 0, i = 0;
                t.ref.keyboard = pr(t.element, function () {
                    return r = 0, i = 0, {x: 0, y: 0}
                }, {
                    up: function (e) {
                        e.y -= 20
                    }, down: function (e) {
                        e.y += 20
                    }, left: function (e) {
                        e.x -= 20
                    }, right: function (e) {
                        e.x += 20
                    }, plus: function () {
                        r += .1, t.dispatch("CROP_IMAGE_RESIZE_AMOUNT", {value: r}), t.dispatch("CROP_IMAGE_RESIZE_RELEASE")
                    }, minus: function () {
                        r -= .1, t.dispatch("CROP_IMAGE_RESIZE_AMOUNT", {value: r}), t.dispatch("CROP_IMAGE_RESIZE_RELEASE")
                    }, left_bracket: function () {
                        i -= Math.PI / 128, t.dispatch("CROP_IMAGE_ROTATE_ADJUST", {value: i})
                    }, right_bracket: function () {
                        i += Math.PI / 128, t.dispatch("CROP_IMAGE_ROTATE_ADJUST", {value: i})
                    }, h: function () {
                        t.dispatch("CROP_IMAGE_FLIP_HORIZONTAL")
                    }, l: function () {
                        t.dispatch("CROP_IMAGE_ROTATE_LEFT")
                    }, q: function () {
                        t.dispatch("CROP_RESET")
                    }, r: function () {
                        t.dispatch("CROP_IMAGE_ROTATE_RIGHT")
                    }, v: function () {
                        t.dispatch("CROP_IMAGE_FLIP_VERTICAL")
                    }, z: function () {
                        t.dispatch("CROP_ZOOM")
                    }
                }, function (e) {
                    e && t.dispatch("CROP_IMAGE_DRAG", {value: e})
                }, function (e) {
                    e && t.dispatch("CROP_IMAGE_DRAG_RELEASE")
                });
                var o = t.query("GET_FILE"), a = URL.createObjectURL(o.data), l = function (e) {
                    var n = on(e, {
                            width: t.query("GET_MAX_IMAGE_PREVIEW_WIDTH"),
                            height: t.query("GET_MAX_IMAGE_PREVIEW_HEIGHT")
                        }), r = gr(e, n.width, n.height, o.orientation), i = Math.max(1, .75 * window.devicePixelRatio),
                        a = r.height / r.width, l = 96 * i, c = gr(r, a > 1 ? l : l / a, a > 1 ? l * a : l),
                        u = r.getContext("2d").getImageData(0, 0, r.width, r.height),
                        s = c.getContext("2d").getImageData(0, 0, c.width, c.height);
                    st(r), st(c), t.ref.gl = Cr(t.ref.canvas, u, i);
                    var f = t.query("GET_OUTPUT_CANVAS_SYNC_TARGET");
                    f && (t.ref.gl.onupdate = function () {
                        var e = t.ref.overlaySpring.getRect();
                        f.getContext("2d").drawImage(t.ref.canvas, e.x * i, e.y * i, e.width * i, e.height * i, 0, 0, f.width, f.height)
                    }), t.ref.gl ? (t.dispatch("DID_RECEIVE_IMAGE_DATA", {
                        previewData: u,
                        thumbData: s
                    }), t.dispatch("DID_PRESENT_IMAGE")) : t.dispatch("MISSING_WEBGL")
                }, c = function () {
                    (function (e) {
                        return new Promise(function (t, n) {
                            var r = new Image;
                            r.onload = function () {
                                t(r)
                            }, r.onerror = function (e) {
                                n(e)
                            }, r.src = e
                        })
                    })(a).then(l)
                };
                if (function (e) {
                    var t = window.navigator.userAgent.match(/Firefox\/([0-9]+)\./);
                    return !((t ? parseInt(t[1]) : null) <= 58) && "createImageBitmap" in window && function (e) {
                        return /^image/.test(e.type) && !/svg/.test(e.type)
                    }(e)
                }(o.data)) {
                    var u = Ut(mr);
                    u.post({file: o.data}, function (e) {
                        u.terminate(), e ? l(e) : c()
                    })
                } else c();
                t.ref.canvasStyle = getComputedStyle(t.ref.canvas), t.ref.previousBackgroundColor, t.ref.previousLeft, t.ref.previousTop, t.ref.previousWidth, t.ref.previousHeight, t.element.dataset.showInteractionIndicator = !1, t.ref.handleFocus = function (e) {
                    9 === e.keyCode && (t.element.dataset.showInteractionIndicator = !0)
                }, t.ref.handleBlur = function (e) {
                    t.element.dataset.showInteractionIndicator = !1
                }, C(t.element)("keyup", t.ref.handleFocus), C(t.element)("blur", t.ref.handleBlur)
            },
            destroy: function (e) {
                var t = e.root;
                t.ref.gl && (t.ref.gl.release(), t.ref.gl = null), t.ref.dragger.destroy(), O(t.element)("keyup", t.ref.handleFocus), O(t.element)("blur", t.ref.handleBlur)
            },
            read: function (e) {
                var t = e.root, n = t.ref.canvasStyle.backgroundColor, r = t.ref.canvasStyle.color;
                if ("transparent" !== r && "" !== r || (r = null), "transparent" !== n && "" !== n || (n = null), n && n !== t.ref.previousBackgroundColor) {
                    var i = Xe(n).map(function (e) {
                        return e / 255
                    }), o = (i[0] + i[1] + i[2]) / 3;
                    t.ref.backgroundColor = i, t.ref.backgroundColorCenter = i.map(function (e) {
                        return o > .5 ? e - .15 : e + .15
                    }), t.ref.previousBackgroundColor = n
                }
                r && r !== t.ref.previousOutlineColor && (t.ref.outlineColor = Xe(r).map(function (e) {
                    return e / 255
                }).concat(1), t.ref.previousOutlineColor = r)
            },
            write: V({
                SHOW_VIEW: function (e) {
                    var t = e.root;
                    "crop" === e.action.id ? (t.ref.dragger.enable(), t.element.setAttribute("tabindex", "0")) : (t.ref.dragger.disable(), t.element.removeAttribute("tabindex"))
                }
            }, function (e) {
                var t = e.root, n = e.props, r = (e.actions, e.timestamp);
                if (t.ref.gl && n.width && n.height) {
                    var i = t.ref, o = i.gl, a = i.previousWidth, l = i.previousHeight, c = i.shouldZoom, u = i.stageSpring,
                        s = i.overlaySpring, f = i.backgroundColorSpring, d = i.backgroundColorCenterSpring;
                    n.width === a && n.height === l || (t.ref.gl.resize(n.width, n.height), t.ref.previousWidth = n.width, t.ref.previousHeight = n.height), n.left === t.ref.previousLeft && n.top === t.ref.previousTop || (t.ref.canvas.style.transform = "translate(".concat(-n.left, "px, ").concat(-n.top, "px)"), t.ref.previousLeft = n.left, t.ref.previousTop = n.top), c && !t.ref.didZoom && (t.introScale = null, t.introScale = 1.15, t.introScale = 1, t.ref.didZoom = !0), f.setTarget(t.ref.backgroundColor), f.interpolate(r);
                    var h = f.isStable();
                    d.setTarget(t.ref.backgroundColorCenter), d.interpolate(r);
                    var p = d.isStable();
                    t.ref.colorMatrixStableCount = 0;
                    var g = n.colorMatrix || br, m = t.ref.colorMatrixSpring.map(function (e, n) {
                        return e.target = g[n], e.interpolate(r), t.ref.colorMatrixPositions[n]
                    }), v = 20 === t.ref.colorMatrixStableCount;
                    n.isDraft && s.setTarget(null), s.setTarget(n.overlay), s.interpolate(r);
                    var y = s.isStable();
                    n.isDraft && u.setTarget(null), u.setTarget(n.stage), u.interpolate(r);
                    var E = u.isStable();
                    return o.update(t.xOrigin, t.yOrigin, t.xTranslation + n.left, t.yTranslation + n.top, t.xRotation, t.yRotation, t.zRotation, t.scale * t.introScale, m, t.ref.isPreview ? 1 : t.colorOpacity, u.getRect(), s.getRect(), [1, 1, 1, 1 - t.overlayOpacity], f.getColor(), d.getColor(), f.getColor(), t.outlineWidth, t.ref.outlineColor, t.query("GET_BACKGROUND_COLOR")), y && E && v && h && p
                }
            })
        }), Pr = U({
            name: "image", ignoreRect: !0, mixins: {apis: ["offsetTop"]}, create: function (e) {
                var t = e.root, n = e.props;
                t.ref.imageGL = t.appendChildView(t.createChildView(Lr)), /markup/.test(t.query("GET_UTILS")) && (t.ref.markup = t.appendChildView(t.createChildView(cr, {
                    id: n.id,
                    opacity: 0,
                    onSelect: function (e) {
                        t.dispatch("MARKUP_SELECT", {id: e})
                    },
                    onDrag: function (e, n, r, i, o) {
                        t.dispatch("MARKUP_ELEMENT_DRAG", {id: e, origin: n, offset: r, size: i, scale: o})
                    },
                    onResize: function (e, n, r, i, o) {
                        t.dispatch("MARKUP_ELEMENT_RESIZE", {id: e, corner: n, origin: r, offset: i, size: o})
                    },
                    onUpdate: function (e, n) {
                        t.dispatch("MARKUP_UPDATE", {style: e, value: n})
                    },
                    isMarkupUtil: function (e) {
                        var t = e;
                        do {
                            if ("doka--markup-tools" === t.className) return !0
                        } while (t = t.parentNode);
                        return !1
                    }
                }))), t.ref.isModal = /modal/.test(t.query("GET_STYLE_LAYOUT_MODE"))
            }, write: V({
                DID_PRESENT_IMAGE: function (e) {
                    e.root.ref.imageGL.colorOpacity = 1
                }
            }, function (e) {
                var t = e.root, n = e.props, r = e.timestamp, i = t.ref.imageGL, o = t.ref.markup,
                    l = t.query("GET_CROP", n.id, r);
                if (l) {
                    var c = l.isDraft, u = l.cropRect, s = l.cropStatus, f = l.origin, d = l.translation,
                        h = l.translationBand, p = l.scale, g = l.scaleBand, m = l.rotation, v = l.rotationBand, y = l.flip,
                        E = l.colorMatrix, _ = t.query("GET_ROOT"), w = t.query("GET_STAGE"), T = w.x, A = w.y;
                    c && (i.scale = null, i.zRotation = null, i.xTranslation = null, i.yTranslation = null, i.xOrigin = null, i.yOrigin = null), i.colorMatrix = E;
                    var R = t.query("IS_ACTIVE_VIEW", "crop"), x = t.query("IS_ACTIVE_VIEW", "markup"), I = R ? .75 : .95,
                        C = a({}, u), O = 1, S = R ? 1 : 5;
                    if (t.query("IS_ACTIVE_VIEW", "resize")) {
                        var M = s.image.width, b = s.image.height;
                        O = null === M && null === b ? s.crop.width / u.width : null === M ? b / u.height : M / u.width, O /= window.devicePixelRatio;
                        var L = u.width * O, P = u.height * O;
                        C.x = C.x + (.5 * u.width - .5 * L), C.y = C.y + (.5 * u.height - .5 * P), C.width = L, C.height = P
                    }
                    var G = t.ref.isModal ? 0 : _.left, k = t.ref.isModal ? 0 : _.top,
                        D = t.ref.isModal ? 0 : _.width - t.rect.element.width,
                        U = t.ref.isModal ? 0 : _.height - t.rect.element.height - n.offsetTop, V = (p + g) * O;
                    i.isDraft = c, i.overlayOpacity = I, i.xOrigin = f.x, i.yOrigin = f.y, i.xTranslation = d.x + h.x + T, i.yTranslation = d.y + h.y + A, i.left = G, i.top = k + n.offsetTop, i.width = t.rect.element.width + D, i.height = t.rect.element.height + U + n.offsetTop, i.scale = V, i.xRotation = y.vertical ? Math.PI : 0, i.yRotation = y.horizontal ? Math.PI : 0, i.zRotation = m.main + m.sub + v, i.stage = {
                        x: w.x + G,
                        y: w.y + k + n.offsetTop,
                        width: w.width,
                        height: w.height
                    }, i.overlay = {
                        x: C.x + T + G,
                        y: C.y + A + k + n.offsetTop,
                        width: C.width,
                        height: C.height
                    }, i.outlineWidth = S, o && (c && (o.translateX = null, o.translateY = null, o.markupX = null, o.markupY = null, o.markupWidth = null, o.markupHeight = null), o.opacity = R ? .3 : 1, o.stageOffsetX = T, o.stageOffsetY = A, o.markupX = C.x + T, o.markupY = C.y + A, o.markupWidth = C.width, o.markupHeight = C.height, o.allowInteraction = x)
                }
            })
        }), Gr = function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "group",
                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ["opacity"],
                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            return U({
                ignoreRect: !0,
                name: e,
                mixins: {
                    styles: ["opacity"].concat(c(t)),
                    animations: a({opacity: {type: "spring", stiffness: .25, damping: .5, mass: 5}}, n)
                },
                create: function (e) {
                    var t = e.root, n = e.props;
                    (n.controls || []).map(function (e) {
                        var n = t.createChildView(e.view, e);
                        e.didCreateView && e.didCreateView(n), t.appendChildView(n)
                    }), n.element && t.element.appendChild(n.element)
                }
            })
        }, kr = U({
            ignoreRect: !0,
            tag: "div",
            name: "dropdown-list",
            mixins: {
                styles: ["translateY", "opacity"],
                apis: ["selectedValue", "options", "onSelect"],
                animations: {translateY: "spring", opacity: {type: "tween", duration: 250}}
            },
            create: function (e) {
                var t = e.root, n = e.props;
                t.element.setAttribute("role", "list"), t.ref.handleClick = function () {
                    return n.action && n.action()
                }, t.element.addEventListener("click", t.ref.handleClick), t.ref.activeOptions = null, t.ref.activeSelectedValue
            },
            write: function (e) {
                var t = e.root, n = e.props;
                if (n.options !== t.ref.activeOptions && (t.ref.activeOptions = n.options, t.childViews.forEach(function (e) {
                    return t.removeChildView(e)
                }), n.options.map(function (e) {
                    var r = t.createChildView(Bn, a({}, e, {
                        action: function () {
                            return n.onSelect(e.value)
                        }
                    }));
                    return t.appendChildView(r)
                })), n.selectedValue !== t.ref.activeSelectedValue) {
                    t.ref.activeSelectedValue = n.selectedValue;
                    var r = n.options.findIndex(function (e) {
                        return "object" === i(e.value) && n.selectedValue ? JSON.stringify(e.value) === JSON.stringify(n.selectedValue) : e.value === n.selectedValue
                    });
                    t.childViews.forEach(function (e, t) {
                        e.element.setAttribute("aria-selected", t === r)
                    })
                }
            },
            destroy: function (e) {
                var t = e.root;
                t.element.removeEventListener("click", t.ref.handleClick)
            }
        }), Dr = U({
            ignoreRect: !0,
            tag: "div",
            name: "dropdown",
            mixins: {
                styles: ["opacity"],
                animations: {opacity: "spring"},
                apis: ["direction", "selectedValue", "options", "onSelect"]
            },
            create: function (e) {
                var t = e.root, n = e.props;
                t.ref.open = !1;
                var r = function (e) {
                    t.ref.open = e, t.dispatch("KICK")
                };
                t.ref.button = t.appendChildView(t.createChildView(Bn, a({}, n, {
                    action: function () {
                        r(!t.ref.open)
                    }
                }))), t.ref.list = t.appendChildView(t.createChildView(kr, a({}, n, {
                    opacity: 0, action: function () {
                        r(!1)
                    }
                }))), t.ref.handleBodyClick = function (e) {
                    t.element.contains(e.target) || r(!1)
                }, t.element.addEventListener("focusin", function (e) {
                    e.target !== t.ref.button.element && r(!0)
                }), t.element.addEventListener("focusout", function (e) {
                    t.element.contains(e.relatedTarget) || r(!1)
                }), document.body.addEventListener("click", t.ref.handleBodyClick)
            },
            destroy: function (e) {
                var t = e.root;
                document.body.removeEventListener("click", t.ref.handleBodyClick)
            },
            write: function (e) {
                var t = e.root, n = e.props;
                if (t.ref.list.opacity = t.ref.open ? 1 : 0, t.ref.list.selectedValue = n.selectedValue, t.ref.list.options = n.options, "up" === n.direction) {
                    var r = t.ref.list.rect.element.height;
                    t.ref.list.translateY = (t.ref.open ? -(r + 5) : -r) - t.rect.element.height
                } else t.ref.list.translateY = t.ref.open ? 0 : -5
            }
        }), Ur = U({
            name: "crop-rotator-line",
            ignoreRect: !0,
            ignoreRectUpdate: !0,
            mixins: {styles: ["translateX"], animations: {translateX: "spring"}},
            create: function (e) {
                for (var t = e.root, n = '<svg viewBox="-90 -5 180 10" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">', r = 0; r <= 180; r += 2) {
                    var i = r * (176 / 180) - 90 + 2, o = r % 10 == 0 ? .5 : .2;
                    n += '<circle fill="currentColor" cx="'.concat(i, '" cy="').concat(0, '" r="').concat(o, '"/>'), r % 10 == 0 && (n += '<text fill="currentColor" x="'.concat(i + (i < 0 ? -2.25 : 0 === i ? -.75 : -1.5), '" y="').concat(3.5, '">').concat(-90 + r, "&deg;</text>"))
                }
                n += "</svg>", t.element.innerHTML = n
            }
        }), Vr = U({
            name: "crop-rotator",
            ignoreRect: !0,
            mixins: {
                styles: ["opacity", "translateY"],
                animations: {opacity: {type: "spring", damping: .5, mass: 5}, translateY: "spring"},
                apis: ["rotation", "animate", "setAllowInteraction"]
            },
            create: function (e) {
                var t = e.root, n = e.props;
                t.element.setAttribute("tabindex", 0);
                var r = document.createElement("button");
                r.innerHTML = "<span>".concat(t.query("GET_LABEL_BUTTON_CROP_ROTATE_CENTER"), "</span>"), r.className = "doka--crop-rotator-center", r.addEventListener("click", function () {
                    t.dispatch("CROP_IMAGE_ROTATE_CENTER")
                }), t.appendChild(r);
                var i = null;
                t.appendChildView(t.createChildView(function (e, t) {
                    return U({name: e, ignoreRect: !0, create: t})
                }("crop-rotator-line-mask", function (e) {
                    var t = e.root, n = e.props;
                    i = t.appendChildView(t.createChildView(Ur, {translateX: Math.round(312 * n.rotation)}))
                }), n)), t.ref.line = i;
                var o = document.createElement("div");
                o.className = "doka--crop-rotator-bar", t.appendChild(o);
                var a = Math.PI / 4, l = 0;
                t.ref.dragger = $n(o, function () {
                    l = i.translateX / 312, t.dispatch("CROP_IMAGE_ROTATE_GRAB")
                }, function (e, n) {
                    var r = n.x / t.rect.element.width * (Math.PI / 2), i = ge(l + r, -a, a);
                    t.dispatch("CROP_IMAGE_ROTATE", {value: -i})
                }, function () {
                    t.dispatch("CROP_IMAGE_ROTATE_RELEASE")
                }, {stopPropagation: !0}), n.setAllowInteraction = function (e) {
                    e ? t.ref.dragger.enable() : t.ref.dragger.disable()
                }, t.ref.keyboard = pr(t.element, function () {
                    l = 0
                }, {
                    left: function () {
                        l += Math.PI / 128, t.dispatch("CROP_IMAGE_ROTATE_ADJUST", {value: l})
                    }, right: function () {
                        l -= Math.PI / 128, t.dispatch("CROP_IMAGE_ROTATE_ADJUST", {value: l})
                    }
                }, function () {
                }, function () {
                }), t.ref.prevRotation
            },
            destroy: function (e) {
                var t = e.root;
                t.ref.dragger.destroy(), t.ref.keyboard.destroy()
            },
            write: function (e) {
                var t = e.root, n = e.props, r = e.timestamp, i = n.animate, o = n.rotation;
                if (t.ref.prevRotation !== o) {
                    t.ref.prevRotation = o, i || 0 === o || (t.ref.line.translateX = null);
                    var a = 0, l = t.query("GET_CROP", n.id, r);
                    if (l && l.interaction && l.interaction.rotation) {
                        var c = rn(l.interaction.rotation).sub - o;
                        a = .025 * Math.sign(c) * Math.log10(1 + Math.abs(c) / .025)
                    }
                    t.ref.line.translateX = Math.round(312 * (-o - a))
                }
            }
        }), Br = ["nw", "ne", "se", "sw"], zr = ["n", "e", "s", "w"],
        Nr = k() && 1 === window.devicePixelRatio ? function (e) {
            return Math.round(e)
        } : function (e) {
            return e
        }, Fr = U({
            ignoreRect: !0,
            ignoreRectUpdate: !0,
            name: "crop-rect-focal-line",
            mixins: {
                styles: ["translateX", "translateY", "scaleX", "scaleY", "opacity"],
                animations: {
                    translateX: "spring",
                    translateY: "spring",
                    scaleX: "spring",
                    scaleY: "spring",
                    opacity: "spring"
                }
            }
        }), Wr = function (e) {
            return U({
                ignoreRect: !0,
                ignoreRectUpdate: !0,
                tag: "div",
                name: "crop-rect-edge-".concat(e),
                mixins: {styles: ["translateX", "translateY", "scaleX", "scaleY"], apis: ["setAllowInteraction"]},
                create: function (t) {
                    var n = t.root, r = t.props;
                    n.element.classList.add("doka--crop-rect-edge"), n.element.setAttribute("tabindex", 0), n.element.setAttribute("role", "button");
                    var i = e, o = function (e) {
                        return zr[(zr.indexOf(e) + 2) % zr.length]
                    }(e);
                    n.ref.dragger = $n(n.element, function () {
                        n.dispatch("CROP_RECT_DRAG_GRAB")
                    }, function (e, t) {
                        return n.dispatch("CROP_RECT_EDGE_DRAG", {offset: t, origin: i, anchor: o})
                    }, function () {
                        return n.dispatch("CROP_RECT_DRAG_RELEASE")
                    }, {stopPropagation: !0, cancelOnMultiple: !0}), r.setAllowInteraction = function (e) {
                        e ? n.ref.dragger.enable() : n.ref.dragger.disable()
                    }, n.ref.keyboard = pr(n.element, function () {
                        return {x: 0, y: 0}
                    }, {
                        up: function (e) {
                            e.y -= 20
                        }, down: function (e) {
                            e.y += 20
                        }, left: function (e) {
                            e.x -= 20
                        }, right: function (e) {
                            e.x += 20
                        }
                    }, function (e) {
                        n.dispatch("CROP_RECT_DRAG_GRAB"), n.dispatch("CROP_RECT_EDGE_DRAG", {
                            offset: e,
                            origin: i,
                            anchor: o
                        })
                    }, function () {
                        n.dispatch("CROP_RECT_DRAG_RELEASE")
                    })
                },
                destroy: function (e) {
                    var t = e.root;
                    t.ref.keyboard.destroy(), t.ref.dragger.destroy()
                }
            })
        }, qr = function (e, t, n) {
            return U({
                ignoreRect: !0,
                ignoreRectUpdate: !0,
                tag: "div",
                name: "crop-rect-corner-".concat(e),
                mixins: {
                    styles: ["translateX", "translateY", "scaleX", "scaleY"],
                    animations: {
                        translateX: er,
                        translateY: er,
                        scaleX: {type: "spring", delay: n},
                        scaleY: {type: "spring", delay: n},
                        opacity: {type: "spring", delay: t}
                    },
                    apis: ["setAllowInteraction"]
                },
                create: function (t) {
                    var n = t.root, r = t.props;
                    n.element.classList.add("doka--crop-rect-corner"), n.element.setAttribute("role", "button"), n.element.setAttribute("tabindex", -1);
                    var i = e, o = function (e) {
                        return Br[(Br.indexOf(e) + 2) % Br.length]
                    }(e);
                    n.ref.dragger = $n(n.element, function () {
                        n.dispatch("CROP_RECT_DRAG_GRAB")
                    }, function (e, t) {
                        n.dispatch("CROP_RECT_CORNER_DRAG", {offset: t, origin: i, anchor: o})
                    }, function () {
                        n.dispatch("CROP_RECT_DRAG_RELEASE")
                    }, {stopPropagation: !0, cancelOnMultiple: !0}), r.setAllowInteraction = function (e) {
                        e ? n.ref.dragger.enable() : n.ref.dragger.disable()
                    }
                },
                destroy: function (e) {
                    e.root.ref.dragger.destroy()
                }
            })
        }, Hr = U({
            ignoreRect: !0,
            ignoreRectUpdate: !0,
            name: "crop-rect",
            mixins: {apis: ["rectangle", "draft", "rotating", "enabled"]},
            create: function (e) {
                var t = e.root;
                t.ref.wasRotating = !1, Br.forEach(function (e, n) {
                    var r = 10 * n, i = 250 + r + 50, o = 250 + r;
                    t.ref[e] = t.appendChildView(t.createChildView(qr(e, i, o), {opacity: 0, scaleX: .5, scaleY: .5}))
                }), zr.forEach(function (e) {
                    t.ref[e] = t.appendChildView(t.createChildView(Wr(e)))
                }), t.ref.lines = [];
                for (var n = 0; n < 10; n++) t.ref.lines.push(t.appendChildView(t.createChildView(Fr, {opacity: 0})));
                t.ref.animationDir = null, t.ref.previousRotating, t.ref.previousRect = {}, t.ref.previousEnabled, t.ref.previousDraft
            },
            write: function (e) {
                var t = e.root, n = e.props, r = n.rectangle, i = n.draft, o = n.rotating, a = n.enabled;
                if (r && (!Re(r, t.ref.previousRect) || o !== t.ref.previousRotating || a !== t.ref.previousEnabled || i !== t.ref.previousDraft)) {
                    t.ref.previousRect = r, t.ref.previousRotating = o, t.ref.previousEnabled = a, t.ref.previousDraft = i;
                    var l = t.ref, c = l.n, u = l.e, s = l.s, f = l.w, d = l.nw, h = l.ne, p = l.se, g = l.sw, m = l.lines,
                        v = l.animationDir, y = r.x, E = r.y, _ = r.x + r.width, w = r.y + r.height, T = w - E, A = _ - y,
                        R = Math.min(A, T);
                    t.element.dataset.indicatorSize = R < 80 ? "none" : "default", zr.forEach(function (e) {
                        return t.ref[e].setAllowInteraction(a)
                    }), Br.forEach(function (e) {
                        return t.ref[e].setAllowInteraction(a)
                    });
                    var x = t.query("IS_ACTIVE_VIEW", "crop");
                    if (x && "in" !== v ? (t.ref.animationDir = "in", Br.map(function (e) {
                        return t.ref[e]
                    }).forEach(function (e) {
                        e.opacity = 1, e.scaleX = 1, e.scaleY = 1
                    })) : x || "out" === v || (t.ref.animationDir = "out", Br.map(function (e) {
                        return t.ref[e]
                    }).forEach(function (e) {
                        e.opacity = 0, e.scaleX = .5, e.scaleY = .5
                    })), Zr(i, d, y, E), Zr(i, h, _, E), Zr(i, p, _, w), Zr(i, g, y, w), Yr(i, c, y, E, A / 100, 1), Yr(i, u, _, E, 1, T / 100), Yr(i, s, y, w, A / 100, 1), Yr(i, f, y, E, 1, T / 100), o) {
                        t.ref.wasRotating = !0;
                        var I = m.slice(0, 5), C = 1 / I.length;
                        I.forEach(function (e, t) {
                            Yr(i, e, y, E + T * (C + t * C), A / 100, .01), e.opacity = .5
                        });
                        var O = m.slice(5);
                        C = 1 / O.length, O.forEach(function (e, t) {
                            Yr(i, e, y + A * (C + t * C), E, .01, T / 100), e.opacity = .5
                        })
                    } else if (i) {
                        t.ref.wasRotating = !1;
                        var S = m[0], M = m[1], b = m[2], L = m[3];
                        Yr(i, S, y, E + .333 * T, A / 100, .01), Yr(i, M, y, E + .666 * T, A / 100, .01), Yr(i, b, y + .333 * A, E, .01, T / 100), Yr(i, L, y + .666 * A, E, .01, T / 100), S.opacity = .5, M.opacity = .5, b.opacity = .5, L.opacity = .5
                    } else {
                        var P = m[0], G = m[1], k = m[2], D = m[3];
                        !t.ref.wasRotating && P.opacity > 0 && (Yr(i, P, y, E + .333 * T, A / 100, .01), Yr(i, G, y, E + .666 * T, A / 100, .01), Yr(i, k, y + .333 * A, E, .01, T / 100), Yr(i, D, y + .666 * A, E, .01, T / 100)), m.forEach(function (e) {
                            return e.opacity = 0
                        })
                    }
                }
            }
        }), Yr = function (e, t, n, r, i, o) {
            e && (t.translateX = null, t.translateY = null, t.scaleX = null, t.scaleY = null), t.translateX = Nr(n), t.translateY = Nr(r), t.scaleX = i, t.scaleY = o
        }, Zr = function (e, t, n, r) {
            e && (t.translateX = null, t.translateY = null), t.translateX = Nr(n), t.translateY = Nr(r)
        }, Xr = function (e, t) {
            if (!/svg/.test(e.namespaceURI) || "innerHTML" in e) e.innerHTML = t; else {
                var n = document.createElement("div");
                n.innerHTML = "<svg>" + t + "</svg>";
                for (var r = n.firstChild; r.firstChild;) e.appendChild(r.firstChild)
            }
        }, Kr = U({
            ignoreRect: !0,
            ignoreRectUpdate: !0,
            name: "crop-mask",
            tag: "svg",
            mixins: {
                styles: ["opacity", "translateX", "translateY"],
                animations: {
                    scale: er,
                    maskWidth: er,
                    maskHeight: er,
                    translateX: er,
                    translateY: er,
                    opacity: {type: "tween", delay: 0, duration: 1e3}
                },
                apis: ["rectangle", "animate", "maskWidth", "maskHeight", "scale"]
            },
            create: function (e) {
                e.root.ref.writer = null
            },
            write: function (e) {
                var t = e.root, n = t.query("GET_CROP_MASK");
                n !== t.ref.writer && (t.ref.writer = n, t.ref.writerFn = n ? n(t.element, Xr) : null, t.ref.writer || Xr(t.element, ""))
            },
            didWriteView: function (e) {
                var t = e.root, n = e.props, r = n.maskWidth, i = n.maskHeight, o = n.scale;
                if (t.ref.writer && r && i && (t.element.setAttribute("width", Nr(r)), t.element.setAttribute("height", Nr(i)), t.ref.writerFn)) {
                    var a = t.query("GET_CROP_MASK_INSET");
                    t.ref.writerFn({x: o * a, y: o * a, width: r - o * a * 2, height: i - o * a * 2}, {width: r, height: i})
                }
            }
        }), jr = function (e, t) {
            var n = e.childNodes[0];
            n ? t !== n.nodeValue && (n.nodeValue = t) : (n = document.createTextNode(t), e.appendChild(n))
        }, Qr = {type: "spring", stiffness: .25, damping: .1, mass: 1}, Jr = U({
            ignoreRect: !0,
            name: "crop-size",
            mixins: {
                styles: ["translateX", "translateY", "opacity"],
                animations: {translateX: "spring", translateY: "spring", opacity: "spring", sizeWidth: Qr, sizeHeight: Qr},
                apis: ["sizeWidth", "sizeHeight"],
                listeners: !0
            },
            create: function (e) {
                var t = e.root, n = v("span");
                n.className = "doka--crop-size-info doka--crop-resize-percentage", t.ref.resizePercentage = n, t.appendChild(n);
                var r = v("span");
                r.className = "doka--crop-size-info";
                var i = v("span");
                i.className = "doka--crop-size-multiply", i.textContent = "×";
                var o = v("span"), a = v("span");
                t.ref.outputWidth = o, t.ref.outputHeight = a, r.appendChild(o), r.appendChild(i), r.appendChild(a), t.appendChild(r), t.ref.previousValues = {
                    width: 0,
                    height: 0,
                    percentage: 0
                }
            },
            write: function (e) {
                var t = e.root, n = e.props, r = e.timestamp;
                if (!(t.opacity <= 0)) {
                    var i = t.query("GET_CROP", n.id, r);
                    if (i) {
                        var o = i.cropStatus, a = i.isDraft, l = t.ref, c = l.outputWidth, u = l.outputHeight,
                            s = l.resizePercentage, f = l.previousValues, d = o.image, h = o.crop, p = o.currentWidth,
                            g = o.currentHeight, m = d.width ? Math.round(d.width / h.width * 100) : 0;
                        a && (t.sizeWidth = null, t.sizeHeight = null), t.sizeWidth = p, t.sizeHeight = g;
                        var v = Math.round(t.sizeWidth), y = Math.round(t.sizeHeight);
                        v !== f.width && (jr(c, v), f.width = v), y !== f.height && (jr(u, y), f.height = y), m !== f.percentage && (d.width ? jr(s, "".concat(m, "%")) : jr(s, ""), f.percentage = m)
                    }
                }
            }
        }), $r = function () {
            return console.log("Doka: localStorage not available")
        }, ei = function (e) {
            try {
                JSON.parse(localStorage.getItem(e) || "{}")
            } catch (e) {
                $r()
            }
            return {}
        }, ti = function () {
            return window.matchMedia("(pointer: fine) and (hover: hover)").matches
        }, ni = U({
            ignoreRect: !0,
            ignoreRectUpdate: !0,
            name: "instructions-bubble",
            mixins: {
                styles: ["opacity", "translateX", "translateY"],
                animations: {opacity: {type: "tween", duration: 400}},
                apis: ["seen"]
            },
            create: function (e) {
                var t = e.root, n = e.props;
                return t.element.innerHTML = (n.iconBefore || "") + n.text
            },
            write: function (e) {
                var t = e.root;
                e.props.seen && (t.opacity = 0)
            }
        }), ri = {type: "spring", stiffness: .4, damping: .65, mass: 7}, ii = U({
            name: "crop-subject",
            ignoreRect: !0,
            mixins: {
                styles: ["opacity", "translateX", "translateY"],
                animations: {opacity: {type: "tween", duration: 250}, translateX: ri, translateY: ri}
            },
            create: function (e) {
                var t = e.root, n = e.props;
                t.opacity = 1, t.ref.timestampOffset = null, t.query("GET_CROP_ALLOW_INSTRUCTION_ZOOM") && ti() && (function (e, t, n) {
                    var r = ei(e);
                    return void 0 === r[t] ? n : r[t]
                }(t.query("GET_STORAGE_NAME"), "instruction_zoom_shown", !1) || (t.ref.instructions = t.appendChildView(t.createChildView(ni, {
                    opacity: 0,
                    seen: !1,
                    text: t.query("GET_LABEL_CROP_INSTRUCTION_ZOOM"),
                    iconBefore: Vn('<rect stroke-width="1.5" fill="none" stroke="currentColor" x="5" y="1" width="14" height="22" rx="7" ry="7"></rect><circle fill="currentColor" stroke="none" cx="12" cy="8" r="2"></circle>')
                })))), t.ref.maskView = t.appendChildView(t.createChildView(Kr)), t.query("GET_CROP_ALLOW_RESIZE_RECT") && (t.ref.cropView = t.appendChildView(t.createChildView(Hr))), t.query("GET_CROP_SHOW_SIZE") && (t.ref.cropSize = t.appendChildView(t.createChildView(Jr, {
                    id: n.id,
                    opacity: 1,
                    scaleX: 1,
                    scaleY: 1,
                    translateX: null
                }))), t.query("GET_CROP_ZOOM_TIMEOUT") || (t.ref.btnZoom = t.appendChildView(t.createChildView(function (e, t) {
                    return U({
                        ignoreRect: !0, name: e, mixins: t, create: function (e) {
                            var t = e.root, n = e.props;
                            n.className && t.element.classList.add(n.className), n.controls.map(function (e) {
                                var n = t.createChildView(e.view, e);
                                e.didCreateView && e.didCreateView(n), t.appendChildView(n)
                            })
                        }
                    })
                }("zoom-wrapper", {
                    styles: ["opacity", "translateX", "translateY"],
                    animations: {opacity: {type: "tween", duration: 250}}
                }), {
                    opacity: 0,
                    controls: [{
                        view: Bn,
                        label: t.query("GET_LABEL_BUTTON_CROP_ZOOM"),
                        name: "zoom",
                        icon: Vn('<g fill="currentColor" fill-rule="nonzero"><path d="M12.5 19a6.5 6.5 0 1 1 0-13 6.5 6.5 0 0 1 0 13zm0-2a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9z"/><path d="M15.765 17.18a1 1 0 1 1 1.415-1.415l3.527 3.528a1 1 0 0 1-1.414 1.414l-3.528-3.527z"/></g>', 26),
                        action: function () {
                            return t.dispatch("CROP_ZOOM")
                        }
                    }]
                })))
            },
            write: V({
                CROP_IMAGE_RESIZE_MULTIPLY: function (e) {
                    var t = e.root, n = t.ref.instructions;
                    n && !n.seen && (n.seen = !0, function (e, t, n) {
                        var r = ei(e);
                        r[t] = n;
                        try {
                            localStorage.setItem(e, JSON.stringify(r))
                        } catch (e) {
                            $r()
                        }
                    }(t.query("GET_STORAGE_NAME"), "instruction_zoom_shown", !0))
                }, CROP_RECT_DRAG_RELEASE: function (e) {
                    var t = e.root, n = e.props, r = e.timestamp, i = t.ref.btnZoom;
                    if (i) {
                        var o = t.query("GET_CROP", n.id, r).cropRect, a = o.x + .5 * o.width, l = o.y + .5 * o.height;
                        i.translateX = a, i.translateY = l
                    }
                }
            }, function (e) {
                var t = e.root, n = e.props, r = e.timestamp, i = t.ref, o = i.cropView, a = i.maskView, l = i.btnZoom,
                    c = i.cropSize, u = i.instructions;
                if (!t.query("IS_ACTIVE_VIEW", "crop") && o) return o.enabled = !1, t.ref.timestampOffset = null, void (c && (c.opacity = 0));
                t.ref.timestampOffset || (t.ref.timestampOffset = r);
                var s = t.query("GET_CROP", n.id, r);
                if (s) {
                    var f = s.cropRect, d = s.isRotating, h = s.isDraft, p = s.scale, g = t.query("GET_STAGE");
                    if (t.translateX = g.x - t.rect.element.left, t.translateY = g.y - t.rect.element.top, o && (o.draft = h, o.rotating = d, o.rectangle = f, o.enabled = !0), c) {
                        c.opacity = 1, h && (c.translateX = null, c.translateY = null);
                        var m = oi(t.rect.element, c.rect.element, f);
                        c.translateX = h ? m.x : Nr(m.x), c.translateY = h ? m.y : Nr(m.y)
                    }
                    if (t.query("GET_CROP_MASK") && (h && (a.translateX = null, a.translateY = null, a.maskWidth = null, a.maskHeight = null), a.translateX = Nr(f.x), a.translateY = Nr(f.y), a.maskWidth = f.width, a.maskHeight = f.height, a.scale = p), s.canRecenter) u && (u.opacity = 0), l && (l.opacity = s.isDraft ? 0 : 1); else if (l && (l.opacity = 0), u && !u.seen && !s.isDraft) {
                        var v = f.x + .5 * f.width, y = f.y + .5 * f.height;
                        u.translateX = Math.round(v - .5 * u.rect.element.width), u.translateY = Math.round(y - .5 * u.rect.element.height), r - t.ref.timestampOffset > 2e3 && (u.opacity = 1)
                    }
                }
            })
        }), oi = function (e, t, n) {
            var r = n.x, i = n.x + n.width, o = n.y + n.height, a = i - t.width - 16, l = o - t.height - 16;
            return t.width > n.width - 32 && (a = r + (.5 * n.width - .5 * t.width), (l = o + 16) > e.height - t.height && (l = o - t.height - 16)), {
                x: a = Math.max(0, Math.min(a, e.width - t.width)),
                y: l
            }
        }, ai = function () {
            return performance.now()
        }, li = function (e, t) {
            for (; 1 === e.nodeType && !t(e);) e = e.parentNode;
            return 1 === e.nodeType ? e : null
        }, ci = function (e, t) {
            var n = li(t, function (e) {
                return e.classList.contains("doka--root")
            });
            return !!n && n.contains(e)
        }, ui = function (e) {
            var t = e.root, n = e.props, r = e.action.position, i = n.pivotPoint, o = t.ref, a = o.indicatorA,
                l = o.indicatorB, c = i.x - r.x, u = i.y - r.y, s = {x: i.x + c, y: i.y + u}, f = {x: i.x - c, y: i.y - u};
            a.style.cssText = "transform: translate3d(".concat(s.x, "px, ").concat(s.y, "px, 0)"), l.style.cssText = "transform: translate3d(".concat(f.x, "px, ").concat(f.y, "px, 0)")
        }, si = function (e) {
            return {x: e.pageX, y: e.pageY}
        }, fi = U({
            ignoreRect: !0,
            ignoreRectUpdate: !0,
            name: "crop-resizer",
            mixins: {apis: ["pivotPoint", "scrollRect"]},
            create: function (e) {
                var t = e.root, n = e.props;
                t.ref.isActive = !1, t.ref.isCropping = !1, t.ref.indicatorA = document.createElement("div"), t.appendChild(t.ref.indicatorA), t.ref.indicatorB = document.createElement("div"), t.appendChild(t.ref.indicatorB);
                var r = t.query("GET_CROP_RESIZE_KEY_CODES");
                t.ref.hasEnabledResizeModifier = r.length > 0;
                var i = {
                    origin: {x: null, y: null},
                    position: {x: null, y: null},
                    selecting: !1,
                    enabled: !1,
                    scrollY: 0,
                    offsetX: 0,
                    offsetY: 0
                }, o = ai();
                t.ref.state = i;
                var l = Kn(), c = 0, u = !1;
                t.ref.resizeStart = function (e) {
                    if (t.ref.isActive && (0 === l.count() && (u = !1), ci(t.element, e.target) && (l.push(e), jn(document.documentElement, "up", t.ref.resizeEnd), l.multiple()))) {
                        e.stopPropagation(), e.preventDefault();
                        var n = l.active(), r = si(n[0]), i = si(n[1]);
                        c = _e(r, i), jn(document.documentElement, "move", t.ref.resizeMove), u = !0
                    }
                }, t.ref.resizeMove = function (e) {
                    if (t.ref.isActive && u && (e.preventDefault(), 2 === l.count())) {
                        l.update(e);
                        var n = l.active(), r = si(n[0]), i = si(n[1]), o = (_e(r, i) - c) / c;
                        t.dispatch("CROP_IMAGE_RESIZE", {value: o})
                    }
                }, t.ref.resizeEnd = function (e) {
                    if (t.ref.isActive) {
                        l.pop(e);
                        var n = 0 === l.count();
                        n && (Qn(document.documentElement, "move", t.ref.resizeMove), Qn(document.documentElement, "up", t.ref.resizeEnd)), u && (e.preventDefault(), n && t.dispatch("CROP_IMAGE_RESIZE_RELEASE"))
                    }
                }, jn(document.documentElement, "down", t.ref.resizeStart);
                var s = performance.now(), f = 0, d = 1, h = function (e, t) {
                    var n = null, r = null;
                    return function () {
                        var i = arguments;
                        if (!r) return e.apply(null, Array.from(arguments)), void (r = ai());
                        clearTimeout(n), n = setTimeout(function () {
                            ai() - r >= t && (e.apply(null, Array.from(i)), r = ai())
                        }, t - (ai() - r))
                    }
                }(function (e) {
                    if (!t.ref.isCropping) {
                        var n = Math.sign(e.wheelDelta || e.deltaY), r = ai(), i = r - s;
                        s = r, (i > 750 || f !== n) && (d = 1, f = n), d += .05 * n, t.dispatch("CROP_IMAGE_RESIZE_MULTIPLY", {value: Math.max(.1, d)}), t.dispatch("CROP_IMAGE_RESIZE_RELEASE")
                    }
                }, 100);
                t.ref.wheel = function (e) {
                    if (t.ref.isActive && ci(t.element, e.target)) {
                        if (n.scrollRect) {
                            var r = n.scrollRect, i = t.query("GET_ROOT"), o = si(e),
                                a = {x: o.x - i.leftScroll, y: o.y - i.topScroll};
                            if (a.x < r.x || a.x > r.x + r.width || a.y < r.y || a.y > r.y + r.height) return
                        }
                        e.preventDefault(), h(e)
                    }
                }, document.addEventListener("wheel", t.ref.wheel, {passive: !1}), t.ref.hasEnabledResizeModifier && (t.ref.move = function (e) {
                    if (t.ref.isActive && !t.ref.isCropping && (i.position.x = e.pageX - t.ref.state.offsetX, i.position.y = e.pageY - t.ref.state.scrollY - t.ref.state.offsetY, i.enabled)) if (ci(t.element, e.target)) {
                        "idle" === t.element.dataset.state && t.dispatch("RESIZER_SHOW", {position: a({}, i.position)}), e.preventDefault(), t.dispatch("RESIZER_MOVE", {position: a({}, i.position)});
                        var r = n.pivotPoint, l = r.x - i.position.x, u = r.y - i.position.y, s = {x: r.x + l, y: r.y + u},
                            f = a({}, i.position);
                        if (i.selecting) {
                            var d = (_e(s, f) - c) / c, h = performance.now();
                            h - o > 25 && (o = h, t.dispatch("CROP_IMAGE_RESIZE", {value: d}))
                        }
                    } else t.dispatch("RESIZER_CANCEL")
                }, t.ref.select = function (e) {
                    if (t.ref.isActive && ci(t.element, e.target)) {
                        var r = n.pivotPoint, o = r.x - i.position.x, a = r.y - i.position.y, l = {x: r.x + o, y: r.y + a},
                            u = i.position;
                        c = _e(l, u), i.selecting = !0, i.origin.x = e.pageX, i.origin.y = e.pageY, t.dispatch("CROP_IMAGE_RESIZE_GRAB")
                    }
                }, t.ref.confirm = function (e) {
                    t.ref.isActive && ci(t.element, e.target) && (i.selecting = !1, t.dispatch("CROP_IMAGE_RESIZE_RELEASE"))
                }, t.ref.blur = function () {
                    t.ref.isActive && (i.selecting = !1, i.enabled = !1, document.removeEventListener("mousedown", t.ref.select), document.removeEventListener("mouseup", t.ref.confirm), t.dispatch("RESIZER_CANCEL"))
                }, window.addEventListener("blur", t.ref.blur), document.addEventListener("mousemove", t.ref.move), t.ref.keyDown = function (e) {
                    t.ref.isActive && r.includes(e.keyCode) && i.position && (i.enabled = !0, document.addEventListener("mousedown", t.ref.select), document.addEventListener("mouseup", t.ref.confirm), t.dispatch("RESIZER_SHOW", {position: a({}, i.position)}))
                }, t.ref.keyUp = function (e) {
                    t.ref.isActive && r.includes(e.keyCode) && (i.enabled = !1, document.removeEventListener("mousedown", t.ref.select), document.removeEventListener("mouseup", t.ref.confirm), t.dispatch("RESIZER_CANCEL"))
                }, document.body.addEventListener("keydown", t.ref.keyDown), document.body.addEventListener("keyup", t.ref.keyUp))
            },
            destroy: function (e) {
                var t = e.root;
                document.removeEventListener("touchmove", t.ref.resizeMove), document.removeEventListener("touchend", t.ref.resizeEnd), document.removeEventListener("touchstart", t.ref.resizeStart), document.removeEventListener("wheel", t.ref.wheel), document.removeEventListener("mousedown", t.ref.select), document.removeEventListener("mouseup", t.ref.confirm), t.ref.hasEnabledResizeModifier && (document.removeEventListener("mousemove", t.ref.move), document.body.removeEventListener("keydown", t.ref.keyDown), document.body.removeEventListener("keyup", t.ref.keyUp), window.removeEventListener("blur", t.ref.blur))
            },
            read: function (e) {
                var t = e.root;
                t.ref.state.scrollY = window.scrollY;
                var n = t.element.getBoundingClientRect();
                t.ref.state.offsetX = n.x, t.ref.state.offsetY = n.y
            },
            write: V({
                CROP_RECT_DRAG_GRAB: function (e) {
                    e.root.ref.isCropping = !0
                }, CROP_RECT_DRAG_RELEASE: function (e) {
                    e.root.ref.isCropping = !1
                }, SHOW_VIEW: function (e) {
                    var t = e.root, n = e.action;
                    t.ref.isActive = "crop" === n.id
                }, RESIZER_SHOW: function (e) {
                    var t = e.root, n = e.props, r = e.action;
                    t.element.dataset.state = "multi-touch", ui({root: t, props: n, action: r})
                }, RESIZER_CANCEL: function (e) {
                    e.root.element.dataset.state = "idle"
                }, RESIZER_MOVE: ui
            })
        }), di = function (e, t) {
            return e.style.opacity = t
        }, hi = function (e, t) {
            var n = Array.from(e.element.querySelectorAll(".doka--icon-crop-limit rect"));
            n.length && (di(n[0], t ? .3 : 0), di(n[1], t ? 1 : 0), di(n[2], t ? 0 : .3), di(n[3], t ? 0 : 1))
        }, pi = function (e, t) {
            var n = e.element.querySelectorAll(".doka--icon-aspect-ratio rect");
            if (n.length) {
                if (!t) return di(n[0], .2), di(n[1], .3), void di(n[2], .4);
                di(n[0], t > 1 ? 1 : .3), di(n[1], 1 === t ? .85 : .5), di(n[2], t < 1 ? 1 : .3)
            }
        }, gi = U({
            name: "crop",
            ignoreRect: !0,
            mixins: {apis: ["viewId", "stagePosition", "hidden", "offsetTop"]},
            create: function (e) {
                var t = e.root, n = e.props;
                n.viewId = "crop", n.hidden = !1, t.ref.isHiding = !1;
                var r = [];
                t.query("GET_CROP_ALLOW_IMAGE_TURN_LEFT") && r.push({
                    view: Bn,
                    name: "tool",
                    label: t.query("GET_LABEL_BUTTON_CROP_ROTATE_LEFT"),
                    icon: Vn('<g transform="translate(3 2)" fill="currentColor" fill-rule="evenodd" class="doka--icon-turn"><rect y="9" width="12" height="12" rx="1"/><path d="M9.823 5H11a5 5 0 0 1 5 5 1 1 0 0 0 2 0 7 7 0 0 0-7-7H9.626l.747-.747A1 1 0 0 0 8.958.84L6.603 3.194a1 1 0 0 0 0 1.415l2.355 2.355a1 1 0 0 0 1.415-1.414L9.823 5z" fill-rule="nonzero" /></g>', 26),
                    action: function () {
                        return t.dispatch("CROP_IMAGE_ROTATE_LEFT")
                    }
                }), t.query("GET_CROP_ALLOW_IMAGE_TURN_RIGHT") && r.push({
                    view: Bn,
                    name: "tool",
                    label: t.query("GET_LABEL_BUTTON_CROP_ROTATE_RIGHT"),
                    icon: Vn('<g transform="translate(5 2)" fill="currentColor" fill-rule="evenodd" class="doka--icon-turn"><path d="M8.177 5H7a5 5 0 0 0-5 5 1 1 0 0 1-2 0 7 7 0 0 1 7-7h1.374l-.747-.747A1 1 0 0 1 9.042.84l2.355 2.355a1 1 0 0 1 0 1.415L9.042 6.964A1 1 0 0 1 7.627 5.55l.55-.55z" fill-rule="nonzero"/><rect x="6" y="9" width="12" height="12" rx="1"/></g>', 26),
                    action: function () {
                        return t.dispatch("CROP_IMAGE_ROTATE_RIGHT")
                    }
                }), t.query("GET_CROP_ALLOW_IMAGE_FLIP_HORIZONTAL") && r.push({
                    view: Bn,
                    name: "tool",
                    label: t.query("GET_LABEL_BUTTON_CROP_FLIP_HORIZONTAL"),
                    icon: Vn('<g fill="currentColor" fill-rule="evenodd"><path d="M11.93 7.007V20a1 1 0 0 1-1 1H5.78a1 1 0 0 1-.93-1.368l5.15-12.993a1 1 0 0 1 1.929.368z"/><path d="M14 7.007V20a1 1 0 0 0 1 1h5.149a1 1 0 0 0 .93-1.368l-5.15-12.993A1 1 0 0 0 14 7.007z" opacity=".6"/></g>', 26),
                    action: function () {
                        return t.dispatch("CROP_IMAGE_FLIP_HORIZONTAL")
                    }
                }), t.query("GET_CROP_ALLOW_IMAGE_FLIP_VERTICAL") && r.push({
                    view: Bn,
                    name: "tool",
                    label: t.query("GET_LABEL_BUTTON_CROP_FLIP_VERTICAL"),
                    icon: Vn('<g fill="currentColor" fill-rule="evenodd"><path d="M19.993 12.143H7a1 1 0 0 1-1-1V5.994a1 1 0 0 1 1.368-.93l12.993 5.15a1 1 0 0 1-.368 1.93z"/><path d="M19.993 14a1 1 0 0 1 .368 1.93L7.368 21.078A1 1 0 0 1 6 20.148V15a1 1 0 0 1 1-1h12.993z" opacity=".6"/></g>', 26),
                    action: function () {
                        return t.dispatch("CROP_IMAGE_FLIP_VERTICAL")
                    }
                });
                var i = t.query("GET_CROP_ASPECT_RATIO_OPTIONS");
                i && i.length && r.push({
                    view: Dr,
                    name: "tool",
                    label: t.query("GET_LABEL_BUTTON_CROP_ASPECT_RATIO"),
                    icon: Vn('<g class="doka--icon-aspect-ratio" fill="currentColor" fill-rule="evenodd"><rect x="2" y="4" opacity=".3" width="10" height="18" rx="1"/><rect opacity=".5" x="4" y="8" width="14" height="14" rx="1"/><rect x="6" y="12" width="17" height="10" rx="1"/></g>', 26),
                    options: null,
                    onSelect: function (e) {
                        e.width && e.height ? t.dispatch("RESIZE_SET_OUTPUT_SIZE", {
                            width: e.width,
                            height: e.height
                        }) : (t.query("GET_CROP_ASPECT_RATIO_OPTIONS").find(function (e) {
                            return e.value && e.value.width || e.value.height
                        }) && t.dispatch("RESIZE_SET_OUTPUT_SIZE", {
                            width: null,
                            height: null
                        }), t.dispatch("CROP_SET_ASPECT_RATIO", {value: e.aspectRatio}))
                    },
                    didCreateView: function (e) {
                        t.ref.aspectRatioDropdown = e
                    }
                }), t.query("GET_CROP_ALLOW_TOGGLE_LIMIT") && r.push({
                    view: Dr,
                    name: "tool",
                    label: t.query("GET_LABEL_BUTTON_CROP_TOGGLE_LIMIT"),
                    icon: Vn('<g class="doka--icon-crop-limit" fill="currentColor" fill-rule="evenodd">\n                    <rect x="2" y="3" width="20" height="20" rx="1"/>\n                    <rect x="7" y="8" width="10" height="10" rx="1"/>\n                    <rect x="4" y="8" width="14" height="14" rx="1"/>\n                    <rect x="12" y="4" width="10" height="10" rx="1"/>\n                </g>', 26),
                    options: [{
                        value: !0,
                        label: t.query("GET_LABEL_BUTTON_CROP_TOGGLE_LIMIT_ENABLE"),
                        icon: '<svg width="23" height="23" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"><g fill="currentColor"><rect x="3" y="3" width="17" height="17" rx="2.5" opacity=".3"/><rect x="7" y="7" width="9" height="9" rx="2.5"/></g></svg>'
                    }, {
                        value: !1,
                        label: t.query("GET_LABEL_BUTTON_CROP_TOGGLE_LIMIT_DISABLE"),
                        icon: '<svg width="23" height="23" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"><g fill="currentColor"><rect x="3" y="6" width="13" height="13" rx="2.5" opacity=".3"/><rect x="10" y="3" width="9" height="9" rx="2.5"/></g></svg>'
                    }],
                    onSelect: function (e) {
                        t.dispatch("CROP_SET_LIMIT", {value: e})
                    },
                    didCreateView: function (e) {
                        t.ref.cropToggleLimitDropdown = e
                    }
                }), t.ref.menu = t.appendChildView(t.createChildView(Gr("toolbar", ["opacity"], {
                    opacity: {
                        type: "spring",
                        mass: 15,
                        delay: 50
                    }
                }), {
                    opacity: 0,
                    controls: r
                })), t.ref.menuItemsRequiredWidth = null, t.ref.subject = t.appendChildView(t.createChildView(ii, a({}, n))), t.query("GET_CROP_ALLOW_ROTATE") && (t.ref.rotator = t.appendChildView(t.createChildView(Vr, {
                    rotation: 0,
                    opacity: 0,
                    translateY: 20,
                    id: n.id
                }))), t.ref.resizer = t.appendChildView(t.createChildView(fi, {
                    pivotPoint: {
                        x: 0,
                        y: 0
                    }
                })), t.ref.updateControls = function () {
                    var e = t.query("GET_IMAGE");
                    if (function (e, t) {
                        Array.from(e.element.querySelectorAll(".doka--icon-turn rect")).forEach(function (e) {
                            t > 1 && (e.setAttribute("x", e.previousElementSibling ? 5 : 4), e.setAttribute("width", 9)), t < 1 && (e.setAttribute("y", 11), e.setAttribute("height", 10))
                        })
                    }(t, e.height / e.width), t.ref.cropToggleLimitDropdown && (t.ref.isLimitedToImageBounds = t.query("GET_CROP_LIMIT_TO_IMAGE_BOUNDS"), hi(t, t.ref.isLimitedToImageBounds), t.ref.cropToggleLimitDropdown.selectedValue = t.ref.isLimitedToImageBounds), t.ref.aspectRatioDropdown) {
                        var n = t.query("GET_MIN_IMAGE_SIZE"), r = i.filter(function (t) {
                            if (!t.value.aspectRatio) return !0;
                            if (t.value.aspectRatio < 1) {
                                if (e.naturalWidth * t.value.aspectRatio < n.height) return !1
                            } else if (e.naturalHeight / t.value.aspectRatio < n.width) return !1;
                            return !0
                        });
                        t.ref.aspectRatioDropdown.options = r.map(function (e) {
                            return a({}, e, {
                                icon: function (e) {
                                    var t, n;
                                    e > 1 ? (n = 14, t = Math.round(n / e)) : (t = 14, n = Math.round(t * e));
                                    var r = Math.round(.5 * (23 - t)), i = Math.round(.5 * (23 - n));
                                    return '<svg width="23" height="23" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"><g fill="currentColor"><rect x="'.concat(r, '" y="').concat(i, '" width="').concat(t, '" height="').concat(n, '" rx="2.5"/></g></svg>')
                                }(e.value.aspectRatio)
                            })
                        })
                    }
                }, t.ref.isModal = /modal|fullscreen/.test(t.query("GET_STYLE_LAYOUT_MODE"))
            },
            read: function (e) {
                var t = e.root, n = e.props;
                if (n.hidden) t.ref.menuItemsRequiredWidth = null; else {
                    var r = t.rect;
                    if (0 !== r.element.width && 0 !== r.element.height) {
                        if (null === t.ref.menuItemsRequiredWidth) {
                            var i = t.ref.menu.childViews.reduce(function (e, t) {
                                return e + t.rect.outer.width
                            }, 0);
                            t.ref.menuItemsRequiredWidth = 0 === i ? null : i
                        }
                        var o = t.ref.subject.rect.element, a = o.left, l = o.top, c = o.width, u = o.height;
                        n.stagePosition = {x: a, y: l, width: c, height: u}
                    }
                }
            },
            shouldUpdateChildViews: function (e) {
                var t = e.props, n = e.actions;
                return !t.hidden || t.hidden && n && n.length
            },
            write: V({
                SHOW_VIEW: function (e) {
                    var t = e.root, n = e.action, r = e.props, i = t.ref, o = i.menu, a = i.rotator, l = i.subject;
                    r.viewId === n.id ? (l.opacity = 1, o.opacity = 1, a && (a.opacity = 1, a.translateY = 0), r.hidden = !1, t.ref.isHiding = !1, t.ref.updateControls()) : (l.opacity = 0, o.opacity = 0, a && (a.opacity = 0, a.translateY = 20), t.ref.isHiding = !0)
                }, UNLOAD_IMAGE: function (e) {
                    var t = e.root.ref, n = t.menu, r = t.rotator;
                    n.opacity = 0, r && (r.opacity = 0, r.translateY = 20)
                }, DID_PRESENT_IMAGE: function (e) {
                    var t = e.root, n = t.ref, r = n.menu, i = n.rotator;
                    r.opacity = 1, i && (i.opacity = 1, i.translateY = 0), t.ref.updateControls()
                }
            }, function (e) {
                var t = e.root, n = e.props, r = e.timestamp, i = t.ref, o = i.resizer, a = i.subject, l = i.menu,
                    c = i.rotator, u = i.isHiding, s = i.cropToggleLimitDropdown, f = i.aspectRatioDropdown, d = n.hidden,
                    h = 0 === a.opacity && 0 === l.opacity && (!c || c && 0 === c.opacity);
                if (!d && u && h && (t.ref.isHiding = !1, n.hidden = !0), !n.hidden) {
                    var p = t.query("GET_CROP", n.id, r);
                    if (p) {
                        if (f) {
                            var g = t.query("GET_ACTIVE_CROP_ASPECT_RATIO"), m = t.query("GET_SIZE"), v = f.selectedValue;
                            v ? (v.aspectRatio !== g && pi(t, g), v.aspectRatio === g && v.width === m.width && v.height === m.height || (f.selectedValue = {
                                aspectRatio: g,
                                width: m.width,
                                height: m.height
                            })) : (f.selectedValue = {aspectRatio: g, width: m.width, height: m.height}, pi(t, g))
                        }
                        if (s && t.ref.isLimitedToImageBounds !== p.isLimitedToImageBounds && (t.ref.isLimitedToImageBounds = p.isLimitedToImageBounds, hi(t, p.isLimitedToImageBounds), s.selectedValue = p.isLimitedToImageBounds), o.pivotPoint = {
                            x: .5 * o.rect.element.width,
                            y: .5 * o.rect.element.height
                        }, c && (c.animate = !p.isDraft, c.rotation = p.rotation.sub, c.setAllowInteraction(t.query("IS_ACTIVE_VIEW", "crop"))), l.element.dataset.layout = t.ref.menuItemsRequiredWidth > t.ref.menu.rect.element.width ? "compact" : "spacious", t.query("GET_CROP_RESIZE_SCROLL_RECT_ONLY")) {
                            var y = t.query("GET_STAGE"), E = y.x, _ = y.y, w = t.query("GET_ROOT"),
                                T = t.ref.isModal ? w.left : 0, A = t.ref.isModal ? w.top : 0;
                            o.scrollRect = {
                                x: T + E + p.cropRect.x,
                                y: A + _ + p.cropRect.y + n.offsetTop,
                                width: p.cropRect.width,
                                height: p.cropRect.height
                            }
                        }
                    }
                }
            })
        }), mi = U({
            name: "size-input",
            mixins: {
                listeners: !0,
                apis: ["id", "value", "placeholder", "getValue", "setValue", "setPlaceholder", "hasFocus", "onChange"]
            },
            create: function (e) {
                var t = e.root, n = e.props, r = n.id, i = n.min, o = n.max, a = n.value, l = n.placeholder, c = n.onChange,
                    u = void 0 === c ? function () {
                    } : c, s = n.onBlur, f = void 0 === s ? function () {
                    } : s, d = "doka--".concat(r, "-").concat(te()),
                    h = v("input", {type: "number", step: 1, id: d, min: i, max: o, value: a, placeholder: l}),
                    p = h.getAttribute("max").length, g = v("label", {for: d});
                g.textContent = n.label;
                var m = function (e, t, n) {
                    return q(e) ? ((e = e.replace(/[^0-9]/g, "")).length > p && (e = e.slice(0, p)), e = parseInt(e, 10)) : e = Math.round(e), isNaN(e) ? null : ge(e, t, n)
                }, y = function (e) {
                    return e.length ? parseInt(h.value, 10) : null
                };
                t.ref.handleInput = function () {
                    h.value = m(h.value, 1, o), u(y(h.value))
                }, t.ref.handleBlur = function () {
                    h.value = m(h.value, i, o), f(y(h.value))
                }, h.addEventListener("input", t.ref.handleInput), h.addEventListener("blur", t.ref.handleBlur), t.appendChild(h), t.appendChild(g), t.ref.input = h, n.hasFocus = function () {
                    return h === document.activeElement
                }, n.getValue = function () {
                    return y(h.value)
                }, n.setValue = function (e) {
                    return h.value = e ? m(e, 1, 999999) : null
                }, n.setPlaceholder = function (e) {
                    return h.placeholder = e
                }
            },
            destroy: function (e) {
                var t = e.root;
                t.ref.input.removeEventListener("input", t.ref.handleInput), t.ref.input.removeEventListener("blur", t.ref.handleBlur)
            }
        }), vi = U({
            name: "checkable",
            tag: "span",
            mixins: {listeners: !0, apis: ["id", "checked", "onChange", "onSetValue", "setValue", "getValue"]},
            create: function (e) {
                var t = e.root, n = e.props, r = n.id, i = n.checked, o = n.onChange, a = void 0 === o ? function () {
                } : o, l = n.onSetValue, c = void 0 === l ? function () {
                } : l, u = "doka--".concat(r, "-").concat(te()), s = v("input", {type: "checkbox", value: 1, id: u});
                s.checked = i, t.ref.input = s;
                var f = v("label", {for: u});
                f.innerHTML = n.label, t.appendChild(s), t.appendChild(f), t.ref.handleChange = function () {
                    c(s.checked), a(s.checked)
                }, s.addEventListener("change", t.ref.handleChange), n.getValue = function () {
                    return s.checked
                }, n.setValue = function (e) {
                    s.checked = e, c(s.checked)
                }, setTimeout(function () {
                    c(s.checked)
                }, 0)
            },
            destroy: function (e) {
                var t = e.root;
                t.ref.input.removeEventListener("change", t.ref.handleChange)
            }
        }), yi = null, Ei = U({
            ignoreRect: !0,
            name: "resize-form",
            tag: "form",
            mixins: {styles: ["opacity"], animations: {opacity: {type: "spring", mass: 15, delay: 150}}},
            create: function (e) {
                var t = e.root;
                t.element.setAttribute("novalidate", "novalidate"), t.element.setAttribute("action", "#"), t.ref.shouldBlurKeyboard = fe() || (null === yi && (yi = /Android/i.test(navigator.userAgent)), yi);
                var n = t.query("GET_SIZE_MAX"), r = t.query("GET_SIZE_MIN"), i = function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, i = e.axisLock,
                        o = void 0 === i ? "none" : i, a = e.enforceLimits, l = void 0 !== a && a, c = t.ref,
                        u = c.inputImageWidth, s = c.inputImageHeight, f = c.buttonConfirm,
                        d = t.query("GET_SIZE_ASPECT_RATIO_LOCK"), h = t.query("GET_CROP_RECTANGLE_ASPECT_RATIO"),
                        p = {width: u.getValue(), height: s.getValue()},
                        g = Ze(p, l ? r : {width: 1, height: 1}, l ? n : {width: 999999, height: 999999}, d ? h : null, o);
                    if (d) "width" === o ? s.setValue(g.width / h) : "height" === o ? u.setValue(g.height * h) : (u.setValue(g.width || g.height * h), s.setValue(g.height || g.width / h)); else if (g.width && !g.height) {
                        var m = Math.round(g.width / h),
                            v = Ze({width: g.width, height: m}, l ? r : {width: 1, height: 1}, l ? n : {
                                width: 999999,
                                height: 999999
                            }, h, o);
                        l && u.setValue(Math.round(v.width)), s.setPlaceholder(Math.round(v.height))
                    } else if (g.height && !g.width) {
                        var y = Math.round(g.height * h);
                        u.setPlaceholder(y)
                    }
                    var E = t.query("GET_SIZE_INPUT"), _ = E.width, w = E.height, A = T(_) ? Math.round(_) : null,
                        R = T(w) ? Math.round(w) : null, x = u.getValue(), I = s.getValue(), C = x !== A || I !== R;
                    return f.opacity = C ? 1 : 0, t.dispatch("KICK"), {width: u.getValue(), height: s.getValue()}
                }, o = t;
                t.appendChildView(t.createChildView(_i("Image size", function (e) {
                    var t = e.root, a = t.query("GET_SIZE"), l = t.appendChildView(t.createChildView(mi, {
                        id: "image-width",
                        label: t.query("GET_LABEL_RESIZE_WIDTH"),
                        value: T(a.width) ? Math.round(a.width) : null,
                        min: r.width,
                        max: n.width,
                        placeholder: 0,
                        onChange: function () {
                            return i({axisLock: "width"})
                        },
                        onBlur: function () {
                            return i({enforceLimits: !1})
                        }
                    })), c = t.appendChildView(t.createChildView(vi, {
                        id: "aspect-ratio-lock",
                        label: Vn('<g fill="none" fill-rule="evenodd"><path stroke="currentColor" stroke-width="1.5" stroke-linecap="round" class="doka--aspect-ratio-lock-ring" d="M9.401 10.205v-.804a2.599 2.599 0 0 1 5.198 0V14"/><rect fill="currentColor" x="7" y="10" width="10" height="7" rx="1.5"/></g>'),
                        checked: t.query("GET_SIZE_ASPECT_RATIO_LOCK"),
                        onSetValue: function (e) {
                            var t = e ? 0 : -3;
                            c.element.querySelector(".doka--aspect-ratio-lock-ring").setAttribute("transform", "translate(0 ".concat(t, ")"))
                        },
                        onChange: function (e) {
                            t.dispatch("RESIZE_SET_OUTPUT_SIZE_ASPECT_RATIO_LOCK", {value: e}), i()
                        }
                    })), u = t.appendChildView(t.createChildView(mi, {
                        id: "image-height",
                        label: t.query("GET_LABEL_RESIZE_HEIGHT"),
                        value: T(a.height) ? Math.round(a.height) : null,
                        min: r.height,
                        max: n.height,
                        placeholder: 0,
                        onChange: function () {
                            return i({axisLock: "height"})
                        },
                        onBlur: function () {
                            return i({enforceLimits: !1})
                        }
                    }));
                    o.ref.aspectRatioLock = c, o.ref.inputImageWidth = l, o.ref.inputImageHeight = u
                }))), t.ref.buttonConfirm = t.appendChildView(t.createChildView(Bn, {
                    name: "app action-confirm icon-only",
                    label: t.query("GET_LABEL_RESIZE_APPLY_CHANGES"),
                    action: function () {
                    },
                    opacity: 0,
                    icon: Vn('<polyline fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" points="20 6 9 17 4 12"></polyline>'),
                    type: "submit"
                })), t.ref.confirmForm = function (e) {
                    var n = i({enforceLimits: !0});
                    e.preventDefault();
                    var r = t.ref, o = r.shouldBlurKeyboard, a = r.buttonConfirm;
                    o && (document.activeElement.blur(), a.element.focus()), a.opacity = 0, t.dispatch("RESIZE_SET_OUTPUT_SIZE", n)
                }, t.element.addEventListener("submit", t.ref.confirmForm)
            },
            destroy: function (e) {
                var t = e.root;
                t.element.removeEventListener("submit", t.ref.confirmForm)
            },
            write: V({
                EDIT_RESET: function (e) {
                    var t = e.root, n = t.query("GET_SIZE"), r = t.ref, i = r.inputImageWidth, o = r.inputImageHeight,
                        a = r.aspectRatioLock, l = r.buttonConfirm;
                    i.setValue(n.width), o.setValue(n.height), a.setValue(t.query("GET_SIZE_ASPECT_RATIO_LOCK")), l.opacity = 0
                }, RESIZE_SET_OUTPUT_SIZE: function (e) {
                    var t = e.root, n = e.action, r = t.ref, i = r.inputImageWidth, o = r.inputImageHeight;
                    i.setValue(n.width), o.setValue(n.height)
                }, CROP_SET_ASPECT_RATIO: function (e) {
                    var t = e.root, n = e.props, r = e.action, i = e.timestamp, o = t.query("GET_CROP", n.id, i);
                    if (o) {
                        var a = o.cropStatus, l = t.ref, c = l.inputImageWidth, u = l.inputImageHeight;
                        null !== r.value ? (c.setValue(a.image.width), c.setPlaceholder(a.crop.width), u.setValue(a.image.height), u.setPlaceholder(a.crop.height)) : c.getValue() && u.getValue() && (u.setValue(null), u.setPlaceholder(a.crop.height))
                    }
                }
            }, function (e) {
                var t = e.root, n = e.props, r = e.timestamp, i = t.query("GET_CROP", n.id, r);
                if (i) {
                    t.opacity;
                    var o = i.cropStatus, a = t.ref, l = a.inputImageWidth, c = a.inputImageHeight;
                    if (!l.hasFocus() && !c.hasFocus()) {
                        var u = t.query("GET_CROP_RECTANGLE_ASPECT_RATIO");
                        if (null === l.getValue() && null === c.getValue()) l.setPlaceholder(o.crop.width), c.setPlaceholder(o.crop.height); else if (null === l.getValue() && null !== o.image.height) {
                            var s = Math.round(o.image.height * u);
                            l.setPlaceholder(s)
                        } else if (null === c.getValue() && null !== o.image.width) {
                            var f = Math.round(o.image.width / u);
                            c.setPlaceholder(f)
                        }
                    }
                }
            })
        }), _i = function (e, t) {
            return U({
                tag: "fieldset", create: function (n) {
                    var r = n.root, i = v("legend");
                    i.textContent = e, r.element.appendChild(i), t({root: r})
                }
            })
        }, wi = U({
            name: "resize",
            ignoreRect: !0,
            mixins: {apis: ["viewId", "stagePosition", "hidden"]},
            create: function (e) {
                var t = e.root, n = e.props;
                n.viewId = "resize", n.hidden = !1, t.ref.isHiding = !1, t.ref.form = t.appendChildView(t.createChildView(Ei, {
                    opacity: 0,
                    id: n.id
                }))
            },
            read: function (e) {
                var t = e.root, n = e.props;
                if (!n.hidden) {
                    var r = t.rect;
                    if (0 !== r.element.width && 0 !== r.element.height) {
                        var i = t.ref.form.rect;
                        n.stagePosition = {
                            x: r.element.left,
                            y: r.element.top + i.element.height,
                            width: r.element.width,
                            height: r.element.height - i.element.height
                        }
                    }
                }
            },
            shouldUpdateChildViews: function (e) {
                var t = e.props, n = e.actions;
                return !t.hidden || t.hidden && n && n.length
            },
            write: V({
                SHOW_VIEW: function (e) {
                    var t = e.root, n = e.action, r = e.props;
                    n.id === r.viewId ? (t.ref.isHiding = !1, t.ref.form.opacity = 1) : (t.ref.isHiding = !0, t.ref.form.opacity = 0)
                }
            }, function (e) {
                var t = e.root, n = e.props, r = t.ref, i = r.form, o = r.isHiding, a = n.hidden;
                o && 0 === i.opacity && !a ? n.hidden = !0 : n.hidden = !1
            })
        }), Ti = U({
            name: "range-input",
            tag: "span",
            mixins: {listeners: !0, apis: ["onUpdate", "setValue", "getValue", "setAllowInteraction"]},
            create: function (e) {
                var t = e.root, n = e.props, r = n.id, i = n.min, o = n.max, a = n.step, l = n.value, c = n.onUpdate,
                    u = void 0 === c ? function () {
                    } : c, s = "doka--".concat(r, "-").concat(te()),
                    f = v("input", {type: "range", id: s, min: i, max: o, step: a});
                f.value = l, t.ref.input = f;
                var d = v("span");
                d.className = "doka--range-input-inner";
                var h = v("label", {for: s});
                h.innerHTML = n.label;
                var p = i + .5 * (o - i);
                t.element.dataset.centered = l === p, t.ref.handleRecenter = function () {
                    n.setValue(p), t.ref.handleChange()
                };
                var g = v("button", {type: "button"});
                g.textContent = "center", g.addEventListener("click", t.ref.handleRecenter), t.ref.recenter = g, d.appendChild(f), d.appendChild(g), t.appendChild(h), t.appendChild(d), t.ref.handleChange = function () {
                    var e = n.getValue();
                    t.element.dataset.centered = e === p, u(e)
                }, f.addEventListener("input", t.ref.handleChange);
                var m = null;
                t.ref.dragger = $n(d, function () {
                    m = f.getBoundingClientRect()
                }, function (e) {
                    var n = (e.pageX - m.left) / m.width;
                    f.value = i + n * (o - i), t.ref.handleChange()
                }, function () {
                }, {stopPropagation: !0}), n.getValue = function () {
                    return parseFloat(f.value)
                }, n.setValue = function (e) {
                    return f.value = e
                }, n.setAllowInteraction = function (e) {
                    e ? t.ref.dragger.enable() : t.ref.dragger.disable()
                }
            },
            destroy: function (e) {
                var t = e.root;
                t.ref.dragger.destroy(), t.ref.recenter.removeEventListener("click", t.ref.handleRecenter), t.ref.input.removeEventListener("input", t.ref.handleChange)
            }
        }), Ai = {
            brightness: {icon: Vn('<g fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="7"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></g>')},
            contrast: {icon: Vn('<g fill="none" fill-rule="evenodd"><circle stroke="currentColor" stroke-width="3" cx="12" cy="12" r="10"/><path d="M12 2v20C6.477 22 2 17.523 2 12S6.477 2 12 2z" fill="currentColor"/></g>')},
            exposure: {icon: Vn('<g fill="none" fill-rule="evenodd"><rect stroke="currentColor" stroke-width="3" x="2" y="2" width="20" height="20" rx="4"/><path d="M20.828 3.172L3.172 20.828A3.987 3.987 0 0 1 2 18V6a4 4 0 0 1 4-4h12c1.105 0 2.105.448 2.828 1.172zM7 7H5v2h2v2h2V9h2V7H9V5H7v2zM12 15h5v2h-5z" fill="currentColor"/></g>')},
            saturation: {icon: Vn('<g fill="none" fill-rule="evenodd"><rect stroke="currentColor" stroke-width="3" x="2" y="2" width="20" height="20" rx="4"/><path fill="currentColor" opacity=".3" d="M7 2.5h5v18.75H7z"/><path fill="currentColor" opacity=".6" d="M12 2.5h5v18.75h-5z"/><path fill="currentColor" opacity=".9" d="M17 2.5h4v18.75h-4z"/></g>')}
        }, Ri = U({
            ignoreRect: !0,
            name: "color-form",
            tag: "form",
            mixins: {styles: ["opacity"], animations: {opacity: {type: "spring", mass: 15}}},
            create: function (e) {
                var t = e.root;
                t.element.setAttribute("novalidate", "novalidate");
                var n = t.query("GET_COLOR_VALUES");
                t.ref.tools = Object.keys(Ai).reduce(function (e, r) {
                    var i = r, o = Ai[r].icon, a = t.query("GET_LABEL_COLOR_".concat(r.toUpperCase())),
                        l = t.query("GET_COLOR_".concat(r.toUpperCase(), "_RANGE")), c = n[r];
                    return e[i] = {
                        view: t.appendChildView(t.createChildView(Ti, {
                            id: i,
                            label: "".concat(o, "<span>").concat(a, "</span>"),
                            min: l[0],
                            max: l[1],
                            step: .01,
                            value: c,
                            onUpdate: function (e) {
                                return t.dispatch("COLOR_SET_COLOR_VALUE", {key: i, value: e})
                            }
                        }))
                    }, e
                }, {})
            },
            write: V({
                COLOR_SET_VALUE: function (e) {
                    var t = e.root, n = e.action;
                    t.ref.tools[n.key].view.setValue(n.value)
                }, SHOW_VIEW: function (e) {
                    var t = e.root, n = e.action;
                    Object.keys(t.ref.tools).forEach(function (e) {
                        t.ref.tools[e].view.setAllowInteraction("color" === n.id)
                    })
                }
            })
        }), xi = null, Ii = null, Ci = function (e, t) {
            var n = t.brightness, r = t.exposure, i = t.contrast, o = t.saturation;
            if (0 !== n) {
                var a = n < 0, l = a ? "multiply" : "overlay", c = a ? 0 : 255, u = a ? Math.abs(n) : 1 - n;
                e.ref.imageOverlay.style.cssText = "mix-blend-mode: ".concat(l, "; background: rgba(").concat(c, ",").concat(c, ",").concat(c, ",").concat(u, ")")
            }
            return e.ref.imageOverlay.style.cssText = "background:transparent", e.ref.image.style.cssText = "filter: brightness(".concat(r, ") contrast(").concat(i, ") saturate(").concat(o, ")"), t
        }, Oi = Object.keys(Ai), Si = function (e) {
            return U({
                ignoreRect: !0,
                tag: "li",
                name: "filter-tile",
                mixins: {
                    styles: ["opacity", "translateY"],
                    animations: {translateY: {type: "spring", delay: 10 * e}, opacity: {type: "spring", delay: 30 * e}}
                },
                create: function (e) {
                    var t = e.root, n = e.props, r = "doka--filter-".concat(n.style, "-").concat(te()),
                        i = v("input", {id: r, type: "radio", name: "filter"});
                    t.appendChild(i), i.checked = n.selected, i.value = n.style, i.addEventListener("change", function () {
                        i.checked && n.onSelect()
                    });
                    var o = v("label", {for: r});
                    o.textContent = n.label, t.appendChild(o);
                    var a = n.imageData, l = Math.min(a.width, a.height), c = l, u = v("canvas");
                    u.width = l, u.height = c;
                    var s = u.getContext("2d");
                    t.ref.image = u;
                    var f = v("div");
                    t.ref.imageOverlay = f;
                    var d = {x: .5 * l - .5 * a.width, y: .5 * c - .5 * a.height}, h = v("div");
                    h.appendChild(u), h.appendChild(f), t.appendChild(h), t.ref.imageWrapper = h, n.matrix ? (xi || (xi = Ut(Pt)), clearTimeout(Ii), xi.post({
                        transforms: [{
                            type: "filter",
                            data: n.matrix
                        }], imageData: a
                    }, function (e) {
                        s.putImageData(e, d.x, d.y), clearTimeout(Ii), Ii = setTimeout(function () {
                            xi.terminate(), xi = null
                        }, 1e3)
                    }, [a.data.buffer]), t.ref.activeColors = Ci(t, t.query("GET_COLOR_VALUES"))) : s.putImageData(a, d.x, d.y)
                },
                write: function (e) {
                    var t = e.root;
                    if (!(t.opacity <= 0)) {
                        var n = t.query("GET_COLOR_VALUES"), r = t.ref.activeColors;
                        (!r && n || !function (e, t) {
                            return Oi.findIndex(function (n) {
                                return e[n] !== t[n]
                            }) < 0
                        }(r, n)) && (t.ref.activeColors = n, Ci(t, n))
                    }
                }
            })
        }, Mi = function (e, t) {
            return Array.isArray(e) && Array.isArray(t) && e.length === t.length && e.every(function (e, n) {
                return e === t[n]
            })
        }, bi = U({
            ignoreRect: !0,
            tag: "ul",
            name: "filter-list",
            mixins: {apis: ["filterOpacity", "hidden"]},
            create: function (e) {
                var t = e.root, n = e.props;
                t.element.setAttribute("role", "list"), t.ref.tiles = [];
                var r = t.query("GET_THUMB_IMAGE_DATA"), i = t.query("GET_FILTERS"), o = [];
                d(i, function (e, t) {
                    o.push(a({id: e}, t))
                }), t.ref.activeFilter = t.query("GET_FILTER"), t.ref.tiles = o.map(function (e, i) {
                    var o = e.matrix(), a = t.ref.activeFilter === e.id || Mi(t.ref.activeFilter, o) || 0 === i;
                    return t.appendChildView(t.createChildView(Si(i), {
                        opacity: 0,
                        translateY: -5,
                        id: n.id,
                        style: e.id,
                        label: e.label,
                        matrix: o,
                        imageData: function (e) {
                            var t;
                            try {
                                t = new ImageData(e.width, e.height)
                            } catch (n) {
                                t = document.createElement("canvas").getContext("2d").createImageData(e.width, e.height)
                            }
                            return t.data.set(new Uint8ClampedArray(e.data)), t
                        }(r),
                        selected: a,
                        onSelect: function () {
                            return t.dispatch("FILTER_SET_FILTER", {value: o ? e.id : null})
                        }
                    }))
                })
            },
            write: function (e) {
                var t = e.root, n = e.props;
                if (!n.hidden) {
                    var r = t.query("GET_FILTER");
                    if (r !== t.ref.activeFilter) {
                        t.ref.activeFilter = r;
                        var i = t.query("GET_FILTERS"), o = r ? q(r) ? r : fn(r) ? Object.keys(i).find(function (e) {
                            return Mi(i[e].matrix(), r)
                        }) : null : "original";
                        Array.from(t.element.querySelectorAll("input")).forEach(function (e) {
                            return e.checked = e.value === o
                        })
                    }
                    t.query("IS_ACTIVE_VIEW", "filter") ? t.ref.tiles.forEach(function (e) {
                        e.opacity = 1, e.translateY = 0
                    }) : t.ref.tiles.forEach(function (e) {
                        e.opacity = 0, e.translateY = -5
                    }), n.filterOpacity = t.ref.tiles.reduce(function (e, t) {
                        return e + t.opacity
                    }, 0) / t.ref.tiles.length
                }
            }
        }), Li = U({
            name: "filter-scroller",
            ignoreRect: !0,
            ignoreRectUpdate: !0,
            mixins: {styles: ["opacity"], animations: {opacity: {type: "spring"}}, apis: ["hidden", "filterOpacity"]},
            create: function (e) {
                var t, n = e.root, r = e.props;
                n.ref.filters = n.appendChildView(n.createChildView(bi, {id: r.id})), n.element.isScrollContainer = !0, ti() && (n.ref.handleMouseWheel = function (e) {
                    var t = n.element.scrollLeft, r = n.ref.scrollWidth - n.rect.element.width, i = t + e.deltaX;
                    (i < 0 || i > r) && (n.element.scrollLeft = Math.min(Math.max(i, 0), r), e.preventDefault())
                }, n.element.addEventListener("mousewheel", n.ref.handleMouseWheel), n.element.dataset.dragState = "end", n.ref.dragger = $n(n.ref.filters.element, function () {
                    n.element.dataset.dragState = "start", t = n.element.scrollLeft
                }, function (e, r) {
                    n.element.scrollLeft = t - r.x, Ee({x: 0, y: 0}, r) > 0 && (n.element.dataset.dragState = "dragging")
                }, function () {
                    n.element.dataset.dragState = "end"
                }, {stopPropagation: !0}))
            },
            destroy: function (e) {
                var t = e.root;
                t.ref.handleMouseWheel && t.element.removeEventListener("mousewheel", t.ref.handleMouseWheel), t.ref.dragger && t.ref.dragger.destroy()
            },
            read: function (e) {
                var t = e.root;
                t.ref.scrollWidth = t.element.scrollWidth
            },
            write: function (e) {
                var t = e.root, n = e.props;
                t.ref.filters.hidden = n.hidden, n.filterOpacity = t.ref.filters.filterOpacity
            }
        }), Pi = U({
            name: "filter", ignoreRect: !0, mixins: {apis: ["viewId", "stagePosition", "hidden"]}, create: function (e) {
                var t = e.root, n = e.props;
                n.viewId = "filter", n.hidden = !1, t.ref.isHiding = !1, t.ref.filters = t.appendChildView(t.createChildView(Li, {id: n.id}))
            }, read: function (e) {
                var t = e.root, n = e.props;
                if (t.ref.filters && !n.hidden) {
                    var r = t.rect;
                    if (0 !== r.element.width && 0 !== r.element.height) {
                        var i = t.ref.filters.rect, o = 0 === i.element.top,
                            a = o ? r.element.top + i.element.height + i.element.marginBottom : r.element.top,
                            l = o ? r.element.height - i.element.height - i.element.marginBottom : r.element.height - i.element.height - r.element.top;
                        n.stagePosition = {x: r.element.left, y: a, width: r.element.width, height: l}
                    }
                }
            }, shouldUpdateChildViews: function (e) {
                var t = e.props, n = e.actions;
                return !t.hidden || t.hidden && n && n.length
            }, write: V({
                SHOW_VIEW: function (e) {
                    var t = e.root, n = e.action, r = e.props;
                    t.ref.filters && (n.id === r.viewId ? (t.ref.isHiding = !1, r.hidden = !1, t.ref.filters.hidden = !1) : t.ref.isHiding = !0)
                }
            }, function (e) {
                var t = e.root, n = e.props;
                t.ref.filters.opacity = t.ref.isHiding || t.ref.filters.hidden ? 0 : 1, t.ref.isHiding && t.ref.filters.filterOpacity <= 0 && (t.ref.isHiding = !1, n.hidden = !0, t.ref.filters.hidden = !0)
            })
        }), Gi = U({
            name: "color",
            ignoreRect: !0,
            mixins: {apis: ["viewId", "stagePosition", "hidden"]},
            create: function (e) {
                var t = e.root, n = e.props;
                n.viewId = "color", n.hidden = !1, t.ref.isHiding = !1, t.ref.form = t.appendChildView(t.createChildView(Ri, {
                    opacity: 0,
                    id: n.id
                }))
            },
            read: function (e) {
                var t = e.root, n = e.props;
                if (!n.hidden) {
                    var r = t.rect;
                    if (0 !== r.element.width && 0 !== r.element.height) {
                        var i = t.ref.form.rect, o = i.element.height, a = 0 === i.element.top,
                            l = a ? r.element.top + o : r.element.top,
                            c = a ? r.element.height - o : r.element.height - o - r.element.top;
                        n.stagePosition = {x: r.element.left, y: l, width: r.element.width, height: c}
                    }
                }
            },
            shouldUpdateChildViews: function (e) {
                var t = e.props, n = e.actions;
                return !t.hidden || t.hidden && n && n.length
            },
            write: V({
                SHOW_VIEW: function (e) {
                    var t = e.root, n = e.action, r = e.props;
                    n.id === r.viewId ? (t.ref.isHiding = !1, t.ref.form.opacity = 1, r.hidden = !1) : (t.ref.isHiding = !0, t.ref.form.opacity = 0)
                }
            }, function (e) {
                var t = e.root, n = e.props;
                t.ref.isHiding && 0 === t.ref.form.opacity && (t.ref.isHiding = !1, n.hidden = !0)
            })
        }), ki = U({
            ignoreRect: !0,
            tag: "div",
            name: "markup-color",
            mixins: {animations: {opacity: "spring"}, styles: ["opacity"], apis: ["onSelect", "selectedValue"]},
            create: function (e) {
                var t = e.root, n = e.props, r = n.colors, i = n.name, o = n.onSelect;
                t.ref.handleChange = function (e) {
                    o(e.target.value), e.stopPropagation()
                }, t.element.addEventListener("change", t.ref.handleChange);
                var a = v("ul");
                if (t.ref.inputs = r.map(function (e) {
                    var t = "doka--color-" + te(), n = v("li"),
                        r = v("input", {id: t, name: i, type: "radio", value: e[1]}),
                        o = v("label", {for: t, title: e[0], style: "background-color: " + (e[2] || e[1])});
                    return o.textContent = e[0], y(n)(r), y(n)(o), y(a)(n), r
                }), t.element.appendChild(a), t.query("GET_MARKUP_ALLOW_CUSTOM_COLOR") && function () {
                    try {
                        var e = v("input", {type: "color"}), t = "color" === e.type;
                        return /^((?!chrome|android).)*safari/i.test(navigator.userAgent) ? t : t && "number" != typeof e.selectionStart
                    } catch (e) {
                        return !1
                    }
                }()) {
                    var l = v("div", {class: "doka--color-input"}), u = "doka--color-" + te(), s = v("label", {for: u});
                    s.textContent = "Choose color";
                    var f = v("input", {id: u, name: i, type: "color"}), d = v("span", {class: "doka--color-visualizer"}),
                        h = v("span", {class: "doka--color-brightness"});
                    t.ref.handleCustomColorChange = function () {
                        var e = Xe(f.value), t = function (e, t, n) {
                            var r, i = Math.max(e, t, n), o = Math.min(e, t, n), a = i - o, l = 0 === i ? 0 : a / i,
                                c = i / 255;
                            switch (i) {
                                case o:
                                    r = 0;
                                    break;
                                case e:
                                    r = t - n + a * (t < n ? 6 : 0), r /= 6 * a;
                                    break;
                                case t:
                                    r = n - e + 2 * a, r /= 6 * a;
                                    break;
                                case n:
                                    r = e - t + 4 * a, r /= 6 * a
                            }
                            return [r, l, c]
                        }.apply(void 0, c(e)), n = 360 * t[0] - 90, r = .625 * t[1], i = 1 - t[2];
                        d.style.backgroundColor = f.value, d.style.transform = "rotateZ(".concat(n, "deg) translateX(").concat(r, "em)"), h.style.opacity = i, o(f.value)
                    };
                    var p = !0;
                    t.ref.handleCustomColorSelect = function (e) {
                        p ? o(e.target.value) : t.ref.handleCustomColorChange(), p = !1
                    }, f.addEventListener("click", t.ref.handleCustomColorSelect), f.addEventListener("input", t.ref.handleCustomColorChange), y(l)(f), y(l)(s), y(l)(d), y(l)(h), t.appendChild(l), t.ref.customInput = f
                }
            },
            write: function (e) {
                var t = e.root, n = e.props;
                if (n.selectedValue !== t.ref.activeSelectedValue) {
                    t.ref.activeSelectedValue = n.selectedValue;
                    var r = !1;
                    if (t.ref.inputs.forEach(function (e) {
                        e.checked = e.value === n.selectedValue, e.checked && (r = !0)
                    }), !t.ref.customInput) return;
                    t.ref.customInput.dataset.selected = t.ref.inputs.length && !r, r || (t.ref.customInput.value = n.selectedValue, t.ref.handleCustomColorChange())
                }
            },
            destroy: function (e) {
                var t = e.root;
                t.element.removeEventListener("change", t.ref.handleChange), t.ref.customInput && (t.ref.customInput.removeEventListener("click", t.ref.handleCustomColorSelect), t.ref.customInput.removeEventListener("input", t.ref.handleCustomColorChange))
            }
        }), Di = function (e) {
            var t = e.ref, n = t.colorSelect, r = t.fontFamilySelect, i = t.fontSizeSelect, o = t.shapeStyleSelect,
                a = t.lineStyleSelect;
            [r, i, o, t.lineDecorationSelect].forEach(function (e) {
                e.element.dataset.active = "false"
            }), [n, a].forEach(function (e) {
                e.element.dataset.active = "true"
            })
        },
        Ui = ["fontFamily", "fontSize", "fontWeight", "textAlign", "backgroundColor", "fontColor", "borderColor", "borderWidth", "borderStyle", "lineColor", "lineWidth", "lineDecoration", "lineJoin", "lineCap"],
        Vi = function (e) {
            return '<svg width="23" height="23" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">'.concat(e, "</svg>")
        }, Bi = U({
            name: "markup-tools",
            ignoreRect: !0,
            mixins: {
                apis: ["onUpdate"],
                animations: {translateY: "spring", opacity: "spring"},
                styles: ["translateY", "opacity"]
            },
            create: function (e) {
                var t = e.root, n = e.props.onUpdate;
                t.ref.colorSelect = t.appendChildView(t.createChildView(ki, {
                    onSelect: function (e) {
                        t.ref.colorSelect.selectedValue = e, n("color", e)
                    }, name: "color-select", colors: t.query("GET_MARKUP_COLOR_OPTIONS")
                })), t.ref.shapeStyleSelect = t.appendChildView(t.createChildView(Dr, {
                    onSelect: function (e) {
                        t.ref.shapeStyleSelect.selectedValue = e, n("shapeStyle", [e[1], e[2]])
                    },
                    name: "tool",
                    label: t.query("GET_LABEL_MARKUP_SELECT_SHAPE_STYLE"),
                    direction: "up",
                    options: t.query("GET_MARKUP_SHAPE_STYLE_OPTIONS").map(function (e) {
                        return {
                            value: e, label: e[0], icon: function (e) {
                                var t = 0 === e ? "currentColor" : "none", n = e;
                                return Vi('<rect stroke="'.concat(0 === e ? "none" : "currentColor", '" fill="').concat(t, '" stroke-width="').concat(n, '" x="2" y="3" width="17" height="17" rx="3"/>'))
                            }(e[3])
                        }
                    })
                })), t.ref.lineStyleSelect = t.appendChildView(t.createChildView(Dr, {
                    onSelect: function (e) {
                        t.ref.lineStyleSelect.selectedValue = e, n("lineStyle", [e[1], e[2]])
                    },
                    name: "tool",
                    label: t.query("GET_LABEL_MARKUP_SELECT_LINE_STYLE"),
                    direction: "up",
                    options: t.query("GET_MARKUP_LINE_STYLE_OPTIONS").map(function (e) {
                        return {
                            value: e, label: e[0], icon: function (e) {
                                return Vi('<line stroke-linecap="round" stroke-linejoin="round" stroke="currentColor" stroke-width="'.concat(e, '" x1="3" y1="12" x2="20" y2="12"/>'))
                            }(e[3])
                        }
                    })
                })), t.ref.lineDecorationSelect = t.appendChildView(t.createChildView(Dr, {
                    onSelect: function (e) {
                        t.ref.lineDecorationSelect.selectedValue = e, n("lineDecoration", e)
                    },
                    name: "tool",
                    label: t.query("GET_LABEL_MARKUP_SELECT_LINE_DECORATION"),
                    direction: "up",
                    options: t.query("GET_MARKUP_LINE_DECORATION_OPTIONS").map(function (e) {
                        return {value: e[1], label: e[0]}
                    })
                })), t.ref.fontFamilySelect = t.appendChildView(t.createChildView(Dr, {
                    onSelect: function (e) {
                        t.ref.fontFamilySelect.selectedValue = e, n("fontFamily", e)
                    },
                    name: "tool",
                    label: t.query("GET_LABEL_MARKUP_SELECT_FONT_FAMILY"),
                    direction: "up",
                    options: t.query("GET_MARKUP_FONT_FAMILY_OPTIONS").map(function (e) {
                        return {
                            value: e[1],
                            label: '<span style="font-family:'.concat(e[1], ';font-weight:600;">').concat(e[0], "</span>")
                        }
                    })
                })), t.ref.fontSizeSelect = t.appendChildView(t.createChildView(Dr, {
                    onSelect: function (e) {
                        t.ref.fontSizeSelect.selectedValue = e, n("fontSize", e)
                    },
                    name: "tool",
                    label: t.query("GET_LABEL_MARKUP_SELECT_FONT_SIZE"),
                    direction: "up",
                    options: t.query("GET_MARKUP_FONT_SIZE_OPTIONS").map(function (e) {
                        return {value: e[1], label: e[0]}
                    })
                })), "draw" === t.query("GET_MARKUP_UTIL") && Di(t)
            },
            write: V({
                SWITCH_MARKUP_UTIL: function (e) {
                    var t = e.root;
                    "draw" === e.action.util && Di(t)
                }, MARKUP_SELECT: function (e) {
                    var t = e.root, n = e.action, r = t.ref, i = r.colorSelect, o = r.fontFamilySelect,
                        a = r.fontSizeSelect, c = r.shapeStyleSelect, u = r.lineStyleSelect, s = r.lineDecorationSelect,
                        f = n.id ? t.query("GET_MARKUP_BY_ID", n.id) : null, d = [i, o, a, c, u, s], h = [];
                    if (f) {
                        var p = l(f, 2), g = p[0], m = p[1],
                            v = Array.isArray(m.allowEdit) ? m.allowEdit : !1 === m.allowEdit ? [] : Ui,
                            y = Ui.reduce(function (e, t) {
                                return e[t] = -1 !== v.indexOf(t), e
                            }, {});
                        if (y.color = !!v.find(function (e) {
                            return /[a-z]Color/.test(e)
                        }), "image" !== g && y.color && (i.selectedValue = zi(m), h.push(i)), "text" === g && (y.fontFamily && (o.selectedValue = m.fontFamily, h.push(o)), y.fontSize && (a.selectedValue = m.fontSize, h.push(a))), ("rect" === g || "ellipse" === g) && y.borderStyle) {
                            var E = t.query("GET_MARKUP_SHAPE_STYLE_OPTIONS").find(function (e) {
                                var t = m.borderWidth === e[1], n = m.borderStyle === e[2] || Mi(m.borderStyle, e[2]);
                                return t && n
                            });
                            c.selectedValue = E, h.push(c)
                        }
                        if ("line" === g || "path" === g) {
                            if (y.lineWidth) {
                                var _ = t.query("GET_MARKUP_LINE_STYLE_OPTIONS").find(function (e) {
                                    var t = m.lineWidth === e[1], n = m.lineStyle === e[2] || Mi(m.lineStyle, e[2]);
                                    return t && n
                                });
                                u.selectedValue = _, h.push(u)
                            }
                            "line" === g && y.lineDecoration && (s.selectedValue = m.lineDecoration, h.push(s))
                        }
                        d.forEach(function (e) {
                            e.element.dataset.active = "false"
                        }), h.forEach(function (e) {
                            e.element.dataset.active = "true"
                        })
                    }
                }, MARKUP_UPDATE: function (e) {
                    var t = e.root, n = e.action, r = n.style, i = n.value;
                    t.ref[r + "Select"] && (t.ref[r + "Select"].selectedValue = i)
                }
            })
        }), zi = function (e) {
            var t = e.fontColor, n = e.backgroundColor, r = e.lineColor, i = e.borderColor;
            return t || n || r || i
        }, Ni = {
            crop: gi, resize: wi, filter: Pi, color: Gi, markup: U({
                name: "markup",
                ignoreRect: !0,
                mixins: {apis: ["viewId", "stagePosition", "hidden"]},
                create: function (e) {
                    var t = e.root, n = e.props;
                    n.viewId = "markup", n.hidden = !1, t.ref.isHiding = !1;
                    var r = [["select", {
                        label: t.query("GET_LABEL_MARKUP_TOOL_SELECT"),
                        icon: Vn('<g fill="none" fill-rule="evenodd"><path d="M7 13H5a1 1 0 01-1-1V5a1 1 0 011-1h7a1 1 0 011 1v2" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M10.22 8.914l12.58 5.18a1 1 0 01.012 1.844l-4.444 1.904a1 1 0 00-.526.526l-1.904 4.444a1 1 0 01-1.844-.013l-5.18-12.58a1 1 0 011.305-1.305z" fill="currentColor"/></g>', 26)
                    }], ["draw", {
                        label: t.query("GET_LABEL_MARKUP_TOOL_DRAW"),
                        icon: Vn('<g fill="currentColor"><path d="M17.86 5.71a2.425 2.425 0 013.43 3.43L9.715 20.714 5 22l1.286-4.715L17.86 5.71z"/></g>', 26)
                    }], ["line", {
                        label: t.query("GET_LABEL_MARKUP_TOOL_LINE"),
                        icon: Vn('<g transform="translate(3 4.5)" fill-rule="nonzero" fill="currentColor" stroke="none"><path d="M15.414 9.414l-6.01 6.01a2 2 0 1 1-2.829-2.828L9.172 10H2a2 2 0 1 1 0-4h7.172L6.575 3.404A2 2 0 1 1 9.404.575l6.01 6.01c.362.363.586.863.586 1.415s-.224 1.052-.586 1.414z"/></g>', 26)
                    }], ["text", {
                        label: t.query("GET_LABEL_MARKUP_TOOL_TEXT"),
                        icon: Vn('<g transform="translate(5 5)" fill="currentColor" fill-rule="evenodd"><path d="M10 4v11a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4H1a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-5z"/></g>', 26)
                    }], ["rect", {
                        label: t.query("GET_LABEL_MARKUP_TOOL_RECT"),
                        icon: Vn('<g fill="currentColor"><rect x="5" y="5" width="16" height="16" rx="2"/></g>', 26)
                    }], ["ellipse", {
                        label: t.query("GET_LABEL_MARKUP_TOOL_ELLIPSE"),
                        icon: Vn('<g fill="currentColor"><circle cx="13" cy="13" r="9"/></g>', 26)
                    }]];
                    t.ref.utils = v("fieldset"), t.ref.utils.className = "doka--markup-utils", t.ref.utilsList = v("ul");
                    var i = "markup-utils-".concat(te());
                    t.ref.inputs = r.map(function (e) {
                        var n = e[0], r = e[1], o = "doka--markup-tool-" + te(), a = v("li"), l = v("input");
                        l.id = o, l.checked = t.query("GET_MARKUP_UTIL") === n, l.setAttribute("type", "radio"), l.setAttribute("name", i), l.value = n;
                        var c = v("label");
                        return c.setAttribute("for", o), c.className = "doka--button-tool", c.innerHTML = r.icon + "<span>" + r.label + "</span>", c.title = r.label, a.appendChild(l), a.appendChild(c), t.ref.utilsList.appendChild(a), l
                    }), t.ref.utils.appendChild(t.ref.utilsList), t.ref.utilsList.addEventListener("change", function (e) {
                        t.dispatch("SET_MARKUP_UTIL", {value: e.target.value})
                    }), t.query("GET_MARKUP_ALLOW_ADD_MARKUP") && (t.ref.menu = t.appendChildView(t.createChildView(Gr("toolbar", ["opacity"], {
                        opacity: {
                            type: "spring",
                            mass: 15,
                            delay: 50
                        }
                    }), {opacity: 0, element: t.ref.utils})));
                    var o = t.ref.tools = t.appendChildView(t.createChildView(Bi, {
                        opacity: 0, onUpdate: function (e, n) {
                            t.dispatch("MARKUP_UPDATE", {style: e, value: n})
                        }
                    }));
                    t.ref.menuItemsRequiredWidth = null, "draw" === t.query("GET_MARKUP_UTIL") && (o.opacity = 1, o.translateY = 0, o.element.dataset.active = "true")
                },
                read: function (e) {
                    var t = e.root, n = e.props;
                    if (n.hidden) t.ref.menuItemsRequiredWidth = null; else {
                        var r = t.rect;
                        if (0 !== r.element.width && 0 !== r.element.height) {
                            if (t.ref.menu && null === t.ref.menuItemsRequiredWidth) {
                                var i = t.ref.menu.rect.element.width;
                                t.ref.menuItemsRequiredWidth = 0 === i ? null : i
                            }
                            var o = t.ref.menu && t.ref.menu.rect, a = t.ref.tools.rect.element.height,
                                l = o ? o.element.height : a, c = !o || 0 === o.element.top,
                                u = c ? r.element.top + l : r.element.top,
                                s = c ? r.element.height - l : r.element.height - l - r.element.top;
                            n.stagePosition = {x: r.element.left + 20, y: u, width: r.element.width - 40, height: s - a}
                        }
                    }
                },
                shouldUpdateChildViews: function (e) {
                    var t = e.props, n = e.actions;
                    return !t.hidden || t.hidden && n && n.length
                },
                write: V({
                    SHOW_VIEW: function (e) {
                        var t = e.root, n = e.action, r = e.props;
                        n.id === r.viewId ? (r.hidden = !1, t.ref.isHiding = !1, t.ref.menu && (t.ref.menu.opacity = 1)) : (t.ref.isHiding = !0, t.ref.menu && (t.ref.menu.opacity = 0), t.ref.tools.opacity = 0, t.ref.tools.translateY = 5)
                    }, MARKUP_SELECT: function (e) {
                        var t = e.root, n = e.action;
                        t.ref.tools.opacity = n.id ? 1 : 0, t.ref.tools.translateY = n.id ? 0 : 5, t.ref.tools.element.dataset.active = n.id ? "true" : "false"
                    }, DID_SET_MARKUP_UTIL: function (e) {
                        var t = e.root, n = e.action, r = t.ref, i = r.inputs, o = r.tools;
                        i.forEach(function (e) {
                            e.checked = e.value === n.value
                        }), "draw" === n.value && (o.opacity = 1, o.translateY = 0, o.element.dataset.active = "true")
                    }
                }, function (e) {
                    var t = e.root, n = e.props;
                    t.ref.isHiding && t.ref.menu && 0 === t.ref.menu.opacity && (t.ref.isHiding = !1, n.hidden = !0), n.hidden || (t.ref.menu.element.dataset.layout = t.ref.menuItemsRequiredWidth > t.rect.element.width ? "compact" : "spacious")
                })
            })
        }, Fi = U({
            name: "view-stack", ignoreRect: !0, mixins: {apis: ["offsetTop"]}, create: function (e) {
                var t = e.root;
                t.ref.activeView = null, t.ref.activeStagePosition = null, t.ref.shouldFocus = !1
            }, write: V({
                SHOW_VIEW: function (e) {
                    var t = e.root, n = e.props, r = e.action, i = 0 === t.childViews.length,
                        o = t.childViews.find(function (e) {
                            return e.viewId === r.id
                        });
                    o || (o = t.appendChildView(t.createChildView(Ni[r.id], a({}, n)))), t.ref.activeView = o, t.childViews.map(function (e) {
                        return e.element
                    }).forEach(function (e) {
                        e.dataset.viewActive = "false", e.removeAttribute("tabindex")
                    });
                    var l = t.ref.activeView.element;
                    l.dataset.viewActive = "true", l.setAttribute("tabindex", -1), t.ref.shouldFocus = !i
                }, DID_PRESENT_IMAGE: function (e) {
                    var t = e.root;
                    t.dispatch("CHANGE_VIEW", {id: t.query("GET_UTIL") || t.query("GET_UTILS")[0]})
                }, DID_SET_UTILS: function (e) {
                    var t = e.root;
                    t.dispatch("CHANGE_VIEW", {id: t.query("GET_UTIL") || t.query("GET_UTILS")[0]})
                }
            }, function (e) {
                var t = e.root, n = e.props, r = t.ref, i = r.activeView, o = r.previousStagePosition;
                if (i && i.stagePosition && (t.childViews.forEach(function (e) {
                    e.offsetTop = n.offsetTop, e.element.viewHidden !== e.hidden && (e.element.viewHidden = e.hidden, e.element.dataset.viewHidden = e.hidden)
                }), function (e, t) {
                    return !e || !t || !Re(e, t)
                }(i.stagePosition, o))) {
                    var a = i.stagePosition, l = a.x, c = a.y, u = a.width, s = a.height;
                    if (0 === u && 0 === s) return;
                    t.dispatch("DID_RESIZE_STAGE", {
                        offset: {x: l, y: c},
                        size: {width: u, height: s},
                        animate: !0
                    }), t.ref.previousStagePosition = i.stagePosition
                }
            }), didWriteView: function (e) {
                var t = e.root;
                t.ref.shouldFocus && (t.ref.activeView.element.focus({preventScroll: !0}), t.ref.shouldFocus = !1)
            }
        }), Wi = U({
            name: "content",
            ignoreRect: !0,
            mixins: {styles: ["opacity"], animations: {opacity: {type: "tween", duration: 250}}},
            create: function (e) {
                var t = e.root, n = e.props;
                t.opacity = 1, t.ref.viewStack = t.appendChildView(t.createChildView(Fi, {id: n.id})), t.ref.image = null
            },
            write: V({
                DID_LOAD_IMAGE: function (e) {
                    var t = e.root, n = e.props;
                    t.ref.image = t.appendChildView(t.createChildView(Pr, {id: n.id}))
                }
            }, function (e) {
                var t = e.root, n = t.ref, r = n.image, i = n.viewStack;
                if (r) {
                    var o = t.rect.element.top;
                    i.offsetTop = o, r.offsetTop = o
                }
            })
        }), qi = U({
            name: "utils", create: function (e) {
                var t = e.root, n = {
                    crop: {
                        title: t.query("GET_LABEL_BUTTON_UTIL_CROP"),
                        icon: Vn('<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" stroke="currentColor" stroke-width="2"><path d="M23 17H9a2 2 0 0 1-2-2v-5m0-3V1"/><path d="M1 7h14a2 2 0 0 1 2 2v7m0 4v3"/></g>')
                    },
                    filter: {
                        title: t.query("GET_LABEL_BUTTON_UTIL_FILTER"),
                        icon: Vn('<g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18.347 9.907a6.5 6.5 0 1 0-1.872 3.306M3.26 11.574a6.5 6.5 0 1 0 2.815-1.417"/><path d="M10.15 17.897A6.503 6.503 0 0 0 16.5 23a6.5 6.5 0 1 0-6.183-8.51"/></g>')
                    },
                    color: {
                        title: t.query("GET_LABEL_BUTTON_UTIL_COLOR"),
                        icon: Vn('<g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 1v5.5m0 3.503V23M12 1v10.5m0 3.5v8M20 1v15.5m0 3.5v3M2 7h4M10 12h4M18 17h4"/></g>')
                    },
                    markup: {
                        title: t.query("GET_LABEL_BUTTON_UTIL_MARKUP"),
                        icon: Vn('<g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.086 2.914a2.828 2.828 0 1 1 4 4l-14.5 14.5-5.5 1.5 1.5-5.5 14.5-14.5z"/></g>')
                    },
                    resize: {
                        title: t.query("GET_LABEL_BUTTON_UTIL_RESIZE"),
                        icon: Vn('<g fill="none" fill-rule="evenodd" stroke-width="2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="12" width="10" height="10" rx="2"/><path d="M4 11.5V4a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-5.5"/><path d="M14 10l3.365-3.365M14 6h4v4" class="doka--icon-resize-arrow-ne"/><path d="M14 10l3.365-3.365M14 6v4h4" class="doka--icon-resize-arrow-sw"/></g>')
                    }
                };
                t.ref.utils = Object.keys(n).map(function (e) {
                    return a({id: e}, n[e])
                }), t.ref.utilMenuRequiredWidth = null
            }, read: function (e) {
                var t = e.root;
                if (null === t.ref.utilMenuRequiredWidth) {
                    var n = t.childViews.reduce(function (e, t) {
                        return e + t.rect.outer.width
                    }, 0);
                    t.ref.utilMenuRequiredWidth = 0 === n ? null : n
                }
            }, write: V({
                DID_SET_UTILS: function (e) {
                    var t = e.root, n = c(t.query("GET_UTILS"));
                    t.childViews.forEach(function (e) {
                        return t.removeChildView(e)
                    }), t.element.dataset.utilCount = n.length, 1 === n.length && (n.length = 0), n.forEach(function (e) {
                        var n = t.ref.utils.find(function (t) {
                            return t.id === e
                        }), r = t.appendChildView(t.createChildView(Bn, {
                            name: "tab",
                            view: Bn,
                            label: n.title,
                            opacity: 1,
                            icon: n.icon,
                            id: n.id,
                            action: function () {
                                return t.dispatch("CHANGE_VIEW", {id: n.id})
                            }
                        }));
                        t.ref["util_button_".concat(n.id)] = r
                    })
                }, SHOW_VIEW: function (e) {
                    var t = e.root, n = e.action;
                    t.childViews.forEach(function (e) {
                        e.element.dataset.active = e.id === n.id
                    })
                }
            }, function (e) {
                var t = e.root, n = e.props, r = e.timestamp, i = t.query("GET_CROP", n.id, r);
                if (i) {
                    var o = i.cropStatus;
                    t.ref.util_button_resize && function (e, t) {
                        e.element.dataset.scaleDirection = null === t || t > 1 ? "up" : "down"
                    }(t.ref.util_button_resize, o.image.width ? o.image.width / o.crop.width : null), t.element.dataset.layout = t.ref.utilMenuRequiredWidth > t.rect.element.width ? "compact" : "spacious"
                }
            })
        }), Hi = k() && function () {
            try {
                var e = {antialias: !1, alpha: !1}, t = document.createElement("canvas");
                return !!window.WebGLRenderingContext && (t.getContext("webgl", e) || t.getContext("experimental-webgl", e))
            } catch (e) {
                return !1
            }
        }(), Yi = U({
            name: "container", create: function (e) {
                var t = e.root, n = [];
                t.query("GET_ALLOW_BUTTON_RESET") && n.push({
                    view: Bn,
                    opacity: 0,
                    label: t.query("GET_LABEL_BUTTON_RESET"),
                    didCreateView: function (e) {
                        return t.ref.btnReset = e
                    },
                    name: "app action-reset icon-only",
                    icon: Vn('<g fill="currentColor" fill-rule="nonzero"><path d="M6.036 13.418L4.49 11.872A.938.938 0 1 0 3.163 13.2l2.21 2.209a.938.938 0 0 0 1.326 0l2.209-2.21a.938.938 0 0 0-1.327-1.326l-1.545 1.546zM12 10.216a1 1 0 0 1 2 0V13a1 1 0 0 1-2 0v-2.784z"/><path d="M15.707 14.293a1 1 0 0 1-1.414 1.414l-2-2a1 1 0 0 1 1.414-1.414l2 2z"/><path d="M8.084 19.312a1 1 0 0 1 1.23-1.577 6 6 0 1 0-2.185-3.488 1 1 0 0 1-1.956.412 8 8 0 1 1 2.912 4.653z"/></g>', 26),
                    action: function () {
                        return t.dispatch("EDIT_RESET")
                    }
                }), t.query("GET_ALLOW_BUTTON_CANCEL") && n.unshift({
                    view: Bn,
                    label: t.query("GET_LABEL_BUTTON_CANCEL"),
                    name: "app action-cancel icon-fallback",
                    opacity: 1,
                    icon: Vn('<g fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6L6 18M6 6l12 12"/></g>'),
                    didCreateView: function (e) {
                        t.ref.btnCancel = e
                    },
                    action: function () {
                        t.dispatch("EDIT_CANCEL")
                    }
                }), n.push({view: qi}), t.query("GET_ALLOW_BUTTON_CONFIRM") && n.push({
                    view: Bn,
                    label: t.query("GET_LABEL_BUTTON_CONFIRM"),
                    name: "app action-confirm icon-fallback",
                    opacity: 1,
                    icon: Vn('<polyline fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" points="20 6 9 17 4 12"></polyline>'),
                    didCreateView: function (e) {
                        t.ref.btnConfirm = e
                    },
                    action: function () {
                        t.dispatch("EDIT_CONFIRM")
                    }
                }), t.ref.menu = t.appendChildView(t.createChildView(Gr("menu"), {controls: n})), t.ref.menu.opacity = 0, t.ref.status = t.appendChildView(t.createChildView(Zn)), t.ref.hasWebGL = Hi, t.ref.hasWebGL ? t.dispatch("AWAIT_IMAGE") : t.dispatch("MISSING_WEBGL"), t.ref.handleFocusOut = function (e) {
                    if (e.relatedTarget && Jn(t.element, e.relatedTarget)) {
                        var n = t.ref.status;
                        "busy" === n.element.dataset.viewStatus && n.element.focus()
                    }
                }, t.ref.handleFocusIn = function (e) {
                    var n = t.ref, r = n.menu, i = n.content, o = e.target;
                    if (!r.element.contains(o) && i && i.element.contains(o)) {
                        if (!Array.from(t.element.querySelectorAll("[data-view-active=false]")).reduce(function (e, t) {
                            return t.contains(o) && (e = !0), e
                        }, !1)) return;
                        r.element.querySelector("button,input,[tabindex]").focus()
                    }
                }, t.element.addEventListener("focusin", t.ref.handleFocusIn), t.element.addEventListener("focusout", t.ref.handleFocusOut), t.ref.previousState = null
            }, destroy: function (e) {
                var t = e.root;
                t.element.removeEventListener("focusin", t.ref.handleFocusIn), t.element.removeEventListener("focusout", t.ref.handleFocusOut)
            }, write: V({
                UNLOAD_IMAGE: function (e) {
                    var t = e.root;
                    t.ref.content && (t.ref.content.opacity = 0, t.ref.menu.opacity = 0)
                }, DID_UNLOAD_IMAGE: function (e) {
                    var t = e.root;
                    t.removeChildView(t.ref.content), t.ref.content = null
                }, DID_LOAD_IMAGE: function (e) {
                    var t = e.root, n = e.props;
                    t.ref.hasWebGL && (t.ref.content = t.appendChildView(t.createChildView(Wi, {
                        opacity: null,
                        id: n.id
                    })), t.ref.menu.opacity = 1)
                }, SHOW_VIEW: function (e) {
                    var t = e.root, n = e.action;
                    t.element.dataset.limitOverflow = "resize" === n.id
                }
            }, function (e) {
                var t = e.root, n = e.props, r = e.timestamp, i = t.query("GET_CROP", n.id, r);
                if (i) {
                    var o = i.cropStatus, l = o.props, c = {
                        crop: {
                            center: {x: me(l.center.x, 5), y: me(l.center.y, 5)},
                            rotation: me(l.rotation, 5),
                            zoom: me(l.zoom, 5),
                            aspectRatio: me(l.aspectRatio, 5),
                            flip: {horizontal: l.flip.horizontal, vertical: l.flip.vertical},
                            scaleToFit: l.scaleToFit,
                            width: o.currentWidth,
                            height: o.currentHeight
                        }
                    };
                    Zi(t.ref.previousState, c) && (t.dispatch("DID_UPDATE", {state: a({}, c)}), t.ref.previousState = c);
                    var u = t.ref, s = u.btnReset, f = u.btnCancel, d = u.content, h = i.canReset;
                    if (s && (s.opacity = h ? 1 : 0), f && t.query("GET_UTILS").length > 1 && s) {
                        var p = t.query("GET_ROOT_SIZE");
                        f.opacity = h && p.width <= 600 ? 0 : 1
                    }
                    d && 0 === d.opacity && t.dispatch("DID_UNLOAD_IMAGE")
                }
            })
        }), Zi = function (e, t) {
            if (!e) return !0;
            var n = e.crop, r = t.crop;
            return n.width !== r.width || n.height !== r.height || n.center.x !== r.center.x || n.center.y !== r.center.y || n.rotation !== r.rotation || n.scaleToFit !== r.scaleToFit || n.zoom !== r.zoom || n.aspectRatio !== r.aspectRatio || n.flip.horizontal !== r.flip.horizontal || n.flip.vertical !== r.flip.vertical
        }, Xi = function (e) {
            "gesturestart" !== e.type && li(e.target, function (e) {
                return e.isScrollContainer
            }) || e.preventDefault()
        }, Ki = U({
            name: "editor",
            ignoreRect: !0,
            mixins: {
                styles: ["opacity"],
                animations: {opacity: {type: "tween", duration: 350}},
                apis: ["markedForRemoval"]
            },
            create: function (e) {
                var t = e.root, n = e.props;
                n.markedForRemoval = !1, fe() && (t.element.addEventListener("touchmove", Xi, {passive: !1}), t.element.addEventListener("gesturestart", Xi)), t.ref.pointerPolyfill = function (e) {
                    var t = {
                        destroy: function () {
                        }
                    };
                    if ("onpointerdown" in window || e.pointersPolyfilled) return t;
                    e.pointersPolyfilled = !0;
                    var n = 0, r = [], i = function (e, t, n) {
                        var r = new UIEvent(t.type, {view: window, bubbles: !n});
                        Object.keys(t).forEach(function (e) {
                            Object.defineProperty(r, e, {value: t[e], writable: !1})
                        }), e.dispatchEvent(r)
                    }, o = function (e, t, o) {
                        return Array.from(t.changedTouches).map(function (a) {
                            var l = r[a.identifier], c = {
                                type: e,
                                pageX: a.pageX,
                                pageY: a.pageY,
                                pointerId: a.identifier,
                                isPrimary: l ? l.isPrimary : 0 === n,
                                preventDefault: function () {
                                    return t.preventDefault()
                                }
                            };
                            return i(a.target, c, o), c
                        })
                    }, a = function (e) {
                        o("pointerdown", e).forEach(function (e) {
                            r[e.pointerId] = e, n++
                        })
                    }, l = function (e) {
                        o("pointermove", e)
                    }, c = function (e) {
                        o("pointerup", e).forEach(function (e) {
                            delete r[e.pointerId], n--
                        })
                    }, u = function (e, t, n) {
                        var r = {
                            type: e,
                            pageX: t.pageX,
                            pageY: t.pageY,
                            pointerId: 0,
                            isPrimary: !0,
                            preventDefault: function () {
                                return t.preventDefault()
                            }
                        };
                        return i(t.target, r, n), r
                    }, s = function (e) {
                        u("pointerdown", e)
                    }, f = function (e) {
                        u("pointermove", e)
                    }, d = function (e) {
                        u("pointerup", e)
                    };
                    return "ontouchstart" in window ? (e.addEventListener("touchstart", a), e.addEventListener("touchmove", l), e.addEventListener("touchend", c)) : "onmousedown" in window && (e.addEventListener("mousedown", s), e.addEventListener("mousemove", f), e.addEventListener("mouseup", d)), t.destroy = function () {
                        r.length = 0, e.pointersPolyfilled = !1, e.removeEventListener("touchstart", a), e.removeEventListener("touchmove", l), e.removeEventListener("touchend", c), e.removeEventListener("mousedown", s), e.removeEventListener("mousemove", f), e.removeEventListener("mouseup", d)
                    }, t
                }("root" === t.query("GET_POINTER_EVENTS_POLYFILL_SCOPE") ? t.element : document.documentElement), t.appendChildView(t.createChildView(Yi, a({}, n)))
            },
            destroy: function (e) {
                var t = e.root;
                t.ref.pointerPolyfill.destroy(), t.element.removeEventListener("touchmove", Xi, !0), t.element.removeEventListener("gesturestart", Xi)
            }
        }), ji = function (e) {
            return e.ref.isFullscreen
        }, Qi = function (e) {
            return /fullscreen/.test(e.query("GET_STYLE_LAYOUT_MODE"))
        }, Ji = function (e) {
            return /fullscreen|preview/.test(e.query("GET_STYLE_LAYOUT_MODE"))
        }, $i = function (e) {
            return /modal/.test(e.query("GET_STYLE_LAYOUT_MODE"))
        }, eo = function (e) {
            return e.query("GET_ALLOW_AUTO_CLOSE")
        }, to = Ji, no = Ji, ro = function (e) {
            var t = e.ref, n = t.environment, r = t.isSingleUtil, i = t.canBeControlled;
            e.element.dataset.styleViewport = lo(e.rect.element.width, e.rect.element.height) + " " + n.join(" ") + (r ? " single-util" : " multi-util") + (i ? " flow-controls" : " no-flow-controls")
        }, io = function (e) {
            var t = e.element, n = e.ref, r = n.handleFullscreenUpdate, i = n.handleEscapeKey;
            t.setAttribute("tabindex", -1), r(), e.ref.focusTrap = function (e) {
                var t = function (t) {
                    if (9 === t.keyCode) {
                        var n = Array.from(e.querySelectorAll("button,input,[tabindex]")).filter(function (e) {
                            return "hidden" !== e.style.visibility && -1 !== e.tabIndex
                        }), r = n[0], i = n[n.length - 1];
                        t.shiftKey ? document.activeElement === r && (i.focus(), t.preventDefault()) : document.activeElement === i && (r.focus(), t.preventDefault())
                    }
                };
                return e.addEventListener("keydown", t), {
                    destroy: function () {
                        e.removeEventListener("keydown", t)
                    }
                }
            }(t), t.addEventListener("keydown", i), window.addEventListener("resize", r), window.innerWidth - document.documentElement.clientWidth > 0 && document.body.classList.add("doka--parent"), document.body.appendChild(t);
            var o = document.querySelector("meta[name=viewport]");
            e.ref.defaultViewportContent = o ? o.getAttribute("content") : null, o || ((o = document.createElement("meta")).setAttribute("name", "viewport"), document.head.appendChild(o)), o.setAttribute("content", "width=device-width, height=device-height, initial-scale=1, maximum-scale=1, user-scalable=0"), e.opacity = 1, e.element.contains(document.activeElement) || t.focus(), e.dispatch("INVALIDATE_VIEWPORT"), e.ref.isFullscreen = !0
        }, oo = function (e) {
            var t = e.element, n = e.ref, r = n.handleFullscreenUpdate, i = n.focusTrap, o = n.handleEscapeKey;
            t.removeAttribute("tabindex"), i.destroy(), t.removeEventListener("keydown", o), window.removeEventListener("resize", r), document.body.classList.remove("doka--parent");
            var a = document.querySelector("meta[name=viewport]");
            e.ref.defaultViewportContent ? (a.setAttribute("content", e.ref.defaultViewportContent), e.ref.defaultViewportContent = null) : a.parentNode.removeChild(a), e.ref.isFullscreen = !1
        }, ao = U({
            name: "root",
            ignoreRect: !0,
            mixins: {styles: ["opacity"], animations: {opacity: {type: "tween", duration: 350}}},
            create: function (e) {
                var t = e.root, n = e.props;
                t.element.id = t.query("GET_ID") || "doka-".concat(n.id);
                var r = t.query("GET_CLASS_NAME");
                r && t.element.classList.add(r), t.ref.environment = [], t.ref.shouldBeDestroyed = !1, t.ref.isClosing = !1, t.ref.isClosed = !1, t.ref.isFullscreen = !1, t.query("GET_ALLOW_DROP_FILES") && (t.ref.catcher = function (e) {
                    var t, n = {browseEnabled: !1}, r = function () {
                        t.files.length && i.fire("drop", Array.from(t.files))
                    }, i = a({}, ne(), {
                        enableBrowse: function () {
                            n.browseEnabled || ((t = document.createElement("input")).style.display = "none", t.setAttribute("type", "file"), t.addEventListener("change", r), e.appendChild(t), e.addEventListener("click", o), n.browseEnabled = !0)
                        }, disableBrowse: function () {
                            n.browseEnabled && (t.removeEventListener("change", r), t.parentNode.removeChild(t), e.removeEventListener("click", o), n.browseEnabled = !1)
                        }, destroy: function () {
                            e.removeEventListener("dragover", l), e.removeEventListener("drop", c), e.removeEventListener("click", o), t && t.removeEventListener("change", r)
                        }
                    }), o = function () {
                        return t.click()
                    }, l = function (e) {
                        return e.preventDefault()
                    }, c = function (e) {
                        e.preventDefault();
                        var t = Array.from(e.dataTransfer.items || e.dataTransfer.files).map(function (e) {
                            return e.getAsFile && "file" === e.kind ? e.getAsFile() : e
                        });
                        i.fire("drop", t)
                    };
                    return e.addEventListener("dragover", l), e.addEventListener("drop", c), i
                }(t.element), t.ref.catcher.on("drop", function (e) {
                    e.forEach(function (e) {
                        t.dispatch("REQUEST_LOAD_IMAGE", {source: e})
                    })
                })), t.ref.touchDetector = function () {
                    function e() {
                        t.fire("touch-detected"), window.removeEventListener("touchstart", e, !1)
                    }

                    var t = a({}, ne(), {
                        destroy: function () {
                            window.removeEventListener("touchstart", e, !1)
                        }
                    });
                    return window.addEventListener("touchstart", e, !1), t
                }(), t.ref.touchDetector.onOnce("touch-detected", function () {
                    t.ref.environment.push("touch")
                }), t.ref.editor = t.appendChildView(t.createChildView(Ki, {id: n.id})), t.query("GET_STYLES").filter(function (e) {
                    return !z(e.value)
                }).map(function (e) {
                    var n = e.name, r = e.value;
                    t.element.dataset[n] = r
                }), t.ref.updateViewport = function () {
                    t.dispatch("INVALIDATE_VIEWPORT")
                }, window.addEventListener("resize", t.ref.updateViewport), window.addEventListener("scroll", t.ref.updateViewport), t.ref.isSingleUtil = 1 === t.query("GET_UTILS").length, t.ref.canBeControlled = t.query("GET_ALLOW_BUTTON_CONFIRM") || t.query("GET_ALLOW_BUTTON_CANCEL"), ro(t);
                var i = document.createElement("div");
                i.style.cssText = "position:fixed;height:100vh;top:0;", t.ref.measure = i, document.body.appendChild(i), t.ref.handleEscapeKey = function (e) {
                    27 === e.keyCode && t.dispatch("EDIT_CANCEL")
                }, t.ref.initialScreenMeasureHeight = null, t.ref.handleFullscreenUpdate = function () {
                    t.element.dataset.styleFullscreen = window.innerHeight === t.ref.initialScreenMeasureHeight
                }, t.ref.clientRect = {left: 0, top: 0}, $i(t) && (t.ref.handleModalTap = function (e) {
                    e.target === t.element && t.dispatch("EDIT_CANCEL")
                }, t.element.addEventListener("pointerdown", t.ref.handleModalTap))
            },
            read: function (e) {
                var t = e.root, n = t.ref.measure;
                n && (t.ref.initialScreenMeasureHeight = n.offsetHeight, n.parentNode.removeChild(n), t.ref.measure = null), t.ref.clientRect = t.element.getBoundingClientRect(), t.ref.clientRect.leftScroll = t.ref.clientRect.left + (window.scrollX || window.pageXOffset), t.ref.clientRect.topScroll = t.ref.clientRect.top + (window.scrollY || window.pageYOffset)
            },
            write: V({
                ENTER_FULLSCREEN: function (e) {
                    var t = e.root;
                    io(t)
                }, EXIT_FULLSCREEN: function (e) {
                    var t = e.root;
                    oo(t)
                }, SHOW_VIEW: function (e) {
                    var t = e.root, n = e.action;
                    t.element.dataset.view = n.id
                }, DID_SET_STYLE_LAYOUT_MODE: function (e) {
                    var t = e.root, n = e.action;
                    t.element.dataset.styleLayoutMode = n.value || "none", /fullscreen/.test(n.value) && !/fullscreen/.test(n.prevValue) && t.dispatch("ENTER_FULLSCREEN")
                }, AWAITING_IMAGE: function (e) {
                    var t = e.root;
                    t.ref.catcher && t.query("GET_ALLOW_BROWSE_FILES") && t.ref.catcher.enableBrowse()
                }, DID_REQUEST_LOAD_IMAGE: function (e) {
                    var t = e.root;
                    if (t.ref.catcher && t.query("GET_ALLOW_BROWSE_FILES") && t.ref.catcher.disableBrowse(), 0 === t.opacity && (t.opacity = 1), t.ref.isClosing = !1, t.ref.isClosed = !1, !Qi(t) || ji(t)) {
                        var n = t.query("GET_STYLE_LAYOUT_MODE");
                        null !== n && "modal" !== n || t.element.parentNode || t.dispatch("SET_STYLE_LAYOUT_MODE", {value: ("fullscreen " + (n || "")).trim()})
                    } else t.dispatch("ENTER_FULLSCREEN")
                }, DID_CANCEL: function (e) {
                    var t = e.root;
                    to(t) && eo(t) && t.dispatch("EDIT_CLOSE")
                }, DID_CONFIRM: function (e) {
                    var t = e.root;
                    to(t) && eo(t) && t.dispatch("EDIT_CLOSE")
                }, EDIT_CLOSE: function (e) {
                    var t = e.root;
                    no(t) && (t.opacity = t.opacity || 1, t.opacity = 0, t.ref.isClosed = !1, t.ref.isClosing = !0, t.query("GET_ALLOW_AUTO_DESTROY") && (t.ref.shouldBeDestroyed = !0), ji(t) && t.dispatch("EXIT_FULLSCREEN"))
                }, DID_SET_UTILS: function (e) {
                    var t = e.root;
                    t.ref.isSingleUtil = 1 === t.query("GET_UTILS").length
                }
            }, function (e) {
                var t = e.root;
                ro(t);
                var n = t.query("GET_ROOT"), r = t.rect.element;
                n.width === r.width && n.height === r.height && n.y === t.ref.clientRect.top && n.topScroll === t.ref.clientRect.topScroll || t.dispatch("UPDATE_ROOT_RECT", {
                    rect: {
                        x: t.ref.clientRect.left,
                        y: t.ref.clientRect.top,
                        left: t.ref.editor.rect.element.left,
                        top: t.ref.editor.rect.element.top,
                        leftScroll: t.ref.clientRect.leftScroll,
                        topScroll: t.ref.clientRect.topScroll,
                        width: t.rect.element.width,
                        height: t.rect.element.height
                    }
                })
            }),
            didWriteView: function (e) {
                var t = e.root, n = t.ref, r = n.isClosed, i = n.isClosing, o = n.shouldBeDestroyed;
                !r && i && 0 === t.opacity && (t.dispatch("DID_CLOSE"), t.ref.isClosed = !0, t.ref.isClosing = !1, Qi(t) && t.element.parentNode && document.body.removeChild(t.element), o && t.dispatch("EDIT_DESTROY"))
            },
            destroy: function (e) {
                var t = e.root;
                ji(t) && oo(t), $i(t) && t.element.removeEventListener("pointerdown", t.ref.handleModalTap), Qi(t) && t.element.parentNode && document.body.removeChild(t.element), window.removeEventListener("resize", t.ref.updateViewport), t.ref.touchDetector.destroy(), t.ref.catcher && t.ref.catcher.destroy()
            }
        }), lo = function (e, t) {
            var n = "";
            return 0 === e && 0 === t ? "detached" : (n += t > e ? "portrait" : "landscape", (n += e <= 600 ? " x-cramped" : e <= 1e3 ? " x-comfortable" : " x-spacious").trim())
        }, co = function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = de(), n = function (e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [], r = a({}, e), i = [], o = [],
                    l = function (e, t, n) {
                        n ? o.push({type: e, data: t}) : (f[e] && f[e](t), i.push({type: e, data: t}))
                    }, c = function (e) {
                        for (var t, n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) r[i - 1] = arguments[i];
                        return s[e] ? (t = s)[e].apply(t, r) : null
                    }, u = {
                        getState: function () {
                            return a({}, r)
                        }, processActionQueue: function () {
                            var e = [].concat(i);
                            return i.length = 0, e
                        }, processDispatchQueue: function () {
                            var e = [].concat(o);
                            o.length = 0, e.forEach(function (e) {
                                var t = e.type, n = e.data;
                                l(t, n)
                            })
                        }, dispatch: l, query: c
                    }, s = {};
                t.forEach(function (e) {
                    s = a({}, e(r), s)
                });
                var f = {};
                return n.forEach(function (e) {
                    f = a({}, e(l, c, r), f)
                }), u
            }(function (e) {
                var t = {noImageTimeout: null, options: J(e)};
                return $(t), t
            }(t), [nt, function (e) {
                return function (t) {
                    var n = {};
                    return d(e, function (e) {
                        n["GET_".concat(ee(e, "_").toUpperCase())] = function () {
                            return t.options[e]
                        }
                    }), n
                }
            }(t)], [Un, function (e) {
                return function (t, n, r) {
                    var i = {};
                    return d(e, function (e) {
                        var n = ee(e, "_").toUpperCase();
                        i["SET_".concat(n)] = function (i) {
                            var o;
                            try {
                                o = r.options[e], r.options[e] = i.value
                            } catch (e) {
                            }
                            t("DID_SET_".concat(n), {value: r.options[e], prevValue: o})
                        }
                    }), i
                }
            }(t)]);
            n.dispatch("SET_OPTIONS", {options: e});
            var r = function () {
                document.hidden || n.dispatch("KICK")
            };
            document.addEventListener("visibilitychange", r);
            var i = te();
            n.dispatch("SET_UID", {id: i});
            var o = null, l = ao(n, {id: i}), c = !1, p = {
                _read: function () {
                    c || l._read()
                }, _write: function (e) {
                    var t = n.processActionQueue().filter(function (e) {
                        return !/^SET_/.test(e.type)
                    });
                    c && !t.length || (v(t), (c = l._write(e, t)) && n.processDispatchQueue(), t.find(function (e) {
                        return "EDIT_DESTROY" === e.type
                    }) && y())
                }
            }, g = function (e) {
                return function (t) {
                    var n = {type: e};
                    return t ? (t.hasOwnProperty("error") && (n.error = f(t.error) ? a({}, t.error) : t.error || null), t.hasOwnProperty("output") && (n.output = t.output), t.hasOwnProperty("image") && (n.image = t.image), t.hasOwnProperty("source") && (n.source = t.source), t.hasOwnProperty("state") && (n.state = t.state), n) : n
                }
            }, m = {
                DID_CONFIRM: g("confirm"),
                DID_CANCEL: g("cancel"),
                DID_REQUEST_LOAD_IMAGE: g("loadstart"),
                DID_LOAD_IMAGE: g("load"),
                DID_LOAD_IMAGE_ERROR: g("loaderror"),
                DID_SHOW_IMAGE: g("ready"),
                DID_UPDATE: g("update"),
                DID_CLOSE: g("close"),
                DID_DESTROY: g("destroy"),
                DID_INIT: g("init")
            }, v = function (e) {
                e.length && e.forEach(function (e) {
                    if (m[e.type]) {
                        var t = m[e.type];
                        (Array.isArray(t) ? t : [t]).forEach(function (t) {
                            setTimeout(function () {
                                !function (e) {
                                    var t = a({doka: E}, e);
                                    delete t.type, l && l.element.dispatchEvent(new CustomEvent("Doka:".concat(e.type), {
                                        detail: t,
                                        bubbles: !0,
                                        cancelable: !0,
                                        composed: !0
                                    }));
                                    var r = [];
                                    e.hasOwnProperty("error") && r.push(e.error);
                                    var i = ["type", "error"];
                                    Object.keys(e).filter(function (e) {
                                        return !i.includes(e)
                                    }).forEach(function (t) {
                                        return r.push(e[t])
                                    }), E.fire.apply(E, [e.type].concat(r));
                                    var o = n.query("GET_ON".concat(e.type.toUpperCase()));
                                    o && o.apply(void 0, r)
                                }(t(e.data))
                            }, 0)
                        })
                    }
                })
            }, y = function () {
                E.fire("destroy", l.element), document.removeEventListener("visibilitychange", r), l._destroy(), n.dispatch("DID_DESTROY")
            }, E = a({}, ne(), p, function (e, t) {
                var n = {};
                return d(t, function (r) {
                    var i = q(t[r]) ? t[r] : r;
                    n[r] = {
                        get: function () {
                            return e.getState().options[i]
                        }, set: function (t) {
                            e.dispatch("SET_".concat(ee(i, "_").toUpperCase()), {value: t})
                        }
                    }
                }), n
            }(n, t), {
                setOptions: function (e) {
                    return n.dispatch("SET_OPTIONS", {options: e})
                }, setData: function (e) {
                    n.dispatch("SET_DATA", e)
                }, getData: function (e) {
                    return new Promise(function (t, r) {
                        n.dispatch("GET_DATA", a({}, e, {success: t, failure: r}))
                    })
                }, open: function (e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return new Promise(function (r, i) {
                        e && n.dispatch("REQUEST_LOAD_IMAGE", {
                            source: e,
                            options: t,
                            success: r,
                            failure: i,
                            resolveOnConfirm: !!t && t.resolveOnConfirm
                        })
                    })
                }, edit: function (e, t) {
                    return E.open(e, a({}, t, {resolveOnConfirm: !0}))
                }, save: function (e) {
                    return new Promise(function (t, r) {
                        n.dispatch("GET_DATA", a({}, e, {success: t, failure: r}))
                    })
                }, clear: function () {
                    return n.dispatch("REQUEST_REMOVE_IMAGE")
                }, close: function () {
                    return n.dispatch("EDIT_CLOSE")
                }, destroy: y, insertBefore: function (e) {
                    u(l.element, e)
                }, insertAfter: function (e) {
                    s(l.element, e)
                }, appendTo: function (e) {
                    e.appendChild(l.element)
                }, replaceElement: function (e) {
                    u(l.element, e), e.parentNode.removeChild(e), o = e
                }, restoreElement: function () {
                    o && (s(o, l.element), l.element.parentNode.removeChild(l.element), o = null)
                }, isAttachedTo: function (e) {
                    return !!l && (l.element === e || o === e)
                }, element: {
                    get: function () {
                        return l ? l.element : null
                    }
                }
            });
            return n.dispatch("DID_INIT"), h(E)
        }, uo = function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = de(), n = {};
            return d(t, function (e, t) {
                q(t) || (n[e] = t[0])
            }), co(a({}, n, e))
        }, so = function (e) {
            return function (e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "-";
                return e.replace(new RegExp("".concat(t, "."), "g"), function (e) {
                    return e.charAt(1).toUpperCase()
                })
            }(e.replace(/^data-/, ""))
        }, fo = function (e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = [];
            d(e.attributes, function (t) {
                return n.push(e.attributes[t])
            });
            var r = n.filter(function (e) {
                return e.name
            }).reduce(function (t, n) {
                var r = p(e, n.name);
                return t[so(n.name)] = r === n.name || r, t
            }, {});
            return function e(t, n) {
                d(n, function (n, r) {
                    d(t, function (e, i) {
                        var o = new RegExp(n);
                        if (o.test(e) && (delete t[e], !1 !== r)) if (q(r)) t[r] = i; else {
                            var a = r.group;
                            f(r) && !t[a] && (t[a] = {}), t[a][function (e) {
                                return e.charAt(0).toLowerCase() + e.slice(1)
                            }(e.replace(o, ""))] = i
                        }
                    }), r.mapping && e(t[r.group], r.mapping)
                })
            }(r, t), r
        }, ho = function () {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return function (e) {
                return e instanceof HTMLElement
            }(t[0]) ? function (e) {
                var t = a({}, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}),
                    n = fo(e, {"^class$": "className"});
                Object.keys(n).forEach(function (e) {
                    f(n[e]) ? (f(t[e]) || (t[e] = {}), Object.assign(t[e], n[e])) : t[e] = n[e]
                }), "CANVAS" !== e.nodeName && "IMG" !== e.nodeName || (t.src = e.dataset.dokaSrc ? e.dataset.dokaSrc : e);
                var r = uo(t);
                return r.replaceElement(e), r
            }.apply(void 0, t) : uo.apply(void 0, c(t.filter(function (e) {
                return e
            })))
        }, po = ["fire", "_read", "_write"], go = function (e) {
            var t = {};
            return function (e, t, n) {
                Object.getOwnPropertyNames(e).filter(function (e) {
                    return !n.includes(e)
                }).forEach(function (n) {
                    return Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n))
                })
            }(e, t, po), t
        }, mo = function () {
            var e = k() && !("[object OperaMini]" === Object.prototype.toString.call(window.operamini)) && "visibilityState" in document && "Promise" in window && "slice" in Blob.prototype && "URL" in window && "createObjectURL" in window.URL && "performance" in window;
            return function () {
                return e
            }
        }(), vo = {apps: []}, yo = function () {
        }, Eo = {}, _o = yo, wo = yo, To = yo, Ao = yo, Ro = yo, xo = yo;
    if (mo()) {
        !function (e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 60, r = "__framePainter";
            if (window[r]) return window[r].readers.push(e), void window[r].writers.push(t);
            window[r] = {readers: [e], writers: [t]};
            var i = window[r], o = 1e3 / n, a = null, l = null, c = null, u = null, s = function () {
                document.hidden ? (c = function () {
                    return window.setTimeout(function () {
                        return f(performance.now())
                    }, o)
                }, u = function () {
                    return window.clearTimeout(l)
                }) : (c = function () {
                    return window.requestAnimationFrame(f)
                }, u = function () {
                    return window.cancelAnimationFrame(l)
                })
            };
            document.addEventListener("visibilitychange", function () {
                u && u(), s(), f(performance.now())
            });
            var f = function e(t) {
                l = c(e), a || (a = t);
                var n = t - a;
                n <= o || (a = t - n % o, i.readers.forEach(function (e) {
                    return e()
                }), i.writers.forEach(function (e) {
                    return e(t)
                }))
            };
            s(), f(performance.now())
        }(function () {
            vo.apps.forEach(function (e) {
                return e._read()
            })
        }, function (e) {
            vo.apps.forEach(function (t) {
                return t._write(e)
            })
        });
        var Io = function e() {
            document.dispatchEvent(new CustomEvent("doka:loaded", {
                detail: {
                    supported: mo,
                    create: _o,
                    destroy: wo,
                    parse: To,
                    find: Ao,
                    setOptions: xo
                }
            })), document.removeEventListener("DOMContentLoaded", e)
        };
        "loading" !== document.readyState ? setTimeout(function () {
            return Io()
        }, 0) : document.addEventListener("DOMContentLoaded", Io);
        t.OptionTypes = Eo = {}, d(de(), function (e, t) {
            Eo[e] = t[1]
        }), t.create = _o = function () {
            var e = ho.apply(void 0, arguments);
            return e.on("destroy", wo), vo.apps.push(e), go(e)
        }, t.destroy = wo = function (e) {
            var t = vo.apps.findIndex(function (t) {
                return t.isAttachedTo(e)
            });
            return t >= 0 && (vo.apps.splice(t, 1)[0].restoreElement(), !0)
        }, t.parse = To = function (e) {
            return Array.from(e.querySelectorAll(".".concat("doka"))).filter(function (e) {
                return !vo.apps.find(function (t) {
                    return t.isAttachedTo(e)
                })
            }).map(function (e) {
                return _o(e)
            })
        }, t.find = Ao = function (e) {
            var t = vo.apps.find(function (t) {
                return t.isAttachedTo(e)
            });
            return t ? go(t) : null
        }, t.getOptions = Ro = function () {
            var e = {};
            return d(de(), function (t, n) {
                e[t] = n[0]
            }), e
        }, t.setOptions = xo = function (e) {
            return f(e) && (vo.apps.forEach(function (t) {
                t.setOptions(e)
            }), function (e) {
                d(e, function (e, t) {
                    pe[e] && he(e, t)
                })
            }(e)), Ro()
        }
    }
    t.supported = mo, t.OptionTypes = Eo, t.create = _o, t.destroy = wo, t.parse = To, t.find = Ao, t.getOptions = Ro, t.setOptions = xo
}]);