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

  /* Units selection */
  unitSelector.addEventListener('change', function () {
    if (unitSelector.value === 'metric') {
      unitDistance.forEach((span) => (span.textContent = '(m)'));
      unitArea.textContent = '(m²)';
      unitTemp.forEach((span) => (span.textContent = '(°C)'));
    } else if (unitSelector.value === 'standard') {
      unitDistance.forEach((span) => (span.textContent = '( inch )'));
      unitArea.textContent = '( ft² )';
      unitTemp.forEach((span) => (span.textContent = '(°F)'));
    } else {
      console.log('invalid units');
    }
  });

  resetBtn.addEventListener('click', () => {
    console.log('reset');
  });

  calculate.addEventListener('click', () => {
    const calculator = new SizingCalculator();
  });
});
