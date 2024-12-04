import { VStack } from '@chakra-ui/react'
import { Header } from './Header'
import { CategoryButtons } from './CategoryButtons'
import { Products } from './Products'
import { useState } from 'react'

export const WalmartApp = () => {
  const [selectedCategory, setSelectedCategory] = useState('')

  const onCategorySelected = (category) => {
    console.log('New Category Selected:', category)
    setSelectedCategory(category)
  }

  return (
    <VStack height="100vh" width="100vw" border="1px solid red " id="App">
      <Header onCategorySelected={onCategorySelected} />
      <CategoryButtons
        id="catbuttons"
        selectedCategory={selectedCategory}
        onCategorySelected={onCategorySelected}
      />
      {selectedCategory && <Products category={selectedCategory} />}
    </VStack>
  )
}
