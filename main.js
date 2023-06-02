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
  $entryForm.reset();
  viewSwap('monday');
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

document.addEventListener('DOMContentLoaded', event => {

  for (const entry of entryData.entries) {
    $tbody.appendChild(renderEntry(entry));
  }

  viewSwap(entryData.view);
});

function viewSwap(day) {
  const rows = document.querySelectorAll('tr');
  rows.forEach(row => {
    if (row.classList.contains(day)) {
      row.classList.remove('hidden');
    } else {
      row.classList.add('hidden');
    }
  });

  entryData.view = day;
}

const $scheduledDay = document.querySelector('#scheduledDay');

$dotw.addEventListener('click', function (event) {
  const day = event.target.textContent.toLowerCase();
  switch (day) {
    case 'sunday':
      viewSwap('sunday');
      $scheduledDay.textContent = 'sunday';
      break;
    case 'monday':
      viewSwap('monday');
      $scheduledDay.textContent = 'monday';
      break;
    case 'tuesday':
      viewSwap('tuesday');
      $scheduledDay.textContent = day;
      break;
    case 'wednesday':
      viewSwap('wednesday');
      $scheduledDay.textContent = day;
      break;
    case 'thursday':
      viewSwap('thursday');
      $scheduledDay.textContent = day;
      break;
    case 'friday':
      viewSwap('friday');
      $scheduledDay.textContent = day;
      break;
    case 'saturday':
      viewSwap('saturday');
      $scheduledDay.textContent = day;
      break;
  }

});
