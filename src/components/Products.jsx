import { Button, Card, Flex, Image } from '@chakra-ui/react'
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
          <Card.Root width="210px" margin="1" key={product.id}>
            <Card.Body gap="2">
              <Image
                src={product.thumbnail}
                name="Nue Camp"
                size="lg"
                shape="rounded"
              />
              <Card.Title mt="2" textAlign="center">
                {product.title}
              </Card.Title>
              <Card.Description>{product.description}</Card.Description>
            </Card.Body>
            <Card.Footer justifyContent="flex-end">
              <Button variant="outline">View</Button>
            </Card.Footer>
          </Card.Root>
        ))}
    </Flex>
  )
}

Products.propTypes = {
  category: PropTypes.string,
}
