import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const input = document.querySelector('input');
const textareaEl = document.querySelector('textarea');

const STORAGE_KEY = 'feedback-form-state';

const dataEl = {
    email: '',
    message: '',
};

form.addEventListener('input', throttle(onFormTextInput, 500));
fillTextarea();

form.addEventListener('submit', event => {
  event.preventDefault();
  if (Object.values(dataEl).some(value => value === ''.trim())) {
    alert('Fill all fields, please!')
  }
    localStorage.removeItem(STORAGE_KEY);
  event.currentTarget.reset();
  console.log(dataEl);
});

function onFormTextInput(event) {
  dataEl[event.target.name] = event.target.value;
  const changedData = JSON.stringify(dataEl);
  localStorage.setItem(STORAGE_KEY, changedData);
  fillTextarea();
};
function fillTextarea() {
  const savedMessage = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (savedMessage === null) {
    return;
  }
  textareaEl.value = savedMessage.message || '';
  input.value = savedMessage.email || '';
  dataEl.email = savedMessage.email || '';
  dataEl.message = savedMessage.message || '';
};



