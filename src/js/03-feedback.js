import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('input'),
  textarea: document.querySelector('textarea'),
};

const storageKey = {
  message: 'feedback-form-state',
  mail: 'mailTo',
};

insertInput();

refs.form.addEventListener('submit', onFormSubmit);
refs.input.addEventListener('input', throttle(onMailInput, 500));
refs.textarea.addEventListener('input', throttle(onTextareaInput, 500));

function onFormSubmit(event) {
  event.preventDefault();

  if (refs.input.value === '' || refs.textarea.value === '') {
    return alert('All fields must be are filled');
  }
  console.log({ email: refs.input.value, message: refs.textarea.value });

  event.currentTarget.reset();
  localStorage.removeItem(storageKey.mail);
  localStorage.removeItem(storageKey.message);
}

function onMailInput(event) {
  const email = event.target.value;
  localStorage.setItem(storageKey.mail, email);
}

function onTextareaInput(event) {
  const message = event.target.value;
  localStorage.setItem(storageKey.message, message);
}

function insertInput() {
  const savedMessage = localStorage.getItem(storageKey.message);
  const savedMailTo = localStorage.getItem(storageKey.mail);

  if (savedMessage) {
    refs.textarea.value = savedMessage;
  }
  if (savedMailTo) {
    refs.input.value = savedMailTo;
  }
}
