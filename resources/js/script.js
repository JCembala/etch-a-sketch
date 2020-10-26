const container = document.querySelector('.pad');

function createPad(size) {

    let squares = new Array(size * size);

    for (let i = 0; i < squares.length; i++) {
        squares[i] = document.createElement('div');
        squares[i].innerText = i + 1;
        squares[i].classList.add('pad__square')
        container.appendChild(squares[i]);
    }
}

createPad(16);