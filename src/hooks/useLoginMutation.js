import { useMutation, gql } from '@apollo/client'

const LOGIN_MUTATION = gql`
  mutation login($input: UserCredentials!){
    login(input: $input)
}
`

export const useLoginMutation = () => {
  const [mutation, { data, loading, error }] = useMutation(LOGIN_MUTATION)
  return {
    login: mutation,
    loginData: data,
    loginLoading: loading,
    loginError: error
  }
}
