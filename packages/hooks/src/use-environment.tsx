import { useEffect, useState } from 'react'

export function useEnvironment() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return { isClient }
}
