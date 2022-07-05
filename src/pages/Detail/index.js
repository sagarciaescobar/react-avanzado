import React from 'react'
import { useSearchParams } from 'react-router-dom'
import { PhotoCardWithQuery } from '../../container/PhotoCardWithQuery'

export const Detail = () => {
  const [searchParams] = useSearchParams()
  console.log(searchParams)

  return (
    <PhotoCardWithQuery id={searchParams.get('id')} />
  )
}
