import { makeStyles, Paper, Typography } from "@material-ui/core"
import ListGallery from "./ListGallery"
const Presentation = () => {
        const classes = useStyles()

    return (
        <Paper variant="outlined" square elevation={0} className={classes.Presentation}>
          <Typography variant="h5">
            Our packege includes
          </Typography>
          <ListGallery/>
        </Paper>
        
        
    )
    
        
    
}

export default Presentation;



const useStyles = makeStyles((theme) => ({
  Presentation: {
    width:"inherit",
    height:"auto",
    padding:theme.spacing(2),
  },
}));
