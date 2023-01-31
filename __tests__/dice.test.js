import Dice from './../src/dice.js';

describe('Dice', () => {
    test('should creat a dice object', () => {
      const dice = new Dice(2, 4, 5, 1);
      expect(dice.number).toEqual(2);
      expect(dice.number).toEqual(4);
      expect(dice.number).toEqual(5);
      expect(dice.number).toEqual(1);
    })
})