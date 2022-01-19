import { makeStyles } from "@material-ui/core/styles";
import { List, ListSubheader, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import data from "../listData"

function ListComponet() {
    const classes = useStyles();

  return (
     <List component="nav" arial-laballedby="nested-list-subheader" subheader={
         <ListSubheader component='div' id='nested-list-subheader'>
             Cost based on a group of 30px, accomadated in twin rooms
         </ListSubheader>
     } >
         {
             data.map(item =>(
                 <ListItem key={item.text}>
                     <ListItemIcon  className={classes.icon} style={{margin: "0 2rem"}}>
                         {item.icon}
                     </ListItemIcon>
                     <ListItemText primary={item.text}>    
                     </ListItemText>
                 </ListItem>
             ))
         }
         
     </List>

  )
 
}

export default ListComponet;


const useStyles = makeStyles((theme) => ({
  icon: {
    color:"#ea5933"
    
  },
}));