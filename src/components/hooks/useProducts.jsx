import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

export const useProducts = (category) => {
  const {
    isPending,
    error,
    data: products,
  } = useQuery({
    queryKey: ['products', category],
    queryFn: async () => {
      const response = await axios.get(
        `https://dummyjson.com/products/category/${category.category}`,
      )
      return response.data
    },
  })

  return {
    products,
    isPending,
    error,
  }
}
