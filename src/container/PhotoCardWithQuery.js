import React from 'react'

import PropTypes from 'prop-types'

import { useQuery, gql } from '@apollo/client'
import { PhotoCard, PhotoCardSkeleton } from '../components/PhotoCard'

const GET_SINGLE_PHOTO = gql`
 query getSinglePhoto($id:ID!){
  photo(id:$id){
    id
    categoryId
    src
    likes
    userId
    liked
  }
 }
`

export const PhotoCardWithQuery = ({ id }) => {
  const { loading, error, data } = useQuery(GET_SINGLE_PHOTO, {
    variables: {
      id
    }
  })
  if (error) {
    return <h2>Internal Server Error</h2>
  }
  if (loading) {
    return <PhotoCardSkeleton />
  }

  return (
    <PhotoCard {...data.photo} />
  )
}

PhotoCardWithQuery.propTypes = {
  id: PropTypes.number
}
