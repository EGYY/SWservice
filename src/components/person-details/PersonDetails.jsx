import React from "react";
import Grid from "@material-ui/core/Grid";

import './person-details.css';

const PersonDetails = () => {
    return (
        <div className="person-details">
            <Grid container spacing={10}>
                <Grid item xs={12} md={4}>
                    <img
                        src="https://lh3.googleusercontent.com/proxy/74tGXLqGDQZuznfQ2buvgKaPoIUodCzcp0UPuNbAZPKngUYlJaG08WuCrcXDtiRQWcG5qw6fybSi9SUrlVIAUleqpf0kkTLh7hEFgqBqjayXCHzBhT65wVEfJEn2niyvRwmwb9km0zQEdYow3UkZnslWtIXwwDU4h2NPB_0Ch5lH8Gk8xz6UnDaOGQGJI9nH22P-7PGvQo-J0iZciPYF6dTkWnM9DH5UVclRdG3AUqYm2nupWWn8fJWUXHqrBH2ArsvxTdEOXk49ifTeBvz0KUNK3Hs-fxG83PM85HorjqyjP1-muZ_BT4ClXInOt7D-rTkmRV-8qqJVfT1HXH0zs9HvW9QDl2BsftBX"
                        alt=""/>
                </Grid>
                <Grid item xs={12} md={8}>
                    <div className="person-info">
                        <h2>Имя персонажа</h2>
                        <div>Описание</div>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}

export default PersonDetails;