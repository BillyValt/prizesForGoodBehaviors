const saveButton = document.querySelector('.save-button-js');
let settingsCheckboxEl = document.querySelector('.settings-checkbox-js');
const savedNotif = document.querySelector('.saved_notification');


export let savedDemoIsOn = JSON.parse(localStorage.getItem('setting'));
let timerId;

let checkboxStatement = settingsCheckboxEl.checked = savedDemoIsOn;

export { checkboxStatement };

console.log(savedDemoIsOn);

// settingsCheckboxEl.addEventListener('click', () => {
//   console.log(typeof checkboxStatement);
// });

let saveButtonListener = saveButton.addEventListener('click', () => {
  localStorage.setItem('setting', settingsCheckboxEl.checked);

  savedNotif.style.visibility = 'visible';
  savedNotif.innerHTML = 'Сохранено ✅';

  timerId = setTimeout(() => {
    clearTimeout(timerId);

    savedNotif.innerHTML = '';
    savedNotif.style.visibility = 'hidden';
  }, 1200);

  console.log(savedDemoIsOn);
});
