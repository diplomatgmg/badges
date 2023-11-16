import { add, multiply } from '../script';

test('add', () => {
  expect(add(1, 3)).toBe(4);
  expect(add(0, 4)).toBe(4);
  expect(add(-1, 0)).toBe(-1);
});

test('multiply', () => {
  expect(multiply(1, 3)).toBe(3);
  expect(multiply(0, 0)).toBe(0);
  expect(multiply(-1, 5)).toBe(-5);
  expect(multiply(5, 5)).toBe(25);
});
