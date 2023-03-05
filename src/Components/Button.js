import React from 'react'
import "./ButtonSt.css"
export default function Button(props) {
  return (
    <button className='bttn'>
        {props.children}
    </button>
  )
}
