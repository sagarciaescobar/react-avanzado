import React from 'react'
import { useFavsPhotos } from '../../hooks/useFavsPhotos'
import { Grid, Img, Link } from './styles'

export const ListOfFavs = () => {
  const { data, loading, error } = useFavsPhotos()

  if (loading) return <p>Esta cargando</p>
  if (error) return <p>internal server Error</p>
  return (
    <Grid>
      {
        data.favs.map((fav) => (
          <Link key={fav?.id} to={`/detail?id=${fav?.id}`}>
            <Img src={fav?.src} alt={fav?.id} />
          </Link>
        ))
      }
    </Grid>
  )
}
