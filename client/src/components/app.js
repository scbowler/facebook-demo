import 'materialize-css/dist/css/materialize.min.css';
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { get_user } from '../actions';

import Nav from './nav';
import Home from './home';
import ChatLobby from './chat-lobby';

class App extends Component {
    componentDidMount(){
        this.props.get_user();
    }

    render() {
        return (
        <div className="container">
            <Nav/>
            <Route exact path="/" component={Home}/>
            <Route path="/chat-lobby" component={ChatLobby}/>
        </div>
        )
    }

}

export default connect (null, { get_user })(App);
