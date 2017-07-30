for (var i = 1; i <= 5; i++) {
    console.log(i); // 1 2 3 4 5
}
console.log("------------------");
for (var i = 1; i <= 7; i++) {
    setTimeout(function () { console.log(i); }, 1000); // 8
}
console.log("------------------");
var _loop_1 = function (i_1) {
    setTimeout(function () { console.log(i_1); }, 1000); // 8
};
for (var i_1 = 1; i_1 <= 7; i_1++) {
    _loop_1(i_1);
}
{
    console.log("------------------");
}
