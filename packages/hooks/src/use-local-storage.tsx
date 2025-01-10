import { useState } from 'react'

type SetValue<T> = (newValue: T) => void
type RemoveValue = () => void

export function useLocalStorage<T>(key: string, initialValue: T) {
  const readValue = (): T => {
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      return initialValue
    }
  }

  const [storedValue, setStoredValue] = useState<T>(readValue)

  const setValue: SetValue<T> = (newValue) => {
    window.localStorage.setItem(key, JSON.stringify(newValue))

    setStoredValue(newValue)
  }

  const removeValue: RemoveValue = () => {
    window.localStorage.removeItem(key)
    setStoredValue(initialValue)
  }

  return { value: storedValue, setValue, removeValue }
}
