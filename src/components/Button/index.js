import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Icon from '@material-ui/core/Icon'

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}))

export default function ContainedButtons(props) {
  const { handleClick, title, variant, icon } = props
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Button
        variant={variant}
        color='primary'
        onClick={handleClick}
        startIcon={<Icon>{icon}</Icon>}
      >
        {title}
      </Button>
    </div>
  )
}
