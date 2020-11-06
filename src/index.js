var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var num = 2, str = "1sas" + num, arr = [{ a: 1 }, { b: 2 }], arr2 = ["1", 2], arr3 = [2, "1"], obj = {};
var Weeks;
(function (Weeks) {
    Weeks[Weeks["Sunday"] = 0] = "Sunday";
    Weeks[Weeks["Monday"] = 1] = "Monday";
    Weeks[Weeks["Tuesday"] = 2] = "Tuesday";
    Weeks[Weeks["Wednesday"] = 3] = "Wednesday";
    Weeks[Weeks["Thursday"] = 4] = "Thursday";
    Weeks[Weeks["Friday"] = 5] = "Friday";
    Weeks[Weeks["Saturday"] = 6] = "Saturday";
})(Weeks || (Weeks = {}));
console.log(Weeks);
var w = Weeks.Monday;
console.log(w);
function rvoid() {
    //   return null;
}
console.log(rvoid());
function renum() {
    return w;
}
function rFnP(num1, num2) {
    return num1 + num2;
}
console.log(rFnP(3, 12));
function rFn(_a) {
    var dnum1 = _a.dnum1, _b = _a.dnum2, dnum2 = _b === void 0 ? 456 : _b;
    return dnum1 + dnum2;
}
console.log(rFn({ dnum1: 1 }));
function rFn2(dnum1, dnum2) {
    if (dnum1 === void 0) { dnum1 = 4; }
    if (dnum2 === void 0) { dnum2 = 5; }
    return dnum1 + dnum2;
}
console.log(rFn2());
function rsum(nums) {
    return nums.reduce(function (a, b) { return a + b; });
}
console.log(rsum([3, 12, 4]));
var first = [1, 2];
var second = [3, 4];
var bothPlus = __spreadArrays([0], first, second, [5]);
var defaults = { food: "spicy", price: "$$", ambiance: "noisy" };
var search = __assign(__assign({}, defaults), { food: "rich" });
function arrs(a) {
    var b = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        b[_i - 1] = arguments[_i];
    }
    //   console.log(a, b);
    //   console.log(a, ...b);
    console.log(__assign({}, b));
}
arrs(1, 2, 3, 4);
arrs(1, obj);
var obj2 = { c: 1, b: 2, d: 3 };
console.log(__assign(__assign({}, obj2), { ddd: 123 }));
console.log(Object.assign({ ddd: 123 }, obj2));
