function convertToRoman(num) {
    const obj = {
        0: ['M', 1000],
        1: ['D', 500],
        2: ['C', 100],
        3: ['L', 50],
        4: ['X', 10],
        5: ['V', 5],
        6: ['I', 1]
    };

    let result = '';

    const specialCases = {
        900: 'CM', 400: 'CD',
        90: 'XC', 40: 'XL',
        9: 'IX', 4: 'IV'
    };

    // First, handle special cases
    for (let key in specialCases) {
        if (num >= key) {
            result += specialCases[key];
            num -= key;
        }
    }

    // Convert remaining numbers
    for (let i = 0; i < Object.keys(obj).length; i++) {
        let [symbol, value] = obj[i];

        while (num >= value) {
            result += symbol;
            num -= value;
        }
    }

    return result;
}

// Example tests
console.log(convertToRoman(36));  // Output: "XXXVI"
console.log(convertToRoman(14));  // Output: "XIV"
console.log(convertToRoman(798)); // Output: "DCCXCVIII"

// Do not edit below this line
module.exports = convertToRoman;
