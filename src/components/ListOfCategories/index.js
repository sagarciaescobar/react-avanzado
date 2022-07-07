import React, { useEffect, useState } from 'react'
import { Category, CategorySkeleton } from '../Category'
import { useCategoryData } from '../../hooks/useCategoryData'
import { List, Item } from './styles'

export const ListOfCategoriesComponent = () => {
  const [showFixed, setShowFixed] = useState(false)
  const { categories, loading } = useCategoryData()

  useEffect(() => {
    const onScroll = () => {
      const newShowFixed = window.scrollY > 200
      showFixed !== newShowFixed && setShowFixed(newShowFixed)
    }
    document.addEventListener('scroll', onScroll)

    return () => {
      document.removeEventListener('scroll', onScroll)
    }
  }, [showFixed])

  const renderList = (fixed) => (
    <List fixed={fixed}>
      {
        loading
          ? [1, 2, 3, 4].map((i, id) => (
            <Item key={'loading' + id}>
              <CategorySkeleton />
            </Item>
            ))
          : categories.map((category, i) => (
            <Item key={category.id}><Category {...category} path={`/pet/${category.id}`} /></Item>
          ))
      }
    </List>
  )

  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
  )
}
