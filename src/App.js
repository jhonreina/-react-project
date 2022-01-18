import Banner from "./componets/Banner";
import Explanation from "./componets/Explanation";
import Footer from "./componets/Footer";
import Layout from "./componets/Layout";
import Presentation from "./componets/Presentation";
import {ThemeProvider, createMuiTheme} from "@material-ui/core"


function App(){
  const theme = createMuiTheme({
    breakpoints:{
      values:{
        xxs:320,
        xs:480,
        sm:640,
        md:768,
        lg:1024,
        xl:1220,
        xxl:1366,
        xxxl:1620,
      }
    }
  })  
    return (
      <ThemeProvider theme={theme}>
        <Layout>
          <Banner />
          <Explanation />
          <Presentation />
          <Footer />
        </Layout>
      </ThemeProvider>
    );
}

export default App;
