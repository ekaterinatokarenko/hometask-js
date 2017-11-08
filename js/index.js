const a = Number(prompt('Input \'a\', \'a\' should not be zero'));
//if (a !== 0) {
    const b = Number(prompt('Input \'b\''));
    const c = Number(prompt('Input \'c\''));
//} else {
//    return 'Incorrect \'a\' number';
//}
function solveQuadr(a, b, c) { 
    let x, x1, x2;
    const d = disc(a, b, c);
    if (d > 0) {
        const sqrD = Math.sqrt(d);
        return 'x1 = ' + (-b + sqrD) / (2*a) + ', x2 = ' + (-b - sqrD) / (2*a);
    } else if (d < 0){
        return 'No solution :(';
    } else {
        return 'x = ' + -b / 2*a;
    }
}
function disc(a, b, c) { 
    return b*b - 4*a*c;
}
function prn(let) {
    document.write(let);
}
const result = solveQuadr(a, b, c);
prn('Result: ' + result);







