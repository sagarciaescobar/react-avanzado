import React, { useEffect, useState } from 'react'
import { Category, CategorySkeleton } from '../Category'
import { List, Item } from './styles'

function useCategoryData () {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch('https://petgram-server-sergio-opal.vercel.app/categories')
      .then(res => res.json())
      .then(response => {
        setCategories(response)
        setLoading(false)
      })
  }, [])
  return { categories, loading }
}

export const ListOfCategories = () => {
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
            <Item key={category.id}><Category {...category} /></Item>
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
