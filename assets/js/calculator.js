class SizingCalculator {
  constructor({
    unit = 'standard',
    location = 'indoors',
    height = 0,
    width = 0,
    depth = 0,
    sunExposure,
    rValue = 0,
    internalTemp = 0,
    ambientTemp = 0,
    heatDissipation = 0,
    frequencyHz = 0,
    btuPerHour = 0,
  }) {
    this.unit = unit;
    this.location = location;
    this.height = Number(height);
    this.width = Number(width);
    this.depth = Number(depth);
    this.sunExposure = sunExposure;
    this.rValue = Number(rValue);
    this.internalTemp = internalTemp;
    this.ambientTemp = ambientTemp;
    this.heatDissipation = heatDissipation;
    this.frequencyHz = frequencyHz;
    this.btuPerHour = Number(btuPerHour);

    this.area = null;
    this.heatTransferFactor = null;
    this.deltaTemp = null;
    this.solarGainFactor = null;
    this.coolingCapacity = null;

    this.calculateArea();
    this.calculateHeatTransferFactor();
    this.calculateArea();
    this.calculateDeltaTemp();
    this.calculateBTU();
    this.calculateSolarGainFactor();
  }

  calculateHeatTransferFactor() {
    const HEAT_COEFF = 5.682;
    const baseValue = this.location === 'indoors' ? 0.86 : 0.35;

    const factor = HEAT_COEFF * (1 / baseValue + this.rValue);

    console.log('FACTOR', factor);
    this.heatTransferFactor = Number(factor);
    return this.heatTransferFactor;
  }

  calculateArea() {
    let height, width, depth;

    if (this.unit === 'metric') {
      height = this.height / 1000;
      width = this.width / 1000;
      depth = this.depth / 1000;
    } else if (this.unit === 'standard') {
      height = this.height / 12;
      width = this.width / 12;
      depth = this.depth / 12;
    }

    const area =
      2 * (height * depth) + 2 * (height * width) + 2 * (width * depth);

    this.area = Number(area.toFixed(2));
    return this.area;
  }

  calculateDeltaTemp() {
    this.deltaTemp = this.ambientTemp - this.internalTemp;

    return this.deltaTemp;
  }

  calculateSolarGainFactor() {
    this.solarGainFactor = Number(this.sunExposure) || 0;
    return this.solarGainFactor;
  }

  calculateBTU() {
    this.calculateBTU = Number(3.412 * this.heatDissipation);
    return this.calculateBTU;
  }

  calculateRecommendedCooling() {}
}
