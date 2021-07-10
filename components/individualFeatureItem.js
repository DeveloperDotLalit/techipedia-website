import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Image from 'next/image'
// import Image2 from '../components/mobileex.jpg'
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '100%',
      height: theme.spacing(50),
    },
    papercon: {
        backgroundImage: `url(${"../components/mobileex.jpg"})`
    },
  },
}));

export default function IndividualItem( props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper elevation={12} className={classes.papercon}>
          Needed to code here. <br/>
          <h1>{props.namestr}</h1>
          <br/>
          name is {props.text.Name} and Price is {props.text.Price}. <br/>
      </Paper>
    </div>
  );
}