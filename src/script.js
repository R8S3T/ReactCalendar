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

// Previous Button
const prevBtn = document.createElement('button');
prevBtn.id = 'prevBtn';
prevBtn.textContent = '< Prev';
header.appendChild(prevBtn);

// Create Monbths array
const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];


const monthYear = document.createElement('h2');
monthYear.id = 'monthYear';
monthYear.textContent = ' Month/ Year';
header.appendChild(monthYear);


// Next Button
const nextBtn = document.createElement('button');
nextBtn.id = 'nextBtn';
nextBtn.textContent = 'Next >';
header.appendChild(nextBtn);


// calendar table
const table = document.createElement('table');
calendarContainer.appendChild(table);


// Table header for days of the week
const tHead = document.createElement('thead');
table.appendChild(tHead);

const headerRow = document.createElement('tr');
headerRow.classList.add('bg-my-green')
tHead.appendChild(headerRow);


// Function to create the days of a week
function days() {
    const daysofWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    daysofWeek.forEach((day) => {
        const th = document.createElement('th');
        th.textContent = day;
        th.classList.add('bg-my-grey')
        headerRow.appendChild(th);
    });
}
days();


// Get the current date
const currentDate = new Date();

// Table body
const tbody = document.createElement("tbody");
tbody.id = "calendarBody";
table.appendChild(tbody);

// Calendar Function
function generateCalendar() {
    tbody.innerHTML = '';

    // Current month and year
    const month = currentDate.getMonth();
    const year = currentDate.getFullYear();

    // Update Month/ Year display
    monthYear.textContent = `${months[month]} ${year}`;

    // Get the first day and last day of the month
    const firstDay = new Date(year, month, 0).getDay();
    const lastDay = new Date(year, month + 1, 0).getDate();

    // Generate calendar days
    let date = 1;
    for (let week = 0; week < 6; week++) {
        const row = document.createElement('tr');

        for (let day = 0; day < 7; day++) {
        const cell = document.createElement('td');

        if (week === 0 && day < firstDay) {
            // Empty cells before the first day
            cell.textContent = '';
        } else if (date > lastDay) {
            // Empty cells after the last day
            cell.textContent = '';
        } else {
            // Fill in the date
            cell.textContent = date;
            if (
            date === currentDate.getDate() &&
            month === currentDate.getMonth() &&
            year === currentDate.getFullYear()
            ) {
            // Highlight the current date
            cell.classList.add('current');
            }
            date++;
        }

        row.appendChild(cell);
        }

        tbody.appendChild(row);
    }
}

// event listener for prev button
prevBtn.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    generateCalendar();
});

// event listener for next month
nextBtn.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    generateCalendar();
})
generateCalendar();






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

