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
        
        initializeSquare(square); // Initialize with random color
        // Add an event listener for the 'mouseenter' event to change the background color on hover
        square.addEventListener('mouseenter', () => {
            darkenSquare(square);
            });
        
        container.appendChild(square); // Append the square to the container
    }
}

/**
 * Function to initialize a square with a random color and darkness level
 * @param {HTMLElement} square - The square element to initialize
 */
function initializeSquare(square) {
    // Generate random RGB values
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    square.dataset.rgb = `${r},${g},${b}`; // Store the RGB values in a data attribute
    square.dataset.darkness = 0; // Initialize the darkness level at 0%
    square.style.backgroundColor = `rgb(${r},${g},${b})`; // Set the initial background color
}

function darkenSquare(square) {
    // Get the current RGB values and darkness level from the data attributes
    let [r, g, b] = square.dataset.rgb.split(',').map(Number);
    let darkness = Number(square.dataset.darkness);

    // Increase the darkness level by 10% (up to a maximum of 100%)
    darkness = Math.min(darkness + 10, 100);
    square.dataset.darkness = darkness;

    // Calculate the new RGB values by reducing each color component proportionally to the darkness level
    r = Math.floor(r * (1 - darkness / 100));
    g = Math.floor(g * (1 - darkness / 100));
    b = Math.floor(b * (1 - darkness / 100));
    
    // Set the new background color
    square.style.backgroundColor = `rgb(${r},${g},${b})`;
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

