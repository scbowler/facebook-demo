import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import { Route } from 'react-router-dom';

import Nav from './nav';
import Home from './home';
import ChatLobby from './chat-lobby';

const App = () => (
    <div className="container">
        <Nav/>
        <Route exact path="/" component={Home}/>
        <Route path="/chat-lobby" component={ChatLobby}/>
    </div>
);

export default App;
