import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom"


export default React.createClass({
  contextTypes: {
    router: React.PropTypes.object
  },

  handleSubmit(event) {
    event.preventDefault()
    const userName = event.target.elements[0].value
    const repo = event.target.elements[1].value
    const path = `/repos/${userName}/${repo}`
    this.context.router.push(path)
  },

  render() {
    return (
      <div>
        <h2>Pagina Repos</h2>
        <Link to="/repos/TATA/pelos">Facebook</Link>

      </div>
    )
  }
})
