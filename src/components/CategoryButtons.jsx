import { Button, Flex } from '@chakra-ui/react'
import PropTypes from 'prop-types'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

export const CategoryButtons = ({ onSelected }) => {
  const {
    isPending,
    error,
    data: categories,
  } = useQuery({
    queryKey: ['categories'],
    queryFn: async () => {
      const response = await axios.get(
        'https://dummyjson.com/products/category-list?delay=3000',
      )
      return response.data
    },
  })

  const placeholder = isPending
    ? 'Loading categories...'
    : error
      ? 'error loading categories'
      : 'Select a category'

  return (
    <Flex width="100%" id="suround" flexWrap="wrap">
      {categories &&
        categories.map((category) => (
          <Button
            color="darkblue"
            marginRight="1"
            marginBottom="1"
            key={category}
            background="lightgrey"
          >
            {category}
          </Button>
        ))}
    </Flex>
  )
}
