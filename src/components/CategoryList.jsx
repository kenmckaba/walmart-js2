import { createListCollection } from '@chakra-ui/react'
import {
  SelectContent,
  SelectItem,
  SelectRoot,
  SelectTrigger,
  SelectValueText,
} from '@/components/ui/select'
import PropTypes from 'prop-types'
import { useQuery } from '@tanstack/react-query'

export const CategoryList = ({ onSelected }) => {
  const {
    isPending,
    error,
    data: categories,
  } = useQuery({
    queryKey: ['categories'],
    queryFn: async () => {
      const response = await fetch(
        'https://dummyjson.com/products/category-list?delay=3000',
      )
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      return response.json()
    },
  })

  const catlist =
    (categories && categories.map((cat) => ({ label: cat, value: cat }))) || []

  const cats = createListCollection({
    items: catlist,
  })

  const placeholder = isPending
    ? 'Loading categories...'
    : error
      ? 'error loading categories'
      : 'Select a category'

  return (
    <SelectRoot
      collection={cats}
      size="sm"
      width="320px"
      onValueChange={(e) => {
        onSelected(e)
      }}
    >
      <SelectTrigger>
        <SelectValueText placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {cats.items.map((category) => (
          <SelectItem item={category} key={category.value}>
            {category.label}
          </SelectItem>
        ))}
      </SelectContent>
    </SelectRoot>
  )
}

CategoryList.propTypes = {
  onSelected: PropTypes.func,
}
