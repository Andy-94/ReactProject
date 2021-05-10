import * as React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton'
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card'
import Link from '@material-ui/core/Link'
import Popper from '@material-ui/core/Popper'
import Fade from '@material-ui/core/Fade'
import Paper from '@material-ui/core/Paper'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import WorkIcon from '@material-ui/icons/Work';


const backgroundImage='https://z3.ax1x.com/2021/05/07/g1Xmi8.png';

const styles = (theme) => ({
  root: {
    display: 'flex',
    overflow: 'hidden',
    backgroundImage: `url(${backgroundImage})`,
  },
  container: {
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(15),
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(0, 5),
  },
  title: {
    marginBottom: theme.spacing(12),
    fontSize:'40px',
    fontWeight:700,
    [theme.breakpoints.down('xs')]:{
      fontSize:'24px',
    }
  },
  number: {
    fontSize: 24,
    fontFamily: theme.typography.fontFamily,
    color: theme.palette.secondary.main,
    fontWeight: theme.typography.fontWeightMedium,
  },
  media:{
    height: 0,
    paddingTop: '56.25%',
  },
  typography: {
    padding: theme.spacing(2),
  },

});


function Experience(props) {
  const { classes } = props;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [placement, setPlacement] = React.useState();
  const CardComtainer = [
    {
      number:"1.",
      title:"Web Developer Meihaofangwuzhizao Ltd",
      subheader:"Aug 2015 - Jul 2016",
      image:"https://z3.ax1x.com/2021/05/07/g3d9Q1.jpg",
      graphy:"Introduction to the project: Meihaofangwu has an S-EPC services Company in China, which develops software on house manufacturing."
    },
    {
      number:"2.",
      title:"Project Leader Compucon NewZealand",
      subheader:"Jul 2019 - Jul 2020",
      image:"https://z3.ax1x.com/2021/05/03/gey6Gq.jpg",
      graphy:"Introduction to the project: Compucon New Zealand is a well-established system integrator for super Micro Computer Inc. in New Zealand."
    },
    {
      number:"3.",
      title:"Web Developer Bow Length Limited",
      subheader:"Nov 2020 - Mar 2021",
      image:"https://z3.ax1x.com/2021/05/10/gt7Qot.jpg",
      graphy:"Introduction to the project: BOW LENGTH LIMITED is an IT Company in New Zealand, which is focusing on Web/App Development, Media Production..."
    },
  ];

  const handleClick = (newPlacement) => (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((prev) => placement !== newPlacement || !prev);
    setPlacement(newPlacement);
  };
  return (
    <section className={classes.root}>
      <Container className={classes.container}>
        <Typography
          marked="center"
          align="center"
          className={classes.title}
        >
          {`MY WORKING EXPERIENCE`}
        </Typography>
        <div>
          <Grid container spacing={5}>
            {CardComtainer.map((item)=>(
              <Grid key={item.number} item xs={12} md={4}>
                  <div className={classes.item}>
                    <div className={classes.number}>
                      {item.number}
                    </div>
                    <Card>
                      <CardHeader 
                        avatar={<WorkIcon fontSize="large"/>}
                        action={<IconButton><MoreVertIcon/></IconButton>}
                        title={item.title}
                        subheader={item.subheader}
                        className={classes.text}
                        />
                        <CardMedia
                        className={classes.media}
                        image={item.image}
                        title="code-picture"
                        />
                        <CardContent>
                          <Typography variant="body2" color="textSecondary">
                             {item.graphy}
                          </Typography> 
                        </CardContent>
                        <CardActions disableSpacing>
                            <Checkbox icon={<FavoriteIcon/>} checkedIcon={<Favorite/>} name="like"/>
                            <IconButton aria-label="share" onClick={handleClick('bottom-start')}>
                              <ShareIcon />
                            </IconButton>
                            <Popper 
                              open={open} 
                              anchorEl={anchorEl} 
                              placement={placement} 
                              transition>
                            {({ TransitionProps }) => (
                              <Fade {...TransitionProps} timeout={350}> 
                                <Paper>
                                  <Typography className={classes.typography}>
                                    <Link color="inherit" href="https://github.com/Andy-94" >Click link go to Github</Link>
                                  </Typography>
                                  <Typography className={classes.typography}>
                                  <Link color="inherit" href="https://www.linkedin.cn/in/andy-yuan-qian/" >Click link go to Linkedin</Link>
                                  </Typography>
                                  <Typography className={classes.typography}>
                                  <Link color="inherit" href="#" >Click link go to FaceBook</Link>
                                  </Typography>
                                </Paper>
                              </Fade>
                            )}
                            </Popper>
                        </CardActions>
                      </Card>
                  </div>
                </Grid>
            ))}
          </Grid>
        </div>
      </Container>
    </section>
  );
}

Experience.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Experience);