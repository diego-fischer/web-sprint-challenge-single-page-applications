import React from 'react'

export default function Response(props) {
  return (
    <React.Fragment>
      <textarea value={`Name ${props.name}`} />

      <p>createdAt: {props.createdAt}</p>
      <p>Size: {props.size}</p>
      <p>Anchovies: {props.anchovies ? 'true' : 'fase'}</p>
      <p>Broccolini: {props.broccolini ? 'true' : 'fase'}</p>
      <p>Gorgonzola: {props.gorgonzola ? 'true' : 'fase'}</p>
      <p>Ham: {props.ham ? 'true' : 'fase'}</p>
      <p>Mushroom: {props.mushroom ? 'true' : 'fase'}</p>
      <p>Pepperoni: {props.pepperoni ? 'true' : 'fase'}</p>
      <p>Peppers: {props.peppers ? 'true' : 'fase'}</p>
      <p>Sausage: {props.sausage ? 'true' : 'fase'}</p>
      <p>Special: {props.special}</p>
    </React.Fragment>
  )
}
