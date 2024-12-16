import { Card, Image } from '@chakra-ui/react'
import { useOneProduct } from './hooks/useOneProduct'

export const SelectedProduct = ({ productId }) => {
  const { productInfo, error, isPending } = useOneProduct(productId)

  return (
    productInfo &&
    !error &&
    !isPending && (
      <Card.Root width="210px" margin="1" key={productId}>
        <Card.Body gap="2">
          <Image
            src={productInfo.thumbnail}
            name="Nue Camp"
            size="lg"
            shape="rounded"
          />
          <Card.Title mt="2" textAlign="center">
            {productInfo.title}
          </Card.Title>
          <Card.Description>{productInfo.description}</Card.Description>
        </Card.Body>
      </Card.Root>
    )
  )
}
