const word: string[] = [
  'HOLE',
  'AGUACATE',
  'PAPA',
  'MANZANA',
  'PERA',
  'CHEVROLET', 
  'CHOCOLATE',
  'MAZDA',
  'AUDI',
  'FORD',
  'HONDA',
];

export const getRandomWord = () => {
  const index = Math.floor(Math.random() * word.length);
  return word[index];
}