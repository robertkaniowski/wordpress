!(function(e, t) {
  for (var n in t) e[n] = t[n];
})(
  window,
  (function(e) {
    var t = {};
    function n(r) {
      if (t[r]) return t[r].exports;
      var c = (t[r] = { i: r, l: !1, exports: {} });
      return e[r].call(c.exports, c, c.exports, n), (c.l = !0), c.exports;
    }
    return (
      (n.m = e),
      (n.c = t),
      (n.d = function(e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
      }),
      (n.r = function(e) {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(e, "__esModule", { value: !0 });
      }),
      (n.t = function(e, t) {
        if ((1 & t && (e = n(e)), 8 & t)) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if (
          (n.r(r),
          Object.defineProperty(r, "default", { enumerable: !0, value: e }),
          2 & t && "string" != typeof e)
        )
          for (var c in e)
            n.d(
              r,
              c,
              function(t) {
                return e[t];
              }.bind(null, c)
            );
        return r;
      }),
      (n.n = function(e) {
        var t =
          e && e.__esModule
            ? function() {
                return e.default;
              }
            : function() {
                return e;
              };
        return n.d(t, "a", t), t;
      }),
      (n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }),
      (n.p = ""),
      n((n.s = 426))
    );
  })({
    0: function(e, t) {
      !(function() {
        e.exports = this.wp.element;
      })();
    },
    1: function(e, t) {
      !(function() {
        e.exports = this.wp.i18n;
      })();
    },
    115: function(e, t, n) {
      var r = n(71);
      e.exports = function(e) {
        if (Array.isArray(e)) return r(e);
      };
    },
    116: function(e, t) {
      e.exports = function(e) {
        if ("undefined" != typeof Symbol && Symbol.iterator in Object(e))
          return Array.from(e);
      };
    },
    117: function(e, t) {
      e.exports = function() {
        throw new TypeError(
          "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      };
    },
    161: function(e, t) {
      e.exports = function(e, t) {
        if (null == e) return {};
        var n,
          r,
          c = {},
          o = Object.keys(e);
        for (r = 0; r < o.length; r++)
          (n = o[r]), t.indexOf(n) >= 0 || (c[n] = e[n]);
        return c;
      };
    },
    17: function(e, t) {
      !(function() {
        e.exports = this.wp.compose;
      })();
    },
    183: function(e, t, n) {
      "use strict";
      var r = n(0),
        c = n(2);
      t.a = Object(r.createElement)(
        c.SVG,
        {
          xmlns: "http://www.w3.org/2000/svg",
          width: "24",
          height: "24",
          viewBox: "0 0 24 24"
        },
        Object(r.createElement)(c.Path, { d: "M0 0h24v24H0z", fill: "none" }),
        Object(r.createElement)(c.Path, {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d:
            "M6 3H14V17H6L6 3ZM4 3C4 1.89543 4.89543 1 6 1H14C15.1046 1 16 1.89543 16 3V17C16 18.1046 15.1046 19 14 19H6C4.89543 19 4 18.1046 4 17V3ZM18 5C19.1046 5 20 5.89543 20 7V21C20 22.1046 19.1046 23 18 23H10C8.89543 23 8 22.1046 8 21H18V5Z"
        })
      );
    },
    2: function(e, t) {
      !(function() {
        e.exports = this.wp.components;
      })();
    },
    20: function(e, t, n) {
      var r = n(115),
        c = n(116),
        o = n(73),
        i = n(117);
      e.exports = function(e) {
        return r(e) || c(e) || o(e) || i();
      };
    },
    22: function(e, t) {
      function n() {
        return (
          (e.exports = n =
            Object.assign ||
            function(e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
          n.apply(this, arguments)
        );
      }
      e.exports = n;
    },
    25: function(e, t) {
      !(function() {
        e.exports = this.React;
      })();
    },
    29: function(e, t) {
      function n(e, t, n, r, c, o, i) {
        try {
          var a = e[o](i),
            l = a.value;
        } catch (u) {
          return void n(u);
        }
        a.done ? t(l) : Promise.resolve(l).then(r, c);
      }
      e.exports = function(e) {
        return function() {
          var t = this,
            r = arguments;
          return new Promise(function(c, o) {
            var i = e.apply(t, r);
            function a(e) {
              n(i, c, o, a, l, "next", e);
            }
            function l(e) {
              n(i, c, o, a, l, "throw", e);
            }
            a(void 0);
          });
        };
      };
    },
    3: function(e, t) {
      e.exports = function(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (e[t] = n),
          e
        );
      };
    },
    30: function(e, t) {
      !(function() {
        e.exports = this.wp.blob;
      })();
    },
    345: function(e, t, n) {
      "use strict";
      var r =
        Object.assign ||
        function(e) {
          for (var t, n = 1; n < arguments.length; n++)
            for (var r in (t = arguments[n]))
              Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
          return e;
        };
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = function(e) {
          var t = e.size,
            n = void 0 === t ? 24 : t,
            c = e.onClick,
            o = (e.icon, e.className),
            a = (function(e, t) {
              var n = {};
              for (var r in e)
                0 <= t.indexOf(r) ||
                  (Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]));
              return n;
            })(e, ["size", "onClick", "icon", "className"]),
            l = ["gridicon", "gridicons-fullscreen", o, !1, !1, !1]
              .filter(Boolean)
              .join(" ");
          return i.default.createElement(
            "svg",
            r({ className: l, height: n, width: n, onClick: c }, a, {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 24 24"
            }),
            i.default.createElement(
              "g",
              null,
              i.default.createElement("path", {
                d:
                  "M21 3v6h-2V6.41l-3.29 3.3-1.42-1.42L17.59 5H15V3zM3 3v6h2V6.41l3.29 3.3 1.42-1.42L6.41 5H9V3zm18 18v-6h-2v2.59l-3.29-3.29-1.41 1.41L17.59 19H15v2zM9 21v-2H6.41l3.29-3.29-1.41-1.42L5 17.59V15H3v6z"
              })
            )
          );
        });
      var c,
        o = n(25),
        i = (c = o) && c.__esModule ? c : { default: c };
      e.exports = t.default;
    },
    347: function(e, t, n) {
      "use strict";
      n.d(t, "a", function() {
        return Y;
      });
      var r = n(22),
        c = n.n(r),
        o = n(20),
        i = n.n(o),
        a = n(7),
        l = n.n(a),
        u = n(47),
        s = n.n(u),
        d = n(4),
        f = n(8),
        p = n.n(f),
        m = n(0),
        b = (n(351), n(30)),
        v = n(9),
        y = n.n(v),
        O = n(29),
        j = n.n(O);
      function g() {
        return (g = j()(
          regeneratorRuntime.mark(function e(t) {
            var n,
              r,
              c,
              o,
              i,
              a = arguments;
            return regeneratorRuntime.wrap(function(e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (
                      ((n = a.length > 1 && void 0 !== a[1] && a[1]),
                      "img" !== (r = t.tagName.toLowerCase()))
                    ) {
                      e.next = 9;
                      break;
                    }
                    if (!t.complete) {
                      e.next = 5;
                      break;
                    }
                    return e.abrupt("return");
                  case 5:
                    return (
                      (e.next = 7),
                      new Promise(function(e) {
                        t.addEventListener("load", e, { once: !0 });
                      })
                    );
                  case 7:
                    e.next = 21;
                    break;
                  case 9:
                    if ("video" !== r && "audio" !== r) {
                      e.next = 21;
                      break;
                    }
                    if (
                      ((c = t.src),
                      !(n && c && c.startsWith(window.location.origin)))
                    ) {
                      e.next = 17;
                      break;
                    }
                    return (
                      (t.src = ""),
                      (o = new Request(c)),
                      (i = new Headers()),
                      t.type && i.append("Content-Type", t.type),
                      e.abrupt(
                        "return",
                        fetch(o, {
                          method: "GET",
                          headers: i,
                          mode: "no-cors",
                          cache: "default"
                        })
                          .then(function(e) {
                            return e.blob();
                          })
                          .then(function(e) {
                            t.src = URL.createObjectURL(e);
                          })
                      )
                    );
                  case 17:
                    if (t.HAVE_ENOUGH_DATA !== t.readyState) {
                      e.next = 19;
                      break;
                    }
                    return e.abrupt("return");
                  case 19:
                    return (
                      (e.next = 21),
                      new Promise(function(e) {
                        t.addEventListener("canplaythrough", e, { once: !0 }),
                          t.load();
                      })
                    );
                  case 21:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      var w = n(1);
      function h(e) {
        var t = e.index,
          n = e.progress,
          r = e.onClick;
        return Object(m.createElement)(
          "button",
          {
            key: t,
            className: "wp-story-pagination-bullet",
            "aria-label": Object(w.sprintf)(
              Object(w.__)("Go to slide %d", "jetpack"),
              t
            ),
            onClick: r
          },
          Object(m.createElement)(
            "div",
            { className: "wp-story-pagination-bullet-bar" },
            Object(m.createElement)("div", {
              className: "wp-story-pagination-bullet-bar-progress",
              style: { width: "".concat(n, "%") }
            })
          )
        );
      }
      var E = n(3),
        S = n.n(E),
        x = (n(352),
        function(e) {
          var t = e.icon,
            n = e.size,
            r = void 0 === n ? 24 : n;
          return Object(m.createElement)("i", {
            className: "jetpack-material-icons ".concat(t),
            style: { fontSize: r }
          });
        }),
        k = function(e) {
          var t = e.label,
            n = e.icon,
            r = e.onClick,
            c = e.size,
            o = void 0 === c ? 24 : c,
            i = e.iconSize,
            a = void 0 === i ? 24 : i,
            l = e.className,
            u = void 0 === l ? null : l,
            s = e.circled,
            d = void 0 !== s && s,
            f = e.outlined,
            b = void 0 !== f && f,
            v = e.bordered,
            y = void 0 !== v && v;
          return Object(m.createElement)(
            "button",
            {
              className: p()(
                S()(
                  {
                    "jetpack-mdc-icon-button": !0,
                    "circle-icon": d,
                    outlined: b,
                    bordered: y
                  },
                  u,
                  !!u
                )
              ),
              style: { width: "".concat(o, "px"), height: "".concat(o, "px") },
              "aria-label": t,
              "aria-pressed": "false",
              onClick: r
            },
            "function" == typeof n
              ? Object(m.createElement)("icon", { size: a })
              : Object(m.createElement)(x, { icon: n, size: a })
          );
        },
        N = function(e) {
          return Object(m.createElement)(
            k,
            c()(
              {
                circled: !0,
                outlined: !0,
                bordered: !0,
                size: 64,
                iconSize: 36
              },
              e
            )
          );
        },
        P = function(e) {
          var t = e.size,
            n = void 0 === t ? 24 : t,
            r = s()(e, ["size"]);
          return Object(m.createElement)(k, c()({ size: n, iconSize: n }, r));
        };
      function A(e) {
        var t = e.playing,
          n = e.muted,
          r = e.setPlaying,
          c = e.setMuted,
          o = e.showMute;
        return Object(m.createElement)(
          "div",
          { className: "wp-story-controls" },
          Object(m.createElement)(P, {
            label: Object(w.__)("Play", "jetpack"),
            onClick: function() {
              return r(!t);
            },
            icon: t ? "pause" : "play_arrow"
          }),
          o &&
            Object(m.createElement)(P, {
              label: Object(w.__)("Mute", "jetpack"),
              onClick: function() {
                return c(!n);
              },
              icon: n ? "volume_off" : "volume_up"
            })
        );
      }
      function C(e) {
        var t = e.fullscreen,
          n = e.onExitFullscreen,
          r = e.siteIconUrl,
          c = e.storyTitle;
        return t
          ? Object(m.createElement)(
              "div",
              { className: "wp-story-meta" },
              Object(m.createElement)(
                "div",
                { className: "wp-story-icon" },
                Object(m.createElement)("img", { alt: "Site icon", src: r })
              ),
              Object(m.createElement)(
                "div",
                null,
                Object(m.createElement)(
                  "div",
                  { className: "wp-story-title" },
                  c
                )
              ),
              Object(m.createElement)(P, {
                className: "wp-story-exit-fullscreen",
                label: Object(w.__)("Exit Fullscreen", "jetpack"),
                icon: "close",
                onClick: n
              })
            )
          : null;
      }
      var z = n(345),
        _ = n.n(z);
      function T(e) {
        var t = e.ended,
          n = e.hasPrevious,
          r = e.hasNext,
          c = e.onNextSlide,
          o = e.onPreviousSlide,
          i = e.icon,
          a = e.slideCount,
          l = Object(m.useCallback)(
            function(e) {
              t || (e.stopPropagation(), o());
            },
            [o, t]
          ),
          u = Object(m.useCallback)(
            function(e) {
              t || (e.stopPropagation(), c());
            },
            [c, t]
          );
        return Object(m.createElement)(
          "div",
          { className: "wp-story-overlay" },
          i &&
            Object(m.createElement)(
              "div",
              { className: "wp-story-embed-icon" },
              i,
              Object(m.createElement)("span", null, a)
            ),
          !i &&
            Object(m.createElement)(
              "div",
              { className: "wp-story-embed-icon-expand" },
              Object(m.createElement)(_.a, null)
            ),
          n &&
            Object(m.createElement)(
              "div",
              { className: "wp-story-prev-slide", onClick: l },
              Object(m.createElement)(N, {
                size: 44,
                iconSize: 24,
                label: "Previous Slide",
                icon: "navigate_before",
                className: "outlined-w"
              })
            ),
          r &&
            Object(m.createElement)(
              "div",
              { className: "wp-story-next-slide", onClick: u },
              Object(m.createElement)(N, {
                size: 44,
                iconSize: 24,
                label: "Next Slide",
                icon: "navigate_next",
                className: "outlined-w"
              })
            )
        );
      }
      var L = n(2);
      function F(e) {
        var t = e.currentMedia,
          n = t && "image" === t.type ? t.url : null;
        return Object(m.createElement)(
          "div",
          { className: "wp-story-background" },
          Object(m.createElement)("div", {
            className: "wp-story-background-image",
            style: { backgroundImage: n ? 'url("'.concat(n, '")') : "none" }
          }),
          Object(m.createElement)("div", {
            className: "wp-story-background-blur"
          }),
          Object(m.createElement)(
            L.SVG,
            {
              version: "1.1",
              xmlns: "http://www.w3.org/2000/svg",
              width: "0",
              height: "0"
            },
            Object(m.createElement)(
              "filter",
              { id: "gaussian-blur-18" },
              Object(m.createElement)("feGaussianBlur", { stdDeviation: "18" })
            )
          )
        );
      }
      var R = function() {
          return Object(m.createElement)(
            "div",
            { className: "wp-story-loading-spinner" },
            Object(m.createElement)(
              "div",
              { className: "wp-story-loading-spinner__outer" },
              Object(m.createElement)("div", {
                className: "wp-story-loading-spinner__inner"
              })
            )
          );
        },
        M = function(e) {
          var t = e.alt,
            n = e.className,
            r = e.id,
            c = e.mediaRef,
            o = e.mime,
            i = e.sizes,
            a = e.srcset,
            l = e.url;
          return Object(m.createElement)("img", {
            ref: c,
            "data-id": r,
            "data-mime": o,
            alt: t,
            src: l,
            className: p()("wp-story-image", "wp-image-".concat(r), n),
            srcSet: a,
            sizes: i
          });
        },
        I = function(e) {
          var t = e.alt,
            n = e.className,
            r = e.id,
            c = e.mediaRef,
            o = e.mime,
            i = e.url;
          return Object(m.createElement)("video", {
            className: p()(
              "wp-story-video",
              "intrinsic-ignore",
              "wp-video-".concat(r),
              n
            ),
            ref: c,
            "data-id": r,
            title: t,
            type: o,
            src: i,
            playsInline: !0
          });
        },
        U = function(e) {
          var t = e.targetAspectRatio,
            n = e.cropUpTo,
            r = e.type,
            o = e.width,
            i = e.height,
            a = s()(e, [
              "targetAspectRatio",
              "cropUpTo",
              "type",
              "width",
              "height"
            ]),
            l = null;
          if (o && i) {
            var u = o / i;
            if (u >= t) u > t / (1 - n) || (l = "wp-story-crop-wide");
            else u < t * (1 - n) || (l = "wp-story-crop-narrow");
          }
          var d = "video" === r || (a.mime || "").startsWith("video/");
          return Object(m.createElement)(
            "figure",
            null,
            d
              ? Object(m.createElement)(I, c()({}, a, { className: l }))
              : Object(m.createElement)(M, c()({}, a, { className: l }))
          );
        },
        H = function(e) {
          var t = e.media,
            n = e.index,
            r = e.currentSlideIndex,
            o = e.playing,
            i = e.uploading,
            a = e.ended,
            u = e.muted,
            s = e.onEnd,
            d = e.onProgress,
            f = e.settings,
            b = e.targetAspectRatio,
            v = n === r,
            O = v && o,
            j = Object(m.useRef)(null),
            w = Object(m.useState)(!1),
            h = l()(w, 2),
            E = h[0],
            S = h[1],
            x = Object(m.useState)(!0),
            k = l()(x, 2),
            N = k[0],
            P = k[1],
            A = function() {
              return (
                j.current &&
                j.current.src &&
                "video" === j.current.tagName.toLowerCase()
              );
            },
            C = Object(m.useState)({
              currentTime: 0,
              duration: null,
              timeout: null
            }),
            z = l()(C, 2),
            _ = z[0],
            T = z[1];
          return (
            Object(m.useEffect)(
              function() {
                A() && (O ? j.current.play() : j.current.pause());
              },
              [O, N]
            ),
            Object(m.useLayoutEffect)(
              function() {
                A() && a && v && (j.current.currentTime = j.current.duration);
              },
              [a, v]
            ),
            Object(m.useEffect)(
              function() {
                A() &&
                  ((j.current.muted = u), u || (j.current.volume = f.volume));
              },
              [u]
            ),
            Object(m.useEffect)(
              function() {
                v ||
                  (T({
                    currentTime: 0,
                    duration: null,
                    timeout: null,
                    lastUpdate: null
                  }),
                  A() && (j.current.pause(), (j.current.currentTime = 0)));
              },
              [v]
            ),
            Object(m.useEffect)(
              function() {
                O &&
                  a &&
                  (T({
                    currentTime: 0,
                    duration: null,
                    timeout: null,
                    lastUpdate: null
                  }),
                  A() && (j.current.currentTime = 0));
              },
              [O, a]
            ),
            Object(m.useLayoutEffect)(
              function() {
                if ((clearTimeout(_.timeout), !N)) {
                  if (o && v) {
                    var e = A() ? j.current : null,
                      t = e ? e.duration : f.imageTime;
                    if (_.currentTime >= t) return;
                    _.timeout = setTimeout(function() {
                      var n = _.lastUpdate
                          ? Date.now() - _.lastUpdate
                          : f.renderInterval,
                        r = e ? e.currentTime : _.currentTime + n;
                      T(
                        y()({}, _, {
                          lastUpdate: Date.now(),
                          duration: t,
                          currentTime: r
                        })
                      );
                    }, f.renderInterval);
                  }
                  v &&
                    !o &&
                    _.lastUpdate &&
                    T(y()({}, _, { lastUpdate: null }));
                }
              },
              [N, o, v, _]
            ),
            Object(m.useEffect)(
              function() {
                if (O && !a && null !== _.duration) {
                  var e = Math.round((100 * _.currentTime) / _.duration);
                  e >= 100 ? (d(100), s()) : d(e);
                }
              },
              [O, v, _]
            ),
            Object(m.useEffect)(
              function() {
                n <= r + (o ? 1 : 0) && S(!0);
              },
              [o, r]
            ),
            Object(m.useLayoutEffect)(
              function() {
                j.current &&
                  (function(e) {
                    return g.apply(this, arguments);
                  })(j.current, !0).then(function() {
                    P(!1);
                  });
              },
              [E, i]
            ),
            Object(m.createElement)(
              m.Fragment,
              null,
              v &&
                (N || i) &&
                Object(m.createElement)(
                  "div",
                  {
                    className: p()("wp-story-slide", "is-loading", {
                      transparent: i
                    })
                  },
                  Object(m.createElement)(R, null)
                ),
              Object(m.createElement)(
                "div",
                {
                  className: "wp-story-slide",
                  style: { display: v && !N ? "block" : "none" }
                },
                E &&
                  Object(m.createElement)(
                    U,
                    c()({}, t, {
                      targetAspectRatio: b,
                      cropUpTo: f.cropUpTo,
                      index: n,
                      mediaRef: j
                    })
                  )
              )
            )
          );
        },
        B = n(183),
        V = function(e) {
          var t = e.slides,
            n = e.fullscreen,
            r = e.currentSlideIndex,
            c = e.currentSlideProgress,
            o = e.onSlideSeek;
          return Object(m.createElement)(
            "div",
            { className: "wp-story-pagination wp-story-pagination-bullets" },
            t.map(function(e, t) {
              var i;
              i = t < r ? 100 : t > r ? 0 : c;
              return Object(m.createElement)(h, {
                key: t,
                index: t,
                progress: i,
                onClick: function() {
                  if (!n) return null;
                  o(t);
                }
              });
            })
          );
        },
        q =
          n(17).useResizeObserver ||
          (function() {
            function e(e) {
              var t = e.onResize,
                n = Object(m.useRef)();
              return (
                (function(e, t) {
                  var n = function() {
                    return (
                      e.current &&
                      e.current.contentDocument &&
                      e.current.contentDocument.defaultView
                    );
                  };
                  function r() {
                    t();
                    var e = n();
                    e && e.addEventListener("resize", t);
                  }
                  Object(m.useEffect)(function() {
                    return (
                      n()
                        ? r()
                        : e.current &&
                          e.current.addEventListener &&
                          e.current.addEventListener("load", r),
                      function() {
                        var e = n();
                        e &&
                          "function" == typeof e.removeEventListener &&
                          e.removeEventListener("resize", t);
                      }
                    );
                  }, []);
                })(n, function() {
                  return t(n);
                }),
                Object(m.createElement)("iframe", {
                  title: "jetpack-resize-listener",
                  style: {
                    display: "block",
                    opacity: 0,
                    position: "absolute",
                    top: 0,
                    left: 0,
                    height: "100%",
                    width: "100%",
                    overflow: "hidden",
                    pointerEvents: "none",
                    zIndex: -1
                  },
                  src: "about:blank",
                  ref: n,
                  "aria-hidden": !0,
                  tabIndex: -1,
                  frameBorder: 0
                })
              );
            }
            var t = function(e) {
              return {
                width: null != e ? e.offsetWidth : null,
                height: null != e ? e.offsetHeight : null
              };
            };
            return function() {
              var n =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : t,
                r = Object(m.useState)(n(null)),
                c = l()(r, 2),
                o = c[0],
                i = c[1],
                a = Object(m.useCallback)(
                  function(e) {
                    return i(n(e.current));
                  },
                  [n]
                ),
                u = Object(m.useMemo)(
                  function() {
                    return Object(m.createElement)(e, { onResize: a });
                  },
                  [a]
                );
              return [u, o];
            };
          })(),
        D = function(e) {
          var t = e.slides,
            n = e.fullscreen,
            r = e.setFullscreen,
            o = e.disabled,
            i = s()(e, ["slides", "fullscreen", "setFullscreen", "disabled"]),
            a = Object(m.useState)(0),
            u = l()(a, 2),
            f = u[0],
            v = u[1],
            y = Object(m.useState)(!1),
            O = l()(y, 2),
            j = O[0],
            g = O[1],
            w = Object(m.useState)(!1),
            h = l()(w, 2),
            E = h[0],
            S = h[1],
            x = Object(m.useState)(i.startMuted),
            k = l()(x, 2),
            N = k[0],
            P = k[1],
            z = Object(m.useState)(0),
            _ = l()(z, 2),
            L = _[0],
            R = _[1],
            M = Object(m.useRef)(),
            I = Object(m.useState)(null),
            U = l()(I, 2),
            D = U[0],
            W = U[1],
            G = q(),
            J = l()(G, 2),
            Z = J[0],
            K = J[1],
            Y = K.width,
            $ = K.height,
            Q = Object(m.useState)(i.defaultAspectRatio),
            X = l()(Q, 2),
            ee = X[0],
            te = X[1],
            ne = Object(d.some)(t, function(e) {
              return Object(b.isBlobURL)(e.url);
            }),
            re = n || !i.showSlideCount,
            ce = function(e) {
              var n = e < t.length ? t[e] : null;
              return (
                !!n &&
                ("video" === n.type || (n.mime || "").startsWith("video/"))
              );
            },
            oe = function(e) {
              var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : i.playOnNextSlide;
              R(0), v(e), t && g(t);
            },
            ie = Object(m.useCallback)(
              function() {
                o ||
                  (n || j || !i.playInFullscreen || r(!0),
                  E && !j && oe(0),
                  j || n || g(!0));
              },
              [j, E, n, o]
            ),
            ae = Object(m.useCallback)(
              function() {
                f > 0 && oe(f - 1);
              },
              [f]
            ),
            le = Object(m.useCallback)(
              function() {
                f < t.length - 1
                  ? oe(f + 1)
                  : (g(!1), S(!0), R(100), i.exitFullscreenOnEnd && r(!1));
              },
              [f, t]
            ),
            ue = Object(m.useCallback)(
              function() {
                r(!1), i.playInFullscreen && g(!1);
              },
              [n]
            );
          return (
            Object(m.useEffect)(
              function() {
                o && j && g(!1);
              },
              [o, j]
            ),
            Object(m.useLayoutEffect)(
              function() {
                j && S(!1);
              },
              [j]
            ),
            Object(m.useEffect)(function() {
              i.loadInFullscreen && r(!0), i.playOnLoad && g(!0);
            }, []),
            Object(m.useLayoutEffect)(
              function() {
                if (n) {
                  var e = (M.current && M.current.offsetHeight) || $,
                    t = Math.round(i.defaultAspectRatio * e),
                    r = Math.abs(1 - t / Y) < i.cropUpTo ? Y : t;
                  W(r);
                } else {
                  if (!M.current) return;
                  var c = M.current.offsetHeight,
                    o = Math.round(i.defaultAspectRatio * c);
                  W(o);
                }
              },
              [Y, $, n]
            ),
            Object(m.useLayoutEffect)(
              function() {
                M.current &&
                  M.current.offsetHeight > 0 &&
                  te(M.current.offsetWidth / M.current.offsetHeight);
              },
              [Y, $]
            ),
            Object(m.createElement)(
              m.Fragment,
              null,
              Z,
              Object(m.createElement)(
                "div",
                {
                  role: o ? "presentation" : "button",
                  className: p()("wp-story-container", {
                    "wp-story-with-controls": !o && !n && !i.playInFullscreen,
                    "wp-story-fullscreen": n,
                    "wp-story-ended": E,
                    "wp-story-disabled": o,
                    "wp-story-clickable": !o && !n
                  }),
                  style: { maxWidth: "".concat(D, "px") },
                  onClick: ie
                },
                Object(m.createElement)(
                  C,
                  c()({}, i.metadata, { fullscreen: n, onExitFullscreen: ue })
                ),
                Object(m.createElement)(
                  "div",
                  { className: "wp-story-wrapper", ref: M },
                  t.map(function(e, t) {
                    return Object(
                      m.createElement
                    )(H, { key: t, media: e, index: t, currentSlideIndex: f, playing: j, uploading: ne, muted: N, ended: E, onProgress: R, onEnd: le, settings: i, targetAspectRatio: ee, isVideo: ce(f) });
                  })
                ),
                Object(m.createElement)(T, {
                  icon: i.showSlideCount && B.a,
                  slideCount: t.length,
                  ended: E,
                  hasPrevious: f > 0,
                  hasNext: f < t.length - 1,
                  disabled: o,
                  onPreviousSlide: ae,
                  onNextSlide: le
                }),
                re &&
                  Object(m.createElement)(V, {
                    slides: t,
                    fullscreen: n,
                    currentSlideIndex: f,
                    currentSlideProgress: L,
                    onSlideSeek: oe
                  }),
                Object(m.createElement)(A, {
                  playing: j,
                  muted: N,
                  setPlaying: g,
                  setMuted: P,
                  showMute: ce(f)
                })
              ),
              n &&
                Object(m.createElement)(F, {
                  currentMedia: i.blurredBackground && t.length > f && t[f]
                })
            )
          );
        },
        W =
          window &&
          window.Element &&
          window.Element.prototype.hasOwnProperty("attachShadow");
      function G(e) {
        var t = e.enabled,
          n = e.delegatesFocus,
          r = void 0 !== n && n,
          c = e.mode,
          o = void 0 === c ? "open" : c,
          a = e.globalStyleElements,
          u = void 0 === a ? [] : a,
          s = e.adoptedStyleSheets,
          d = void 0 === s ? null : s,
          f = e.children,
          p = Object(m.useRef)(),
          b = Object(m.useState)(!1),
          v = l()(b, 2),
          y = v[0],
          O = v[1],
          j = "string" == typeof u ? i()(document.querySelectorAll(u)) : u,
          g = W && t && j.length > 0;
        if (
          (Object(m.useEffect)(
            function() {
              if (p.current) {
                var e = p.current.parentNode.attachShadow({
                  delegatesFocus: r,
                  mode: o
                });
                d && (e.adoptedStyleSheets = d), O(e);
              }
            },
            [p.current]
          ),
          g && !y)
        )
          return Object(m.createElement)("span", { ref: p });
        var w = Object(m.createElement)(
          m.Fragment,
          null,
          g && Object(m.createElement)(J, { globalStyleElements: j }),
          f
        );
        return g ? Object(m.createPortal)(w, y) : w;
      }
      function J(e) {
        var t = e.globalStyleElements;
        return Object(m.createElement)(
          m.Fragment,
          null,
          t.map(function(e, t) {
            var n = e.id,
              r = e.tagName,
              c = e.attributes,
              o = e.innerHTML;
            return "LINK" === r
              ? Object(m.createElement)("link", {
                  key: n || t,
                  id: n,
                  rel: c.rel.value,
                  href: c.href.value
                })
              : "STYLE" === r
              ? Object(m.createElement)("style", { key: n || t, id: n }, o)
              : void 0;
          })
        );
      }
      var Z = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          window.navigator.userAgent
        ),
        K = {
          imageTime: 5e3,
          renderInterval: 50,
          startMuted: !1,
          playInFullscreen: !0,
          playOnNextSlide: !0,
          playOnLoad: !1,
          exitFullscreenOnEnd: !0,
          loadInFullscreen: !1,
          blurredBackground: !0,
          showSlideCount: !1,
          shadowDOM: {
            enabled: !0,
            mode: "open",
            globalStyleElements:
              '#jetpack-block-story-css, link[href*="jetpack/_inc/blocks/story/view.css"]'
          },
          defaultAspectRatio: 0.5625,
          cropUpTo: 0.2,
          volume: 0.5
        };
      function Y(e) {
        var t = e.slides,
          n = e.metadata,
          r = e.disabled,
          o = s()(e, ["slides", "metadata", "disabled"]),
          a = Object(d.merge)({}, K, o),
          u = Object(m.useRef)(),
          f = Object(m.useState)(!1),
          b = l()(f, 2),
          v = b[0],
          y = b[1],
          O = Object(m.useState)(null),
          j = l()(O, 2),
          g = j[0],
          w = j[1];
        return (
          Object(m.useLayoutEffect)(
            function() {
              if (v)
                Z &&
                (document.fullscreenEnabled ||
                  document.webkitFullscreenEnabled ||
                  document.mozFullScreenEnabled ||
                  document.msFullscreenEnabled) &&
                !a.loadInFullscreen
                  ? (
                      (t = u.current).requestFullscreen ||
                      t.webkitRequestFullScreen ||
                      t.mozRequestFullScreen ||
                      t.msRequestFullscreen
                    ).call(t)
                  : (w([
                      document.documentElement.scrollLeft,
                      document.documentElement.scrollTop
                    ]),
                    document.body.classList.add("wp-story-in-fullscreen"),
                    document
                      .getElementsByTagName("html")[0]
                      .classList.add("wp-story-in-fullscreen"));
              else if (
                document.fullscreenElement ||
                document.webkitFullscreenElement ||
                document.mozFullScreenElement ||
                document.msFullScreenElement
              )
                (
                  document.exitFullscreen ||
                  document.webkitExitFullscreen ||
                  document.mozCancelFullScreen ||
                  document.msExitFullscreen
                ).call(document);
              else {
                var e;
                if (
                  (document.body.classList.remove("wp-story-in-fullscreen"), g)
                )
                  (e = window).scrollTo.apply(e, i()(g));
                document
                  .getElementsByTagName("html")[0]
                  .classList.remove("wp-story-in-fullscreen");
              }
              var t;
            },
            [v]
          ),
          Object(m.createElement)(
            G,
            a.shadowDOM,
            Object(m.createElement)(
              "div",
              {
                className: p()(["wp-story-app", { "wp-story-fullscreen": v }]),
                ref: u
              },
              Object(m.createElement)(
                D,
                c()(
                  {
                    fullscreen: v,
                    setFullscreen: y,
                    slides: t,
                    metadata: n,
                    disabled: r
                  },
                  a
                )
              )
            )
          )
        );
      }
    },
    351: function(e, t, n) {},
    352: function(e, t, n) {},
    4: function(e, t) {
      !(function() {
        e.exports = this.lodash;
      })();
    },
    426: function(e, t, n) {
      n(49), (e.exports = n(427));
    },
    427: function(e, t, n) {
      "use strict";
      n.r(t);
      var r = n(9),
        c = n.n(r),
        o = n(20),
        i = n.n(o),
        a = n(22),
        l = n.n(a),
        u = n(0),
        s = n(50),
        d = n.n(s),
        f = n(347);
      function p(e, t) {
        "string" == typeof e && (e = document.querySelectorAll(e));
        var n = e.querySelector(".wp-story-wrapper"),
          r = e.querySelector(".wp-story-meta"),
          c = [];
        n &&
          n.children.length > 0 &&
          (c = (function(e) {
            return i()(e.querySelectorAll("li > figure > :first-child")).map(
              function(e) {
                return {
                  alt: e.getAttribute("alt") || e.getAttribute("title"),
                  mime: e.getAttribute("data-mime") || e.getAttribute("type"),
                  url: e.getAttribute("src"),
                  id: e.getAttribute("data-id"),
                  type: "img" === e.tagName.toLowerCase() ? "image" : "video",
                  srcset: e.getAttribute("srcset"),
                  sizes: e.getAttribute("sizes")
                };
              }
            );
          })(n));
        var o = {};
        r &&
          r.children.length > 0 &&
          (o = (function(e) {
            var t = e.querySelector("div:first-child > img"),
              n = e.querySelector(".wp-story-title"),
              r = t && t.src;
            return { storyTitle: n && n.innerText, siteIconUrl: r };
          })(r)),
          Object(u.render)(
            Object(u.createElement)(
              f.a,
              l()({ slides: c, metadata: o, disabled: !1 }, t)
            ),
            e
          );
      }
      if ("undefined" != typeof window) {
        var m = Array.from(
          new URLSearchParams(window.location.search).entries()
        )
          .filter(function(e) {
            return e[0].startsWith("wp-story-");
          })
          .reduce(function(e, t) {
            var n = t[0]
              .replace(/^wp-story-/, "")
              .replace(/-([a-z])/g, function(e) {
                return e[1].toUpperCase();
              });
            try {
              e[n] = JSON.parse(t[1]);
            } catch (r) {
              e[n] = JSON.parse('"'.concat(t[1], '"'));
            }
            return e;
          }, {});
        d()(function() {
          var e = i()(document.getElementsByClassName("wp-story"));
          e.forEach(function(t) {
            if ("true" !== t.getAttribute("data-block-initialized")) {
              var n = null;
              1 === e.length && (n = c()({}, m));
              var r = t.getAttribute("data-settings");
              if (r)
                try {
                  n = c()({}, n, {}, JSON.parse(r));
                } catch (o) {}
              p(t, n);
            }
          });
        });
      }
    },
    45: function(e, t, n) {
      "object" == typeof window &&
        window.Jetpack_Block_Assets_Base_Url &&
        (n.p = window.Jetpack_Block_Assets_Base_Url);
    },
    47: function(e, t, n) {
      var r = n(161);
      e.exports = function(e, t) {
        if (null == e) return {};
        var n,
          c,
          o = r(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (c = 0; c < i.length; c++)
            (n = i[c]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (o[n] = e[n]));
        }
        return o;
      };
    },
    49: function(e, t, n) {
      "use strict";
      n.r(t);
      n(45);
    },
    50: function(e, t) {
      !(function() {
        e.exports = this.wp.domReady;
      })();
    },
    7: function(e, t, n) {
      var r = n(87),
        c = n(88),
        o = n(73),
        i = n(89);
      e.exports = function(e, t) {
        return r(e) || c(e, t) || o(e, t) || i();
      };
    },
    71: function(e, t) {
      e.exports = function(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      };
    },
    73: function(e, t, n) {
      var r = n(71);
      e.exports = function(e, t) {
        if (e) {
          if ("string" == typeof e) return r(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return (
            "Object" === n && e.constructor && (n = e.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(n)
              : "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? r(e, t)
              : void 0
          );
        }
      };
    },
    8: function(e, t, n) {
      var r;
      /*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/ !(function() {
        "use strict";
        var n = {}.hasOwnProperty;
        function c() {
          for (var e = [], t = 0; t < arguments.length; t++) {
            var r = arguments[t];
            if (r) {
              var o = typeof r;
              if ("string" === o || "number" === o) e.push(r);
              else if (Array.isArray(r) && r.length) {
                var i = c.apply(null, r);
                i && e.push(i);
              } else if ("object" === o)
                for (var a in r) n.call(r, a) && r[a] && e.push(a);
            }
          }
          return e.join(" ");
        }
        e.exports
          ? ((c.default = c), (e.exports = c))
          : void 0 ===
              (r = function() {
                return c;
              }.apply(t, [])) || (e.exports = r);
      })();
    },
    87: function(e, t) {
      e.exports = function(e) {
        if (Array.isArray(e)) return e;
      };
    },
    88: function(e, t) {
      e.exports = function(e, t) {
        if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
          var n = [],
            r = !0,
            c = !1,
            o = void 0;
          try {
            for (
              var i, a = e[Symbol.iterator]();
              !(r = (i = a.next()).done) &&
              (n.push(i.value), !t || n.length !== t);
              r = !0
            );
          } catch (l) {
            (c = !0), (o = l);
          } finally {
            try {
              r || null == a.return || a.return();
            } finally {
              if (c) throw o;
            }
          }
          return n;
        }
      };
    },
    89: function(e, t) {
      e.exports = function() {
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      };
    },
    9: function(e, t, n) {
      var r = n(3);
      function c(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function(t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      e.exports = function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? c(Object(n), !0).forEach(function(t) {
                r(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : c(Object(n)).forEach(function(t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      };
    }
  })
);
