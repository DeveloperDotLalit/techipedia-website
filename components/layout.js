import { makeStyles } from "@material-ui/core/styles";
import { Card } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

import Navbar from "./navbar";
import Footer from "./footer";
import TitleBar from "./titlebar";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(0, 1),
    gap: '1',
  },
  mainContent: {
    height: "100%",
    padding: theme.spacing(2, 1),
    alignItems: 'center',
    justifyContent: 'center',
    background: 'white',
  },
  card: {
    width: "100%",
    height: "100%",
    padding: theme.spacing(1),
    borderRadius: theme.spacing(1.5),
  },
}));

const Layout = ({ children }) => {
  const classes = useStyles();

  return (
    <div>
      {/* <TitleBar/> */}
      <Navbar />
      <Grid container className={classes.container}>
        <Grid item>
          <div className={classes.mainContent}>
            <Card elevation={12} className={classes.card}>
              {children}
            </Card>
          </div>
        </Grid>
      </Grid>
      <Footer />
    </div>
  );
};

export default Layout;
