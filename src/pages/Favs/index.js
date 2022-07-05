import React from 'react'
import { Layout } from '../../components/Layout'
import { ListOfFavs } from '../../components/ListOfFavs'

export const Favs = () => (
  <>
    <Layout
      title='Tus favoritos' subtitle='Con petgram puedes encontrar fotos
      de tu animal favorito'
    >
      <ListOfFavs />
    </Layout>
  </>
)
