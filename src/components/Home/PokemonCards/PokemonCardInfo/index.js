import React, { useState } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import MuiDialogTitle from '@material-ui/core/DialogTitle'
import MuiDialogContent from '@material-ui/core/DialogContent'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Chip from '@material-ui/core/Chip'
import ImageContainer, { StyledImg, AttackInfoContainer } from './styles'

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
})

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant='h6'>{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label='close'
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon color='primary' />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  )
})

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent)

const PokemonCardInfo = ({ pokemon }) => {
  const [open, setOpen] = useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div>
      <Button
        variant='contained'
        size='small'
        color='primary'
        onClick={handleClickOpen}
      >
        Detalhes
      </Button>
      <Dialog
        fullWidth={true}
        maxWidth={'md'}
        onClose={handleClose}
        aria-labelledby='customized-dialog-title'
        open={open}
      >
        <DialogTitle id='customized-dialog-title' onClose={handleClose}>
          {pokemon.name}
        </DialogTitle>
        <DialogContent dividers>
          <Grid container spacing={3}>
            <Grid item>
              <ImageContainer>
                <StyledImg src={pokemon.image} alt={pokemon.name} />
              </ImageContainer>
            </Grid>
            <Grid container item direction='column' justify='space-evenly' xs>
              <Grid container item>
                <Typography variant='h6'>TIPO&nbsp;&nbsp;</Typography>
                {pokemon.types.map((types, index) => (
                  <Chip key={index} label={types} />
                ))}
              </Grid>
              <Grid container>
                <Grid item>
                  <Typography variant='h6'>ATAQUES RÁPIDOS</Typography>
                </Grid>
                <Grid container item spacing={3}>
                  {pokemon.attacks.fast.map((attack, index) => (
                    <Grid key={index} item xs>
                      <AttackInfoContainer>
                        <Typography variant='body2'>
                          <b>Nome:</b>&nbsp;
                          {attack.name}
                          <br />
                          <b>Tipo:</b>&nbsp;
                          {attack.type}
                          <br />
                          <b>Dano:</b>&nbsp;
                          {attack.damage}
                        </Typography>
                      </AttackInfoContainer>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
              <Grid container>
                <Grid item>
                  <Typography variant='h6'>ATAQUES ESPECIAIS</Typography>
                </Grid>
                <Grid container item spacing={3}>
                  {pokemon.attacks.special.map((attack, index) => (
                    <Grid key={index} item xs>
                      <AttackInfoContainer>
                        <Typography variant='body2'>
                          <b>Nome:</b>&nbsp;
                          {attack.name}
                          <br />
                          <b>Tipo:</b>&nbsp;
                          {attack.type}
                          <br />
                          <b>Dano:</b>&nbsp;
                          {attack.damage}
                        </Typography>
                      </AttackInfoContainer>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default PokemonCardInfo
