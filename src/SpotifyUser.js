import React, { Component } from 'react'
import './SpotifyUser.css'

class SpotifyUser extends Component {
  state = {
      user: { 
        display_name: '',
        followers: '',
        external_url: ''
     }
    }

  constructor(props) {
    super(props)
    this.fetchUserData(props)
  }

  fetchUserData = (props) => {
    fetch(`https://api.spotify.com/v1/me/${props.match.params.user}`)
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
            <h2>{user.display_name}</h2>
            <h3>followers: {user.followers}</h3>
            <a href={user.external_url} target="_">Link to {user.display_name}'s profile </a>
            </div>
    )
  }
}

export default SpotifyUser