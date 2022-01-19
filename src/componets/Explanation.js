import {
  Button,
  Divider,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import EmailIcon from "@material-ui/icons/Email";

const Emoji = (props) => (
  <span
    role="img"
    aria-label={props.label ? props.label : ""}
    aria-hidden={props.label ? "false" : "true"}
  >
    {props.symbol}
  </span>
);

const Explanation = () => {
  const classes = useStyles();
  return (
    <Paper
      variant="outlined"
      elevation="0"
      square
      className={classes.explanation}
    >
      <Typography variant="subtitle1" paragraph gutterBottom>
        Los <strong>primeros </strong> pobladores de Bogotá
        <Emoji symbol="✌️" label="victory" />
        fueron los Muiscas, pertenecientes a la familia lingüística Chibcha. A
        la llegada de los conquistadores, se calcula que había medio millón de
        indígenas
        <Emoji symbol="😃" label="alegre" />
        de este grupo.
      </Typography>
      <Divider />
      <Typography variant="subtitle1" paragraph gutterBottom style={{ marginTop: "1rem" }}>
        Fundación de Bogotá Con la consigna de los conquistadores de fundar y
        poblar, Quesada resolvió crear un asentamiento urbano donde pudieran
        vivir en forma ordenada bajo un gobierno estable. Hacia el oriente, al
        pie de los cerros, hallaron un poblado de indios llamado Teusaquillo
        cerca de la residencia de recreo del Zipa, provisto de agua, leña,
        tierras para sembrar y resguardado de los vientos por los cerros de
        Monserrate y Guadalupe. Aunque no existe acta de fundación de la ciudad,
        se ha aceptado como fecha de fundación el 6 de agosto de 1538. Según la
        tradición, aquel día el sacerdote fray Domingo de las Casas ofició la
        primera misa en una iglesia pajiza, levantada cerca de la actual
        catedral o del actual Parque de Santander. Se dice que ese día la región
        recibió el nombre de Nuevo Reino de Granada y el poblado se llamó Santa
        Fe.
        <Emoji symbol="🌲" label="arbol" />
      </Typography>
      <Typography
        variant="subtitle1"
        paragraph
        gutterBottom
        style={{ margin: "1rem 3rem" }}
      >
        <Emoji symbol="👉" label="señal" />
        <strong>La Expedición Botánica  </strong>
         el aporte más importante de esta época al conocimiento científico de la
        naturaleza americana está constituido por la Expedición Botánica, cuyo
        objetivo fue el estudio de la flora nativa. Inició por orden del
        arzobispo-virrey Caballero y Góngora bajo la dirección de José Celestino
        Mutis y con el aporte de científicos como Francisco José de Caldas,
        Jorge Tadeo Lozano y Francisco Antonio Zea. Tuvo su sede en Mariquita y
        en 1791 se trasladó a Santa Fe,
        <Emoji symbol="📱" label="arbol" />
        donde perduró hasta 1816.
      </Typography>
      <Typography
        Typography
        variant="subtitle1"
        paragraph
        gutterBottom
        style={{ margin: "1rem 3rem" }}
      >
        <Emoji symbol="👉" label="señal" />
        <strong>La Religión </strong>después de haber dominado a los indígenas a
        través de la guerra, comenzó la conquista de las conciencias por la
        religión con ayuda de las órdenes religiosas que se establecieron desde
        el siglo XVI en todo el territorio de la actual Colombia. Se
        construyeron iglesias y conventos a cargo de las comunidades
        <Emoji symbol="🤗" label="arbol" />
        franciscana, dominica, agustina y más tarde, en 1604, de los jesuitas,
        los capuchinos y las monjas Clarisas, Dominicas y Carmelitas Descalzas.
      </Typography>
      <Typography Typography variant="subtitle1" paragraph gutterBottom>
        La Sabana de Bogotá se ha convertido en un centro productor de flores
        que se exportan a muchos países, generan divisas y son una fuente de
        trabajo que absorbe una cantidad inmensa de mano de obra. La economía
        informal y la microempresa dan ocupación a un amplio sector de la
        población en diversas actividades.
      </Typography>
      <div className={classes.action}>
        <Button
          variant="contained"
          startIcon={<EmailIcon />}
          style={{ margin: "2rem 0", backgroundColor: "#ea5933" }}
        >
          <a className={classes.link} href="mailto:jonathang2812@gmail.com">
            Send me an email
            <span className={classes.extendText}> to learn more ...</span>
          </a>
        </Button>
        <br></br>
        <Typography variant="h6">
          Or get in touch at jonathang2812@gmail-events.com
        </Typography>
      </div>
    </Paper>
  );
};

export default Explanation;

const useStyles = makeStyles((theme) => ({
  explanation: {
    width: "inherit",
    height: "auto",
    padding: theme.spacing(2),
    textAlign:"justify",
    
  },
  action: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    "& button:hover": {
      backgroundColor: "#ccc !important",
    },
  },
  link: {
    textDecoration: "none",
    color: "#fff",
    fontSize: "1rem",
    fontWeight: "bold",
    fontStyle: "italic",
  },

  [theme.breakpoints.down("md")]: {
    extendText: {
      display: "none",
    },
  },
}));
