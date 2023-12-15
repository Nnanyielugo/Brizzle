import { useCallback, useState } from 'react';

type UseBooleanReturn = [
  boolean,
  {
    on: () => void;
    off: () => void;
    toggle: () => void;
  },
];

export function useBoolean(defaultvalue?: boolean): UseBooleanReturn {
  const [value, setValue] = useState(!!defaultvalue);

  const on = useCallback(() => setValue(true), []);
  const off = useCallback(() => setValue(false), []);
  const toggle = useCallback(() => setValue(prev => !prev), []);

  return [value, { on, off, toggle }];
}
