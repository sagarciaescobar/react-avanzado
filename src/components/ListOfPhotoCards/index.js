import React from 'react'
import { PhotoCard } from '../PhotoCard'
import { usePhotos } from '../../hooks/usePhotos'
import PropTypes from 'prop-types'

export const ListOfPhotoCards = ({ categoryId = 1 }) => {
  const { loading, error, data } = usePhotos(categoryId)
  if (error) {
    return <h2>Internal Server Error</h2>
  }
  if (loading) {
    return <h2>Loading...</h2>
  }

  return (
    <ul>
      {
        data.photos.map((photos) => (
          <PhotoCard key={photos.id} {...photos} />
        ))
      }
    </ul>
  )
}

ListOfPhotoCards.propTypes = {
  categoryId: PropTypes.number
}
