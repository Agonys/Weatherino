interface DebouncedFunction<
  Args extends any[],
  T extends (...args: Args) => ReturnType<T>
> {
  (...args: Args): void;
  cancel: () => void;
}

function debounce<
  Args extends any[],
  F extends (...args: Args) => ReturnType<F>
>(
  func: F,
  delay: number
): DebouncedFunction<Args, F> {
  let timeoutId: ReturnType<typeof setTimeout>;
  let isPending = false;

  const debouncedFunction = function (...args: Args) {
    clearTimeout(timeoutId);
    isPending = true;

    timeoutId = setTimeout(() => {
      isPending = false;
      func.apply(null, args);
    }, delay);
  };

  debouncedFunction.cancel = () => {
    if (isPending) {
      clearTimeout(timeoutId);
      isPending = false;
    }
  };

  return debouncedFunction;
}

export default debounce;