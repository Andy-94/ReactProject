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
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import AppsIcon from '@material-ui/icons/Apps';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';

const useStyles = makeStyles((theme)=>({
  root:{
    flexGrow:1,
  },
  appbar:{
    backgroundColor:'#212121',
    position:'static',
  },
  left:{
    flex:1,

  },
  right:{
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
  hide:{
    [theme.breakpoints.down('sm')]:{
      display:'none'
    }
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
  };
  const list =()=>(
   <div>
    <Button className={classes.hide} color="inherit" startIcon={<AppsIcon/>}>Skills</Button>
    <Button className={classes.hide} color="inherit" startIcon={<CloudDownloadIcon/>}>Download</Button>
    <IconButton color="inherit" component="span">
      <LinkedInIcon />
    </IconButton>
    <IconButton color="inherit" component="span">
      <GitHubIcon />
    </IconButton>
    <IconButton color="inherit" component="span">
      <EmailIcon />
    </IconButton>

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
            <Grid className={classes.left}>
              <Link 
              variant="h6" 
              underline="none" 
              color="inherit" 
              href="#">
              {`Andy Website`}
              </Link>
            </Grid>
            <Grid className={classes.right}>
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