import React from 'react'
import { useQuery, gql } from '@apollo/client'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardActions from '@material-ui/core/CardActions'
import CardMedia from '@material-ui/core/CardMedia'
import Chip from '@material-ui/core/Chip'
import { ChipContainer } from './styles'
import PokemonCardInfo from './PokemonCardInfo'

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

const PokemonCards = () => {
  const { loading, error, data } = useQuery(GET_POKEMONS, {
    variables: { first: 1000 },
    pollInterval: 5000,
  })

  if (loading) return 'Loading...'
  if (error) return `Error! ${error.message}`

  return (
    <>
      <div>
        <Grid container spacing={2}>
          {data.pokemons.map((pokemon) => (
            <Grid
              key={pokemon.id}
              container
              item
              justify='space-evenly'
              alignItems='center'
              xs
            >
              <Card>
                <CardHeader title={pokemon.name} />
                <CardMedia
                  component='img'
                  alt={pokemon.name}
                  height='110'
                  image={pokemon.image}
                  title={pokemon.name}
                />
                <ChipContainer>
                  {pokemon.types.map((types, index) => (
                    <Chip key={index} size='small' label={types} />
                  ))}
                </ChipContainer>
                <CardActions>
                  <PokemonCardInfo pokemon={pokemon} />
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  )
}
export default PokemonCards
