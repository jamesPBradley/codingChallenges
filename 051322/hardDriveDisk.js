
// p: array of nums, num
// r: num


function save(sizes,hd) {
    // add file sizes together until they exceed HD capacity
    let fileSize = 0;
    let i = 0;
    while(fileSize <= hd) {
        fileSize += sizes[i];
        i++;
    }

    // return the number of files added together
    return i-1;
}

console.log(save([4, 4, 4, 3, 3], 12)) // 3
console.log(save([4, 4, 4, 3, 3], 11)) // 2
console.log(save([4, 8, 15, 16, 23, 42], 108)) // 6
console.log(save([13], 13)) // 1
console.log(save([1, 2, 3, 4], 250)) // 4
console.log(save([100], 500)) // 1
console.log(save([11, 13, 15, 17, 19], 8)) // 0
console.log(save([45], 12)) // 0
