

//p: string
//r: num

// function getTheVowels(str) {
//     let strFilter = str.split('').filter(element => 'aeiou'.includes(element));
//     // loop through str of vowels adding consec vowels to new array
//     let letters = [];
//     let total = 0
//     let i = 0
//     let uIndex;
//     while(i < strFilter.length) {
//         if(strFilter[i] === 'a' && letters.includes('a') === false) {
//             letters.push(strFilter[i]);
//             total++;
//         }else if(strFilter[i] === 'e' && letters.includes('a') && letters.includes('e') === false) {
//             letters.push(strFilter[i]);
//             total++;
//         }else if(strFilter[i] === 'i' && letters.includes('e') && letters.includes('i') === false) {
//             letters.push(strFilter[i]);
//             total++;
//         }else if(strFilter[i] === 'o' && letters.includes('i') && letters.includes('o') === false) {
//             letters.push(strFilter[i]);
//             total++;
//         }else if(strFilter[i] === 'u' && letters.includes('i') && letters.includes('u') === false) {
//             letters.push(strFilter[i]);
//             uIndex = i;
//             total++;
//         }
//         i++;
//         if(letters.length === 5) {
//             // return [strFilter,count,aIndex,uIndex]
//             i = 0;
//             letters = [];
//             // delete corresponding indexes and loop again until the entire string is checked
//             strFilter.splice(0, uIndex)
//         }
        
//     }
//     return total;
// }

function getTheVowels(word) {
    const vowels = ['a', 'e', 'i', 'o', 'u']
    const wordVowels = [...word]
    let count = 0
    let pos = 0
    
    wordVowels.forEach((letter) => {
      if (letter === vowels[pos]) {
        count++
        pos = pos >= vowels.length - 1 ? 0 : pos + 1
      }
    })
    
    return count;
}



console.log(getTheVowels('akfheujfkgiaaaofmmfkdfuaiiie')); // 7
console.log(getTheVowels('eiknfhjrytueiouesxdczbeuiuoimnmfhfiuou')); // 0
console.log(getTheVowels('desrehakkjfuteknvfiyrtfbehjdjrobchrunbcbbhdhehbvudjsnanbakkjndhfjenfndinmfnbfondndendnfudnfnanndhdemdmcnfdemnfjimdfofnmfnfjanmdnhdua')); // 16
console.log(getTheVowels('sudnfhrakekdhhfkakjdjdhvneidkvnudntomcnnamjemdmfudkfhjamvcjedkfdnridnmnbvfhbdjdidncbvchencchdjdodncvchfndnrnencncnffduncbhjdfja')); // 11
console.log(getTheVowels('jurjfdleiifjriisiouajjfyhekkfjvnnmsuimsnvyuhvcodnmfnsumvbjshhsadkvhfeixoua')); // 11


