const pad = document.querySelector('.pad--js');
const resetButton = document.querySelector('.reset__button--js');
const resetPadSize = document.querySelector('.reset__size--js');
let squares = new Array(16*16);

resetButton.addEventListener('click', resetPad);

function createPad(size) {
    squares = new Array(size * size);

    for (let i = 0; i < squares.length; i++) {
        squares[i] = document.createElement('div');
        squares[i].classList.add('pad__square')
        squares[i].addEventListener('mouseenter', () => {
            squares[i].classList.add('pad__square--black');
        })
        pad.appendChild(squares[i]);
    }
    
    pad.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
}

function resetPad() {
    let size = resetPadSize.value;
    clearPad();
    createPad(size);
}

function clearPad() {
    while(pad.firstChild){
        pad.removeChild(pad.lastChild);
    }
}

createPad(32);