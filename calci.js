const p = document.getElementsByTagName('p')[0];
const scr = document.getElementsByClassName('screen')[0];
const cont = document.getElementsByClassName('numcont')[0];
const del = document.getElementsByTagName('h2')[0];
const up = document.getElementsByTagName('h3')[0];
console.log(up);
let a = 0;
let b = 0;
let c = '';
let d = 0;
const putter = (a) => {
    if (p.innerHTML.slice(0, 1) === '0') p.innerHTML = p.innerHTML.slice(1,) + a;
    else p.innerHTML = a;
}
cont.addEventListener('click', (e) => {
    console.log(Date());
    pl = "" + e.target.innerhtml + "";
    if (e.target.innerHTML === '+' || e.target.innerHTML === 'x' || e.target.innerHTML === '/' || e.target.innerHTML === '-') {
        a = p.innerHTML;
        up.innerHTML = a + e.target.innerHTML;
        p.innerHTML = "";
        c = e.target.innerHTML;
    }
    else if (e.target.innerHTML === '=') {
        b = p.innerHTML;
        if (c === '+') putter(parseFloat(a) + parseFloat(b));
        else if (c === 'x') putter(parseFloat(a) * parseFloat(b));
        else if (c === '/') putter(parseFloat(a) / parseFloat(b));
        else if (c === '-') putter(parseFloat(a) - parseFloat(b));
    }
    else if (typeof (e.target.innerHTML) === 'string') {
        if (p.innerHTML.slice(0, 1) === '0') p.innerHTML = e.target.innerHTML;
        else p.innerHTML = p.innerHTML + e.target.innerHTML;
    }

});
del.addEventListener('click', (e) => {
    p.innerHTML = p.innerHTML.slice(0, -1);
    // if (typeof (e.target.innerHTML) === 'string') p.innerHTML = (p.innerHTML / 1) + e.target.innerHTML;
});
scr.addEventListener('click', (e) => {
    if (e.target != scr) e.target.innerHTML = "";
});
