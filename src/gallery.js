import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import first from './first.jpg'
import second from './second.jpg'
import third from './third.jpg'
import fourth from './fourth.jpg'
import fifth from './fifth.jpg'
const useStyles = makeStyles((theme) => ({
  root: {
    width:1290,
    height:727,
    borderRadius:25,
    [theme.breakpoints.down('md')]: {
      width:668,
      height:400
    },
  },
  
  
  first:{
      position:'relative',
      width:603,
      height:306,
      [theme.breakpoints.down('md')]: {
        width:312,
        height:126
      },
  },
  second: {
      position:'relative',
     left:20,
      width:603,
      height:306,
      [theme.breakpoints.down('md')]: {
        width:300,
        height:126
      },
  },
  third: {
      position:'relative',
      left:-10,
      width:370,
      height:233,
      top:25,
      [theme.breakpoints.down('md')]: {
        width:192,
        height:94
      },
  },
  fourth:{
      position:'relative',
      width:528,
      height:233,
      top:25,
      left:10,
      [theme.breakpoints.down('md')]: {
        width:192,
        height:94
      },
  },
  fifth: {
      position:'relative',
      width:288,
      height:233,
      left:27,
      top:25,
      [theme.breakpoints.down('md')]: {
        width:192,
        height:94
      },
  }
  
}));

   
    export default function RecipeReviewCard() {
      const classes = useStyles();
      const [expanded, setExpanded] = React.useState(false);
    
      const handleExpandClick = () => {
        setExpanded(!expanded);
      };
    
      return (
          <div style={{top:35,left:74,position:'relative',borderRadius:25}}>
        <Card className={classes.root}>
         <h1  style={{color:'#ffaf20',textAlign:'left',position:'relative',left:34,fontStyle:'italic'}}>My Gallerie</h1>
          <img src={first} className={classes.first} />
          <img src={second} className={classes.second}/>
          <img src={third} className={classes.third}/>
          <img src={fourth} className={classes.fourth}/>
          <img src={fifth} className={classes.fifth}/>
        </Card>
        </div>
      );
    }
    
  