

function Ghost() {
    let getColor = function () {
        let random = Math.random();
        return random < .25 ? 'white' :
               random < .5 ? 'yellow' :
               random < .75 ? 'purple' : 'red';
    }

    this.color = getColor();
}

const ghost = new Ghost;
console.log(ghost);