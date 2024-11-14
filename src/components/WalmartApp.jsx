import { VStack } from '@chakra-ui/react'
import { Header } from './Header'
import { CategoryButtons } from './CategoryButtons'
import { Products } from './Products'
import { useState } from 'react'

export const WalmartApp = () => {
  const [category, setCategory] = useState('')

  const onNewCategory = (category) => {
    console.log('New Category Selected:', category)
    setCategory(category)
  }

  return (
    <VStack height="100vh" width="100vw" border="1px solid red " id="App">
      <Header onSelected={onNewCategory} />
      <CategoryButtons id="catbuttons" onSelected={onNewCategory} />
      {category && <Products category={category} />}
      <h1>Walmart</h1>
    </VStack>
  )
}
