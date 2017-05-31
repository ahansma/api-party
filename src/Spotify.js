import React, { Component } from 'react'
import  { Route } from 'react-router-dom'
import SpotifyUser from './SpotifyUser.js'
import './Spotify.css'


class Spotify extends Component {
    state = {
        user: '',
    }

    handleChange = (ev) => {
        const user = ev.currentTarget.value
        this.setState( { user })
    }

    handleSubmit = (ev) => {
        ev.preventDefault()
        this.props.history.push(`/spotify/${this.state.user}`)
    }

    render() {
        return (
            <div className="spotify">
                <img className="spotify-logo" src="http://kpcbweb2.s3.amazonaws.com/companies/329/logo/original/Spotify.jpg?1364424490" alt="spotify" />
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input 
                            type="text" 
                            value={this.state.username}
                            onChange={this.handleChange}
                         />
                    </div>
                    <div>
                        <button type="submit">Look up spotify user</button>
                    </div>
                </form>

                <Route path='/spotify/user' component={SpotifyUser} />

                <Route exact path='/spotify' render={() => (
                    <h3>Please enter a username to search on Spotify</h3>
                )}
                />
            </div>    
        )
    }

}

export default Spotify