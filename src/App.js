import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import socketIOClient from 'socket.io-client';
const Configs = require('./Configs.js');
console.log(Configs)

class App extends Component {
    constructor() {
        super();
        this.state = {
            response: false,
            endpoint: 'http://127.0.0.1:4001'
        };
    }

    getRealtime(data) {
        console.log(data)
    }

    componentDidMount() {
        const { endpoint } = this.state;
        const socket = socketIOClient(endpoint);
        socket.on("FromAPI", data => this.setState({ response: data }));
        socket.emit('test', {'aaaaa': 'bbbbb'}, this.getRealtime);
        socket.on('FromTest', data => console.log(data));
    }

    render() {
        const { response } = this.state;
        return (
            <div style={{ textAlign: "center" }}>
                {response
                    ? <p>
                            The temperature in Florence is: {response.msg} °F
                        </p>
                    : <p>Loading...</p>}
            </div>
        );
    }
}
export default App;
