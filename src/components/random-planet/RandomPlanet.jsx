import React from "react";
import './random-planet.css';
import Grid from "@material-ui/core/Grid";
import StarWarsApi from '../../api/swapi';
import Spinner from "../spinner/Spinner";

export default class RandomPlanet extends React.Component{

    api = new StarWarsApi();

    state = {
        id: null,
        name: null,
        population: null,
        rotation: null,
        diameter: null,
        loading: true

    }

    constructor() {
        super();
        this.updatePlanet();
    }

    updatePlanet() {
        const id = Math.floor(Math.random()*19 + 2);
        this.api.getPlanet(id).then((planet) => {
            this.setState({
                id,
                name: planet.name,
                population: planet.population,
                rotation: planet.rotation_period,
                diameter: planet.diameter,
                loading: false
            })
        });
    }

    render() {
        const { id, name, population, rotation, diameter, loading } = this.state;
        const urlImg = `https://starwars-visualguide.com/assets/img/planets/${id}.jpg`;

        if (loading) {
            return (
                <div className="random-planet">
                    <Spinner/>
                </div>
                );
        }
        return (
            <div className="random-planet">
                <Grid container spacing={3}>
                    <Grid item xs={12} md={3} >
                        <img
                            src={urlImg}
                            alt=""/>
                    </Grid>
                    <Grid item xs={12} md={9}>
                        <div className="random-planet-text">
                            <h2>{name}</h2>
                            <div>
                                <span>Население: </span>{population}
                            </div>
                            <div>
                                <span>Период вращения: </span>{rotation}
                            </div>
                            <div>
                                <span>Диаметр: </span>{diameter}
                            </div>
                        </div>
                    </Grid>
                </Grid>


            </div>
        );
    }

}
