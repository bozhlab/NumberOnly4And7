function parseTo_4_7(value) {
    if (value === 0) return "";
    var tempStr = (value >>> 0).toString(2);

    if (tempStr[tempStr.length - 1] === "1") {
        return parseTo_4_7(value >> 1) + "4";
    }
    if (tempStr[tempStr.length - 1] === "0") {
        return parseTo_4_7(value - 1 >> 1) + "7";
    }
}
console.log(parseTo_4_7(1));
console.log(parseTo_4_7(2));
console.log(parseTo_4_7(3));
console.log(parseTo_4_7(4));
console.log(parseTo_4_7(5));
console.log(parseTo_4_7(6));
console.log(parseTo_4_7(7));
console.log(parseTo_4_7(8));
console.log(parseTo_4_7(10524));