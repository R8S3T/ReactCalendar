/* alert('working'); */

// Wrapper for the grid container
const gridContainerWrapper = document.createElement('div');
gridContainerWrapper.classList.add('p-6');

// Grid container
const gridContainer = document.createElement('div');
gridContainer.classList.add('grid', 'grid-cols-2', 'grid-rows-2', 'gap-2', 'bg-grey-100');

// Append grid container to wrapper container
gridContainerWrapper.appendChild(gridContainer);

// Append the wrapper to the document body
document.body.appendChild(gridContainerWrapper);


// Calendar container
const calendarContainer = document.createElement('div');
calendarContainer.id = 'calendar';
calendarContainer.classList.add('col-span-1','bg-my-blue', 'p-4', 'h-64');
calendarContainer.textContent = 'Calendar Container';

// Day-Recipe-Container
const dayRecipeContainer = document.createElement('div');
dayRecipeContainer.classList.add('col-span-1', 'h-64', 'flex', 'flex-col');

// Day Container
const dayContainer1 = document.createElement('div');
dayContainer1.classList.add('bg-my-green', 'p-4', 'row-span-1', 'flex-grow');
dayContainer1.textContent = 'Day Container';

// Recipe Container
const recipeContainer2 = document.createElement('div');
recipeContainer2.classList.add('bg-gray-200', 'p-4', 'mt-4', 'flex-grow');
recipeContainer2.textContent = 'Recipe Container';

// Append day and recipe container to dayRecipeContainer
dayRecipeContainer.appendChild(dayContainer1);
dayRecipeContainer.appendChild(recipeContainer2);

gridContainer.appendChild(calendarContainer);
gridContainer.appendChild(dayRecipeContainer);


// CREATE CALENDAR

// Header
const header = document.createElement('div');
header.classList.add('bg-grey-200');
/* header.textContent = 'Header'; */
calendarContainer.appendChild(header);

// Previous and Next Button
const prevBtn = document.createElement('button');
prevBtn.id = 'prevBtn';
prevBtn.textContent = '< Prev';
header.appendChild(prevBtn);

// Display Month and Year
const monthYear = document.createElement('h2');
monthYear.id = 'monthYear';
monthYear.textContent = ' Month/ Year';
header.appendChild(monthYear);

const nextBtn = document.createElement('button');
nextBtn.id = 'nextBtn';
nextBtn.textContent = 'Next >';
header.appendChild(nextBtn);



// Create table and append to calendar container
/* function createTable(rows, columns) {
    let table = document.createElement('table');
    table.classList.add('w-full');

    let number = 1;
    for (let r = 0; r < rows; r++) {
        let row = document.createElement('tr');
        row.classList.add('bg-my-green');

        for (let c = 0; c < columns; c++) {
        let cell = document.createElement('td');
        cell.textContent = number;

        cell.classList.add('p-4', 'border-4', 'border-my-blue', 'text-my-blue', 'text-4m');

        row.appendChild(cell);
        number++;
        }
        table.appendChild(row);
    }

    calendarContainer.appendChild(table);
}

createTable(3, 3); */

