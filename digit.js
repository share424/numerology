const MASTER_NUMBER = [11, 22];

class Digit {
  constructor(value) {
    this.value = value;
    this.string = String(value);
    this.simplified = this.calculate(this.value)
    this.isMasterNumber = MASTER_NUMBER.includes(this.simplified);
  }

  calculate(value) {
    if (MASTER_NUMBER.includes(value)) {
      return value;
    }

    if (value < 10) {
      return value;
    }
    const chars = value.toString();
    let sum = 0;
    for(let i = 0; i<chars.length; i++) {
      sum += Number(chars[i]);
    }

    this.string = this.string + '/' + String(sum);

    return this.calculate(sum);
  }

  add(digit) {
    return new Digit(this.value + digit.value);
  }

  sub(digit) {
    return new Digit(this.value - digit.value);
  }
}