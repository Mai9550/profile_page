import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { createMuiTheme } from '@material-ui/core/styles';
import { orange } from '@material-ui/core/colors';
import { Palette } from '@material-ui/icons';
import logo from './Frame 13.png'
import logo2 from './Vector (3).png'
import logo3 from './cam.png'
import { Grid } from '@material-ui/core';
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
    height:313,
left:74,
borderRadius:25,
[theme.breakpoints.down('md')]: {
  width:666
},
  },
first: {
  position:'relative',marginLeft:20,
  [theme.breakpoints.down('md')]: {
    fontSize:14
  },
},
second: {
  position:'relative',marginLeft:20,
  [theme.breakpoints.down('md')]: {
    fontSize:14,
    
  },
},
third: {
  position:'relative',marginLeft:20,
  [theme.breakpoints.down('md')]: {
    fontSize:14,
    
  },
},
flexContainer: {
 
}
  
});

export default function ImgMediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
        <div style={{textAlign:'left',position:'relative',left:45,fontStyle:'italic',fontWeight:900}}>
        <h1 style={{color:'#ffaf20'}}>My Passions</h1>
        </div>
        <Grid container spacing={3}>
        <Grid item xs={6}>
        <Grid
  container
  direction="column"
  justify="space-evenly"
  alignItems="center"
  
>
        <img src={logo}  alt="logo" style={{}}/>
        <img src={logo2}  alt="logo" style={{}}/>
        <img src={logo3}  alt="logo" style={{}}/>
     </Grid>
     </Grid>
     <Grid item xs={6}>
     <Grid
  container
  direction="column"
  justify="space-evenly"
  alignItems="center"
  
>
           <div className={classes.first}>
       music can truly convey the way I feel and it's also typical of the local culture.
       
       <div className={classes.second}>
Knowing the local history <br/>
</div>
</div>
<div style={{position:'relative',marginLeft:20}}>
Movies make me dream.
</div>
</Grid>
</Grid>
</Grid>
    </Card>
  );
}
