// Common Algorithms

// Implement a Linear Search algorithm - O(n)
const linearSearch = (arr, val) => {
    for(let i=0; i<arr.length; i++) {
        if(arr[i] == val) {
            return i;
        }
    }
    return -1;
}
console.log(linearSearch([0,45,123,3,16,21], 21))


// Implement a binary search - O(log(n))
const binarySearch = (arr, val, start, end) => {

    start = start === undefined ? 0 : start;
    end = end === undefined ? arr.length : end;

    // if value was not found
    if(start > end) return -1;

    // pick an index in the middle of the start and end indices
    const midIndex = Math.floor((start + end) / 2);

    // our reference to the middle item
    const midItem = arr[midIndex];

    // if middle item is our search item, we are done - return its index
    if(midItem == val) return midIndex;
    
    // if middle item is less than our search item, recursively call binarySearch
    // with start set to midIndex + 1 
    else if(midItem < val) return binarySearch(arr, val, midIndex + 1, end)

    // if middle item is greater than our search item, recursively call binarySearch
    // with end set to middleIndex - 1
    else if(midItem > val) return binarySearch(arr, val, start, midIndex - 1)
}

console.log(binarySearch([0,45,123,3,16,34,21,3], 21))
