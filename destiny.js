class Destiny {
  constructor(name) {
    this.name = name.toUpperCase();
    this.digit = this.calculate();
  }

  calculate() {
    const components = this.name.split(' ');
    let total = new Digit(0);
    for(const component of components) {
      let digit = new Digit(0);
      for(const char of component) {
        const letter = new Letter(char);
        digit = digit.add(letter.digit);
      }
      total = total.add(digit);
    }
    return total;
  }

  async getDescription() {
    const data = await fetch('databases/destiny.json').then((response) => response.json());
    return data['description'];
  }

  async getResults() {
    const data = await fetch('databases/destiny.json').then((response) => response.json());
    let otherData = [];
    if (this.digit.isMasterNumber) {
      const map = {
        "11": "2",
        "22": "4"
      };
      otherData = data[map[String(this.digit.simplified)]];
    }
    return otherData.concat(data[String(this.digit.simplified)]);
  }
}
