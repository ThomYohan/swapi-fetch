import React from 'react';
import { Card, Grid } from 'semantic-ui-react';

export default function Vehicles({data}) {
    return (
        <>
        <h1>Vehicles</h1>
        <Grid columns={3}>
            {data.map((vehicles, i) => {
                return (
                    <Grid.Column key={i}>
                        <Card>
                            <Card.Content>
                                <Card.Header>{vehicles.name}</Card.Header>
                                <Card.Description>
                                    <strong>Model</strong>
                                    <p>{vehicles.model}</p>
                                    <strong>Cargo Capacity</strong>
                                    <p>{vehicles.cargo_capacity}</p>
                                    <strong>Consumables</strong>
                                    <p>{vehicles.consumables}</p>
                                    <strong>Cost</strong>
                                    <p>{vehicles.cost_in_credits}</p>
                                    <strong>Crew</strong>
                                    <p>{vehicles.crew}</p>
                                    <strong>length</strong>
                                    <p>{vehicles.length}</p>
                                    <strong>Manufacturer</strong>
                                    <p>{vehicles.manufacturer}</p>
                                    <strong>Max Atmosphering Speed</strong>
                                    <p>{vehicles.max_atmosphering_speed}</p>
                                </Card.Description>
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                )
            })}
        </Grid>
    </>
    )
}