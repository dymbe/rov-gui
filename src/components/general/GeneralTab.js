import React from 'react';
import HealthCheck from './healthcheck/HealthCheck';
import {Grid} from 'semantic-ui-react'

class General extends React.Component {
    render() {
        return (
            <Grid id="general-tab" celled>
                <Grid.Row columns={2}>
                    <Grid.Column>
                        <p>HALLA</p>
                    </Grid.Column>
                    <Grid.Column>
                        <p>HALLA</p>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row columns={2}>
                    <Grid.Column>
                        <p>HALLA</p>
                    </Grid.Column>
                    <Grid.Column>
                        <HealthCheck ros={this.props.ros}/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }
}

export default General;