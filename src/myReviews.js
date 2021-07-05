import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ava1 from './ava1.png'
import ava2 from './ava2.png'
import ava3 from './ava3.png'
import { createMuiTheme } from '@material-ui/core/styles';
import { light } from '@material-ui/core/styles/createPalette';
const theme = createMuiTheme({
  palette: {
    primary: {
      main:  '#ffaf20',
    A400: '#FFAF20'
    },
    secondary: {
      light: '#ff7961',
      main:  '#ffaf20',
    },
  },
});

const useStyles = makeStyles({
  root: {
      position:'relative',
    width: 1294,
    height:712,
   top:44,
    left:75,
    borderRadius:25,
    [theme.breakpoints.down('md')]: {
      width:670,
      height:500
    },
  },
  media: {
    height: 140,
  },
  first:{
    width:1250,
    height:185,
    position:'relative',
    top:46,
    left:24.8,
    border:'1px solid ',
    borderColor:'#C4C4C4',
    [theme.breakpoints.down('md')]: {
      width:625,
      height:124,
      position:'relative',
      top:25,
      left:12,
      border:'1px solid ',
      borderColor:'#C4C4C4',
    },
  },
second:{
  position:'relative',
  top:17,
  left:-450,
  [theme.breakpoints.down('md')]: {
   position:'relative',
  left:-150,
  width:38,
  height:37 
  }
},
title1: {
  position:'relative',top:20,left:-450,fontWeight:400,fontSize:20,
  [theme.breakpoints.down('md')]: {
    position:'relative',
   left:-150,
   fontSize:16
   }
},
third: {
  width:1250,height:185,position:'relative',top:46,left:24.8,border:'1px solid ',borderColor:'#C4C4C4',
  [theme.breakpoints.down('md')]: {
    width:625,
    height:124,
    position:'relative',
    top:25,
    left:12,
    border:'1px solid ',
    borderColor:'#C4C4C4',
  },
},
fifth: {
  width:1250,height:185,position:'relative',top:46,left:24.8,border:'1px solid ',borderColor:'#C4C4C4',fontWeight:200,
  [theme.breakpoints.down('md')]: {
    width:625,
    height:124,
    position:'relative',
    top:25,
    left:12,
    border:'1px solid ',
    borderColor:'#C4C4C4',
  },
},
fourth: {
  position:'relative',
  top:17,
  left:-450,
  [theme.breakpoints.down('md')]: {
   position:'relative',
  left:-150,
  width:38,
  height:37,
  }
},
subtitle:{
  position:'relative',top:20,left:-450,fontSize:12,
  [theme.breakpoints.down('md')]: {
    position:'relative',
   left:-150,
  fontSize:14
   }
}
});

export default function MyReviews() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
          <div style={{textAlign:'left',position:'relative',fontStyle:'italic',fontWeight:900,left:34}}>
        <h1 style={{color:'#ffaf20'}}>My Reviews</h1>
        </div>
     <div className={classes.first}>
   
         <img src={ava1}  className={classes.second}/>
        <div className={classes.title1}> Amin</div>
        <div className={classes.subtitle}> 19 March 2021</div>
         <div style={{position:'relative',left:260,top:-90,textAlign:'left',fontWeight:200,fontSize: 14 }}>
         <p>We had a fantastic afternoon with Wael tasting our way through the streets of Jandouba Wael's passion for his culture and food is very evident. We learnt a lot during our time with him. We highly recommend doing this tour with Mohamed.
<br/>A delightful journey of food discovery</p>
</div>

     </div>
     <div className={classes.third}>
     <img src={ava2} className={classes.fourth} />
     <div className={classes.title1}> Alex</div>
     <div className={classes.subtitle}> 19 March 2021</div>
     <div style={{position:'relative',width:999,height:105,left:260,top:-87,textAlign:'left',fontWeight:200,fontSize:14}}>
         <p>We had a fantastic afternoon with Wael tasting our way through the streets of Jandouba Wael's passion for his culture and food is very evident. We learnt a lot during our time with him. We highly recommend doing this tour with Mohamed.
<br/>A delightful journey of food discovery</p>
</div>
     </div>
     <div className={classes.fifth}>
     <img src={ava3} className={classes.fourth}/>
     <div className={classes.title1}> David</div>
     <div className={classes.subtitle}> 19 March 2021</div>
     <div style={{position:'relative',width:999,height:105,left:260,top:-87,textAlign:'left',fontSize:14}}>
         <p>We had a fantastic afternoon with Wael tasting our way through the streets of Jandouba Wael's passion for his culture and food is very evident. We learnt a lot during our time with him. We highly recommend doing this tour with Mohamed.
<br/>A delightful journey of food discovery</p>
</div>
     </div>
    </Card>
  );
}
