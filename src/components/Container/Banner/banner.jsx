import * as React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import BannerLayout from './picturelayout';
import Backdrop from '@material-ui/core/Backdrop'
import CircularProgress from '@material-ui/core/CircularProgress';

const backgroundImage =
  'https://z3.ax1x.com/2021/05/06/glm0p9.jpg';

const styles = (theme) => ({
  background: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundColor: '#7fc7d9',
    backgroundPosition: 'center',
  },
  button: {
    minWidth: 200,
  },
  h5: {
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(4),
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(10),
    },
  },
  h2:{
    fontWeight:400,
    borderBottom:'6px #f50057 solid',
    [theme.breakpoints.down('sm')]:{
      fontWeight:200,
    }
  },
  more: {
    marginTop: theme.spacing(2),
  },
  backdrop:{
    zIndex: theme.zIndex.drawer +1,
    color:'#fff',
  }
});

function Banner(props) {
  const { classes } = props;
  const [open, setOpen] = React.useState(false);
  const handleToggle =()=>{
    setOpen(!open)
  };
  const handleClose=()=>{
    setOpen(false);
  };
  return (
    <BannerLayout backgroundClassName={classes.background}>
      <img
        style={{ display: 'none' }}
        src={backgroundImage}
        alt="increase priority"
      />
      <Typography color="inherit" align="center" variant="h2" marked="center" className={classes.h2}>
        {`I'M YUAN QIAN`}
      </Typography>
      <Typography color="inherit" align="center" variant="h5" className={classes.h5}>
        {`Front-end Developer & Web Developer`}
      </Typography>
      <Button
        color="secondary"
        variant="contained"
        size="large"
        className={classes.button}
        component="a"
        href="#arrow"
        onClick={handleToggle}
      >
        {`About Me`}
      </Button>
      <Backdrop className={classes.backdrop} open={open} onClick={handleClose} >
        <CircularProgress color="inherit"/>
      </Backdrop>
      <Typography variant="body2" color="inherit" className={classes.more}>
        Auckland, New Zealand
      </Typography>
    </BannerLayout>
  );
}

Banner.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Banner);