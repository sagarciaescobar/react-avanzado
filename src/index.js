import React from 'react'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { createRoot } from 'react-dom/client'
import { App } from './App'

const client = new ApolloClient({
  uri: 'https://petgram-server-sergio-opal.vercel.app/graphql',
  cache: new InMemoryCache()
})

const container = document.getElementById('app')
const root = createRoot(container)
root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>)
