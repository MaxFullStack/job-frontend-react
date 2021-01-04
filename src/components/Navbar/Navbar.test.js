import React from 'react'
import { render, screen } from '@testing-library/react'

import Navbar from '../Navbar'

describe('Tests for Navbar component', () => {
  test('Render Navbar component', () => {
    render(<Navbar />)
    expect(screen.getByText('Pokemon Project')).toBeInTheDocument()
  })
})
