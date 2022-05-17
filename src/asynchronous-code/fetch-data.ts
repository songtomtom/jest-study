export function fetchData(): Promise<string> {
  return new Promise((resolve) => {
    return setTimeout(() => {
      resolve('peanut butter');
    }, 1000);
  });
}

export function fetchError(): Promise<string> {
  return new Promise((resolve, reject) => {
    return setTimeout(() => {
      reject('error');
    }, 1000);
  });
}
