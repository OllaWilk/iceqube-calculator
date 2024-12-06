document.addEventListener('DOMContentLoaded', function () {
  const calculatorType = document.getElementById('calculator-type');
  const calculatorForm = document.getElementById('calculator-form');

  calculatorType.addEventListener('change', function () {
    if (calculatorType.value === '0') {
      calculatorForm.style.display = 'none';
    } else {
      calculatorForm.style.display = 'block';
    }
  });
});
