import throttle from 'lodash.throttle';

FIELDS_KEY = 'feedback-form-state';

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
    localStorage.removeItem(FIELDS_KEY);
    fillTextarea();
  event.currentTarget.reset();
  console.log(dataEl);
});

function onTextareaInput(event) {
  dataEl[event.target.name] = event.target.value;
  const changedData = JSON.stringify(dataEl);
  localStorage.setItem(FIELDS_KEY, changedData);
}
function fillTextarea() {
  const savedMessage = JSON.parse(localStorage.getItem(FIELDS_KEY));
  if (savedMessage === null) {
    return;
  }

  textareaEl.value = savedMessage.message || '';
  input.value = savedMessage.email || '';
  dataEl.email = savedMessage.email || '';
  dataEl.message = savedMessage.message || '';
}


