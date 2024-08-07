// Get references to the container and button elements
const container = document.getElementById('container');
const button = document.getElementById('newGridButton');

/**
 * Function to create a grid of square divs
 * @param {number} squaresPerSide - Number of squares per side of the grid
 */
function createGrid(squaresPerSide) {
    // Clear any existing squares in the container
    container.innerHTML = '';

    // Calculate total number of squares
    const totalSquares = squaresPerSide * squaresPerSide;
    // Calculate the size of each square to fit within the container
    const squareSize = 960 / squaresPerSide;

    // Create and append squares to the container
    for (let i = 0; i < totalSquares; i++) {
        const square = document.createElement('div'); // Create a new div element
        square.classList.add('square'); // Add the 'square' class for styling
        square.style.width = `${squareSize}px`; // Set the width of the square
        square.style.height = `${squareSize}px`; // Set the height of the square
        
        // Add an event listener for the 'mouseenter' event to change the background color on hover
        square.addEventListener('mouseenter', () => {
            square.style.backgroundColor = 'blue'; // Change color to blue on hover
        });
        
        container.appendChild(square); // Append the square to the container
    }
}

// Add an event listener to the button to create a new grid when clicked
button.addEventListener('click', () => {
    // Prompt the user for the number of squares per side
    let squaresPerSide = parseInt(prompt('Enter number of squares per side (maximum 100):'));

    // Validate the user input and set constraints
    if (squaresPerSide > 100) {
        squaresPerSide = 100; // Set maximum limit to 100
    } else if (squaresPerSide < 1 || isNaN(squaresPerSide)) {
        squaresPerSide = 16; // Default to 16 if input is invalid
    }

    createGrid(squaresPerSide); // Create a new grid with the specified number of squares per side
});

// Create the initial grid with 16 squares per side
createGrid(16);

