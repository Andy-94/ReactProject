import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Popover from '@material-ui/core/Popover';
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
import SvgIcon from '@material-ui/core/SvgIcon';

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
  },
  icon:{
    color:'white',
  },
}))
export default function Header(){ 

  const classes = useStyles();

  const [anchorEl,setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  function Icons(){
    return (
      <div style={{width:'150px',padding:'10px',backgroundColor:'#e0e0e0'}}>
        <SvgIcon style={{color:'#01579b'}}>
            <path fill="currentColor" d="M12,10.11C13.03,10.11 13.87,10.95 13.87,12C13.87,13 13.03,13.85 12,13.85C10.97,13.85 10.13,13 10.13,12C10.13,10.95 10.97,10.11 12,10.11M7.37,20C8,20.38 9.38,19.8 10.97,18.3C10.45,17.71 9.94,17.07 9.46,16.4C8.64,16.32 7.83,16.2 7.06,16.04C6.55,18.18 6.74,19.65 7.37,20M8.08,14.26L7.79,13.75C7.68,14.04 7.57,14.33 7.5,14.61C7.77,14.67 8.07,14.72 8.38,14.77C8.28,14.6 8.18,14.43 8.08,14.26M14.62,13.5L15.43,12L14.62,10.5C14.32,9.97 14,9.5 13.71,9.03C13.17,9 12.6,9 12,9C11.4,9 10.83,9 10.29,9.03C10,9.5 9.68,9.97 9.38,10.5L8.57,12L9.38,13.5C9.68,14.03 10,14.5 10.29,14.97C10.83,15 11.4,15 12,15C12.6,15 13.17,15 13.71,14.97C14,14.5 14.32,14.03 14.62,13.5M12,6.78C11.81,7 11.61,7.23 11.41,7.5C11.61,7.5 11.8,7.5 12,7.5C12.2,7.5 12.39,7.5 12.59,7.5C12.39,7.23 12.19,7 12,6.78M12,17.22C12.19,17 12.39,16.77 12.59,16.5C12.39,16.5 12.2,16.5 12,16.5C11.8,16.5 11.61,16.5 11.41,16.5C11.61,16.77 11.81,17 12,17.22M16.62,4C16,3.62 14.62,4.2 13.03,5.7C13.55,6.29 14.06,6.93 14.54,7.6C15.36,7.68 16.17,7.8 16.94,7.96C17.45,5.82 17.26,4.35 16.62,4M15.92,9.74L16.21,10.25C16.32,9.96 16.43,9.67 16.5,9.39C16.23,9.33 15.93,9.28 15.62,9.23C15.72,9.4 15.82,9.57 15.92,9.74M17.37,2.69C18.84,3.53 19,5.74 18.38,8.32C20.92,9.07 22.75,10.31 22.75,12C22.75,13.69 20.92,14.93 18.38,15.68C19,18.26 18.84,20.47 17.37,21.31C15.91,22.15 13.92,21.19 12,19.36C10.08,21.19 8.09,22.15 6.62,21.31C5.16,20.47 5,18.26 5.62,15.68C3.08,14.93 1.25,13.69 1.25,12C1.25,10.31 3.08,9.07 5.62,8.32C5,5.74 5.16,3.53 6.62,2.69C8.09,1.85 10.08,2.81 12,4.64C13.92,2.81 15.91,1.85 17.37,2.69M17.08,12C17.42,12.75 17.72,13.5 17.97,14.26C20.07,13.63 21.25,12.73 21.25,12C21.25,11.27 20.07,10.37 17.97,9.74C17.72,10.5 17.42,11.25 17.08,12M6.92,12C6.58,11.25 6.28,10.5 6.03,9.74C3.93,10.37 2.75,11.27 2.75,12C2.75,12.73 3.93,13.63 6.03,14.26C6.28,13.5 6.58,12.75 6.92,12M15.92,14.26C15.82,14.43 15.72,14.6 15.62,14.77C15.93,14.72 16.23,14.67 16.5,14.61C16.43,14.33 16.32,14.04 16.21,13.75L15.92,14.26M13.03,18.3C14.62,19.8 16,20.38 16.62,20C17.26,19.65 17.45,18.18 16.94,16.04C16.17,16.2 15.36,16.32 14.54,16.4C14.06,17.07 13.55,17.71 13.03,18.3M8.08,9.74C8.18,9.57 8.28,9.4 8.38,9.23C8.07,9.28 7.77,9.33 7.5,9.39C7.57,9.67 7.68,9.96 7.79,10.25L8.08,9.74M10.97,5.7C9.38,4.2 8,3.62 7.37,4C6.74,4.35 6.55,5.82 7.06,7.96C7.83,7.8 8.64,7.68 9.46,7.6C9.94,6.93 10.45,6.29 10.97,5.7Z" />
        </SvgIcon>
        <SvgIcon style={{color:'#009688'}}>
            <path fill="currentColor" d="M2,3H5.5L12,15L18.5,3H22L12,21L2,3M6.5,3H9.5L12,7.58L14.5,3H17.5L12,13.08L6.5,3Z" />
        </SvgIcon>
        <SvgIcon color="secondary">
            <path fill="currentColor" d="M12,2.5L20.84,5.65L19.5,17.35L12,21.5L4.5,17.35L3.16,5.65L12,2.5M12,4.6L6.47,17H8.53L9.64,14.22H14.34L15.45,17H17.5L12,4.6M13.62,12.5H10.39L12,8.63L13.62,12.5Z" />
        </SvgIcon>
        <SvgIcon style={{color:'#f57f17'}}>
            <path fill="currentColor" d="M3,3H21V21H3V3M7.73,18.04C8.13,18.89 8.92,19.59 10.27,19.59C11.77,19.59 12.8,18.79 12.8,17.04V11.26H11.1V17C11.1,17.86 10.75,18.08 10.2,18.08C9.62,18.08 9.38,17.68 9.11,17.21L7.73,18.04M13.71,17.86C14.21,18.84 15.22,19.59 16.8,19.59C18.4,19.59 19.6,18.76 19.6,17.23C19.6,15.82 18.79,15.19 17.35,14.57L16.93,14.39C16.2,14.08 15.89,13.87 15.89,13.37C15.89,12.96 16.2,12.64 16.7,12.64C17.18,12.64 17.5,12.85 17.79,13.37L19.1,12.5C18.55,11.54 17.77,11.17 16.7,11.17C15.19,11.17 14.22,12.13 14.22,13.4C14.22,14.78 15.03,15.43 16.25,15.95L16.67,16.13C17.45,16.47 17.91,16.68 17.91,17.26C17.91,17.74 17.46,18.09 16.76,18.09C15.93,18.09 15.45,17.66 15.09,17.06L13.71,17.86Z" />
        </SvgIcon>
        <SvgIcon color="primary">
            <path fill="currentColor" d="M8,16.61V15.37L14,11.91V7.23L9,10.12L4,7.23V13L3,13.58L2,13V5L3.07,4.38L9,7.81L12.93,5.54L14.93,4.38L16,5V13.06L10.92,16L14.97,18.33L20,15.43V11L21,10.42L22,11V16.58L14.97,20.64L8,16.61M22,9.75L21,10.33L20,9.75V8.58L21,8L22,8.58V9.75Z" />
        </SvgIcon>
        <SvgIcon color="primary">
            <path fill="currentColor" d="M5,3L4.35,6.34H17.94L17.5,8.5H3.92L3.26,11.83H16.85L16.09,15.64L10.61,17.45L5.86,15.64L6.19,14H2.85L2.06,18L9.91,21L18.96,18L20.16,11.97L20.4,10.76L21.94,3H5Z" />
        </SvgIcon>
        <SvgIcon style={{color:'#ffc107'}}>
            <path fill="currentColor" d="M22.88,10.41C20.77,12.18 17.61,11.9 15.84,9.79C14.06,7.67 14.34,4.5 16.45,2.75L16.96,2.37C15.27,4.19 15.16,7.03 16.8,9C18.43,10.94 21.25,11.32 23.34,9.97L22.88,10.41M21.1,14.5C17.93,17.17 13.2,16.76 10.54,13.58C7.87,10.41 8.29,5.68 11.46,3L12.38,2.36C9.96,5.09 9.84,9.26 12.26,12.14C14.68,15 18.8,15.63 21.91,13.72L21.1,14.5M19.97,19.38C15.53,23.11 8.9,22.53 5.17,18.08C1.45,13.64 2.03,7 6.47,3.29L7.58,2.5C4.07,6.3 3.85,12.23 7.28,16.32C10.71,20.4 16.59,21.22 20.96,18.43L19.97,19.38Z" />
        </SvgIcon>
        <SvgIcon style={{color:"#f57c00"}}>
            <path fill="currentColor" d="M12,17.56L16.07,16.43L16.62,10.33H9.38L9.2,8.3H16.8L17,6.31H7L7.56,12.32H14.45L14.22,14.9L12,15.5L9.78,14.9L9.64,13.24H7.64L7.93,16.43L12,17.56M4.07,3H19.93L18.5,19.2L12,21L5.5,19.2L4.07,3Z" />
        </SvgIcon>
        <SvgIcon color="primary">
            <path fill="currentColor" d="M20.45 17.39L12.36 21.97V18.4L17.4 15.63L20.45 17.39M21 16.89V7.31L18.04 9V15.18L21 16.89M3.55 17.39L11.64 21.96V18.4L6.6 15.63L3.55 17.39M3 16.89V7.31L5.96 9V15.18L3 16.89M3.35 6.69L11.64 2V5.45L6.33 8.37L6.28 8.39L3.35 6.69M20.65 6.69L12.36 2V5.45L17.67 8.38L17.71 8.4L20.65 6.69M11.64 17.59L6.67 14.85V9.44L11.64 12.31V17.59M12.36 17.59L17.33 14.86V9.44L12.36 12.31V17.59M7 8.81L12 6.06L17 8.81L12 11.69L7 8.81Z" />
        </SvgIcon>
        <SvgIcon style={{color:'#009688'}}>
            <path fill="currentColor" d="M12,1.85C11.73,1.85 11.45,1.92 11.22,2.05L3.78,6.35C3.3,6.63 3,7.15 3,7.71V16.29C3,16.85 3.3,17.37 3.78,17.65L5.73,18.77C6.68,19.23 7,19.24 7.44,19.24C8.84,19.24 9.65,18.39 9.65,16.91V8.44C9.65,8.32 9.55,8.22 9.43,8.22H8.5C8.37,8.22 8.27,8.32 8.27,8.44V16.91C8.27,17.57 7.59,18.22 6.5,17.67L4.45,16.5C4.38,16.45 4.34,16.37 4.34,16.29V7.71C4.34,7.62 4.38,7.54 4.45,7.5L11.89,3.21C11.95,3.17 12.05,3.17 12.11,3.21L19.55,7.5C19.62,7.54 19.66,7.62 19.66,7.71V16.29C19.66,16.37 19.62,16.45 19.55,16.5L12.11,20.79C12.05,20.83 11.95,20.83 11.88,20.79L10,19.65C9.92,19.62 9.84,19.61 9.79,19.64C9.26,19.94 9.16,20 8.67,20.15C8.55,20.19 8.36,20.26 8.74,20.47L11.22,21.94C11.46,22.08 11.72,22.15 12,22.15C12.28,22.15 12.54,22.08 12.78,21.94L20.22,17.65C20.7,17.37 21,16.85 21,16.29V7.71C21,7.15 20.7,6.63 20.22,6.35L12.78,2.05C12.55,1.92 12.28,1.85 12,1.85M14,8C11.88,8 10.61,8.89 10.61,10.39C10.61,12 11.87,12.47 13.91,12.67C16.34,12.91 16.53,13.27 16.53,13.75C16.53,14.58 15.86,14.93 14.3,14.93C12.32,14.93 11.9,14.44 11.75,13.46C11.73,13.36 11.64,13.28 11.53,13.28H10.57C10.45,13.28 10.36,13.37 10.36,13.5C10.36,14.74 11.04,16.24 14.3,16.24C16.65,16.24 18,15.31 18,13.69C18,12.08 16.92,11.66 14.63,11.35C12.32,11.05 12.09,10.89 12.09,10.35C12.09,9.9 12.29,9.3 14,9.3C15.5,9.3 16.09,9.63 16.32,10.66C16.34,10.76 16.43,10.83 16.53,10.83H17.5C17.55,10.83 17.61,10.81 17.65,10.76C17.69,10.72 17.72,10.66 17.7,10.6C17.56,8.82 16.38,8 14,8Z" />
        </SvgIcon>
        <SvgIcon style={{color:"#000"}}>
            <path fill="currentColor" d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z" />
        </SvgIcon>
      </div>
    )
  }

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
    <Button onClick={handleClick} className={classes.hide} color="inherit" startIcon={<AppsIcon/>}>Skills</Button>
    <Popover 
      open={open} 
      anchorEl={anchorEl} 
      onClose={handleClose}
      anchorOrigin={{
        vertical:'bottom',
        horizontal:'center'
      }}
      transformOrigin={
        {
          vertical:'top',
          horizontal:'center'
        }
      }
      >
        <Icons/>
    </Popover>
    <Button 
      className={classes.hide} 
      color="inherit" 
      startIcon={<CloudDownloadIcon/>}
      href="/static/documents/AndyResume.pdf"
      download="Andy_Resume.pdf"
      >Download</Button>
    <a className={classes.icon} href="https://www.linkedin.cn/in/andy-yuan-qian/">
      <IconButton color="inherit" component="span" >
        <LinkedInIcon />
      </IconButton>
    </a>
    <a className={classes.icon} href="https://github.com/Andy-94">
    <IconButton color="inherit" component="span" href="https://github.com/Andy-94">
      <GitHubIcon />
    </IconButton>
    </a>
    <IconButton color="inherit" component="span">
      <EmailIcon />
    </IconButton>

   </div>
  );
  const mobileList =()=>(
    <div clasName={classes.mobileColor}>
      <List>
          {['Skills', 'Linkedin','GitHub', 'Send email'].map((text) => (
            <ListItem disablePadding button key={text}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
      </List>
    </div>
  );
  
  const handleClick = (event) =>{
    setAnchorEl(event.currentTarget)
  }
  const handleClose =()=>{
    setAnchorEl(null);
  }

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