import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import {useHistory } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    // display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));


export default function Header({searchBar = false, threeLines = false, searchButtonHandler = ()=>{}}) {
  const history = useHistory();
  
  const classes = useStyles();
  const onChange = (event) => {
    searchButtonHandler(event.target.value);
    // alert(event.target.value);
  };
  
  let searchSection, threeLinesButton;
  if (searchBar === true) {
    searchSection = 
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <InputBase
          placeholder="Search…"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          onChange={onChange}
          inputProps={{ 'aria-label': 'search' }}
        />
      </div>
  }
  else{
    searchSection = <></>
  }


  if (threeLines) {
    threeLinesButton = 
      <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="open drawer"
        >
          <MenuIcon />
        </IconButton>
  }
  else
    threeLinesButton = <></>

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          {threeLinesButton}
          <img src={process.env.PUBLIC_URL + '/logo192.png'} alt="icon" style={{width:"9vh", cursor:"pointer"}} onClick={()=>{history.push("/");}}/>
          <Typography className={classes.title} variant="h6" noWrap onClick={()=>{history.push("/");}} style={{cursor:"pointer"}}>
            Banti Bhaiya Shop
          </Typography>
          {searchSection}
        </Toolbar>
      </AppBar>
    </div>
  );
}
