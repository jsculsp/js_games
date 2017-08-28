'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Created by linmu on 2017/5/22.
 */

var log = console.log.bind(console);

var _e = function e(selector) {
    return document.querySelector(selector);
};

var ensureArrayEquals = function ensureArrayEquals(arr1, arr2, message) {
    if (arr1.length !== arr2.length) {
        log('\u6D4B\u8BD5\u5931\u8D25\uFF01 ' + message);
    } else {
        for (var i = 0; i < arr1.length; i++) {
            if (arr1[i] !== arr2[i]) {
                log('\u6D4B\u8BD5\u5931\u8D25\uFF01 ' + message);
            }
        }
    }
};

var ensure = function ensure(condition, message) {
    // 在条件不成立的时候, 输出 message
    if (!condition) {
        log('*** 测试失败 ', message);
    }
};

var ensureEqual = function ensureEqual(a, b, message) {
    if (a != b) {
        log('*** \u6D4B\u8BD5\u5931\u8D25, ' + a + ' \u4E0D\u7B49\u4E8E ' + b + ', ' + message);
    }
};

var arrayEqual = function arrayEqual(arr1, arr2, message) {
    if (arr1.length !== arr2.length) {
        return false;
    } else {
        for (var i = 0; i < arr1.length; i++) {
            if (arr1[i] !== arr2[i]) {
                return false;
            }
        }
        return true;
    }
};

// es 返回一个数组, 包含所有被选中的元素
var _es = function es(sel) {
    return document.querySelectorAll(sel);
};

// 切换一个元素的 class
var toggleClass = function toggleClass(element, className) {
    if (element.classList.contains(className)) {
        element.classList.remove(className);
    } else {
        element.classList.add(className);
    }
};

var appendHtml = function appendHtml(element, html) {
    element.insertAdjacentHTML('beforeend', html);
};

var bindEvent = function bindEvent(element, eventName, callback) {
    element.addEventListener(eventName, callback);
};

var removeClassAll = function removeClassAll(className) {
    var selector = '.' + className;
    var elements = document.querySelectorAll(selector);
    for (var i = 0; i < elements.length; i++) {
        var e = elements[i];
        e.classList.remove(className);
    }
};

var removeClassAllBySelector = function removeClassAllBySelector(selector) {
    var elements = document.querySelectorAll(selector);
    var all = selector.split('.');
    var cls = all[all.length - 1];
    for (var i = 0; i < elements.length; i++) {
        var e = elements[i];
        e.classList.remove(cls);
    }
};

var bindAll = function bindAll(selector, eventName, callback) {
    var elements = document.querySelectorAll(selector);
    for (var i = 0; i < elements.length; i++) {
        var e = elements[i];
        bindEvent(e, eventName, callback);
    }
};

var find = function find(element, selector) {
    return element.querySelector(selector);
};

var closestClass = function closestClass(element, className) {
    var e = element;
    while (e !== null) {
        if (e.classList.contains(className)) {
            return e;
        } else {
            e = e.parentElement;
        }
    }
    return null;
};

var closestId = function closestId(element, idName) {
    var e = element;
    while (e !== null) {
        if (e.id === idName) {
            return e;
        } else {
            e = e.parentElement;
        }
    }
    return null;
};

var closestTag = function closestTag(element, tagName) {
    var e = element;
    while (e !== null) {
        if (e.tagName.toUpperCase() === tagName.toUpperCase()) {
            return e;
        } else {
            e = e.parentElement;
        }
    }
    return null;
};

var closest = function closest(element, selector) {
    var flag = selector[0];
    if (flag === '.') {
        var className = selector.slice(1);
        return closestClass(element, className);
    } else if (flag === '#') {
        var idName = selector.slice(1);
        return closestId(element, idName);
    } else {
        var tag = selector;
        return closestTag(element, tag);
    }
};

var ajax = function ajax(method, path, data, reseponseCallback) {
    var r = new XMLHttpRequest();
    if (method === 'GET') {
        var encodedPara = serialize(data);
        path = path + '?' + encodedPara;
    } else {
        var jsonData = serialize(data);
    }
    // 设置请求方法和请求地址
    r.open(method, path, true
    // 设置发送的数据的格式
    );r.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8'
    // 注册响应函数
    );r.onreadystatechange = function () {
        if (r.readyState == 4) {
            var responseParsed = JSON.parse(r.response);
            reseponseCallback(responseParsed);
        }
    };
    r.send(jsonData);
};

var serialize = function serialize(obj) {
    var arr = [];
    for (var p in obj) {
        arr.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
    }
    return arr.join("&");
};

var extend = function extend(Child, Parent) {
    var F = function F() {};
    F.prototype = Parent.prototype;
    Child.prototype = new F();
    Child.prototype.constructor = Child;
    Child.uber = Parent.prototype;
};

var extend2 = function extend2(Child, Parent) {
    var p = Parent.prototype;
    var c = Child.prototype;
    for (var i in p) {
        c[i] = p[i];
    }
    c.uber = p;
};

var object = function object(o) {
    var F = function F() {};
    F.prototype = o;
    return new F();
};

var deepCopy = function deepCopy(p, c) {
    c = c || {};
    for (var i in p) {
        if (_typeof(p[i]) === 'object') {
            c[i] = p[i].constructor === Array ? [] : {};
            deepCopy(p[i], c[i]);
        } else {
            c[i] = p[i];
        }
    }
    return c;
};

var mySetInterval = function mySetInterval(func, wait) {
    var interv = function interv() {
        func.call(null);
        setTimeout(interv, wait);
    };
    setTimeout(interv, wait);
};