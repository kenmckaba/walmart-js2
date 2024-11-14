import { Button, Flex } from '@chakra-ui/react'
import PropTypes from 'prop-types'
import { useCategories } from './hooks/useCategories'

export const CategoryButtons = ({ onSelected }) => {
  const { categories, error, isPending } = useCategories()

  const placeholder = isPending
    ? 'Loading categories...'
    : error
      ? 'error loading categories'
      : ''

  return (
    <Flex width="100%" id="suround" flexWrap="wrap">
      {placeholder}
      {categories &&
        categories.map((category) => (
          <Button
            color="darkblue"
            marginRight="1"
            marginBottom="1"
            key={category.slug}
            background="lightgrey"
            onClick={() => {
              console.log('@ken categorybuttons', category.slug)
              onSelected(category.slug)
            }}
          >
            {category.name}
          </Button>
        ))}
    </Flex>
  )
}

CategoryButtons.propTypes = {
  onSelected: PropTypes.func,
}
