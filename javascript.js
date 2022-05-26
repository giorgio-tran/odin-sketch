/* Creates a dynamic grid that starts with 16 x 16 blocks*/
let dimension = 16;
let square = dimension * dimension;
let isDrawing = false;
const grid = document.querySelector('.grid');
for (let i = 0; i < square; i++) {
    const cell  = document.createElement('div');
    cell.classList.add('grid-cell');
    grid.append(cell);
}
//gets input everytime it's clicked
const ok = document.querySelector('.ok');
ok.addEventListener('click', getInput);
//clears whole grid
const clr = document.querySelector('.clear');
clr.addEventListener('click', clear);

//draws when the mouse is held down and hovers over cells
const draw = document.querySelectorAll('.grid-cell');
draw.forEach(cell => cell.addEventListener('mousedown', coloring));
draw.forEach(cell => cell.addEventListener('mouseover', mouseOver));
draw.forEach(cell => cell.addEventListener('mouseup', mouseUp));

//function for clear
function clear() {
    const cells = document.querySelectorAll('.grid-cell');
    cells.forEach(cell => cell.style.backgroundColor = "white");
}

//functions for drawing
function coloring(e) {
    isDrawing = true;
    e.target.style.backgroundColor = "black";
    console.log(e.target);
}
function mouseOver(e) {
    if (isDrawing === true) {
        e.target.style.backgroundColor = "black";
    }
}
function mouseUp(e) {
    isDrawing = false;
}

//gets input if it's between 1 and 100, otherwise defaults to 16
function getInput() {
    const input = document.getElementById('input').value;
    console.log(input);
    //remove all cells in grid
    const cell  = document.querySelectorAll('.grid-cell');
    cell.forEach(cell => cell.parentElement.removeChild(cell));
    console.log(cell);
    if (input >= 1 && input <=100) {
        dimension = input;
        square = input * input;
        //changes number of columns and rows in the grid
        grid.style.gridTemplateRows = `repeat(${input}, auto`;
        grid.style.gridTemplateColumns = `repeat(${input}, auto`;
        //creates cells
        for (let i = 0; i < square; i++) {
            const cell  = document.createElement('div');
            cell.classList.add('grid-cell');
            grid.append(cell);
        }
        //changing colors on mousedown
        const draw = document.querySelectorAll('.grid-cell');
        draw.forEach(cell => cell.addEventListener('mousedown', coloring));
        draw.forEach(cell => cell.addEventListener('mouseover', mouseOver));
        draw.forEach(cell => cell.addEventListener('mouseup', mouseUp));
        console.log(square);
    } else {
        //resets if number greater than 100 or less than 1
        dimension = 16;
        square = dimension * dimension;
        grid.style.gridTemplateRows = `repeat(${dimension}, auto`;
        grid.style.gridTemplateColumns = `repeat(${dimension}, auto`;
        for (let i = 0; i < square; i++) {
            const cell  = document.createElement('div');
            cell.classList.add('grid-cell');
            grid.append(cell);
        }
    }
}