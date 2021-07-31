import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

export default function AddressForm({ userInfo, setUserInfo }) {
  let [lock, setLock] = useState(false);

  const onChange = (event, fieldType) => {
    setLock(true);
    let oldUserInfo = userInfo;
    oldUserInfo[fieldType] = event.target.value;
    setUserInfo(oldUserInfo);
    // alert(JSON.stringify(userInfo));
  };
  return (
    <React.Fragment>
      <form>
        <Typography variant="h6" gutterBottom>
          Shipping address
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              type="text"
              id="firstName"
              name="firstName"
              label="First name"
              fullWidth
              autoComplete="given-name"
              InputLabelProps={{ shrink: true }}
              onChange={(event) => {
                onChange(event, "firstname");
              }}
              value={(() => {
                if (lock === false) return userInfo["firstname"];
                else return null;
              })()}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              type="text"
              id="lastName"
              name="lastName"
              label="Last name"
              fullWidth
              autoComplete="family-name"
              InputLabelProps={{ shrink: true }}
              onChange={(event) => {
                onChange(event, "lastname");
              }}
              value={(() => {
                if (lock === false) return userInfo["lastname"];
                else return null;
              })()}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              type="number"
              id="phone"
              name="phone"
              label="Phone"
              fullWidth
              autoComplete="92840.."
              InputLabelProps={{ shrink: true }}
              onChange={(event) => {
                onChange(event, "phone");
              }}
              value={(() => {
                if (lock === false) return userInfo["phone"];
                else return null;
              })()}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              type="text"
              id="address1"
              name="address1"
              label="Address line 1"
              fullWidth
              autoComplete="shipping address-line1"
              InputLabelProps={{ shrink: true }}
              onChange={(event) => {
                onChange(event, "address1");
              }}
              value={(() => {
                if (lock === false) return userInfo["address1"];
                else return null;
              })()}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="address2"
              name="address2"
              label="Address line 2"
              fullWidth
              autoComplete="shipping address-line2"
              InputLabelProps={{ shrink: true }}
              onChange={(event) => {
                onChange(event, "address2");
              }}
              value={(() => {
                if (lock === false) return userInfo["address2"];
                else return null;
              })()}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="city"
              name="city"
              label="City"
              fullWidth
              autoComplete="shipping address-level2"
              InputLabelProps={{ shrink: true }}
              onChange={(event) => {
                onChange(event, "city");
              }}
              value={(() => {
                if (lock === false) return userInfo["city"];
                else return null;
              })()}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="state"
              name="state"
              autoComplete="state name"
              label="State/Province/Region"
              fullWidth
              InputLabelProps={{ shrink: true }}
              onChange={(event) => {
                onChange(event, "state");
              }}
              value={(() => {
                if (lock === false) return userInfo["city"];
                else return null;
              })()}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              type="number"
              id="zip"
              name="zip"
              label="Zip / Postal code"
              fullWidth
              autoComplete="shipping postal-code"
              InputLabelProps={{ shrink: true }}
              onChange={(event) => {
                onChange(event, "zip");
              }}
              value={(() => {
                if (lock === false) return userInfo["zip"];
                else return null;
              })()}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="country"
              name="country"
              label="Country"
              fullWidth
              autoComplete="shipping country"
              InputLabelProps={{ shrink: true }}
              onChange={(event) => {
                onChange(event, "country");
              }}
              value={(() => {
                if (lock === false) return userInfo["country"];
                else return null;
              })()}
            />
          </Grid>
          {/* <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Use this address for payment details"
          />
        </Grid> */}
        </Grid>
      </form>
    </React.Fragment>
  );
}
