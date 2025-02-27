document.addEventListener('DOMContentLoaded', function () {
  /* Default units */
  unitDistance.forEach((span) => (span.textContent = '(inch)'));
  unitArea.textContent = '(ft²)';
  unitTemp.forEach((span) => (span.textContent = '(°F)'));

  /* Acordion Calculator Type */
  calculatorType.addEventListener('change', function () {
    const selectedValue = calculatorType.value;
    if (selectedValue === '0') {
      formContainer.style.display = 'none';
      specificFields.innerHTML = '';
      resultsLegend.textContent = '';
      return;
    }
    const config = calculatorConfigs[selectedValue];

    if (config) {
      formContainer.style.display = 'block';
      specificFields.innerHTML = config.additionalFields || '';
      ambientField.textContent = config.ambient;
      temperatureInfo.innerHTML = config.temperatureInfo || '';
      resultsLegend.textContent = config.resultsLabel;
    }
  });

  console.log(resetBtn);

  resetBtn.addEventListener('click', () => {
    console.log('reset');
  });

  calculate.addEventListener('click', () => {
    console.log('calculate');
  });
});
