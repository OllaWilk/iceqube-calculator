document.addEventListener('DOMContentLoaded', function () {
  const calculatorType = document.getElementById('calculator-type');
  const formContainer = document.getElementById('shared-form');
  const specificFields = document.getElementById('specific-fields');
  const resultsFieldset = document.querySelector('.results');
  const ambientField = document.querySelector('.ambient');
  const resultsLegend = resultsFieldset.querySelector('legend');
  const temperatureInfo = document.querySelector('.temperature');

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
});
