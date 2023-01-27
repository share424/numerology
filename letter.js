const LETTER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

class Letter {
  constructor(letter) {
    this.letter = letter;
    const index = LETTER.indexOf(this.letter);
    if (index == -1) {
      throw new Error('Wrong letter');
    }
    this.digit = new Digit(this.toDigit(index));
  }

  toDigit(number) {    
    return (number % 9) + 1;
  }
}