const CONSONANTS = 'BCDFGHJKLMNPQRSTVWXYZ';

class Personality {
  constructor(name) {
    this.name = name.toUpperCase();
    this.digit = this.calculate();
  }

  calculate() {
    let total = new Digit(0);
    for(const char of this.name) {
      if (CONSONANTS.includes(char)) {
        const letter = new Letter(char);
        total = total.add(letter.digit);
      }
    }
    return total;
  }

  async getDescription() {
    const data = await fetch('databases/personality.json').then((response) => response.json());
    return data['description'];
  }

  async getResults() {
    const data = await fetch('databases/personality.json').then((response) => response.json());
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