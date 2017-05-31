import React, { Component } from 'react'
import './SpotifyUser.css'

class SpotifyUser extends Component {
  state = {
      user: { 
        display_name: '',
        followers: '',
        external_urls: ''
     }
    }

  constructor(props) {
    super(props)
    this.fetchUserData(props)
  }

  fetchUserData = (props) => {
    fetch(`https://api.spotify.com/v1/users/${props.match.params.user}`)
      .then(response => response.json())
      .then(user => this.setState({ user }))
  }

  componentWillReceiveProps(nextProps) {
    const locationChanged = (nextProps.location !== this.props.location)
    if (locationChanged) {
      this.fetchUserData(nextProps)
    }
  }

  render() {
    const { user } = this.state
    return (
      <div className="spotify-user">
            <h2>{user.id}</h2>
            <h3>name: {user.display_name}</h3>
.            <h3>followers: {user.followers}</h3>
            <a href={user.external_url} target="_">Link to {user.id}'s profile </a>
            </div>
    )
  }
}

export default SpotifyUser