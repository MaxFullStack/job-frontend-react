import React from 'react'
import { render } from '@testing-library/react'
import { MockedProvider } from '@apollo/client/testing'
import Home from '.'

describe('Tests for Home component', () => {
  test('Render Home component', () => {
    render(
      <MockedProvider>
        <Home />
      </MockedProvider>
    )
  })
})
