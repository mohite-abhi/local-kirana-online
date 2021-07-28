import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { ButtonGroup } from "@material-ui/core";
import { Add, Remove } from "@material-ui/icons";
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


const syncCartWithLocalStorage = (reloadCartItems) =>{
  let ourCart = {}
  Object.entries(localStorage).map((item)=>{
    if (item[0].length === 24){
      ourCart[item[0]] = JSON.parse(item[1]);
    }
  })
  reloadCartItems(ourCart);
}


const onItemAdd = (item, reloadCartItems) => {
  const newObj = {
    itemPrice: item.itemPrice,
    itemName: item.itemName,
    itemDesc: item.itemDesc,
    itemQty: localStorage.getItem(item._id)
      ? JSON.parse(localStorage.getItem(item._id)).itemQty + 1
      : 1,
  };
  localStorage.setItem(item._id, JSON.stringify(newObj));
  syncCartWithLocalStorage(reloadCartItems);
};

const onItemRemove = (item, reloadCartItems) => {
  if (localStorage.getItem(item._id)) {
    // alert(JSON.stringify(item))
    if (JSON.parse(localStorage.getItem(item._id)).itemQty === 1)
      localStorage.removeItem(item._id);
    else {
      const newObj = {
        itemPrice: item.itemPrice,
        itemName: item.itemName,
        itemDesc: item.itemDesc,
        itemQty: JSON.parse(localStorage.getItem(item._id)).itemQty - 1,
      };
      localStorage.setItem(item._id, JSON.stringify(newObj));
    }
  }
  syncCartWithLocalStorage(reloadCartItems);
};


function initializeItemQuantities(id){
  if (localStorage.getItem(id)){
    return JSON.parse(localStorage.getItem(id)).itemQty;
    } 
  else{
    return 0
  } 
}

export const ItemsInner = ({ items, cartItems, reloadCartItems}) => {
  // alert(JSON.stringify(cartItems["60ec16388ea9c10f4882100f"].itemQty));
  const [itemQuantity, setItemQuatinty] = useState({});
  console.log(itemQuantity);

  const classes = useStyles();
  const storeCards = items.map((item) => {
    return (
      <Grid item key={item._id} xs={19} sm={6} md={4}>
        <Card className={classes.card} >
          <CardMedia
            className={classes.cardMedia}
            image="https://source.unsplash.com/random"
            title="Image title"
          />
          <CardContent className={classes.cardContent}>
            <Typography gutterBottom variant="h5" component="h2">
              {item.itemName}
            </Typography>
            <Typography>₹ {item.itemPrice}</Typography>
            <Typography>{item.itemDesc}</Typography>
          </CardContent>
          <CardActions>
            <ButtonGroup
              color="primary"
              aria-label="outlined primary button group"
            >
              <Button
                onClick={() => {
                  onItemRemove(item, reloadCartItems);
                }}
              >
                <Remove />
              </Button>
              <Button disabled>{initializeItemQuantities(item._id)}</Button>
              <Button
                onClick={() => {
                  onItemAdd(item, reloadCartItems);
                }}
              >
                <Add />
              </Button>
            </ButtonGroup>
          </CardActions>
        </Card>
      </Grid>
    );
  });
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
};
