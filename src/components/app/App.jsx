import React from "react";
import Header from "../header/Header";
import ItemList from "../item-list/ItemList";
import RandomPlanet from "../random-planet/RandomPlanet";
import PersonDetails from "../person-details/PersonDetails";
import Grid from "@material-ui/core/Grid";

import Container from "@material-ui/core/Container";


const App = () => {



    return(
        <React.Fragment>
            <Container>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Header/>
                    </Grid>
                    <Grid item xs={12}>
                        <RandomPlanet/>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <ItemList/>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <PersonDetails/>
                    </Grid>
                </Grid>





            </Container>
        </React.Fragment>
    );
}

export default App;