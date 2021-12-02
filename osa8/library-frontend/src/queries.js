import { gql } from '@apollo/client'

export const ALL_AUTHORS = gql`
  query {
    allAuthors {
      name
      born
      id
      bookCount
    }
  }`

export const UPDATE_AUTHOR = gql`
  mutation updateAuthor($name: String!, $born: Int) {
    editAuthor(name: $name, setBornTo: $born) {
      name
      born
    }
  }
`

export const ALL_BOOKS = gql`
  query {
    allBooks {
      title
      published
      author {
        name
        born
        id
        bookCount
      }
      genres
    }
  }
`

export const USER_DATA = gql`
  query {
    me {
      username
      favoriteGenre
      id
    }
  }
`

export const LOGIN = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password)  {
      value
    }
  }
`