const form = document.querySelector('form');
const underWeight = document.querySelector('.uw');
const normalWeight = document.querySelector('.nw');
const overweight = document.querySelector('.ow');
let bmi;

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const ht = parseInt(document.querySelector('#height').value);
    const wt = parseInt(document.querySelector('#weight').value);
    const res = document.querySelector('.result');

    if (ht === '' || ht < 0 || isNaN(ht)) {
        res.innerHTML = `Please provide a valid height: ${ht}`;
    } else if (wt === '' || wt < 0 || isNaN(wt)) {
        res.innerHTML = `Please provide a valid weight: ${wt}`;
    } else {
        bmi = (wt / ((ht * ht) / 10000)).toFixed(2);
        res.innerHTML = `<span>${bmi}</span>`;
    }

    if (bmi < 18.6) {
        underWeight.style.backgroundColor = 'white';
    } else if (bmi >= 18.6 && bmi <= 24.9) {
        normalWeight.style.backgroundColor = 'white';
    } else {
        overweight.style.backgroundColor = 'blue';
    }
});
