const calculatorConfigs = {
  'air-conditioning': {
    title: 'Air Conditioning Calculator',
    additionalFields: `
        <fieldset>
          <legend>Insulation R-Value</legend>
          <select id="rValue">
                <option value="0">None</option>
                <option value="1">R-1</option>
                <option value="2">R-2</option>
                <option value="3">R-3</option>
                <option value="4">R-4</option>
                <option value="5">R-5</option>
                <option value="6">R-6</option>
                <option value="7">R-7</option>
                <option value="8">R-8</option>
                <option value="9">R-9</option>
                <option value="10">R-10</option>
                <option value="11">R-11</option>
                <option value="12">R-12</option>
          </select>
        </fieldset>
      `,
    ambient: 'Maximum ambient temperature',

    resultsLabel: 'Recommended Cooling Capacity in BTUH',
  },
  'filtered-fan': {
    title: 'Filtered Fan Calculator',
    additionalFields: `
        <fieldset>
          <legend>Fan Operation</legend>
          <label><input type="checkbox" id="fan-operation"> Push-Pull</label>
        </fieldset>
      `,
    ambient: 'Maximum ambient temperature',
    temperatureInfo: `<p class="tempinfo" >The outdoor temperature should be at least 5°F (3°C) cooler than the enclosure, or a fan will not perform correctly. Please select an air conditioner.</p>`,
    resultsLabel: 'Recommended Cooling CFM',
  },
  'heat-exchanger': {
    title: 'Heat Exchanger Calculator',
    ambient: 'Maximum ambient temperature',
    temperatureInfo: `<p class="tempinfo" >The outdoor temperature should be at least 5° (3°C) cooler than the enclosure or a heat exchanger will not perform correctly. Please select an air conditioner.</p>`,

    resultsLabel: 'Recommended Watts/°F',
  },
  heat: {
    title: 'Heat Calculator',
    additionalFields: `
        <fieldset>
          <legend>Insulation R-Value</legend>
          <select id="rValue">
            <option value="0">None</option>
                <option value="1">R-1</option>
                <option value="2">R-2</option>
                <option value="3">R-3</option>
                <option value="4">R-4</option>
                <option value="5">R-5</option>
                <option value="6">R-6</option>
                <option value="7">R-7</option>
                <option value="8">R-8</option>
                <option value="9">R-9</option>
                <option value="10">R-10</option>
                <option value="11">R-11</option>
                <option value="12">R-12</option>
          </select>
        </fieldset>
      `,
    ambient: 'Minimum ambient temperature',
    resultsLabel: 'Recommended Heating Capacity in Watts',
  },
  thermoelectric: {
    title: 'Thermoelectric Calculator',
    additionalFields: `
        <fieldset>
          <legend>Insulation R-Value</legend>
          <select id="rValue">
           <option value="0">None</option>
                <option value="1">R-1</option>
                <option value="2">R-2</option>
                <option value="3">R-3</option>
                <option value="4">R-4</option>
                <option value="5">R-5</option>
                <option value="6">R-6</option>
                <option value="7">R-7</option>
                <option value="8">R-8</option>
                <option value="9">R-9</option>
                <option value="10">R-10</option>
                <option value="11">R-11</option>
                <option value="12">R-12</option>
          </select>
        </fieldset>
      `,
    ambient: 'Maximum ambient temperature',
    resultsLabel: 'Recommended Cooling Capacity in W',
  },
};
