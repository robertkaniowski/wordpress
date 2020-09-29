!(function(t, e) {
  for (var n in e) t[n] = e[n];
})(
  window,
  (function(t) {
    var e = {};
    function n(r) {
      if (e[r]) return e[r].exports;
      var o = (e[r] = { i: r, l: !1, exports: {} });
      return t[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
    }
    return (
      (n.m = t),
      (n.c = e),
      (n.d = function(t, e, r) {
        n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: r });
      }),
      (n.r = function(t) {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(t, "__esModule", { value: !0 });
      }),
      (n.t = function(t, e) {
        if ((1 & e && (t = n(t)), 8 & e)) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var r = Object.create(null);
        if (
          (n.r(r),
          Object.defineProperty(r, "default", { enumerable: !0, value: t }),
          2 & e && "string" != typeof t)
        )
          for (var o in t)
            n.d(
              r,
              o,
              function(e) {
                return t[e];
              }.bind(null, o)
            );
        return r;
      }),
      (n.n = function(t) {
        var e =
          t && t.__esModule
            ? function() {
                return t.default;
              }
            : function() {
                return t;
              };
        return n.d(e, "a", e), e;
      }),
      (n.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      }),
      (n.p = ""),
      n((n.s = 392))
    );
  })({
    3: function(t, e) {
      t.exports = function(t, e, n) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (t[e] = n),
          t
        );
      };
    },
    357: function(t, e) {
      t.exports = function(t) {
        var e = typeof t;
        return null != t && ("object" == e || "function" == e);
      };
    },
    358: function(t, e, n) {
      var r = n(395),
        o = "object" == typeof self && self && self.Object === Object && self,
        i = r || o || Function("return this")();
      t.exports = i;
    },
    359: function(t, e, n) {
      var r = n(358).Symbol;
      t.exports = r;
    },
    362: function(t, e, n) {
      var r = n(357),
        o = n(394),
        i = n(396),
        u = Math.max,
        c = Math.min;
      t.exports = function(t, e, n) {
        var a,
          s,
          f,
          l,
          p,
          d,
          v = 0,
          b = !1,
          y = !1,
          m = !0;
        if ("function" != typeof t) throw new TypeError("Expected a function");
        function j(e) {
          var n = a,
            r = s;
          return (a = s = void 0), (v = e), (l = t.apply(r, n));
        }
        function O(t) {
          return (v = t), (p = setTimeout(g, e)), b ? j(t) : l;
        }
        function w(t) {
          var n = t - d;
          return void 0 === d || n >= e || n < 0 || (y && t - v >= f);
        }
        function g() {
          var t = o();
          if (w(t)) return x(t);
          p = setTimeout(
            g,
            (function(t) {
              var n = e - (t - d);
              return y ? c(n, f - (t - v)) : n;
            })(t)
          );
        }
        function x(t) {
          return (p = void 0), m && a ? j(t) : ((a = s = void 0), l);
        }
        function h() {
          var t = o(),
            n = w(t);
          if (((a = arguments), (s = this), (d = t), n)) {
            if (void 0 === p) return O(d);
            if (y) return clearTimeout(p), (p = setTimeout(g, e)), j(d);
          }
          return void 0 === p && (p = setTimeout(g, e)), l;
        }
        return (
          (e = i(e) || 0),
          r(n) &&
            ((b = !!n.leading),
            (f = (y = "maxWait" in n) ? u(i(n.maxWait) || 0, e) : f),
            (m = "trailing" in n ? !!n.trailing : m)),
          (h.cancel = function() {
            void 0 !== p && clearTimeout(p), (v = 0), (a = d = s = p = void 0);
          }),
          (h.flush = function() {
            return void 0 === p ? l : x(o());
          }),
          h
        );
      };
    },
    392: function(t, e, n) {
      n(49), (t.exports = n(393));
    },
    393: function(t, e, n) {
      "use strict";
      n.r(e);
      var r = n(3),
        o = n.n(r),
        i = n(9),
        u = n.n(i),
        c = n(50),
        a = n.n(c),
        s = n(362),
        f = n.n(s),
        l = n(62),
        p = n.n(l),
        d = (n(402), "wp-block-jetpack-mailchimp");
      function v(t, e) {
        var n = e.value;
        return (
          e.classList.remove("error"),
          !!p.a.validate(n) ||
            (e.classList.add("error"),
            "function" ==
              typeof document.createElement("input").reportValidity &&
              t.reportValidity(),
            !1)
        );
      }
      var b = function(t, e) {
        return f()(function() {
          v(t, e);
        }, 1e3);
      };
      function y(t, e) {
        var n = t.querySelector("form"),
          r = t.querySelector("input[name=email]"),
          i = t.querySelector("." + d + "_processing"),
          c = t.querySelector("." + d + "_error"),
          a = t.querySelector("." + d + "_success");
        r.addEventListener("input", b(n, r)),
          n.addEventListener("submit", function(s) {
            s.preventDefault();
            var f = r.value,
              l = [].slice
                .call(n.querySelectorAll("input[type=hidden].mc-submit-param"))
                .reduce(function(t, e) {
                  return u()({}, t, o()({}, e.name, e.value));
                }, {});
            v(n, r) &&
              (t.classList.add("is-processing"),
              r.removeEventListener("input", b(n, r)),
              i.classList.add("is-visible"),
              (function(t, e, n) {
                var r =
                  "https://public-api.wordpress.com/rest/v1.1/sites/" +
                  encodeURIComponent(t) +
                  "/email_follow/subscribe?email=" +
                  encodeURIComponent(e);
                for (var o in n)
                  r +=
                    "&" +
                    encodeURIComponent(o) +
                    "=" +
                    encodeURIComponent(n[o]);
                return new Promise(function(t, e) {
                  var n = new XMLHttpRequest();
                  n.open("GET", r),
                    (n.onload = function() {
                      if (200 === n.status) {
                        var r = JSON.parse(n.responseText);
                        t(r);
                      } else {
                        var o = JSON.parse(n.responseText);
                        e(o);
                      }
                    }),
                    n.send();
                });
              })(e, f, l).then(
                function(t) {
                  i.classList.remove("is-visible"),
                    t.error && "member_exists" !== t.error
                      ? c.classList.add("is-visible")
                      : a.classList.add("is-visible");
                },
                function() {
                  i.classList.remove("is-visible"),
                    c.classList.add("is-visible");
                }
              ));
          });
      }
      "undefined" != typeof window &&
        a()(function() {
          Array.from(document.querySelectorAll("." + d)).forEach(function(t) {
            if ("true" !== t.getAttribute("data-jetpack-block-initialized")) {
              var e = t.getAttribute("data-blog-id");
              try {
                y(t, e);
              } catch (n) {
                0;
              }
              t.setAttribute("data-jetpack-block-initialized", "true");
            }
          });
        });
    },
    394: function(t, e, n) {
      var r = n(358);
      t.exports = function() {
        return r.Date.now();
      };
    },
    395: function(t, e) {
      var n =
        "object" == typeof window &&
        window &&
        window.Object === Object &&
        window;
      t.exports = n;
    },
    396: function(t, e, n) {
      var r = n(357),
        o = n(397),
        i = /^\s+|\s+$/g,
        u = /^[-+]0x[0-9a-f]+$/i,
        c = /^0b[01]+$/i,
        a = /^0o[0-7]+$/i,
        s = parseInt;
      t.exports = function(t) {
        if ("number" == typeof t) return t;
        if (o(t)) return NaN;
        if (r(t)) {
          var e = "function" == typeof t.valueOf ? t.valueOf() : t;
          t = r(e) ? e + "" : e;
        }
        if ("string" != typeof t) return 0 === t ? t : +t;
        t = t.replace(i, "");
        var n = c.test(t);
        return n || a.test(t) ? s(t.slice(2), n ? 2 : 8) : u.test(t) ? NaN : +t;
      };
    },
    397: function(t, e, n) {
      var r = n(398),
        o = n(401);
      t.exports = function(t) {
        return "symbol" == typeof t || (o(t) && "[object Symbol]" == r(t));
      };
    },
    398: function(t, e, n) {
      var r = n(359),
        o = n(399),
        i = n(400),
        u = r ? r.toStringTag : void 0;
      t.exports = function(t) {
        return null == t
          ? void 0 === t
            ? "[object Undefined]"
            : "[object Null]"
          : u && u in Object(t)
          ? o(t)
          : i(t);
      };
    },
    399: function(t, e, n) {
      var r = n(359),
        o = Object.prototype,
        i = o.hasOwnProperty,
        u = o.toString,
        c = r ? r.toStringTag : void 0;
      t.exports = function(t) {
        var e = i.call(t, c),
          n = t[c];
        try {
          t[c] = void 0;
          var r = !0;
        } catch (a) {}
        var o = u.call(t);
        return r && (e ? (t[c] = n) : delete t[c]), o;
      };
    },
    400: function(t, e) {
      var n = Object.prototype.toString;
      t.exports = function(t) {
        return n.call(t);
      };
    },
    401: function(t, e) {
      t.exports = function(t) {
        return null != t && "object" == typeof t;
      };
    },
    402: function(t, e, n) {},
    45: function(t, e, n) {
      "object" == typeof window &&
        window.Jetpack_Block_Assets_Base_Url &&
        (n.p = window.Jetpack_Block_Assets_Base_Url);
    },
    49: function(t, e, n) {
      "use strict";
      n.r(e);
      n(45);
    },
    50: function(t, e) {
      !(function() {
        t.exports = this.wp.domReady;
      })();
    },
    62: function(t, e, n) {
      "use strict";
      var r = /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;
      e.validate = function(t) {
        if (!t) return !1;
        if (t.length > 254) return !1;
        if (!r.test(t)) return !1;
        var e = t.split("@");
        return (
          !(e[0].length > 64) &&
          !e[1].split(".").some(function(t) {
            return t.length > 63;
          })
        );
      };
    },
    9: function(t, e, n) {
      var r = n(3);
      function o(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function(e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      t.exports = function(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? o(Object(n), !0).forEach(function(e) {
                r(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : o(Object(n)).forEach(function(e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      };
    }
  })
);