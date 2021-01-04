import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'

let theme = createMuiTheme({
  palette: {
    primary: {
      main: `#3D7DCA`,
    },
    secondary: {
      main: `#FFCB05`,
    },
  },
  overrides: {
    MuiCard: {
      root: {
        width: '184px',
        height: '257px',
        border: '6px solid #3d7dca',
        padding: '2px',
        background: '#FFCB05',
        boxShadow: 'inset 0px 0px 3px rgba(0, 0, 0, 0.9)',
      },
    },
    MuiCardHeader: {
      root: {
        height: '30px',
        margin: '8px',
        textAlign: 'center',
        boxShadow: '0px 0px 3px rgba(0, 0, 0, 0.9)',
      },
    },
    MuiCardMedia: {
      img: {
        background: '#ffffff',
        margin: '8px 0',
        padding: '10px',
        objectFit: 'scale-down',
      },
    },
    MuiChip: {
      root: {
        margin: '0 4px',
        border: '2px solid #2a75bb',
      },
    },
    MuiDialog: {
      paper: {
        border: '6px solid #3d7dca',
        background: '#FFCB05',
        boxShadow: 'inset 0px 0px 3px rgba(0, 0, 0, 0.9)',
      },
    },
  },
})

theme = responsiveFontSizes(theme)

export default theme
