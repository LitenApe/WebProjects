import React, { Component } from 'react';
import './index.css';

function toTimeString(time) {
    const t = time;
    t.setUTCHours(-1);

    const hours = ('0' + t.getHours()).slice(-2);
    const minutes = ('0' + t.getMinutes()).slice(-2);
    const seconds = ('0' + t.getSeconds()).slice(-2);
    return `${hours}:${minutes}:${seconds}`;
}

export default class Timer extends Component {
    state = {
        startTime: new Date(),
        lapTime: new Date(),
        totalElapsed: '00:00:00',
        lapElapsed: '00:00:00',
        intervalID: 0,
        startText: 'start',
        stopText: 'clear',
    }

    componentDidMount = () => {
        document.addEventListener(
            'keyup',
            this.startAction,
            false
        );
    }

    startAction = (event) => {
        const { startText } = this.state;

        if (startText === 'start') {
            const intervalID = setInterval(
                () => this.tick(),
                100
            );

            this.setState({
                intervalID,
                startTime: new Date(),
                lapTime: new Date(),
                startText: 'lap',
                stopText: 'stop',
            });
        } else if (startText === 'lap') {
            this.props.lapHandler(
                this.state.totalElapsed, 
                this.state.lapElapsed
            );
            this.setState({
                lapTime: new Date(),
                lapElapsed: '00:00:00',
            });
        }
    }

    stopAction = (event) => {
        const { stopText } = this.state;

        if (stopText === 'clear') {
            this.props.clearHandler();
            this.setState({
                totalElapsed: '00:00:00',
                lapElapsed: '00:00:00'
            });
        } else if (stopText === 'stop') {
            clearInterval(this.state.intervalID)
            this.setState({
                startText: 'start',
                stopText: 'clear',
            });
        }
    }

    tick = (props) => {
        const current = new Date().getTime() / 1000;
        const start = this.state.startTime.getTime() / 1000;
        const lap = this.state.lapTime.getTime() / 1000;

        var totalElapsed = current - start;
        var lapElapsed = current - lap;

        totalElapsed = new Date(totalElapsed * 1000);
        lapElapsed = new Date(lapElapsed * 1000);

        this.setState({
            totalElapsed: toTimeString(totalElapsed),
            lapElapsed: toTimeString(lapElapsed),
        })
    }

    render() {
        const { totalElapsed, lapElapsed, startText, stopText } = this.state;

        return (
            <div className='timers'>
                <div className='timer'>
                    <h6 className='time-label'>total time:</h6>
                    <h6 className='time'>{ totalElapsed }</h6>
                </div>
                <div className='timer'>
                    <p className='time-label'>lap time:</p>
                    <h1 id='lap-time' className='time'>
                        { lapElapsed }
                    </h1>
                </div>
                <div className='btn-group'>
                    <button
                        id='start-btn'
                        className='btn'
                        onClick={this.startAction}
                    >
                        { startText }
                        <div className='btn-border'>
                        </div>
                    </button>
                    <button
                        id='stop-btn'
                        className='btn'
                        onClick={this.stopAction}
                    >
                        { stopText }
                        <div className='btn-border'>
                        </div>
                    </button>
                </div>
            </div>
        )
    }
}
