import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Featured from '../components/featuredItems'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  mainDiv: {
    width: '100%',
  },
});

export default function Home() {
  const classes = useStyles();

  return (
    <>
    <center className={classes.mainDiv}>
    <Featured/>
    <br/>
      <h1>Hello Techies! welcome to the techipedia</h1>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. At magni quidem eligendi voluptatum praesentium! Nesciunt, in quasi nulla placeat quas ipsum. Nulla consequatur minus repellendus commodi blanditiis eum eligendi autem quasi sit, nisi quisquam recusandae, maxime porro in obcaecati repellat expedita quos nemo doloremque non accusantium dicta possimus. Quibusdam odio amet ipsam nulla aperiam quas molestiae enim quaerat, aliquid omnis, deserunt quam incidunt aut itaque, error reprehenderit at quidem eveniet ex repellendus ad velit. Velit amet asperiores odio atque pariatur. Molestias, labore dolores. Iusto animi laudantium sapiente tenetur, voluptate quas optio autem, labore officia necessitatibus magnam ipsam in, veniam perspiciatis? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed dolore molestiae ducimus voluptatibus doloremque odit ullam non amet facere mollitia cupiditate impedit delectus consequatur repellendus, quisquam fuga voluptatum laudantium adipisci nesciunt quia rerum deserunt? Quasi, aliquid magnam! Id rerum eius iusto perferendis atque sint adipisci reiciendis architecto quia, accusantium ipsum nisi asperiores ea dolores qui consectetur et eaque facilis corrupti ut nihil facere reprehenderit consequuntur optio. Sequi debitis architecto nostrum labore quod! Quibusdam debitis explicabo aperiam, reiciendis nobis totam temporibus, laudantium aut dolor omnis, hic eum natus sequi accusantium? Aperiam dicta dolorum rem quos placeat? Voluptatem incidunt eligendi nobis, exercitationem ullam distinctio pariatur! Eius, enim molestiae harum nihil veritatis totam omnis quibusdam accusantium placeat vero voluptatibus doloremque alias accusamus praesentium officiis expedita quod ratione eum iste. Quae, natus vel culpa illo, ipsam similique quasi perspiciatis veritatis suscipit quis, dicta temporibus! Dignissimos aliquam quaerat omnis adipisci, consequatur iusto harum dolorem corrupti accusantium reiciendis et odio. Iusto natus odio ipsam maiores assumenda. Explicabo mollitia, dolorum nesciunt doloremque nostrum quia recusandae accusantium dolore? Molestias, aut consequatur. Quam vitae animi ipsa reiciendis numquam autem pariatur odio, ullam cupiditate, iure repudiandae perspiciatis aliquam nesciunt? Vel tenetur necessitatibus accusamus distinctio eveniet dicta. Dolores ea culpa nemo. Tempore nulla et expedita repudiandae doloribus, culpa fuga, animi magnam iure magni facilis. Cupiditate quidem maxime molestiae deleniti amet aliquid, rem minus accusantium id ducimus. Quia ab, voluptates iste at corporis distinctio suscipit accusamus voluptatum reiciendis esse minima eius. Esse vitae quia eum id accusamus alias non tenetur quos sint! Amet, facere. Deleniti dolores possimus dolorem sint ullam culpa beatae veritatis, repellat libero aut suscipit voluptates esse et, architecto recusandae ratione impedit voluptas. Tempore delectus unde rerum sit inventore vel nam veniam, nemo nesciunt aperiam in itaque porro reprehenderit totam iusto! Nesciunt, maiores necessitatibus expedita eligendi officia error incidunt voluptatem hic repudiandae repellendus dolore eos ex tempore doloribus iusto distinctio natus quidem reprehenderit? Quaerat eligendi, adipisci sunt cumque laudantium voluptate rerum architecto molestiae dolor cupiditate, minus veniam, at illo distinctio vel sapiente modi sit labore perferendis! Eum distinctio in, voluptas illum inventore, animi doloribus molestias eveniet facere quasi pariatur odio doloremque praesentium? Vel quidem ullam praesentium itaque id. Ipsa, perferendis! Vel, nisi placeat eius laborum velit commodi minima officia aliquid ad nobis perferendis doloribus eum, sunt totam ipsa at molestias, beatae veniam omnis exercitationem asperiores sed iusto consequatur distinctio. Necessitatibus debitis deserunt, voluptatibus asperiores reiciendis officia in beatae assumenda impedit?</p>
      <br/>
    <Grid container spacing={3}>
        <Grid item xs={3}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="140"
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqnLLI_ij0XhkNqt1q94EvFRd7OU1bYfqJcA&usqp=CAU"
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Mobiles
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Info about all kind of mobiles. Check out the recommonded new tech mobiles here.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Dive in
              </Button>
              {/* <Button size="small" color="primary">
                Learn More
              </Button> */}
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="140"
                image="data:image/jpeg;base64,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"
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Laptops
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  All kinds of laptops and latest technology. Pick the one which satisfy your need. pick the right one.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Dive in
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="140"
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcL4m_68vdIO0kJBGjpyjrLk1p2icYe_6fgQ&usqp=CAU"
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Speakers
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Get the best out of best. See all the specifications here. Check out the latest editions. pick the right one.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Dive in
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={3}>
        <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image="data:image/jpeg;base64,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"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Earphones
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            All the information about the Headphones and earphones will be available here. pick the right one.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Check Out
        </Button>
      </CardActions>
    </Card>
        </Grid>
    </Grid>
    </center>
    </>
  )
}
