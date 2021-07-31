import React, { useState} from 'react';
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

export default function PaymentForm({userInfo, setUserInfo}) {
  const onChange = (event, fieldType) => {
    setLock(true);
    let temp = event.target.value;
    let oldUserInfo = userInfo;
    oldUserInfo[fieldType] = temp;
    // alert(temp)
    setUserInfo(oldUserInfo);
    // setLock(false);
    // alert(JSON.stringify(userInfo));
  };


  let [lock, setLock] = useState(false);

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Payment method
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardName"
            label="Name on card"
            // value={historyValue("cardname")}
            fullWidth
            autoComplete="cc-name"
            value={(()=>{ if (lock === false) return userInfo["cardname"]; else return null})()}
            onChange={(event)=>{onChange(event, "cardname")}}
            InputLabelProps={{ shrink: true }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardNumber"
            type="number"
            label="Card number"
            fullWidth
            autoComplete="cc-number"
            InputLabelProps={{ shrink: true }}
            value={(()=>{ if (lock === false) return userInfo["cardNumber"];else return null})()}
            onChange={(event)=>{onChange(event, "cardNumber")}}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="expDate"
            type="date"
            label="expiry date"
            fullWidth
            InputLabelProps={{ shrink: true }}
            autoComplete="cc-exp"
            onChange={(event)=>{onChange(event, "expDate")}}
            value={(()=>{ if (lock === false) return userInfo["expDate"]; else return null})()}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cvv"
            InputLabelProps={{ shrink: true }}
            label="CVV"
            helperText="Last three digits on signature strip"
            fullWidth
            type="number"
            InputProps={{ inputProps: { min: 0, max: 10 } }}
            autoComplete="cc-csc"
            onChange={(event)=>{onChange(event, "cvv")}}
            value={(()=>{ if (lock === false) return userInfo["cvv"]; else return null})()}
          />
        </Grid>
        {/* <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveCard" value="yes" />}
            label="Remember credit card details for next time"
          />
        </Grid> */}
      </Grid>
    </React.Fragment>
  );
}
