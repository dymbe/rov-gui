import React, {Component} from 'react';
import './SearchZoneTab.css';
import {Grid} from 'semantic-ui-react';
import ValueInput from './ValueInput';

class SearchZoneTab extends Component {
    constructor(props) {
        super(props);
        this.state = {
            takeoffHeading: null,
            speedOnAscent: null,
            ascentRate: null,
            engineFailureTime: null,
            speedOnDescent: null,
            descentRate: null,
            windDirection: null,
            windEquation: null,
        }
    }

    onTakeoffHeadingChange = (event) => {
        this.setState({takeoffHeading: event.target.value});
    };

    onSpeedOnAscentChange = (event) => {
        this.setState({speedOnAscent: event.target.value});
    };

    onAscentRateChange = (event) => {
        this.setState({ascentRate: event.target.value});
    };

    onEngineFailureTimeChange = (event) => {
        this.setState({engineFailureTime: event.target.value});
    };

    onSpeedOnDescentChange = (event) => {
        this.setState({speedOnDescent: event.target.value});
    };

    onDescentRateChange = (event) => {
        this.setState({descentRate: event.target.value});
    };

    onWindDirectionChange = (event) => {
        this.setState({windDirection: event.target.value});
    };

    onWindEquationChange = (event) => {
        this.setState({windEquation: event.target.value});
    };

    render() {
        const {takeoffHeading} = this.state;
        return (
            <div id="search-zone">
                <div className="left">
                    <h2>Input</h2>
                    <ValueInput
                        label='Takeoff heading:'
                        unit='&#176;'
                        placeholder='e.g. 45, 254, 340, ...'
                        onChange={this.onTakeoffHeadingChange}
                    />
                    <ValueInput
                        label='Airspeed on ascent:'
                        unit='ms⁻¹'
                        placeholder='e.g. 60, 76, 101, ...'
                        onChange={this.onSpeedOnAscentChange}
                    />
                    <ValueInput
                        label='Ascent rate:'
                        unit='ms⁻¹'
                        placeholder='e.g. 3, 6, 10, ...'
                        onChange={this.onAscentRateChange}
                    />
                    <ValueInput
                        label='Time before engine failure:'
                        unit='s'
                        placeholder='e.g. 31, 45, 68, ...'
                        onChange={this.onEngineFailureTimeChange}
                    />
                    <ValueInput
                        label='Airspeed on descent:'
                        unit='ms⁻¹'
                        placeholder='e.g. 45, 67, 78, ...'
                        onChange={this.onSpeedOnDescentChange}
                    />
                    <ValueInput
                        label='Descent rate:'
                        unit='ms⁻¹'
                        placeholder='e.g. 3, 6, 11, ...'
                        onChange={this.onDescentRateChange}
                    />
                    <ValueInput
                        label='Wind direction:'
                        unit='&#176;'
                        placeholder='e.g. 45, 254, 340, ...'
                        onChange={this.onWindDirectionChange}
                    />
                    <ValueInput
                        label='Wind equation:'
                        unit='???'
                        placeholder='Yeah I dunno...'
                        onChange={this.onWindEquationChange}
                    />
                </div>
                <div className="right">
                    <h2>Output</h2>
                    <p>{takeoffHeading}</p>
                </div>
            </div>
        )
    }
}

export default SearchZoneTab;