import { VStack } from '@chakra-ui/react'
import { Header } from './Header'
import { CategoryButtons } from './CategoryButtons'

export const WalmartApp = () => {
  return (
    <VStack height="100vh" width="100vw" border="1px solid red " id="App">
      <Header />
      <CategoryButtons id="catbuttons" />
      <h1>Walmart</h1>
    </VStack>
  )
}
