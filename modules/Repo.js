import React from 'react'


export default function Repo(props) {
    return (
      <div>
        <h2>{props.match.params.param1}-{props.match.params.param2}</h2>
      </div>
    )
}
