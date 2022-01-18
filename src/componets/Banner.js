import { makeStyles, Paper, Typography } from "@material-ui/core";
import city from "../imagenes/Bogotá.jpg";
import logo from "../imagenes/logo.png";
import StarsIcon from "@material-ui/icons/Stars";

const Banner = () => {
  const classes = useStyles();

  return (
    <>
      <Paper variant="outlined" square elevation={0} className={classes.banner}>
        <div className={classes.titleContainer}>
          <Typography variant="h4" component="h1" className={classes.title}>
            Reset your Events in{" "}
            <span style={{ color: "#ea5933" }}>BOGOTA D.C</span>
          </Typography>
          <img src={logo} alt="logo" className={classes.logo} />
        </div>
        <div className={classes.subTitleContainer}>
          <Typography className={classes.subTitle} variant="h6">
            Organize your meeting in a ...
            <br></br>
            100% certified eco-resort
            <StarsIcon className={classes.icon} fontSize="small" />
            best-in-class-speed-connection
            <StarsIcon className={classes.icon} fontSize="small" />
            sorrounded by nature
            <StarsIcon className={classes.icon} fontSize="small" />
            20-mins fron Bogotá
          </Typography>
        </div>
      </Paper>
    </>
  );
};

export default Banner;

const useStyles = makeStyles((theme) => ({
  banner: {
    width: "inherit",
    height: "100vh",
    backgroundImage: `url(${city})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    color: "#fff",
    fontWeight: "bold",
    position: "relative",
  },
  titleContainer: {
    background: "#000",
    opacity: 0.8,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
  },
  logo: {
    width: "10rem",
    height: "auto",
    padding: theme.spacing(3),
  },
  title: {
    padding: theme.spacing(2),
  },
  subTitleContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    background: "#000",
    opacity: 0.9,
  },
  subTitle: {
    color: "#ea5933",
    fontWeight: "bold",
    padding: theme.spacing(3),
    height: "auto",
    textAlign: "center",
  },
  icon: {
    verticalAlign: "middle",
    margin: theme.spacing(0, 1),
  },

  [theme.breakpoints.down("sm")]: {
    title: {
      fontSize: "1.5rem",
    },
    logo:{
      width:"7rem",
    },
    subTitle: {
      fontSize:"1rem",
    },

    },

  [theme.breakpoints.down("xs")]: {
    title: {
      fontSize: "1rem",
    },
    logo:{
      width:"5rem",
    },
    subTitle: {
      display:"none",
    },

  } 
  
}))
