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

// render entry function
