const container = document.querySelector('.container');
let defaultGridSize = 16;

function createGrid(gridNumber) {
    for (let i = 0; i < gridNumber; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        container.appendChild(row);
        for (let o = 0; o < gridNumber; o++) {
            const item = document.createElement('div');
            item.classList.add('item');
            row.appendChild(item);
        }
    }

    const items = document.querySelectorAll('.item');
    items.forEach(item => {
        let currOpacity = 0.1;
        item.addEventListener('mouseover', () => {
            item.style.backgroundColor = '#000';
            if (currOpacity < 1) {
                currOpacity += 0.1;
                item.style.opacity = currOpacity;
            }
        });
    });
}

const changeGridSize = document.querySelector('.changeGridSize');
changeGridSize.addEventListener('click', () => {
    let newSize;
    do {
        newSize = prompt(`Enter a number for maximum size of grid (1-100)`,'16');
        // Check if the user canceled the prompt
        if (newSize === null) return;
        newSize = parseInt(newSize);
    } while (newSize < 1 || newSize > 100 || isNaN(newSize))
    // remove existing grid and create new one
    while (container.firstChild) {
        container.removeChild(container.firstChild)
    }
    createGrid(newSize);
})

createGrid(defaultGridSize)