import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('input'),
  textarea: document.querySelector('textarea'),
};

const STORAGE_KEY = 'feedback-form-state';

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onFormInput, 500));

function onFormInput() {
  const formInput = {
    mail: refs.input.value,
    message: refs.textarea.value,
  };

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formInput));
}

function onFormSubmit(event) {
  event.preventDefault();

  if (refs.input.value === '' || refs.textarea.value === '') {
    return alert('All fields must be are filled');
  }
  console.log({ email: refs.input.value, message: refs.textarea.value });

  event.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

const loadValue = key => {
  try {
    const dataForm = localStorage.getItem(key);
    return dataForm === null ? undefined : JSON.parse(dataForm);
  } catch (error) {
    console.error('Get state error: ', error.message);
  }
};

const savedMessage = loadValue(STORAGE_KEY);

if (savedMessage) {
  refs.input.value = savedMessage.mail;
  refs.textarea.value = savedMessage.message;
}
