document.addEventListener('DOMContentLoaded', function () {
  const calculatorType = document.getElementById('calculator-type');
  const output = document.getElementById('calculator-output');

  calculatorType.addEventListener('change', function () {
    const selectedValue = calculatorType.value;
    const selectedText =
      calculatorType.options[calculatorType.selectedIndex].text;

    if (selectedValue === '0') {
      output.textContent = '';
    } else {
      output.textContent = selectedText;
    }
  });
});
