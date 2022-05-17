export function fetchData(): Promise<string> {
  return new Promise((resolve) => {
    return setTimeout(() => {
      return resolve('peanut butter');
    }, 1000);
  });
}

export function fetchError(): Promise<string> {
  return new Promise((resolve, reject) => {
    return setTimeout(() => {
      return reject('error');
    }, 1000);
  });
}

export function fetchCallback(cb: any) {
  setTimeout(() => {
    cb('peanut butter');
  }, 1000);
}
