import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Home';
import AxiosDataFetching from './AxiosDataFetching';
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: 10,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
  }
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <Router>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={2}>
            <Paper className={classes.paper}>
              <nav>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  <li>
                    <Link to="/users">Users</Link>
                  </li>
                  <li>
                    <Link to="/axios">Axios Data Fetching</Link>
                  </li>
                </ul>
              </nav>
            </Paper>
          </Grid>
          <Grid item xs={10}>
            <Paper className={classes.paper}>
              <Switch>
                <Route path="/about">
                  <About />
                </Route>
                <Route path="/users">
                  <Users />
                </Route>

                <Route path="/axios">
                  <AxiosDataFetching />
                </Route>


                <Route path="/">
                  <Home>
                    <p>Default slot</p>
                    <div>
                      <Home.Header extensionProp={<Extension />}>Some header text in a slot</Home.Header>
                      <Home.Body>Custom body in a slot</Home.Body>
                    </div>
                  </Home>
                </Route>


              </Switch>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </Router>
  );
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

function Extension() {
  return <h2>Extension</h2>
}