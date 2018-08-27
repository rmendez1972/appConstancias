import React from 'react'
import NavLink from './NavLink'

export default React.createClass({
  render() {
    return (
      <div>
        <h1>Usando React Router</h1>
        <ul role="nav">
          <li><NavLink to="/about" activeClassName="active">About</NavLink></li>
          <li><NavLink to="/repos" activeClassName="active">Repos</NavLink></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
})
