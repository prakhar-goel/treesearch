! function(e, n) {
    "object" == typeof exports ? module.exports = n(require("bluebird")) : "function" == typeof define && define.amd ? define(["bluebird"], n) : e.TreeLookup = n(e.Promise)
}(this, function(e) {
    function n(e) {
        return {
            1: {
                2: {
                    4: {},
                    6: {},
                    8: {},
                    10: {},
                    12: {}
                },
                3: {
                    6: {},
                    9: {},
                    12: {},
                    15: {}
                },
                4: {
                    8: {},
                    12: {},
                    16: {},
                    20: {},
                    24: {},
                    28: {}
                }
            },
            2: {
                4: {},
                8: {
                    16: {},
                    24: {}
                },
                12: {
                    24: {}
                }
            },
            3: {
                6: {
                    12: {},
                    18: {},
                    24: {},
                    30: {}
                },
                9: {
                    18: {},
                    27: {}
                },
                12: {
                    24: {},
                    36: {}
                }
            },
            4: {
                8: {},
                12: {},
                16: {
                    32: {}
                },
                20: {},
                24: {},
                28: {},
                32: {}
            },
            5: {
                10: {},
                15: {},
                20: {},
                25: {}
            },
            7: {
                14: {
                    28: {}
                },
                21: {}
            },
            11: {
                22: {},
                33: {}
            },
            13: {
                26: {}
            },
            17: {}
        }
    }
    function t() {
    	var that = this;
        function t(e) {
            for (var n, t, o = e.split("/"), r = that.i; o.length;)
                if (n = o.shift(), "" !== n) {
                    if (t = r, t = t[n], void 0 === t) break;
                    r = t
                }
            return Object.keys(r)
        }
        this.i = n();
        this.getChildrenAsCallback = function(e, n) {
            setTimeout(function() {
                n(null, t(e))
            }, 0)
        }, this.getChildrenAsPromise = function(n) {
            return new e(function(e) {
                setTimeout(function() {
                    e(t(n))
                }, 0)
            })
        }
    }
    return t
});