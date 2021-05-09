import * as React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import CastForEducationIcon from '@material-ui/icons/CastForEducation';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import DetailsIcon from '@material-ui/icons/Details';

const backgroundImage = 'https://z3.ax1x.com/2021/05/07/g1Xmi8.png';

const styles = (theme) => ({
  root: {
    display: 'flex',
    overflow: 'hidden',
    backgroundImage:`url(${backgroundImage})`,
  },
  container: {
    marginTop: theme.spacing(15),
    marginBottom: theme.spacing(20),
    display: 'flex',
    position: 'relative',
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(0, 5),
  },
  icon: {
    height: 55,
  },
  title: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
  },
  TypoType:{
    fontSize: 14,
    fontWeight: 500,
    fontStyle: 'italic',
    align:'center',
  }
});

function Detail(props) {
  const { classes } = props;

  return (
    <section className={classes.root}>
      <Container className={classes.container}>
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <DetailsIcon fontSize="large" className={classes.icon}/>
              <Typography variant="h6" className={classes.title}>
                {`My Contact Detail`}
              </Typography>
              <Typography className={classes.TypoType}>
                {
                  'Telephone: 027-505-0575'
                }
              </Typography>
              <Typography className={classes.TypoType}>
                {
                  'Email: andycodebuilder@gmail.com'
                }
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <AccountBoxIcon fontSize='large' className={classes.icon}/>
              <Typography variant="h6" className={classes.title}>
                {`My Experiences`}
              </Typography>
              <Typography className={classes.TypoType}>
                {
                  'Comprehensive knowledge of foundational web dev skills including HTML5, CSS3, Less, jQuery, Bootstrap, Webpack, Node.js, React, and Angular. '
                }
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <CastForEducationIcon fontSize='large' className={classes.icon}/>
              <Typography variant="h6" className={classes.title}>
                {`Education Background`}
              </Typography>
              <Typography className={classes.TypoType}>
                {'Auckland University of Technology'}
              </Typography>
              <Typography className={classes.TypoType}>
                {'Bachelor of Computer and Information Science'}
              </Typography>
              <Typography className={classes.TypoType}>
                {'ICL Graduate Business School.'}
              </Typography>
              <Typography className={classes.TypoType}>
                {'Diploma in Computer Science (Level 7)'}
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}

Detail.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Detail);