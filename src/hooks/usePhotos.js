import { useQuery, gql } from '@apollo/client'

const getPhotos = gql`
    query getPhotos($categoryId: ID){
      photos(categoryId: $categoryId){
        id
        categoryId
        src
        likes
        userId
        liked
      }
    }
  `

export const usePhotos = (categoryId) => {
  const { loading, error, data } = useQuery(getPhotos, {
    variables: { categoryId }
  })

  return { loading, error, data }
}
