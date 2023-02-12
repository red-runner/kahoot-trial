import { getScore } from '../get-score';

describe('the `getScore` function', () => {
  describe('if `bonusPoints` is undefined', () => {
    test('it should return the right result', () => {
      const result = getScore({ multiple: 2, points: 10, quantity: 90 });

      expect(result).toBe(900);
    });
  });

  describe('if `multiple` is undefined', () => {
    test('it should return the right result', () => {
      const result = getScore({ bonusPoints: 2, points: 10, quantity: 90 });

      expect(result).toBe(900);
    });
  });

  describe('if the `bonus` data is defined', () => {
    test('it should return the right result', () => {
      const result = getScore({ bonusPoints: 2, multiple: 3, points: 10, quantity: 90 });

      expect(result).toBe(60);
    });
  });
});
