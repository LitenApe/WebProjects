import React, { Component } from 'react';

import './index.css';

export default class History extends Component {
    render() {
        const { laps } = this.props;

        return (
            <div className='history'>
                {laps.map((elem, i) => {
                    return <div key={'entry-' + i} className='entry'>
                        <p><span>nr.</span>{ ('0' + i).slice(-2) }</p>
                        <p><span>lap time</span>{ elem.lap }</p>
                        <p><span>total time</span>{ elem.total }</p>
                    </div>
                })}
            </div>
        )
    }
}
