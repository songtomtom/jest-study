export function fetchData() {
  return new Promise((resolve) => {
    return setTimeout(() => {
      resolve('peanut butter');
    }, 1000);
  });
}

export function fetchError() {
  return new Promise((resolve, reject) => {
    return setTimeout(() => {
      reject('error reason');
    }, 1000);
  });
}
