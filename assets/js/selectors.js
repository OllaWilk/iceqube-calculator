/* Inputs */
/* Units */
const unitSelector = document.getElementById('unit-selector');
/* Location of Enclosure */
const locationSelector = document.getElementById('location-selector');
/* Physical outside dimensions of the enclosure */
const heightInput = document.getElementById('height');
const widthInput = document.getElementById('width');
const depthInput = document.getElementById('depth');
const areaInput = document.getElementById('area');

/* Sun exposure */
const sunExposureInputs = document.getElementById('sun-exposure');
/* Insulation R-Value */
// const insulationRValue = document.getElementById('specific-fields');
/* Various */
const desiredInternalEnclosureTemperature = document.getElementById(
  'desired-internal-enclosure-temperature'
);
const ambientTemperature = document.getElementById('ambient-temperature');
const heatDissipatedByElectronicEquipment =
  document.getElementById('heat-dissipated');

const hzOperation = document.querySelectorAll('input[name="hz-operation"]');
const orBTUPerHour = document.getElementById('or-btu-per-hour');
const fanOperation = document.getElementById('fan-operation');

const calculatorType = document.getElementById('calculator-type');
const formContainer = document.getElementById('shared-form');
const specificFields = document.getElementById('specific-fields');
const resultsFieldset = document.querySelector('.results');
const ambientField = document.querySelector('.ambient');
const resultsLegend = resultsFieldset.querySelector('legend');

const temperatureInfo = document.querySelector('.temperature');
const unitDistance = document.querySelectorAll('.unit-distance');
const unitArea = document.querySelector('.unit-area');
const unitTemp = document.querySelectorAll('.unit-temp');

const resetBtn = document.getElementById('reset');
const calculateBtn = document.getElementById('calculate');

console.log({
  unitSelector,
  locationSelector,
  heightInput,
  widthInput,
  depthInput,
  areaInput,
  sunExposureInputs,
  // insulationRValue,
  desiredInternalEnclosureTemperature,
  ambientTemperature,
  heatDissipatedByElectronicEquipment,
  hzOperation,
  orBTUPerHour,
  fanOperation,
  calculatorType,
  formContainer,
  specificFields,
  resultsFieldset,
  ambientField,
  resultsLegend,
  temperatureInfo,
  unitDistance,
  unitArea,
  unitTemp,
  resetBtn,
  calculateBtn,
});
