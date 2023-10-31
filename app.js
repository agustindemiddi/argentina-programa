const formSection = document.querySelector('#formSection');
const form = document.querySelector('form');
const firstnameInput = document.querySelector('#firstname');
const lastnameInput = document.querySelector('#lastname');
const idNumberInput = document.querySelector('#idNumber');
const emailInput = document.querySelector('#email');
const phoneInput = document.querySelector('#phone');
const insuranceTypeInput = document.querySelector('#insuranceType');
const span = document.querySelector('#insuranceValue');

const onChangeInsuranceType = () => {
  span.innerText = '';
  span.append(`Valor: $${insuranceTypeInput.value}`);
};

insuranceTypeInput.addEventListener('change', onChangeInsuranceType);

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const sections = document.querySelectorAll('section');
  if (sections.length === 2) sections[1].remove();

  const insuranceType =
    insuranceTypeInput.value === '500'
      ? 'Básico'
      : insuranceTypeInput.value === '1000'
      ? 'Intermedio'
      : 'Premium';

  const data = {
    firstname: firstnameInput.value,
    lastname: lastnameInput.value,
    idNumber: idNumberInput.value,
    email: emailInput.value,
    phone: phoneInput.value,
    insuranceType: insuranceType,
    insuranceCost: insuranceTypeInput.value,
  };

  const firstnameParagraph = document.createElement('p');
  firstnameParagraph.append(`Nombre: ${data.firstname}`);

  const lastnameParagraph = document.createElement('p');
  lastnameParagraph.append(`Apellido: ${data.lastname}`);

  const idNumberParagraph = document.createElement('p');
  idNumberParagraph.append(`DNI: ${data.idNumber}`);

  const emailParagraph = document.createElement('p');
  emailParagraph.append(`Email: ${data.email}`);

  const phoneParagraph = document.createElement('p');
  phoneParagraph.append(`Teléfono: ${data.phone}`);

  const insuranceTypeParagraph = document.createElement('p');
  insuranceTypeParagraph.append(`Tipo de seguro: ${data.insuranceType}`);

  const insuranceCostParagraph = document.createElement('p');
  insuranceCostParagraph.append(`Valor: $${data.insuranceCost}`);

  const checkSection = document.createElement('section');
  checkSection.classList.add('checkSection');
  const h2 = document.createElement('h2');
  h2.innerHTML = 'Verifique sus datos:';
  checkSection.append(h2);
  checkSection.append(firstnameParagraph);
  checkSection.append(lastnameParagraph);
  checkSection.append(idNumberParagraph);
  checkSection.append(emailParagraph);
  checkSection.append(phoneParagraph);
  checkSection.append(insuranceTypeParagraph);
  checkSection.append(insuranceCostParagraph);

  const main = document.querySelector('main');
  main.append(checkSection);

  firstnameInput.value = '';
  lastnameInput.value = '';
  idNumberInput.value = '';
  emailInput.value = '';
  phoneInput.value = '';
  insuranceTypeInput.value = '500';
  span.innerText = 'Valor: $500';
});
