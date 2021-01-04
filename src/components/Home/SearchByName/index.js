import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import Autocomplete from '@material-ui/lab/Autocomplete'
import { useQuery, gql } from '@apollo/client'

const GET_POKEMONS = gql`
  query GetPokemons($first: Int!) {
    pokemons(first: $first) {
      id
      name
      image
      types
      attacks {
        fast {
          name
          type
          damage
        }
        special {
          name
          type
          damage
        }
      }
    }
  }
`

const SearchByName = () => {
  const [value, setValue] = useState([])
  const [inputValue, setInputValue] = useState('')

  const { loading, error, data } = useQuery(GET_POKEMONS, {
    variables: { first: 1000 },
    pollInterval: 5000,
  })

  if (loading) return 'Loading...'
  if (error) return `Error! ${error.message}`

  return (
    <>
      <Autocomplete
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue)
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue)
        }}
        id='controllable-states-demo'
        options={data.pokemons}
        getOptionSelected={(option, pokemom) => option.name === pokemom.name}
        getOptionLabel={(option) => option.name}
        style={{ width: 300 }}
        renderInput={(params) => (
          <TextField
            {...params}
            label='Pesquisar Pokemons'
            variant='outlined'
          />
        )}
      />
    </>
  )
}

export default SearchByName
