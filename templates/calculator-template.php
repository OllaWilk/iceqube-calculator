<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>IceQube Sizing Calculator</title>

</head>

<body>
    <div id="sizing-calculator">
        <h1 class="calculator-title">IceQube Sizing Calculator</h1>
        <select id="calculator-type">
            <option value="0">Please Select Calculator Type</option>
            <option value="air-conditioning">Air Conditioning Calculator</option>
            <option value="filtered-fan">Filtered Fan Calculator</option>
            <option value="heat-exchanger">Heat Exchanger Calculator</option>
            <option value="heat">Heat Calculator</option>
            <option value="thermoelectric">Thermoelectric Calculator</option>
        </select>

        <form id="shared-form" style="display: none;">
            <!-- Wspólne pola -->
            <div class="row-direction-2">
                <fieldset>
                    <legend>Units</legend>
                    <select id="unit-selector">
                        <option value="standard">Standard</option>
                        <option value="metric">Metric</option>
                    </select>
                </fieldset>
                <fieldset>
                    <legend>Location of Enclosure</legend>
                    <select>
                        <option value="0">Indoors</option>
                        <option value="1">Outdoors</option>
                    </select>
                </fieldset>
            </div>

            <fieldset class="row-direction-4">
                <legend>Physical outside dimensions of the enclosure</legend>
                <div class="dimension"><label>Height <span class="unit-distance"></span></label><input
                        type="number" step="any" min="0">
                </div>
                <div class="dimension"><label>Width <span class="unit-distance"></span></label><input
                        type="number" step="any" min="0"></div>
                <div class="dimension"><label>Depth <span class="unit-distance"></span></label><input
                        type="number" step="any" min="0"></div>
                <div class="dimension"><label>Area <span class="unit-area"></span></label><input type="text"
                        readonly="readonly"></div>
            </fieldset>

            <!-- Specyficzne pola -->
            <div id="specific-fields"></div>

            <fieldset id="various">
                <legend>Various</legend>
                <div class="form-row">
                    <label>Desired internal enclosure temperature</label>
                    <input type="number" step="any">
                    <span class="unit-temp"></span>
                </div>
                <div class="form-row">
                    <label class="ambient"></label>
                    <input type="number" step="any">
                    <span class="unit-temp"></span>
                </div>
                <div class="temperature"></div>
                <div class="form-row">
                    <label>Heat dissipated by electronic equipment (watts)</label>
                    <input type="number" step="any">
                </div>
                <div class="row-direction-2">
                    <fieldset class="hz">
                        <legend>Hz Operation</legend>
                        <label>
                            <input type="radio" value="0" name="hz-operation"> 60Hz
                        </label>
                        <label>
                            <input type="radio" name="hz-operation" value="1"> 50Hz
                        </label>
                    </fieldset>
                    <fieldset>

                        <legend>OR BTU Per Hour</legend>
                        <label colspan="2"><input type="number" step="any" class="missing"></label>
                    </fieldset>
                </div>
            </fieldset>

            <!-- Przyciski -->
            <fieldset class="results">
                <legend></legend>
                <div>Please Fill Out Form</div>
                <a class="button">Calculate</a>
                <a class="button">Reset</a>
                <a href="https://iceqube.com" class="button">Visit IceQube.com</a>
            </fieldset>
        </form>
    </div>
</body>

</html>