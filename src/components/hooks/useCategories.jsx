import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

export const useCategories = () => {
  const {
    isPending,
    error,
    data: categories,
  } = useQuery({
    queryKey: ['categories'],
    queryFn: async () => {
      const response = await axios.get(
        'https://dummyjson.com/products/categories?delay=2000',
      )
      return response.data
    },
  })

  return {
    categories,
    isPending,
    error,
  }
}
