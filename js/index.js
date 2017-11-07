

const a = Number(prompt('Input \'a\''));
const b = Number(prompt('Input \'b\''));
const c = Number(prompt('Input \'c\''));

function solveQuadr(a, b, c) {
    let x1, x2;
    const d = disc(a, b, c);
    if (d > 0) {
        const sqrD = Math.sqrt(d);
        x1 = (-b + sqrD) / 2*a;
        x2 = (-b - sqrD) / 2*a;
        return 'x1 = ' + x1 + ', x2 = ' + x2;
    } else if (d < 0){
        return 'Incorrect number';
    }
}
/*
function disc(a, b, c) {
    return ?????
}

const result = solveQuadr(a, b, c);
prn(result);
*/







