/* Units selection */
unitSelector.addEventListener('change', function () {
  const selectedUnit = unitSelector.value;
  switch (selectedUnit) {
    case 'metric':
      unitDistance.forEach((span) => (span.textContent = '(m)'));
      unitArea.textContent = '(m²)';
      unitTemp.forEach((span) => (span.textContent = '(°C)'));

      break;
    case 'standard':
      unitDistance.forEach((span) => (span.textContent = '( inch )'));
      unitArea.textContent = '( ft² )';
      unitTemp.forEach((span) => (span.textContent = '(°F)'));

      break;
    default:
      console.log('invalid units');
  }
});
