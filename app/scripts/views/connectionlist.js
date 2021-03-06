import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Connection from './connection'

export
default class ConnectionList extends Component {
  static displayName = 'ConnectionList';
  static propTypes = {
    peers: PropTypes.array
  };
  render () {
    const peers = this.props.peers || []

    return (
      <ul className='list-group'>
        {peers.map((peer, i) => {
          return <Connection {...peer} key={i} />
        })}
      </ul>
    )
  }
}
