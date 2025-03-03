class SizingCalculator {
  constructor(unit, location, height, width, depth, exposure) {
    this.unit = 'standard' || String(unit).trim;
    this.location = location;
    this.height = null || Number(height).toFixed(2);
    this.width = null || Number(width).toFixed(2);
    this.depth = null || Number(depth).toFixed(2);
    this.area = null;
    this.exposure = 0 || exposure;
  }

  selectUnits() {
    return;
  }

  selectLocation() {
    return;
  }

  calculateVolume() {
    return;
  }

  calculateArea() {
    return;
  }
}
