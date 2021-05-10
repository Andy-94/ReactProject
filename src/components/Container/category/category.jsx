import * as React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

const styles = (theme) => ({
  root: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(4),
  },
  images: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexWrap: 'wrap',
  },
  imageWrapper: {
    position: 'relative',
    display: 'block',
    padding: 0,
    borderRadius: 0,
    height: '40vh',
    [theme.breakpoints.down('md')]: {
      width: '100% !important',
      height: 100,
    },
    '&:hover': {
      zIndex: 1,
    },
    '&:hover $imageBackdrop': {
      opacity: 0.15,
    },
    '&:hover $imageMarked': {
      opacity: 0,
    },
    '&:hover $imageTitle': {
      border: '4px solid currentColor',
    },
  },
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    background: theme.palette.common.black,
    opacity: 0.5,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing(2)} ${theme.spacing(4)} 14px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    background: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
  title:{
    fontSize:'40px',
    fontWeight:700,
  }
});

function Category(props) {
  const { classes } = props;

  const images = [
    {
      url:
        'https://z3.ax1x.com/2021/05/07/g3StxS.jpg',
      title: 'Vue.js',
      width: '40%',
    },
    {
      url:
        'https://z3.ax1x.com/2021/05/07/g3SUKg.jpg',
      title: 'Webpack',
      width: '20%',
    },
    {
      url:
        'https://z3.ax1x.com/2021/05/07/g3dAoD.jpg',
      title: 'HTML5',
      width: '40%',
    },
    {
      url:
        'https://z3.ax1x.com/2021/05/07/g3asxI.jpg',
      title: 'JavaScript',
      width: '38%',
    },
    {
      url:
        'https://z3.ax1x.com/2021/05/03/gey6Gq.jpg',
      title: 'React.js',
      width: '38%',
    },
    {
      url:
      'https://z3.ax1x.com/2021/05/07/g3dNSs.jpg',
      title: 'Git',
      width: '24%',
    },
    {
      url:
        'https://z3.ax1x.com/2021/05/07/g3d9Q1.jpg',
      title: 'CSS3',
      width: '40%',
    },
    {
      url:
        'https://z3.ax1x.com/2021/05/07/g3SY28.jpg',
      title: 'Node.js',
      width: '20%',
    },
    {
      url:
        'https://z3.ax1x.com/2021/05/08/g83yCt.jpg',
      title: 'Angular.js',
      width: '40%',
    },
  ];

  return (
    <Container className={classes.root} component="section">
      <Typography className={classes.title} marked="center" align="center">
        {`MY KNOWLEDGE IN SOFTWARE`}
      </Typography>
      <div className={classes.images}>
        {images.map((image) => (
          <ButtonBase
            key={image.title}
            className={classes.imageWrapper}
            style={{
              width: image.width,
            }}
          >
            <div
              className={classes.imageSrc}
              style={{
                backgroundImage: `url(${image.url})`,
              }}
            />
            <div className={classes.imageBackdrop} />
            <div className={classes.imageButton}>
              <Typography
                component="h3"
                variant="h6"
                color="inherit"
                className={classes.imageTitle}
              >
                {image.title}
                <div className={classes.imageMarked} />
              </Typography>
            </div>
          </ButtonBase>
        ))}
      </div>
    </Container>
  );
}

Category.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Category);