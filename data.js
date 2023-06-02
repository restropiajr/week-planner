var entryData = {
  view: 'monday',
  entries: [],
  editing: null
};

window.addEventListener('beforeunload', event => {

  const dataJSON = JSON.stringify(entryData);
  localStorage.setItem('entryData', dataJSON);

});

const previousDataJSON = localStorage.getItem('entryData');

if (previousDataJSON !== null) {
  entryData = JSON.parse(previousDataJSON);
}
