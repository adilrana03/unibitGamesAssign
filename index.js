function findPairsWithSum(arr, target) {

    let pair = [];

    let find = new Set();

    for (let n of arr) {
        let complement = target - n;
        if (find.has(complement)) {
            pair.push([n, complement]);
        }
        find.add(n);
    }

    return pair;
}

function mergeAndSort(arr1, arr2) {
    let merged = arr1.concat(arr2);
    merged.sort((a, b) => a - b);
    return merged;
}

function findCombinationsWithDoubleTarget(arr, target) {
    let doubledTarget = target * 2;
    let combinations = [];

    for (let i = 0; i < arr.length; i++) {

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === doubledTarget) {
                combinations.push([arr[i], arr[j]]);
            }
        }
    }

    return combinations;
}


//   const inputArray = [2, 4, 3, 6, 8, 5, 10];
const inputArray = [1, 3, 2, 2, -4, -6, -2, 8];
const targetValue = 4;

// Find pair with the target sum
const pairsWithTargetSum = findPairsWithSum(inputArray, targetValue);
console.log("Pairs with target sum:", pairsWithTargetSum);

// Merge and sort the array
const mergedAndSorted = mergeAndSort(inputArray, []);

console.log("Merged and sorted array:", mergedAndSorted);

// Find combinations with double the target sum


const combinationsWithDoubleTarget = findCombinationsWithDoubleTarget(
    mergedAndSorted, targetValue
);



console.log(
    "Combinations with double the target sum:", combinationsWithDoubleTarget
);