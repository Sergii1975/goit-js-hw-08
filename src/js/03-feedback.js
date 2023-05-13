import throttle from 'lodash.throttle';

STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');
const input = document.querySelector('input');
const textareaEl = document.querySelector('textarea');

const dataEl = {
    email: '',
    message: '',
};

form.addEventListener('input', throttle(onTextareaInput, 500));
form.addEventListener('submit', event => {
  event.preventDefault();
    localStorage.removeItem(STORAGE_KEY);
    fillTextarea();
  event.currentTarget.reset();
  console.log(dataEl);
});

function onTextareaInput(event) {
  dataEl[event.target.name] = event.target.value;
  const changedData = JSON.stringify(dataEl);
  localStorage.setItem(STORAGE_KEY, changedData);
}
function fillTextarea() {
  const savedMessage = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (savedMessage === null) {
    return;
  }

  textareaEl.value = savedMessage.message || '';
  input.value = savedMessage.email || '';
  dataEl.email = savedMessage.email || '';
  dataEl.message = savedMessage.message || '';
}


