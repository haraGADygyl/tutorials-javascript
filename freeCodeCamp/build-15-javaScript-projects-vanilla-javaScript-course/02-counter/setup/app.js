let count = 0;

let value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

btns.forEach(b => {
    b.addEventListener('click', (e) => {
        const styles = e.currentTarget.classList;

        if (styles.contains('decrease')) {
            count--;
        } else if (styles.contains('increase')) {
            count++;
        } else {
            count = 0;
        }
        value.textContent = count;

        if (count < 0) {
            value.style.color = 'red';
        }
        if (count > 0) {
            value.style.color = 'green';
        }
        if (count === 0) {
            value.style.color = 'black';
        }
    });
})
