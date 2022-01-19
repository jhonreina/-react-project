import { Container,Link, makeStyles, Typography } from "@material-ui/core";
import { Favorite } from "@material-ui/icons";

const Copyright = () =>{
  return (
      <Typography variant="body2" color="textSegundary">
        copyright ©
        <Link color="inherit" href="https://cuttingedge-event.com/"
        target="_blank" rel="noreferrer">cuttingedge-event.com</Link>
        {
          new Date().getFullYear()
        }
      </Typography>  
  ) 
    
};


const Footer = () => {
  const classes = useStyles()
  return (
 
     <footer className={classes.footer}>
       <Container maxWidth="sm">
         <Typography variant="body1">
            Curated with <Favorite style={{color:"red"}}/>
            by the <span><a href="htts://cuttingedge-events.com" target="_blank" rel="noreferrer">CUTT/events</a></span>
         </Typography>
         <Copyright/>
       </Container>       
     </footer>

  )
};

export default Footer;

const useStyles = makeStyles((theme) => ({
  footer: {
    padding:theme.spacing(3,2),
    marginTop:"auto",
    textAlign:"center",
  },
}));
