import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

export const useOneProduct = (productId) => {
  const url = `https://dummyjson.com/products/${productId}`
  const {
    isPending,
    error,
    data: productInfo,
  } = useQuery({
    queryKey: ['product', productId],
    queryFn: async () => {
      const response = await axios.get(url)
      return response.data
    },
  })

  return {
    productInfo,
    isPending,
    error,
  }
}
