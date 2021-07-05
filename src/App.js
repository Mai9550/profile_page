import logo from './cover pic.png';
import barr from './barr.png'
import MediaCard from './card.js'
import './App.css'
import MediaControlCard from './mediaPlayer'
import Grid from '@material-ui/core/Grid';
import ImgMediaCard from './MyPassions'
import RecipeReviewCard from './gallery'
import MediaCard2 from './MyExperiences'
import myReviews from './myReviews'
import MyReviews from './myReviews';
import logo2 from './logo22.png'
import Box from '@material-ui/core/Box';
import { sizing } from '@material-ui/system';
import { light } from '@material-ui/core/styles/createPalette';
import TextField from '@material-ui/core/TextField';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import firstlogo2 from './first-logo (2).png'
import arrow from './Path (5).png'
const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#ffffff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});

function App() {
  return (
    
    <div className="App">
      <div class="topnav">
        <img src={firstlogo2} class="logo"/>
  <a class="style" href="#home">Become a Host</a>
  <a   class="style2"  href="#news">English/ EUR</a>
  <a class="style3">Log in</a>
  <div class="style5"><a class="style4">Sign Up</a></div>
</div>
       <div className="card"> </div>
      
       <img src={logo} style={{width:1440}} alt="logo"/>
       
       
       <div style={{position:'relative',top:-84,left:72}}>
       <Grid container spacing={1}>
       <Grid item xs={12} sm={6}>
     <MediaCard/>
     </Grid>
     <Grid item xs={12} sm={6}>
     <MediaControlCard/>
  
     </Grid>
     </Grid>
     </div>
      <ImgMediaCard/>
  <RecipeReviewCard/>
  <div style={{ position:'relative',
    top:65}}>
  <MediaCard2/>
  <MyReviews/>
  
  </div>
  
  
  <div style={{width:1440,height:445,backgroundColor:'#1E2833',position:'relative',top:180}}>
    <img src={logo2} style={{position:'relative',left:-590,top:14}}/>
    <h1 style={{position:'relative',top:-60,fontFamily:'sans-serif',fontSize:20,color:'#FFFFFF',fontWeight:400}}>Ready to join us and share your passion?</h1>
    <button style={{height:50,width:201,borderRadius:8,backgroundColor:'#FFAF20',border:'none',position:'relative',left:450,color:'white',fontFamily:'sans-serif',fontWeight:300,fontSize:17,top:-114}}>Become a Host</button>
    <div style={{width:1231,height:0, border:'1px solid white',opacity:0.1,position:'absolute',left:50}}></div>
    
    <div style={{textAlign:'left',position:'absolute',left:50}}>
    <h1 style={{color:'#FFFFFF',fontWeight:400}}>Subscribe to our<br/>
newsletter</h1>
<form style={{ '& > *': {
      
      width: 500,
     
    },}} noValidate autoComplete="off">
      <TextField id="standard-basic" label="Email address" style={{}}  />
      <button class="contact" ><img  src={arrow} style={{}} /></button>
    </form>
    <div class="copyright"><h5>COPYRIGHT © 2021 ALL RIGHTS RESERVED <span class="log">Tabaani</span></h5></div>
      <div style={{padding:5}}>
<h6 style={{color:'#FFAF20',fontWeight:400,position:'absolute',left:550,top:-20,fontSize:17}}>Contact</h6>
            <ul style={{position:'absolute',top:30,left:500,listStyleType:'none',fontWeight:400,color:'#FFFFFF'}}>
              <div style={{display:'block',fontWeight:400}}>
             <li > <a href='#' style={{color:'white',textDecoration:'none',lineHeight:2}}>contact@tabaani.co</a></li>
             <li> <a href='#' style={{color:'white',textDecoration:'none',lineHeight:2}}>support@tabaani.co</a></li>
             <li> <a href='#' style={{color:'white',textDecoration:'none',lineHeight:2}}>+216 93 649 679 </a></li>
              </div>
            </ul>
            </div>
            
</div>
  
  <div style={{textAlign:'left'}}>
<h6 style={{color:'#FFAF20',fontWeight:400,position:'absolute',left:840,top:166,fontSize:17}}>About</h6>
            <ul style={{position:'absolute',top:215,left:800,listStyleType:'none',fontWeight:400,color:'#FFFFFF'}}>
              <div style={{display:'block',fontWeight:400}}>
             <li > <a href='#' style={{color:'white',textDecoration:'none',lineHeight:2}}>What is Tabaani</a></li>
             <li> <a href='#' style={{color:'white',textDecoration:'none',lineHeight:2}}>Blogs</a></li>
             <li> <a href='#' style={{color:'white',textDecoration:'none',lineHeight:2}}>Team </a></li>
             <li> <a href='#' style={{color:'white',textDecoration:'none',lineHeight:2}}>Community </a></li>
              </div>
            </ul>
            </div>
            <div style={{textAlign:'left'}}>
<h6 style={{color:'#FFAF20',fontWeight:400,position:'absolute',left:1050,top:166,fontSize:17}}>Support</h6>
            <ul style={{position:'absolute',top:215,left:1010,listStyleType:'none',fontWeight:400,color:'#FFFFFF'}}>
              <div style={{display:'block',fontWeight:400}}>
             <li > <a href='#' style={{color:'white',textDecoration:'none',lineHeight:2}}>Help Center</a></li>
             <li> <a href='#' style={{color:'white',textDecoration:'none',lineHeight:2}}>Term and conditions</a></li>
             <li> <a href='#' style={{color:'white',textDecoration:'none',lineHeight:2}}>Privacy Policy </a></li>
             
              </div>
            </ul>
            </div>
            
</div>
  


    

    </div>
  );
}

export default App;
