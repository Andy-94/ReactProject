import * as React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button'
import Hidden from '@material-ui/core/Hidden';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

const styles = (theme) => ({
  root: {
    marginTop: theme.spacing(10),
    marginBottom: 0,
    display: 'flex',
  },
  cardWrapper: {
    zIndex: 1,
  },
  card: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#ff9e80',
    padding: theme.spacing(8, 3),
  },
  cardContent: {
    maxWidth: 400,
  },
  imagesWrapper: {
    position: 'relative',
  },
  imageDots: {
    position: 'absolute',
    top: -67,
    left: -67,
    right: 0,
    bottom: 0,
    width: '100%',
  },
  image: {
    position: 'absolute',
    top: -28,
    left: -28,
    right: 0,
    bottom: 0,
    width: '100%',
    maxWidth: 600,
  },
  title:{
    fontWeight:700,
  },
  word:{
    fontSize:'17px'
  },
  button:{
    width:'100%',
    marginTop:20,
  }
});

function Personal(props) {
  const { classes } = props;
  return (
    <Container className={classes.root} component="section">
      <Grid container>
        <Grid item xs={12} md={6} className={classes.cardWrapper}>
          <div className={classes.card}>
            <form className={classes.cardContent}>
              <Typography variant="h4" className={classes.title} gutterBottom>
                Download My Resume
              </Typography>
              <Typography className={classes.word}>
              Please click the button and download my resume for your review, and I would welcome the opportunity to further demonstrate my interest in the position by discussing my skills and background with you in more detail at your convenience.
              </Typography>
              <Button
              type="download"
              variant="contained"
              color="primary"
              className={classes.button}
              >
                Download RESUME
              </Button>
            </form>
          </div>
        </Grid>
        <Grid item xs={12} md={6} className={classes.imagesWrapper}>
          <Hidden mdDown>
            <div className={classes.imageDots} />
            <img
              src="https://z3.ax1x.com/2021/05/08/g88VVH.jpg"
              alt="teamwork"
              className={classes.image}
            />
          </Hidden>
        </Grid>
      </Grid>
    </Container>
  );
}

Personal.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Personal);