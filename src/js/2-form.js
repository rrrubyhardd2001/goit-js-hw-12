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
  let fieldValue = event.target.value.trim();
  let fieldName = event.target.name.trim();
  myDataBase[fieldName] = fieldValue;

  localStorage.setItem('feedBackFormState', JSON.stringify(myDataBase));
};

const onSubmitForm = event => {
  event.preventDefault();

  const email = myDataBase.email;
  const message = myDataBase.message;

  localStorage.removeItem('feedBackFormState');
  if (email === '' || message === '') {
    alert('Fill please all fields');
    return;
  }
  console.log(myDataBase);

  event.target.reset();

  myDataBase = { email: '', message: '' };
};

feedBackFormState.addEventListener('submit', onSubmitForm);
feedBackFormState.addEventListener('input', onChangeFormField);
