// p: number
// r: number

function cockroachSpeed(n) {
    // km/hr * cm/km * hr/s
    return Math.floor(n*100000/3600);
}

console.log(cockroachSpeed(1.08), 30);
console.log(cockroachSpeed(1.09), 30);
console.log(cockroachSpeed(0), 0);