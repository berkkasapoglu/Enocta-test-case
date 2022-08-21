import { useState, useEffect } from "react"

function useCountdown(initialTime) {
  const [time, setTime] = useState(initialTime)
  
  useEffect(() => {
    const timer = setTimeout(() => {
      if (time > 0) {
        setTime(time - 1000)
      }
    }, 1000)

    return () => {
      clearTimeout(timer)
    }
  })

  return { time, setTime }
}

export default useCountdown
