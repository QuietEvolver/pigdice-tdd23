import Dice from './../src/dice.js';

describe('Dice', () => {
  test('should creat a dice object', () => {
    const dice = new Dice(2, 4, 5, 1);
    expect(dice.number).toEqual(2);
    expect(dice.totalScore).toEqual(4);
    expect(dice.roundScore).toEqual(5);
    expect(dice.id).toEqual(1);
  });
  
  test('should test prototype Roll on this.number', () => {
    const dice = new Dice(2, 4, 5, 1);
    expect(dice.Roll()).toEqual(4);
  });

  // test('should test prototype RoundScore based on this.number', () =>{
    // const dice = new Dice(2, 4, 5, 1);
    // expect(dice.number).toEqual(2);
    // expect(dice.totalScore).toEqual(4);
    // expect(dice.roundScore).toEqual(5);
    // expect(dice.id).toEqual(1);
  // })

});