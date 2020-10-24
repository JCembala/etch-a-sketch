let squares = new Array(16 * 16);
const container = document.querySelector('.pad');

for (let i = 0; i < squares.length; i++) {
    squares[i] = document.createElement('div');
    squares[i].innerText = i + 1;
    squares[i].classList.add('pad__square')
    container.appendChild(squares[i]);
}