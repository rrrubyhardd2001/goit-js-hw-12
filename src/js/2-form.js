const feedBackFormState = document.querySelector('.feedback-form');
let myDataBase = {
  email: '',
  message: '',
};

const fillForms = () => {
  const formDataFields = JSON.parse(localStorage.getItem('feedBackFormState'));
  if (formDataFields === null) {
    return;
  }
  myDataBase = formDataFields;
  for (const key in formDataFields) {
    if (formDataFields.hasOwnProperty(key)) {
      feedBackFormState.elements[key].value = formDataFields[key];
    }
  }
};
fillForms();

const onChangeFormField = event => {
  let fieldValue = event.target.value;
  let fieldName = event.target.name;
  myDataBase[fieldName] = fieldValue;
  localStorage.setItem('feedBackFormState', JSON.stringify(myDataBase));
};

const onSubmitForm = event => {
  const email = myDataBase.email.trim();
  const message = myDataBase.message.trim();
  event.preventDefault();
  event.target.reset();
  localStorage.removeItem('feedBackFormState');
  if (email === '' || message === '') {
    alert('Fill please all fields');
    return;
  }
};

feedBackFormState.addEventListener('change', onChangeFormField);
feedBackFormState.addEventListener('submit', onSubmitForm);
