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
//import Link from '@material-ui/core/Link';
import { fade } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { useCallback, useState } from "react";
import { PropTypes, Component } from "react";
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

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
export const StoreCards = function({ props }) {
  const classes = useStyles();

  const storeCards = props.stores.map((card) => (
    <Grid item key={card.itemID} xs={12} sm={6} md={4}>
      <Card className={classes.card} onClick={() => {
              props.callback(card._id);
            }} style={{cursor:"pointer"}}>
        <CardMedia
          className={classes.cardMedia}
          image="https://source.unsplash.com/random"
          title="Image title"
        />
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
            {card.storeName}
          </Typography>
          <Typography>{card.phone}</Typography>
          <Typography>{card.pin}</Typography>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            color="primary"
            onClick={() => {
              props.callback(card._id);
            }}
          >
            View
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
