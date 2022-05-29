//p: string
//r: string

// function backToTheFuture(s) {
//     const sameDayNextMonth = { January: "October"
//                              , April: "July"
//                              , September: "December"
//                              , February: "March"
//                              , March: "November"
//                              };
//     const [weekDay,day,month] = s.split(" ");
//     if ( month in sameDayNextMonth && ( month!=="March" || day!=="31" ) )
//       return `I'm leaving here on ${weekDay} ${day} ${sameDayNextMonth[month]}!`;
//     else
//       return "Doc, I can't get back to the future!";
//   }

console.log(backToTheFuture("Monday 3 January")) // "I'm leaving here on Monday 3 October!"
console.log(backToTheFuture("Friday 20 October")) // "Doc, I can't get back to the future!"
console.log(backToTheFuture("Tuesday 31 March")) // "Doc, I can't get back to the future!"
console.log(backToTheFuture("Saturday 26 July")) // "Doc, I can't get back to the future!"