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
      specificFields.innerHTML = '';
      specificFields.insertAdjacentHTML(
        'beforeend',
        config.additionalFields || ''
      );

      ambientField.textContent = config.ambient;
      temperatureInfo.innerHTML = config.temperatureInfo || '';
      resultsLegend.textContent = config.resultsLabel;
    }
  });

  /* get form values */

  const getFormValues = function () {
    const formData = {};

    formContainer.querySelectorAll('input, select').forEach((input) => {
      if (input.type === 'radio') {
        if (input.checked) formData[input.name] = input.value;
      } else if (input.type === 'checkbox') {
        formData[input.name] = input.checked;
      } else {
        formData[input.id || input.name] = input.value;
      }
    });

    return formData;
  };

  /* Units selection change */
  unitSelector.addEventListener('change', function () {
    if (unitSelector.value === 'metric') {
      unitDistance.forEach((span) => (span.textContent = '(mm)'));
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
    const formData = getFormValues();
    const calculator = new SizingCalculator(formData);

    console.log(calculator);
    areaInput.value = calculator.area;

    // console.log(formData);
  });
});
