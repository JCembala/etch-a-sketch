const pad = document.querySelector('.pad');

function createPad(size) {

    let squares = new Array(size * size);

    for (let i = 0; i < squares.length; i++) {
        squares[i] = document.createElement('div');
        squares[i].classList.add('pad__square')
        squares[i].addEventListener('mouseenter', () => {
            squares[i].classList.add('pad__square--black')
        })
        pad.appendChild(squares[i]);
    }
    
    pad.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
}

createPad(32);