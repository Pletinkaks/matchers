import sorter from '../app';

const characterInfo1 = [
  { name: 'мечник', health: 10 },
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
];

const characterInfo2 = [
  { name: 'мечник', health: 100 },
  { name: 'маг', health: 10 },
  { name: 'лучник', health: 80 },
];

const characterInfo3 = [
  { name: 'мечник', health: 100 },
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
];

test('sorting characterInfo1', () => {
  expect(characterInfo1.sort(sorter)).toEqual(characterInfo1);
});

test('sorting characterInfo2', () => {
  expect(characterInfo2.sort(sorter)).toEqual(characterInfo2);
});

test('sorting characterInfo3', () => {
  expect(characterInfo3.sort(sorter)).toEqual(characterInfo3);
});
