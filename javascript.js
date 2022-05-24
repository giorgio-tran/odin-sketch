/* Creates a dynamic grid that starts with 16 x 16 blocks*/
let dimension = 16;
let square = dimension * dimension;
//if there is no input on "Enter a Dimension" the default is 16 x 16
//if there is an input then generate a boxes with specified dimensions
const grid = document.querySelector('.grid');

for (let i = 0; i < square; i++) {
    const cell  = document.createElement('cell');
    cell.classList.add('grid-cell');
    grid.append(cell);

}

/* Clear button changes the colors in all of the boxes into white */

/* Rainbow mode changes color of each box randomly once clicked and held on */

/* Enter dimensions and OK work together to obtain the value inputted by users with limit of 100 */
