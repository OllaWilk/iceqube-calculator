class SizingCalculator {
  constructor({
    unit = 'standard',
    location = 'indoors',
    height = 0,
    width = 0,
    depth = 0,
    SGF = 0,
    R = 0,
    IT = 0,
    AT = 0,
    IH = 0,
    frequencyHz = 0,
    BTU = 0,
  }) {
    this.unit = unit;
    this.location = location;
    this.height = Number(height);
    this.width = Number(width);
    this.depth = Number(depth);
    this.area = null;
    this.SGF = Number(SGF);
    this.R = Number(R);
    this.IT = Number(IT);
    this.AT = Number(AT);
    this.IH = Number(IH);
    this.frequencyHz = frequencyHz;

    this.BTU = Number(BTU);

    this.U = null;
    this.deltaT = null;
    this.RCC = null; //RCC – Required Cooling Capacity

    this.calculateArea();
    this.calculateHeatTransferFactor();
    this.calculateArea();
    this.calculateDeltaTemp();
    this.calculateBTU();
    this.calculateRecommendedCoolingCapacity();
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

  calculateBTU() {
    this.BTU = Number((3.412 * this.IH).toFixed(2));
    return this.BTU;
  }

  calculateHeatTransferFactor() {
    const HEAT_COEFF = 5.682;
    const locationValue = this.location === 'indoors' ? 0.86 : 0.35;
    const UValueImperial = (1 / (locationValue + this.R)).toFixed(2);
    const U = HEAT_COEFF * UValueImperial;
    console.log('1/locationValue', 1 / (locationValue + this.R));
    console.log('locationValue', locationValue);
    console.log('HEAT_COEFF', HEAT_COEFF);

    this.U = Number(U.toFixed(5));

    return this.U;
  }

  calculateDeltaTemp() {
    const deltaT = this.AT - this.IT;
    return (this.deltaT = Number(deltaT.toFixed(2)));
  }

  calculateRecommendedCoolingCapacity() {
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

    console.log('height', height); //ok
    console.log('width', width); //ok
    console.log('depth', depth);
    console.log('this.AT - this.IT', this.AT - this.IT);
    console.log('deltaT', this.deltaT);
    console.log('SGF', this.SGF);

    console.log('U', this.U);

    /* Solar Gain Walls */
    const sideWall = (height * (width + depth)).toFixed(8);
    const topWall = (width * depth).toFixed(8);

    console.log('sideWall', sideWall);
    console.log('topWall', topWall);
    console.log('this.deltaT + this.SGF', this.deltaT + this.SGF);

    const SGW = sideWall * (this.deltaT + this.SGF) * this.U;

    console.log('SGW', SGW.toFixed(2));

    /* NoSolar Gain Walls */
    const NSGW = sideWall * this.deltaT * this.U;
    console.log('NSGW', NSGW.toFixed(2));

    /* Ceiling */
    const CE = topWall * (this.deltaT + this.SGF) * this.U;

    console.log('CE', CE.toFixed(2));

    /* Floor */
    const FL = topWall * this.deltaT * this.U;
    console.log('FL', FL.toFixed(2));

    /*  RCC = SGW + NSGW + CE + FL + IH */
    const RCC = Math.round(SGW + NSGW + CE + FL + this.IH);
    console.log('RCC', RCC.toFixed(2));

    // return (this.RCC = RCC);
  }
}
