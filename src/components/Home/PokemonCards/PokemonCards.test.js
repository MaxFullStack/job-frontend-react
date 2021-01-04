import React from 'react'
import { render } from '@testing-library/react'
import { MockedProvider } from '@apollo/client/testing'
import PokemonCards from '../PokemonCards'

describe('Tests for PokemonCards component', () => {
  test('Render PokemonCards component', () => {
    render(
      <MockedProvider>
        <PokemonCards />
      </MockedProvider>
    )
  })
})
