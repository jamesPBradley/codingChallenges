//p: string, num
//r: string

function encrypt(s,n) {
    // input validation
    if(n <= 0 || s==='' || s===null) {
        return s;
    }
    let i = 0;
    let evens = s.split('').filter((e,i) => i%2===0);
    let odds = s.split('').filter((e,i) => i%2>0);;
    let mix = odds.concat(evens);
    // repeat n times
    while(i<n-1) {
        // make s an array and filter for even indexed chars
        evens = mix.filter((e,i) => i%2===0);
        // make s an array and filter for odd indexed characters
        odds = mix.filter((e,i) => i%2>0);
        // conactenate the two arrays
        mix = odds.concat(evens);
        i++;
    }
    return mix.join('');
}

// function decrypt(s,n) {
//     // input validation
//     if(n <= 0 || s==='') {
//         return s;
//     }
//     let i = 0;
//     let evens = s.split('').filter((e,i) => i%2===0);
//     let odds = s.split('').filter((e,i) => i%2>0);;
//     let mix = odds.concat(evens);
//     // repeat n times
//     // while(n%2===0 ? i<n+3 : i<n+1) {
//        while(i < n+2) {
//         // make s an array and filter for odd indexed chars
//         evens = mix.filter((e,i) => i%2===0);
//         // make s an array and filter for even indexed characters
//         odds = mix.filter((e,i) => i%2>0);
//         // conactenate the two arrays
//         mix = odds.concat(evens);
//         i++;
//     }
//     return mix.join('');
// }


// function encrypt(text, n) {
//     console.log(text, n);
//     if (!text || n <= 0) return text; 
//     while (n--) {
//       let ans = '';
//       for (let i = 1; i < text.length; i += 2) {
//         ans += text[i];
//       }
//       for (let i = 0; i < text.length; i += 2) {
//         ans += text[i];
//       }
//       text = ans;
//     }
//     return text;
// }
  
function decrypt(encryptedText, n) {
    if (!encryptedText || n <= 0) return encryptedText;
    const ans = new Array(encryptedText.length);
    while (n--) {
      let j = 0;
    //   send first elements from encryptedText to odd indexes of ans
      for (let i = 1; i < ans.length; i += 2) {
        ans[i] = encryptedText[j++];
      }
    //   send last elements from encryptedText to even indexes of ans
      for (let i = 0; i < ans.length; i += 2) {
        ans[i] = encryptedText[j++];
      }
    //   overwrite encrypted text for next loop iteration
      encryptedText = ans.join('');
    }
    return encryptedText;
}

// console.log(encrypt("012345", 1)); //  =>  "135024"
// console.log(encrypt("This is a test!", 0)); // "This is a test!");
// console.log(encrypt("This is a test!", 1)); // "hsi  etTi sats!");
// console.log(encrypt("This is a test!", 2)); // "s eT ashi tist!");
// console.log(encrypt("This is a test!", 3)); // " Tah itse sits!");
// console.log(encrypt("This is a test!", 4)); // "This is a test!");
// console.log(encrypt("This is a test!", -1)); // "This is a test!");
// console.log(encrypt("This kata is very interesting!", 1)); // "hskt svr neetn!Ti aai eyitrsig");

  
console.log(decrypt("135024", 1)); //  =>  "012345"
// odds then evens
// 304152
// 012345

// console.log(decrypt("This is a test!", 0)); // "This is a test!");
console.log(decrypt("hsi  etTi sats!", 1)); // "This is a test!");
// odds then evens
// s eT ashi tist!
//  Tah itse sits!
// This is a test!



// console.log(decrypt("s eT ashi tist!", 2)); // "This is a test!");
// console.log(decrypt(" Tah itse sits!", 3)); // "This is a test!");
// console.log(decrypt("This is a test!", 4)); // "This is a test!");

// console.log(decrypt("This is a test!", -1)); // "This is a test!");
console.log(decrypt("hskt svr neetn!Ti aai eyitrsig", 1)); // "This kata is very interesting!");


// console.log(encrypt("", 0)); // "");
// console.log(decrypt("", 0)); // "");
// console.log(encrypt(null, 0)); // null);
// console.log(decrypt(null, 0)); // null);
