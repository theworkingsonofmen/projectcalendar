// Get the current date
let today = new Date();

// Render the calendar for the current month
renderCalendar(today);

// Get a reference to the left arrow button
const leftArrow = document.querySelector('#prev-month');

// Add an event listener to the left arrow button
leftArrow.addEventListener('click', () => {
  // Get the previous month
  today.setMonth(today.getMonth() - 1);
  
  // Render the calendar for the new month
  renderCalendar(today);
});

// Get a reference to the right arrow button
const rightArrow = document.querySelector('#next-month');

// Add an event listener to the right arrow button
rightArrow.addEventListener('click', () => {
  // Get the next month
  today.setMonth(today.getMonth() + 1);
  
  // Render the calendar for the new month
  renderCalendar(today);
});


function renderCalendar(date) {
  // Get the first day of the current month
  const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);

  // Get the last day of the current month
  const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);

  // Calculate the number of days in the current month
  const numDays = lastDay.getDate();

  // Get the starting day of the current month (e.g., "Monday")
  const startDay = firstDay.getDay();

  // Get a reference to the table body element
  const tbody = document.querySelector('tbody');

  // Clear the table body
  tbody.innerHTML = '';

  // Counter for the current day of the month
  let dayCount = 1;

  // Loop through each row of the table
  for (let i = 0; i < 6; i++) {
    // Create a new table row
    const row = document.createElement('tr');

    // Loop through each column of the table
    for (let j = 0; j < 7; j++) {
      // Create a new table cell
      const cell = document.createElement('td');
      cell.classList.add('cell');

      // Check if the current cell should contain a date
      if (i === 0 && j < startDay) {
        // Empty cell before the first day of the month
        cell.textContent = '';
      } else if (dayCount <= numDays) {
        // Cell with the current day of the month
        cell.textContent = dayCount;
        dayCount++;
      } else {
        // Empty cell after the last day of the month
        cell.textContent = '';
      }

      // Add the cell to the current row
      row.appendChild(cell);
    }

    // Add the row to the table body
    tbody.appendChild(row);
  }

  // Update the month and year displayed at the top of the calendar
  const monthYear = document.querySelector('#month');
  monthYear.textContent = date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
}
