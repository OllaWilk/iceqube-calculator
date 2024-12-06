document.addEventListener('DOMContentLoaded', function () {
  const calculatorType = document.getElementById('calculator-type');
  const calculatorForms = document.querySelectorAll('.calculator-form');

  calculatorType.addEventListener('change', function () {
    const selectedValue = calculatorType.value;

    calculatorForms.forEach((form) => {
      form.style.display = 'none';
    });

    if (selectedValue === '0') {
      return;
    }

    const formToShow = document.getElementById(selectedValue);

    if (formToShow) {
      formToShow.style.display = 'block';
    }
  });
});
