/* Inputs */

/* Units */
const unitSelector = document.getElementById('unit');
/* Location of Enclosure */
const locationSelector = document.getElementById('location');
/* Physical outside dimensions of the enclosure */
const heightInput = document.getElementById('height');
const widthInput = document.getElementById('width');
const depthInput = document.getElementById('depth');
const areaInput = document.getElementById('area');

/* Sun exposure */
const sunExposureInputs = document.getElementById('sunExposure');
/* Insulation R-Value */
const insulationRValue = document.getElementById('rValue');
/* Various */
const desiredInternalEnclosureTemperature =
  document.getElementById('internalTemp');
const ambientTemperature = document.getElementById('ambientTemp');
const heatDissipatedByElectronicEquipment =
  document.getElementById('heatDissipation');

const hzOperation = document.querySelectorAll('input[name="frequencyHz"]');
const orBTUPerHour = document.getElementById('btuPerHour');
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
