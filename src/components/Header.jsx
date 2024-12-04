import { HStack, Image, VStack } from '@chakra-ui/react'
import walmartstar from '../assets/walmart-logo.png'
import { CategoryList } from './CategoryList'
import PropTypes from 'prop-types'

export function Header({ onCategorySelected }) {
  const onSelected = (item) => {
    console.log('selected item', item)
    onCategorySelected(item)
  }

  return (
    <VStack height="20" width="100%" id="Header" border="1px solid green">
      <HStack width="100%" height="100%" backgroundColor="blue" id="blue">
        <Image src={walmartstar} height="100%" marginLeft="20" />
        <CategoryList
          onSelected={(e) => {
            onSelected(e)
          }}
        />
      </HStack>
    </VStack>
  )
}

Header.propTypes = {
  onCategorySelected: PropTypes.func,
}
