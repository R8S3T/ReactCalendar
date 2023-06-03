/* alert('working'); */

function createTable(rows, columns) {
    let table = document.createElement('table');

    let number = 1;
    for (let r = 0; r < rows; r++) {
        let row = document.createElement('tr');
        row.classList.add('calendar-row');

        for (let c = 0; c < columns; c++) {
            let cell = document.createElement('td');
            cell.textContent = number;

            cell.classList.add('calendar-cell');

            row.appendChild(cell);
            number++;
        }
    table.appendChild(row);
    }
    let calendarContainer = document.getElementById('calendar-container');
    calendarContainer.appendChild(table);

    calendarContainer.classList.add('calendar-container');
};

createTable(3, 3);

