const $entryBtn = document.querySelector('.entry-btn');
const $modalContainer = document.querySelector('.modal-container');
const $entryForm = document.querySelector('.entry-form');
const $dotw = document.querySelector('.days-of-the-week');
const $table = document.querySelector('table');
const $selectDayInput = document.querySelector('#day-of-week');
const $selectTimeInput = document.querySelector('#time-options');

$entryBtn.addEventListener('click', function () {
  $modalContainer.classList.remove('hidden');
});

$entryForm.addEventListener('submit', event => {
  event.preventDefault();

  const entry = {
    day: $selectDayInput.value,
    time: $selectTimeInput.value
    // time: $title.value,
    // URL: $photoURL.value,
    // notes: $notes.value
  };

  entryData.entries.unshift(entry);

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

  const $tdTime = document.createElement('td');
  $tableRow.appendChild($tdTime);

  const $tdDescription = document.createElement('td');
  $tableRow.appendChild($tdDescription);
  return $tableRow;
}
