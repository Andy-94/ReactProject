import * as React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton'
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import MoreVertIcon from '@material-ui/icons/MoreVert';
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
  }

});

function Experience(props) {
  const { classes } = props;
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
      image:"https://z3.ax1x.com/2021/05/07/g3dNSs.jpg",
      graphy:"Introduction to the project: BOW LENGTH LIMITED is an IT Company in New Zealand, which is focusing on Web/App Development, Media Production..."
    },
  ];

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
                        action={<MoreVertIcon/>}
                        title={item.title}
                        subheader={item.subheader}
                        />
                        <CardMedia
                        className={classes.media}
                        image={item.image}
                        title="picture"
                        />
                        <CardContent>
                          <Typography variant="body2" color="textSecondary" component="p">
                             {item.graphy}
                          </Typography>
                          
                        </CardContent>
                        <CardActions disableSpacing>
                          <IconButton aria-label="add to favorites">
                              <FavoriteIcon />
                            </IconButton>
                            <IconButton aria-label="share">
                              <ShareIcon />
                            </IconButton>
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