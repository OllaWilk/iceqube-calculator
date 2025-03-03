class SizingCalculator {
  constructor({
    unit = 'standard',
    location = 'indoors',
    height,
    width,
    depth,
    sunExposure,
    rValue,
    internalTemp,
    ambientTemp,
    heatDissipation,
    frequencyHz,
    btuPerHour,
  }) {
    this.unit = unit;
    this.location = location;
    this.height = Number(height);
    this.width = Number(width);
    this.depth = Number(depth);
    this.sunExposure = sunExposure;
    this.rValue = rValue;
    this.internalTemp = internalTemp;
    this.ambientTemp = ambientTemp;
    this.heatDissipation = heatDissipation;
    this.frequencyHz = frequencyHz;
    this.btuPerHour = btuPerHour;
    this.area = null;

    this.calculateArea();
  }

  calculateArea() {
    const hInMeters = this.height / 1000;
    const wInMeters = this.width / 1000;
    const dInMeters = this.depth / 1000;

    const area =
      2 * (hInMeters * dInMeters) +
      2 * (hInMeters * wInMeters) +
      2 * (wInMeters * dInMeters);

    return (this.area = Number(area.toFixed(2)));
  }
}
