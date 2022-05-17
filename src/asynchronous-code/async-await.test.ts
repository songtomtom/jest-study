import { fetchData, fetchError } from './fetch-data';

test('the data is peanut butter', async () => {
  const data = await fetchData();
  expect(data).toBe('peanut butter');
});

test('the fetch fails with an error1', async () => {
  expect.assertions(1);

  try {
    const result = await fetchData();
    expect(result).toMatch('peanut butter');
  } catch (e) {
    return expect(e).toMatch('error');
  }
});

test('the data is peanut butter', async () => {
  await expect(fetchData()).resolves.toBe('peanut butter');
});

test('the fetch fails with an error', async () => {
  await expect(fetchError()).rejects.toMatch('error');
});

test('the fetch fails with an error', async () => {
  expect.assertions(1);
  try {
    return await fetchError();
  } catch (e) {
    return expect(e).toMatch('error');
  }
});
