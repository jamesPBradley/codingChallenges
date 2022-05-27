//p: object, array
//r: string

function findKiller(suspects, victims) {
  for (let name in suspects) {
    if (victims.every(deadPerson => suspects[name].includes(deadPerson))) {
      return name;
    }
  }
}

// function findKiller(suspects, dead) {
//     const susArr = Object.keys(suspects);
//     const victims = [...dead];

//     for(let i=0; i<susArr.length; i++) {
//         if(victims.every((element) => suspects[susArr[i]].includes(element))) {
//             return susArr[i];
//         }
//     }
// }

console.log(findKiller({'James': ['Jacob', 'Bill', 'Lucas'], 'Johnny': ['David', 'Kyle', 'Lucas'], 'Peter': ['Lucy', 'Kyle']}, ['Lucas', 'Bill'])) // 'James'
console.log(findKiller({'Brad': [], 'Megan': ['Ben', 'Kevin'], 'Finn': []}, ['Ben'])) // 'Megan'