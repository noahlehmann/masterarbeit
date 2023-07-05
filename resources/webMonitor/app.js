// pi@raspberrypi:~/Unitree/autostart/webMonitor/dist/js $ cat app.f4d15b77.js
(function (e) {
    function t(t) {
        for (var a, r, i = t[0], s = t[1], u = t[2], l = 0, d = []; l < i.length; l++) r = i[l], Object.prototype.hasOwnProperty.call(o, r) && o[r] && d.push(o[r][0]), o[r] = 0;
        for (a in s) Object.prototype.hasOwnProperty.call(s, a) && (e[a] = s[a]);
        b && b(t);
        while (d.length) d.shift()();
        return c.push.apply(c, u || []), n()
    }

    function n() {
        for (var e, t = 0; t < c.length; t++) {
            for (var n = c[t], a = !0, r = 1; r < n.length; r++) {
                var i = n[r];
                0 !== o[i] && (a = !1)
            }
            a && (c.splice(t--, 1), e = s(s.s = n[0]))
        }
        return e
    }

    var a = {},
        r = {
            app: 0
        },
        o = {
            app: 0
        },
        c = [];

    function i(e) {
        return s.p + "js/" + ({} [e] || e) + "." + {
            "chunk-04ac9cd6": "b89fdef0",
            "chunk-1ebc3770": "bd14e281",
            "chunk-6c37cab8": "166708c9",
            "chunk-6dc1b143": "582e9f39",
            "chunk-71a28319": "3e2ccd77",
            "chunk-ab73ca30": "b65f7572",
            "chunk-3caf6fe5": "e09948eb",
            "chunk-aec47eca": "a021e232",
            "chunk-6d08177a": "7edd456c",
            "chunk-af2f1c00": "88132662"
        } [e] + ".js"
    }

    function s(t) {
        if (a[t]) return a[t].exports;
        var n = a[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(n.exports, n, n.exports, s), n.l = !0, n.exports
    }

    s.e = function (e) {
        var t = [],
            n = {
                "chunk-04ac9cd6": 1,
                "chunk-1ebc3770": 1,
                "chunk-6c37cab8": 1,
                "chunk-6dc1b143": 1,
                "chunk-71a28319": 1,
                "chunk-3caf6fe5": 1,
                "chunk-aec47eca": 1,
                "chunk-6d08177a": 1,
                "chunk-af2f1c00": 1
            };
        r[e] ? t.push(r[e]) : 0 !== r[e] && n[e] && t.push(r[e] = new Promise((function (t, n) {
            for (var a = "css/" + ({} [e] || e) + "." + {
                "chunk-04ac9cd6": "8fd6d176",
                "chunk-1ebc3770": "6997a6e7",
                "chunk-6c37cab8": "2b3e555e",
                "chunk-6dc1b143": "c3414940",
                "chunk-71a28319": "1e1659f6",
                "chunk-ab73ca30": "31d6cfe0",
                "chunk-3caf6fe5": "58c34e7d",
                "chunk-aec47eca": "11d1fca0",
                "chunk-6d08177a": "06aeba93",
                "chunk-af2f1c00": "30f14adb"
            } [e] + ".css", o = s.p + a, c = document.getElementsByTagName("link"), i = 0; i < c.length; i++) {
                var u = c[i],
                    l = u.getAttribute("data-href") || u.getAttribute("href");
                if ("stylesheet" === u.rel && (l === a || l === o)) return t()
            }
            var d = document.getElementsByTagName("style");
            for (i = 0; i < d.length; i++) {
                u = d[i], l = u.getAttribute("data-href");
                if (l === a || l === o) return t()
            }
            var b = document.createElement("link");
            b.rel = "stylesheet", b.type = "text/css", b.onload = t, b.onerror = function (t) {
                var a = t && t.target && t.target.src || o,
                    c = new Error("Loading CSS chunk " + e + " failed.\n(" + a + ")");
                c.code = "CSS_CHUNK_LOAD_FAILED", c.request = a, delete r[e], b.parentNode.removeChild(b), n(c)
            }, b.href = o;
            var f = document.getElementsByTagName("head")[0];
            f.appendChild(b)
        })).then((function () {
            r[e] = 0
        })));
        var a = o[e];
        if (0 !== a)
            if (a) t.push(a[2]);
            else {
                var c = new Promise((function (t, n) {
                    a = o[e] = [t, n]
                }));
                t.push(a[2] = c);
                var u, l = document.createElement("script");
                l.charset = "utf-8", l.timeout = 120, s.nc && l.setAttribute("nonce", s.nc), l.src = i(e);
                var d = new Error;
                u = function (t) {
                    l.onerror = l.onload = null, clearTimeout(b);
                    var n = o[e];
                    if (0 !== n) {
                        if (n) {
                            var a = t && ("load" === t.type ? "missing" : t.type),
                                r = t && t.target && t.target.src;
                            d.message = "Loading chunk " + e + " failed.\n(" + a + ": " + r + ")", d.name = "ChunkLoadError", d.type = a, d.request = r, n[1](d)
                        }
                        o[e] = void 0
                    }
                };
                var b = setTimeout((function () {
                    u({
                        type: "timeout",
                        target: l
                    })
                }), 12e4);
                l.onerror = l.onload = u, document.head.appendChild(l)
            }
        return Promise.all(t)
    }, s.m = e, s.c = a, s.d = function (e, t, n) {
        s.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    }, s.r = function (e) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, s.t = function (e, t) {
        if (1 & t && (e = s(e)), 8 & t) return e;
        if (4 & t && "object" === typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (s.r(n), Object.defineProperty(n, "default", {
            enumerable: !0,
            value: e
        }), 2 & t && "string" != typeof e)
            for (var a in e) s.d(n, a, function (t) {
                return e[t]
            }.bind(null, a));
        return n
    }, s.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e["default"]
        } : function () {
            return e
        };
        return s.d(t, "a", t), t
    }, s.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, s.p = "", s.oe = function (e) {
        throw console.error(e), e
    };
    var u = window["webpackJsonp"] = window["webpackJsonp"] || [],
        l = u.push.bind(u);
    u.push = t, u = u.slice();
    for (var d = 0; d < u.length; d++) t(u[d]);
    var b = l;
    c.push([0, "chunk-vendors"]), n()
})({
    0: function (e, t, n) {
        e.exports = n("cd49")
    },
    1: function (e, t) {
    },
    "151e": function (e, t, n) {
        "use strict";
        n("28f1")
    },
    2: function (e, t) {
    },
    2591: function (e, t, n) {
    },
    "28f1": function (e, t, n) {
    },
    3: function (e, t) {
    },
    3504: function (e) {
        e.exports = JSON.parse('{"Update":"更新","Signal":"信号","BLEGamepad":"蓝牙手柄","GamepadList":"手柄列表","Battery":"电池","Speed":"速率","Address":"地址","Vision":"机器视觉","Simulator":"模拟器","PickTarget":"选点","Quit":"退出","Setting":"设置","Restart":"重启","Clean":"清理","Backend":"后台管理","SystemManager":"管理系统","Manager":"系统管理","VisionModule":"视觉模块","SlamModule":"Slam模块","Dance1":"舞蹈1","Dance2":"舞蹈2","Jump":"空中转体","Backflip":"后空翻","Praying":"拜年","Damping":"阻尼","StandUp":"站高","StandDown":"站低","Stand":"站立","Walk":"行走","Run":"奔跑","Climb":"攀爬","Recover":"恢复站立","IpPort":"IP/端口","Firmware":"固件信息","BMS":"电池管理","Peripherals":"外设管理","Addons":"附件功能","IpAddress":"IP地址","Port":"端口","Reset":"重置","BluetoothGamepad":"蓝牙手柄","MainBoard":"主控","MqttServer":"MQTT服务器","Version":"版本","Status":"状态","SOC":"电量","Current":"电流","Cycles":"充放电","Voltage":"电压","NumKey":"数字键","RobotId":"机器狗ID","RightForeleg":"右前腿","LeftForeleg":"左前腿","RightHindLeg":"右后腿","LeftHindLeg":"左后腿","BatteryOff":"关闭电池","RobotController":"机器人控制器","UpdatePackage":"软件包更新","UpdateFirmware":"固件更新","USBGamepadOn":"USB手柄开启","Product":"产品","Hardware":"硬件","Software":"软件","MotorTemperature":"电机温度","LF":"左前","LR":"左后","RF":"右前","RR":"右后","Hip":"髋部","Thigh":"大腿","Calf":"小腿"}')
    },
    3616: function (e, t, n) {
        "use strict";
        n("a4d3"), n("e01a"), n("c975"), n("d3b7");
        var a = n("7a23"),
            r = function (e) {
                return {
                    locale: Object(a["w"])(e.locale),
                    messages: e.messages,
                    $t: function (e) {
                        return this.messages[this.locale.value][e]
                    }
                }
            },
            o = Symbol(),
            c = {
                provide: function (e) {
                    var t = r(e),
                        n = navigator.language.indexOf("zh") >= 0 ? "zh" : "en";
                    console.log(n), t.locale.value = n, Object(a["t"])(o, t)
                },
                use: function () {
                    var e = Object(a["k"])(o);
                    if (!e) throw new Error("No i18n provided!!!");
                    return e
                }
            };
        t["a"] = c
    },
    "3bfa": function (e, t, n) {
        "use strict";
        n("a4d3"), n("e01a"), n("c19f"), n("d3b7"), n("25f0"), n("5cc6"), n("9a8c"), n("a975"), n("735e"), n("c1ac"), n("d139"), n("3a7b"), n("d5d6"), n("82f8"), n("e91f"), n("60bd"), n("5f96"), n("3280"), n("3fcc"), n("ca91"), n("25a1"), n("cd26"), n("3c5d"), n("2954"), n("649e"), n("219c"), n("170b"), n("b39a"), n("72f7");
        var a = n("e7fc"),
            r = n.n(a),
            o = n("7a23"),
            c = (n("cb29"), {
                mqttConnected: !1,
                managerOn: !1,
                controllerOn: !1,
                usys: {
                    isUpdating: !1,
                    deletedFile: "",
                    updateProgress: 0,
                    updateMsg: ""
                },
                slam: {
                    pos: {
                        position: {
                            x: 0,
                            y: 0,
                            z: 0
                        },
                        orientation: {
                            x: 0,
                            y: 0,
                            z: 0,
                            w: 0
                        }
                    },
                    targets: [],
                    run: !1,
                    looping: !1,
                    targetIndex: 0
                },
                vision: {
                    aiMode: "MNFH"
                },
                bms: {
                    version: "unknown",
                    status: 0,
                    soc: 0,
                    current: 0,
                    cycle: 0,
                    temps: new Array(4).fill(0),
                    voltage: 0,
                    cellVoltages: new Array(10).fill(0)
                },
                robot: {
                    version: {
                        hardware: "--",
                        software: "--"
                    },
                    sn: {
                        product: "--",
                        id: "--"
                    },
                    temps: new Array(20).fill(0),
                    mode: 0,
                    gaitType: 0,
                    obstacles: [255, 255, 255, 255],
                    state: "invalid",
                    distanceWarning: {
                        front: 0,
                        back: 0,
                        left: 0,
                        right: 0
                    }
                }
            }),
            i = JSON.stringify(c),
            s = function () {
                return JSON.parse(i)
            },
            u = n("5530"),
            l = {
                "slam/position": function (e, t, n) {
                    var a = function (e) {
                        return n.getFloat64(8 * e, !0)
                    };
                    e.slam.pos = {
                        position: {
                            x: a(0),
                            y: a(1),
                            z: a(2)
                        },
                        orientation: {
                            x: a(3),
                            y: a(4),
                            z: a(5),
                            w: a(6)
                        }
                    }
                },
                "slam/targets": function (e, t, n) {
                    var a = function (e) {
                        return n.getFloat64(8 * e, !0)
                    };
                    e.slam.targets = [];
                    for (var r = 0; r < t.byteLength / 8; r += 7) e.slam.targets.push({
                        position: {
                            x: a(r),
                            y: a(r + 1),
                            z: a(r + 2)
                        },
                        orientation: {
                            x: a(r + 3),
                            y: a(r + 4),
                            z: a(r + 5),
                            w: a(r + 6)
                        }
                    })
                },
                "slam/run": function (e, t) {
                    e.slam.run = t.byteLength > 0, 0 === t.byteLength && (e.slam.targets = [])
                },
                "slam/target_index": function (e, t, n) {
                    e.slam.targetIndex = t.byteLength > 0 ? n.getUint8(0) : 0
                },
                "slam/looping": function (e, t) {
                    e.slam.looping = t.byteLength > 0
                }
            },
            d = l,
            b = n("1386"),
            f = n.n(b),
            g = (new f.a, {
                "usys/run": function (e, t) {
                    e.managerOn = t.byteLength > 0
                }
            }),
            p = g,
            m = {
                "vision/ai_mode": function (e, t) {
                    e.vision.aiMode = t.toString()
                }
            },
            h = m,
            O = (n("13d5"), {
                "bms/state": function (e, t, n) {
                    var a = new Uint8Array(t);
                    e.bms.version = a[0] + "." + a[1], e.bms.status = a[2], e.bms.soc = a[3], e.bms.current = n.getInt32(4, !0), e.bms.cycle = n.getUint16(8, !0), e.bms.temps = [a[10], a[11], a[12], a[13]];
                    for (var r = 0; r < 10; r++) e.bms.cellVoltages[r] = n.getUint16(14 + 2 * r, !0);
                    e.bms.voltage = e.bms.cellVoltages.reduce((function (e, t) {
                        return e + t
                    }))
                }
            }),
            v = O;
        n("d81d");

        function j(e) {
            return e > 30 ? 0 : e < 10 ? 1 : .2 + .8 * (30 - e) / 20
        }

        var y = {
                "firmware/version": function (e, t, n) {
                    if (e.robot.temps = e.robot.temps.map((function (e, t) {
                        return n.getUint8(t + 8)
                    })), n.byteLength > 28 && (e.robot.mode = n.getUint8(28), e.robot.gaitType = n.getUint8(29), e.robot.obstacles = e.robot.obstacles.map((function (e, t) {
                        return n.getUint8(t + 30)
                    })), 2 === e.robot.mode && (2 === e.robot.gaitType ? e.robot.state = "run" : 3 === e.robot.gaitType ? e.robot.state = "climb" : 1 === e.robot.gaitType && (e.robot.state = "walk")), e.robot.distanceWarning = {
                        front: j(e.robot.obstacles[0]),
                        back: j(e.robot.obstacles[3]),
                        left: j(e.robot.obstacles[1]),
                        right: j(e.robot.obstacles[2])
                    }), n.byteLength >= 44) {
                        var a = "";
                        switch (n.getUint8(0)) {
                            case 1:
                                a = "Laikago";
                                break;
                            case 2:
                                a = "Aliengo";
                                break;
                            case 3:
                                a = "A1";
                                break;
                            case 4:
                                a = "Go1";
                                break;
                            case 5:
                                a = "B1";
                                break
                        }
                        var r = "";
                        switch (n.getUint8(1)) {
                            case 1:
                                r = "AIR";
                                break;
                            case 2:
                                r = "PRO";
                                break;
                            case 3:
                                r = "EDU";
                                break;
                            case 4:
                                r = "PC";
                                break;
                            case 5:
                                r = "XX";
                                break
                        }
                        "" != a && (e.robot.sn.product = a + "_" + r), n.getUint8(2) < 255 && (e.robot.sn.id = n.getUint8(2) + "-" + n.getUint8(3) + "-" + n.getUint8(4) + "[" + n.getUint8(5) + "]"), n.getUint8(36) < 255 && (e.robot.version.hardware = n.getUint8(36) + "." + n.getUint8(37) + "." + n.getUint8(38)), e.robot.version.software = n.getUint8(39) + "." + n.getUint8(40) + "." + n.getUint8(41)
                    }
                }
            },
            k = y,
            S = {
                "controller/run": function (e, t) {
                    if (e.controllerOn = t.byteLength > 0, !e.controllerOn) {
                        var n = s();
                        e.bms = n.bms, e.robot = n.robot
                    }
                },
                "controller/current_action": function (e, t) {
                    console.log(t)
                },
                "controller/progress": function (e, t) {
                    console.log(t)
                }
            },
            w = S,
            U = Object(u["a"])(Object(u["a"])(Object(u["a"])(Object(u["a"])(Object(u["a"])(Object(u["a"])({}, d), p), h), v), k), w);

        function P(e, t, n) {
            var a = e,
                r = new DataView(t.buffer, t.byteOffset, t.byteLength),
                o = U[a];
            o ? o(n, t, r) : console.log(t)
        }

        var A = null,
            M = {
                data: Object(o["v"])(s()),
                connect: function (e) {
                    A && A.end();
                    var t = "UApp_" + Math.random().toString(16).substr(2, 8);
                    A = r.a.connect(e, {
                        clientId: t,
                        keepalive: 5,
                        will: {
                            topic: "appStatus",
                            payload: "disconnect_" + t,
                            retain: !0,
                            qos: 1
                        }
                    }), A.on("connect", (function () {
                        M.data.mqttConnected = !0, M.subscribe(["slam/run", "usys/run", "bms/state", "firmware/version", "controller/run"], {
                            qos: 1
                        })
                    })), A.on("message", (function (e, t) {
                        P(e, t, M.data)
                    })), A.on("close", (function () {
                        Object.assign(M.data, s())
                    }))
                },
                subscribe: function (e, t) {
                    var n;
                    null === (n = A) || void 0 === n || n.subscribe(e, t)
                },
                unsubscribe: function (e) {
                    var t;
                    null === (t = A) || void 0 === t || t.unsubscribe(e)
                },
                publish: function (e, t, n) {
                    var a;
                    if ("string" === typeof t || t instanceof Uint8Array) null === (a = A) || void 0 === a || a.publish(e, t, n);
                    else if (t instanceof ArrayBuffer) {
                        var r;
                        null === (r = A) || void 0 === r || r.publish(e, new Uint8Array(t), n)
                    }
                }
            },
            R = Symbol(),
            L = {
                provide: function () {
                    var e = "https:" === window.location.protocol ? "wss://" : "ws://";
                    M.connect(e + window.location.host + "/mqtt"), Object(o["t"])(R, M)
                },
                use: function () {
                    var e = Object(o["k"])(R);
                    if (!e) throw new Error("No mqtt provided!!!");
                    return e
                }
            };
        t["a"] = L
    },
    4: function (e, t) {
    },
    5: function (e, t) {
    },
    6: function (e, t) {
    },
    7: function (e, t) {
    },
    8: function (e, t) {
    },
    b263: function (e, t, n) {
        "use strict";
        n("e222")
    },
    bd0d: function (e, t, n) {
        "use strict";
        n("2591")
    },
    cd49: function (e, t, n) {
        "use strict";
        n.r(t);
        n("e260"), n("e6cf"), n("cca6"), n("a79d"), n("becf"), n("eb46");
        var a = n("7a23"),
            r = {
                id: "app"
            },
            o = {
                class: "columns is-mobile",
                style: {
                    margin: "0px"
                }
            },
            c = {
                class: "sidenav column",
                style: {
                    position: "relative"
                }
            },
            i = {
                style: {
                    "font-size": "large"
                }
            },
            s = Object(a["f"])(" Unitree Robotics "),
            u = {
                class: "maincontent column",
                style: {
                    padding: "0px"
                }
            };

        function l(e, t, n, l, d, b) {
            var f = Object(a["y"])("mqtt-connetion"),
                g = Object(a["y"])("side-nav"),
                p = Object(a["y"])("router-view");
            return Object(a["r"])(), Object(a["d"])("div", r, [Object(a["g"])("div", o, [Object(a["g"])("section", c, [Object(a["g"])("h1", i, [s, Object(a["g"])(f, {
                id: "mqttConnection"
            })]), Object(a["g"])(g)]), Object(a["g"])("section", u, [Object(a["g"])(p)])])])
        }

        var d = n("3616"),
            b = n("3bfa"),
            f = n("edd4"),
            g = n("3504"),
            p = {
                key: 0,
                class: "fa fa-link",
                style: {
                    color: "green"
                }
            },
            m = {
                key: 1,
                class: "fa fa-unlink"
            };

        function h(e, t, n, r, o, c) {
            return e.mqtt.data.mqttConnected ? (Object(a["r"])(), Object(a["d"])("i", p)) : (Object(a["r"])(), Object(a["d"])("i", m))
        }

        var O = Object(a["h"])({
            name: "MqttConnetion",
            setup: function () {
                var e = b["a"].use();
                return {
                    mqtt: e
                }
            }
        });
        O.render = h;
        var v = O,
            j = Object(a["G"])("data-v-2185fd68");
        Object(a["u"])("data-v-2185fd68");
        var y = Object(a["g"])("i", {
                class: "fa fa-tachometer-alt"
            }, null, -1),
            k = Object(a["g"])("i", {
                class: "fa fa-eye"
            }, null, -1),
            S = Object(a["g"])("i", {
                class: "fa fa-gamepad"
            }, null, -1),
            w = Object(a["g"])("i", {
                class: "fa fa-battery-full"
            }, null, -1),
            U = Object(a["g"])("i", {
                class: "fa fa-wrench"
            }, null, -1),
            P = Object(a["g"])("i", {
                class: "fa fa-plus"
            }, null, -1),
            A = Object(a["g"])("i", {
                class: "fa fa-box"
            }, null, -1);
        Object(a["s"])();
        var M = j((function (e, t, n, r, o, c) {
                var i = Object(a["y"])("router-link");
                return Object(a["r"])(), Object(a["d"])(a["a"], null, [Object(a["g"])(i, {
                    to: "/"
                }, {
                    default: j((function () {
                        return [y, Object(a["f"])(" " + Object(a["A"])(e.i18n.$t("Manager")), 1)]
                    })),
                    _: 1
                }), Object(a["g"])(i, {
                    to: "/vision"
                }, {
                    default: j((function () {
                        return [k, Object(a["f"])(" " + Object(a["A"])(e.i18n.$t("Vision")), 1)]
                    })),
                    _: 1
                }), Object(a["g"])(i, {
                    to: "/simulator"
                }, {
                    default: j((function () {
                        return [S, Object(a["f"])(" " + Object(a["A"])(e.i18n.$t("Simulator")), 1)]
                    })),
                    _: 1
                }), Object(a["g"])(i, {
                    to: "/bms"
                }, {
                    default: j((function () {
                        return [w, Object(a["f"])(" " + Object(a["A"])(e.i18n.$t("BMS")), 1)]
                    })),
                    _: 1
                }), Object(a["g"])(i, {
                    to: "/status"
                }, {
                    default: j((function () {
                        return [U, Object(a["f"])(" " + Object(a["A"])(e.i18n.$t("Status")), 1)]
                    })),
                    _: 1
                }), Object(a["g"])(i, {
                    to: "/addons"
                }, {
                    default: j((function () {
                        return [P, Object(a["f"])(" " + Object(a["A"])(e.i18n.$t("Addons")), 1)]
                    })),
                    _: 1
                }), Object(a["g"])(i, {
                    to: "/update"
                }, {
                    default: j((function () {
                        return [A, Object(a["f"])(" " + Object(a["A"])(e.i18n.$t("Update")), 1)]
                    })),
                    _: 1
                })], 64)
            })),
            R = Object(a["h"])({
                name: "SideNav",
                setup: function () {
                    var e = d["a"].use();
                    return {
                        i18n: e
                    }
                }
            });
        n("bd0d");
        R.render = M, R.__scopeId = "data-v-2185fd68";
        var L = R,
            B = Object(a["h"])({
                components: {
                    MqttConnetion: v,
                    SideNav: L
                },
                setup: function () {
                    d["a"].provide({
                        locale: "en",
                        messages: {
                            zh: g,
                            en: f
                        }
                    }), b["a"].provide()
                }
            });
        n("b263");
        B.render = l;
        var C = B,
            _ = (n("d3b7"), n("6c02")),
            T = Object(a["G"])("data-v-2c2a39d2");
        Object(a["u"])("data-v-2c2a39d2");
        var q = {
                class: "u-content"
            },
            x = Object(a["g"])("i", {
                class: "fa fa-tachometer-alt"
            }, null, -1),
            F = {
                id: "managerPage"
            },
            D = {
                class: "board"
            },
            E = Object(a["g"])("i", {
                class: "fa fa-microchip"
            }, null, -1),
            V = {
                class: "service"
            },
            I = {
                class: "board"
            },
            N = Object(a["g"])("i", {
                class: "fa fa-microchip"
            }, null, -1),
            H = {
                class: "service"
            },
            G = {
                class: "board"
            },
            $ = Object(a["g"])("i", {
                class: "fa fa-microchip"
            }, null, -1),
            z = {
                class: "service"
            };
        Object(a["s"])();
        var J = T((function (e, t, n, r, o, c) {
                return Object(a["r"])(), Object(a["d"])("div", q, [Object(a["g"])("h2", null, [x, Object(a["f"])(" | " + Object(a["A"])(e.i18n.$t("Manager")), 1)]), Object(a["g"])("div", F, [Object(a["g"])("div", {
                    class: ["subSystem", e.mqtt.data.mqttConnected ? "loaded" : ""]
                }, [Object(a["g"])("div", D, [E, Object(a["f"])(" " + Object(a["A"])(e.i18n.$t("MainBoard")), 1)]), Object(a["g"])("div", V, Object(a["A"])(e.i18n.$t("MqttServer")), 1)], 2), Object(a["g"])("div", {
                    class: ["subSystem", e.mqtt.data.managerOn ? "loaded" : ""]
                }, [Object(a["g"])("div", I, [N, Object(a["f"])(" " + Object(a["A"])(e.i18n.$t("MainBoard")), 1)]), Object(a["g"])("div", H, Object(a["A"])(e.i18n.$t("SystemManager")), 1)], 2), Object(a["g"])("div", {
                    class: ["subSystem", e.mqtt.data.controllerOn ? "loaded" : ""]
                }, [Object(a["g"])("div", G, [$, Object(a["f"])(" " + Object(a["A"])(e.i18n.$t("MainBoard")), 1)]), Object(a["g"])("div", z, Object(a["A"])(e.i18n.$t("RobotController")), 1)], 2)])])
            })),
            Q = Object(a["h"])({
                setup: function () {
                    var e = d["a"].use(),
                        t = b["a"].use();
                    console.log(Object({
                        NODE_ENV: "production",
                        VUE_APP_DEVICE_ADDRESS: "192.168.123.161",
                        BASE_URL: ""
                    }));
                    var n = function (e) {
                        t.publish("usys/sh", e, {
                            qos: 1
                        })
                    };
                    return {
                        i18n: e,
                        mqtt: t,
                        executeSH: n
                    }
                }
            });
        n("151e");
        Q.render = J, Q.__scopeId = "data-v-2c2a39d2";
        var W = Q,
            K = [{
                path: "/",
                name: "Home",
                component: W
            }, {
                path: "/bms",
                name: "Bms",
                component: function () {
                    return n.e("chunk-04ac9cd6").then(n.bind(null, "5dea"))
                }
            }, {
                path: "/addons",
                name: "Addons",
                component: function () {
                    return n.e("chunk-6dc1b143").then(n.bind(null, "01be"))
                }
            }, {
                path: "/status",
                name: "Status",
                component: function () {
                    return n.e("chunk-71a28319").then(n.bind(null, "9989"))
                }
            }, {
                path: "/vision",
                name: "Vision",
                component: function () {
                    return Promise.all([n.e("chunk-ab73ca30"), n.e("chunk-aec47eca"), n.e("chunk-af2f1c00")]).then(n.bind(null, "3266"))
                }
            }, {
                path: "/visiontest",
                name: "VisionTest",
                component: function () {
                    return Promise.all([n.e("chunk-ab73ca30"), n.e("chunk-aec47eca"), n.e("chunk-6d08177a")]).then(n.bind(null, "a90a"))
                }
            }, {
                path: "/slam",
                name: "Slam",
                component: function () {
                    return n.e("chunk-6c37cab8").then(n.bind(null, "55e7"))
                }
            }, {
                path: "/simulator",
                name: "SimulatorPage",
                component: function () {
                    return Promise.all([n.e("chunk-ab73ca30"), n.e("chunk-3caf6fe5")]).then(n.bind(null, "b442"))
                }
            }, {
                path: "/update",
                name: "UpdatePage",
                component: function () {
                    return n.e("chunk-1ebc3770").then(n.bind(null, "2e8c"))
                }
            }],
            X = Object(_["a"])({
                history: Object(_["b"])(""),
                routes: K
            }),
            Y = X;
        Object(a["c"])(C).use(Y).mount("#app")
    },
    e222: function (e, t, n) {
    },
    edd4: function (e) {
        e.exports = JSON.parse('{"Update":"Update","Signal":"Signal","BLEGamepad":"BLE Gamepad","GamepadList":"Gamepad List","Battery":"Battery","Speed":"Speed","Address":"Address","Vision":"Vision","Simulator":"Simulator","PickTarget":"Pick","Quit":"Quit","Setting":"Setting","Restart":"Restart","Clean":"Clean","Backend":"Backend","SystemManager":"System Manager","Manager":"Manager","VisionModule":"Vision Module","SlamModule":"Slam Module","Dance1":"Dance 1","Dance2":"Dance 2","Jump":"Jump","Backflip":"Backflip","Praying":"Praying","Damping":"Damping","StandUp":"Stand Up","StandDown":"Stand Down","Stand":"Stand","Walk":"Walk","Run":"Run","Climb":"Climb","Recover":"Recover","IpPort":"IP/Port","Firmware":"Firmware","BMS":"BMS","Peripherals":"Peripherals","Addons":"Addons","IpAddress":"IP Address","Port":"Port","Reset":"Reset","BluetoothGamepad":"Bluetooth Gamepad","MainBoard":"Main Board","MqttServer":"MQTT Server","Version":"Version","Status":"Status","SOC":"SOC","Current":"Current","Cycles":"Cycles","Voltage":"Voltage","NumKey":"Numkey","RobotId":"Robot ID","RightForeleg":"Right Foreleg","LeftForeleg":"Left Foreleg","RightHindLeg":"Right Hind Leg","LeftHindLeg":"Left Hind Leg","BatteryOff":"Battery Off","RobotController":"Robot Controller","UpdatePackage":"Update Package","UpdateFirmware":"Update Firmware","USBGamepadOn":"USB Gamepad On","Product":"Product","Hardware":"Hardware","Software":"Software","MotorTemperature":"Motor Temperature","LF":"LF","LR":"LR","RF":"RF","RR":"RR","Hip":"Hip","Thigh":"Thigh","Calf":"Calf"}')
    }
});