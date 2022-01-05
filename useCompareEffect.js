//dequal package for deep data comparison
import { dequal } from 'dequal'
// hooks from react library
import { useEffect, useRef } from 'react'

function useCompareMemoize(value) {
  const ref = useRef(value)
  
  //deep comparison
  if (!dequal(value, ref.current)) {
    ref.current = value
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  return ref.current
}
//custom  hook for deep comparison
export const useCompareEffect = (callback, dependencies) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  return useEffect(callback, useCompareMemoize(dependencies))
}
