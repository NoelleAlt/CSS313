function bubbleSort(arr) {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap elements
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}


function parseInput(input) {
    return input.split(",").map(num => parseInt(num.trim()));
}

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Enter numbers separated by commas: ', input => {
    const numbers = parseInput(input);
    console.log("Sorted numbers:", bubbleSort(numbers));
    readline.close();
});
