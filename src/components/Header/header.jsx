import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/grid'
import Link from '@material-ui/core/Link'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Button from '@material-ui/core/Button'
import ReorderIcon from '@material-ui/icons/Reorder';
import IconButton from '@material-ui/core/IconButton'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'

const useStyles = makeStyles((theme)=>({
  root:{
    flexGrow:1,
  },
  appbar:{
    backgroundColor:'#212121',
    position:'static',
  },
  position:{
    flex:1,
    display:'flex',
    justifyContent:'flex-end',
  },
  sectionDesktop:{
    display:'none',
    [theme.breakpoints.up('sm')]:{
      display:'block',
    }
  },
  sectionMobile:{
    display:'block',
    [theme.breakpoints.up('sm')]:{
      display:'none',
    }
  },
  sectionMObileStyle:{

  }
}))
export default function Header(){ 

  const classes = useStyles();
  const [state, setState] = React.useState({
    right:false,
  });
  const toggleDrawer = (anchor,open) =>(event)=>{
    if(event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')){
      return;
    }
    setState({...state,[anchor]:open})
  }
  const list =()=>(
   <div>
    <Button color="inherit">Skills</Button>
    <Button color="inherit">Linkedin</Button>
    <Button color="inherit">GitHub</Button>
    <Button color="inherit">Email</Button>
   </div>
  );
  const mobileList =()=>(
    <div>
      <List>
          {['Skills', 'Linkedin','GitHub', 'Send email'].map((text) => (
            <ListItem disablePadding button key={text}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <AppBar className={classes.appbar}>
          <Toolbar variant="dense">
            <Grid className={classes.position}>
              <Link 
              variant="h6" 
              underline="none" 
              color="inherit" 
              href="#">
              {`Andy Website`}
              </Link>
            </Grid>
            <Grid className={classes.position}>
              <div className={classes.sectionDesktop}>
                  {list()}
                </div>
                <div className={classes.sectionMobile}>
                  <IconButton color="inherit" onClick={toggleDrawer('right',true)}>
                    <ReorderIcon/>
                  </IconButton>
                  <SwipeableDrawer
                    anchor='right'
                    open={state['right']}
                    onClose={toggleDrawer('right', false)}
                    onOpen={toggleDrawer('right', true)}
                  >
                    {mobileList()}                  
                  </SwipeableDrawer>
                </div>   
            </Grid>
          </Toolbar>
      </AppBar>
    </div>  
  )
}