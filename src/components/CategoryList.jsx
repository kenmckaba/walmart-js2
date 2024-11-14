import { createListCollection } from '@chakra-ui/react'
import {
  SelectContent,
  SelectItem,
  SelectRoot,
  SelectTrigger,
  SelectValueText,
} from '@/components/ui/select'
import PropTypes from 'prop-types'
import { useCategories } from './hooks/useCategories'

export const CategoryList = ({ onSelected }) => {
  const { categories, error, isPending } = useCategories()

  const catlist =
    (categories &&
      categories.map((cat) => ({ label: cat.name, value: cat.slug }))) ||
    []

  // if no categories, create empty list for Select control
  if (catlist.length === 0) {
    catlist.push({ label: '', value: '' })
  }

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
        onSelected(e.value[0])
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
