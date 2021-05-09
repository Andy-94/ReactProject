import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = (theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: theme.spacing(9),
    marginBottom: theme.spacing(9),
  },
  button: {
    border: '4px solid currentColor',
    borderRadius: 0,
    height: 'auto',
    padding: theme.spacing(2, 5),
  },
  link: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    fontFamily: 'Raleway',
  },
  buoy: {
    width: 200,
    borderRadius:"50%",
    boxShadow:"5px 5px 7px 5px #263238"
  }, 
  title:{
    fontWeight:700,
  },
});

function Question(props) {
  const { classes } = props;

  return (
    <Container className={classes.root} component="section">
      <Button className={classes.button}>
        <Typography variant="h4" className={classes.title}>
          Do you want to hire me? more information?
        </Typography>
      </Button>
      <Typography variant="subtitle1" className={classes.link}>
        Please send the Email to me. Get in touch!
      </Typography>
      <img
        src="https://z3.ax1x.com/2021/05/03/geyyin.jpg"
        className={classes.buoy}
        alt="andy"
      />
    </Container>
  );
}

Question.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Question);