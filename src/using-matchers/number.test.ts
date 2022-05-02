test('two plus two', () => {
  const value = 2 + 2;
  expect(value).toBeGreaterThan(3);
  expect(value).toBeGreaterThanOrEqual(3.5);
  expect(value).toBeLessThan(5);
  expect(value).toBeLessThanOrEqual(4.5);

  expect(value).toBe(4);
  expect(value).toEqual(4);
});

test('adding floating point numbers', () => {
  const value = 0.1 + 0.2;

  /**
   * .toBe()는 부동 소수점과 사용하면 안된다. 이때는 대신 .toBeCloseTo()를 사용하자.
   * 이유는 몰라도 되지만 굳이 한번 설명해 보자면, 이는 바이너리(binary) 값과 상관있다.
   * 우리는 일반적으로 10진수를 사용하지만, 바이너리에서는 0과 1의 연속으로 이루어진 2진수로 표시된다.
   * 컴퓨터는 10진수더라도 10진수가 아닌 바이너리로 계산하고 다시 10진수로 결과를 반환한다.
   * 하지만 이 결과는 때로는 정확하지 않으며, 여기서 부동 소수점 반올림 오류가 발생하는 이유는 반복 소수점(Recurring Decimal) 개념과 관련 있다. (1/3 = 0.333... )
   * 10진법의 소인수는 2와 5이므로 1/2, 1/4, 1/5, 1/8, 1/10은 깔끔하게 표현된다.
   * 실제 브라우저 콘솔에서 테스트 해보더라도 위의 수의 덧셈은 우리가 아는 정답의 결과가 나오는걸 확인할 수 있다.
   * 반 나머지 1/3, 1/6, 1/7, 1/9는 반복 소수점이다.
   * 2진법의 소인수는 2이기 때문에 1/2만 명확하게 표현할 수 있으며 다른 값은 반복 소수점이 된다.
   * 즉 0.1과 같은 10진수는 10진수를 사용하면 10진수의 단일 숫자로 표시할 수 있지만, 2진수로는 표시할 수 없는 것이다.
   * 자바스크립트는 모든 숫자를 64비트의 부호있는 부동 소수점 값으로 저장하며, 값을 저장할 공간이 충분하지 않으면 최하위 숫자가 반올림된다(IEEE 754).
   * 이는 자바스크립트에만 국한되는 문제는 아니며, 이미 정밀도를 요구하는 곳에서는 다른 해결책이 많이 나와있다.
   * 이것은 오류가 아니라 컴퓨터가 숫자를 다루는 방식이다. 오해하지 말자.
   */
  expect(value).toBeCloseTo(0.3);
});