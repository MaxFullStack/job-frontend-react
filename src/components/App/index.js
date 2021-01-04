import React from 'react'
import { ThemeProvider } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import theme from '../../theme/light'
import Navbar from '../Navbar'
import Home from '../Home'

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Container>
          <Home />
        </Container>
      </ThemeProvider>
    </>
  )
}

export default App
