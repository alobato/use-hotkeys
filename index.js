import { useEffect } from 'react'

import hotkeys from 'hotkeys-js'

export default (keys, callback) => {
  useEffect(() => {
    hotkeys(keys, (event, handler) => callback(event, handler))
    return () => hotkeys.unbind(keys)
  }, [keys, callback])
}
