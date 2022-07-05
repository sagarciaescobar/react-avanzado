import { useQuery, gql } from '@apollo/client'

const GET_FAVS_PHOTO = gql`
 query getFavs{
  favs{
    id
    categoryId
    src
    likes
    userId
  }
 }
`

export const useFavsPhotos = () => {
  const { data, loading, error } = useQuery(GET_FAVS_PHOTO, {
    fetchPolicy: 'network-only'
  })
  return { data, loading, error }
}
