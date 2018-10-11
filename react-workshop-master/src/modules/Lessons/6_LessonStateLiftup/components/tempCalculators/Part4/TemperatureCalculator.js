import React, { Component } from 'react';

import TempInput from './TempInput';

class TemperatureCalculator extends Component {
    constructor(props) {
        super(props);

        this.state = {
            temperature: '',
        };
    }



    render() {
        const { temperature } = this.state;

        return (
            <section className="lesson-calculator info-panel">
                <h2>Temperature Calculator</h2>

                <div className="form-holder">
                   <TempInput
                    unit={'oC'}
                   />
                    <TempInput
                        unit={'oF'}
                    />
                </div>


            </section>
        );
    }
}

export default TemperatureCalculator;