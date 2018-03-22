import React from 'react'

export default props => (
  <header className='page-header'>
      <h2>{props.name} <small> {props.small}</small> <p>{props.p}</p></h2>
  </header>
)