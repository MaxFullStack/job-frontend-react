import React from 'react'
import Grid from '@material-ui/core/Grid'
import SearchByName from './SearchByName'
import PokemonCards from './PokemonCards'

const Home = () => {
  return (
    <>
      <div>
        <Grid
          container
          direction='row'
          justify='center'
          alignItems='center'
          spacing={3}
        >
          <Grid item xs={12}>
            <SearchByName />
          </Grid>
          <Grid item xs={12}>
            <PokemonCards />
          </Grid>
        </Grid>
      </div>
    </>
  )
}
export default Home
