"use strict";

let count = 0;

const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

btns.forEach(btn => {
    btn.addEventListener('click', e => {
        const styles = e.currentTarget.classList;

        if ( styles.contains('clear') ) {
            count = 0;
        } else {
            const valueChange = styles.contains('one') ? 1 : 5;
            if ( styles.contains ('plus') ) {
                count += valueChange;
            } else {
                count -= valueChange;
            }
        }

        value.innerHTML = count;
    })
});