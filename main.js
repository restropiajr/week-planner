const $entryBtn = document.querySelector('.entry-btn');
const $modalContainer = document.querySelector('.modal-container');
const $entryForm = document.querySelector('.entry-form');
const $dotw = document.querySelector('.days-of-the-week');
const $table = document.querySelector('table');
const $selectDayInput = document.querySelector('#day-of-week');
const $selectTimeInput = document.querySelector('#time-options');
const $textInput = document.querySelector('#description');
const $tbody = document.querySelector('tbody');
$entryBtn.addEventListener('click', function () {
  $modalContainer.classList.remove('hidden');
});

$entryForm.addEventListener('submit', event => {
  event.preventDefault();

  const entry = {
    day: $selectDayInput.value,
    time: $selectTimeInput.value,
    description: $textInput.value
  };

  entryData.entries.unshift(entry);
  $tbody.prepend(renderEntry(entry));
  $modalContainer.classList.add('hidden');
  $dotw.classList.remove('hidden');
  $table.classList.remove('hidden');
});

// <tr>
//   <td>10:00</td>
//   <td>Practice Algorithms</td>
// </tr>
// <tr>
//   <td>10:00</td>
//   <td>Practice Algorithms</td>
// </tr>
// <tr>
//   <td>10:00</td>
//   <td>Practice Algorithms</td>
// </tr>

function renderEntry(entry) {
  const $tableRow = document.createElement('tr');
  $tableRow.classList.add(entry.day);

  const $tdTime = document.createElement('td');
  $tableRow.appendChild($tdTime);
  $tdTime.textContent = entry.time;

  const $tdDescription = document.createElement('td');
  $tableRow.appendChild($tdDescription);
  $tdDescription.textContent = entry.description;

  return $tableRow;
}

function viewSwap(day) {
  entryData.view = day;
}
