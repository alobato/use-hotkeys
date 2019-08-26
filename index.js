// https://github.com/JohannesKlauss/react-hotkeys-hook/blob/master/src/index.ts
import { useEffect, useCallback } from 'react'
import hotkeys from 'hotkeys-js'

export default (keys, callback, deps = []) => {
  const memoisedCallback = useCallback(callback, deps)
 
  useEffect(() => {
    hotkeys(keys, memoisedCallback)

    return () => hotkeys.unbind(keys)
  }, [memoisedCallback])
}
