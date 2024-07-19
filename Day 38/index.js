const sayNumberInEnglish = (n) => {
    if (n < 0 || n > 999999999999) {
        throw new Error("Number out of range");
    }

    const belowTwenty = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    const tens = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
    const thousands = ["", "thousand", "million", "billion"];

    const numberToWords = (num) => {
        if (num === 0) return "";
        if (num < 20) return belowTwenty[num];
        if (num < 100) return tens[Math.floor(num / 10)] + (num % 10 ? "-" + belowTwenty[num % 10] : "");
        if (num < 1000) return belowTwenty[Math.floor(num / 100)] + " hundred" + (num % 100 ? " " + numberToWords(num % 100) : "");
    };

    const splitByThousands = (num) => {
        let chunks = [];
        while (num > 0) {
            chunks.unshift(num % 1000);
            num = Math.floor(num / 1000);
        }
        return chunks;
    };

    if (n === 0) return "zero";
    
    const chunks = splitByThousands(n);
    let result = [];

    for (let i = 0; i < chunks.length; i++) {
        if (chunks[i] !== 0) {
            result.push(numberToWords(chunks[i]) + (thousands[chunks.length - 1 - i] ? " " + thousands[chunks.length - 1 - i] : ""));
        }
    }

    return result.join(" ").trim();
};

console.log(`5635 in english is: ${sayNumberInEnglish(5635)}`)
