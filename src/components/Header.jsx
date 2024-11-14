import { HStack, Image, VStack } from '@chakra-ui/react'
import walmartstar from '../assets/walmart-logo.png'
import { CategoryList } from './CategoryList'
import PropTypes from 'prop-types'

export function Header({ onSelected }) {
  const onSelected2 = (item) => {
    console.log('selected item', item)
    onSelected(item)
  }

  return (
    <VStack height="20" width="100%" id="Header" border="1px solid green">
      <HStack width="100%" height="100%" backgroundColor="blue" id="blue">
        <Image src={walmartstar} height="100%" marginLeft="20" />
        <CategoryList
          onSelected={(e) => {
            console.log('asdf Header', e)
            onSelected2(e)
          }}
        />
      </HStack>
    </VStack>
  )
}

Header.propTypes = {
  onSelected: PropTypes.func,
}
