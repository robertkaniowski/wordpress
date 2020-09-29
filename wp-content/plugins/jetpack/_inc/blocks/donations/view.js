!(function(t, e) {
  for (var n in e) t[n] = e[n];
})(
  window,
  (function(t) {
    var e = {};
    function n(r) {
      if (e[r]) return e[r].exports;
      var i = (e[r] = { i: r, l: !1, exports: {} });
      return t[r].call(i.exports, i, i.exports, n), (i.l = !0), i.exports;
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
          for (var i in t)
            n.d(
              r,
              i,
              function(e) {
                return t[e];
              }.bind(null, i)
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
      n((n.s = 377))
    );
  })({
    10: function(t, e) {
      t.exports = function(t, e) {
        if (!(t instanceof e))
          throw new TypeError("Cannot call a class as a function");
      };
    },
    100: function(t, e, n) {
      var r = n(66),
        i = n(96);
      function o(t) {
        if (!(this instanceof o)) return new o(t);
        "number" == typeof t && (t = { max: t }),
          t || (t = {}),
          r.EventEmitter.call(this),
          (this.cache = {}),
          (this.head = this.tail = null),
          (this.length = 0),
          (this.max = t.max || 1e3),
          (this.maxAge = t.maxAge || 0);
      }
      (t.exports = o),
        i(o, r.EventEmitter),
        Object.defineProperty(o.prototype, "keys", {
          get: function() {
            return Object.keys(this.cache);
          }
        }),
        (o.prototype.clear = function() {
          (this.cache = {}), (this.head = this.tail = null), (this.length = 0);
        }),
        (o.prototype.remove = function(t) {
          if (
            ("string" != typeof t && (t = "" + t), this.cache.hasOwnProperty(t))
          ) {
            var e = this.cache[t];
            return (
              delete this.cache[t], this._unlink(t, e.prev, e.next), e.value
            );
          }
        }),
        (o.prototype._unlink = function(t, e, n) {
          this.length--,
            0 === this.length
              ? (this.head = this.tail = null)
              : this.head === t
              ? ((this.head = e), (this.cache[this.head].next = null))
              : this.tail === t
              ? ((this.tail = n), (this.cache[this.tail].prev = null))
              : ((this.cache[e].next = n), (this.cache[n].prev = e));
        }),
        (o.prototype.peek = function(t) {
          if (this.cache.hasOwnProperty(t)) {
            var e = this.cache[t];
            if (this._checkAge(t, e)) return e.value;
          }
        }),
        (o.prototype.set = function(t, e) {
          var n;
          if (
            ("string" != typeof t && (t = "" + t), this.cache.hasOwnProperty(t))
          ) {
            if (
              (((n = this.cache[t]).value = e),
              this.maxAge && (n.modified = Date.now()),
              t === this.head)
            )
              return e;
            this._unlink(t, n.prev, n.next);
          } else
            (n = { value: e, modified: 0, next: null, prev: null }),
              this.maxAge && (n.modified = Date.now()),
              (this.cache[t] = n),
              this.length === this.max && this.evict();
          return (
            this.length++,
            (n.next = null),
            (n.prev = this.head),
            this.head && (this.cache[this.head].next = t),
            (this.head = t),
            this.tail || (this.tail = t),
            e
          );
        }),
        (o.prototype._checkAge = function(t, e) {
          return (
            !(this.maxAge && Date.now() - e.modified > this.maxAge) ||
            (this.remove(t), this.emit("evict", { key: t, value: e.value }), !1)
          );
        }),
        (o.prototype.get = function(t) {
          if (
            ("string" != typeof t && (t = "" + t), this.cache.hasOwnProperty(t))
          ) {
            var e = this.cache[t];
            if (this._checkAge(t, e))
              return (
                this.head !== t &&
                  (t === this.tail
                    ? ((this.tail = e.next),
                      (this.cache[this.tail].prev = null))
                    : (this.cache[e.prev].next = e.next),
                  (this.cache[e.next].prev = e.prev),
                  (this.cache[this.head].next = t),
                  (e.prev = this.head),
                  (e.next = null),
                  (this.head = t)),
                e.value
              );
          }
        }),
        (o.prototype.evict = function() {
          if (this.tail) {
            var t = this.tail,
              e = this.remove(this.tail);
            this.emit("evict", { key: t, value: e });
          }
        });
    },
    101: function(t, e, n) {
      "use strict";
      var r = n(80),
        i = n(168),
        o = n(169),
        s = r.rotl32,
        a = r.sum32,
        c = r.sum32_5,
        l = o.ft_1,
        u = i.BlockHash,
        p = [1518500249, 1859775393, 2400959708, 3395469782];
      function h() {
        if (!(this instanceof h)) return new h();
        u.call(this),
          (this.h = [
            1732584193,
            4023233417,
            2562383102,
            271733878,
            3285377520
          ]),
          (this.W = new Array(80));
      }
      r.inherits(h, u),
        (t.exports = h),
        (h.blockSize = 512),
        (h.outSize = 160),
        (h.hmacStrength = 80),
        (h.padLength = 64),
        (h.prototype._update = function(t, e) {
          for (var n = this.W, r = 0; r < 16; r++) n[r] = t[e + r];
          for (; r < n.length; r++)
            n[r] = s(n[r - 3] ^ n[r - 8] ^ n[r - 14] ^ n[r - 16], 1);
          var i = this.h[0],
            o = this.h[1],
            u = this.h[2],
            h = this.h[3],
            f = this.h[4];
          for (r = 0; r < n.length; r++) {
            var m = ~~(r / 20),
              g = c(s(i, 5), l(m, o, u, h), f, n[r], p[m]);
            (f = h), (h = u), (u = s(o, 30)), (o = i), (i = g);
          }
          (this.h[0] = a(this.h[0], i)),
            (this.h[1] = a(this.h[1], o)),
            (this.h[2] = a(this.h[2], u)),
            (this.h[3] = a(this.h[3], h)),
            (this.h[4] = a(this.h[4], f));
        }),
        (h.prototype._digest = function(t) {
          return "hex" === t
            ? r.toHex32(this.h, "big")
            : r.split32(this.h, "big");
        });
    },
    11: function(t, e, n) {
      var r = n(118),
        i = n(6);
      t.exports = function(t, e) {
        return !e || ("object" !== r(e) && "function" != typeof e) ? i(t) : e;
      };
    },
    118: function(t, e) {
      function n(e) {
        return (
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? (t.exports = n = function(t) {
                return typeof t;
              })
            : (t.exports = n = function(t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              }),
          n(e)
        );
      }
      t.exports = n;
    },
    119: function(t, e) {
      function n(e, r) {
        return (
          (t.exports = n =
            Object.setPrototypeOf ||
            function(t, e) {
              return (t.__proto__ = e), t;
            }),
          n(e, r)
        );
      }
      t.exports = n;
    },
    12: function(t, e) {
      function n(e) {
        return (
          (t.exports = n = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function(t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          n(e)
        );
      }
      t.exports = n;
    },
    13: function(t, e, n) {
      var r = n(119);
      t.exports = function(t, e) {
        if ("function" != typeof e && null !== e)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (t.prototype = Object.create(e && e.prototype, {
          constructor: { value: t, writable: !0, configurable: !0 }
        })),
          e && r(t, e);
      };
    },
    14: function(t, e) {
      function n(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      t.exports = function(t, e, r) {
        return e && n(t.prototype, e), r && n(t, r), t;
      };
    },
    163: function(t, e, n) {
      "use strict";
      t.exports = function(t) {
        function e(t) {
          for (var e = 0, n = 0; n < t.length; n++)
            (e = (e << 5) - e + t.charCodeAt(n)), (e |= 0);
          return r.colors[Math.abs(e) % r.colors.length];
        }
        function r(t) {
          var n;
          function s() {
            if (s.enabled) {
              for (
                var t = arguments.length, e = new Array(t), i = 0;
                i < t;
                i++
              )
                e[i] = arguments[i];
              var o = s,
                a = Number(new Date()),
                c = a - (n || a);
              (o.diff = c),
                (o.prev = n),
                (o.curr = a),
                (n = a),
                (e[0] = r.coerce(e[0])),
                "string" != typeof e[0] && e.unshift("%O");
              var l = 0;
              (e[0] = e[0].replace(/%([a-zA-Z%])/g, function(t, n) {
                if ("%%" === t) return t;
                l++;
                var i = r.formatters[n];
                if ("function" == typeof i) {
                  var s = e[l];
                  (t = i.call(o, s)), e.splice(l, 1), l--;
                }
                return t;
              })),
                r.formatArgs.call(o, e);
              var u = o.log || r.log;
              u.apply(o, e);
            }
          }
          return (
            (s.namespace = t),
            (s.enabled = r.enabled(t)),
            (s.useColors = r.useColors()),
            (s.color = e(t)),
            (s.destroy = i),
            (s.extend = o),
            "function" == typeof r.init && r.init(s),
            r.instances.push(s),
            s
          );
        }
        function i() {
          var t = r.instances.indexOf(this);
          return -1 !== t && (r.instances.splice(t, 1), !0);
        }
        function o(t, e) {
          return r(this.namespace + (void 0 === e ? ":" : e) + t);
        }
        return (
          (r.debug = r),
          (r.default = r),
          (r.coerce = function(t) {
            if (t instanceof Error) return t.stack || t.message;
            return t;
          }),
          (r.disable = function() {
            r.enable("");
          }),
          (r.enable = function(t) {
            var e;
            r.save(t), (r.names = []), (r.skips = []);
            var n = ("string" == typeof t ? t : "").split(/[\s,]+/),
              i = n.length;
            for (e = 0; e < i; e++)
              n[e] &&
                ("-" === (t = n[e].replace(/\*/g, ".*?"))[0]
                  ? r.skips.push(new RegExp("^" + t.substr(1) + "$"))
                  : r.names.push(new RegExp("^" + t + "$")));
            for (e = 0; e < r.instances.length; e++) {
              var o = r.instances[e];
              o.enabled = r.enabled(o.namespace);
            }
          }),
          (r.enabled = function(t) {
            if ("*" === t[t.length - 1]) return !0;
            var e, n;
            for (e = 0, n = r.skips.length; e < n; e++)
              if (r.skips[e].test(t)) return !1;
            for (e = 0, n = r.names.length; e < n; e++)
              if (r.names[e].test(t)) return !0;
            return !1;
          }),
          (r.humanize = n(79)),
          Object.keys(t).forEach(function(e) {
            r[e] = t[e];
          }),
          (r.instances = []),
          (r.names = []),
          (r.skips = []),
          (r.formatters = {}),
          (r.selectColor = e),
          r.enable(r.load()),
          r
        );
      };
    },
    164: function(t, e, n) {
      "use strict";
      var r = n(25),
        i =
          ("function" == typeof Symbol &&
            Symbol.for &&
            Symbol.for("react.element")) ||
          60103,
        o = n(95),
        s = n(165),
        a = n(166),
        c = "function" == typeof Symbol && Symbol.iterator;
      function l(t, e) {
        return t && "object" == typeof t && null != t.key
          ? ((n = t.key),
            (r = { "=": "=0", ":": "=2" }),
            "$" +
              ("" + n).replace(/[=:]/g, function(t) {
                return r[t];
              }))
          : e.toString(36);
        var n, r;
      }
      function u(t, e, n, r) {
        var o,
          a = typeof t;
        if (
          (("undefined" !== a && "boolean" !== a) || (t = null),
          null === t ||
            "string" === a ||
            "number" === a ||
            ("object" === a && t.$$typeof === i))
        )
          return n(r, t, "" === e ? "." + l(t, 0) : e), 1;
        var p = 0,
          h = "" === e ? "." : e + ":";
        if (Array.isArray(t))
          for (var f = 0; f < t.length; f++)
            p += u((o = t[f]), h + l(o, f), n, r);
        else {
          var m = (function(t) {
            var e = t && ((c && t[c]) || t["@@iterator"]);
            if ("function" == typeof e) return e;
          })(t);
          if (m) {
            0;
            for (var g, d = m.call(t), y = 0; !(g = d.next()).done; )
              p += u((o = g.value), h + l(o, y++), n, r);
          } else if ("object" === a) {
            0;
            var b = "" + t;
            s(
              !1,
              "Objects are not valid as a React child (found: %s).%s",
              "[object Object]" === b
                ? "object with keys {" + Object.keys(t).join(", ") + "}"
                : b,
              ""
            );
          }
        }
        return p;
      }
      var p = /\/+/g;
      function h(t) {
        return ("" + t).replace(p, "$&/");
      }
      var f,
        m,
        g = d,
        d = function(t) {
          if (this.instancePool.length) {
            var e = this.instancePool.pop();
            return this.call(e, t), e;
          }
          return new this(t);
        },
        y = function(t) {
          s(
            t instanceof this,
            "Trying to release an instance into a pool of a different type."
          ),
            t.destructor(),
            this.instancePool.length < this.poolSize &&
              this.instancePool.push(t);
        };
      function b(t, e, n, r) {
        (this.result = t),
          (this.keyPrefix = e),
          (this.func = n),
          (this.context = r),
          (this.count = 0);
      }
      function v(t, e, n) {
        var i,
          s,
          a = t.result,
          c = t.keyPrefix,
          l = t.func,
          u = t.context,
          p = l.call(u, e, t.count++);
        Array.isArray(p)
          ? _(p, a, n, o.thatReturnsArgument)
          : null != p &&
            (r.isValidElement(p) &&
              ((i = p),
              (s =
                c +
                (!p.key || (e && e.key === p.key) ? "" : h(p.key) + "/") +
                n),
              (p = r.cloneElement(
                i,
                { key: s },
                void 0 !== i.props ? i.props.children : void 0
              ))),
            a.push(p));
      }
      function _(t, e, n, r, i) {
        var o = "";
        null != n && (o = h(n) + "/");
        var s = b.getPooled(e, o, r, i);
        !(function(t, e, n) {
          null == t || u(t, "", e, n);
        })(t, v, s),
          b.release(s);
      }
      (b.prototype.destructor = function() {
        (this.result = null),
          (this.keyPrefix = null),
          (this.func = null),
          (this.context = null),
          (this.count = 0);
      }),
        (f = function(t, e, n, r) {
          if (this.instancePool.length) {
            var i = this.instancePool.pop();
            return this.call(i, t, e, n, r), i;
          }
          return new this(t, e, n, r);
        }),
        ((m = b).instancePool = []),
        (m.getPooled = f || g),
        m.poolSize || (m.poolSize = 10),
        (m.release = y);
      t.exports = function(t) {
        if ("object" != typeof t || !t || Array.isArray(t))
          return (
            a(
              !1,
              "React.addons.createFragment only accepts a single object. Got: %s",
              t
            ),
            t
          );
        if (r.isValidElement(t))
          return (
            a(
              !1,
              "React.addons.createFragment does not accept a ReactElement without a wrapper object."
            ),
            t
          );
        s(
          1 !== t.nodeType,
          "React.addons.createFragment(...): Encountered an invalid child; DOM elements are not valid children of React components."
        );
        var e = [];
        for (var n in t) _(t[n], e, n, o.thatReturnsArgument);
        return e;
      };
    },
    165: function(t, e, n) {
      "use strict";
      t.exports = function(t, e, n, r, i, o, s, a) {
        if (!t) {
          var c;
          if (void 0 === e)
            c = new Error(
              "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings."
            );
          else {
            var l = [n, r, i, o, s, a],
              u = 0;
            (c = new Error(
              e.replace(/%s/g, function() {
                return l[u++];
              })
            )).name = "Invariant Violation";
          }
          throw ((c.framesToPop = 1), c);
        }
      };
    },
    166: function(t, e, n) {
      "use strict";
      var r = n(95);
      t.exports = r;
    },
    167: function(t, e, n) {
      "use strict";
      function r(t) {
        return t.match(/^\{\{\//)
          ? { type: "componentClose", value: t.replace(/\W/g, "") }
          : t.match(/\/\}\}$/)
          ? { type: "componentSelfClosing", value: t.replace(/\W/g, "") }
          : t.match(/^\{\{/)
          ? { type: "componentOpen", value: t.replace(/\W/g, "") }
          : { type: "string", value: t };
      }
      t.exports = function(t) {
        return t.split(/(\{\{\/?\s*\w+\s*\/?\}\})/g).map(r);
      };
    },
    168: function(t, e, n) {
      "use strict";
      var r = n(80),
        i = n(97);
      function o() {
        (this.pending = null),
          (this.pendingTotal = 0),
          (this.blockSize = this.constructor.blockSize),
          (this.outSize = this.constructor.outSize),
          (this.hmacStrength = this.constructor.hmacStrength),
          (this.padLength = this.constructor.padLength / 8),
          (this.endian = "big"),
          (this._delta8 = this.blockSize / 8),
          (this._delta32 = this.blockSize / 32);
      }
      (e.BlockHash = o),
        (o.prototype.update = function(t, e) {
          if (
            ((t = r.toArray(t, e)),
            this.pending
              ? (this.pending = this.pending.concat(t))
              : (this.pending = t),
            (this.pendingTotal += t.length),
            this.pending.length >= this._delta8)
          ) {
            var n = (t = this.pending).length % this._delta8;
            (this.pending = t.slice(t.length - n, t.length)),
              0 === this.pending.length && (this.pending = null),
              (t = r.join32(t, 0, t.length - n, this.endian));
            for (var i = 0; i < t.length; i += this._delta32)
              this._update(t, i, i + this._delta32);
          }
          return this;
        }),
        (o.prototype.digest = function(t) {
          return (
            this.update(this._pad()), i(null === this.pending), this._digest(t)
          );
        }),
        (o.prototype._pad = function() {
          var t = this.pendingTotal,
            e = this._delta8,
            n = e - ((t + this.padLength) % e),
            r = new Array(n + this.padLength);
          r[0] = 128;
          for (var i = 1; i < n; i++) r[i] = 0;
          if (((t <<= 3), "big" === this.endian)) {
            for (var o = 8; o < this.padLength; o++) r[i++] = 0;
            (r[i++] = 0),
              (r[i++] = 0),
              (r[i++] = 0),
              (r[i++] = 0),
              (r[i++] = (t >>> 24) & 255),
              (r[i++] = (t >>> 16) & 255),
              (r[i++] = (t >>> 8) & 255),
              (r[i++] = 255 & t);
          } else
            for (
              r[i++] = 255 & t,
                r[i++] = (t >>> 8) & 255,
                r[i++] = (t >>> 16) & 255,
                r[i++] = (t >>> 24) & 255,
                r[i++] = 0,
                r[i++] = 0,
                r[i++] = 0,
                r[i++] = 0,
                o = 8;
              o < this.padLength;
              o++
            )
              r[i++] = 0;
          return r;
        });
    },
    169: function(t, e, n) {
      "use strict";
      var r = n(80).rotr32;
      function i(t, e, n) {
        return (t & e) ^ (~t & n);
      }
      function o(t, e, n) {
        return (t & e) ^ (t & n) ^ (e & n);
      }
      function s(t, e, n) {
        return t ^ e ^ n;
      }
      (e.ft_1 = function(t, e, n, r) {
        return 0 === t
          ? i(e, n, r)
          : 1 === t || 3 === t
          ? s(e, n, r)
          : 2 === t
          ? o(e, n, r)
          : void 0;
      }),
        (e.ch32 = i),
        (e.maj32 = o),
        (e.p32 = s),
        (e.s0_256 = function(t) {
          return r(t, 2) ^ r(t, 13) ^ r(t, 22);
        }),
        (e.s1_256 = function(t) {
          return r(t, 6) ^ r(t, 11) ^ r(t, 25);
        }),
        (e.g0_256 = function(t) {
          return r(t, 7) ^ r(t, 18) ^ (t >>> 3);
        }),
        (e.g1_256 = function(t) {
          return r(t, 17) ^ r(t, 19) ^ (t >>> 10);
        });
    },
    21: function(t, e) {
      !(function() {
        t.exports = this.wp.keycodes;
      })();
    },
    25: function(t, e) {
      !(function() {
        t.exports = this.React;
      })();
    },
    27: function(t, e) {
      !(function() {
        t.exports = this.wp.url;
      })();
    },
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
    33: function(t, e, n) {
      "use strict";
      n.d(e, "a", function() {
        return tt;
      });
      var r = n(85),
        i = n.n(r),
        o = n(98),
        s = n.n(o),
        a = n(99),
        c = n.n(a),
        l = n(75),
        u = n.n(l),
        p = n(100),
        h = n.n(p),
        f = n(42),
        m = n.n(f),
        g = n(101),
        d = n.n(g),
        y = n(66);
      function b(t, e, n, r) {
        t = (t + "").replace(/[^0-9+\-Ee.]/g, "");
        var i = isFinite(+t) ? +t : 0,
          o = isFinite(+e) ? Math.abs(e) : 0,
          s = void 0 === r ? "," : r,
          a = void 0 === n ? "." : n,
          c = "";
        return (
          (c = (o
            ? /*
               * Exposes number format capability
               *
               * @copyright Copyright (c) 2013 Kevin van Zonneveld (http://kvz.io) and Contributors (http://phpjs.org/authors).
               * @license See CREDITS.md
               * @see https://github.com/kvz/phpjs/blob/ffe1356af23a6f2512c84c954dd4e828e92579fa/functions/strings/number_format.js
               */
              (function(t, e) {
                var n = Math.pow(10, e);
                return "" + (Math.round(t * n) / n).toFixed(e);
              })(i, o)
            : "" + Math.round(i)
          ).split("."))[0].length > 3 &&
            (c[0] = c[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, s)),
          (c[1] || "").length < o &&
            ((c[1] = c[1] || ""),
            (c[1] += new Array(o - c[1].length + 1).join("0"))),
          c.join(a)
        );
      }
      var v = s()("i18n-calypso"),
        _ = [
          function(t) {
            return t;
          }
        ],
        w = {};
      function x() {
        E.throwErrors &&
          "undefined" != typeof window &&
          window.console &&
          window.console.warn &&
          window.console.warn.apply(window.console, arguments);
      }
      function C(t) {
        return Array.prototype.slice.call(t);
      }
      function S(t) {
        var e = t[0];
        ("string" != typeof e ||
          t.length > 3 ||
          (t.length > 2 &&
            "object" == typeof t[1] &&
            "object" == typeof t[2])) &&
          x(
            "Deprecated Invocation: `translate()` accepts ( string, [string], [object] ). These arguments passed:",
            C(t),
            ". See https://github.com/Automattic/i18n-calypso#translate-method"
          ),
          2 === t.length &&
            "string" == typeof e &&
            "string" == typeof t[1] &&
            x(
              "Invalid Invocation: `translate()` requires an options object for plural translations, but passed:",
              C(t)
            );
        for (var n = {}, r = 0; r < t.length; r++)
          "object" == typeof t[r] && (n = t[r]);
        if (
          ("string" == typeof e
            ? (n.original = e)
            : "object" == typeof n.original &&
              ((n.plural = n.original.plural),
              (n.count = n.original.count),
              (n.original = n.original.single)),
          "string" == typeof t[1] && (n.plural = t[1]),
          void 0 === n.original)
        )
          throw new Error(
            "Translate called without a `string` value as first argument."
          );
        return n;
      }
      function F(t, e) {
        var n = "gettext";
        e.context && (n = "p" + n),
          "string" == typeof e.original &&
            "string" == typeof e.plural &&
            (n = "n" + n);
        var r = (function(t, e) {
          switch (t) {
            case "gettext":
              return [e.original];
            case "ngettext":
              return [e.original, e.plural, e.count];
            case "npgettext":
              return [e.context, e.original, e.plural, e.count];
            case "pgettext":
              return [e.context, e.original];
          }
          return [];
        })(n, e);
        return t[n].apply(t, r);
      }
      function k(t, e) {
        for (var n = _.length - 1; n >= 0; n--) {
          var r = _[n](Object.assign({}, e));
          if (t.state.locale[r.original]) return F(t.state.jed, r);
        }
        return null;
      }
      function E() {
        if (!(this instanceof E)) return new E();
        (this.defaultLocaleSlug = "en"),
          (this.state = {
            numberFormatSettings: {},
            jed: void 0,
            locale: void 0,
            localeSlug: void 0,
            translations: h()({ max: 100 })
          }),
          (this.componentUpdateHooks = []),
          (this.translateHooks = []),
          (this.stateObserver = new y.EventEmitter()),
          this.stateObserver.setMaxListeners(0),
          this.configure();
      }
      (E.throwErrors = !1),
        (E.prototype.moment = m.a),
        (E.prototype.on = function() {
          var t;
          (t = this.stateObserver).on.apply(t, arguments);
        }),
        (E.prototype.off = function() {
          var t;
          (t = this.stateObserver).off.apply(t, arguments);
        }),
        (E.prototype.emit = function() {
          var t;
          (t = this.stateObserver).emit.apply(t, arguments);
        }),
        (E.prototype.numberFormat = function(t) {
          var e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            n = "number" == typeof e ? e : e.decimals || 0,
            r =
              e.decPoint ||
              this.state.numberFormatSettings.decimal_point ||
              ".",
            i =
              e.thousandsSep ||
              this.state.numberFormatSettings.thousands_sep ||
              ",";
          return b(t, n, r, i);
        }),
        (E.prototype.configure = function(t) {
          Object.assign(this, t || {}), this.setLocale();
        }),
        (E.prototype.setLocale = function(t) {
          if (t && t[""] && t[""]["key-hash"]) {
            var e = t[""]["key-hash"],
              n = function(t, e) {
                var n = !1 === e ? "" : String(e);
                if (void 0 !== w[n + t]) return w[n + t];
                var r = d()()
                  .update(t)
                  .digest("hex");
                return (w[n + t] = e ? r.substr(0, e) : r);
              },
              r = function(t) {
                return function(e) {
                  return (
                    e.context
                      ? ((e.original = n(
                          e.context + String.fromCharCode(4) + e.original,
                          t
                        )),
                        delete e.context)
                      : (e.original = n(e.original, t)),
                    e
                  );
                };
              };
            if ("sha1" === e.substr(0, 4))
              if (4 === e.length) _.push(r(!1));
              else {
                var i = e.substr(5).indexOf("-");
                if (i < 0) {
                  var o = Number(e.substr(5));
                  _.push(r(o));
                } else
                  for (
                    var s = Number(e.substr(5, i)),
                      a = Number(e.substr(6 + i)),
                      c = s;
                    c <= a;
                    c++
                  )
                    _.push(r(c));
              }
          }
          if (t && t[""].localeSlug)
            if (t[""].localeSlug === this.state.localeSlug) {
              if (t === this.state.locale) return;
              Object.assign(this.state.locale, t);
            } else this.state.locale = Object.assign({}, t);
          else
            this.state.locale = { "": { localeSlug: this.defaultLocaleSlug } };
          (this.state.localeSlug = this.state.locale[""].localeSlug),
            (this.state.jed = new u.a({
              locale_data: { messages: this.state.locale }
            })),
            m.a.locale(this.state.localeSlug),
            (this.state.numberFormatSettings.decimal_point = F(
              this.state.jed,
              S(["number_format_decimals"])
            )),
            (this.state.numberFormatSettings.thousands_sep = F(
              this.state.jed,
              S(["number_format_thousands_sep"])
            )),
            "number_format_decimals" ===
              this.state.numberFormatSettings.decimal_point &&
              (this.state.numberFormatSettings.decimal_point = "."),
            "number_format_thousands_sep" ===
              this.state.numberFormatSettings.thousands_sep &&
              (this.state.numberFormatSettings.thousands_sep = ","),
            this.state.translations.clear(),
            this.stateObserver.emit("change");
        }),
        (E.prototype.getLocale = function() {
          return this.state.locale;
        }),
        (E.prototype.getLocaleSlug = function() {
          return this.state.localeSlug;
        }),
        (E.prototype.addTranslations = function(t) {
          for (var e in t)
            "" !== e && (this.state.jed.options.locale_data.messages[e] = t[e]);
          this.state.translations.clear(), this.stateObserver.emit("change");
        }),
        (E.prototype.hasTranslation = function() {
          return !!k(this, S(arguments));
        }),
        (E.prototype.translate = function() {
          var t,
            e = S(arguments),
            n = !e.components;
          if (n) {
            try {
              t = JSON.stringify(e);
            } catch (a) {
              n = !1;
            }
            if (t) {
              var r = this.state.translations.get(t);
              if (r) return r;
            }
          }
          var i = k(this, e);
          if ((i || (i = F(this.state.jed, e)), e.args)) {
            var o = Array.isArray(e.args) ? e.args.slice(0) : [e.args];
            o.unshift(i);
            try {
              i = u.a.sprintf.apply(u.a, o);
            } catch (l) {
              if (!window || !window.console) return;
              var s = this.throwErrors ? "error" : "warn";
              "string" != typeof l
                ? window.console[s](l)
                : window.console[s]("i18n sprintf error:", o);
            }
          }
          return (
            e.components &&
              (i = c()({
                mixedString: i,
                components: e.components,
                throwErrors: this.throwErrors
              })),
            this.translateHooks.forEach(function(t) {
              i = t(i, e);
            }),
            n && this.state.translations.set(t, i),
            i
          );
        }),
        (E.prototype.reRenderTranslations = function() {
          v("Re-rendering all translations due to external request"),
            this.state.translations.clear(),
            this.stateObserver.emit("change");
        }),
        (E.prototype.registerComponentUpdateHook = function(t) {
          this.componentUpdateHooks.push(t);
        }),
        (E.prototype.registerTranslateHook = function(t) {
          this.translateHooks.push(t);
        });
      var A,
        O,
        P = E,
        L = n(9),
        j = n.n(L),
        R = n(10),
        D = n.n(R),
        T = n(14),
        N = n.n(T),
        M = n(11),
        $ = n.n(M),
        B = n(12),
        I = n.n(B),
        U = n(6),
        K = n.n(U),
        G = n(13),
        H = n.n(G),
        z = n(3),
        W = n.n(z),
        q = n(25),
        J = n.n(q),
        Z = n(7),
        V = n.n(Z),
        Y = new P(),
        Q = (Y.moment, Y.numberFormat.bind(Y)),
        X = (Y.translate.bind(Y),
        Y.configure.bind(Y),
        Y.setLocale.bind(Y),
        Y.getLocale.bind(Y),
        Y.getLocaleSlug.bind(Y),
        Y.addTranslations.bind(Y),
        Y.reRenderTranslations.bind(Y),
        Y.registerComponentUpdateHook.bind(Y),
        Y.registerTranslateHook.bind(Y),
        Y.state,
        Y.stateObserver,
        Y.on.bind(Y),
        Y.off.bind(Y),
        Y.emit.bind(Y),
        (O = {
          moment: (A = Y).moment,
          numberFormat: A.numberFormat.bind(A),
          translate: A.translate.bind(A)
        }),
        (function(t) {
          function e() {
            var e = t.translate.bind(t);
            return (
              Object.defineProperty(e, "localeSlug", {
                get: t.getLocaleSlug.bind(t)
              }),
              e
            );
          }
        })(Y),
        n(51));
      function tt(t, e) {
        var n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          r = Object(X.b)(e);
        if (!r || isNaN(t)) return null;
        var o = i()({}, r, n),
          s = o.decimal,
          a = o.grouping,
          c = o.precision,
          l = o.symbol,
          u = t < 0 ? "-" : "",
          p = Q(Math.abs(t), { decimals: c, thousandsSep: a, decPoint: s });
        return ""
          .concat(u)
          .concat(l)
          .concat(p);
      }
    },
    346: function(t, e, n) {
      "use strict";
      function r(t) {
        if ("https://subscribe.wordpress.com" === t.origin && t.data) {
          var e = JSON.parse(t.data);
          e &&
            "close" === e.action &&
            (window.removeEventListener("message", r), tb_remove());
        }
      }
      n.d(e, "a", function() {
        return i;
      });
      var i = function(t) {
        Array.prototype.slice
          .call(document.querySelectorAll(t))
          .forEach(function(t) {
            if (
              "true" !==
              t.getAttribute("data-jetpack-memberships-button-initialized")
            ) {
              try {
                !(function(t) {
                  t.addEventListener("click", function(e) {
                    e.preventDefault();
                    var n = t.getAttribute("href");
                    window.scrollTo(0, 0),
                      tb_show(
                        null,
                        n + "&display=alternate&TB_iframe=true",
                        null
                      ),
                      window.addEventListener("message", r, !1),
                      document
                        .querySelector("#TB_window")
                        .classList.add("jetpack-memberships-modal"),
                      window.scrollTo(0, 0);
                  });
                })(t);
              } catch (e) {
                console.error("Problem setting up Thickbox", e);
              }
              t.setAttribute(
                "data-jetpack-memberships-button-initialized",
                "true"
              );
            }
          });
      };
    },
    37: function(t, e, n) {
      "use strict";
      n.d(e, "a", function() {
        return i;
      }),
        n.d(e, "b", function() {
          return o;
        }),
        n.d(e, "c", function() {
          return s;
        });
      var r = n(51),
        i = {
          USD: 0.5,
          AUD: 0.5,
          BRL: 0.5,
          CAD: 0.5,
          CHF: 0.5,
          DKK: 2.5,
          EUR: 0.5,
          GBP: 0.3,
          HKD: 4,
          INR: 0.5,
          JPY: 50,
          MXN: 10,
          NOK: 3,
          NZD: 0.5,
          PLN: 2,
          SEK: 3,
          SGD: 0.5
        };
      function o(t) {
        return i[t];
      }
      function s(t, e) {
        return t
          ? "number" == typeof t
            ? t
            : ((t = parseFloat(
                t
                  .replace(new RegExp("\\" + r.a[e].grouping, "g"), "")
                  .replace(new RegExp("\\" + r.a[e].decimal, "g"), ".")
              )),
              isNaN(t) ? null : t)
          : null;
      }
    },
    377: function(t, e, n) {
      n(49), (t.exports = n(378));
    },
    378: function(t, e, n) {
      "use strict";
      n.r(e);
      var r = n(9),
        i = n.n(r),
        o = n(10),
        s = n.n(o),
        a = n(14),
        c = n.n(a),
        l = n(33),
        u = n(50),
        p = n.n(u),
        h = n(21),
        f = n(27),
        m = n(37),
        g = n(346),
        d = (n(379),
        (function() {
          function t(e) {
            s()(this, t),
              (this.block = e),
              (this.amount = null),
              (this.isCustomAmount = !1),
              (this.interval = "one-time"),
              this.initNavigation(),
              this.handleCustomAmount(),
              this.handleChosenAmount(),
              this.block
                .querySelector(".donations__container")
                .classList.add("loaded");
          }
          return (
            c()(t, [
              {
                key: "getNavItem",
                value: function(t) {
                  return this.block.querySelector(
                    '.donations__nav-item[data-interval="'.concat(t, '"]')
                  );
                }
              },
              {
                key: "resetSelectedAmount",
                value: function() {
                  var t = this.block.querySelector(
                    ".donations__amount.is-selected"
                  );
                  t && t.classList.remove("is-selected");
                }
              },
              {
                key: "getDonateButton",
                value: function() {
                  return this.block.querySelector(
                    ".donations__donate-button.".concat(
                      {
                        "one-time": "donations__one-time-item",
                        "1 month": "donations__monthly-item",
                        "1 year": "donations__annual-item"
                      }[this.interval]
                    )
                  );
                }
              },
              {
                key: "toggleDonateButton",
                value: function(t) {
                  var e = this.getDonateButton();
                  t
                    ? e.classList.remove("is-disabled")
                    : e.classList.add("is-disabled");
                }
              },
              {
                key: "updateUrl",
                value: function() {
                  var t = this.getDonateButton(),
                    e = t.getAttribute("href");
                  this.amount
                    ? t.setAttribute(
                        "href",
                        Object(f.addQueryArgs)(
                          e,
                          i()(
                            { amount: this.amount },
                            this.isCustomAmount && { customAmount: !0 }
                          )
                        )
                      )
                    : t.setAttribute(
                        "href",
                        Object(f.removeQueryArgs)(e, "amount", "customAmount")
                      );
                }
              },
              {
                key: "updateAmountFromCustomAmountInput",
                value: function() {
                  var t = this.block.querySelector(
                      ".donations__custom-amount .donations__amount-value"
                    ),
                    e = this.block.querySelector(".donations__custom-amount"),
                    n = t.innerHTML;
                  if (!n)
                    return (
                      (this.amount = null), void this.toggleDonateButton(!1)
                    );
                  var r = t.dataset.currency,
                    i = Object(m.c)(n, r);
                  i && i >= Object(m.b)(r)
                    ? (e.classList.remove("has-error"),
                      (this.amount = i),
                      this.toggleDonateButton(!0))
                    : (e.classList.add("has-error"),
                      (this.amount = null),
                      this.toggleDonateButton(!1)),
                    this.updateUrl();
                }
              },
              {
                key: "initNavigation",
                value: function() {
                  var t = this,
                    e = this.block.querySelectorAll(".donations__nav-item"),
                    n = this.block.querySelector(".donations__tab"),
                    r = {
                      "one-time": "is-one-time",
                      "1 month": "is-monthly",
                      "1 year": "is-annual"
                    },
                    i = function(e) {
                      var i = t.interval,
                        o = e.target.dataset.interval;
                      t.interval = o;
                      var s = t.getNavItem(i);
                      s && s.classList.remove("is-active");
                      var a = t.getNavItem(o);
                      a && a.classList.add("is-active"),
                        n.classList.remove(r[i]),
                        n.classList.add(r[o]),
                        (t.amount = null),
                        (t.isCustomAmount = !1),
                        t.resetSelectedAmount(),
                        t.updateUrl(),
                        t.toggleDonateButton(!1);
                    };
                  e.forEach(function(t) {
                    t.addEventListener("click", i),
                      t.addEventListener("keydown", i);
                  });
                  var o = this.getNavItem(this.interval);
                  o && o.classList.add("is-active"),
                    n.classList.add(r[this.interval]);
                }
              },
              {
                key: "handleCustomAmount",
                value: function() {
                  var t = this,
                    e = this.block.querySelector(
                      ".donations__custom-amount .donations__amount-value"
                    );
                  if (e) {
                    var n = this.block.querySelector(
                      ".donations__custom-amount"
                    );
                    e.setAttribute("contenteditable", ""),
                      e.addEventListener("keydown", function(t) {
                        t.keyCode === h.ENTER && t.preventDefault();
                      }),
                      e.addEventListener("focus", function() {
                        t.resetSelectedAmount(),
                          n.classList.add("is-selected"),
                          t.isCustomAmount ||
                            ((t.isCustomAmount = !0),
                            t.updateAmountFromCustomAmountInput());
                      }),
                      e.addEventListener("blur", function() {
                        t.isCustomAmount &&
                          t.amount &&
                          (e.innerHTML = Object(l.a)(
                            t.amount,
                            e.dataset.currency,
                            { symbol: "" }
                          ));
                      }),
                      e.addEventListener("input", function() {
                        return t.updateAmountFromCustomAmountInput();
                      });
                  }
                }
              },
              {
                key: "handleChosenAmount",
                value: function() {
                  var t = this;
                  this.block
                    .querySelectorAll(
                      ".donations__amount:not( .donations__custom-amount )"
                    )
                    .forEach(function(e) {
                      e.addEventListener("click", function(e) {
                        t.resetSelectedAmount(),
                          e.target.classList.add("is-selected"),
                          (t.amount = e.target.dataset.amount),
                          (t.isCustomAmount = !1);
                        var n = t.block.querySelector(
                          ".donations__custom-amount"
                        );
                        n && n.classList.remove("has-error"),
                          t.updateUrl(),
                          t.getDonateButton().classList.remove("is-disabled");
                      });
                    }),
                    this.block
                      .querySelectorAll(".donations__donate-button")
                      .forEach(function(t) {
                        return t.classList.add("is-disabled");
                      });
                }
              }
            ]),
            t
          );
        })());
      p()(function() {
        document
          .querySelectorAll(".wp-block-jetpack-donations")
          .forEach(function(t) {
            return new d(t);
          }),
          Object(g.a)(".donations__donate-button");
      });
    },
    379: function(t, e, n) {},
    42: function(t, e) {
      !(function() {
        t.exports = this.moment;
      })();
    },
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
    51: function(t, e, n) {
      "use strict";
      n.d(e, "a", function() {
        return r;
      }),
        n.d(e, "b", function() {
          return i;
        });
      var r = {
        AED: { symbol: "د.إ.‏", grouping: ",", decimal: ".", precision: 2 },
        AFN: { symbol: "؋", grouping: ",", decimal: ".", precision: 2 },
        ALL: { symbol: "Lek", grouping: ".", decimal: ",", precision: 2 },
        AMD: { symbol: "֏", grouping: ",", decimal: ".", precision: 2 },
        ANG: { symbol: "ƒ", grouping: ",", decimal: ".", precision: 2 },
        AOA: { symbol: "Kz", grouping: ",", decimal: ".", precision: 2 },
        ARS: { symbol: "$", grouping: ".", decimal: ",", precision: 2 },
        AUD: { symbol: "A$", grouping: ",", decimal: ".", precision: 2 },
        AWG: { symbol: "ƒ", grouping: ",", decimal: ".", precision: 2 },
        AZN: { symbol: "₼", grouping: " ", decimal: ",", precision: 2 },
        BAM: { symbol: "КМ", grouping: ".", decimal: ",", precision: 2 },
        BBD: { symbol: "Bds$", grouping: ",", decimal: ".", precision: 2 },
        BDT: { symbol: "৳", grouping: ",", decimal: ".", precision: 0 },
        BGN: { symbol: "лв.", grouping: " ", decimal: ",", precision: 2 },
        BHD: { symbol: "د.ب.‏", grouping: ",", decimal: ".", precision: 3 },
        BIF: { symbol: "FBu", grouping: ",", decimal: ".", precision: 0 },
        BMD: { symbol: "$", grouping: ",", decimal: ".", precision: 2 },
        BND: { symbol: "$", grouping: ".", decimal: ",", precision: 0 },
        BOB: { symbol: "Bs", grouping: ".", decimal: ",", precision: 2 },
        BRL: { symbol: "R$", grouping: ".", decimal: ",", precision: 2 },
        BSD: { symbol: "$", grouping: ",", decimal: ".", precision: 2 },
        BTC: { symbol: "Ƀ", grouping: ",", decimal: ".", precision: 2 },
        BTN: { symbol: "Nu.", grouping: ",", decimal: ".", precision: 1 },
        BWP: { symbol: "P", grouping: ",", decimal: ".", precision: 2 },
        BYR: { symbol: "р.", grouping: " ", decimal: ",", precision: 2 },
        BZD: { symbol: "BZ$", grouping: ",", decimal: ".", precision: 2 },
        CAD: { symbol: "C$", grouping: ",", decimal: ".", precision: 2 },
        CDF: { symbol: "FC", grouping: ",", decimal: ".", precision: 2 },
        CHF: { symbol: "CHF", grouping: "'", decimal: ".", precision: 2 },
        CLP: { symbol: "$", grouping: ".", decimal: ",", precision: 2 },
        CNY: { symbol: "¥", grouping: ",", decimal: ".", precision: 2 },
        COP: { symbol: "$", grouping: ".", decimal: ",", precision: 2 },
        CRC: { symbol: "₡", grouping: ".", decimal: ",", precision: 2 },
        CUC: { symbol: "CUC", grouping: ",", decimal: ".", precision: 2 },
        CUP: { symbol: "$MN", grouping: ",", decimal: ".", precision: 2 },
        CVE: { symbol: "$", grouping: ",", decimal: ".", precision: 2 },
        CZK: { symbol: "Kč", grouping: " ", decimal: ",", precision: 2 },
        DJF: { symbol: "Fdj", grouping: ",", decimal: ".", precision: 0 },
        DKK: { symbol: "kr.", grouping: "", decimal: ",", precision: 2 },
        DOP: { symbol: "RD$", grouping: ",", decimal: ".", precision: 2 },
        DZD: { symbol: "د.ج.‏", grouping: ",", decimal: ".", precision: 2 },
        EGP: { symbol: "ج.م.‏", grouping: ",", decimal: ".", precision: 2 },
        ERN: { symbol: "Nfk", grouping: ",", decimal: ".", precision: 2 },
        ETB: { symbol: "ETB", grouping: ",", decimal: ".", precision: 2 },
        EUR: { symbol: "€", grouping: ".", decimal: ",", precision: 2 },
        FJD: { symbol: "FJ$", grouping: ",", decimal: ".", precision: 2 },
        FKP: { symbol: "£", grouping: ",", decimal: ".", precision: 2 },
        GBP: { symbol: "£", grouping: ",", decimal: ".", precision: 2 },
        GEL: { symbol: "Lari", grouping: " ", decimal: ",", precision: 2 },
        GHS: { symbol: "₵", grouping: ",", decimal: ".", precision: 2 },
        GIP: { symbol: "£", grouping: ",", decimal: ".", precision: 2 },
        GMD: { symbol: "D", grouping: ",", decimal: ".", precision: 2 },
        GNF: { symbol: "FG", grouping: ",", decimal: ".", precision: 0 },
        GTQ: { symbol: "Q", grouping: ",", decimal: ".", precision: 2 },
        GYD: { symbol: "G$", grouping: ",", decimal: ".", precision: 2 },
        HKD: { symbol: "HK$", grouping: ",", decimal: ".", precision: 2 },
        HNL: { symbol: "L.", grouping: ",", decimal: ".", precision: 2 },
        HRK: { symbol: "kn", grouping: ".", decimal: ",", precision: 2 },
        HTG: { symbol: "G", grouping: ",", decimal: ".", precision: 2 },
        HUF: { symbol: "Ft", grouping: ".", decimal: ",", precision: 0 },
        IDR: { symbol: "Rp", grouping: ".", decimal: ",", precision: 0 },
        ILS: { symbol: "₪", grouping: ",", decimal: ".", precision: 2 },
        INR: { symbol: "₹", grouping: ",", decimal: ".", precision: 2 },
        IQD: { symbol: "د.ع.‏", grouping: ",", decimal: ".", precision: 2 },
        IRR: { symbol: "﷼", grouping: ",", decimal: "/", precision: 2 },
        ISK: { symbol: "kr.", grouping: ".", decimal: ",", precision: 0 },
        JMD: { symbol: "J$", grouping: ",", decimal: ".", precision: 2 },
        JOD: { symbol: "د.ا.‏", grouping: ",", decimal: ".", precision: 3 },
        JPY: { symbol: "¥", grouping: ",", decimal: ".", precision: 0 },
        KES: { symbol: "S", grouping: ",", decimal: ".", precision: 2 },
        KGS: { symbol: "сом", grouping: " ", decimal: "-", precision: 2 },
        KHR: { symbol: "៛", grouping: ",", decimal: ".", precision: 0 },
        KMF: { symbol: "CF", grouping: ",", decimal: ".", precision: 2 },
        KPW: { symbol: "₩", grouping: ",", decimal: ".", precision: 0 },
        KRW: { symbol: "₩", grouping: ",", decimal: ".", precision: 0 },
        KWD: { symbol: "د.ك.‏", grouping: ",", decimal: ".", precision: 3 },
        KYD: { symbol: "$", grouping: ",", decimal: ".", precision: 2 },
        KZT: { symbol: "₸", grouping: " ", decimal: "-", precision: 2 },
        LAK: { symbol: "₭", grouping: ",", decimal: ".", precision: 0 },
        LBP: { symbol: "ل.ل.‏", grouping: ",", decimal: ".", precision: 2 },
        LKR: { symbol: "₨", grouping: ",", decimal: ".", precision: 0 },
        LRD: { symbol: "L$", grouping: ",", decimal: ".", precision: 2 },
        LSL: { symbol: "M", grouping: ",", decimal: ".", precision: 2 },
        LYD: { symbol: "د.ل.‏", grouping: ",", decimal: ".", precision: 3 },
        MAD: { symbol: "د.م.‏", grouping: ",", decimal: ".", precision: 2 },
        MDL: { symbol: "lei", grouping: ",", decimal: ".", precision: 2 },
        MGA: { symbol: "Ar", grouping: ",", decimal: ".", precision: 0 },
        MKD: { symbol: "ден.", grouping: ".", decimal: ",", precision: 2 },
        MMK: { symbol: "K", grouping: ",", decimal: ".", precision: 2 },
        MNT: { symbol: "₮", grouping: " ", decimal: ",", precision: 2 },
        MOP: { symbol: "MOP$", grouping: ",", decimal: ".", precision: 2 },
        MRO: { symbol: "UM", grouping: ",", decimal: ".", precision: 2 },
        MTL: { symbol: "₤", grouping: ",", decimal: ".", precision: 2 },
        MUR: { symbol: "₨", grouping: ",", decimal: ".", precision: 2 },
        MVR: { symbol: "MVR", grouping: ",", decimal: ".", precision: 1 },
        MWK: { symbol: "MK", grouping: ",", decimal: ".", precision: 2 },
        MXN: { symbol: "MX$", grouping: ",", decimal: ".", precision: 2 },
        MYR: { symbol: "RM", grouping: ",", decimal: ".", precision: 2 },
        MZN: { symbol: "MT", grouping: ",", decimal: ".", precision: 0 },
        NAD: { symbol: "N$", grouping: ",", decimal: ".", precision: 2 },
        NGN: { symbol: "₦", grouping: ",", decimal: ".", precision: 2 },
        NIO: { symbol: "C$", grouping: ",", decimal: ".", precision: 2 },
        NOK: { symbol: "kr", grouping: " ", decimal: ",", precision: 2 },
        NPR: { symbol: "₨", grouping: ",", decimal: ".", precision: 2 },
        NZD: { symbol: "NZ$", grouping: ",", decimal: ".", precision: 2 },
        OMR: { symbol: "﷼", grouping: ",", decimal: ".", precision: 3 },
        PAB: { symbol: "B/.", grouping: ",", decimal: ".", precision: 2 },
        PEN: { symbol: "S/.", grouping: ",", decimal: ".", precision: 2 },
        PGK: { symbol: "K", grouping: ",", decimal: ".", precision: 2 },
        PHP: { symbol: "₱", grouping: ",", decimal: ".", precision: 2 },
        PKR: { symbol: "₨", grouping: ",", decimal: ".", precision: 2 },
        PLN: { symbol: "zł", grouping: " ", decimal: ",", precision: 2 },
        PYG: { symbol: "₲", grouping: ".", decimal: ",", precision: 2 },
        QAR: { symbol: "﷼", grouping: ",", decimal: ".", precision: 2 },
        RON: { symbol: "lei", grouping: ".", decimal: ",", precision: 2 },
        RSD: { symbol: "Дин.", grouping: ".", decimal: ",", precision: 2 },
        RUB: { symbol: "₽", grouping: " ", decimal: ",", precision: 2 },
        RWF: { symbol: "RWF", grouping: " ", decimal: ",", precision: 2 },
        SAR: { symbol: "﷼", grouping: ",", decimal: ".", precision: 2 },
        SBD: { symbol: "S$", grouping: ",", decimal: ".", precision: 2 },
        SCR: { symbol: "₨", grouping: ",", decimal: ".", precision: 2 },
        SDD: { symbol: "LSd", grouping: ",", decimal: ".", precision: 2 },
        SDG: { symbol: "£‏", grouping: ",", decimal: ".", precision: 2 },
        SEK: { symbol: "kr", grouping: ",", decimal: ".", precision: 2 },
        SGD: { symbol: "S$", grouping: ",", decimal: ".", precision: 2 },
        SHP: { symbol: "£", grouping: ",", decimal: ".", precision: 2 },
        SLL: { symbol: "Le", grouping: ",", decimal: ".", precision: 2 },
        SOS: { symbol: "S", grouping: ",", decimal: ".", precision: 2 },
        SRD: { symbol: "$", grouping: ",", decimal: ".", precision: 2 },
        STD: { symbol: "Db", grouping: ",", decimal: ".", precision: 2 },
        SVC: { symbol: "₡", grouping: ",", decimal: ".", precision: 2 },
        SYP: { symbol: "£", grouping: ",", decimal: ".", precision: 2 },
        SZL: { symbol: "E", grouping: ",", decimal: ".", precision: 2 },
        THB: { symbol: "฿", grouping: ",", decimal: ".", precision: 2 },
        TJS: { symbol: "TJS", grouping: " ", decimal: ";", precision: 2 },
        TMT: { symbol: "m", grouping: " ", decimal: ",", precision: 0 },
        TND: { symbol: "د.ت.‏", grouping: ",", decimal: ".", precision: 3 },
        TOP: { symbol: "T$", grouping: ",", decimal: ".", precision: 2 },
        TRY: { symbol: "TL", grouping: ".", decimal: ",", precision: 2 },
        TTD: { symbol: "TT$", grouping: ",", decimal: ".", precision: 2 },
        TVD: { symbol: "$T", grouping: ",", decimal: ".", precision: 2 },
        TWD: { symbol: "NT$", grouping: ",", decimal: ".", precision: 2 },
        TZS: { symbol: "TSh", grouping: ",", decimal: ".", precision: 2 },
        UAH: { symbol: "₴", grouping: " ", decimal: ",", precision: 2 },
        UGX: { symbol: "USh", grouping: ",", decimal: ".", precision: 2 },
        USD: { symbol: "$", grouping: ",", decimal: ".", precision: 2 },
        UYU: { symbol: "$U", grouping: ".", decimal: ",", precision: 2 },
        UZS: { symbol: "сўм", grouping: " ", decimal: ",", precision: 2 },
        VEB: { symbol: "Bs.", grouping: ",", decimal: ".", precision: 2 },
        VEF: { symbol: "Bs. F.", grouping: ".", decimal: ",", precision: 2 },
        VND: { symbol: "₫", grouping: ".", decimal: ",", precision: 1 },
        VUV: { symbol: "VT", grouping: ",", decimal: ".", precision: 0 },
        WST: { symbol: "WS$", grouping: ",", decimal: ".", precision: 2 },
        XAF: { symbol: "F", grouping: ",", decimal: ".", precision: 2 },
        XCD: { symbol: "$", grouping: ",", decimal: ".", precision: 2 },
        XOF: { symbol: "F", grouping: " ", decimal: ",", precision: 2 },
        XPF: { symbol: "F", grouping: ",", decimal: ".", precision: 2 },
        YER: { symbol: "﷼", grouping: ",", decimal: ".", precision: 2 },
        ZAR: { symbol: "R", grouping: " ", decimal: ",", precision: 2 },
        ZMW: { symbol: "ZK", grouping: ",", decimal: ".", precision: 2 },
        WON: { symbol: "₩", grouping: ",", decimal: ".", precision: 2 }
      };
      function i(t) {
        return (
          r[t] || { symbol: "$", grouping: ",", decimal: ".", precision: 2 }
        );
      }
    },
    6: function(t, e) {
      t.exports = function(t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return t;
      };
    },
    66: function(t, e, n) {
      "use strict";
      var r,
        i = "object" == typeof Reflect ? Reflect : null,
        o =
          i && "function" == typeof i.apply
            ? i.apply
            : function(t, e, n) {
                return Function.prototype.apply.call(t, e, n);
              };
      r =
        i && "function" == typeof i.ownKeys
          ? i.ownKeys
          : Object.getOwnPropertySymbols
          ? function(t) {
              return Object.getOwnPropertyNames(t).concat(
                Object.getOwnPropertySymbols(t)
              );
            }
          : function(t) {
              return Object.getOwnPropertyNames(t);
            };
      var s =
        Number.isNaN ||
        function(t) {
          return t != t;
        };
      function a() {
        a.init.call(this);
      }
      (t.exports = a),
        (a.EventEmitter = a),
        (a.prototype._events = void 0),
        (a.prototype._eventsCount = 0),
        (a.prototype._maxListeners = void 0);
      var c = 10;
      function l(t) {
        return void 0 === t._maxListeners
          ? a.defaultMaxListeners
          : t._maxListeners;
      }
      function u(t, e, n, r) {
        var i, o, s, a;
        if ("function" != typeof n)
          throw new TypeError(
            'The "listener" argument must be of type Function. Received type ' +
              typeof n
          );
        if (
          (void 0 === (o = t._events)
            ? ((o = t._events = Object.create(null)), (t._eventsCount = 0))
            : (void 0 !== o.newListener &&
                (t.emit("newListener", e, n.listener ? n.listener : n),
                (o = t._events)),
              (s = o[e])),
          void 0 === s)
        )
          (s = o[e] = n), ++t._eventsCount;
        else if (
          ("function" == typeof s
            ? (s = o[e] = r ? [n, s] : [s, n])
            : r
            ? s.unshift(n)
            : s.push(n),
          (i = l(t)) > 0 && s.length > i && !s.warned)
        ) {
          s.warned = !0;
          var c = new Error(
            "Possible EventEmitter memory leak detected. " +
              s.length +
              " " +
              String(e) +
              " listeners added. Use emitter.setMaxListeners() to increase limit"
          );
          (c.name = "MaxListenersExceededWarning"),
            (c.emitter = t),
            (c.type = e),
            (c.count = s.length),
            (a = c),
            console && console.warn && console.warn(a);
        }
        return t;
      }
      function p() {
        for (var t = [], e = 0; e < arguments.length; e++) t.push(arguments[e]);
        this.fired ||
          (this.target.removeListener(this.type, this.wrapFn),
          (this.fired = !0),
          o(this.listener, this.target, t));
      }
      function h(t, e, n) {
        var r = { fired: !1, wrapFn: void 0, target: t, type: e, listener: n },
          i = p.bind(r);
        return (i.listener = n), (r.wrapFn = i), i;
      }
      function f(t, e, n) {
        var r = t._events;
        if (void 0 === r) return [];
        var i = r[e];
        return void 0 === i
          ? []
          : "function" == typeof i
          ? n
            ? [i.listener || i]
            : [i]
          : n
          ? (function(t) {
              for (var e = new Array(t.length), n = 0; n < e.length; ++n)
                e[n] = t[n].listener || t[n];
              return e;
            })(i)
          : g(i, i.length);
      }
      function m(t) {
        var e = this._events;
        if (void 0 !== e) {
          var n = e[t];
          if ("function" == typeof n) return 1;
          if (void 0 !== n) return n.length;
        }
        return 0;
      }
      function g(t, e) {
        for (var n = new Array(e), r = 0; r < e; ++r) n[r] = t[r];
        return n;
      }
      Object.defineProperty(a, "defaultMaxListeners", {
        enumerable: !0,
        get: function() {
          return c;
        },
        set: function(t) {
          if ("number" != typeof t || t < 0 || s(t))
            throw new RangeError(
              'The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' +
                t +
                "."
            );
          c = t;
        }
      }),
        (a.init = function() {
          (void 0 !== this._events &&
            this._events !== Object.getPrototypeOf(this)._events) ||
            ((this._events = Object.create(null)), (this._eventsCount = 0)),
            (this._maxListeners = this._maxListeners || void 0);
        }),
        (a.prototype.setMaxListeners = function(t) {
          if ("number" != typeof t || t < 0 || s(t))
            throw new RangeError(
              'The value of "n" is out of range. It must be a non-negative number. Received ' +
                t +
                "."
            );
          return (this._maxListeners = t), this;
        }),
        (a.prototype.getMaxListeners = function() {
          return l(this);
        }),
        (a.prototype.emit = function(t) {
          for (var e = [], n = 1; n < arguments.length; n++)
            e.push(arguments[n]);
          var r = "error" === t,
            i = this._events;
          if (void 0 !== i) r = r && void 0 === i.error;
          else if (!r) return !1;
          if (r) {
            var s;
            if ((e.length > 0 && (s = e[0]), s instanceof Error)) throw s;
            var a = new Error(
              "Unhandled error." + (s ? " (" + s.message + ")" : "")
            );
            throw ((a.context = s), a);
          }
          var c = i[t];
          if (void 0 === c) return !1;
          if ("function" == typeof c) o(c, this, e);
          else {
            var l = c.length,
              u = g(c, l);
            for (n = 0; n < l; ++n) o(u[n], this, e);
          }
          return !0;
        }),
        (a.prototype.addListener = function(t, e) {
          return u(this, t, e, !1);
        }),
        (a.prototype.on = a.prototype.addListener),
        (a.prototype.prependListener = function(t, e) {
          return u(this, t, e, !0);
        }),
        (a.prototype.once = function(t, e) {
          if ("function" != typeof e)
            throw new TypeError(
              'The "listener" argument must be of type Function. Received type ' +
                typeof e
            );
          return this.on(t, h(this, t, e)), this;
        }),
        (a.prototype.prependOnceListener = function(t, e) {
          if ("function" != typeof e)
            throw new TypeError(
              'The "listener" argument must be of type Function. Received type ' +
                typeof e
            );
          return this.prependListener(t, h(this, t, e)), this;
        }),
        (a.prototype.removeListener = function(t, e) {
          var n, r, i, o, s;
          if ("function" != typeof e)
            throw new TypeError(
              'The "listener" argument must be of type Function. Received type ' +
                typeof e
            );
          if (void 0 === (r = this._events)) return this;
          if (void 0 === (n = r[t])) return this;
          if (n === e || n.listener === e)
            0 == --this._eventsCount
              ? (this._events = Object.create(null))
              : (delete r[t],
                r.removeListener &&
                  this.emit("removeListener", t, n.listener || e));
          else if ("function" != typeof n) {
            for (i = -1, o = n.length - 1; o >= 0; o--)
              if (n[o] === e || n[o].listener === e) {
                (s = n[o].listener), (i = o);
                break;
              }
            if (i < 0) return this;
            0 === i
              ? n.shift()
              : (function(t, e) {
                  for (; e + 1 < t.length; e++) t[e] = t[e + 1];
                  t.pop();
                })(n, i),
              1 === n.length && (r[t] = n[0]),
              void 0 !== r.removeListener &&
                this.emit("removeListener", t, s || e);
          }
          return this;
        }),
        (a.prototype.off = a.prototype.removeListener),
        (a.prototype.removeAllListeners = function(t) {
          var e, n, r;
          if (void 0 === (n = this._events)) return this;
          if (void 0 === n.removeListener)
            return (
              0 === arguments.length
                ? ((this._events = Object.create(null)),
                  (this._eventsCount = 0))
                : void 0 !== n[t] &&
                  (0 == --this._eventsCount
                    ? (this._events = Object.create(null))
                    : delete n[t]),
              this
            );
          if (0 === arguments.length) {
            var i,
              o = Object.keys(n);
            for (r = 0; r < o.length; ++r)
              "removeListener" !== (i = o[r]) && this.removeAllListeners(i);
            return (
              this.removeAllListeners("removeListener"),
              (this._events = Object.create(null)),
              (this._eventsCount = 0),
              this
            );
          }
          if ("function" == typeof (e = n[t])) this.removeListener(t, e);
          else if (void 0 !== e)
            for (r = e.length - 1; r >= 0; r--) this.removeListener(t, e[r]);
          return this;
        }),
        (a.prototype.listeners = function(t) {
          return f(this, t, !0);
        }),
        (a.prototype.rawListeners = function(t) {
          return f(this, t, !1);
        }),
        (a.listenerCount = function(t, e) {
          return "function" == typeof t.listenerCount
            ? t.listenerCount(e)
            : m.call(t, e);
        }),
        (a.prototype.listenerCount = m),
        (a.prototype.eventNames = function() {
          return this._eventsCount > 0 ? r(this._events) : [];
        });
    },
    7: function(t, e, n) {
      var r = n(87),
        i = n(88),
        o = n(73),
        s = n(89);
      t.exports = function(t, e) {
        return r(t) || i(t, e) || o(t, e) || s();
      };
    },
    71: function(t, e) {
      t.exports = function(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r;
      };
    },
    73: function(t, e, n) {
      var r = n(71);
      t.exports = function(t, e) {
        if (t) {
          if ("string" == typeof t) return r(t, e);
          var n = Object.prototype.toString.call(t).slice(8, -1);
          return (
            "Object" === n && t.constructor && (n = t.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(n)
              : "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? r(t, e)
              : void 0
          );
        }
      };
    },
    75: function(t, e, n) {
      /**
       * @preserve jed.js https://github.com/SlexAxton/Jed
       */
      !(function(n, r) {
        var i = Array.prototype,
          o = Object.prototype,
          s = i.slice,
          a = o.hasOwnProperty,
          c = i.forEach,
          l = {},
          u = {
            forEach: function(t, e, n) {
              var r, i, o;
              if (null !== t)
                if (c && t.forEach === c) t.forEach(e, n);
                else if (t.length === +t.length) {
                  for (r = 0, i = t.length; r < i; r++)
                    if (r in t && e.call(n, t[r], r, t) === l) return;
                } else
                  for (o in t)
                    if (a.call(t, o) && e.call(n, t[o], o, t) === l) return;
            },
            extend: function(t) {
              return (
                this.forEach(s.call(arguments, 1), function(e) {
                  for (var n in e) t[n] = e[n];
                }),
                t
              );
            }
          },
          p = function(t) {
            if (
              ((this.defaults = {
                locale_data: {
                  messages: {
                    "": {
                      domain: "messages",
                      lang: "en",
                      plural_forms: "nplurals=2; plural=(n != 1);"
                    }
                  }
                },
                domain: "messages",
                debug: !1
              }),
              (this.options = u.extend({}, this.defaults, t)),
              this.textdomain(this.options.domain),
              t.domain && !this.options.locale_data[this.options.domain])
            )
              throw new Error(
                "Text domain set to non-existent domain: `" + t.domain + "`"
              );
          };
        function h(t) {
          return p.PF.compile(t || "nplurals=2; plural=(n != 1);");
        }
        function f(t, e) {
          (this._key = t), (this._i18n = e);
        }
        (p.context_delimiter = String.fromCharCode(4)),
          u.extend(f.prototype, {
            onDomain: function(t) {
              return (this._domain = t), this;
            },
            withContext: function(t) {
              return (this._context = t), this;
            },
            ifPlural: function(t, e) {
              return (this._val = t), (this._pkey = e), this;
            },
            fetch: function(t) {
              return (
                "[object Array]" != {}.toString.call(t) &&
                  (t = [].slice.call(arguments, 0)),
                (t && t.length
                  ? p.sprintf
                  : function(t) {
                      return t;
                    })(
                  this._i18n.dcnpgettext(
                    this._domain,
                    this._context,
                    this._key,
                    this._pkey,
                    this._val
                  ),
                  t
                )
              );
            }
          }),
          u.extend(p.prototype, {
            translate: function(t) {
              return new f(t, this);
            },
            textdomain: function(t) {
              if (!t) return this._textdomain;
              this._textdomain = t;
            },
            gettext: function(t) {
              return this.dcnpgettext.call(this, void 0, void 0, t);
            },
            dgettext: function(t, e) {
              return this.dcnpgettext.call(this, t, void 0, e);
            },
            dcgettext: function(t, e) {
              return this.dcnpgettext.call(this, t, void 0, e);
            },
            ngettext: function(t, e, n) {
              return this.dcnpgettext.call(this, void 0, void 0, t, e, n);
            },
            dngettext: function(t, e, n, r) {
              return this.dcnpgettext.call(this, t, void 0, e, n, r);
            },
            dcngettext: function(t, e, n, r) {
              return this.dcnpgettext.call(this, t, void 0, e, n, r);
            },
            pgettext: function(t, e) {
              return this.dcnpgettext.call(this, void 0, t, e);
            },
            dpgettext: function(t, e, n) {
              return this.dcnpgettext.call(this, t, e, n);
            },
            dcpgettext: function(t, e, n) {
              return this.dcnpgettext.call(this, t, e, n);
            },
            npgettext: function(t, e, n, r) {
              return this.dcnpgettext.call(this, void 0, t, e, n, r);
            },
            dnpgettext: function(t, e, n, r, i) {
              return this.dcnpgettext.call(this, t, e, n, r, i);
            },
            dcnpgettext: function(t, e, n, r, i) {
              var o;
              if (((r = r || n), (t = t || this._textdomain), !this.options))
                return (o = new p()).dcnpgettext.call(
                  o,
                  void 0,
                  void 0,
                  n,
                  r,
                  i
                );
              if (!this.options.locale_data)
                throw new Error("No locale data provided.");
              if (!this.options.locale_data[t])
                throw new Error("Domain `" + t + "` was not found.");
              if (!this.options.locale_data[t][""])
                throw new Error("No locale meta information provided.");
              if (!n) throw new Error("No translation key found.");
              var s,
                a,
                c,
                l = e ? e + p.context_delimiter + n : n,
                u = this.options.locale_data,
                f = u[t],
                m = (u.messages || this.defaults.locale_data.messages)[""],
                g =
                  f[""].plural_forms ||
                  f[""]["Plural-Forms"] ||
                  f[""]["plural-forms"] ||
                  m.plural_forms ||
                  m["Plural-Forms"] ||
                  m["plural-forms"];
              if (void 0 === i) c = 0;
              else {
                if ("number" != typeof i && ((i = parseInt(i, 10)), isNaN(i)))
                  throw new Error(
                    "The number that was passed in is not a number."
                  );
                c = h(g)(i);
              }
              if (!f)
                throw new Error("No domain named `" + t + "` could be found.");
              return !(s = f[l]) || c > s.length
                ? (this.options.missing_key_callback &&
                    this.options.missing_key_callback(l, t),
                  (a = [n, r]),
                  !0 === this.options.debug && console.log(a[h(g)(i)]),
                  a[h()(i)])
                : (a = s[c]) || (a = [n, r])[h()(i)];
            }
          });
        var m,
          g,
          d = (function() {
            function t(t) {
              return Object.prototype.toString
                .call(t)
                .slice(8, -1)
                .toLowerCase();
            }
            function e(t, e) {
              for (var n = []; e > 0; n[--e] = t);
              return n.join("");
            }
            var n = function() {
              return (
                n.cache.hasOwnProperty(arguments[0]) ||
                  (n.cache[arguments[0]] = n.parse(arguments[0])),
                n.format.call(null, n.cache[arguments[0]], arguments)
              );
            };
            return (
              (n.format = function(n, r) {
                var i,
                  o,
                  s,
                  a,
                  c,
                  l,
                  u,
                  p = 1,
                  h = n.length,
                  f = "",
                  m = [];
                for (o = 0; o < h; o++)
                  if ("string" === (f = t(n[o]))) m.push(n[o]);
                  else if ("array" === f) {
                    if ((a = n[o])[2])
                      for (i = r[p], s = 0; s < a[2].length; s++) {
                        if (!i.hasOwnProperty(a[2][s]))
                          throw d(
                            '[sprintf] property "%s" does not exist',
                            a[2][s]
                          );
                        i = i[a[2][s]];
                      }
                    else i = a[1] ? r[a[1]] : r[p++];
                    if (/[^s]/.test(a[8]) && "number" != t(i))
                      throw d("[sprintf] expecting number but found %s", t(i));
                    switch ((null == i && (i = ""), a[8])) {
                      case "b":
                        i = i.toString(2);
                        break;
                      case "c":
                        i = String.fromCharCode(i);
                        break;
                      case "d":
                        i = parseInt(i, 10);
                        break;
                      case "e":
                        i = a[7] ? i.toExponential(a[7]) : i.toExponential();
                        break;
                      case "f":
                        i = a[7] ? parseFloat(i).toFixed(a[7]) : parseFloat(i);
                        break;
                      case "o":
                        i = i.toString(8);
                        break;
                      case "s":
                        i = (i = String(i)) && a[7] ? i.substring(0, a[7]) : i;
                        break;
                      case "u":
                        i = Math.abs(i);
                        break;
                      case "x":
                        i = i.toString(16);
                        break;
                      case "X":
                        i = i.toString(16).toUpperCase();
                    }
                    (i = /[def]/.test(a[8]) && a[3] && i >= 0 ? "+" + i : i),
                      (l = a[4] ? ("0" == a[4] ? "0" : a[4].charAt(1)) : " "),
                      (u = a[6] - String(i).length),
                      (c = a[6] ? e(l, u) : ""),
                      m.push(a[5] ? i + c : c + i);
                  }
                return m.join("");
              }),
              (n.cache = {}),
              (n.parse = function(t) {
                for (var e = t, n = [], r = [], i = 0; e; ) {
                  if (null !== (n = /^[^\x25]+/.exec(e))) r.push(n[0]);
                  else if (null !== (n = /^\x25{2}/.exec(e))) r.push("%");
                  else {
                    if (
                      null ===
                      (n = /^\x25(?:([1-9]\d*)\$|\(([^\)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-fosuxX])/.exec(
                        e
                      ))
                    )
                      throw "[sprintf] huh?";
                    if (n[2]) {
                      i |= 1;
                      var o = [],
                        s = n[2],
                        a = [];
                      if (null === (a = /^([a-z_][a-z_\d]*)/i.exec(s)))
                        throw "[sprintf] huh?";
                      for (
                        o.push(a[1]);
                        "" !== (s = s.substring(a[0].length));

                      )
                        if (null !== (a = /^\.([a-z_][a-z_\d]*)/i.exec(s)))
                          o.push(a[1]);
                        else {
                          if (null === (a = /^\[(\d+)\]/.exec(s)))
                            throw "[sprintf] huh?";
                          o.push(a[1]);
                        }
                      n[2] = o;
                    } else i |= 2;
                    if (3 === i)
                      throw "[sprintf] mixing positional and named placeholders is not (yet) supported";
                    r.push(n);
                  }
                  e = e.substring(n[0].length);
                }
                return r;
              }),
              n
            );
          })(),
          y = function(t, e) {
            return e.unshift(t), d.apply(null, e);
          };
        (p.parse_plural = function(t, e) {
          return (t = t.replace(/n/g, e)), p.parse_expression(t);
        }),
          (p.sprintf = function(t, e) {
            return "[object Array]" == {}.toString.call(e)
              ? y(t, [].slice.call(e))
              : d.apply(this, [].slice.call(arguments));
          }),
          (p.prototype.sprintf = function() {
            return p.sprintf.apply(this, arguments);
          }),
          ((p.PF = {}).parse = function(t) {
            var e = p.PF.extractPluralExpr(t);
            return p.PF.parser.parse.call(p.PF.parser, e);
          }),
          (p.PF.compile = function(t) {
            var e = p.PF.parse(t);
            return function(t) {
              return !0 === (n = p.PF.interpreter(e)(t)) ? 1 : n || 0;
              var n;
            };
          }),
          (p.PF.interpreter = function(t) {
            return function(e) {
              switch (t.type) {
                case "GROUP":
                  return p.PF.interpreter(t.expr)(e);
                case "TERNARY":
                  return p.PF.interpreter(t.expr)(e)
                    ? p.PF.interpreter(t.truthy)(e)
                    : p.PF.interpreter(t.falsey)(e);
                case "OR":
                  return (
                    p.PF.interpreter(t.left)(e) || p.PF.interpreter(t.right)(e)
                  );
                case "AND":
                  return (
                    p.PF.interpreter(t.left)(e) && p.PF.interpreter(t.right)(e)
                  );
                case "LT":
                  return (
                    p.PF.interpreter(t.left)(e) < p.PF.interpreter(t.right)(e)
                  );
                case "GT":
                  return (
                    p.PF.interpreter(t.left)(e) > p.PF.interpreter(t.right)(e)
                  );
                case "LTE":
                  return (
                    p.PF.interpreter(t.left)(e) <= p.PF.interpreter(t.right)(e)
                  );
                case "GTE":
                  return (
                    p.PF.interpreter(t.left)(e) >= p.PF.interpreter(t.right)(e)
                  );
                case "EQ":
                  return (
                    p.PF.interpreter(t.left)(e) == p.PF.interpreter(t.right)(e)
                  );
                case "NEQ":
                  return (
                    p.PF.interpreter(t.left)(e) != p.PF.interpreter(t.right)(e)
                  );
                case "MOD":
                  return (
                    p.PF.interpreter(t.left)(e) % p.PF.interpreter(t.right)(e)
                  );
                case "VAR":
                  return e;
                case "NUM":
                  return t.val;
                default:
                  throw new Error("Invalid Token found.");
              }
            };
          }),
          (p.PF.extractPluralExpr = function(t) {
            (t = t.replace(/^\s\s*/, "").replace(/\s\s*$/, "")),
              /;\s*$/.test(t) || (t = t.concat(";"));
            var e,
              n = /nplurals\=(\d+);/,
              r = t.match(n);
            if (!(r.length > 1))
              throw new Error(
                "nplurals not found in plural_forms string: " + t
              );
            if (
              (r[1],
              !(
                (e = (t = t.replace(n, "")).match(/plural\=(.*);/)) &&
                e.length > 1
              ))
            )
              throw new Error("`plural` expression not found: " + t);
            return e[1];
          }),
          (p.PF.parser = ((m = {
            trace: function() {},
            yy: {},
            symbols_: {
              error: 2,
              expressions: 3,
              e: 4,
              EOF: 5,
              "?": 6,
              ":": 7,
              "||": 8,
              "&&": 9,
              "<": 10,
              "<=": 11,
              ">": 12,
              ">=": 13,
              "!=": 14,
              "==": 15,
              "%": 16,
              "(": 17,
              ")": 18,
              n: 19,
              NUMBER: 20,
              $accept: 0,
              $end: 1
            },
            terminals_: {
              2: "error",
              5: "EOF",
              6: "?",
              7: ":",
              8: "||",
              9: "&&",
              10: "<",
              11: "<=",
              12: ">",
              13: ">=",
              14: "!=",
              15: "==",
              16: "%",
              17: "(",
              18: ")",
              19: "n",
              20: "NUMBER"
            },
            productions_: [
              0,
              [3, 2],
              [4, 5],
              [4, 3],
              [4, 3],
              [4, 3],
              [4, 3],
              [4, 3],
              [4, 3],
              [4, 3],
              [4, 3],
              [4, 3],
              [4, 3],
              [4, 1],
              [4, 1]
            ],
            performAction: function(t, e, n, r, i, o, s) {
              var a = o.length - 1;
              switch (i) {
                case 1:
                  return { type: "GROUP", expr: o[a - 1] };
                case 2:
                  this.$ = {
                    type: "TERNARY",
                    expr: o[a - 4],
                    truthy: o[a - 2],
                    falsey: o[a]
                  };
                  break;
                case 3:
                  this.$ = { type: "OR", left: o[a - 2], right: o[a] };
                  break;
                case 4:
                  this.$ = { type: "AND", left: o[a - 2], right: o[a] };
                  break;
                case 5:
                  this.$ = { type: "LT", left: o[a - 2], right: o[a] };
                  break;
                case 6:
                  this.$ = { type: "LTE", left: o[a - 2], right: o[a] };
                  break;
                case 7:
                  this.$ = { type: "GT", left: o[a - 2], right: o[a] };
                  break;
                case 8:
                  this.$ = { type: "GTE", left: o[a - 2], right: o[a] };
                  break;
                case 9:
                  this.$ = { type: "NEQ", left: o[a - 2], right: o[a] };
                  break;
                case 10:
                  this.$ = { type: "EQ", left: o[a - 2], right: o[a] };
                  break;
                case 11:
                  this.$ = { type: "MOD", left: o[a - 2], right: o[a] };
                  break;
                case 12:
                  this.$ = { type: "GROUP", expr: o[a - 1] };
                  break;
                case 13:
                  this.$ = { type: "VAR" };
                  break;
                case 14:
                  this.$ = { type: "NUM", val: Number(t) };
              }
            },
            table: [
              { 3: 1, 4: 2, 17: [1, 3], 19: [1, 4], 20: [1, 5] },
              { 1: [3] },
              {
                5: [1, 6],
                6: [1, 7],
                8: [1, 8],
                9: [1, 9],
                10: [1, 10],
                11: [1, 11],
                12: [1, 12],
                13: [1, 13],
                14: [1, 14],
                15: [1, 15],
                16: [1, 16]
              },
              { 4: 17, 17: [1, 3], 19: [1, 4], 20: [1, 5] },
              {
                5: [2, 13],
                6: [2, 13],
                7: [2, 13],
                8: [2, 13],
                9: [2, 13],
                10: [2, 13],
                11: [2, 13],
                12: [2, 13],
                13: [2, 13],
                14: [2, 13],
                15: [2, 13],
                16: [2, 13],
                18: [2, 13]
              },
              {
                5: [2, 14],
                6: [2, 14],
                7: [2, 14],
                8: [2, 14],
                9: [2, 14],
                10: [2, 14],
                11: [2, 14],
                12: [2, 14],
                13: [2, 14],
                14: [2, 14],
                15: [2, 14],
                16: [2, 14],
                18: [2, 14]
              },
              { 1: [2, 1] },
              { 4: 18, 17: [1, 3], 19: [1, 4], 20: [1, 5] },
              { 4: 19, 17: [1, 3], 19: [1, 4], 20: [1, 5] },
              { 4: 20, 17: [1, 3], 19: [1, 4], 20: [1, 5] },
              { 4: 21, 17: [1, 3], 19: [1, 4], 20: [1, 5] },
              { 4: 22, 17: [1, 3], 19: [1, 4], 20: [1, 5] },
              { 4: 23, 17: [1, 3], 19: [1, 4], 20: [1, 5] },
              { 4: 24, 17: [1, 3], 19: [1, 4], 20: [1, 5] },
              { 4: 25, 17: [1, 3], 19: [1, 4], 20: [1, 5] },
              { 4: 26, 17: [1, 3], 19: [1, 4], 20: [1, 5] },
              { 4: 27, 17: [1, 3], 19: [1, 4], 20: [1, 5] },
              {
                6: [1, 7],
                8: [1, 8],
                9: [1, 9],
                10: [1, 10],
                11: [1, 11],
                12: [1, 12],
                13: [1, 13],
                14: [1, 14],
                15: [1, 15],
                16: [1, 16],
                18: [1, 28]
              },
              {
                6: [1, 7],
                7: [1, 29],
                8: [1, 8],
                9: [1, 9],
                10: [1, 10],
                11: [1, 11],
                12: [1, 12],
                13: [1, 13],
                14: [1, 14],
                15: [1, 15],
                16: [1, 16]
              },
              {
                5: [2, 3],
                6: [2, 3],
                7: [2, 3],
                8: [2, 3],
                9: [1, 9],
                10: [1, 10],
                11: [1, 11],
                12: [1, 12],
                13: [1, 13],
                14: [1, 14],
                15: [1, 15],
                16: [1, 16],
                18: [2, 3]
              },
              {
                5: [2, 4],
                6: [2, 4],
                7: [2, 4],
                8: [2, 4],
                9: [2, 4],
                10: [1, 10],
                11: [1, 11],
                12: [1, 12],
                13: [1, 13],
                14: [1, 14],
                15: [1, 15],
                16: [1, 16],
                18: [2, 4]
              },
              {
                5: [2, 5],
                6: [2, 5],
                7: [2, 5],
                8: [2, 5],
                9: [2, 5],
                10: [2, 5],
                11: [2, 5],
                12: [2, 5],
                13: [2, 5],
                14: [2, 5],
                15: [2, 5],
                16: [1, 16],
                18: [2, 5]
              },
              {
                5: [2, 6],
                6: [2, 6],
                7: [2, 6],
                8: [2, 6],
                9: [2, 6],
                10: [2, 6],
                11: [2, 6],
                12: [2, 6],
                13: [2, 6],
                14: [2, 6],
                15: [2, 6],
                16: [1, 16],
                18: [2, 6]
              },
              {
                5: [2, 7],
                6: [2, 7],
                7: [2, 7],
                8: [2, 7],
                9: [2, 7],
                10: [2, 7],
                11: [2, 7],
                12: [2, 7],
                13: [2, 7],
                14: [2, 7],
                15: [2, 7],
                16: [1, 16],
                18: [2, 7]
              },
              {
                5: [2, 8],
                6: [2, 8],
                7: [2, 8],
                8: [2, 8],
                9: [2, 8],
                10: [2, 8],
                11: [2, 8],
                12: [2, 8],
                13: [2, 8],
                14: [2, 8],
                15: [2, 8],
                16: [1, 16],
                18: [2, 8]
              },
              {
                5: [2, 9],
                6: [2, 9],
                7: [2, 9],
                8: [2, 9],
                9: [2, 9],
                10: [2, 9],
                11: [2, 9],
                12: [2, 9],
                13: [2, 9],
                14: [2, 9],
                15: [2, 9],
                16: [1, 16],
                18: [2, 9]
              },
              {
                5: [2, 10],
                6: [2, 10],
                7: [2, 10],
                8: [2, 10],
                9: [2, 10],
                10: [2, 10],
                11: [2, 10],
                12: [2, 10],
                13: [2, 10],
                14: [2, 10],
                15: [2, 10],
                16: [1, 16],
                18: [2, 10]
              },
              {
                5: [2, 11],
                6: [2, 11],
                7: [2, 11],
                8: [2, 11],
                9: [2, 11],
                10: [2, 11],
                11: [2, 11],
                12: [2, 11],
                13: [2, 11],
                14: [2, 11],
                15: [2, 11],
                16: [2, 11],
                18: [2, 11]
              },
              {
                5: [2, 12],
                6: [2, 12],
                7: [2, 12],
                8: [2, 12],
                9: [2, 12],
                10: [2, 12],
                11: [2, 12],
                12: [2, 12],
                13: [2, 12],
                14: [2, 12],
                15: [2, 12],
                16: [2, 12],
                18: [2, 12]
              },
              { 4: 30, 17: [1, 3], 19: [1, 4], 20: [1, 5] },
              {
                5: [2, 2],
                6: [1, 7],
                7: [2, 2],
                8: [1, 8],
                9: [1, 9],
                10: [1, 10],
                11: [1, 11],
                12: [1, 12],
                13: [1, 13],
                14: [1, 14],
                15: [1, 15],
                16: [1, 16],
                18: [2, 2]
              }
            ],
            defaultActions: { 6: [2, 1] },
            parseError: function(t, e) {
              throw new Error(t);
            },
            parse: function(t) {
              var e = this,
                n = [0],
                r = [null],
                i = [],
                o = this.table,
                s = "",
                a = 0,
                c = 0,
                l = 0;
              this.lexer.setInput(t),
                (this.lexer.yy = this.yy),
                (this.yy.lexer = this.lexer),
                void 0 === this.lexer.yylloc && (this.lexer.yylloc = {});
              var u = this.lexer.yylloc;
              function p() {
                var t;
                return (
                  "number" != typeof (t = e.lexer.lex() || 1) &&
                    (t = e.symbols_[t] || t),
                  t
                );
              }
              i.push(u),
                "function" == typeof this.yy.parseError &&
                  (this.parseError = this.yy.parseError);
              for (var h, f, m, g, d, y, b, v, _, w, x = {}; ; ) {
                if (
                  ((m = n[n.length - 1]),
                  this.defaultActions[m]
                    ? (g = this.defaultActions[m])
                    : (null == h && (h = p()), (g = o[m] && o[m][h])),
                  void 0 === g || !g.length || !g[0])
                ) {
                  if (!l) {
                    for (y in ((_ = []), o[m]))
                      this.terminals_[y] &&
                        y > 2 &&
                        _.push("'" + this.terminals_[y] + "'");
                    var C = "";
                    (C = this.lexer.showPosition
                      ? "Parse error on line " +
                        (a + 1) +
                        ":\n" +
                        this.lexer.showPosition() +
                        "\nExpecting " +
                        _.join(", ") +
                        ", got '" +
                        this.terminals_[h] +
                        "'"
                      : "Parse error on line " +
                        (a + 1) +
                        ": Unexpected " +
                        (1 == h
                          ? "end of input"
                          : "'" + (this.terminals_[h] || h) + "'")),
                      this.parseError(C, {
                        text: this.lexer.match,
                        token: this.terminals_[h] || h,
                        line: this.lexer.yylineno,
                        loc: u,
                        expected: _
                      });
                  }
                  if (3 == l) {
                    if (1 == h) throw new Error(C || "Parsing halted.");
                    (c = this.lexer.yyleng),
                      (s = this.lexer.yytext),
                      (a = this.lexer.yylineno),
                      (u = this.lexer.yylloc),
                      (h = p());
                  }
                  for (; !((2).toString() in o[m]); ) {
                    if (0 == m) throw new Error(C || "Parsing halted.");
                    (w = 1),
                      (n.length = n.length - 2 * w),
                      (r.length = r.length - w),
                      (i.length = i.length - w),
                      (m = n[n.length - 1]);
                  }
                  (f = h),
                    (h = 2),
                    (g = o[(m = n[n.length - 1])] && o[m][2]),
                    (l = 3);
                }
                if (g[0] instanceof Array && g.length > 1)
                  throw new Error(
                    "Parse Error: multiple actions possible at state: " +
                      m +
                      ", token: " +
                      h
                  );
                switch (g[0]) {
                  case 1:
                    n.push(h),
                      r.push(this.lexer.yytext),
                      i.push(this.lexer.yylloc),
                      n.push(g[1]),
                      (h = null),
                      f
                        ? ((h = f), (f = null))
                        : ((c = this.lexer.yyleng),
                          (s = this.lexer.yytext),
                          (a = this.lexer.yylineno),
                          (u = this.lexer.yylloc),
                          l > 0 && l--);
                    break;
                  case 2:
                    if (
                      ((b = this.productions_[g[1]][1]),
                      (x.$ = r[r.length - b]),
                      (x._$ = {
                        first_line: i[i.length - (b || 1)].first_line,
                        last_line: i[i.length - 1].last_line,
                        first_column: i[i.length - (b || 1)].first_column,
                        last_column: i[i.length - 1].last_column
                      }),
                      void 0 !==
                        (d = this.performAction.call(
                          x,
                          s,
                          c,
                          a,
                          this.yy,
                          g[1],
                          r,
                          i
                        )))
                    )
                      return d;
                    b &&
                      ((n = n.slice(0, -1 * b * 2)),
                      (r = r.slice(0, -1 * b)),
                      (i = i.slice(0, -1 * b))),
                      n.push(this.productions_[g[1]][0]),
                      r.push(x.$),
                      i.push(x._$),
                      (v = o[n[n.length - 2]][n[n.length - 1]]),
                      n.push(v);
                    break;
                  case 3:
                    return !0;
                }
              }
              return !0;
            }
          }),
          (g = (function() {
            var t = {
              EOF: 1,
              parseError: function(t, e) {
                if (!this.yy.parseError) throw new Error(t);
                this.yy.parseError(t, e);
              },
              setInput: function(t) {
                return (
                  (this._input = t),
                  (this._more = this._less = this.done = !1),
                  (this.yylineno = this.yyleng = 0),
                  (this.yytext = this.matched = this.match = ""),
                  (this.conditionStack = ["INITIAL"]),
                  (this.yylloc = {
                    first_line: 1,
                    first_column: 0,
                    last_line: 1,
                    last_column: 0
                  }),
                  this
                );
              },
              input: function() {
                var t = this._input[0];
                return (
                  (this.yytext += t),
                  this.yyleng++,
                  (this.match += t),
                  (this.matched += t),
                  t.match(/\n/) && this.yylineno++,
                  (this._input = this._input.slice(1)),
                  t
                );
              },
              unput: function(t) {
                return (this._input = t + this._input), this;
              },
              more: function() {
                return (this._more = !0), this;
              },
              pastInput: function() {
                var t = this.matched.substr(
                  0,
                  this.matched.length - this.match.length
                );
                return (
                  (t.length > 20 ? "..." : "") +
                  t.substr(-20).replace(/\n/g, "")
                );
              },
              upcomingInput: function() {
                var t = this.match;
                return (
                  t.length < 20 && (t += this._input.substr(0, 20 - t.length)),
                  (t.substr(0, 20) + (t.length > 20 ? "..." : "")).replace(
                    /\n/g,
                    ""
                  )
                );
              },
              showPosition: function() {
                var t = this.pastInput(),
                  e = new Array(t.length + 1).join("-");
                return t + this.upcomingInput() + "\n" + e + "^";
              },
              next: function() {
                if (this.done) return this.EOF;
                var t, e;
                this._input || (this.done = !0),
                  this._more || ((this.yytext = ""), (this.match = ""));
                for (var n = this._currentRules(), r = 0; r < n.length; r++)
                  if ((t = this._input.match(this.rules[n[r]])))
                    return (
                      (e = t[0].match(/\n.*/g)) && (this.yylineno += e.length),
                      (this.yylloc = {
                        first_line: this.yylloc.last_line,
                        last_line: this.yylineno + 1,
                        first_column: this.yylloc.last_column,
                        last_column: e
                          ? e[e.length - 1].length - 1
                          : this.yylloc.last_column + t[0].length
                      }),
                      (this.yytext += t[0]),
                      (this.match += t[0]),
                      (this.matches = t),
                      (this.yyleng = this.yytext.length),
                      (this._more = !1),
                      (this._input = this._input.slice(t[0].length)),
                      (this.matched += t[0]),
                      this.performAction.call(
                        this,
                        this.yy,
                        this,
                        n[r],
                        this.conditionStack[this.conditionStack.length - 1]
                      ) || void 0
                    );
                if ("" === this._input) return this.EOF;
                this.parseError(
                  "Lexical error on line " +
                    (this.yylineno + 1) +
                    ". Unrecognized text.\n" +
                    this.showPosition(),
                  { text: "", token: null, line: this.yylineno }
                );
              },
              lex: function() {
                var t = this.next();
                return void 0 !== t ? t : this.lex();
              },
              begin: function(t) {
                this.conditionStack.push(t);
              },
              popState: function() {
                return this.conditionStack.pop();
              },
              _currentRules: function() {
                return this.conditions[
                  this.conditionStack[this.conditionStack.length - 1]
                ].rules;
              },
              topState: function() {
                return this.conditionStack[this.conditionStack.length - 2];
              },
              pushState: function(t) {
                this.begin(t);
              },
              performAction: function(t, e, n, r) {
                switch (n) {
                  case 0:
                    break;
                  case 1:
                    return 20;
                  case 2:
                    return 19;
                  case 3:
                    return 8;
                  case 4:
                    return 9;
                  case 5:
                    return 6;
                  case 6:
                    return 7;
                  case 7:
                    return 11;
                  case 8:
                    return 13;
                  case 9:
                    return 10;
                  case 10:
                    return 12;
                  case 11:
                    return 14;
                  case 12:
                    return 15;
                  case 13:
                    return 16;
                  case 14:
                    return 17;
                  case 15:
                    return 18;
                  case 16:
                    return 5;
                  case 17:
                    return "INVALID";
                }
              },
              rules: [
                /^\s+/,
                /^[0-9]+(\.[0-9]+)?\b/,
                /^n\b/,
                /^\|\|/,
                /^&&/,
                /^\?/,
                /^:/,
                /^<=/,
                /^>=/,
                /^</,
                /^>/,
                /^!=/,
                /^==/,
                /^%/,
                /^\(/,
                /^\)/,
                /^$/,
                /^./
              ],
              conditions: {
                INITIAL: {
                  rules: [
                    0,
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9,
                    10,
                    11,
                    12,
                    13,
                    14,
                    15,
                    16,
                    17
                  ],
                  inclusive: !0
                }
              }
            };
            return t;
          })()),
          (m.lexer = g),
          m)),
          t.exports && (e = t.exports = p),
          (e.Jed = p);
      })();
    },
    79: function(t, e) {
      var n = 1e3,
        r = 6e4,
        i = 36e5,
        o = 24 * i;
      function s(t, e, n, r) {
        var i = e >= 1.5 * n;
        return Math.round(t / n) + " " + r + (i ? "s" : "");
      }
      t.exports = function(t, e) {
        e = e || {};
        var a = typeof t;
        if ("string" === a && t.length > 0)
          return (function(t) {
            if ((t = String(t)).length > 100) return;
            var e = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
              t
            );
            if (!e) return;
            var s = parseFloat(e[1]);
            switch ((e[2] || "ms").toLowerCase()) {
              case "years":
              case "year":
              case "yrs":
              case "yr":
              case "y":
                return 315576e5 * s;
              case "weeks":
              case "week":
              case "w":
                return 6048e5 * s;
              case "days":
              case "day":
              case "d":
                return s * o;
              case "hours":
              case "hour":
              case "hrs":
              case "hr":
              case "h":
                return s * i;
              case "minutes":
              case "minute":
              case "mins":
              case "min":
              case "m":
                return s * r;
              case "seconds":
              case "second":
              case "secs":
              case "sec":
              case "s":
                return s * n;
              case "milliseconds":
              case "millisecond":
              case "msecs":
              case "msec":
              case "ms":
                return s;
              default:
                return;
            }
          })(t);
        if ("number" === a && isFinite(t))
          return e.long
            ? (function(t) {
                var e = Math.abs(t);
                if (e >= o) return s(t, e, o, "day");
                if (e >= i) return s(t, e, i, "hour");
                if (e >= r) return s(t, e, r, "minute");
                if (e >= n) return s(t, e, n, "second");
                return t + " ms";
              })(t)
            : (function(t) {
                var e = Math.abs(t);
                if (e >= o) return Math.round(t / o) + "d";
                if (e >= i) return Math.round(t / i) + "h";
                if (e >= r) return Math.round(t / r) + "m";
                if (e >= n) return Math.round(t / n) + "s";
                return t + "ms";
              })(t);
        throw new Error(
          "val is not a non-empty string or a valid number. val=" +
            JSON.stringify(t)
        );
      };
    },
    80: function(t, e, n) {
      "use strict";
      var r = n(97),
        i = n(96);
      function o(t, e) {
        return (
          55296 == (64512 & t.charCodeAt(e)) &&
          (!(e < 0 || e + 1 >= t.length) &&
            56320 == (64512 & t.charCodeAt(e + 1)))
        );
      }
      function s(t) {
        return (
          ((t >>> 24) |
            ((t >>> 8) & 65280) |
            ((t << 8) & 16711680) |
            ((255 & t) << 24)) >>>
          0
        );
      }
      function a(t) {
        return 1 === t.length ? "0" + t : t;
      }
      function c(t) {
        return 7 === t.length
          ? "0" + t
          : 6 === t.length
          ? "00" + t
          : 5 === t.length
          ? "000" + t
          : 4 === t.length
          ? "0000" + t
          : 3 === t.length
          ? "00000" + t
          : 2 === t.length
          ? "000000" + t
          : 1 === t.length
          ? "0000000" + t
          : t;
      }
      (e.inherits = i),
        (e.toArray = function(t, e) {
          if (Array.isArray(t)) return t.slice();
          if (!t) return [];
          var n = [];
          if ("string" == typeof t)
            if (e) {
              if ("hex" === e)
                for (
                  (t = t.replace(/[^a-z0-9]+/gi, "")).length % 2 != 0 &&
                    (t = "0" + t),
                    i = 0;
                  i < t.length;
                  i += 2
                )
                  n.push(parseInt(t[i] + t[i + 1], 16));
            } else
              for (var r = 0, i = 0; i < t.length; i++) {
                var s = t.charCodeAt(i);
                s < 128
                  ? (n[r++] = s)
                  : s < 2048
                  ? ((n[r++] = (s >> 6) | 192), (n[r++] = (63 & s) | 128))
                  : o(t, i)
                  ? ((s =
                      65536 + ((1023 & s) << 10) + (1023 & t.charCodeAt(++i))),
                    (n[r++] = (s >> 18) | 240),
                    (n[r++] = ((s >> 12) & 63) | 128),
                    (n[r++] = ((s >> 6) & 63) | 128),
                    (n[r++] = (63 & s) | 128))
                  : ((n[r++] = (s >> 12) | 224),
                    (n[r++] = ((s >> 6) & 63) | 128),
                    (n[r++] = (63 & s) | 128));
              }
          else for (i = 0; i < t.length; i++) n[i] = 0 | t[i];
          return n;
        }),
        (e.toHex = function(t) {
          for (var e = "", n = 0; n < t.length; n++) e += a(t[n].toString(16));
          return e;
        }),
        (e.htonl = s),
        (e.toHex32 = function(t, e) {
          for (var n = "", r = 0; r < t.length; r++) {
            var i = t[r];
            "little" === e && (i = s(i)), (n += c(i.toString(16)));
          }
          return n;
        }),
        (e.zero2 = a),
        (e.zero8 = c),
        (e.join32 = function(t, e, n, i) {
          var o = n - e;
          r(o % 4 == 0);
          for (
            var s = new Array(o / 4), a = 0, c = e;
            a < s.length;
            a++, c += 4
          ) {
            var l;
            (l =
              "big" === i
                ? (t[c] << 24) | (t[c + 1] << 16) | (t[c + 2] << 8) | t[c + 3]
                : (t[c + 3] << 24) | (t[c + 2] << 16) | (t[c + 1] << 8) | t[c]),
              (s[a] = l >>> 0);
          }
          return s;
        }),
        (e.split32 = function(t, e) {
          for (
            var n = new Array(4 * t.length), r = 0, i = 0;
            r < t.length;
            r++, i += 4
          ) {
            var o = t[r];
            "big" === e
              ? ((n[i] = o >>> 24),
                (n[i + 1] = (o >>> 16) & 255),
                (n[i + 2] = (o >>> 8) & 255),
                (n[i + 3] = 255 & o))
              : ((n[i + 3] = o >>> 24),
                (n[i + 2] = (o >>> 16) & 255),
                (n[i + 1] = (o >>> 8) & 255),
                (n[i] = 255 & o));
          }
          return n;
        }),
        (e.rotr32 = function(t, e) {
          return (t >>> e) | (t << (32 - e));
        }),
        (e.rotl32 = function(t, e) {
          return (t << e) | (t >>> (32 - e));
        }),
        (e.sum32 = function(t, e) {
          return (t + e) >>> 0;
        }),
        (e.sum32_3 = function(t, e, n) {
          return (t + e + n) >>> 0;
        }),
        (e.sum32_4 = function(t, e, n, r) {
          return (t + e + n + r) >>> 0;
        }),
        (e.sum32_5 = function(t, e, n, r, i) {
          return (t + e + n + r + i) >>> 0;
        }),
        (e.sum64 = function(t, e, n, r) {
          var i = t[e],
            o = (r + t[e + 1]) >>> 0,
            s = (o < r ? 1 : 0) + n + i;
          (t[e] = s >>> 0), (t[e + 1] = o);
        }),
        (e.sum64_hi = function(t, e, n, r) {
          return (((e + r) >>> 0 < e ? 1 : 0) + t + n) >>> 0;
        }),
        (e.sum64_lo = function(t, e, n, r) {
          return (e + r) >>> 0;
        }),
        (e.sum64_4_hi = function(t, e, n, r, i, o, s, a) {
          var c = 0,
            l = e;
          return (
            (c += (l = (l + r) >>> 0) < e ? 1 : 0),
            (c += (l = (l + o) >>> 0) < o ? 1 : 0),
            (t + n + i + s + (c += (l = (l + a) >>> 0) < a ? 1 : 0)) >>> 0
          );
        }),
        (e.sum64_4_lo = function(t, e, n, r, i, o, s, a) {
          return (e + r + o + a) >>> 0;
        }),
        (e.sum64_5_hi = function(t, e, n, r, i, o, s, a, c, l) {
          var u = 0,
            p = e;
          return (
            (u += (p = (p + r) >>> 0) < e ? 1 : 0),
            (u += (p = (p + o) >>> 0) < o ? 1 : 0),
            (u += (p = (p + a) >>> 0) < a ? 1 : 0),
            (t + n + i + s + c + (u += (p = (p + l) >>> 0) < l ? 1 : 0)) >>> 0
          );
        }),
        (e.sum64_5_lo = function(t, e, n, r, i, o, s, a, c, l) {
          return (e + r + o + a + l) >>> 0;
        }),
        (e.rotr64_hi = function(t, e, n) {
          return ((e << (32 - n)) | (t >>> n)) >>> 0;
        }),
        (e.rotr64_lo = function(t, e, n) {
          return ((t << (32 - n)) | (e >>> n)) >>> 0;
        }),
        (e.shr64_hi = function(t, e, n) {
          return t >>> n;
        }),
        (e.shr64_lo = function(t, e, n) {
          return ((t << (32 - n)) | (e >>> n)) >>> 0;
        });
    },
    85: function(t, e, n) {
      var r = n(3);
      t.exports = function(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? Object(arguments[e]) : {},
            i = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
              Object.getOwnPropertySymbols(n).filter(function(t) {
                return Object.getOwnPropertyDescriptor(n, t).enumerable;
              })
            )),
            i.forEach(function(e) {
              r(t, e, n[e]);
            });
        }
        return t;
      };
    },
    87: function(t, e) {
      t.exports = function(t) {
        if (Array.isArray(t)) return t;
      };
    },
    88: function(t, e) {
      t.exports = function(t, e) {
        if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) {
          var n = [],
            r = !0,
            i = !1,
            o = void 0;
          try {
            for (
              var s, a = t[Symbol.iterator]();
              !(r = (s = a.next()).done) &&
              (n.push(s.value), !e || n.length !== e);
              r = !0
            );
          } catch (c) {
            (i = !0), (o = c);
          } finally {
            try {
              r || null == a.return || a.return();
            } finally {
              if (i) throw o;
            }
          }
          return n;
        }
      };
    },
    89: function(t, e) {
      t.exports = function() {
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      };
    },
    9: function(t, e, n) {
      var r = n(3);
      function i(t, e) {
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
            ? i(Object(n), !0).forEach(function(e) {
                r(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : i(Object(n)).forEach(function(e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      };
    },
    95: function(t, e, n) {
      "use strict";
      function r(t) {
        return function() {
          return t;
        };
      }
      var i = function() {};
      (i.thatReturns = r),
        (i.thatReturnsFalse = r(!1)),
        (i.thatReturnsTrue = r(!0)),
        (i.thatReturnsNull = r(null)),
        (i.thatReturnsThis = function() {
          return this;
        }),
        (i.thatReturnsArgument = function(t) {
          return t;
        }),
        (t.exports = i);
    },
    96: function(t, e) {
      "function" == typeof Object.create
        ? (t.exports = function(t, e) {
            e &&
              ((t.super_ = e),
              (t.prototype = Object.create(e.prototype, {
                constructor: {
                  value: t,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0
                }
              })));
          })
        : (t.exports = function(t, e) {
            if (e) {
              t.super_ = e;
              var n = function() {};
              (n.prototype = e.prototype),
                (t.prototype = new n()),
                (t.prototype.constructor = t);
            }
          });
    },
    97: function(t, e) {
      function n(t, e) {
        if (!t) throw new Error(e || "Assertion failed");
      }
      (t.exports = n),
        (n.equal = function(t, e, n) {
          if (t != e)
            throw new Error(n || "Assertion failed: " + t + " != " + e);
        });
    },
    98: function(t, e, n) {
      "use strict";
      function r(t) {
        return (r =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function(t) {
                return typeof t;
              }
            : function(t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      (e.log = function() {
        var t;
        return (
          "object" ===
            ("undefined" == typeof console ? "undefined" : r(console)) &&
          console.log &&
          (t = console).log.apply(t, arguments)
        );
      }),
        (e.formatArgs = function(e) {
          if (
            ((e[0] =
              (this.useColors ? "%c" : "") +
              this.namespace +
              (this.useColors ? " %c" : " ") +
              e[0] +
              (this.useColors ? "%c " : " ") +
              "+" +
              t.exports.humanize(this.diff)),
            !this.useColors)
          )
            return;
          var n = "color: " + this.color;
          e.splice(1, 0, n, "color: inherit");
          var r = 0,
            i = 0;
          e[0].replace(/%[a-zA-Z%]/g, function(t) {
            "%%" !== t && (r++, "%c" === t && (i = r));
          }),
            e.splice(i, 0, n);
        }),
        (e.save = function(t) {
          try {
            t ? e.storage.setItem("debug", t) : e.storage.removeItem("debug");
          } catch (n) {}
        }),
        (e.load = function() {
          var t;
          try {
            t = e.storage.getItem("debug");
          } catch (n) {}
          !t &&
            "undefined" != typeof process &&
            "env" in process &&
            (t = process.env.DEBUG);
          return t;
        }),
        (e.useColors = function() {
          if (
            "undefined" != typeof window &&
            window.process &&
            ("renderer" === window.process.type || window.process.__nwjs)
          )
            return !0;
          if (
            "undefined" != typeof navigator &&
            navigator.userAgent &&
            navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)
          )
            return !1;
          return (
            ("undefined" != typeof document &&
              document.documentElement &&
              document.documentElement.style &&
              document.documentElement.style.WebkitAppearance) ||
            ("undefined" != typeof window &&
              window.console &&
              (window.console.firebug ||
                (window.console.exception && window.console.table))) ||
            ("undefined" != typeof navigator &&
              navigator.userAgent &&
              navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) &&
              parseInt(RegExp.$1, 10) >= 31) ||
            ("undefined" != typeof navigator &&
              navigator.userAgent &&
              navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))
          );
        }),
        (e.storage = (function() {
          try {
            return localStorage;
          } catch (t) {}
        })()),
        (e.colors = [
          "#0000CC",
          "#0000FF",
          "#0033CC",
          "#0033FF",
          "#0066CC",
          "#0066FF",
          "#0099CC",
          "#0099FF",
          "#00CC00",
          "#00CC33",
          "#00CC66",
          "#00CC99",
          "#00CCCC",
          "#00CCFF",
          "#3300CC",
          "#3300FF",
          "#3333CC",
          "#3333FF",
          "#3366CC",
          "#3366FF",
          "#3399CC",
          "#3399FF",
          "#33CC00",
          "#33CC33",
          "#33CC66",
          "#33CC99",
          "#33CCCC",
          "#33CCFF",
          "#6600CC",
          "#6600FF",
          "#6633CC",
          "#6633FF",
          "#66CC00",
          "#66CC33",
          "#9900CC",
          "#9900FF",
          "#9933CC",
          "#9933FF",
          "#99CC00",
          "#99CC33",
          "#CC0000",
          "#CC0033",
          "#CC0066",
          "#CC0099",
          "#CC00CC",
          "#CC00FF",
          "#CC3300",
          "#CC3333",
          "#CC3366",
          "#CC3399",
          "#CC33CC",
          "#CC33FF",
          "#CC6600",
          "#CC6633",
          "#CC9900",
          "#CC9933",
          "#CCCC00",
          "#CCCC33",
          "#FF0000",
          "#FF0033",
          "#FF0066",
          "#FF0099",
          "#FF00CC",
          "#FF00FF",
          "#FF3300",
          "#FF3333",
          "#FF3366",
          "#FF3399",
          "#FF33CC",
          "#FF33FF",
          "#FF6600",
          "#FF6633",
          "#FF9900",
          "#FF9933",
          "#FFCC00",
          "#FFCC33"
        ]),
        (t.exports = n(163)(e)),
        (t.exports.formatters.j = function(t) {
          try {
            return JSON.stringify(t);
          } catch (e) {
            return "[UnexpectedJSONParseError]: " + e.message;
          }
        });
    },
    99: function(t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      var r =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function(t) {
                return typeof t;
              }
            : function(t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              },
        i = a(n(25)),
        o = a(n(164)),
        s = a(n(167));
      function a(t) {
        return t && t.__esModule ? t : { default: t };
      }
      var c = void 0;
      function l(t, e) {
        var n,
          s,
          a,
          u,
          p,
          h,
          f,
          m,
          g = [],
          d = {};
        for (h = 0; h < t.length; h++)
          if ("string" !== (p = t[h]).type) {
            if (!e.hasOwnProperty(p.value) || void 0 === e[p.value])
              throw new Error(
                "Invalid interpolation, missing component node: `" +
                  p.value +
                  "`"
              );
            if ("object" !== r(e[p.value]))
              throw new Error(
                "Invalid interpolation, component node must be a ReactElement or null: `" +
                  p.value +
                  "`",
                "\n> " + c
              );
            if ("componentClose" === p.type)
              throw new Error(
                "Missing opening component token: `" + p.value + "`"
              );
            if ("componentOpen" === p.type) {
              (n = e[p.value]), (a = h);
              break;
            }
            g.push(e[p.value]);
          } else g.push(p.value);
        return (
          n &&
            ((u = (function(t, e) {
              var n,
                r,
                i = e[t],
                o = 0;
              for (r = t + 1; r < e.length; r++)
                if ((n = e[r]).value === i.value) {
                  if ("componentOpen" === n.type) {
                    o++;
                    continue;
                  }
                  if ("componentClose" === n.type) {
                    if (0 === o) return r;
                    o--;
                  }
                }
              throw new Error(
                "Missing closing component token `" + i.value + "`"
              );
            })(a, t)),
            (f = l(t.slice(a + 1, u), e)),
            (s = i.default.cloneElement(n, {}, f)),
            g.push(s),
            u < t.length - 1 &&
              ((m = l(t.slice(u + 1), e)), (g = g.concat(m)))),
          1 === g.length
            ? g[0]
            : (g.forEach(function(t, e) {
                t && (d["interpolation-child-" + e] = t);
              }),
              (0, o.default)(d))
        );
      }
      e.default = function(t) {
        var e = t.mixedString,
          n = t.components,
          i = t.throwErrors;
        if (((c = e), !n)) return e;
        if ("object" !== (void 0 === n ? "undefined" : r(n))) {
          if (i)
            throw new Error(
              "Interpolation Error: unable to process `" +
                e +
                "` because components is not an object"
            );
          return e;
        }
        var o = (0, s.default)(e);
        try {
          return l(o, n);
        } catch (a) {
          if (i)
            throw new Error(
              "Interpolation Error: unable to process `" +
                e +
                "` because of error `" +
                a.message +
                "`"
            );
          return e;
        }
      };
    }
  })
);
