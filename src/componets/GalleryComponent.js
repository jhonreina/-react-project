import {
  GridList,
  GridListTile,
  GridListTileBar,
  makeStyles,
  Paper,
} from "@material-ui/core";
import tileData from "../tileData";

function GalleryComponent() {
  const classes = useStyles();

  return (
    <Paper
      variant="outlined"
      square
      elevation={0}
      className={classes.galleryRoot}>
      <div className={classes.mosaic}>
        <GridList cellHeight={220} className={classes.gridList}>
          {tileData.map((tile) => (
            <GridListTile key={tile.title}>
              <img src={tile.img} alt={tile.title} />
              <GridListTileBar title={tile.title} />
            </GridListTile>
          ))}
        </GridList>
      </div>
    </Paper>
  );
}

export default GalleryComponent;

const useStyles = makeStyles((theme) => ({
  galleryRoot: {
    height: "auto",
  },
  mosaic:{
    display:"flex",
    flexWrap:"wrap",
    justifyContent:"space-around",

  },
  gridList:{
    width:1000,
    height:550,
    "&::-webkit-scrollbar": {
      display:"none",
    }
  }
}));
