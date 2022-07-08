import React from 'react'

import { useParams } from 'react-router-dom'
import { Layout } from '../../components/Layout'
import { ListOfCategoriesComponent } from '../../components/ListOfCategories'
import { ListOfPhotoCards } from '../../components/ListOfPhotoCards'

export const Home = () => {
  const { id } = useParams()
  return (
    <Layout
      title='Tu app de fotos de mascotas' subtitle='Con petgram puedes encontrar fotos
      de tu animal favorito'
    >
      <ListOfCategoriesComponent />
      <ListOfPhotoCards categoryId={id} />
    </Layout>
  )
}
