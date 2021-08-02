import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';

const products = [
  { name: 'Product 1', desc: 'A nice thing', price: '$9.99' },
  { name: 'Product 2', desc: 'Another thing', price: '$3.45' },
  { name: 'Product 3', desc: 'Something else', price: '$6.51' },
  { name: 'Product 4', desc: 'Best thing of all', price: '$14.11' },
  { name: 'Shipping', desc: '', price: 'Free' },
];
const addresses = ['1 Material-UI Drive', 'Reactville', 'Anytown', '99999', 'USA'];

const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
  },
}));


export default function Review({userInfo, setUserInfo, cartItems}) {
  

// alert(userInfo.cardNumber)
  const payments = [
    // { name: 'Card type', detail: 'Visa' },
    { name: 'Card holder', detail: userInfo.cardname },
    { name:"Card Number", detail: 'xxxx-xxxx-xxxx-'+
      (()=>{
        if (userInfo.cardNumber === undefined || userInfo.cardNumber.length < 8) {
          return "????"
         }
         else {
           return userInfo.cardNumber.slice(8)
         }
      })()
    },
    { name: 'Expiry date', detail: userInfo.expDate },
  ];
  const classes = useStyles();
  // Object.keys(cartItems).map((itemId) => (
  //   alert(cartItems[itemId])
  // ))
  // alert(JSON.stringify(cartItems["60ec16388ea9c10f4882100f"]))

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {Object.keys(cartItems).map((itemId) => (
          <ListItem className={classes.listItem} key={cartItems[itemId].itemName}>
            <ListItemText primary={cartItems[itemId].itemName + " (" + cartItems[itemId].itemQty +" * ₹"+cartItems[itemId].itemPrice+")"} secondary={cartItems[itemId].itemDesc.slice(0,60)+"..."} />
            {/* <Typography variant="body2">{"(" + cartItems[itemId].itemQty}</Typography>
            <Typography variant="body2">{" * ₹ " + cartItems[itemId].itemPrice }</Typography> */}
            <Typography variant="body2">{"₹" + cartItems[itemId].itemPrice * cartItems[itemId].itemQty}</Typography>
          </ListItem>
        ))}
        <ListItem className={classes.listItem}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" className={classes.total}>
            {
              (()=>{
                let totalPrice = 0;
                Object.keys(cartItems).map((itemId) => (
                  totalPrice += cartItems[itemId].itemPrice * cartItems[itemId].itemQty)
                )
                return "₹ " + totalPrice;
              })()
            }
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Shipping
          </Typography>
          <Typography gutterBottom>{userInfo.firstname + " " + userInfo.lastname}</Typography>
          <Typography gutterBottom>{[userInfo.address1, userInfo.address2].join(', ')}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Payment details
          </Typography>
          <Grid container>
            {payments.map((payment) => (
              <React.Fragment key={payment.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}