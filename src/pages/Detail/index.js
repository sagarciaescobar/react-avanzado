import React from 'react'
import { useSearchParams } from 'react-router-dom'
import { Layout } from '../../components/Layout'
import { PhotoCardWithQuery } from '../../container/PhotoCardWithQuery'

export const Detail = () => {
  const [searchParams] = useSearchParams()
  const id = searchParams.get('id')

  return (
    <>
      <Layout title={`fotografia ${id}`}>
        <PhotoCardWithQuery id={id} />
      </Layout>
    </>
  )
}
