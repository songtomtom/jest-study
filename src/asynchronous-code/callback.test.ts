import { fetchCallback } from './fetch-data';

// test('the data is peanut butter', () => {
//   function callback(error: any, data: any) {
//     if (error) {
//       throw error;
//     }
//     expect(data).toBe('peanut butter');
//   }

//   fetchCallback(callback);
// });

test('the data is peanut butter', (done) => {
  function callback(data) {
    try {
      expect(data).toBe('peanut butter');
      done();
    } catch (error) {
      done(error);
    }
  }

  fetchCallback(callback);
});
