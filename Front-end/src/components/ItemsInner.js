import React from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },

  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export const ItemsInner = ({ items }) => {
  const classes = useStyles();
  
//   return (
//     <div className="container" key={items.sno}>
//       <h3 className=" my-3">items List</h3>

//       {items.map((item) => {
//         return (
//           <div key={item._id}>
//             <h4>{item.itemName}</h4>
//             <p>{item.itemDesc}</p>
//           </div>
//         );
//       })}
//     </div>
//   );
// };
const storeCards = items.map((item) => (
  <Grid item key={item._id} xs={12} sm={6} md={4}>
    <Card className={classes.card}>
      <CardMedia
        className={classes.cardMedia}
        image="https://source.unsplash.com/random"
        title="Image title"
      />
      <CardContent className={classes.cardContent}>
        <Typography gutterBottom variant="h5" component="h2">
          {item.itemName}
        </Typography>
        <Typography>PRICE -{item.itemPrice} Rs</Typography>
        <Typography>{item.itemDesc}</Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          color="primary"
          // onClick={() => {
          //   props.callback(card._id);
          // }}
        >
          Add to cart
        </Button>
        {/* <Button size="small" color="primary">
          Edit
        </Button> */}
      </CardActions>
    </Card>
  </Grid>
));
return (
  <React.Fragment>
    <CssBaseline />
    <main>
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
          {storeCards}
        </Grid>
      </Container>
    </main>
  </React.Fragment>
);
}