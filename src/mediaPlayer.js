import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import logo from './Rectangle 82.png'
import { light } from '@material-ui/core/styles/createPalette';

const useStyles = makeStyles((theme) => ({
  root: {
    position:'relative',
    left:-220,
    height:509,
    borderRadius:25,
   width:891,
   height:509,
   [theme.breakpoints.down('md')]: {
    position:'relative',
    left:50,

    [theme.breakpoints.down('md')]: {
      width:668
    },
  },
  },
  details: {
  
    
    height:509,
    position:'relative',
  
  },
 
  cover: {
    
    
  },
 
 
 
  video:{
    position:'relative',
    
    height:322,
    top:22,
    [theme.breakpoints.down('md')]: {
      width:628
    },
  }
}));

export default function MediaControlCard() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Card className={classes.root}>
      <div className={classes.details}>
      <img src={logo} className={classes.video} alt="logo" />
      <div style={{position:'relative',
    fontWeight:400,textAlign:'left',left:20,fontSize:18,top:30}}>
      <p>
      I love camping because it makes me watch the sky (how long have I got until <br/>that approaching cloud is going to rain on me? which way is the wind blowing? <br/>
      <b/>You become more aware of nature when you camp...
        </p>
        </div>
       </div>
    </Card>
  );
}
