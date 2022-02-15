export function debounce(func, delay) {
  let timer = null;
  return (...argus) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, argus);
    }, delay);
  };
}