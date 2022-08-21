import Container from "./components/Container/Container"
import Counter from "./components/Counter/Counter"
import GlobalStyle from "./config/GlobalStyle"
import BitcoinTracker from "./components/BitcoinTracker/BitcoinTracker"

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Counter />
        <BitcoinTracker />
      </Container>
    </>
  )
}

export default App
