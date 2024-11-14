import { Button, Flex } from '@chakra-ui/react'
import PropTypes from 'prop-types'
import { useProducts } from './hooks/useProducts'

export const Products = (category) => {
  const { products, error, isPending } = useProducts(category)

  const placeholder = isPending
    ? 'Loading products...'
    : error
      ? 'error loading products'
      : ''

  return (
    <Flex width="100%" id="suround" flexWrap="wrap">
      {placeholder}
      {products &&
        products.products.map((product) => (
          <Button
            color="darkblue"
            marginRight="1"
            marginBottom="1"
            key={product.id}
            background="lightgrey"
          >
            {product.title}
          </Button>
        ))}
    </Flex>
  )
}

Products.propTypes = {
  category: PropTypes.string,
}
