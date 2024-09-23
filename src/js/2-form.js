const feedBackFormState = document.querySelector('.feedback-form');
let myDataBase = {
  email: '',
  message: '',
};

const fillForms = () => {
  const formDataFields = JSON.parse(
    localStorage.getItem('feedback-form-state')
  );
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
  let fieldName = event.target.name.trim();
  let fieldValue = event.target.value.trim();

  myDataBase[fieldName] = fieldValue;

  localStorage.setItem('feedback-form-state', JSON.stringify(myDataBase));
};

const onSubmitForm = event => {
  event.preventDefault();

  if (myDataBase.email === '' || myDataBase.message === '') {
    alert('Fill please all fields');
    return;
  }
  console.log(myDataBase);

  event.target.reset();
  localStorage.removeItem('feedback-form-state');
  myDataBase = {};
};

feedBackFormState.addEventListener('submit', onSubmitForm);
feedBackFormState.addEventListener('input', onChangeFormField);
