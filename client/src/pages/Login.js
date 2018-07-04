import React, { Component } from 'react';

import SpotifyWebApi from 'spotify-web-api-js';
import { Link, Redirect } from 'react-router-dom';

const spotifyApi = new SpotifyWebApi();

class Login extends Component {
    
    constructor(){
        super();
        const params = this.getHashParams();
        const token = params.access_token;
        if (token) {
          spotifyApi.setAccessToken(token);
        }
        this.state = {
          loggedIn: token ? true : false,
        }
      }

    getHashParams() {
        var hashParams = {};
        var e, r = /([^&;=]+)=?([^&;]*)/g,
            q = window.location.hash.substring(1);
        e = r.exec(q)
        while (e) {
           hashParams[e[1]] = decodeURIComponent(e[2]);
           e = r.exec(q);
        }
        return hashParams;
      }

    render() {
        return (
            <div className="App">
                <a href='http://localhost:8888'> Login to Spotify </a>
                {
                    this.state.loggedIn && 
                    <Redirect to="/search"/>
                }
            </div>
        );
    }
}

export default Login;