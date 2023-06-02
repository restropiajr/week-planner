const $entryBtn = document.querySelector('.entry-btn');
const $modalContainer = document.querySelector('.modal-container');
const $entryForm = document.querySelector('.entry-form');
const $dotw = document.querySelector('.days-of-the-week');

$entryBtn.addEventListener('click', function () {
  $modalContainer.classList.remove('hidden');
});

$entryForm.addEventListener('submit', event => {
  event.preventDefault();

  $modalContainer.classList.add('hidden');
  $dotw.classList.remove('hidden');
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
  console.log($tableRow);
  return $tableRow;
}
renderEntry();
