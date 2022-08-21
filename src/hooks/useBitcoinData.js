import { useState, useEffect } from "react"
import { bitcoinUrl } from "../config"

const API_REFRESH_TIME = 60000

function useBitcoinData() {
  const [bitcoinData, setBitcoinData] = useState()
  const [isDataUpdated, setIsDataUpdated] = useState(false)

  useEffect(() => {
    const fetchBitcoinData = async () => {
      const response = await fetch(bitcoinUrl)
      const data = await response.json()
      setBitcoinData(data)
      setIsDataUpdated(true)
    }

    fetchBitcoinData()
    const timer = setInterval(() => {
      fetchBitcoinData()
    }, API_REFRESH_TIME)

    return () => {
      clearInterval(timer)
    }
  }, [])

  return { bitcoinData, isDataUpdated, setIsDataUpdated }
}

export default useBitcoinData
