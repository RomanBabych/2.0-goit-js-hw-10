const form = document.querySelector('.feedback-form');
const formState = 'feedback-form-state';
const savedLocalStorageData = JSON.parse(localStorage.getItem(formState));
let formData = {
  email: '',
  message: '',
};

if (savedLocalStorageData) {
  formData = {
    ...savedLocalStorageData,
  };
  for (const [key, value] of Object.entries(formData)) {
    form.elements[key].value = value;
  }
}

form.addEventListener('input', onFormInput);

function onFormInput(evt) {
  const { name, value } = evt.target;
  formData[name] = value.trim();
  localStorage.setItem(formState, JSON.stringify(formData));
}

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(evt) {
  evt.preventDefault();
  const { email, message } = formData;
  if (!email || !message) {
    alert('Fill please all fields');
    return;
  }
  console.log(formData);
  evt.currentTarget.reset();
  formData = {
    email: '',
    message: '',
  };
  localStorage.removeItem(formState);
}
