document.addEventListener('DOMContentLoaded', function () {
  const calculatorType = document.getElementById('calculator-type');
  const formContainer = document.getElementById('shared-form');
  const specificFields = document.getElementById('specific-fields');
  const resultsFieldset = document.querySelector('.results');
  const ambientField = document.querySelector('.ambient');
  const resultsLegend = resultsFieldset.querySelector('legend');
  const temperatureInfo = document.querySelector('.temperature');
  const unitSelector = document.getElementById('unit-selector');
  const unitDistance = document.querySelectorAll('.unit-distance');
  const unitArea = document.querySelector('.unit-area');
  const unitTemp = document.querySelector('.unit-temp');

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

  unitSelector.addEventListener('change', function () {
    const selectedUnit = unitSelector.value;
    switch (selectedUnit) {
      case 'metric':
        unitDistance.forEach((span) => (span.textContent = '(m)'));
        unitArea.textContent = '(m²)';
        unitTemp.textContent = '(°C)';
        break;
      case 'standard':
        unitDistance.forEach((span) => (span.textContent = '(inch)'));
        unitArea.textContent = '(Sq. Ft.)';
        unitTemp.textContent = '(°F)';
        break;
      default:
        console.log('Wybrano nieznaną jednostkę');
    }
  });
});
