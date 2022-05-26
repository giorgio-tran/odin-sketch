/* Creates a dynamic grid that starts with 16 x 16 blocks*/
let dimension = 16;
let square = dimension * dimension;
//if there is no input on "Enter a Dimension" the default is 16 x 16
const ok = document.querySelector('.ok');
ok.addEventListener('click', getInput);

const grid = document.querySelector('.grid');
for (let i = 0; i < square; i++) {
    const cell  = document.createElement('div');
    cell.classList.add('grid-cell');
    grid.append(cell);
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
        console.log(dimension);
        console.log(square);
        //changes number of columns and rows in the grid
        grid.style.gridTemplateRows = `repeat(${input}, auto`;
        grid.style.gridTemplateColumns = `repeat(${input}, auto`;
        //creates cells
        for (let i = 0; i < square; i++) {
            const cell  = document.createElement('div');
            cell.classList.add('grid-cell');
            grid.append(cell);
        }
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

//if there is an input then generate a boxes with specified dimensions
    //change the grid-template-columns and grid-template-rows parameters into 700/#number of rows

//when clicking and holding on a box, change its color 

/* Clear button changes the colors in all of the boxes into white */

/* Rainbow mode changes color of each box randomly once clicked and held on */

/* Enter dimensions and OK work together to obtain the value inputted by users with limit of 100 */
