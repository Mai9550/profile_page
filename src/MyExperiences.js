import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import firstExp from './firstExp.jpg'
import secondExp from './secondExp.jpg'
import thirdExp from './thirdExp.jpg'
import fourthExp from './fourthExp.jpg'
import fifthExp from './fifthExp.jpg'
import Grid from '@material-ui/core/Grid';
import { Autorenew } from '@material-ui/icons';
import { createMuiTheme } from '@material-ui/core/styles';
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
   width:1290,
   height:600,
   left:75,
   borderRadius:25,
   [theme.breakpoints.down('md')]: {
    width:668
  },
  },
 first :{
   width:209,
   height:281,
  [theme.breakpoints.down('md')]: {
    width:96,
    height:159
  },  
 },
 second :{
  width:209,
  height:281,
  [theme.breakpoints.down('md')]: {
    width:96,
    height:159
  }},  
  third: {
    width:209,
    height:281,
    [theme.breakpoints.down('md')]: {
      width:96,
      height:159
    },  
  },
  fourth: {
    width:209,
    height:281,
    [theme.breakpoints.down('md')]: {
      width:96,
      height:159
    },  
  },
  fifth: {
    width:209,
    height:281,
    [theme.breakpoints.down('md')]: {
      width:96,
      height:159
    },  
  },
});

export default function MediaCard2() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
         <div style={{textAlign:'left',position:'relative',fontStyle:'italic',fontWeight:900,left:34}}>
        <h1 style={{color:'#ffaf20'}}>My Experiences</h1>
        </div>
        <Grid container spacing={1}>
        <Grid item xs={2} >
          <div className={classes.first}>
      <img src={firstExp} style={{position:'relative',top:73,left:39}} className={classes.first}/>
      <h3 style={{position:'relative',top:60,textAlign:'left',color:'#10455B',fontStyle:'light',fontSize:20,fontWeight:300,left:39}}>Walking Tour</h3>
      <h3 style={{position:'relative',fontStyle:'medium',textAlign:'left',top:60,left:39}}>Visit the hidden spots of my marrakech  </h3>
      </div>
      </Grid>
      <Grid item xs={2} >
      
      <img src={secondExp} style={{position:'relative',top:73,left:39}} className={classes.second}/>
      <h3 style={{position:'relative',top:60,textAlign:'left',color:'#10455B',fontStyle:'light',fontSize:20,fontWeight:300,left:39}}>Walking Tour</h3>
      <h3 style={{position:'relative',fontStyle:'medium',textAlign:'left',top:60,left:39}}>Visit the hidden spots of my marrakech  </h3>
      
      </Grid>
      <Grid item xs={2} >
      <img src={thirdExp} style={{position:'relative',top:73,left:39}} className={classes.third}/>
      <h3 style={{position:'relative',top:60,textAlign:'left',color:'#10455B',fontStyle:'light',fontSize:20,fontWeight:300,left:39}}>Walking Tour</h3>
      <h3 style={{position:'relative',fontStyle:'medium',textAlign:'left',top:60,left:39}}>Visit the hidden spots of my marrakech  </h3>
      </Grid>
      <Grid item xs={2} >
      <img src={fourthExp} style={{position:'relative',top:73,left:39}} className={classes.fourth}/>
      <h3 style={{position:'relative',top:60,textAlign:'left',color:'#10455B',fontStyle:'light',fontSize:20,fontWeight:300,left:39}}>Walking Tour</h3>
      <h3 style={{position:'relative',fontStyle:'medium',textAlign:'left',top:60,left:39}}>Visit the hidden spots of my marrakech  </h3>
      </Grid>
      <Grid item xs={2} >
      <img src={fifthExp} style={{position:'relative',top:73,left:39}} className={classes.fifth}/>
      <h3 style={{position:'relative',top:60,textAlign:'left',color:'#10455B',fontStyle:'light',fontSize:20,fontWeight:300,left:39}}>Walking Tour</h3>
      <h3 style={{position:'relative',fontStyle:'medium',textAlign:'left',top:60,left:39}}>Visit the hidden spots of my marrakech  </h3>
      </Grid>
      </Grid>
    </Card>
  );
}
