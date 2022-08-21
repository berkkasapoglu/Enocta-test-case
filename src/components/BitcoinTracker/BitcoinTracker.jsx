import { useEffect } from "react"
import useBitcoinData from "../../hooks/useBitcoinData"
import getCurrencySymbol from "../../utils/getCurrencySymbol"
import {
  Table,
  Title,
  Head,
  HeadRow,
  HeadTitle,
  Body,
  Row,
  Data,
  Price,
} from "./BitcoinTracker.styles"

function BitcoinTracker() {
  const { bitcoinData, isDataUpdated, setIsDataUpdated } = useBitcoinData()

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsDataUpdated(false)
    }, 1000)

    return () => {
      clearTimeout(timer)
    }
  })

  return (
    bitcoinData && (
      <>
        <Title>{bitcoinData?.chartName}</Title>
        <Table>
          <Head>
            <HeadRow>
              <HeadTitle>Id</HeadTitle>
              <HeadTitle>Currency</HeadTitle>
              <HeadTitle>Description</HeadTitle>
              <HeadTitle>Price</HeadTitle>
            </HeadRow>
          </Head>
          <Body>
            {Object.values(bitcoinData.bpi).map((currency, index) => (
              <Row key={index}>
                <Data>{index + 1}</Data>
                <Data>{currency.code}</Data>
                <Data>{currency.description}</Data>
                <Price isDataUpdated={isDataUpdated}>
                  {getCurrencySymbol(currency.code)} {currency.rate}
                </Price>
              </Row>
            ))}
          </Body>
        </Table>
        <p>
          Last Updated At:
          <strong> {new Date(bitcoinData.time.updated).toLocaleString()}</strong>
        </p>
      </>
    )
  )
}
export default BitcoinTracker
