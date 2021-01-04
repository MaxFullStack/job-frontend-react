import React from 'react'
import { render } from '@testing-library/react'
import { MockedProvider } from '@apollo/client/testing'
import SearchByName from '../SearchByName'

describe('Tests for SearchByName component', () => {
  test('Render SearchByName component', () => {
    render(
      <MockedProvider>
        <SearchByName />
      </MockedProvider>
    )
  })
})
