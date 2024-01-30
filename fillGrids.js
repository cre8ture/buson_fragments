function generateRandomPolygon() {
    let polygonPoints = [];
    for (let i = 0; i < 6; i++) {
        let x = Math.floor(Math.random() * 100);
        let y = Math.floor(Math.random() * 100);
        polygonPoints.push(`${x}% ${y}%`);
    }
    return `polygon(${polygonPoints.join(', ')})`;
}

function addRandomPolygon(element) {
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

    // Add the new element to the passed element
    element.appendChild(polygon);
}

function clearDiv(div) {
    // Remove all child elements
    while (div.firstChild) {
        div.removeChild(div.firstChild);
    }

    // Remove text content
    div.textContent = '';
}


document.addEventListener("DOMContentLoaded", function () {

    console.log("I AM RELOADED!")

    function isElementInViewport(el) {
        let rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function getVisibleGrids() {
        const gridItems = document.querySelectorAll('.grid-item');
        let visibleGrids = [];
        gridItems.forEach(item => {
            if (isElementInViewport(item)) {
                visibleGrids.push(item);
            }
        });
        return visibleGrids;
    }

    // Log the visible grids initially

    let previousGrids = [];

    // window.addEventListener('scroll', function() {
    //     const grids = getVisibleGrids();
    //     const poemMaps = getRandomPoemMapping();
    
    // console.log("SEEE", grids);

    //     grids.forEach((grid, index) => {
    //         const entries = Object.entries(poemMaps);
    //         if (index < entries.length) {
    //             const [key, value] = entries[index];
    //             grid.textContent = `${value} | ${key}`;
    //             grid.style.color = 'red';
    //             addRandomPolygon(grid);
    //         }
    //     });
    
    //     // Clear the div for all non-viewable elements
    //     previousGrids.forEach(grid => {
    //         if (!grids.includes(grid)) {
    //             clearDiv(grid);
    //         }
    //     });
    
    //     // Update the previousGrids array
    //     previousGrids = grids;
    // });
        const gridItems = document.querySelectorAll('.grid-item');
        let poemMaps = getRandomPoemMapping(); // Assuming this function is defined correctly
        console.log("TURD!", gridItems)
        // Intersection Observer callback
        function handleIntersection(entries, observer) {
            entries.forEach(entry => {
            console.log("SEEE");

                if (entry.isIntersecting) {
                    let poemMaps = getRandomPoemMapping();
                    const grid = entry.target;
                    let index = Array.from(gridItems).indexOf(grid);
                    console.log(poemMaps)
                    const eng_ja = Object.entries(poemMaps);
                    

                    index = index % eng_ja.length;
                    console.log("iam index", index)
                    if(Math.random() > 0.5) {
                    if (index < eng_ja.length) {
                        console.log("index", index)
                        const [key, value] = eng_ja[index];
                        let textDiv = grid.querySelector('.centered-text');
                        if (!textDiv) {
                            textDiv = document.createElement('div');
                            textDiv.classList.add('centered-text');
                            grid.appendChild(textDiv);
                        }
                        if(value === undefined) {
                            textDiv.textContent = `“空” | ${key}`;
                        }
                        else
                            textDiv.textContent = `${value} | ${key}`;
                        grid.style.color = 'red';
                        addRandomPolygon(grid);
                    }
                
                } 
                else {
                    clearDiv(entry.target);
                }
            }
            });
        }

        // function handleIntersection(entries, observer) {
        //     entries.forEach(entry => {
        //         if (entry.isIntersecting) {
        //             const grid = entry.target;
        
        //             // Clear existing content
        //             clearDiv(grid);
        
        //             // Get new content
        //             const poemMapEntry = getRandomPoemMapping(); // Adjust this function as needed
        //             grid.textContent = `${poemMapEntry.value} | ${poemMapEntry.key}`;
        //             grid.style.color = 'red';
        //             grid.classList.add('centered-text'); // Ensure this class is defined in your CSS
        
        //             // Add new random polygon
        //             addRandomPolygon(grid);
        //         }
        //     });
        // }
        
    
        // Create the observer
        const observer = new IntersectionObserver(handleIntersection, {
            root: null, // observing for viewport
            threshold: 0.1 // adjust as needed
        });
    
        // Observe each grid item
        gridItems.forEach(item => observer.observe(item));
        console.log("i am gridItems", gridItems)
    });
    