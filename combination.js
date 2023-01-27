class Combination {
  constructor(personality, soul, destiny) {
    if (personality.digit.simplified + soul.digit.simplified != destiny.digit.simplified) {
      throw new Error('personality + soul != destiny');
    }
    this.personality = personality.digit;
    this.soul = soul.digit;
    this.destiny = destiny.digit;
  }

  getResults() {
    
  }
}