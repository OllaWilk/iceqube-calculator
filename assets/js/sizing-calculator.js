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
        console.log;
      }
    });
    // console.log('formData', formData);
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
    areaInput.value = calculator.area;

    // console.log('UNIT', calculator.unit); //ok
    // console.log('location', calculator.location); //ok

    // console.log('height', calculator.height); //ok
    // console.log('width', calculator.width); //ok
    // console.log('depth', calculator.depth); //ok
    // console.log('area', calculator.area); //ok
    // console.log('SGF', calculator.SGF); //ok
    // console.log('R', calculator.R); //ok
    // console.log('IT', calculator.IT); //ok
    // console.log('AT', calculator.AT); //ok
    // console.log('IH', calculator.IH); //ok
    // console.log('frequencyHz', calculator.frequencyHz); //ok
    // console.log('BTU', calculator.BTU); //ok
    // console.log('U', calculator.U); //ok
    // console.log('deltaTU', calculator.deltaT); //ok

    // console.log('RCC', calculator.RCC);
  });
});
