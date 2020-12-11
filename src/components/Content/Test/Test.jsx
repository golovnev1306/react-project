import React from 'react';

export default class Test extends React.Component{
    constructor(props) {
        super(props);
        this.state = {time: (new Date()).toLocaleTimeString()};
    }

    componentDidMount() {
        this.timerId = setInterval(this.tick, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    render = () => {
        return (
            <div>Now time is {this.state.time}</div>
            )
    }

    tick = () => {
        this.setState({time: (new Date()).toLocaleTimeString()});
    }
}