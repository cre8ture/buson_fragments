document.addEventListener("DOMContentLoaded", function () {
    const gridContainer = document.querySelector(".grid-container");
    const itemSize = 20; // The size of each grid item
    const numColumns = Math.ceil(window.innerWidth / itemSize);
    const numRows = Math.ceil(window.innerHeight / itemSize);
    const numItems = numColumns * numRows;
    console.log("i have loaded", gridContainer, numRows, numColumns, numItems);

  
    for (let i = 0; i < numItems; i++) {
      const gridItem = document.createElement("div");
      gridItem.classList.add("grid-item");
      gridContainer.appendChild(gridItem);
    }

    // Select all grid items
const gridItems = document.querySelectorAll('.grid-item');

// Function to generate a random polygon
function generateRandomPolygon() {
    let polygonPoints = [];
    for (let i = 0; i < 6; i++) {
        let x = Math.floor(Math.random() * 100);
        let y = Math.floor(Math.random() * 100);
        polygonPoints.push(`${x}% ${y}%`);
    }
    return `polygon(${polygonPoints.join(', ')})`;
}

// Add hover event listener to each grid item
gridItems.forEach(item => {
    item.addEventListener('mouseover', function() {
        // Create a new element
        let polygon = document.createElement('div');
        polygon.style.position = 'absolute';
        polygon.style.top = '50%';
        polygon.style.left = '50%';
        polygon.style.transform = 'translate(-50%, -50%) rotate(30deg)';
        polygon.style.width = '70%';
        polygon.style.height = '70%';
        polygon.style.border = '1px solid red';
        polygon.style.backgroundColor = 'red';
        polygon.style.clipPath = generateRandomPolygon();

        // Add the new element to the grid item
        this.appendChild(polygon);
    });

    item.addEventListener('mouseout', function() {
        // Remove the polygon when the mouse leaves the grid item
        this.removeChild(this.lastChild);
    });
});
  });
  