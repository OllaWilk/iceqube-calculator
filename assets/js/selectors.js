const heightInput = document.getElementById('height');
const widthInput = document.getElementById('width');
const depthInput = document.getElementById('depth');
const areaInput = document.getElementById('area');

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
const unitTemp = document.querySelectorAll('.unit-temp');

const resetBtn = document.getElementById('reset');
const calculateBtn = document.getElementById('calculate');
