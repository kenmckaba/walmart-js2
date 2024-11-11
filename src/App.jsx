import { VStack } from '@chakra-ui/react'
import Header from './components/Header'

function App() {
  return (
    <VStack height="100vh" width="100vw" border="1px solid red " id="App">
      <Header />
      <h1>Walmart</h1>
    </VStack>
  )
}

export default App
