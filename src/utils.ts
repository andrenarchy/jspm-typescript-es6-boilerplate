export const num = 42;

export function sleep (milliseconds) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, milliseconds);
  });
}