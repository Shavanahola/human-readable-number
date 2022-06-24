module.exports = function toReadable(number) {
    //от 0 до 19
    let oneDigit = [
        "",
        " one",
        " two",
        " three",
        " four",
        " five",
        " six",
        " seven",
        " eight",
        " nine",
        " ten",
        " eleven",
        " twelve",
        " thirteen",
        " fourteen",
        " fifteen",
        " sixteen",
        " seventeen",
        " eighteen",
        " nineteen",
    ];
    //от 20 до 90 по десяткам
    let tensDigit = [
        "",
        "",
        " twenty",
        " thirty",
        " forty",
        " fifty",
        " sixty",
        " seventy",
        " eighty",
        " ninety",
    ];
    let hundredsDigit = " hundred";
    let output = "";
    let numberStr = number.toString();
    if (number === 0) {
        output = "zero";
        return output;
    }
    if (number < 20) {
        output = oneDigit[number];
        return output.trim();
    }

    if (
        numberStr.length === 3 &&
        numberStr[1] + numberStr[2] > 9 &&
        numberStr[1] + numberStr[2] < 20
    ) {
        let sum = numberStr[1] + numberStr[2];
        output = `${oneDigit[numberStr[0]]}${hundredsDigit}`;
        output = output + `${oneDigit[sum]}`;
        return output.trim();
    }

    if (numberStr.length === 3) {
        output = `${oneDigit[numberStr[0]]}${hundredsDigit}`;
        output = output + `${tensDigit[numberStr[1]]}`;
        output = output + `${oneDigit[numberStr[2]]}`;
        return output.trim();
    }
    output = output + `${tensDigit[numberStr[0]]}`;
    output = output + `${oneDigit[numberStr[1]]}`;
    return output.trim();
};
