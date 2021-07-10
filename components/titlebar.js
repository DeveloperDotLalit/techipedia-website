import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Image from 'next/image'
import { Card } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    container: {
      padding: theme.spacing(0, 1),
      marginLeft: 'auto',
      marginRight: 'auto',
     
    },
    MainTitle: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '0',
        margin: '0',
    },
    card: {
      width: "100%",
      height: "100%",
      padding: theme.spacing(1),
      background: 'white',
    },
  }));

const titleBar = () => {
    const classes = useStyles();

    return(
        // <center>
        //     <h1>This is going to be our Title Bar Bro!!</h1>
        // </center>
        <Card elevation={12} className={classes.card}>
        <Grid container className={classes.container} elevation={12}>
                <Grid item sm={3} className={classes.logo}>
                    <Image src="/assets/logo.svg" width={81} height={81}/>
                </Grid>
                <Grid item sm={6} className={classes.MainTitle}>
                    <div><center><h1>Techipedia!!</h1></center></div>
                </Grid>
                <Grid item sm={3}>
                    <center><h2>Social Links!!</h2></center>
                </Grid>
        </Grid>
            </Card>
    )
}
export default titleBar;