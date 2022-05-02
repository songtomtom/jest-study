test('2 + 2 = 4?', () => {
  expect(2 + 2).toBe(4);
});

test('객체 비교', () => {
  const data = { one: 1 };
  data['two'] = 2;
  expect(data).toEqual({ one: 1, two: 2 });
});

test('Matcher의 반대 결과값 테스트', () => {
  for (let a = 1; a < 10; a++) {
    for (let b = 1; b < 10; b++) {
      expect(a + b).not.toBe(0);
    }
  }
});
