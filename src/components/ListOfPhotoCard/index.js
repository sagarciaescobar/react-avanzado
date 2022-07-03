import React from 'react'
import { PhotoCard } from '../PhotoCard'

export const ListOfPhotoCard = () => {
  return (
    <ul>
      {
        [1, 2, 3].map((photo) => (
          <PhotoCard key={photo} />
        ))
      }
    </ul>
  )
}
