import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';



const useStyles = makeStyles(theme => ({
  appbar: {
    width: '100%',
    display: 'flex',
    alignItems: 'center'
  },
  toolbar: {
    width: '80%', 
    display: 'flex', 
    justifyContent: 'space-between',
    backgroundColor: '#F2F2F2',
    border: 'none',
  },

  links: {
    width: 300,
    display: 'flex',
    justifyContent: 'space-around',
  },
  btn: {
    textDecoration: 'none',
    color: '#A4A4A4',
    padding: 4,
    '&:hover': {
      color: 'black',
    }
  },
  
}));


export default function Navigation() {
    const classes = useStyles();


  return (
    <div>
      <AppBar className={classes.appbar} position="static">
        <Toolbar className={classes.toolbar}>
            <h2>Welcome to your Todo App!</h2>
        </Toolbar>
      </AppBar>
    </div>
  );
}