import { createListCollection } from '@chakra-ui/react'
import {
  SelectContent,
  SelectItem,
  SelectRoot,
  SelectTrigger,
  SelectValueText,
} from '@/components/ui/select'
import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

export const CategoryList = ({ onSelected }) => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    fetch('https://dummyjson.com/products/category-list')
      .then((res) => res.json())
      .then((json) => setCategories(json))
  }, [])

  const catlist = categories.map((cat) => ({ label: cat, value: cat }))
  const cats = createListCollection({
    items: catlist,
  })

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
        <SelectValueText placeholder="Select a category" />
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
