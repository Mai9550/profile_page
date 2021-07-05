import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import graphic from './rating systheme.png'
import Typography from "@material-ui/core/Typography";
import logo from "./profile pic.png";
import map from './Frame 9.png'
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
    width:364,
    height:502,
    
    borderRadius:25,
   
    [theme.breakpoints.down('md')]: {
      
      width:490,
      margin:'auto'
    },


  },
  media: {
    position: "relative",
    height: 167,
    width: 174,
    top:50,
    left:-155,
   margin:'auto',
   [theme.breakpoints.down('md')]: {
      
    
    position:"relative",
    left:50
  },
  },
  text: {
 /* Sameh ben Mahmoud */

 position: 'relative',
 
 left: 9.07,
 right: 8.24,


 
 
 

 
  },
  
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <div style={{position:'relative',top:-170}}>
   <img src={logo} className={classes.media} alt="logo" />
    <Card className={classes.root}>
   
      <CardActionArea>
      
        <CardContent>
          <div className={classes.text}>
          
            <h1 class="title">Sameh ben Mahmoud</h1>
          
          </div>
          <div className={classes.text}>
          
          <h1 class="title2">The Camper Travler</h1>
        
        </div>
        <img src={graphic} />
        <div class="yellow-line"></div>
        <img src={map} style={{position:"relative",top:20,left:-130}}/>
     <div style={{position:"relative",top:-190}}>I live in <span class="marrakesh">Marrakech</span>

</div>
<div style={{position:"relative",top:-155}}>
I speak <span class="marrakesh">Arabic,  Français,  English</span>
</div>
<div style={{position:'relative',top:-125}}>My passion is <span class="marrakesh">Camping </span>
</div>
<div style={{position:'relative',top:-100}}>Verified <span class="marrakesh">Local host</span>
</div>
<div style={{position:'relative',top:-75}}>

Response time<span class="marrakesh"> less than 22 hours</span>
</div>
        </CardContent>
      </CardActionArea>
      
      <button style={{position:"relative",top:-40,height:41.5,width:218,borderRadius:50,backgroundColor:'#FFAF20',border:'none',color:'white',fontFamily:'sans-serif',fontWeight:300,fontSize:17}}>Contact me</button>
    
    </Card>
    </div>
  );
}
