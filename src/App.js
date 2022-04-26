
import './App.css';
import Header from "./components/Header/Header"
import List from "./components/List/List"
import Map from "./components/Map/Map"

import { CssBaseline, Grid } from "@material-ui/core"
function App() {
  return (
    < >
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{ width: "100%" }}>
        <Grid item xs={3} md={4}>
          <List />
        </Grid>
        <Grid item xs={3} md={4}>
          <Map />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
