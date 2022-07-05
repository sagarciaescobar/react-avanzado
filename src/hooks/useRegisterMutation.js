import { useMutation, gql } from '@apollo/client'

const MUTATION_REGISTER = gql`
  mutation signup($input: UserCredentials!){
    signup(input: $input)
  }
`

export const useRegisterMutation = () => {
  const [mutation, { data, loading, error }] = useMutation(MUTATION_REGISTER)
  return {
    register: mutation,
    registerData: data,
    registerLoading: loading,
    registerError: error
  }
}
