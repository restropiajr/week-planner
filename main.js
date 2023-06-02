const $entryBtn = document.querySelector('.entry-btn');
const $submitBtn = document.querySelector('.submit-btn');
const $modalContainer = document.querySelector('.modal-container');

$entryBtn.addEventListener('click', function () {
  $modalContainer.classList.remove('hidden');
});

$submitBtn.addEventListener('click', function () {
  $modalContainer.classList.add('hidden');
});
